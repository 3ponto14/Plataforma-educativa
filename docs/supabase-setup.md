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

## 3b. SQL do APOIO AO ESTUDO (espaço partilhado) — colar no SQL Editor → Run

Modelo (decidido com a dona): **um único espaço partilhado**. Os alunos
entram automaticamente ao criar conta; **todos os professores veem todos
os alunos** (são colegas — um aluno pode ter vários professores). As
fichas partilham-se por **link** (não se guardam ficheiros).

A distinção professor/aluno vem dos metadados da conta (`tipo`), que o
registo já grava. Nas políticas usamos `auth.jwt()` para ler esse tipo.

> Se já tinhas corrido a versão antiga (tabelas `turmas`/`inscricoes`),
> podes deixá-las — não são usadas. Para limpar:
> `drop table if exists public.inscricoes; drop table if exists public.turmas;`

```sql
-- Função auxiliar: a conta atual é de professor?
create or replace function public.eh_professor() returns boolean
  language sql stable as $$
  select coalesce((auth.jwt() -> 'user_metadata' ->> 'tipo') = 'professor', false);
$$;

-- APOIO_ALUNOS: registo de cada aluno no espaço (auto-inscrição no login).
create table if not exists public.apoio_alunos (
  aluno      uuid primary key references auth.users(id) on delete cascade,
  nome_aluno text,
  email      text,
  inscrito   timestamptz not null default now()
);

-- RECURSOS: fichas partilhadas por LINK (qualquer professor adiciona).
create table if not exists public.recursos (
  id         uuid primary key default gen_random_uuid(),
  titulo     text not null,
  url        text not null,
  disciplina text,
  autor      uuid not null references auth.users(id) on delete cascade,
  autor_nome text,
  criado     timestamptz not null default now()
);

alter table public.apoio_alunos enable row level security;
alter table public.recursos     enable row level security;

-- APOIO_ALUNOS:
--  • o aluno inscreve-se/atualiza a SI próprio;
--  • qualquer PROFESSOR lê a lista toda (vê todos os alunos).
create policy "aluno inscreve-se"     on public.apoio_alunos for insert
  with check (auth.uid() = aluno);
create policy "aluno atualiza-se"     on public.apoio_alunos for update
  using (auth.uid() = aluno) with check (auth.uid() = aluno);
create policy "aluno vê o seu"        on public.apoio_alunos for select
  using (auth.uid() = aluno);
create policy "prof vê alunos todos"  on public.apoio_alunos for select
  using (public.eh_professor());

-- RECURSOS (fichas/links):
--  • qualquer autenticado LÊ (alunos veem as fichas);
--  • só PROFESSORES adicionam; cada professor remove o que adicionou.
create policy "ler recursos"          on public.recursos for select
  using (auth.role() = 'authenticated');
create policy "prof adiciona"         on public.recursos for insert
  with check (public.eh_professor() and auth.uid() = autor);
create policy "autor remove"          on public.recursos for delete
  using (auth.uid() = autor);

-- PROGRESSO: qualquer PROFESSOR vê o progresso de qualquer aluno do
-- Apoio ao Estudo (para ver "o que ele andou a fazer").
create policy "prof vê progresso apoio" on public.progresso for select
  using (public.eh_professor() and exists (
    select 1 from public.apoio_alunos a where a.aluno = progresso.user_id
  ));
```

### Nota de segurança (honesta)

A distinção professor/aluno está nos metadados da conta (`tipo`), que
tecnicamente o próprio utilizador pode alterar via API. Ou seja, um aluno
com conhecimentos técnicos *poderia* marcar-se como "professor" e ver a
lista de alunos (nomes + XP/ofensiva — não há dados sensíveis nem
contactos privados além do email do registo). Para um espaço escolar de
Apoio ao Estudo isto é aceitável.

**Se um dia quiseres blindar isto a 100%:** cria uma tabela `professores`
(uuid → true) gerida só por ti no Supabase, e troca a função
`eh_professor()` para verificar essa tabela em vez do metadado. Fica para
quando precisares — não é urgente.

## 4. Do lado do código (feito pelo assistente)

- `js/cloud.js`: cliente Supabase (via CDN), login/registo/logout, e
  sincronização do progresso (merge nuvem ↔ dispositivo, fica o mais
  recente / o maior streak).
- Botão "Entrar / Criar conta" na topbar do portal; ao entrar, puxa o
  progresso da nuvem; ao ganhar XP/streak, envia para a nuvem.
- Mantém localStorage como fonte offline; nuvem é o backup que segue o
  aluno entre dispositivos.
