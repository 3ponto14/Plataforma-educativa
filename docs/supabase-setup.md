# Ligação ao Supabase — guia de montagem

Objetivo: as contas de aluno guardarem progresso/streak/XP/conquistas na
nuvem, para seguirem o aluno em qualquer dispositivo. Login o mais simples
possível: **email + palavra-passe, sem confirmação de email**.

Modelo NÃO destrutivo: o progresso continua a guardar-se no dispositivo
(localStorage) como hoje; a nuvem é uma camada por cima. Sem login, tudo
funciona como antes.

---

## 1. Chaves (dadas pela dona)

No Supabase: ⚙️ Settings → API Keys → Publishable key.
- **Project URL:** `https://sojhpgmqpwaeaxvyzicd.supabase.co`
- **Publishable key:** `sb_publishable_M9PQNL8UMQ4UmTzdMbUlMg_p5ZxsIMw`

(O Supabase migrou de `anon public` para `sb_publishable_…`; é a mesma
função e é segura no front-end — "can be safely shared publicly".)
Estas chaves vivem em `js/cloud.js`.

## 2. Desligar confirmação de email (login sem fricção)

Supabase → Authentication → Providers → **Email**:
- Manter "Email" ativado.
- **Desligar** "Confirm email" (Confirm email = OFF) — o aluno regista-se e
  entra logo, sem ir ao correio.

## 3. SQL das tabelas (colar no SQL Editor → Run)

```sql
-- Tabela de progresso por utilizador (1 linha por aluno).
-- Guarda o "save" completo em JSON — espelha o que já existe no localStorage.
create table if not exists public.progresso (
  user_id    uuid references auth.users(id) on delete cascade primary key,
  dados      jsonb not null default '{}'::jsonb,   -- progresso geral (edupt_progress_v2)
  desafio    jsonb not null default '{}'::jsonb,   -- estado do desafio (edupt_desafio)
  ano        int,                                   -- ano escolhido (5..9)
  atualizado timestamptz not null default now()
);

-- Segurança: cada aluno só lê/escreve a SUA linha (Row Level Security).
alter table public.progresso enable row level security;

create policy "ler o próprio progresso"
  on public.progresso for select
  using (auth.uid() = user_id);

create policy "inserir o próprio progresso"
  on public.progresso for insert
  with check (auth.uid() = user_id);

create policy "atualizar o próprio progresso"
  on public.progresso for update
  using (auth.uid() = user_id);
```

## 3b. SQL das TURMAS (área do professor) — colar no SQL Editor → Run

```sql
-- TURMAS: cada turma pertence a um professor e tem um código curto.
create table if not exists public.turmas (
  id         uuid primary key default gen_random_uuid(),
  professor  uuid not null references auth.users(id) on delete cascade,
  nome       text not null,
  codigo     text not null unique,           -- ex.: 7A-K3F9 (o aluno usa para entrar)
  criado     timestamptz not null default now()
);

-- INSCRIÇÕES: ligação aluno ↔ turma (um aluno pode estar em várias turmas).
create table if not exists public.inscricoes (
  turma_id   uuid not null references public.turmas(id) on delete cascade,
  aluno      uuid not null references auth.users(id) on delete cascade,
  nome_aluno text,                            -- nome/email mostrado ao professor
  inscrito   timestamptz not null default now(),
  primary key (turma_id, aluno)
);

alter table public.turmas enable row level security;
alter table public.inscricoes enable row level security;

-- TURMAS: o professor gere as suas; qualquer autenticado pode LER uma turma
-- pelo código (necessário para o aluno entrar). Escrita só do dono.
create policy "prof gere turmas"      on public.turmas for all
  using (auth.uid() = professor) with check (auth.uid() = professor);
create policy "ler turma p/ entrar"   on public.turmas for select
  using (auth.role() = 'authenticated');

-- INSCRIÇÕES:
--  • o aluno inscreve-se a si próprio e vê as suas inscrições;
--  • o professor vê as inscrições das SUAS turmas.
create policy "aluno inscreve-se"     on public.inscricoes for insert
  with check (auth.uid() = aluno);
create policy "aluno vê as suas"      on public.inscricoes for select
  using (auth.uid() = aluno);
create policy "aluno sai da turma"    on public.inscricoes for delete
  using (auth.uid() = aluno);
create policy "prof vê inscrições"    on public.inscricoes for select
  using (exists (select 1 from public.turmas t where t.id = turma_id and t.professor = auth.uid()));

-- O professor precisa de ver o PROGRESSO dos alunos das suas turmas:
create policy "prof vê progresso da turma" on public.progresso for select
  using (exists (
    select 1 from public.inscricoes i
    join public.turmas t on t.id = i.turma_id
    where i.aluno = progresso.user_id and t.professor = auth.uid()
  ));
```

## 4. Do lado do código (feito pelo assistente)

- `js/cloud.js`: cliente Supabase (via CDN), login/registo/logout, e
  sincronização do progresso (merge nuvem ↔ dispositivo, fica o mais
  recente / o maior streak).
- Botão "Entrar / Criar conta" na topbar do portal; ao entrar, puxa o
  progresso da nuvem; ao ganhar XP/streak, envia para a nuvem.
- Mantém localStorage como fonte offline; nuvem é o backup que segue o
  aluno entre dispositivos.
