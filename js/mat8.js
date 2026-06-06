/* ════════════════════════════════════════════════════════════════
   MAT8 HUB — Matemática 8.º ano
   Modelo de HUB ÚNICO espelhado no mat7 (NUNCA páginas por capítulo).
   Tabs: Teoria · Praticar · Fichas · Progresso.
   Capítulos são botões de seleção; conteúdo renderizado por JS.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 8.º ano (Prisma 8) ═══
var _mat8CapMeta = [
  {n:1, icon:'<i class="ph ph-list-numbers"></i>',         label:'Números'},
  {n:2, icon:'<i class="ph ph-arrows-out-cardinal"></i>',  label:'Vetores e Isometrias'},
  {n:3, icon:'<i class="ph ph-function"></i>',             label:'Polinómios e Equações'},
  {n:4, icon:'<i class="ph ph-triangle"></i>',             label:'Teorema de Pitágoras'},
  {n:5, icon:'<i class="ph ph-chart-line"></i>',           label:'Equações Literais e Funções'},
  {n:6, icon:'<i class="ph ph-equals"></i>',               label:'Sistemas de Equações'},
  {n:7, icon:'<i class="ph ph-cube"></i>',                 label:'Figuras no Espaço e Volumes'},
  {n:8, icon:'<i class="ph ph-chart-pie-slice"></i>',      label:'Dados e Probabilidades'}
];

// Cores por capítulo (alinhadas com --m8cN-* do CSS)
var _mat8CapColors = {
  1:'#5a7fa8', 2:'#4d978f', 3:'#7d6aa8', 4:'#b06a6a',
  5:'#5e9676', 6:'#a8854d', 7:'#4f86b0', 8:'#9a5e96'
};

// Subtemas por capítulo
var _mat8Subtemas = {
  1: ['Dízimas', 'Multiplicação e divisão', 'Propriedades e expressões', 'Potências', 'Raízes', 'Notação científica'],
  2: ['Vetores', 'Translações', 'Simetrias e reflexões', 'Reflexão deslizante'],
  3: ['Monómios e polinómios', 'Operações com polinómios', 'Casos notáveis', 'Equações do 1.º grau'],
  4: ['Teorema de Pitágoras', 'Recíproco', 'Aplicações a áreas'],
  5: ['Equações literais', 'Função afim', 'Função linear e constante', 'Gráficos'],
  6: ['Sistemas do 1.º grau', 'Método de substituição', 'Interpretação gráfica', 'Problemas'],
  7: ['Prismas e pirâmides', 'Cilindros e cones', 'Esfera', 'Volumes'],
  8: ['Organização de dados', 'Medidas (média, moda, mediana)', 'Probabilidade']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) — conteúdo real, fiel ao Prisma 8.
// Caps 2-8 — placeholders honestos até serem construídos.
var _mat8Cards = {
  1: [
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
    { tag: 'Definição', q: 'O que é a raiz quadrada?', a: '√a é o número não negativo cujo quadrado é a. √64 = 8 porque 8² = 64.' },
    { tag: 'Definição', q: 'O que é a raiz cúbica?', a: '∛a é o número cujo cubo é a. ∛27 = 3 porque 3³ = 27. Existe também para negativos: ∛(−8) = −2.' },
    { tag: 'Definição', q: 'O que é notação científica?', a: 'Forma a × 10ⁿ, com 1 ≤ a < 10 e n inteiro. Ex: 225 000 000 = 2,25 × 10⁸.' },
    { tag: 'Regra', q: 'Multiplicar em notação científica', a: '(a × 10ᵐ) × (b × 10ⁿ) = (a×b) × 10ᵐ⁺ⁿ. Se a×b ≥ 10, ajusta a mantissa e o expoente.' },
    { tag: 'Regra', q: 'Dividir em notação científica', a: '(a × 10ᵐ) ÷ (b × 10ⁿ) = (a÷b) × 10ᵐ⁻ⁿ.' },
    { tag: 'Exemplo', q: 'Escreve 0,0016 em notação científica', a: '0,0016 = 1,6 × 10⁻³.' },
    { tag: 'Exemplo', q: 'Calcula (3 × 10⁴) × (6 × 10²)', a: '(3×6) × 10⁴⁺² = 18 × 10⁶ = 1,8 × 10⁷.' },
    { tag: 'Exemplo', q: 'Calcula √64 − √36', a: '√64 − √36 = 8 − 6 = 2.' }
  ],
  2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: []
};

// Seleção atual por tab
var _mat8Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat8SwitchTab(tab, btn) {
  document.querySelectorAll('.mat7-hub-tab').forEach(function(b){ b.classList.remove('active'); });
  if (btn) {
    btn.classList.add('active');
  } else {
    var tabBtn = document.querySelector('.mat7-hub-tab[data-tab="' + tab + '"]');
    if (tabBtn) tabBtn.classList.add('active');
  }
  document.querySelectorAll('.mat7-panel').forEach(function(p){ p.classList.remove('active'); p.style.setProperty('display','none','important'); });
  var panel = document.getElementById('mat8p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso' };
  if (titles[tab]) document.title = 'Mat. 8.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat8BuildResumoNav();
  else if (tab === 'praticar') mat8BuildPraticarNav();
  else if (tab === 'progresso' && typeof mat8RenderProgresso === 'function') mat8RenderProgresso();
}

// ═══ TAB TEORIA ═══
function mat8BuildResumoNav() {
  var capRow = document.getElementById('mat8-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _mat8Sel['resumo'] || 1;
  var h = '';
  _mat8CapMeta.forEach(function(m) {
    var color = _mat8CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="mat8ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  mat8ResumoShowSts(activeCap);
  mat8RenderResumoInline();
}

function mat8ResumoSelectCap(cap, btn) {
  _mat8Sel['resumo'] = cap;
  _mat8Sel['resumo-st'] = 0;
  var capRow = document.getElementById('mat8-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _mat8CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  mat8ResumoShowSts(cap);
  mat8RenderResumoInline();
}

function mat8ResumoShowSts(cap) {
  var stRow = document.getElementById('mat8-resumo-st-row');
  if (!stRow) return;
  var sts = _mat8Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_mat8Sel['resumo-st'] || 0) === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat8ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat8ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('mat8-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat8Sel['resumo'] = cap;
  _mat8Sel['resumo-st'] = stIdx;
  mat8RenderResumoInline();
}

function mat8RenderResumoInline() {
  var cap = _mat8Sel['resumo'] || 1;
  var dest = document.getElementById('mat8-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _mat8CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _mat8Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _mat8Sel['resumo-st'] || 0;
  var cards = allCards;
  if (stIdx > 0 && _mat8Subtemas[cap]) {
    var stLabel = (_mat8Subtemas[cap][stIdx - 1] || '').toLowerCase();
    var stWords = stLabel.replace(/[^a-záéíóúâêîôûãõç ]/g, '').split(' ').filter(function(w){ return w.length > 3; });
    var filtered = allCards.filter(function(card) {
      var hay = ((card.tag || '') + ' ' + (card.q || '')).toLowerCase();
      return stWords.some(function(w){ return hay.indexOf(w) !== -1; });
    });
    if (filtered.length > 0) cards = filtered;
  }

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  // Agrupar por tag
  var groups = {}, order = [];
  cards.forEach(function(card) {
    var t = card.tag || 'Geral';
    if (!groups[t]) { groups[t] = []; order.push(t); }
    groups[t].push(card);
  });

  var html = '<div style="padding:.5rem 0 1.5rem">';
  order.forEach(function(tag) {
    var icon = tagIcons[tag] || 'ph-note';
    html += '<div style="margin-bottom:1.5rem">'
      + '<div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.6rem;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:' + color + '">'
      + '<i class="ph ' + icon + '"></i>' + tag + '</div>'
      + '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.6rem">';
    groups[tag].forEach(function(card) {
      var answer = (card.a || '').replace(/\n/g, '<br>');
      html += '<div class="resumo-card" style="background:var(--surface,#fff);border:1px solid var(--border,#e5e7eb);border-radius:.75rem;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.06)">'
        + '<div style="padding:.75rem .9rem 0;border-top:3px solid ' + color + '">'
        + '<div style="font-size:.82rem;font-weight:600;color:var(--ink1,#1a1a2e);margin-bottom:.35rem;line-height:1.35">' + (card.q || '') + '</div>'
        + '<div style="font-size:.78rem;color:var(--ink3,#555);line-height:1.5;padding-bottom:.7rem;border-top:1px dashed var(--border,#e5e7eb);padding-top:.4rem;margin-top:.35rem">' + answer + '</div>'
        + '</div></div>';
    });
    html += '</div></div>';
  });
  html += '</div>';
  dest.innerHTML = html;
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR — exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy — buildEx_m81 é definida no fim do ficheiro).
// Só os caps com gerador são "praticáveis".
function _mat8Gerador(cap) {
  if (cap === 1 && typeof buildEx_m81 === 'function') return buildEx_m81;
  return null;
}
var _mat8TemasCount = { 1: 11 };

// Estado da prática
var _mat8Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };

function _mat8PratStorageKey(cap) { return 'edupt_mat8_cap' + cap; }

function mat8BuildPraticarNav() {
  var capRow = document.getElementById('mat8-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _mat8Prat.cap || 1;
  var h = '';
  _mat8CapMeta.forEach(function(m) {
    var hasGen = !!_mat8Gerador(m.n);
    var color = _mat8CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'mat8PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  mat8PraticarShowSts(activeCap);
}

function mat8PraticarShowSts(cap) {
  var stRow = document.getElementById('mat8-praticar-st-row');
  if (!stRow) return;
  var sts = _mat8Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_mat8Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="mat8PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_mat8Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="mat8PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function mat8PraticarSelectCap(cap, btn) {
  if (!_mat8Gerador(cap)) return;
  _mat8Prat.cap = cap;
  _mat8Prat.st = 0;
  var capRow = document.getElementById('mat8-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _mat8CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  mat8PraticarShowSts(cap);
  mat8GerarExercicios();
}

function mat8PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('mat8-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _mat8Prat.st = stIdx;
  mat8GerarExercicios();
}

function mat8PraticarSetNivel(nivel, btn) {
  _mat8Prat.nivel = nivel;
  var grp = document.getElementById('mat8-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  mat8GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _mat8SubtemaTemas = {
  1: { // Cap 1
    1: ['1'],            // Dízimas
    2: ['2', '3'],       // Multiplicação e divisão
    3: ['4', '5'],       // Propriedades e expressões
    4: ['6', '7', '8'],  // Potências
    5: ['9'],            // Raízes
    6: ['10', '11']      // Notação científica
  }
};

function mat8GerarExercicios() {
  var dest = document.getElementById('mat8-praticar-content');
  if (!dest) return;
  var cap = _mat8Prat.cap, gen = _mat8Gerador(cap);
  if (!gen) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_mat8Prat.st > 0 && _mat8SubtemaTemas[cap] && _mat8SubtemaTemas[cap][_mat8Prat.st]) {
    temas = _mat8SubtemaTemas[cap][_mat8Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_mat8TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var exs = [];
  for (var i = 0; i < QTD; i++) {
    var tema = temas[i % temas.length];
    var ex = gen(tema, tipos[i % tipos.length], _mat8Prat.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat8Prat.exs = exs;
  _mat8Prat.answered = {};
  _mat8Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="mat8-prat-scorebar">'
    + '<div><div class="score-num" id="mat8-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="mat8-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="mat8-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="mat8GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'mat8CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + quizHTML;
}

function mat8CheckEx(qid, tipo, val, btn) {
  if (_mat8Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _mat8Prat.answered[qid] = true;
  if (r.correct) _mat8Prat.score.correct++;
  _mat8Prat.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('mat8-prat-score'); if (se) se.textContent = _mat8Prat.score.correct;
  var te = document.getElementById('mat8-prat-total'); if (te) te.textContent = '/ ' + _mat8Prat.score.total;
  var pe = document.getElementById('mat8-prat-prog'); if (pe && _mat8Prat.exs.length) pe.style.width = (_mat8Prat.score.total / _mat8Prat.exs.length * 100) + '%';
  mat8SaveProgress(_mat8Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function mat8SaveProgress(cap, correct) {
  try {
    var key = _mat8PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// ═══ INIT ═══
function _mat8Init() {
  // arranca na tab Teoria com o cap 1 selecionado
  mat8BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat8Init);
else _mat8Init();

/* ═══ GERADOR DE EXERCÍCIOS — Cap 1 Números (fiel ao Prisma 8) ═══ */
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
