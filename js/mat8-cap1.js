// MAT8 · CAP. 1 NÚMEROS (Prisma 8) · JavaScript
// Usa chapter-engine.js para lógica genérica (quiz/exame/flashcards/progresso).
// Namespace mat8: CAP_DATA[11], prefixo de IDs '11'.
// Temas:
//  1 Frações decimais e dízimas
//  2 Multiplicação de racionais
//  3 Divisão de racionais
//  4 Propriedades das operações
//  5 Expressões numéricas com racionais
//  6 Potências de base racional
//  7 Propriedades das potências
//  8 Potências de expoente negativo
//  9 Raízes (quadradas e cúbicas)
// 10 Notação científica
// 11 Operações em notação científica

// ── Utilitários locais (sufixo m81 para não colidir) ──
function rnd_m81(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function rndNZ_m81(a, b) { var v; do { v = rnd_m81(a, b); } while (v === 0); return v; }
function shuffle_m81(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
function gcd_m81(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
function reduce_m81(p, q) { if (q < 0) { p = -p; q = -q; } var g = gcd_m81(p, q); return [p / g, q / g]; }
function fmtFrac_m81(p, q) {
  var r = reduce_m81(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  return p + '/' + q;
}
function fmtFracHTML_m81(p, q) {
  var r = reduce_m81(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  var sign = p < 0 ? '−' : '';
  return sign + '<sup>' + Math.abs(p) + '</sup>⁄<sub>' + q + '</sub>';
}
// expoentes em unicode
var _SUP_m81 = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function sup_m81(n) { return String(n).split('').map(function (c) { return _SUP_m81[c] || c; }).join(''); }

function lim_m81(dif) {
  if (dif === 'facil') return { mx: 5 };
  if (dif === 'dificil') return { mx: 12 };
  return { mx: 8 };
}

// ── State (compat com handlers) ──
var dynState_m81 = {
  q: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} },
  m: { level: 'medio', score: { correct: 0, total: 0 }, answered: {}, activeMini: 1 },
  t: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} }
};

// ── CONSTRUTOR DE EXERCÍCIOS Cap 1 (Números, 8.º ano) ──
function buildEx_m81(tema, tipo, dif) {
  tema = String(tema);
  var L = lim_m81(dif || 'medio');
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Frações decimais e dízimas ──
  if (tema === '1') {
    // dízima finita se denominador (reduzido) só tem fatores 2 e 5
    var dens1 = [2, 4, 5, 8, 10, 20, 25];          // finitas
    var dens1inf = [3, 6, 7, 9, 11, 12];           // periódicas
    if (tipo === 'mc') {
      var useFin = Math.random() < 0.5;
      var d = useFin ? dens1[rnd_m81(0, dens1.length - 1)] : dens1inf[rnd_m81(0, dens1inf.length - 1)];
      var num = rnd_m81(1, d - 1);
      return {
        enun: 'A fração <strong>' + num + '/' + d + '</strong> dá origem a uma dízima:',
        tipo: 'mc', opcoes: ['finita', 'infinita periódica'],
        resposta: useFin ? 'finita' : 'infinita periódica',
        expl: useFin
          ? 'O denominador ' + d + ' (reduzido) só tem fatores 2 e/ou 5 → dízima finita.'
          : 'O denominador ' + d + ' tem fatores diferentes de 2 e 5 → dízima infinita periódica.',
        tema: 'T1 · Dízimas'
      };
    }
    if (tipo === 'vf') {
      var samples = [[3, 5, '0,6', true], [1, 4, '0,25', true], [1, 3, '0,(3)', false], [2, 3, '0,(6)', false], [7, 10, '0,7', true], [1, 6, '0,1(6)', false]];
      var s = samples[rnd_m81(0, samples.length - 1)];
      var claimFin = Math.random() < 0.5;
      var isFin = s[3];
      var stmt = s[0] + '/' + s[1] + ' é uma dízima ' + (claimFin ? 'finita' : 'infinita periódica') + '.';
      var ok = claimFin ? isFin : !isFin;
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt, tipo: 'vf', resposta: ok ? 'V' : 'F',
        expl: s[0] + '/' + s[1] + ' = ' + s[2] + (isFin ? ' (finita).' : ' (infinita periódica).'),
        tema: 'T1 · Dízimas'
      };
    }
    // fill: identificar valor decimal de fração simples
    var pairs1 = [[1, 2, '0,5'], [1, 4, '0,25'], [3, 4, '0,75'], [1, 5, '0,2'], [3, 5, '0,6'], [1, 10, '0,1'], [7, 10, '0,7']];
    var p1 = pairs1[rnd_m81(0, pairs1.length - 1)];
    return {
      enun: 'Escreve a fração ' + p1[0] + '/' + p1[1] + ' na forma de dízima.', tipo: 'fill',
      resposta: p1[2], expl: p1[0] + '/' + p1[1] + ' = ' + p1[0] + ' ÷ ' + p1[1] + ' = ' + p1[2] + '.',
      tema: 'T1 · Dízimas'
    };
  }

  // ── TEMA 2 · Multiplicação de racionais ──
  if (tema === '2') {
    var a2 = rndNZ_m81(1, L.mx), b2 = rndNZ_m81(2, L.mx);
    var c2 = rndNZ_m81(1, L.mx), d2 = rndNZ_m81(2, L.mx);
    var rp = a2 * c2, rq = b2 * d2;
    var res2 = reduce_m81(rp, rq);
    if (tipo === 'mc') {
      var correct2 = fmtFrac_m81(res2[0], res2[1]);
      var wrongs2 = [fmtFrac_m81(a2 * c2, b2 + d2), fmtFrac_m81(a2 + c2, b2 * d2), fmtFrac_m81(-rp, rq)];
      var opts2 = shuffle_m81([correct2].concat(wrongs2).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(correct2) === -1) opts2[0] = correct2;
      return {
        enun: 'Calcula: ' + fmtFracHTML_m81(a2, b2) + ' × ' + fmtFracHTML_m81(c2, d2),
        tipo: 'mc', opcoes: opts2, resposta: correct2,
        expl: 'Multiplica numeradores e denominadores: (' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_m81(rp, rq) + ' = ' + correct2 + '.',
        tema: 'T2 · Multiplicação'
      };
    }
    if (tipo === 'vf') {
      var simetrico = Math.random() < 0.5;
      var n2v = rndNZ_m81(2, L.mx), d2v = rndNZ_m81(2, L.mx);
      var stmt2 = 'o simétrico de ' + fmtFrac_m81(n2v, d2v) + ' é ' + fmtFrac_m81(simetrico ? -n2v : n2v, d2v);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt2 + '.', tipo: 'vf', resposta: simetrico ? 'V' : 'F',
        expl: 'O simétrico de ' + fmtFrac_m81(n2v, d2v) + ' é ' + fmtFrac_m81(-n2v, d2v) + ' (troca-se o sinal).',
        tema: 'T2 · Multiplicação'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_m81(a2, b2) + ' × ' + fmtFracHTML_m81(c2, d2), tipo: 'fill',
      resposta: fmtFrac_m81(res2[0], res2[1]),
      expl: '(' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_m81(res2[0], res2[1]) + '.',
      tema: 'T2 · Multiplicação'
    };
  }

  // ── TEMA 3 · Divisão de racionais ──
  if (tema === '3') {
    var a3 = rndNZ_m81(1, L.mx), b3 = rndNZ_m81(2, L.mx);
    var c3 = rndNZ_m81(1, L.mx), d3 = rndNZ_m81(2, L.mx);
    // a/b ÷ c/d = a/b × d/c
    var rp3 = a3 * d3, rq3 = b3 * c3;
    var res3 = reduce_m81(rp3, rq3);
    if (tipo === 'mc') {
      var correct3 = fmtFrac_m81(res3[0], res3[1]);
      var wrongs3 = [fmtFrac_m81(a3 * c3, b3 * d3), fmtFrac_m81(rp3, -rq3), fmtFrac_m81(b3 * c3, a3 * d3)];
      var opts3 = shuffle_m81([correct3].concat(wrongs3).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts3.indexOf(correct3) === -1) opts3[0] = correct3;
      return {
        enun: 'Calcula: ' + fmtFracHTML_m81(a3, b3) + ' ÷ ' + fmtFracHTML_m81(c3, d3),
        tipo: 'mc', opcoes: opts3, resposta: correct3,
        expl: 'Dividir é multiplicar pelo inverso: ' + fmtFrac_m81(a3, b3) + ' × ' + d3 + '/' + c3 + ' = ' + correct3 + '.',
        tema: 'T3 · Divisão'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_m81(a3, b3) + ' ÷ ' + fmtFracHTML_m81(c3, d3), tipo: 'fill',
      resposta: fmtFrac_m81(res3[0], res3[1]),
      expl: 'Multiplica pelo inverso: ' + fmtFrac_m81(a3, b3) + ' × ' + fmtFrac_m81(d3, c3) + ' = ' + fmtFrac_m81(res3[0], res3[1]) + '.',
      tema: 'T3 · Divisão'
    };
  }

  // ── TEMA 4 · Propriedades das operações ──
  if (tema === '4') {
    var props = [
      { nome: 'comutativa', ex: 'a × b = b × a' },
      { nome: 'associativa', ex: '(a × b) × c = a × (b × c)' },
      { nome: 'distributiva', ex: 'a × (b + c) = a × b + a × c' },
      { nome: 'elemento neutro', ex: 'a × 1 = a' },
      { nome: 'elemento absorvente', ex: 'a × 0 = 0' }
    ];
    var pr = props[rnd_m81(0, props.length - 1)];
    if (tipo === 'mc' || tipo === 'vf') {
      var opts4 = shuffle_m81(props.map(function (x) { return x.nome; })).slice(0, 4);
      if (opts4.indexOf(pr.nome) === -1) opts4[0] = pr.nome;
      return {
        enun: 'Que propriedade está ilustrada em <strong>' + pr.ex + '</strong>?',
        tipo: 'mc', opcoes: opts4, resposta: pr.nome,
        expl: 'A igualdade ' + pr.ex + ' traduz a propriedade ' + pr.nome + '.',
        tema: 'T4 · Propriedades'
      };
    }
    return {
      enun: 'Completa: a × (b + c) = a × b + a × __ (propriedade distributiva).', tipo: 'fill',
      resposta: 'c', expl: 'a × (b + c) = a × b + a × c.', tema: 'T4 · Propriedades'
    };
  }

  // ── TEMA 5 · Expressões numéricas com racionais ──
  if (tema === '5') {
    // a/b × c/d + e/f  (resultado reduzido)
    var a5 = rndNZ_m81(1, L.mx), b5 = rndNZ_m81(2, 6);
    var c5 = rndNZ_m81(1, L.mx), d5 = rndNZ_m81(2, 6);
    var e5 = rndNZ_m81(1, L.mx), f5 = rndNZ_m81(2, 6);
    var prodP = a5 * c5, prodQ = b5 * d5;
    // soma com e/f: prodP/prodQ + e5/f5
    var lcm5 = prodQ * f5 / gcd_m81(prodQ, f5);
    var sp5 = prodP * (lcm5 / prodQ) + e5 * (lcm5 / f5);
    var res5 = reduce_m81(sp5, lcm5);
    return {
      enun: 'Calcula: ' + fmtFracHTML_m81(a5, b5) + ' × ' + fmtFracHTML_m81(c5, d5) + ' + ' + fmtFracHTML_m81(e5, f5),
      tipo: 'fill', resposta: fmtFrac_m81(res5[0], res5[1]),
      expl: 'Primeiro o produto: ' + fmtFrac_m81(prodP, prodQ) + '. Depois soma ' + fmtFrac_m81(e5, f5) + ' = ' + fmtFrac_m81(res5[0], res5[1]) + ' (respeita a hierarquia das operações).',
      tema: 'T5 · Expressões'
    };
  }

  // ── TEMA 6 · Potências de base racional ──
  if (tema === '6') {
    var base6n = rnd_m81(2, 4), base6d = rnd_m81(2, 5), exp6 = rnd_m81(2, hard ? 4 : 3);
    var pn = Math.pow(base6n, exp6), pd = Math.pow(base6d, exp6);
    if (tipo === 'mc') {
      var correct6 = pn + '/' + pd;
      var wrongs6 = [(base6n * exp6) + '/' + (base6d * exp6), pn + '/' + base6d, base6n + '/' + pd];
      var opts6 = shuffle_m81([correct6].concat(wrongs6).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts6.indexOf(correct6) === -1) opts6[0] = correct6;
      return {
        enun: 'Calcula: (' + base6n + '/' + base6d + ')' + sup_m81(exp6),
        tipo: 'mc', opcoes: opts6, resposta: correct6,
        expl: '(a/b)ⁿ = aⁿ/bⁿ → ' + base6n + sup_m81(exp6) + '/' + base6d + sup_m81(exp6) + ' = ' + correct6 + '.',
        tema: 'T6 · Potências'
      };
    }
    // vf: sinal de potência de base negativa
    var bneg = rnd_m81(2, 5), eneg = rnd_m81(2, 5);
    var isEven = (eneg % 2 === 0);
    var claimPos = Math.random() < 0.5;
    return {
      enun: 'Verdadeiro ou Falso: (−' + bneg + ')' + sup_m81(eneg) + ' é um número ' + (claimPos ? 'positivo' : 'negativo') + '.',
      tipo: 'vf', resposta: (claimPos === isEven) ? 'V' : 'F',
      expl: 'Base negativa com expoente ' + (isEven ? 'par → positivo' : 'ímpar → negativo') + '.',
      tema: 'T6 · Potências'
    };
  }

  // ── TEMA 7 · Propriedades das potências ──
  if (tema === '7') {
    var base7 = rnd_m81(2, 6);
    var kind7 = rnd_m81(0, 2);
    if (kind7 === 0) { // mesmo base, produto
      var m7 = rnd_m81(2, 6), n7 = rnd_m81(2, 6);
      var r7 = m7 + n7;
      return {
        enun: 'Simplifica: ' + base7 + sup_m81(m7) + ' × ' + base7 + sup_m81(n7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(r7),
        expl: 'Mesma base no produto: somam-se os expoentes → ' + base7 + sup_m81(m7) + '⁺' + sup_m81(n7) + ' = ' + base7 + sup_m81(r7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    if (kind7 === 1) { // mesmo base, quociente
      var big7 = rnd_m81(5, 9), sm7 = rnd_m81(1, 4);
      return {
        enun: 'Simplifica: ' + base7 + sup_m81(big7) + ' ÷ ' + base7 + sup_m81(sm7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(big7 - sm7),
        expl: 'Mesma base no quociente: subtraem-se os expoentes → ' + base7 + sup_m81(big7 - sm7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    // potência de potência
    var pp7a = rnd_m81(2, 5), pp7b = rnd_m81(2, 4);
    return {
      enun: 'Simplifica: (' + base7 + sup_m81(pp7a) + ')' + sup_m81(pp7b) + ' = ' + base7 + '^?',
      tipo: 'fill', resposta: String(pp7a * pp7b),
      expl: 'Potência de potência: multiplicam-se os expoentes → ' + base7 + sup_m81(pp7a * pp7b) + '.',
      tema: 'T7 · Prop. Potências'
    };
  }

  // ── TEMA 8 · Potências de expoente negativo ──
  if (tema === '8') {
    var base8 = rnd_m81(2, 5), exp8 = rnd_m81(1, hard ? 4 : 3);
    var val8 = Math.pow(base8, exp8);
    if (tipo === 'mc') {
      var correct8 = '1/' + val8;
      var wrongs8 = ['1/' + (base8 * exp8), '−' + val8, String(val8)];
      var opts8 = shuffle_m81([correct8].concat(wrongs8).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts8.indexOf(correct8) === -1) opts8[0] = correct8;
      return {
        enun: 'Calcula: ' + base8 + sup_m81('-' + exp8),
        tipo: 'mc', opcoes: opts8, resposta: correct8,
        expl: 'a⁻ⁿ = 1/aⁿ → ' + base8 + sup_m81('-' + exp8) + ' = 1/' + base8 + sup_m81(exp8) + ' = 1/' + val8 + '.',
        tema: 'T8 · Expoente Negativo'
      };
    }
    return {
      enun: 'Escreve com expoente positivo: ' + base8 + sup_m81('-' + exp8) + ' = 1/__', tipo: 'fill',
      resposta: String(val8), expl: base8 + sup_m81('-' + exp8) + ' = 1/' + base8 + sup_m81(exp8) + ' = 1/' + val8 + '.',
      tema: 'T8 · Expoente Negativo'
    };
  }

  // ── TEMA 9 · Raízes quadradas e cúbicas ──
  if (tema === '9') {
    var cubica = (Math.random() < 0.4);
    if (cubica) {
      var roots3 = [1, 2, 3, 4, 5];
      var r3 = roots3[rnd_m81(0, roots3.length - 1)];
      var cube = r3 * r3 * r3;
      if (tipo === 'mc') {
        var opts9c = shuffle_m81([r3, r3 + 1, r3 - 1 || r3 + 2, r3 * 3].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
        if (opts9c.indexOf(String(r3)) === -1) opts9c[0] = String(r3);
        return {
          enun: 'Calcula: ∛' + cube, tipo: 'mc', opcoes: opts9c, resposta: String(r3),
          expl: '∛' + cube + ' = ' + r3 + ' porque ' + r3 + '³ = ' + cube + '.', tema: 'T9 · Raízes'
        };
      }
      return { enun: 'Calcula: ∛' + cube, tipo: 'fill', resposta: String(r3), expl: r3 + '³ = ' + cube + ', logo ∛' + cube + ' = ' + r3 + '.', tema: 'T9 · Raízes' };
    }
    var roots2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var r2 = roots2[rnd_m81(0, roots2.length - 1)];
    var sq = r2 * r2;
    if (tipo === 'mc') {
      var opts9 = shuffle_m81([r2, r2 + 1, r2 - 1, sq].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts9.indexOf(String(r2)) === -1) opts9[0] = String(r2);
      return { enun: 'Calcula: √' + sq, tipo: 'mc', opcoes: opts9, resposta: String(r2), expl: '√' + sq + ' = ' + r2 + ' porque ' + r2 + '² = ' + sq + '.', tema: 'T9 · Raízes' };
    }
    return { enun: 'Calcula: √' + sq, tipo: 'fill', resposta: String(r2), expl: r2 + '² = ' + sq + ', logo √' + sq + ' = ' + r2 + '.', tema: 'T9 · Raízes' };
  }

  // ── TEMA 10 · Notação científica ──
  if (tema === '10') {
    // gera a × 10^n a partir de um número
    var aMant = rnd_m81(1, 9), dec = rnd_m81(0, 9);
    var mant = aMant + (Math.random() < 0.5 ? '' : ',' + dec);
    var mantNum = parseFloat(mant.replace(',', '.'));
    var expo = rnd_m81(easy ? 2 : 3, hard ? 9 : 7);
    var negExp = (Math.random() < 0.4);
    var realExp = negExp ? -expo : expo;
    var bigNum;
    if (!negExp) {
      bigNum = (mantNum * Math.pow(10, expo));
      bigNum = bigNum.toLocaleString('pt-PT', { useGrouping: false }).replace('.', ',');
    } else {
      bigNum = (mantNum * Math.pow(10, -expo));
      bigNum = bigNum.toFixed(expo + 1).replace('.', ',');
    }
    if (tipo === 'mc') {
      var correct10 = mant + ' × 10' + sup_m81(realExp);
      var wrongs10 = [mant + ' × 10' + sup_m81(realExp + 1), mant + ' × 10' + sup_m81(-realExp), (mantNum * 10) + ' × 10' + sup_m81(realExp - 1)];
      var opts10 = shuffle_m81([correct10].concat(wrongs10).filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts10.indexOf(correct10) === -1) opts10[0] = correct10;
      return {
        enun: 'Escreve <strong>' + bigNum + '</strong> em notação científica.',
        tipo: 'mc', opcoes: opts10, resposta: correct10,
        expl: bigNum + ' = ' + correct10 + ' (mantissa entre 1 e 10, expoente ' + realExp + ').',
        tema: 'T10 · Notação Científica'
      };
    }
    // vf: validade da forma a×10^n (1 ≤ a < 10)
    var aTest = [2.5, 25, 0.7, 8.1, 14][rnd_m81(0, 4)];
    var validA = (aTest >= 1 && aTest < 10);
    var claimValid = Math.random() < 0.5;
    return {
      enun: 'Verdadeiro ou Falso: ' + String(aTest).replace('.', ',') + ' × 10⁴ está ' + (claimValid ? 'corretamente' : 'incorretamente') + ' escrito em notação científica.',
      tipo: 'vf', resposta: (claimValid === validA) ? 'V' : 'F',
      expl: 'Em notação científica a mantissa a verifica 1 ≤ a < 10. ' + String(aTest).replace('.', ',') + (validA ? ' cumpre' : ' não cumpre') + '.',
      tema: 'T10 · Notação Científica'
    };
  }

  // ── TEMA 11 · Operações em notação científica ──
  if (tema === '11') {
    var a11 = rnd_m81(1, 9), b11 = rnd_m81(1, 9);
    var m11 = rnd_m81(2, 8), n11 = rnd_m81(2, 8);
    var mult = (Math.random() < 0.5);
    if (mult) {
      var prod = a11 * b11, sumE = m11 + n11;
      var mantOut = prod, expOut = sumE;
      if (prod >= 10) { mantOut = prod / 10; expOut = sumE + 1; }
      var correct11 = String(mantOut).replace('.', ',') + ' × 10' + sup_m81(expOut);
      return {
        enun: 'Calcula: (' + a11 + ' × 10' + sup_m81(m11) + ') × (' + b11 + ' × 10' + sup_m81(n11) + ')',
        tipo: 'fill', resposta: correct11,
        expl: 'Multiplica as mantissas (' + a11 + '×' + b11 + '=' + prod + ') e soma os expoentes (' + m11 + '+' + n11 + '=' + sumE + ') → ' + correct11 + '.',
        tema: 'T11 · Operações N.C.'
      };
    }
    // divisão (garante mantissa exata)
    var bigA = a11 * b11; // para divisão exacta: (bigA × 10^M) ÷ (b11 × 10^n) = a11 × 10^(M-n)
    var M = n11 + rnd_m81(1, 5);
    var correctD = a11 + ' × 10' + sup_m81(M - n11);
    return {
      enun: 'Calcula: (' + bigA + ' × 10' + sup_m81(M) + ') ÷ (' + b11 + ' × 10' + sup_m81(n11) + ')',
      tipo: 'fill', resposta: correctD,
      expl: 'Divide as mantissas (' + bigA + '÷' + b11 + '=' + a11 + ') e subtrai os expoentes (' + M + '−' + n11 + '=' + (M - n11) + ') → ' + correctD + '.',
      tema: 'T11 · Operações N.C.'
    };
  }

  // fallback
  return { enun: 'Calcula: 1/2 + 1/2', tipo: 'fill', resposta: '1', expl: '1/2 + 1/2 = 1.', tema: 'Números' };
}

// ── FLASHCARDS Cap 1 (8.º ano) ──
var FC_M81_CARDS = [
  { tag: 'Definição', q: 'O que é uma dízima finita?', a: 'Uma dízima com um número finito de casas decimais. Acontece quando o denominador (reduzido) só tem fatores 2 e/ou 5. Ex: 3/5 = 0,6.' },
  { tag: 'Definição', q: 'O que é uma dízima infinita periódica?', a: 'Uma dízima cujas casas decimais se repetem infinitamente, num período. Ex: 1/3 = 0,(3); 1/6 = 0,1(6).' },
  { tag: 'Regra', q: 'Como multiplicar duas frações?', a: 'Multiplicam-se os numeradores entre si e os denominadores entre si: a/b × c/d = (a×c)/(b×d). Simplifica no fim.' },
  { tag: 'Regra', q: 'Como dividir duas frações?', a: 'Multiplica-se a primeira pelo inverso da segunda: a/b ÷ c/d = a/b × d/c.' },
  { tag: 'Definição', q: 'O que é o simétrico de um número?', a: 'É o número com sinal trocado. O simétrico de 3/5 é −3/5. A soma de um número com o seu simétrico é 0.' },
  { tag: 'Definição', q: 'O que é o valor absoluto?', a: '|x| é a distância de x ao zero, é sempre ≥ 0. |−3/4| = 3/4 e |3/4| = 3/4.' },
  { tag: 'Propriedade', q: 'Propriedade comutativa', a: 'A ordem dos fatores não altera o produto: a × b = b × a. Vale também para a adição.' },
  { tag: 'Propriedade', q: 'Propriedade associativa', a: 'A forma de agrupar não altera o resultado: (a × b) × c = a × (b × c).' },
  { tag: 'Propriedade', q: 'Propriedade distributiva', a: 'a × (b + c) = a × b + a × c. Permite "distribuir" a multiplicação pela soma/subtração.' },
  { tag: 'Regra', q: 'Sinal de uma potência de base negativa', a: 'Expoente par → resultado positivo. Expoente ímpar → resultado negativo. (−2)⁴ = 16; (−2)³ = −8.' },
  { tag: 'Propriedade', q: 'Produto de potências com a mesma base', a: 'aᵐ × aⁿ = aᵐ⁺ⁿ (mantém-se a base, somam-se os expoentes). Ex: 2³ × 2⁵ = 2⁸.' },
  { tag: 'Propriedade', q: 'Quociente de potências com a mesma base', a: 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ (mantém-se a base, subtraem-se os expoentes). Ex: 10⁷ ÷ 10³ = 10⁴.' },
  { tag: 'Propriedade', q: 'Potência de uma potência', a: '(aᵐ)ⁿ = aᵐˣⁿ (mantém-se a base, multiplicam-se os expoentes). Ex: (2³)² = 2⁶.' },
  { tag: 'Propriedade', q: 'Potências com o mesmo expoente', a: 'Produto: aⁿ × bⁿ = (a×b)ⁿ. Quociente: aⁿ ÷ bⁿ = (a÷b)ⁿ.' },
  { tag: 'Regra', q: 'Potência de expoente negativo', a: 'a⁻ⁿ = 1/aⁿ (com a ≠ 0). Ex: 2⁻³ = 1/2³ = 1/8.' },
  { tag: 'Regra', q: 'Potência de expoente 0', a: 'a⁰ = 1 para qualquer a ≠ 0.' },
  { tag: 'Definição', q: 'O que é a raiz quadrada?', a: '√a é o número não negativo cujo quadrado é a. √36 = 6 porque 6² = 36.' },
  { tag: 'Definição', q: 'O que é a raiz cúbica?', a: '∛a é o número cujo cubo é a. ∛27 = 3 porque 3³ = 27. Existe também para negativos: ∛(−8) = −2.' },
  { tag: 'Definição', q: 'O que é notação científica?', a: 'Forma a × 10ⁿ, com 1 ≤ a < 10 e n inteiro. Ex: 225 000 000 = 2,25 × 10⁸.' },
  { tag: 'Regra', q: 'Multiplicar em notação científica', a: '(a × 10ᵐ) × (b × 10ⁿ) = (a×b) × 10ᵐ⁺ⁿ. Se a×b ≥ 10, ajusta a mantissa e o expoente.' },
  { tag: 'Regra', q: 'Dividir em notação científica', a: '(a × 10ᵐ) ÷ (b × 10ⁿ) = (a÷b) × 10ᵐ⁻ⁿ.' },
  { tag: 'Exemplo', q: 'Escreve 0,0016 em notação científica', a: '0,0016 = 1,6 × 10⁻³.' },
  { tag: 'Exemplo', q: 'Calcula (3 × 10⁴) × (6 × 10²)', a: '(3×6) × 10⁴⁺² = 18 × 10⁶ = 1,8 × 10⁷.' },
  { tag: 'Exemplo', q: 'Calcula √64 − √36', a: '√64 − √36 = 8 − 6 = 2.' }
];

// ── REGISTO NO CHAPTER ENGINE ──
window.CAP_DATA = window.CAP_DATA || {};
window.CAP_DATA[11] = {
  prefix: '11',
  storageKey: 'edupt_mat8_cap1',
  viewId: 'view-math11',
  tabsId: 'tabs11',
  temas: ['T1 · Dízimas', 'T2 · Multiplicação', 'T3 · Divisão', 'T5 · Expressões', 'T6 · Potências', 'T7 · Prop. Potências', 'T9 · Raízes', 'T10 · Notação Científica', 'T11 · Operações N.C.'],
  flashcards: FC_M81_CARDS,
  buildExercicio: function (tema, tipo, dif) { return buildEx_m81(tema, tipo, dif); },
  questoesPlans: {
    facil: {
      temas: ['1', '1', '2', '2', '3', '3', '4', '6', '6', '7', '7', '9', '9', '10', '10', '8', '8', '11', '11', '5'],
      tipos: ['mc', 'vf', 'mc', 'fill', 'mc', 'fill', 'mc', 'mc', 'vf', 'fill', 'fill', 'mc', 'fill', 'mc', 'vf', 'mc', 'fill', 'fill', 'fill', 'fill']
    },
    medio: {
      temas: ['1', '2', '3', '4', '5', '6', '6', '7', '7', '7', '8', '9', '9', '10', '10', '11', '11', '2', '3', '5'],
      tipos: ['mc', 'mc', 'mc', 'mc', 'fill', 'mc', 'vf', 'fill', 'fill', 'fill', 'mc', 'mc', 'fill', 'mc', 'vf', 'fill', 'fill', 'fill', 'fill', 'fill']
    },
    dificil: {
      temas: ['1', '2', '3', '4', '5', '5', '6', '7', '7', '8', '8', '9', '10', '10', '11', '11', '11', '6', '7', '5'],
      tipos: ['vf', 'fill', 'fill', 'mc', 'fill', 'fill', 'mc', 'fill', 'fill', 'mc', 'fill', 'mc', 'mc', 'vf', 'fill', 'fill', 'fill', 'vf', 'fill', 'fill']
    }
  },
  miniPlans: (function () {
    var p = {};
    // miniteste 0 = capítulo completo
    p[0] = [
      { t: '1', tipo: 'mc' }, { t: '1', tipo: 'vf' }, { t: '2', tipo: 'mc' }, { t: '3', tipo: 'mc' },
      { t: '4', tipo: 'mc' }, { t: '5', tipo: 'fill' }, { t: '6', tipo: 'mc' }, { t: '7', tipo: 'fill' },
      { t: '8', tipo: 'mc' }, { t: '9', tipo: 'mc' }, { t: '10', tipo: 'mc' }, { t: '11', tipo: 'fill' }
    ];
    // 1..11 → um miniteste por tema (8 questões cada)
    var tipoSeq = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
    for (var i = 1; i <= 11; i++) {
      var t = String(i);
      p[i] = tipoSeq.map(function (tp) { return { t: t, tipo: tp }; });
    }
    return p;
  })(),
  testePlans: (function () {
    var p = {};
    p.subtema0 = {
      facil: [{ t: '1', tipo: 'mc' }, { t: '2', tipo: 'mc' }, { t: '3', tipo: 'mc' }, { t: '6', tipo: 'mc' }, { t: '9', tipo: 'mc' }, { t: '10', tipo: 'mc' }],
      medio: [{ t: '1', tipo: 'mc' }, { t: '2', tipo: 'mc' }, { t: '3', tipo: 'mc' }, { t: '4', tipo: 'mc' }, { t: '6', tipo: 'mc' }, { t: '7', tipo: 'fill' }, { t: '9', tipo: 'mc' }, { t: '10', tipo: 'mc' }, { t: '11', tipo: 'fill' }],
      dificil: [{ t: '1', tipo: 'vf' }, { t: '2', tipo: 'fill' }, { t: '3', tipo: 'fill' }, { t: '5', tipo: 'fill' }, { t: '6', tipo: 'mc' }, { t: '7', tipo: 'fill' }, { t: '8', tipo: 'mc' }, { t: '9', tipo: 'mc' }, { t: '10', tipo: 'mc' }, { t: '11', tipo: 'fill' }, { t: '11', tipo: 'fill' }, { t: '5', tipo: 'fill' }]
    };
    var tipos = ['mc', 'mc', 'vf', 'fill', 'mc', 'fill'];
    for (var i = 1; i <= 11; i++) {
      var t = String(i);
      p['subtema' + i] = tipos.map(function (tp) { return { t: t, tipo: tp }; });
    }
    return p;
  })()
};

// ── WRAPPERS de delegação (gera showSection11, exame11Start, etc.) ──
_capRegisterWrappers(11, {
  setTeste11Subtema: function (n, btn) { capSetTesteSubtema(11, n, btn); },
  gerarTeste11: function () { capGerarTeste(11); },
  setGenLevel11: function (btn) { capSetGenLevel(11, btn); },
  exame11Submit: function () { examActive = false; }
});

// ── SUBTEMAS (prática focada) ──
var _m81SubtemaTitulos = {
  '1:dizimas': 'Dízimas finitas e periódicas', '1:converter': 'Converter fração ↔ dízima',
  '2:multiplicar': 'Multiplicar racionais', '2:simetrico': 'Simétrico e valor absoluto',
  '3:dividir': 'Dividir racionais',
  '4:propriedades': 'Identificar propriedades',
  '5:expressoes': 'Expressões com racionais',
  '6:potencias': 'Potências de base racional', '6:sinais': 'Sinal de potências',
  '7:produto': 'Produto/quociente de potências', '7:potpot': 'Potência de potência',
  '8:negativos': 'Expoentes negativos',
  '9:quadrada': 'Raízes quadradas', '9:cubica': 'Raízes cúbicas',
  '10:escrever': 'Escrever em notação científica',
  '11:multiplicar': 'Multiplicar em N.C.', '11:dividir': 'Dividir em N.C.'
};

function _m81SubtemaGerador(tema, sub) {
  var dif = (window.CAP_DATA[11] && _getState(11).dyn.q11) ? _getState(11).dyn.q11.level : 'medio';
  var N = 6, exs = [];
  for (var i = 0; i < N; i++) {
    var tipo;
    if (sub === 'simetrico' || sub === 'sinais' || sub === 'dizimas') tipo = (i % 2 === 0) ? 'vf' : 'mc';
    else if (sub === 'propriedades' || sub === 'potencias' || sub === 'multiplicar' || sub === 'dividir' || sub === 'quadrada' || sub === 'cubica' || sub === 'escrever') tipo = 'mc';
    else tipo = 'fill';
    var ex = buildEx_m81(tema, tipo, dif);
    if (ex) { ex.num = i + 1; exs.push(ex); }
  }
  return exs;
}

function abrirSubtema11(tema, sub) {
  _stAnswered = {}; _stScore = { correct: 0, total: 0 };
  var titulo = _m81SubtemaTitulos[tema + ':' + sub] || 'Prática';
  window._stContext = { titulo: titulo, gerador: function () { return _m81SubtemaGerador(tema, sub); } };
  criarModalSubtema(titulo, _m81SubtemaGerador(tema, sub));
}

// ── Teclado: flashcards ──
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keydown', function (e) {
    var fc = document.getElementById('sec-flashcards11');
    if (!fc || !fc.classList.contains('active')) return;
    if (e.key === 'ArrowRight') fcNext11();
    else if (e.key === 'ArrowLeft') fcPrev11();
    else if (e.key === ' ') { e.preventDefault(); fcFlip11(); }
  });
});

// ── Grelha de temas ──
var _m81Topics = [
  { id: 'tr11_1', num: '01', title: 'Frações Decimais e Dízimas', subs: [
    { onclick: "abrirSubtema11('1','dizimas')", label: 'Dízimas finitas e periódicas' },
    { onclick: "abrirSubtema11('1','converter')", label: 'Converter fração ↔ dízima' }
  ] },
  { id: 'tr11_2', num: '02', title: 'Multiplicação de Racionais', subs: [
    { onclick: "abrirSubtema11('2','multiplicar')", label: 'Multiplicar racionais' },
    { onclick: "abrirSubtema11('2','simetrico')", label: 'Simétrico e valor absoluto' }
  ] },
  { id: 'tr11_3', num: '03', title: 'Divisão de Racionais', subs: [
    { onclick: "abrirSubtema11('3','dividir')", label: 'Dividir racionais' }
  ] },
  { id: 'tr11_4', num: '04', title: 'Propriedades das Operações', subs: [
    { onclick: "abrirSubtema11('4','propriedades')", label: 'Identificar propriedades' }
  ] },
  { id: 'tr11_5', num: '05', title: 'Expressões Numéricas', subs: [
    { onclick: "abrirSubtema11('5','expressoes')", label: 'Expressões com racionais' }
  ] },
  { id: 'tr11_6', num: '06', title: 'Potências de Base Racional', subs: [
    { onclick: "abrirSubtema11('6','potencias')", label: 'Calcular potências' },
    { onclick: "abrirSubtema11('6','sinais')", label: 'Sinal de potências' }
  ] },
  { id: 'tr11_7', num: '07', title: 'Propriedades das Potências', subs: [
    { onclick: "abrirSubtema11('7','produto')", label: 'Produto e quociente' },
    { onclick: "abrirSubtema11('7','potpot')", label: 'Potência de potência' }
  ] },
  { id: 'tr11_8', num: '08', title: 'Potências de Expoente Negativo', subs: [
    { onclick: "abrirSubtema11('8','negativos')", label: 'Expoentes negativos' }
  ] },
  { id: 'tr11_9', num: '09', title: 'Raízes', subs: [
    { onclick: "abrirSubtema11('9','quadrada')", label: 'Raízes quadradas' },
    { onclick: "abrirSubtema11('9','cubica')", label: 'Raízes cúbicas' }
  ] },
  { id: 'tr11_10', num: '10', title: 'Notação Científica', subs: [
    { onclick: "abrirSubtema11('10','escrever')", label: 'Escrever em notação científica' }
  ] },
  { id: 'tr11_11', num: '11', title: 'Operações em Notação Científica', subs: [
    { onclick: "abrirSubtema11('11','multiplicar')", label: 'Multiplicar' },
    { onclick: "abrirSubtema11('11','dividir')", label: 'Dividir' }
  ] }
];
(function () {
  var el = document.getElementById('cap11-topics-grid');
  if (el) el.innerHTML = _tplTopicGrid(_m81Topics);
})();
