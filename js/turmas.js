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
            desafios: des.feitos || 0,
            topicos: Object.keys(caps).length,
            disciplinas: _resumoPorDisciplina(caps)
          };
        }).sort(function (a, b) { return b.xp - a.xp; }); // ranking por XP
      });
    });
  }

  /* ── RECURSOS (fichas por link), partilhados por todos ── */
  function recursos() {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('recursos').select('*').order('criado', { ascending: false })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  function adicionarRecurso(titulo, url, disciplina) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    titulo = (titulo || '').trim();
    url = (url || '').trim();
    if (!titulo) return Promise.reject(new Error('Dá um nome à ficha.'));
    if (!/^https?:\/\//i.test(url)) return Promise.reject(new Error('O link tem de começar por http:// ou https://'));
    var autor = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    return sb.from('recursos').insert({
      titulo: titulo, url: url, disciplina: (disciplina || '').trim() || null,
      autor: u.id, autor_nome: autor
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

  return {
    autoInscrever: autoInscrever,
    todosOsAlunos: todosOsAlunos,
    recursos: recursos,
    adicionarRecurso: adicionarRecurso,
    apagarRecurso: apagarRecurso,
    _resumoPorDisciplina: _resumoPorDisciplina,
    _disciplinaDeCap: _disciplinaDeCap
  };
})();
