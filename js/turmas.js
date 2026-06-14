/* ════════════════════════════════════════════════════════════════
   turmas.js — Apoio ao Estudo (espaço PARTILHADO)
   Modelo (decidido com a dona): um único espaço "Apoio ao Estudo".
     • Os alunos entram automaticamente ao criar conta (auto-inscrição).
     • TODOS os professores veem TODOS os alunos (são colegas; um aluno
       pode ter vários professores). Lista única, pesquisável.
     • Recursos (fichas) partilhados por LINK (Drive, etc.) — não se
       guardam ficheiros, só o endereço. Qualquer professor adiciona;
       todos os alunos veem.
   Segurança garantida pelas políticas RLS no Supabase (ver
   docs/supabase-setup.md): só professores leem a lista de alunos e o
   progresso; alunos só inscrevem/veem a si próprios e leem recursos.
   ════════════════════════════════════════════════════════════════ */

var Turmas = (function () {
  function _sb() { return (typeof Cloud !== 'undefined' && Cloud._sb) ? Cloud._sb() : null; }

  /* ── Classificação de um capId numa DISCIPLINA legível ──
     Os IDs de progresso trazem o ano/disciplina no prefixo:
       mat7cap3, mat8cap1, m8cap2, port7, port9, cap1 (mat7 legado)… */
  function _disciplinaDeCap(capId) {
    var id = String(capId || '');
    var m;
    if ((m = id.match(/^mat(\d+)/i)) || (m = id.match(/^m(\d+)cap/i))) return 'Matemática ' + m[1] + '.º';
    if ((m = id.match(/^port(\d+)/i)) || (m = id.match(/^p(\d+)cap/i))) return 'Português ' + m[1] + '.º';
    if (/^cap\d/i.test(id)) return 'Matemática 7.º';          // mat7 legado (cap1..cap8)
    if (/exame|prova/i.test(id)) return 'Exames';
    return 'Outros';
  }

  /* Agrupa os caps de um aluno por disciplina, somando XP e contando
     atividades. Devolve [{disciplina, xp, topicos}] ordenado por XP. */
  function _resumoPorDisciplina(caps) {
    caps = caps || {};
    var por = {};
    Object.keys(caps).forEach(function (id) {
      var disc = _disciplinaDeCap(id);
      var c = caps[id] || {};
      if (!por[disc]) por[disc] = { disciplina: disc, xp: 0, topicos: 0 };
      por[disc].xp += (c.xp || 0);
      por[disc].topicos += 1;
    });
    return Object.keys(por).map(function (k) { return por[k]; })
      .sort(function (a, b) { return b.xp - a.xp; });
  }

  /* "Onde erra mais": capítulos onde o aluno já tentou quizzes mas tem a
     melhor pontuação mais baixa (< 70%). Devolve até 3, do pior para o
     melhor, com a disciplina a que pertencem. */
  function _pontosFracos(caps) {
    caps = caps || {};
    var lista = [];
    Object.keys(caps).forEach(function (id) {
      var c = caps[id] || {};
      var q = c.quiz || {};
      if ((q.tentativas || 0) > 0 && (q.melhorPct || 0) < 70) {
        lista.push({ cap: id, disciplina: _disciplinaDeCap(id), pct: q.melhorPct || 0, tentativas: q.tentativas });
      }
    });
    lista.sort(function (a, b) { return a.pct - b.pct; });
    return lista.slice(0, 3);
  }

  /* ── ALUNO: auto-inscrição no Apoio ao Estudo ──
     Chamado no login. Idempotente (upsert). Guarda o nome/email para o
     professor identificar o aluno. Só inscreve contas de ALUNO. */
  function autoInscrever() {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.resolve();
    if (typeof Cloud.ehProfessor === 'function' && Cloud.ehProfessor()) return Promise.resolve();
    var nome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    return sb.from('apoio_alunos').upsert(
      { aluno: u.id, nome_aluno: nome, email: u.email || null },
      { onConflict: 'aluno' }
    ).then(function (r) { return r; }).catch(function () {});
  }

  /* ── PROFESSOR: lista única de todos os alunos do Apoio ao Estudo ──
     Cada aluno vem com totais (XP, ofensiva, desafios) e o resumo por
     disciplina, para o professor ver "o que ele andou a fazer". */
  function todosOsAlunos() {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('apoio_alunos').select('aluno, nome_aluno, email').then(function (res) {
      var lista = res.error ? [] : (res.data || []);
      if (!lista.length) return [];
      var ids = lista.map(function (a) { return a.aluno; });
      return sb.from('progresso').select('user_id, dados, desafio').in('user_id', ids).then(function (p) {
        var prog = {};
        (p.data || []).forEach(function (row) { prog[row.user_id] = row; });
        return lista.map(function (a) {
          var d = (prog[a.aluno] && prog[a.aluno].dados) || {};
          var des = (prog[a.aluno] && prog[a.aluno].desafio) || {};
          var caps = d.caps || {};
          return {
            aluno: a.aluno,
            nome: a.nome_aluno || (a.email || '').split('@')[0] || '(aluno)',
            email: a.email || '',
            xp: d.totalXp || 0,
            streak: d.streak || 0,
            lastDay: d.lastDay || null,
            desafios: des.feitos || 0,
            topicos: Object.keys(caps).length,
            disciplinas: _resumoPorDisciplina(caps),
            caps: caps,                          // bruto, para "onde erra mais"
            dificuldades: _pontosFracos(caps)    // capítulos com pior quiz
          };
        }).sort(function (a, b) { return b.xp - a.xp; }); // ranking por XP
      });
    });
  }

  /* ── RECURSOS (fichas por link), por grupo ou aluno ── */
  function recursos() {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('recursos').select('*, grupos(nome)').order('criado', { ascending: false })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* Adiciona uma ficha. dest = {grupoId, paraAluno} — obrigatório um dos
     dois (a ficha é privada ao destinatário). */
  function adicionarRecurso(titulo, url, disciplina, dest) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    titulo = (titulo || '').trim();
    url = (url || '').trim();
    dest = dest || {};
    if (!titulo) return Promise.reject(new Error('Dá um nome à ficha.'));
    if (!/^https?:\/\//i.test(url)) return Promise.reject(new Error('O link tem de começar por http:// ou https://'));
    if (!dest.grupoId && !dest.paraAluno) return Promise.reject(new Error('Escolhe para quem é a ficha (um grupo ou um aluno).'));
    var autor = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    return sb.from('recursos').insert({
      titulo: titulo, url: url, disciplina: (disciplina || '').trim() || null,
      autor: u.id, autor_nome: autor,
      grupo_id: dest.grupoId || null, para_aluno: dest.paraAluno || null
    }).select().single().then(function (r) {
      if (r.error) throw r.error;
      return r.data;
    });
  }

  function apagarRecurso(id) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('recursos').delete().eq('id', id);
  }

  /* ════════════ TAREFAS (trabalho atribuído) ════════════ */

  /* PROFESSOR cria uma tarefa. opts: {titulo, instrucoes, url, curso,
     cursoNome, prazo, paraAluno}. paraAluno null/undefined = turma toda. */
  function criarTarefa(opts) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    opts = opts || {};
    var titulo = (opts.titulo || '').trim();
    if (!titulo) return Promise.reject(new Error('Dá um título à tarefa.'));
    var url = (opts.url || '').trim();
    if (url && !/^https?:\/\//i.test(url)) return Promise.reject(new Error('O link tem de começar por http:// ou https://'));
    if (!opts.grupoId && !opts.paraAluno) return Promise.reject(new Error('Escolhe para quem é o trabalho (um grupo ou um aluno).'));
    var profNome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    return sb.from('tarefas').insert({
      professor: u.id, prof_nome: profNome, titulo: titulo,
      instrucoes: (opts.instrucoes || '').trim() || null,
      url: url || null,
      curso: (opts.curso || '').trim() || null,
      curso_nome: (opts.cursoNome || '').trim() || null,
      prazo: opts.prazo || null,
      grupo_id: opts.grupoId || null,
      para_aluno: opts.paraAluno || null
    }).select().single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }

  function apagarTarefa(id) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('tarefas').delete().eq('id', id);
  }

  /* PROFESSOR: todas as tarefas (mais recentes primeiro). */
  function tarefasDoProf() {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('tarefas').select('*').order('criado', { ascending: false })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* PROFESSOR: quem já marcou uma tarefa como feita (lista de alunos). */
  function quemFez(tarefaId) {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('tarefas_estado').select('aluno, feito_em').eq('tarefa_id', tarefaId).eq('feito', true)
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* ALUNO: as tarefas que lhe dizem respeito (dele + da turma), já com o
     estado "feito". Ordenadas por prazo (as com prazo primeiro). */
  function tarefasDoAluno() {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.resolve([]);
    return sb.from('tarefas').select('*').order('criado', { ascending: false }).then(function (res) {
      var ts = res.error ? [] : (res.data || []);
      if (!ts.length) return [];
      return sb.from('tarefas_estado').select('tarefa_id, feito').eq('aluno', u.id).then(function (e) {
        var feito = {};
        (e.data || []).forEach(function (row) { if (row.feito) feito[row.tarefa_id] = true; });
        ts.forEach(function (t) { t.feito = !!feito[t.id]; });
        // ordena: por fazer primeiro, depois por prazo
        ts.sort(function (a, b) {
          if (a.feito !== b.feito) return a.feito ? 1 : -1;
          return (a.prazo || '9999') < (b.prazo || '9999') ? -1 : 1;
        });
        return ts;
      });
    });
  }

  /* ALUNO marca/desmarca uma tarefa como feita. */
  function marcarTarefa(tarefaId, feita) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    if (feita === false) {
      return sb.from('tarefas_estado').delete().eq('tarefa_id', tarefaId).eq('aluno', u.id);
    }
    return sb.from('tarefas_estado').upsert(
      { tarefa_id: tarefaId, aluno: u.id, feito: true, feito_em: new Date().toISOString() },
      { onConflict: 'tarefa_id,aluno' }
    );
  }

  /* PROFESSOR: resumo de tarefas de um aluno {total, feitas}. Conta as
     tarefas que lhe dizem respeito (turma toda + dele) e quantas marcou. */
  function resumoTarefasAluno(alunoId) {
    var sb = _sb();
    if (!sb) return Promise.resolve({ total: 0, feitas: 0 });
    return sb.from('tarefas').select('id, para_aluno').then(function (res) {
      var ts = (res.error ? [] : (res.data || [])).filter(function (t) {
        return !t.para_aluno || t.para_aluno === alunoId;
      });
      var total = ts.length;
      if (!total) return { total: 0, feitas: 0 };
      return sb.from('tarefas_estado').select('tarefa_id').eq('aluno', alunoId).eq('feito', true).then(function (e) {
        var ids = {}; (e.data || []).forEach(function (r) { ids[r.tarefa_id] = 1; });
        var feitas = 0; ts.forEach(function (t) { if (ids[t.id]) feitas++; });
        return { total: total, feitas: feitas };
      });
    });
  }

  /* Nº de tarefas por fazer do aluno (para o badge no Início). */
  function tarefasPendentes() {
    return tarefasDoAluno().then(function (ts) {
      var n = 0; ts.forEach(function (t) { if (!t.feito) n++; }); return n;
    });
  }

  /* ════════════ GRUPOS (turmas a sério) ════════════ */

  /* Código curto e legível: 2-3 letras do nome + 4 carateres aleatórios. */
  function _gerarCodigo(nome) {
    var base = (nome || 'G').replace(/[^A-Za-zÀ-ÿ0-9]/g, '').toUpperCase().slice(0, 3) || 'G';
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem 0/O/1/I
    var s = '';
    for (var i = 0; i < 4; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
    return base + '-' + s;
  }

  function _meuNome() {
    var u = Cloud.utilizador();
    return (typeof Cloud.nome === 'function' ? Cloud.nome() : ((u && u.email) || '').split('@')[0]);
  }

  /* PROFESSOR cria um grupo (com código automático). Fica como DONO em
     grupo_professores. */
  function criarGrupo(nome) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    nome = (nome || '').trim();
    if (!nome) return Promise.reject(new Error('Dá um nome ao grupo.'));
    var profNome = _meuNome();
    var codigo = _gerarCodigo(nome);
    return sb.from('grupos').insert({ professor: u.id, prof_nome: profNome, nome: nome, codigo: codigo })
      .select().single().then(function (r) {
        if (r.error) {
          if (/duplicate|unique/i.test(r.error.message || '')) return criarGrupo(nome); // colisão rara
          throw r.error;
        }
        // regista o criador como professor-dono do grupo (best-effort)
        return sb.from('grupo_professores').upsert(
          { grupo_id: r.data.id, prof: u.id, prof_nome: profNome, papel: 'dono' },
          { onConflict: 'grupo_id,prof' }
        ).then(function () { return r.data; }).catch(function () { return r.data; });
      });
  }

  function apagarGrupo(id) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('grupos').delete().eq('id', id);
  }

  /* PROFESSOR: todos os grupos (espaço partilhado). */
  function todosOsGrupos() {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('grupos').select('*').order('criado', { ascending: false })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* Membros de um grupo (com nome). */
  function alunosDoGrupo(grupoId) {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('grupo_membros').select('aluno, nome_aluno, entrou').eq('grupo_id', grupoId)
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* PROFESSOR adiciona um aluno (da lista) a um grupo. */
  function adicionarAoGrupo(grupoId, alunoId, nomeAluno) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('grupo_membros').upsert(
      { grupo_id: grupoId, aluno: alunoId, nome_aluno: nomeAluno || null },
      { onConflict: 'grupo_id,aluno' }
    );
  }

  /* PROFESSOR remove um aluno de um grupo. */
  function removerDoGrupo(grupoId, alunoId) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('grupo_membros').delete().eq('grupo_id', grupoId).eq('aluno', alunoId);
  }

  /* ALUNO entra num grupo pelo código. */
  function entrarPorCodigo(codigo) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    codigo = (codigo || '').trim().toUpperCase();
    if (!codigo) return Promise.reject(new Error('Escreve o código do grupo.'));
    return sb.from('grupos').select('id, nome').eq('codigo', codigo).maybeSingle().then(function (res) {
      if (res.error) throw res.error;
      if (!res.data) throw new Error('Não existe nenhum grupo com esse código.');
      var g = res.data;
      var nome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
      return sb.from('grupo_membros').upsert(
        { grupo_id: g.id, aluno: u.id, nome_aluno: nome },
        { onConflict: 'grupo_id,aluno' }
      ).then(function (r2) { if (r2.error) throw r2.error; return g; });
    });
  }

  /* ALUNO: os grupos a que pertence (com nome do grupo). */
  function gruposDoAluno() {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.resolve([]);
    return sb.from('grupo_membros').select('grupo_id, grupos(nome, codigo, prof_nome)').eq('aluno', u.id)
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* ALUNO sai de um grupo. */
  function sairDoGrupo(grupoId) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    return sb.from('grupo_membros').delete().eq('grupo_id', grupoId).eq('aluno', u.id);
  }

  /* ════════ PROFESSORES DO GRUPO + REGISTO DE SESSÕES ════════ */

  /* Garante que o utilizador atual está em grupo_professores deste grupo
     (auto-corrige grupos antigos: quem o criou entra como dono). */
  function garantirProfDoGrupo(grupo) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u || !grupo) return Promise.resolve();
    var papel = (grupo.professor === u.id) ? 'dono' : 'convidado';
    return sb.from('grupo_professores').upsert(
      { grupo_id: grupo.id, prof: u.id, prof_nome: _meuNome(), papel: papel },
      { onConflict: 'grupo_id,prof' }
    ).then(function (r) { return r; }).catch(function () {});
  }

  /* Lista de professores de um grupo. */
  function profsDoGrupo(grupoId) {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('grupo_professores').select('prof, prof_nome, papel').eq('grupo_id', grupoId)
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* Convidar outro professor para o grupo, pelo email. Procura o aluno/
     conta? Não temos lookup por email no client — por isso o convite é
     feito com o ID. Em alternativa simples: o professor convidado entra
     pelo CÓDIGO do grupo (ver entrarComoProf). Mantém-se esta função para
     quando houver lookup. */
  function entrarComoProf(codigo) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    codigo = (codigo || '').trim().toUpperCase();
    if (!codigo) return Promise.reject(new Error('Escreve o código do grupo.'));
    return sb.from('grupos').select('id, nome, professor').eq('codigo', codigo).maybeSingle().then(function (res) {
      if (res.error) throw res.error;
      if (!res.data) throw new Error('Não existe nenhum grupo com esse código.');
      var g = res.data;
      return sb.from('grupo_professores').upsert(
        { grupo_id: g.id, prof: u.id, prof_nome: _meuNome(), papel: 'convidado' },
        { onConflict: 'grupo_id,prof' }
      ).then(function (r2) { if (r2.error) throw r2.error; return g; });
    });
  }

  /* Grupos onde o utilizador é PROFESSOR (para a vista do professor). */
  function gruposDoProf() {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.resolve([]);
    return sb.from('grupo_professores').select('grupo_id, papel, grupos(id, nome, codigo, professor, prof_nome)').eq('prof', u.id)
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* Criar um registo de sessão com um aluno (dentro de um grupo).
     opts: {grupoId, aluno, quando(ISO), disciplina, material, notas}. */
  function criarSessao(opts) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    opts = opts || {};
    if (!opts.grupoId) return Promise.reject(new Error('Falta o grupo.'));
    if (!opts.aluno) return Promise.reject(new Error('Falta o aluno.'));
    if (!(opts.disciplina || opts.material || opts.notas)) return Promise.reject(new Error('Escreve pelo menos a disciplina, o material ou as notas.'));
    return sb.from('sessoes').insert({
      grupo_id: opts.grupoId, aluno: opts.aluno, prof: u.id, prof_nome: _meuNome(),
      quando: opts.quando || new Date().toISOString(),
      disciplina: (opts.disciplina || '').trim() || null,
      material: (opts.material || '').trim() || null,
      notas: (opts.notas || '').trim() || null
    }).select().single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }

  function apagarSessao(id) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('sessoes').delete().eq('id', id);
  }

  /* Histórico de sessões de um aluno (mais recentes primeiro). Opcional:
     filtrar por grupo. Funciona para professor (do grupo) e para o aluno. */
  function sessoesDoAluno(alunoId, grupoId) {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    var q = sb.from('sessoes').select('*, grupos(nome)').eq('aluno', alunoId);
    if (grupoId) q = q.eq('grupo_id', grupoId);
    return q.order('quando', { ascending: false }).then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* ALUNO: as suas próprias sessões (para o seu registo). */
  function minhasSessoes() {
    var u = Cloud.utilizador();
    if (!u) return Promise.resolve([]);
    return sessoesDoAluno(u.id, null);
  }

  /* ════════════ MENSAGENS (avisos + feedback) ════════════ */

  /* PROFESSOR envia. opts: {texto, alcance:'geral'|'grupo'|'aluno',
     grupoId, paraAluno, respostaA}. respostaA liga a resposta do prof à
     mensagem do aluno (conversa). */
  function enviarMensagem(opts) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    opts = opts || {};
    var texto = (opts.texto || '').trim();
    if (!texto) return Promise.reject(new Error('Escreve a mensagem.'));
    var alcance = opts.alcance || 'geral';
    var profNome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    return sb.from('mensagens').insert({
      professor: u.id, prof_nome: profNome, alcance: alcance, autor_tipo: 'professor',
      grupo_id: alcance === 'grupo' ? (opts.grupoId || null) : null,
      para_aluno: alcance === 'aluno' ? (opts.paraAluno || null) : null,
      resposta_a: opts.respostaA || null,
      texto: texto
    }).select().single().then(function (r) { if (r.error) throw r.error; return r.data; });
  }

  function apagarMensagem(id) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('mensagens').delete().eq('id', id);
  }

  /* PROFESSOR: as mensagens que enviou (mais recentes primeiro). */
  function mensagensDoProf() {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('mensagens').select('*, grupos(nome)').order('criado', { ascending: false })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* ALUNO: o seu mural (avisos gerais + dos seus grupos + feedback a si +
     o que ele próprio escreveu). A RLS filtra; aqui só ordena. */
  function muralDoAluno() {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.resolve([]);
    return sb.from('mensagens').select('*, grupos(nome)').order('criado', { ascending: true })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* ALUNO responde a uma mensagem do professor. Vai para o professor
     dessa mensagem (msg.professor). */
  function responder(msg, texto) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    texto = (texto || '').trim();
    if (!texto) return Promise.reject(new Error('Escreve a resposta.'));
    var nome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    return sb.from('mensagens').insert({
      autor_tipo: 'aluno', de_aluno: u.id, de_nome: nome,
      professor: msg.professor || null, resposta_a: msg.id,
      alcance: 'resposta', texto: texto
    }).then(function (r) { if (r.error) throw r.error; return r; });
  }

  /* ALUNO abre uma dúvida nova (sem mensagem-mãe → visível a todos os
     professores). */
  function criarDuvida(texto) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    texto = (texto || '').trim();
    if (!texto) return Promise.reject(new Error('Escreve a dúvida.'));
    var nome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    return sb.from('mensagens').insert({
      autor_tipo: 'aluno', de_aluno: u.id, de_nome: nome,
      professor: null, resposta_a: null, alcance: 'duvida', texto: texto
    }).then(function (r) { if (r.error) throw r.error; return r; });
  }

  /* PROFESSOR: a conversa com UM aluno específico — o feedback que lhe
     deu (para_aluno = aluno) + as respostas/dúvidas que o aluno escreveu
     (de_aluno = aluno). A RLS garante que só vê o que lhe diz respeito.
     Ordem cronológica (antigas primeiro), para ler como conversa. */
  function conversaComAluno(alunoId) {
    var sb = _sb();
    if (!sb || !alunoId) return Promise.resolve([]);
    return sb.from('mensagens').select('*')
      .or('para_aluno.eq.' + alunoId + ',de_aluno.eq.' + alunoId)
      .order('criado', { ascending: true })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  /* PROFESSOR: respostas e dúvidas escritas por alunos (para si ou
     livres). Mais recentes primeiro. Cada uma traz `respondido` = true
     se já existe uma resposta do professor a ela (resposta_a = id). */
  function respostasDeAlunos() {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('mensagens').select('*').order('criado', { ascending: false }).then(function (res) {
      var todas = res.error ? [] : (res.data || []);
      // ids de mensagens de aluno que JÁ têm uma resposta do professor
      var respondidos = {};
      todas.forEach(function (m) {
        if (m.autor_tipo !== 'aluno' && m.resposta_a) respondidos[m.resposta_a] = true;
      });
      var doAluno = todas.filter(function (m) { return m.autor_tipo === 'aluno'; });
      doAluno.forEach(function (m) { m.respondido = !!respondidos[m.id]; });
      return doAluno;
    });
  }

  return {
    enviarMensagem: enviarMensagem, apagarMensagem: apagarMensagem,
    mensagensDoProf: mensagensDoProf, muralDoAluno: muralDoAluno,
    responder: responder, criarDuvida: criarDuvida, respostasDeAlunos: respostasDeAlunos,
    conversaComAluno: conversaComAluno,
    criarGrupo: criarGrupo, apagarGrupo: apagarGrupo, todosOsGrupos: todosOsGrupos,
    alunosDoGrupo: alunosDoGrupo, adicionarAoGrupo: adicionarAoGrupo, removerDoGrupo: removerDoGrupo,
    entrarPorCodigo: entrarPorCodigo, gruposDoAluno: gruposDoAluno, sairDoGrupo: sairDoGrupo,
    garantirProfDoGrupo: garantirProfDoGrupo, profsDoGrupo: profsDoGrupo,
    entrarComoProf: entrarComoProf, gruposDoProf: gruposDoProf,
    criarSessao: criarSessao, apagarSessao: apagarSessao,
    sessoesDoAluno: sessoesDoAluno, minhasSessoes: minhasSessoes,
    criarTarefa: criarTarefa, apagarTarefa: apagarTarefa,
    tarefasDoProf: tarefasDoProf, quemFez: quemFez,
    tarefasDoAluno: tarefasDoAluno, marcarTarefa: marcarTarefa,
    tarefasPendentes: tarefasPendentes, resumoTarefasAluno: resumoTarefasAluno,
    autoInscrever: autoInscrever,
    todosOsAlunos: todosOsAlunos,
    recursos: recursos,
    adicionarRecurso: adicionarRecurso,
    apagarRecurso: apagarRecurso,
    _resumoPorDisciplina: _resumoPorDisciplina,
    _disciplinaDeCap: _disciplinaDeCap
  };
})();
