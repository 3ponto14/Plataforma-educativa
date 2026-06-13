/* ════════════════════════════════════════════════════════════════
   turmas.js — Turmas (área do professor + entrar em turma do aluno)
   Usa o cliente Supabase do Cloud (cloud.js). Toda a segurança é
   garantida pelas políticas RLS no Supabase: o professor só vê as
   suas turmas e o progresso dos seus alunos; o aluno só se inscreve
   a si próprio.
   ════════════════════════════════════════════════════════════════ */

var Turmas = (function () {
  function _sb() { return (typeof Cloud !== 'undefined' && Cloud._sb) ? Cloud._sb() : null; }

  /* Código curto e legível: 2 letras do nome + 4 carateres aleatórios. */
  function _gerarCodigo(nome) {
    var base = (nome || 'T').replace(/[^A-Za-zÀ-ÿ0-9]/g, '').toUpperCase().slice(0, 3) || 'T';
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem 0/O/1/I para não confundir
    var s = '';
    for (var i = 0; i < 4; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
    return base + '-' + s;
  }

  /* ── Professor ── */
  function criar(nome) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    var codigo = _gerarCodigo(nome);
    return sb.from('turmas').insert({ professor: u.id, nome: nome, codigo: codigo })
      .select().single().then(function (res) {
        if (res.error) {
          // colisão rara de código → tenta outra vez
          if (/duplicate|unique/i.test(res.error.message || '')) return criar(nome);
          throw res.error;
        }
        return res.data;
      });
  }

  function minhasTurmas() {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.resolve([]);
    return sb.from('turmas').select('*').eq('professor', u.id).order('criado', { ascending: false })
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  function apagar(turmaId) {
    var sb = _sb();
    if (!sb) return Promise.reject(new Error('Sem ligação.'));
    return sb.from('turmas').delete().eq('id', turmaId);
  }

  /* Alunos de uma turma, com o progresso de cada um (nome, XP, streak, %). */
  function alunosDaTurma(turmaId) {
    var sb = _sb();
    if (!sb) return Promise.resolve([]);
    return sb.from('inscricoes').select('aluno, nome_aluno, inscrito').eq('turma_id', turmaId)
      .then(function (res) {
        var insc = res.error ? [] : (res.data || []);
        if (!insc.length) return [];
        var ids = insc.map(function (i) { return i.aluno; });
        return sb.from('progresso').select('user_id, dados, desafio').in('user_id', ids).then(function (p) {
          var prog = {};
          (p.data || []).forEach(function (row) { prog[row.user_id] = row; });
          return insc.map(function (i) {
            var d = (prog[i.aluno] && prog[i.aluno].dados) || {};
            var des = (prog[i.aluno] && prog[i.aluno].desafio) || {};
            var caps = d.caps || {};
            var nCaps = Object.keys(caps).length;
            return {
              aluno: i.aluno,
              nome: i.nome_aluno || '(aluno)',
              xp: d.totalXp || 0,
              streak: d.streak || 0,
              desafios: des.feitos || 0,
              capsAtivos: nCaps,
              inscrito: i.inscrito
            };
          }).sort(function (a, b) { return b.xp - a.xp; }); // ranking por XP
        });
      });
  }

  /* ── Aluno ── */
  function entrar(codigo) {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.reject(new Error('Inicia sessão.'));
    codigo = (codigo || '').trim().toUpperCase();
    if (!codigo) return Promise.reject(new Error('Escreve o código da turma.'));
    return sb.from('turmas').select('id, nome').eq('codigo', codigo).maybeSingle().then(function (res) {
      if (res.error) throw res.error;
      if (!res.data) throw new Error('Não existe nenhuma turma com esse código.');
      var turma = res.data;
      var nome = (u.email || '').split('@')[0];
      return sb.from('inscricoes').upsert(
        { turma_id: turma.id, aluno: u.id, nome_aluno: nome },
        { onConflict: 'turma_id,aluno' }
      ).then(function (r2) {
        if (r2.error) throw r2.error;
        return turma;
      });
    });
  }

  function minhasInscricoes() {
    var sb = _sb(); var u = Cloud.utilizador();
    if (!sb || !u) return Promise.resolve([]);
    return sb.from('inscricoes').select('turma_id, turmas(nome, codigo)').eq('aluno', u.id)
      .then(function (res) { return res.error ? [] : (res.data || []); });
  }

  return {
    criar: criar, minhasTurmas: minhasTurmas, apagar: apagar, alunosDaTurma: alunosDaTurma,
    entrar: entrar, minhasInscricoes: minhasInscricoes
  };
})();
