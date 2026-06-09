/* ════════════════════════════════════════════════════════════════
   pt-jogos.js — Jogos de Português (9.º ano)
   Três jogos adequados à disciplina, renderizados em #port9-jogos-app:
     1) Quiz Contra o Tempo  — perguntas do _port9Banco contra o relógio
     2) Forca                — adivinhar termos (figuras, conceitos, autores)
     3) Correspondência      — ligar pares (figura ↔ exemplo, obra ↔ autor…)
   Vanilla ES5. Sem dependências do motor matemático (_j24AutoInit).
   ════════════════════════════════════════════════════════════════ */

var _ptJogoAtual = null;       // 'quiz' | 'forca' | 'corresp' | null (menu)
var _ptJogoTimer = null;

/* ── Entrada: menu de seleção dos 3 jogos ── */
function ptJogosRender() {
  if (_ptJogoTimer) { clearInterval(_ptJogoTimer); _ptJogoTimer = null; }
  var wrap = document.getElementById('port9-jogos-app');
  if (!wrap) return;
  var jogos = [
    { id: 'quiz',    icon: '⏱️', cor: '#a8854d', nome: 'Quiz Contra o Tempo', desc: 'Responde ao máximo de perguntas antes do tempo acabar.' },
    { id: 'forca',   icon: '🔤', cor: '#5e9676', nome: 'Forca', desc: 'Adivinha o termo letra a letra: figuras, conceitos, autores.' },
    { id: 'corresp', icon: '🔗', cor: '#7c6fa0', nome: 'Correspondência', desc: 'Liga cada termo à sua definição ou exemplo.' }
  ];
  var h = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:1rem">';
  jogos.forEach(function (j) {
    h += '<button onclick="ptJogoAbrir(\'' + j.id + '\')" style="background:var(--white);border:1.5px solid var(--border);border-top:3px solid ' + j.cor + ';border-radius:16px;padding:1.3rem;text-align:left;cursor:pointer;transition:all .2s" onmouseover="this.style.transform=\'translateY(-2px)\';this.style.boxShadow=\'0 8px 20px rgba(0,0,0,.08)\'" onmouseout="this.style.transform=\'none\';this.style.boxShadow=\'none\'">';
    h += '<div style="font-size:1.7rem;margin-bottom:.4rem">' + j.icon + '</div>';
    h += '<div style="font-size:.95rem;font-weight:800;color:var(--ink1);margin-bottom:.25rem">' + j.nome + '</div>';
    h += '<div style="font-size:.76rem;color:var(--ink4);line-height:1.45">' + j.desc + '</div>';
    h += '</button>';
  });
  h += '</div>';
  wrap.innerHTML = h;
  _ptJogoAtual = null;
}

function ptJogoAbrir(id) {
  _ptJogoAtual = id;
  if (id === 'quiz') ptJogoQuizStart();
  else if (id === 'forca') ptJogoForcaStart();
  else if (id === 'corresp') ptJogoCorrespStart();
}

/* Cabeçalho comum: botão voltar + título. */
function _ptJogoHeader(titulo) {
  return '<button class="btn btn-ghost" style="margin-bottom:.75rem" onclick="ptJogosRender()"><i class="ph ph-arrow-left"></i> Jogos</button>'
    + '<div style="font-family:Cormorant Garamond,serif;font-size:1.4rem;font-weight:700;color:var(--ink1);margin-bottom:.75rem">' + titulo + '</div>';
}

/* Reúne todas as questões MC do banco (todos os domínios). */
function _ptTodasQuestoesMc() {
  var out = [];
  if (typeof _port9Banco === 'undefined') return out;
  Object.keys(_port9Banco).forEach(function (cap) {
    (_port9Banco[cap] || []).forEach(function (q) {
      if (q.tipo === 'mc' && q.opcoes && q.opcoes.length >= 2 && q.opcoes.indexOf(q.resposta) >= 0) out.push(q);
    });
  });
  return out;
}

function _ptShuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

/* ════════════════════════════════════════════════════════════════
   JOGO 1 · QUIZ CONTRA O TEMPO
   ════════════════════════════════════════════════════════════════ */
var _ptQuiz = { fila: [], idx: 0, score: 0, certas: 0, total: 0, tempo: 60, respondido: false };

function ptJogoQuizStart() {
  if (_ptJogoTimer) { clearInterval(_ptJogoTimer); _ptJogoTimer = null; }
  _ptQuiz.fila = _ptShuffle(_ptTodasQuestoesMc().slice());
  _ptQuiz.idx = 0; _ptQuiz.score = 0; _ptQuiz.certas = 0; _ptQuiz.total = 0;
  _ptQuiz.tempo = 60; _ptQuiz.respondido = false;
  if (!_ptQuiz.fila.length) {
    var w = document.getElementById('port9-jogos-app');
    if (w) w.innerHTML = _ptJogoHeader('Quiz Contra o Tempo') + '<p style="color:var(--ink4)">Sem questões disponíveis.</p>';
    return;
  }
  _ptJogoTimer = setInterval(ptJogoQuizTick, 1000);
  ptJogoQuizRender();
}

function ptJogoQuizTick() {
  _ptQuiz.tempo--;
  var t = document.getElementById('ptq-tempo');
  if (t) { t.textContent = _ptQuiz.tempo + 's'; t.style.color = _ptQuiz.tempo <= 10 ? '#ef4444' : 'var(--ink2)'; }
  if (_ptQuiz.tempo <= 0) { clearInterval(_ptJogoTimer); _ptJogoTimer = null; ptJogoQuizFim(); }
}

function ptJogoQuizRender() {
  var wrap = document.getElementById('port9-jogos-app');
  if (!wrap) return;
  var q = _ptQuiz.fila[_ptQuiz.idx % _ptQuiz.fila.length];
  var opts = _ptShuffle(q.opcoes.slice());
  var h = _ptJogoHeader('Quiz Contra o Tempo');
  h += '<div style="display:flex;gap:1rem;align-items:center;margin-bottom:1rem">';
  h += '<div style="font-weight:800;font-size:1.2rem;color:var(--ink2)">⏱️ <span id="ptq-tempo">' + _ptQuiz.tempo + 's</span></div>';
  h += '<div style="margin-left:auto;font-weight:700;color:var(--ink3)">Pontos: <span style="color:var(--ink1)">' + _ptQuiz.score + '</span> · Certas: ' + _ptQuiz.certas + '/' + _ptQuiz.total + '</div>';
  h += '</div>';
  h += '<div style="background:var(--surface);border-radius:12px;padding:1.1rem;margin-bottom:.9rem;font-weight:600;color:var(--ink1)">' + q.enun + '</div>';
  h += '<div id="ptq-opts" style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem">';
  opts.forEach(function (o) {
    h += '<button class="ptq-opt" onclick="ptJogoQuizResp(this,\'' + encodeURIComponent(o) + '\')" style="text-align:left;background:var(--white);border:1.5px solid var(--border);border-radius:10px;padding:.7rem .9rem;cursor:pointer;font-size:.86rem">' + o + '</button>';
  });
  h += '</div><div id="ptq-fb" style="margin-top:.8rem;font-size:.85rem;min-height:1.2rem"></div>';
  wrap.innerHTML = h;
  _ptQuiz.respondido = false;
}

function ptJogoQuizResp(btn, encOpt) {
  if (_ptQuiz.respondido) return;
  _ptQuiz.respondido = true;
  var q = _ptQuiz.fila[_ptQuiz.idx % _ptQuiz.fila.length];
  var escolha = decodeURIComponent(encOpt);
  var certo = (escolha === q.resposta);
  _ptQuiz.total++;
  if (certo) { _ptQuiz.certas++; _ptQuiz.score += 10; }
  // marcar visualmente
  var btns = document.querySelectorAll('#ptq-opts .ptq-opt');
  [].forEach.call(btns, function (b) {
    b.style.cursor = 'default';
    if (b.textContent === q.resposta) { b.style.background = '#e7f6ec'; b.style.borderColor = '#4caf50'; }
    else if (b === btn) { b.style.background = '#fdecea'; b.style.borderColor = '#ef4444'; }
  });
  var fb = document.getElementById('ptq-fb');
  if (fb) fb.innerHTML = (certo ? '<span style="color:#2e7d32;font-weight:700">✓ Certo! +10</span>' : '<span style="color:#c0392b;font-weight:700">✗ Errado.</span>') + ' <span style="color:var(--ink3)">' + (q.expl || '') + '</span>';
  setTimeout(function () {
    if (!_ptJogoTimer) return; // tempo esgotou
    _ptQuiz.idx++;
    ptJogoQuizRender();
  }, 1100);
}

function ptJogoQuizFim() {
  if (typeof _port9PM === 'function') _port9PM(1, 'jogo', { xp: _ptQuiz.certas });
  var wrap = document.getElementById('port9-jogos-app');
  if (!wrap) return;
  var h = _ptJogoHeader('Quiz Contra o Tempo');
  h += '<div style="text-align:center;padding:1.5rem;background:linear-gradient(135deg,#4a3a20,#a8854d);border-radius:18px;color:#fff">';
  h += '<div style="font-size:2.2rem;margin-bottom:.3rem">⏱️</div>';
  h += '<div style="font-size:1.4rem;font-weight:800">Tempo esgotado!</div>';
  h += '<div style="font-size:2.4rem;font-weight:900;margin:.5rem 0">' + _ptQuiz.score + ' pontos</div>';
  h += '<div style="opacity:.85">' + _ptQuiz.certas + ' certas em ' + _ptQuiz.total + ' respostas</div>';
  h += '</div>';
  h += '<div style="text-align:center;margin-top:1rem"><button class="btn btn-primary" onclick="ptJogoQuizStart()"><i class="ph ph-arrow-clockwise"></i> Jogar de novo</button></div>';
  wrap.innerHTML = h;
}

/* ════════════════════════════════════════════════════════════════
   JOGO 2 · FORCA
   Termos do programa (sem acentos no jogo das letras, dica com o tema).
   ════════════════════════════════════════════════════════════════ */
var _PT_FORCA = [
  { p: 'METAFORA', dica: 'Figura de estilo: identifica dois elementos sem palavra de ligação.' },
  { p: 'COMPARACAO', dica: 'Figura de estilo que usa "como" para aproximar dois elementos.' },
  { p: 'PERSONIFICACAO', dica: 'Atribui características humanas a seres não humanos.' },
  { p: 'HIPERBOLE', dica: 'Figura de estilo: exagero intencional.' },
  { p: 'ANTITESE', dica: 'Figura de estilo: aproxima ideias opostas.' },
  { p: 'ANAFORA', dica: 'Repetição de uma palavra no início de versos.' },
  { p: 'ALITERACAO', dica: 'Repetição de sons consonânticos.' },
  { p: 'EUFEMISMO', dica: 'Suaviza uma ideia desagradável.' },
  { p: 'EPOPEIA', dica: 'Género de Os Lusíadas: narrativa em verso dos feitos de um povo.' },
  { p: 'CAMOES', dica: 'Autor de Os Lusíadas.' },
  { p: 'ADAMASTOR', dica: 'Gigante que simboliza os perigos do mar em Os Lusíadas.' },
  { p: 'ONZENEIRO', dica: 'Figura do Auto da Barca que representa a usura.' },
  { p: 'VICENTE', dica: 'Apelido do autor do Auto da Barca do Inferno.' },
  { p: 'DECASSILABO', dica: 'Verso de dez sílabas métricas (medida de Os Lusíadas).' },
  { p: 'NARRADOR', dica: 'Entidade que conta a história num texto narrativo.' },
  { p: 'CONJUNTIVO', dica: 'Modo verbal do desejo/hipótese: "que eu cante".' },
  { p: 'SUJEITO', dica: 'Função sintática de quem pratica a ação.' },
  { p: 'PREDICADO', dica: 'Função sintática que exprime o que se diz do sujeito.' },
  { p: 'CONOTATIVO', dica: 'Sentido figurado de uma palavra.' },
  { p: 'ESTROFE', dica: 'Conjunto de versos de um poema.' }
];
var _ptForca = { palavra: '', dica: '', adivinhadas: [], erros: 0, max: 6, fim: false };

function ptJogoForcaStart() {
  if (_ptJogoTimer) { clearInterval(_ptJogoTimer); _ptJogoTimer = null; }
  var item = _PT_FORCA[Math.floor(Math.random() * _PT_FORCA.length)];
  _ptForca = { palavra: item.p, dica: item.dica, adivinhadas: [], erros: 0, max: 6, fim: false };
  ptJogoForcaRender();
}

function ptJogoForcaRender() {
  var wrap = document.getElementById('port9-jogos-app');
  if (!wrap) return;
  var bonecos = ['😀', '🙂', '😐', '😟', '😣', '😵', '💀'];
  var mostrada = _ptForca.palavra.split('').map(function (l) {
    return _ptForca.adivinhadas.indexOf(l) >= 0 ? l : '_';
  }).join(' ');
  var ganhou = _ptForca.palavra.split('').every(function (l) { return _ptForca.adivinhadas.indexOf(l) >= 0; });
  var perdeu = _ptForca.erros >= _ptForca.max;

  var h = _ptJogoHeader('Forca');
  h += '<div style="text-align:center;font-size:3rem;margin-bottom:.5rem">' + bonecos[Math.min(_ptForca.erros, 6)] + '</div>';
  h += '<div style="text-align:center;font-size:.8rem;color:var(--ink3);margin-bottom:.5rem">💡 ' + _ptForca.dica + '</div>';
  h += '<div style="text-align:center;font-family:JetBrains Mono,monospace;font-size:1.8rem;font-weight:700;letter-spacing:.2em;color:var(--ink1);margin:1rem 0">' + mostrada + '</div>';
  h += '<div style="text-align:center;font-size:.78rem;color:var(--ink4);margin-bottom:1rem">Erros: ' + _ptForca.erros + ' / ' + _ptForca.max + '</div>';

  if (ganhou || perdeu) {
    _ptForca.fim = true;
    if (ganhou && typeof _port9PM === 'function') _port9PM(1, 'jogo', { xp: 3 });
    h += '<div style="text-align:center;padding:1rem;border-radius:14px;background:' + (ganhou ? '#e7f6ec' : '#fdecea') + ';margin-bottom:1rem">';
    h += '<div style="font-size:1.1rem;font-weight:800;color:' + (ganhou ? '#2e7d32' : '#c0392b') + '">' + (ganhou ? '🎉 Acertaste!' : '💀 Perdeste') + '</div>';
    h += '<div style="color:var(--ink2);margin-top:.3rem">A palavra era <strong>' + _ptForca.palavra + '</strong>.</div></div>';
    h += '<div style="text-align:center"><button class="btn btn-primary" onclick="ptJogoForcaStart()"><i class="ph ph-arrow-clockwise"></i> Nova palavra</button></div>';
  } else {
    h += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:.4rem;max-width:420px;margin:0 auto">';
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (letra) {
      var usada = _ptForca.adivinhadas.indexOf(letra) >= 0;
      h += '<button onclick="ptJogoForcaLetra(\'' + letra + '\')"' + (usada ? ' disabled' : '') + ' style="padding:.5rem 0;border-radius:8px;border:1.5px solid var(--border);background:' + (usada ? 'var(--surface)' : 'var(--white)') + ';color:' + (usada ? 'var(--ink4)' : 'var(--ink1)') + ';font-weight:700;cursor:' + (usada ? 'default' : 'pointer') + '">' + letra + '</button>';
    });
    h += '</div>';
  }
  wrap.innerHTML = h;
}

function ptJogoForcaLetra(letra) {
  if (_ptForca.fim || _ptForca.adivinhadas.indexOf(letra) >= 0) return;
  _ptForca.adivinhadas.push(letra);
  if (_ptForca.palavra.indexOf(letra) < 0) _ptForca.erros++;
  ptJogoForcaRender();
}

/* ════════════════════════════════════════════════════════════════
   JOGO 3 · CORRESPONDÊNCIA (ligar termo ↔ definição/exemplo)
   ════════════════════════════════════════════════════════════════ */
var _PT_PARES = [
  { a: 'Metáfora', b: '«és o sol da minha vida»' },
  { a: 'Comparação', b: '«forte como um touro»' },
  { a: 'Personificação', b: '«o vento sussurrava»' },
  { a: 'Hipérbole', b: '«chorei rios de lágrimas»' },
  { a: 'Eufemismo', b: '«partiu» (em vez de morreu)' },
  { a: 'Aliteração', b: '«o rato roeu a rolha»' },
  { a: 'Os Lusíadas', b: 'Luís de Camões' },
  { a: 'Auto da Barca do Inferno', b: 'Gil Vicente' },
  { a: 'A Aia', b: 'Eça de Queirós' },
  { a: 'Um Dia Destes', b: 'García Márquez' },
  { a: 'Sujeito', b: 'quem pratica a ação' },
  { a: 'Complemento direto', b: 'responde a "o quê?" sem preposição' }
];
var _ptCorresp = { pares: [], selA: null, selB: null, feitos: [], erros: 0 };

function ptJogoCorrespStart() {
  if (_ptJogoTimer) { clearInterval(_ptJogoTimer); _ptJogoTimer = null; }
  var escolhidos = _ptShuffle(_PT_PARES.slice()).slice(0, 5);
  _ptCorresp = {
    pares: escolhidos,
    colA: _ptShuffle(escolhidos.map(function (p, i) { return { i: i, t: p.a }; })),
    colB: _ptShuffle(escolhidos.map(function (p, i) { return { i: i, t: p.b }; })),
    selA: null, selB: null, feitos: [], erros: 0
  };
  ptJogoCorrespRender();
}

function ptJogoCorrespRender() {
  var wrap = document.getElementById('port9-jogos-app');
  if (!wrap) return;
  var c = _ptCorresp;
  var h = _ptJogoHeader('Correspondência');
  h += '<div style="font-size:.8rem;color:var(--ink3);margin-bottom:.8rem">Liga cada termo (esquerda) à sua definição ou exemplo (direita).</div>';
  if (c.feitos.length === c.pares.length) {
    if (typeof _port9PM === 'function') _port9PM(1, 'jogo', { xp: 5 });
    h += '<div style="text-align:center;padding:1.2rem;border-radius:14px;background:#e7f6ec;margin-bottom:1rem">';
    h += '<div style="font-size:1.2rem;font-weight:800;color:#2e7d32">🎉 Tudo ligado!</div>';
    h += '<div style="color:var(--ink2);margin-top:.3rem">Com ' + c.erros + ' erro' + (c.erros === 1 ? '' : 's') + '.</div></div>';
    h += '<div style="text-align:center"><button class="btn btn-primary" onclick="ptJogoCorrespStart()"><i class="ph ph-arrow-clockwise"></i> Novo jogo</button></div>';
    wrap.innerHTML = h;
    return;
  }
  h += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">';
  // coluna A
  h += '<div style="display:grid;gap:.5rem">';
  c.colA.forEach(function (it) {
    var feito = c.feitos.indexOf(it.i) >= 0;
    var sel = c.selA === it.i;
    h += '<button onclick="ptJogoCorrespSel(\'a\',' + it.i + ')"' + (feito ? ' disabled' : '') + ' style="padding:.7rem;border-radius:10px;border:1.5px solid ' + (sel ? '#7c6fa0' : 'var(--border)') + ';background:' + (feito ? '#eef0f6' : (sel ? '#f0edf7' : 'var(--white)')) + ';color:' + (feito ? 'var(--ink4)' : 'var(--ink1)') + ';font-weight:600;font-size:.84rem;text-align:left;cursor:' + (feito ? 'default' : 'pointer') + '">' + it.t + '</button>';
  });
  h += '</div>';
  // coluna B
  h += '<div style="display:grid;gap:.5rem">';
  c.colB.forEach(function (it) {
    var feito = c.feitos.indexOf(it.i) >= 0;
    var sel = c.selB === it.i;
    h += '<button onclick="ptJogoCorrespSel(\'b\',' + it.i + ')"' + (feito ? ' disabled' : '') + ' style="padding:.7rem;border-radius:10px;border:1.5px solid ' + (sel ? '#7c6fa0' : 'var(--border)') + ';background:' + (feito ? '#eef0f6' : (sel ? '#f0edf7' : 'var(--white)')) + ';color:' + (feito ? 'var(--ink4)' : 'var(--ink1)') + ';font-weight:600;font-size:.84rem;text-align:left;cursor:' + (feito ? 'default' : 'pointer') + '">' + it.t + '</button>';
  });
  h += '</div></div>';
  h += '<div id="ptc-fb" style="margin-top:.7rem;font-size:.82rem;min-height:1.1rem;color:var(--ink3)">Erros: ' + c.erros + '</div>';
  wrap.innerHTML = h;
}

function ptJogoCorrespSel(col, i) {
  var c = _ptCorresp;
  if (c.feitos.indexOf(i) >= 0) return;
  if (col === 'a') c.selA = (c.selA === i ? null : i);
  else c.selB = (c.selB === i ? null : i);
  // se ambos selecionados, avaliar
  if (c.selA !== null && c.selB !== null) {
    if (c.selA === c.selB) {
      c.feitos.push(c.selA); c.selA = null; c.selB = null;
    } else {
      c.erros++; c.selA = null; c.selB = null;
    }
  }
  ptJogoCorrespRender();
}
