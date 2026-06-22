// ════════════════════════════════════════════════════════════════════════
// VALIDADOR DO 7.º ANO — motor diferente dos outros anos (cap1.js/buildExercicio,
// cap2.js/buildEx2, cap3.js/buildEx3 + bancos BANCO4..BANCO8). Mesmas regras
// de falha que validate-geradores.js. Carregado DEPOIS de:
//   _stubs.js + helpers shared.js + cap1.js + cap2.js + cap3.js + cap4..8.js
// (pelo runner). Os bancos e os build* já estão no escopo global.
// ════════════════════════════════════════════════════════════════════════

(function () {
  var limpa = (typeof _limpaMath === 'function') ? _limpaMath : function (s) { return s; };
  function strip(s) { return ('' + s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim(); }
  function dedup(a) { var u = {}, o = []; a.forEach(function (x) { var k = String(x).trim(); if (!u[k]) { u[k] = 1; o.push(x); } }); return o; }

  var erros = [];
  var nGeradas = 0;
  var REPS = 60;
  var difs = ['facil', 'medio', 'dificil'];
  var tipos = ['vf', 'mc', 'fill', 'contexto'];

  // Geradores procedurais: cap1 (buildExercicio, assinatura longa), cap2/3.
  var GENS = [
    { cap: 1, temas: ['1', '2', '3', '4', '5', '6'], call: function (gen, t, tp, dif) { return gen(t, tp, undefined, undefined, undefined, dif); } },
    { cap: 2, temas: ['1', '2', '3', '4', '5', '7', '8', '9'], call: function (gen, t, tp, dif) { return gen(t, tp, dif); } },
    { cap: 3, temas: ['1', '2', '3', '4', '5'], call: function (gen, t, tp, dif) { return gen(t, tp, dif); } }
  ];
  var gerFns = { 1: (typeof buildExercicio === 'function') ? buildExercicio : null, 2: (typeof buildEx2 === 'function') ? buildEx2 : null, 3: (typeof buildEx3 === 'function') ? buildEx3 : null };

  difs.forEach(function (dif) {
    GENS.forEach(function (G) {
      var gen = gerFns[G.cap];
      if (!gen) { erros.push('SEM-GERADOR cap' + G.cap); return; }
      G.temas.forEach(function (t) {
        tipos.forEach(function (tp) {
          for (var r = 0; r < REPS; r++) {
            var q;
            try { q = G.call(gen, t, tp, dif); } catch (e) { erros.push('EXCECAO cap' + G.cap + ' t' + t + ' ' + tp + ' ' + dif + ': ' + e); continue; }
            if (!q) continue;
            nGeradas++;
            if (q.enun) q.enun = limpa(q.enun);
            if (q.expl) q.expl = limpa(q.expl);
            var resp = q.resposta, tipo = q.tipo;
            if (resp === undefined || resp === null || resp === '') { erros.push('SEM-RESPOSTA cap' + G.cap + ' t' + t + ' ' + tp + ': ' + strip(q.enun || '').slice(0, 50)); continue; }
            if (tipo === 'vf' && !/^(V|F)$/.test(String(resp))) erros.push('VF-INVALIDA cap' + G.cap + ' t' + t + ': "' + resp + '" | ' + strip(q.enun || '').slice(0, 45));
            if (tipo === 'mc') {
              var ops = dedup((q.opcoes || []).map(function (o) { return limpa(o); })).map(String);
              if (ops.length < 2) erros.push('MC-POUCAS-OPCOES cap' + G.cap + ' t' + t);
              else if (ops.indexOf(String(resp)) < 0) erros.push('MC-RESP-FORA cap' + G.cap + ' t' + t + ': "' + resp + '" | ' + strip(q.enun || '').slice(0, 40));
            }
            var full = strip(q.enun || '') + ' ' + strip(q.expl || '');
            if (/undefined|NaN|null| 1x(?![0-9])|− -\d|\+ -\d|[×÷]\s*-\d/.test(full)) erros.push('NOTACAO-PARTIDA cap' + G.cap + ' t' + t + ' ' + tp + ': ' + full.slice(0, 55));
          }
        });
      });
    });
  });

  // Bancos BANCO4..BANCO8 (formato {enunciado/en, opts:['A) …'], correct/c}).
  [4, 5, 6, 7, 8].forEach(function (cap) {
    var B = this['BANCO' + cap];
    if (!B) { erros.push('SEM-BANCO cap' + cap); return; }
    function check(q, grupo) {
      var en = q.enunciado || q.en || '', opts = q.opts || q.opcoes || [], cor = q.correct || q.c || q.resposta;
      if (!en) { erros.push('BANCO-SEM-ENUN cap' + cap + ' ' + grupo); return; }
      if (cor === undefined || cor === null || cor === '') { erros.push('BANCO-SEM-RESP cap' + cap + ' ' + grupo + ': ' + strip(en).slice(0, 45)); return; }
      if (opts && opts.length) {
        var letras = opts.map(function (o) { var m = ('' + o).match(/^([A-D])\)/); return m ? m[1] : null; }).filter(Boolean);
        if (/^[A-D]$/.test(cor) && letras.indexOf(cor) < 0) erros.push('BANCO-RESP-FORA cap' + cap + ' ' + grupo + ': "' + cor + '" não está em [' + letras.join(',') + ']');
        var txts = opts.map(function (o) { return ('' + o).replace(/^[A-D]\)\s*/, '').trim(); });
        if (dedup(txts).length !== txts.length) erros.push('BANCO-OPCAO-DUP cap' + cap + ' ' + grupo + ': ' + strip(en).slice(0, 40));
      }
      var full = strip(en) + ' ' + opts.map(strip).join(' ');
      if (/undefined|NaN|null| 1x(?![0-9])|− -\d/.test(full)) erros.push('BANCO-NOTACAO cap' + cap + ' ' + grupo + ': ' + full.slice(0, 55));
    }
    if (B.questoes) B.questoes.forEach(function (q) { check(q, 'questoes'); });
    if (B.teste) B.teste.forEach(function (q) { check(q, 'teste'); });
    if (B.minitestes) Object.keys(B.minitestes).forEach(function (mk) { (B.minitestes[mk] || []).forEach(function (q) { check(q, 'mini' + mk); }); });
  }, this);

  var unicos = {};
  erros.forEach(function (e) { var key = e.split(':')[0]; unicos[key] = (unicos[key] || 0) + 1; });

  print('  7.º ano · ' + nGeradas + ' questões geradas e verificadas');
  if (erros.length === 0) {
    print('  ✓ OK — 0 problemas');
  } else {
    print('  ✗ ' + erros.length + ' PROBLEMAS:');
    Object.keys(unicos).sort().forEach(function (k) { print('    [' + unicos[k] + '] ' + k); });
    erros.slice(0, 12).forEach(function (e) { print('      • ' + e); });
    print('__VALIDATION_FAILED__ ano=7');
  }
})();
