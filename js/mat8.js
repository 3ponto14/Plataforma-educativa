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

// ═══ INIT ═══
function _mat8Init() {
  // arranca na tab Teoria com o cap 1 selecionado
  mat8BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mat8Init);
else _mat8Init();
