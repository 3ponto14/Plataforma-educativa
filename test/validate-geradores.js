// ════════════════════════════════════════════════════════════════════════
// VALIDADOR DE GERADORES — corre todos os exercícios de um ano (matN) e
// FALHA (exit 1) se encontrar um bug estrutural que um aluno apanharia:
//
//   • SEM-RESPOSTA       — exercício sem campo resposta
//   • MC-RESP-FORA       — resposta não está entre as opções (impossível acertar)
//   • MC-OPCAO-DUPLICADA — duas opções iguais
//   • MC-VAZIO           — Quiz Relâmpago sem questões num capítulo
//   • VF-INVALIDA        — pergunta tipo "vf" com resposta que não é V/F
//   • NOTACAO-PARTIDA    — "1x", "− -3", "× -3", NaN, undefined no enunciado/expl
//
// É carregado DEPOIS de: _stubs.js + helpers do shared.js + matN.js (pelo runner).
// O runner injeta a config do ano em  globalThis.__ANO__ = {n, caps, temas}.
// ════════════════════════════════════════════════════════════════════════

(function () {
  var ANO = (typeof __ANO__ !== 'undefined') ? __ANO__ : null;
  if (!ANO) { print('ERRO: __ANO__ não definido'); quit(1); }

  var N = ANO.n;
  var gerador = this['_mat' + N + 'Gerador'];
  var buildMc = this['_mat' + N + 'BuildMcQuestion'];
  var banco = this['_mat' + N + 'Banco'];
  var temasCount = ANO.temas; // { cap: nTemas }

  // limpa como o hub limpa (chapter-engine aplica _limpaMath ao render)
  var limpa = (typeof _limpaMath === 'function') ? _limpaMath : function (s) { return s; };
  function strip(s) { return ('' + s).replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim(); }
  function dedup(a) { var u = {}, o = []; a.forEach(function (x) { var k = String(x).trim(); if (!u[k]) { u[k] = 1; o.push(x); } }); return o; }

  var erros = [];
  var nGeradas = 0;
  var REPS = 60; // repetições por (cap, tema, tipo, dificuldade)

  var tipos = ['mc', 'fill', 'fill_frac', 'vf'];
  var difs = ['facil', 'medio', 'dificil'];

  // ── 1) Geradores procedurais ──
  difs.forEach(function (dif) {
    for (var cap = 1; cap <= 12; cap++) {
      if (!temasCount[cap]) continue;
      var gen = gerador(cap);
      if (!gen) { erros.push('SEM-GERADOR cap' + cap); continue; }
      for (var t = 1; t <= temasCount[cap]; t++) {
        tipos.forEach(function (tp) {
          for (var r = 0; r < REPS; r++) {
            var q;
            try { q = gen(String(t), tp, dif); } catch (e) { erros.push('EXCECAO cap' + cap + ' t' + t + ' ' + tp + ' ' + dif + ': ' + e); continue; }
            if (!q) continue; // certos (tema,tipo) não existem — aceitável
            nGeradas++;
            if (q.enun) q.enun = limpa(q.enun);
            if (q.expl) q.expl = limpa(q.expl);
            var resp = q.resposta, tipo = q.tipo;
            if (resp === undefined || resp === null || resp === '') { erros.push('SEM-RESPOSTA cap' + cap + ' t' + t + ' ' + tp + ': ' + strip(q.enun || '').slice(0, 50)); continue; }
            if (tipo === 'vf' && !/^(V|F)$/.test(String(resp))) erros.push('VF-INVALIDA cap' + cap + ' t' + t + ': resposta="' + resp + '" | ' + strip(q.enun || '').slice(0, 45));
            if (tipo === 'mc') {
              var ops = dedup((q.opcoes || []).map(function (o) { return limpa(o); })).map(String);
              if (ops.length < 2) erros.push('MC-POUCAS-OPCOES cap' + cap + ' t' + t + ': ' + strip(q.enun || '').slice(0, 45));
              else if (ops.indexOf(String(resp)) < 0) erros.push('MC-RESP-FORA cap' + cap + ' t' + t + ': "' + resp + '" | ' + strip(q.enun || '').slice(0, 40));
            }
            var full = strip(q.enun || '') + ' ' + strip(q.expl || '');
            if (/undefined|NaN|null| 1x(?![0-9])|− -\d|\+ -\d|[×÷]\s*-\d/.test(full)) erros.push('NOTACAO-PARTIDA cap' + cap + ' t' + t + ' ' + tp + ': ' + full.slice(0, 55));
          }
        });
      }
    }
  });

  // ── 2) Quiz Relâmpago: cada capítulo TEM de produzir MC válido ──
  if (typeof buildMc === 'function') {
    for (var c2 = 1; c2 <= 12; c2++) {
      if (!temasCount[c2]) continue;
      if (!gerador(c2)) continue;
      var conseguiu = 0;
      for (var k = 0; k < 200; k++) {
        var mc = buildMc(c2);
        if (mc && mc.tipo === 'mc' && mc.opcoes && mc.opcoes.length >= 2) {
          conseguiu++;
          var o2 = mc.opcoes.map(String);
          if (o2.indexOf(String(mc.resposta)) < 0) erros.push('MC-QUIZ-RESP-FORA cap' + c2 + ': "' + mc.resposta + '"');
          if (dedup(o2).length !== o2.length) erros.push('MC-QUIZ-DUPLICADA cap' + c2);
        }
      }
      if (conseguiu === 0) erros.push('MC-VAZIO cap' + c2 + ': Quiz Relâmpago não consegue gerar nenhuma questão de escolha múltipla');
    }
  }

  // ── 3) Banco de questões (estático) ──
  if (banco) {
    Object.keys(banco).forEach(function (cap) {
      (banco[cap] || []).forEach(function (q, i) {
        if (q.resposta === undefined || q.resposta === null || q.resposta === '') erros.push('BANCO-SEM-RESP cap' + cap + ' #' + i);
        if (q.tipo === 'mc' && q.opcoes && q.opcoes.indexOf(q.resposta) < 0) erros.push('BANCO-RESP-FORA cap' + cap + ' #' + i + ': "' + q.resposta + '"');
      });
    });
  }

  // ── Relatório ──
  var unicos = {};
  erros.forEach(function (e) { var key = e.split(':')[0]; unicos[key] = (unicos[key] || 0) + 1; });

  print('  ' + N + '.º ano · ' + nGeradas + ' questões geradas e verificadas');
  if (erros.length === 0) {
    print('  ✓ OK — 0 problemas');
  } else {
    print('  ✗ ' + erros.length + ' PROBLEMAS:');
    Object.keys(unicos).sort().forEach(function (k) { print('    [' + unicos[k] + '] ' + k); });
    erros.slice(0, 12).forEach(function (e) { print('      • ' + e); });
    // jsc não propaga quit(1) como exit code → sentinela que o runner deteta.
    print('__VALIDATION_FAILED__ ano=' + N);
  }
})();
