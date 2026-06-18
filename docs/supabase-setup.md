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

-- Coluna p/ a gamificação do "Momento do Professor" (🔥 ofensiva / ⭐ XP).
-- Segura e não destrutiva: só acrescenta a coluna se ainda não existir.
alter table public.progresso add column if not exists prof jsonb not null default '{}'::jsonb;

-- Coluna p/ o detalhe "O Meu Progresso" do 7.º ano (chaves edupt_cap1..8 e _fc
-- do motor legado, que antes ficavam só no dispositivo). Sem esta coluna, o XP
-- continua a sincronizar; só o detalhe por capítulo do mat7 não segue o aluno.
alter table public.progresso add column if not exists mat7 jsonb not null default '{}'::jsonb;
```

## 3k. APAGAR A PRÓPRIA CONTA (RGPD) — colar no SQL Editor → Run

Permite que cada utilizador apague a SUA conta e, em cascata, todos os
seus dados (progresso, tarefas, mensagens, sessões…). Função `security
definer` que só apaga o próprio (`auth.uid()`), nunca outra conta.

```sql
create or replace function public.apagar_minha_conta()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  -- só apaga a conta de quem está autenticado a chamar (o próprio)
  delete from auth.users where id = auth.uid();
  -- as tabelas com "on delete cascade" para auth.users limpam-se sozinhas
end;
$$;

revoke all on function public.apagar_minha_conta() from public;
grant execute on function public.apagar_minha_conta() to authenticated;
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

## 3c. SQL das TAREFAS (trabalho atribuído) — colar no SQL Editor → Run

Fase 1 das "turmas robustas": o professor atribui trabalho (com prazo) a
um aluno ou a todos; o aluno vê o que tem para fazer e marca como feito.

```sql
-- TAREFAS: cada tarefa é criada por um professor.
create table if not exists public.tarefas (
  id         uuid primary key default gen_random_uuid(),
  professor  uuid not null references auth.users(id) on delete cascade,
  prof_nome  text,
  titulo     text not null,
  instrucoes text,
  url        text,                 -- link opcional (ficha Drive, etc.)
  curso      text,                 -- atalho opcional p/ curso da plataforma (ex.: "mat7")
  curso_nome text,                 -- rótulo legível (ex.: "Matemática 7.º")
  prazo      date,                 -- prazo opcional
  para_aluno uuid references auth.users(id) on delete cascade, -- null = turma toda
  criado     timestamptz not null default now()
);

-- ESTADO por aluno (marca "concluído"). 1 linha por (tarefa, aluno).
create table if not exists public.tarefas_estado (
  tarefa_id  uuid not null references public.tarefas(id) on delete cascade,
  aluno      uuid not null references auth.users(id) on delete cascade,
  feito      boolean not null default true,
  feito_em   timestamptz not null default now(),
  primary key (tarefa_id, aluno)
);

alter table public.tarefas        enable row level security;
alter table public.tarefas_estado enable row level security;

-- TAREFAS:
--  • qualquer PROFESSOR cria e vê/gere as tarefas (espaço partilhado);
--  • o ALUNO vê as tarefas que são para ele (para_aluno = ele) OU para a
--    turma toda (para_aluno is null).
create policy "prof gere tarefas"     on public.tarefas for all
  using (public.eh_professor()) with check (public.eh_professor() and auth.uid() = professor);
create policy "aluno vê as suas"      on public.tarefas for select
  using (para_aluno is null or para_aluno = auth.uid());

-- ESTADO:
--  • o aluno marca/desmarca o SEU estado;
--  • o professor lê o estado de todos (para ver quem fez).
create policy "aluno marca o seu"     on public.tarefas_estado for insert
  with check (auth.uid() = aluno);
create policy "aluno atualiza o seu"  on public.tarefas_estado for update
  using (auth.uid() = aluno) with check (auth.uid() = aluno);
create policy "aluno apaga o seu"     on public.tarefas_estado for delete
  using (auth.uid() = aluno);
create policy "aluno vê o seu estado" on public.tarefas_estado for select
  using (auth.uid() = aluno);
create policy "prof vê estados"       on public.tarefas_estado for select
  using (public.eh_professor());
```

## 3j. SQL dos RESULTADOS de tarefa (nota + onde errou) — Run

Guarda o desempenho do aluno numa tarefa: pontuação e o detalhe pergunta
a pergunta. Fica a MELHOR tentativa (mais acertos). O professor vê.

```sql
create table if not exists public.tarefa_resultado (
  tarefa_id  uuid not null references public.tarefas(id) on delete cascade,
  aluno      uuid not null references auth.users(id) on delete cascade,
  aluno_nome text,
  certas     int  not null default 0,
  total      int  not null default 0,
  detalhe    jsonb,                         -- [{q, certo, resposta, correta}]
  entregue   timestamptz not null default now(),
  primary key (tarefa_id, aluno)
);
alter table public.tarefa_resultado enable row level security;

-- ALUNO grava/atualiza o SEU resultado e vê-o; PROFESSOR vê todos.
create policy "aluno grava resultado"  on public.tarefa_resultado for insert
  with check (auth.uid() = aluno);
create policy "aluno atualiza result"  on public.tarefa_resultado for update
  using (auth.uid() = aluno) with check (auth.uid() = aluno);
create policy "aluno vê o seu result"  on public.tarefa_resultado for select
  using (auth.uid() = aluno);
create policy "prof vê resultados"     on public.tarefa_resultado for select
  using (public.eh_professor());
```

## 3d. SQL dos GRUPOS (turmas a sério) — colar no SQL Editor → Run

Fase 2: o professor cria grupos ("9.º A", "Apoio Mat"); organiza alunos
(adiciona da lista) e/ou partilha um código para entrarem sozinhos. Um
aluno pode estar em vários grupos.

```sql
-- GRUPOS: criados por um professor, com um código curto para os alunos.
create table if not exists public.grupos (
  id         uuid primary key default gen_random_uuid(),
  professor  uuid not null references auth.users(id) on delete cascade,
  prof_nome  text,
  nome       text not null,
  codigo     text not null unique,    -- ex.: 9A-K3F9 (o aluno usa para entrar)
  criado     timestamptz not null default now()
);

-- MEMBROS: ligação aluno ↔ grupo (um aluno pode estar em vários grupos).
create table if not exists public.grupo_membros (
  grupo_id   uuid not null references public.grupos(id) on delete cascade,
  aluno      uuid not null references auth.users(id) on delete cascade,
  nome_aluno text,
  entrou     timestamptz not null default now(),
  primary key (grupo_id, aluno)
);

alter table public.grupos        enable row level security;
alter table public.grupo_membros enable row level security;

-- GRUPOS:
--  • qualquer PROFESSOR cria e gere os grupos (espaço partilhado);
--  • qualquer AUTENTICADO pode LER um grupo (preciso p/ o aluno entrar
--    pelo código e para ver o nome do grupo a que pertence).
create policy "prof gere grupos"      on public.grupos for all
  using (public.eh_professor()) with check (public.eh_professor() and auth.uid() = professor);
create policy "ler grupos"            on public.grupos for select
  using (auth.role() = 'authenticated');

-- MEMBROS:
--  • o PROFESSOR adiciona/remove e vê todos os membros;
--  • o ALUNO inscreve-se a si próprio (entrar por código), sai, e vê os
--    seus.
create policy "prof gere membros"     on public.grupo_membros for all
  using (public.eh_professor()) with check (public.eh_professor());
create policy "aluno entra"           on public.grupo_membros for insert
  with check (auth.uid() = aluno);
create policy "aluno sai"             on public.grupo_membros for delete
  using (auth.uid() = aluno);
create policy "aluno vê os seus"      on public.grupo_membros for select
  using (auth.uid() = aluno);
```

## 3e. SQL das MENSAGENS (avisos + feedback) — colar no SQL Editor → Run

Fase 4a: o professor manda avisos (a todos ou a um grupo) e feedback a um
aluno; o aluno vê no mural do Início.

```sql
-- MENSAGENS: aviso (geral/grupo) ou feedback a um aluno.
--   alcance = 'geral'  → para todos os alunos
--   alcance = 'grupo'  → grupo_id preenchido
--   alcance = 'aluno'  → para_aluno preenchido (feedback privado)
create table if not exists public.mensagens (
  id         uuid primary key default gen_random_uuid(),
  professor  uuid not null references auth.users(id) on delete cascade,
  prof_nome  text,
  alcance    text not null default 'geral',
  grupo_id   uuid references public.grupos(id) on delete cascade,
  para_aluno uuid references auth.users(id) on delete cascade,
  texto      text not null,
  criado     timestamptz not null default now()
);

alter table public.mensagens enable row level security;

-- MENSAGENS:
--  • qualquer PROFESSOR cria e gere (espaço partilhado);
--  • o ALUNO vê: avisos gerais; avisos dos grupos a que pertence; e o
--    feedback dirigido a si.
create policy "prof gere mensagens"   on public.mensagens for all
  using (public.eh_professor()) with check (public.eh_professor() and auth.uid() = professor);
create policy "aluno vê mensagens"    on public.mensagens for select
  using (
    alcance = 'geral'
    or (alcance = 'aluno' and para_aluno = auth.uid())
    or (alcance = 'grupo' and exists (
          select 1 from public.grupo_membros m
          where m.grupo_id = mensagens.grupo_id and m.aluno = auth.uid()))
  );
```

## 3f. SQL da CONVERSA (Fase 4b: aluno responde / manda dúvida) — Run

Acrescenta a possibilidade de o aluno responder a uma mensagem e abrir
dúvidas novas. As respostas/dúvidas vivem na MESMA tabela `mensagens`,
com `autor_tipo='aluno'`, `de_aluno` = quem escreveu e (quando é resposta)
`resposta_a` a apontar à mensagem-mãe. Por defeito vão para o professor da
mensagem original; uma dúvida livre (sem mãe) fica visível a todos os
professores.

```sql
-- Novas colunas (corre uma vez; "if not exists" evita erro se repetires).
alter table public.mensagens add column if not exists autor_tipo text not null default 'professor';
alter table public.mensagens add column if not exists de_aluno   uuid references auth.users(id) on delete cascade;
alter table public.mensagens add column if not exists de_nome    text;
alter table public.mensagens add column if not exists resposta_a uuid references public.mensagens(id) on delete cascade;
-- 'professor' deixa de ser obrigatório (dúvida livre não tem prof alvo).
alter table public.mensagens alter column professor drop not null;

-- ALUNO insere a SUA resposta/dúvida (autor_tipo='aluno' e de_aluno=ele).
create policy "aluno escreve" on public.mensagens for insert
  with check (auth.uid() = de_aluno and autor_tipo = 'aluno');

-- ALUNO vê também o que ELE escreveu (além do que já via).
create policy "aluno vê o que escreveu" on public.mensagens for select
  using (auth.uid() = de_aluno);

-- PROFESSOR vê as mensagens de alunos dirigidas a si OU as dúvidas
-- livres (sem professor alvo). (As que o próprio prof criou já as vê
-- pela policy "prof gere mensagens".)
create policy "prof vê respostas/dúvidas" on public.mensagens for select
  using (public.eh_professor() and autor_tipo = 'aluno'
         and (professor = auth.uid() or professor is null));
```

## 3g. CORREÇÃO de privacidade das mensagens — colar no SQL Editor → Run

A política `prof gere mensagens` (3e) usava `for all`, o que dava a
QUALQUER professor o direito de LER tudo — incluindo feedback privado e
respostas dirigidas a OUTRO professor. Esta correção separa a gestão
(escrita) da leitura, para um professor só ver o que lhe diz respeito.

```sql
-- Remove a política demasiado aberta.
drop policy if exists "prof gere mensagens" on public.mensagens;

-- Gestão (criar/editar/apagar): cada professor só mexe no que é seu.
create policy "prof cria mensagens"   on public.mensagens for insert
  with check (public.eh_professor() and auth.uid() = professor);
create policy "prof edita as suas"    on public.mensagens for update
  using (public.eh_professor() and auth.uid() = professor);
create policy "prof apaga as suas"    on public.mensagens for delete
  using (public.eh_professor() and auth.uid() = professor);

-- Leitura do professor: avisos gerais e de grupo (mural partilhado) +
-- tudo o que ENVOLVE este professor (criou, é o destinatário) + dúvidas
-- livres dos alunos. NÃO vê feedback/respostas privados de outro prof.
create policy "prof lê o que lhe toca" on public.mensagens for select
  using (public.eh_professor() and (
    alcance in ('geral','grupo')
    or professor = auth.uid()
    or (autor_tipo = 'aluno' and professor is null)
  ));
```

## 3h. SQL do REGISTO DE SESSÕES (diário por aluno) — colar no SQL Editor → Run

Centra as turmas no ALUNO: o professor regista o que trabalhou com cada
aluno (data/hora, disciplina, ficha, notas para o próximo prof). O
registo fica ligado a (aluno + grupo); só professores DO GRUPO (dono +
convidados) e o próprio aluno o veem.

```sql
-- PROFESSORES DE CADA GRUPO (dono + convidados).
create table if not exists public.grupo_professores (
  grupo_id  uuid not null references public.grupos(id) on delete cascade,
  prof      uuid not null references auth.users(id) on delete cascade,
  prof_nome text,
  papel     text not null default 'convidado',  -- 'dono' | 'convidado'
  desde     timestamptz not null default now(),
  primary key (grupo_id, prof)
);
alter table public.grupo_professores enable row level security;

-- Helper: o utilizador atual é professor deste grupo?
create or replace function public.e_prof_do_grupo(gid uuid) returns boolean
  language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.grupo_professores gp
                 where gp.grupo_id = gid and gp.prof = auth.uid());
$$;

-- grupo_professores: um professor do grupo gere a lista; cada prof vê as
-- linhas dos grupos onde está.
create policy "prof do grupo gere profs" on public.grupo_professores for all
  using (public.eh_professor() and public.e_prof_do_grupo(grupo_id))
  with check (public.eh_professor());
create policy "prof vê os seus grupos"   on public.grupo_professores for select
  using (prof = auth.uid());

-- SESSÕES: o diário de trabalho com cada aluno, dentro de um grupo.
create table if not exists public.sessoes (
  id         uuid primary key default gen_random_uuid(),
  grupo_id   uuid not null references public.grupos(id) on delete cascade,
  aluno      uuid not null references auth.users(id) on delete cascade,
  prof       uuid not null references auth.users(id) on delete cascade,
  prof_nome  text,
  quando     timestamptz not null default now(),
  disciplina text,
  material   text,
  notas      text,
  criado     timestamptz not null default now()
);
alter table public.sessoes enable row level security;

-- SESSÕES: professores DO GRUPO criam/editam/apagam e veem; o ALUNO vê
-- (só leitura) as suas sessões.
create policy "prof do grupo gere sessoes" on public.sessoes for all
  using (public.eh_professor() and public.e_prof_do_grupo(grupo_id))
  with check (public.eh_professor() and public.e_prof_do_grupo(grupo_id) and auth.uid() = prof);
create policy "aluno vê as suas sessoes"   on public.sessoes for select
  using (auth.uid() = aluno);
```

> Nota: grupos criados ANTES desta secção não têm o dono em
> `grupo_professores`. Ao abrir o grupo, o código garante a inscrição do
> criador como dono (auto-correção), por isso não é preciso mexer à mão.

## 3i. SQL dos DESTINATÁRIOS (ficha/trabalho para grupo ou aluno) — Run

Permite escolher PARA QUEM vai cada ficha e cada trabalho: um grupo ou um
aluno específico. As fichas passam a ser PRIVADAS ao destinatário (como
os avisos). Acaba o envio "para todos".

```sql
-- RECURSOS (fichas): destino por grupo ou aluno.
alter table public.recursos add column if not exists grupo_id   uuid references public.grupos(id) on delete cascade;
alter table public.recursos add column if not exists para_aluno uuid references auth.users(id) on delete cascade;

-- Substitui a leitura aberta dos recursos (era: qualquer autenticado vê).
drop policy if exists "ler recursos" on public.recursos;
-- Professor vê as suas fichas (cria/gere); aluno vê as fichas que são
-- para ele OU para um grupo a que pertence.
create policy "prof vê recursos"   on public.recursos for select
  using (public.eh_professor());
create policy "aluno vê recursos"  on public.recursos for select
  using (
    para_aluno = auth.uid()
    or (grupo_id is not null and exists (
          select 1 from public.grupo_membros m
          where m.grupo_id = recursos.grupo_id and m.aluno = auth.uid()))
  );

-- TAREFAS: já tem para_aluno; juntar grupo_id.
alter table public.tarefas add column if not exists grupo_id uuid references public.grupos(id) on delete cascade;

-- Atualiza a leitura do aluno: vê tarefa que é para ele OU para um grupo
-- a que pertence. (Substitui a regra antiga "para_aluno is null = todos".)
drop policy if exists "aluno vê as suas" on public.tarefas;
create policy "aluno vê tarefas" on public.tarefas for select
  using (
    para_aluno = auth.uid()
    or (grupo_id is not null and exists (
          select 1 from public.grupo_membros m
          where m.grupo_id = tarefas.grupo_id and m.aluno = auth.uid()))
  );
```

> Tarefas/avisos antigos com `para_aluno is null` e sem `grupo_id`
> deixam de ser visíveis aos alunos (já não há "para todos"). Se tiveres
> alguns de teste, podes apagá-los; os novos passam sempre com destino.

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
