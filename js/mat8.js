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
  3: ['Monómios', 'Operações com monómios', 'Polinómios', 'Operações com polinómios', 'Equações do 1.º grau', 'Equações com denominadores'],
  4: ['Teorema de Pitágoras', 'Recíproco', 'Aplicações a áreas'],
  5: ['Equações literais', 'Imagem de uma função', 'Função afim', 'Declive de uma reta'],
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
  2: [],
  3: [
    { tag: 'Definição', q: 'O que é um monómio?', a: 'É o produto de um número (coeficiente) por uma parte literal com expoentes naturais. Ex: 5x⁴ tem coeficiente 5 e parte literal x⁴.' },
    { tag: 'Definição', q: 'Qual é o grau de um monómio?', a: 'É a soma dos expoentes da parte literal. 5x⁴ tem grau 4; 4x²y² tem grau 4 (2+2).' },
    { tag: 'Definição', q: 'O que são monómios semelhantes?', a: 'São monómios com a mesma parte literal. Ex: 3x²y e −7x²y são semelhantes. Só estes se podem somar/subtrair.' },
    { tag: 'Regra', q: 'Como multiplicar monómios?', a: 'Multiplicam-se os coeficientes e somam-se os expoentes das mesmas variáveis. Ex: 3x² × 4x³ = 12x⁵.' },
    { tag: 'Regra', q: 'Como somar monómios semelhantes?', a: 'Somam-se os coeficientes e mantém-se a parte literal. Ex: 5x³ + 9x³ = 14x³. (Não semelhantes não se somam.)' },
    { tag: 'Definição', q: 'O que é um polinómio?', a: 'É uma soma de monómios. Ex: x² + 3x + 1. O grau do polinómio é o maior grau dos seus monómios.' },
    { tag: 'Regra', q: 'Como simplificar um polinómio?', a: 'Juntam-se os termos semelhantes (mesma parte literal). Ex: 4xy + 3x − 2xy − 7x = 2xy − 4x.' },
    { tag: 'Propriedade', q: 'Propriedade distributiva em polinómios', a: 'a(b + c) = ab + ac. Ex: 5(3x + 7) = 15x + 35. Usa-se para multiplicar um monómio por um polinómio.' },
    { tag: 'Definição', q: 'O que é uma equação do 1.º grau?', a: 'Uma equação em que a incógnita aparece com expoente 1. Ex: 3x + 5 = 11. Tem (no máximo) uma solução.' },
    { tag: 'Estratégia', q: 'Como resolver ax + b = c?', a: 'Isola o termo com x: ax = c − b. Depois divide: x = (c − b) / a. Ex: 3x + 5 = 11 → 3x = 6 → x = 2.' },
    { tag: 'Estratégia', q: 'Como desembaraçar de denominadores?', a: 'Multiplica todos os termos pelo m.m.c. dos denominadores. Atenção: o sinal "−" antes de uma fração troca o sinal de todo o numerador.' },
    { tag: 'Definição', q: 'O que são equações equivalentes?', a: 'Equações com a mesma solução. Obtêm-se aplicando os princípios de equivalência (somar/multiplicar o mesmo nos dois membros).' },
    { tag: 'Exemplo', q: 'Resolve x/3 = 5', a: 'Multiplica ambos os membros por 3: x = 3 × 5 = 15.' },
    { tag: 'Exemplo', q: 'Resolve 5(3x + 7)', a: 'Distributiva: 5 × 3x + 5 × 7 = 15x + 35.' }
  ],
  4: [
    { tag: 'Teorema', q: 'Enuncia o Teorema de Pitágoras', a: 'Num triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos: a² + b² = c² (c = hipotenusa).' },
    { tag: 'Definição', q: 'O que é a hipotenusa?', a: 'É o lado maior de um triângulo retângulo, oposto ao ângulo reto. Os outros dois lados são os catetos.' },
    { tag: 'Regra', q: 'Como calcular a hipotenusa?', a: 'c = √(a² + b²). Ex: catetos 3 e 4 → c = √(9+16) = √25 = 5.' },
    { tag: 'Regra', q: 'Como calcular um cateto?', a: 'Cateto = √(hipotenusa² − outro cateto²). Ex: hip 13, cateto 5 → √(169−25) = √144 = 12.' },
    { tag: 'Propriedade', q: 'Recíproco do Teorema de Pitágoras', a: 'Se num triângulo o quadrado do maior lado for igual à soma dos quadrados dos outros dois, então o triângulo é retângulo.' },
    { tag: 'Exemplo', q: '3, 4, 5 formam triângulo retângulo?', a: 'Sim: 3² + 4² = 9 + 16 = 25 = 5². É um terno pitagórico.' },
    { tag: 'Exemplo', q: 'Ternos pitagóricos comuns', a: '(3,4,5), (5,12,13), (8,15,17), (7,24,25) e os seus múltiplos, como (6,8,10).' },
    { tag: 'Estratégia', q: 'Diagonal de um retângulo', a: 'A diagonal é a hipotenusa do triângulo formado por dois lados: d = √(comprimento² + largura²).' },
    { tag: 'Estratégia', q: 'Diagonal de um quadrado de lado L', a: 'd = √(L² + L²) = √(2L²) = L√2 ≈ 1,41 × L.' },
    { tag: 'Definição', q: 'O que é o apótema de um polígono regular?', a: 'É a distância do centro ao ponto médio de um lado. Usa-se na área: A = (Perímetro × apótema) / 2.' }
  ],
  5: [
    { tag: 'Definição', q: 'O que é uma equação literal?', a: 'Uma equação com mais do que uma letra (variáveis/parâmetros). Pode resolver-se "em ordem a" uma delas, isolando-a. Ex: P = 2(c + l) → c = P/2 − l.' },
    { tag: 'Estratégia', q: 'Como resolver em ordem a uma variável?', a: 'Trata as outras letras como números: isola a variável pretendida usando as operações inversas, como numa equação normal.' },
    { tag: 'Definição', q: 'O que é uma função?', a: 'Uma correspondência que associa a cada objeto (x) uma e uma só imagem (y). Escreve-se y = f(x).' },
    { tag: 'Definição', q: 'O que é a imagem de um objeto?', a: 'É o valor f(x) que a função associa a x. Ex: se f(x) = 2x + 1, a imagem de 3 é f(3) = 2×3 + 1 = 7.' },
    { tag: 'Definição', q: 'O que é uma função afim?', a: 'Uma função da forma y = mx + b. m é o declive e b é a ordenada na origem. O gráfico é uma reta.' },
    { tag: 'Definição', q: 'O que é uma função linear?', a: 'Uma função afim com b = 0, ou seja y = mx. O gráfico é uma reta que passa na origem. Traduz proporcionalidade direta.' },
    { tag: 'Definição', q: 'O que é o declive?', a: 'O declive m mede a inclinação da reta: quanto y varia quando x aumenta 1 unidade. m = (y₂ − y₁) / (x₂ − x₁).' },
    { tag: 'Definição', q: 'O que é a ordenada na origem?', a: 'É o valor de y quando x = 0 (o b em y = mx + b). É o ponto onde a reta corta o eixo das ordenadas (Oy).' },
    { tag: 'Regra', q: 'Retas paralelas — que relação têm?', a: 'Duas retas são paralelas se tiverem o mesmo declive (m igual). Ex: y = 2x + 1 e y = 2x − 3 são paralelas.' },
    { tag: 'Exemplo', q: 'Calcula o declive entre A(1, 2) e B(3, 8)', a: 'm = (8 − 2) / (3 − 1) = 6 / 2 = 3.' },
    { tag: 'Exemplo', q: 'Em y = −4x + 5, qual o declive e a ordenada na origem?', a: 'Declive m = −4; ordenada na origem b = 5.' }
  ],
  6: [], 7: [], 8: []
};

// Seleção atual por tab
var _mat8Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function mat8SwitchTab(tab, btn) {
  var pratModos = ['exercicios', 'quiz', 'flashcards', 'teste', 'jogos'];
  document.querySelectorAll('.mat7-hub-tab').forEach(function(b){ b.classList.remove('active'); });
  if (btn) {
    btn.classList.add('active');
  } else {
    // sub-modos de prática ativam o botão "Praticar"
    var targetTab = pratModos.indexOf(tab) !== -1 ? 'praticar' : tab;
    var tabBtn = document.querySelector('.mat7-hub-tab[data-tab="' + targetTab + '"]');
    if (tabBtn) tabBtn.classList.add('active');
  }
  document.querySelectorAll('.mat7-panel').forEach(function(p){ p.classList.remove('active'); p.style.setProperty('display','none','important'); });
  var panel = document.getElementById('mat8p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 8.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') mat8BuildResumoNav();
  else if (tab === 'exercicios') mat8BuildPraticarNav();
  else if (tab === 'quiz') mat8QuizBuildNav();
  else if (tab === 'flashcards') mat8FcBuildNav();
  else if (tab === 'teste') mat8TesteBuildNav();
  else if (tab === 'jogos') mat8JogosInit();
  else if (tab === 'fichas') mat8FichasBuildNav();
  else if (tab === 'progresso') mat8RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function mat8OpenPraticar(modo) { mat8SwitchTab(modo, null); }

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
  if (cap === 3 && typeof buildEx_m83 === 'function') return buildEx_m83;
  if (cap === 4 && typeof buildEx_m84 === 'function') return buildEx_m84;
  if (cap === 5 && typeof buildEx_m85 === 'function') return buildEx_m85;
  return null;
}
var _mat8TemasCount = { 1: 11, 3: 6, 4: 4, 5: 4 };

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
  1: { // Cap 1 Números
    1: ['1'],            // Dízimas
    2: ['2', '3'],       // Multiplicação e divisão
    3: ['4', '5'],       // Propriedades e expressões
    4: ['6', '7', '8'],  // Potências
    5: ['9'],            // Raízes
    6: ['10', '11']      // Notação científica
  },
  3: { // Cap 3 Polinómios e Equações (1:1 com os 6 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'], 6: ['6']
  },
  4: { // Cap 4 Pitágoras: 1 Pitágoras(hip+cateto), 2 Recíproco, 3 Aplicações
    1: ['1', '2'], 2: ['3'], 3: ['4']
  },
  5: { // Cap 5 Equações Literais e Funções (1:1 com os 4 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4']
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

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _mat8BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _mat8CapMeta.forEach(function(m) {
    var hasGen = !!_mat8Gerador(m.n);
    var color = _mat8CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? (onclickName + '(' + m.n + ',this)') : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  row.innerHTML = h;
}

function _mat8SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _mat8CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _mat8BuildMcQuestion(cap) {
  var gen = _mat8Gerador(cap);
  if (!gen) return null;
  var nTemas = _mat8TemasCount[cap] || 1;
  var ex = null;
  for (var i = 0; i < 10; i++) {
    var tema = String(rnd_m81(1, nTemas));
    ex = gen(tema, 'mc', 'medio');
    if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) break;
  }
  return (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) ? ex : null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _mat8Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function mat8QuizBuildNav() {
  if (!_mat8Gerador(_mat8Quiz.cap)) _mat8Quiz.cap = 1;
  _mat8BuildCapRow('mat8-quiz-cap-row', _mat8Quiz.cap, 'mat8QuizSelectCap');
  mat8QuizStart();
}

function mat8QuizSelectCap(cap, btn) {
  if (!_mat8Gerador(cap)) return;
  _mat8SetActiveCapBtn('mat8-quiz-cap-row', btn, cap);
  _mat8Quiz.cap = cap;
  mat8QuizStart();
}

function mat8QuizStart() {
  _mat8Quiz.lives = 3; _mat8Quiz.streak = 0; _mat8Quiz.maxStreak = 0;
  _mat8Quiz.score = 0; _mat8Quiz.total = 0; _mat8Quiz.answered = false;
  mat8QuizNext();
}

function mat8QuizNext() {
  var app = document.getElementById('mat8-quiz-app');
  if (!app) return;
  if (_mat8Quiz.lives <= 0) { mat8QuizGameOver(app); return; }
  var ex = _mat8BuildMcQuestion(_mat8Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _mat8Quiz.current = ex; _mat8Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _mat8Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="mat8qopt-' + idx + '" onclick="mat8QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_mat8Quiz.streak > 1 ? '🔥 ' + _mat8Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _mat8Quiz.score + ' / ' + _mat8Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="mat8-quiz-fb" style="min-height:2.5rem"></div>';
}

function mat8QuizAnswer(idx) {
  if (_mat8Quiz.answered) return;
  _mat8Quiz.answered = true;
  var ex = _mat8Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _mat8Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('mat8qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('mat8-quiz-fb');
  if (correct) {
    _mat8Quiz.score++; _mat8Quiz.streak++;
    if (_mat8Quiz.streak > _mat8Quiz.maxStreak) _mat8Quiz.maxStreak = _mat8Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _mat8Quiz.lives--; _mat8Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  mat8SaveProgress(_mat8Quiz.cap, correct);
  setTimeout(function(){ mat8QuizNext(); }, 1400);
}

function mat8QuizGameOver(app) {
  var pct = _mat8Quiz.total > 0 ? Math.round(_mat8Quiz.score / _mat8Quiz.total * 100) : 0;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _mat8Quiz.score + ' certas em ' + _mat8Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_mat8Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="mat8QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _mat8Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function mat8FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_mat8Cards[_mat8Fc.cap] && _mat8Cards[_mat8Fc.cap].length)) {
    for (var c = 1; c <= 8; c++) { if (_mat8Cards[c] && _mat8Cards[c].length) { _mat8Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('mat8-fc-cap-row');
  if (row) {
    var h = '';
    _mat8CapMeta.forEach(function(m) {
      var has = !!(_mat8Cards[m.n] && _mat8Cards[m.n].length);
      var color = _mat8CapColors[m.n] || '#516860';
      var isActive = _mat8Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('mat8FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  mat8FcSelectCap(_mat8Fc.cap, null);
}

function mat8FcSelectCap(cap, btn) {
  if (!(_mat8Cards[cap] && _mat8Cards[cap].length)) return;
  if (btn) _mat8SetActiveCapBtn('mat8-fc-cap-row', btn, cap);
  _mat8Fc.cap = cap;
  _mat8Fc.cards = _mat8Cards[cap].slice();
  _mat8Fc.idx = 0; _mat8Fc.flipped = false;
  mat8FcRender();
}

function mat8FcRender() {
  var app = document.getElementById('mat8-fc-app');
  if (!app) return;
  var cards = _mat8Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_mat8Fc.idx];
  var color = _mat8CapColors[_mat8Fc.cap] || '#516860';
  var pct = Math.round((_mat8Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_mat8Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="mat8FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_mat8Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_mat8Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="mat8FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="mat8FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="mat8FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function mat8FcFlip() { _mat8Fc.flipped = !_mat8Fc.flipped; mat8FcRender(); }
function mat8FcNext() { _mat8Fc.idx = (_mat8Fc.idx + 1) % (_mat8Fc.cards.length || 1); _mat8Fc.flipped = false; mat8FcRender(); }
function mat8FcPrev() { _mat8Fc.idx = (_mat8Fc.idx - 1 + (_mat8Fc.cards.length || 1)) % (_mat8Fc.cards.length || 1); _mat8Fc.flipped = false; mat8FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _mat8Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function mat8TesteBuildNav() {
  if (!_mat8Gerador(_mat8Teste.cap)) _mat8Teste.cap = 1;
  _mat8BuildCapRow('mat8-teste-cap-row', _mat8Teste.cap, 'mat8TesteSelectCap');
  mat8TesteRenderConfig();
}

function mat8TesteSelectCap(cap, btn) {
  if (!_mat8Gerador(cap)) return;
  _mat8SetActiveCapBtn('mat8-teste-cap-row', btn, cap);
  _mat8Teste.cap = cap;
  mat8TesteRenderConfig();
}

function mat8TesteRenderConfig() {
  var app = document.getElementById('mat8-teste-app');
  if (!app) return;
  if (_mat8Teste.timer) { clearInterval(_mat8Teste.timer); _mat8Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="mat8-teste-nivel">' +
            '<button class="gen-level-btn' + (_mat8Teste.nivel==='facil'?' active':'') + '" onclick="mat8TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_mat8Teste.nivel==='medio'?' active':'') + '" onclick="mat8TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_mat8Teste.nivel==='dificil'?' active':'') + '" onclick="mat8TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="mat8-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="mat8-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="mat8TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function mat8TesteSetNivel(nivel, btn) {
  _mat8Teste.nivel = nivel;
  var grp = document.getElementById('mat8-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat8TesteStart() {
  var gen = _mat8Gerador(_mat8Teste.cap); if (!gen) return;
  var qtdEl = document.getElementById('mat8-teste-qtd'), tempoEl = document.getElementById('mat8-teste-tempo');
  _mat8Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _mat8Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var nTemas = _mat8TemasCount[_mat8Teste.cap] || 1;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _mat8Teste.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat8Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _mat8Teste.exs = exs; _mat8Teste.answered = {}; _mat8Teste.score = { correct: 0, total: 0 };
  _mat8Teste.restante = _mat8Teste.tempo;

  var app = document.getElementById('mat8-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'mat8TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="mat8-teste-timer">' + _mat8FmtTime(_mat8Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="mat8-teste-answered">0 / ' + _mat8Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="mat8TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="mat8-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _mat8Teste.timer = setInterval(function() {
    _mat8Teste.restante--;
    var t = document.getElementById('mat8-teste-timer');
    if (t) t.textContent = _mat8FmtTime(_mat8Teste.restante);
    if (_mat8Teste.restante <= 0) mat8TesteFinish();
  }, 1000);
}

function _mat8FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function mat8TesteCheck(qid, tipo, val, btn) {
  if (_mat8Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _mat8Teste.answered[qid] = true;
  if (r.correct) _mat8Teste.score.correct++;
  _mat8Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('mat8-teste-answered');
  if (a) a.textContent = _mat8Teste.score.total + ' / ' + _mat8Teste.qtd;
  mat8SaveProgress(_mat8Teste.cap, r.correct);
  if (_mat8Teste.score.total >= _mat8Teste.qtd) setTimeout(mat8TesteFinish, 600);
}

function mat8TesteFinish() {
  if (_mat8Teste.timer) { clearInterval(_mat8Teste.timer); _mat8Teste.timer = null; }
  var app = document.getElementById('mat8-teste-app');
  if (!app) return;
  var total = _mat8Teste.qtd;
  var correct = _mat8Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="mat8TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _mat8JogosInited = false;
function mat8JogosInit() {
  if (_mat8JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    _j24AutoInit('mat8-jogos-app', 'medio');
    _mat8JogosInited = true;
  } else {
    var app = document.getElementById('mat8-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_mat8_capN (gravado por mat8SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _mat8ProgGetCaps() {
  var out = [];
  for (var cap = 1; cap <= 8; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_mat8_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function mat8RenderProgresso() {
  var el = document.getElementById('mat8-progresso-content');
  if (!el) return;
  var caps = _mat8ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;

  var msg = totalT === 0 ? 'Ainda não começaste. Vai a Praticar e responde a umas questões!'
    : globalPct >= 80 ? 'Excelente trabalho! Estás a dominar a matéria.'
    : globalPct >= 60 ? 'Bom progresso! Continua a praticar para consolidar.'
    : globalPct >= 40 ? 'A progredir! Há capítulos que pedem mais atenção.'
    : 'Começaste! Pratica com regularidade — cada questão conta.';
  var icon = totalT === 0 ? 'ph-rocket-launch' : globalPct >= 80 ? 'ph-trophy' : globalPct >= 60 ? 'ph-star' : globalPct >= 40 ? 'ph-trend-up' : 'ph-book-open';

  var h = '';
  // Aviso localStorage
  h += '<div style="display:flex;align-items:center;gap:.75rem;background:#fdf0ef;border:1px solid #e8b4b0;border-radius:10px;padding:.65rem 1rem;margin-bottom:1.25rem;font-size:.82rem;color:#8b3a35;flex-wrap:wrap">'
     + '<i class="ph ph-info" style="flex-shrink:0"></i>'
     + '<span style="flex:1">O progresso é guardado <strong>apenas neste browser e neste dispositivo</strong>. '
     + '<button onclick="mat8ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente índigo do 8.º ano)
  h += '<div style="background:var(--m8c1-base);border:1.5px solid var(--m8c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m8c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '—') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="mat8ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // Stat chips
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.75rem;margin-bottom:1.5rem">';
  [{ v: totalT, l: 'Questões respondidas' }, { v: totalC, l: 'Respostas certas' }, { v: totalT > 0 ? globalPct + '%' : '—', l: 'Taxa global' }].forEach(function(s) {
    h += '<div class="card" style="text-align:center;padding:1rem .75rem">'
       + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.75rem;font-weight:900;color:var(--ink);line-height:1">' + s.v + '</div>'
       + '<div style="font-size:.68rem;font-weight:700;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-top:4px">' + s.l + '</div>'
       + '</div>';
  });
  h += '</div>';

  // Barras por capítulo
  h += '<div class="card"><div class="card-title">Desempenho por capítulo</div><div style="display:flex;flex-direction:column;gap:.75rem;margin-top:.5rem">';
  caps.forEach(function(c) {
    var m = _mat8CapMeta[c.cap - 1];
    var color = _mat8CapColors[c.cap] || '#516860';
    var label = c.total > 0 ? (c.pct + '% · ' + c.correct + '/' + c.total) : 'sem atividade';
    h += '<div>'
       + '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:.25rem"><span style="font-weight:700;color:var(--ink2)">' + m.label + '</span><span style="color:var(--ink4)">' + label + '</span></div>'
       + '<div style="height:8px;background:var(--border);border-radius:99px;overflow:hidden"><div style="height:100%;width:' + c.pct + '%;background:' + color + ';border-radius:99px;transition:width .4s"></div></div>'
       + '</div>';
  });
  h += '</div></div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="mat8ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

function mat8ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 8.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= 8; cap++) { try { localStorage.removeItem('edupt_mat8_cap' + cap); } catch (e) {} }
  mat8RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 8.º ano limpo.', 'ok');
}

function mat8ProgDownloadPDF() {
  var caps = _mat8ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _mat8CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '—') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '—') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Matemática 8.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '—') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-mat8.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS — gerador de ficha PDF (auto-contido)
   Escolhe capítulo + nível + nº de exercícios; gera ficha imprimível
   com os exercícios do gerador, com opção de soluções.
   ════════════════════════════════════════════════════════════════ */
var _mat8Fichas = { cap: 1, nivel: 'medio', qtd: 10, solucoes: true };

function mat8FichasBuildNav() {
  if (!_mat8Gerador(_mat8Fichas.cap)) _mat8Fichas.cap = 1;
  _mat8BuildCapRow('mat8-fichas-cap-row', _mat8Fichas.cap, 'mat8FichasSelectCap');
}

function mat8FichasSelectCap(cap, btn) {
  if (!_mat8Gerador(cap)) return;
  _mat8SetActiveCapBtn('mat8-fichas-cap-row', btn, cap);
  _mat8Fichas.cap = cap;
}

function mat8FichasSetNivel(nivel, btn) {
  _mat8Fichas.nivel = nivel;
  var grp = document.getElementById('mat8-fichas-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function mat8FichasToggleSolucoes(btn) {
  _mat8Fichas.solucoes = !_mat8Fichas.solucoes;
  if (btn) { btn.classList.toggle('active', _mat8Fichas.solucoes); var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _mat8Fichas.solucoes ? '✓' : ''; }
}

function mat8FichasGerar() {
  var gen = _mat8Gerador(_mat8Fichas.cap); if (!gen) return;
  var qtdEl = document.getElementById('mat8-fichas-qtd');
  _mat8Fichas.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  var m = _mat8CapMeta[_mat8Fichas.cap - 1];
  var nTemas = _mat8TemasCount[_mat8Fichas.cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc'];
  var exs = [];
  for (var i = 0; i < _mat8Fichas.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _mat8Fichas.nivel);
    if (ex) exs.push(ex);
  }

  var nivelLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_mat8Fichas.nivel];
  var body = '';
  exs.forEach(function(ex, i) {
    body += '<div style="margin-bottom:14px;page-break-inside:avoid">'
      + '<div style="font-weight:700;font-size:13px;margin-bottom:4px">' + (i + 1) + '. ' + ex.enun + '</div>';
    if (ex.tipo === 'mc' && ex.opcoes) {
      body += '<div style="font-size:12.5px;color:#333;padding-left:14px">';
      ex.opcoes.forEach(function(o, k) { body += '(' + 'ABCD'[k] + ') ' + o + '&nbsp;&nbsp;&nbsp; '; });
      body += '</div>';
    } else if (ex.tipo === 'vf') {
      body += '<div style="font-size:12.5px;color:#333;padding-left:14px">Verdadeiro &nbsp;☐&nbsp;&nbsp; Falso &nbsp;☐</div>';
    } else {
      body += '<div style="border-bottom:1px solid #bbb;height:22px;margin:4px 0 0;width:60%"></div>';
    }
    body += '</div>';
  });

  var solucoesHTML = '';
  if (_mat8Fichas.solucoes) {
    var sol = exs.map(function(ex, i) {
      return '<div style="font-size:12px;margin-bottom:3px"><strong>' + (i + 1) + '.</strong> ' + ex.resposta + (ex.expl ? ' — <span style="color:#555">' + ex.expl + '</span>' : '') + '</div>';
    }).join('');
    solucoesHTML = '<div style="page-break-before:always;padding-top:10px">'
      + '<h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + sol + '</div>';
  }

  var html = '<div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:16px">'
    + '<div><h1 style="font-size:19px;margin:0">Ficha · ' + m.label + '</h1>'
    + '<div style="font-size:12px;color:#666">Matemática 8.º Ano · Nível ' + nivelLabel + '</div></div>'
    + '<div style="font-size:12px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:12px;color:#666;margin-bottom:14px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + body + solucoesHTML + '</div>';

  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'ficha-mat8-cap' + _mat8Fichas.cap + '.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
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

/* ════════════════════════════════════════════════════════════════
   GERADOR — Cap 3 Polinómios e Equações do 1.º grau (Prisma 8)
   Temas:
    1 Monómios (coeficiente, grau, semelhantes)
    2 Operações com monómios (produto, soma de semelhantes)
    3 Polinómios (grau, simplificação)
    4 Operações com polinómios (soma, produto)
    5 Equações do 1.º grau (com parênteses)
    6 Equações com denominadores
   Reutiliza helpers _m81 (rnd_m81, etc.) já definidos no mat8.js.
   ════════════════════════════════════════════════════════════════ */
// expoente unicode para x^n
function _expX_m83(n) { return n === 1 ? 'x' : ('x' + sup_m81(n)); }

function buildEx_m83(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var maxC = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Monómios ──
  if (tema === '1') {
    if (tipo === 'mc') {
      var c1 = rndNZ_m81(2, maxC), g1 = rnd_m81(1, 4);
      var correct1 = String(g1);
      var opts1 = shuffle_m81([g1, g1 + 1, g1 - 1 || g1 + 2, g1 + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts1.indexOf(correct1) === -1) opts1[0] = correct1;
      return {
        enun: 'Qual é o grau do monómio <strong>' + c1 + _expX_m83(g1) + '</strong>?',
        tipo: 'mc', opcoes: opts1, resposta: correct1,
        expl: 'O grau de um monómio é o expoente da parte literal: ' + c1 + _expX_m83(g1) + ' tem grau ' + g1 + '.',
        tema: 'T1 · Monómios'
      };
    }
    if (tipo === 'vf') {
      var c2 = rndNZ_m81(2, maxC), g2 = rnd_m81(2, 4);
      var claimC = Math.random() < 0.5;
      var stmt = 'o coeficiente do monómio ' + c2 + _expX_m83(g2) + ' é ' + (claimC ? c2 : g2);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt + '.', tipo: 'vf', resposta: claimC ? 'V' : 'F',
        expl: 'No monómio ' + c2 + _expX_m83(g2) + ', o coeficiente é ' + c2 + ' e a parte literal é ' + _expX_m83(g2) + '.',
        tema: 'T1 · Monómios'
      };
    }
    var cf = rndNZ_m81(2, maxC), gf = rnd_m81(1, 4);
    return {
      enun: 'Indica o coeficiente do monómio ' + cf + _expX_m83(gf) + '.', tipo: 'fill',
      resposta: String(cf), expl: 'O coeficiente é o número que multiplica a parte literal: ' + cf + '.',
      tema: 'T1 · Monómios'
    };
  }

  // ── TEMA 2 · Operações com monómios ──
  if (tema === '2') {
    var op = Math.random() < 0.5 ? 'prod' : 'soma';
    if (op === 'prod') {
      // a·x^m × b·x^n = ab·x^(m+n)
      var a = rndNZ_m81(2, maxC), m = rnd_m81(1, 3);
      var b = rndNZ_m81(2, maxC), n = rnd_m81(1, 3);
      var coef = a * b, exp = m + n;
      var res = coef + _expX_m83(exp);
      if (tipo === 'mc') {
        var w = [(a + b) + _expX_m83(exp), coef + _expX_m83(m * n), (a * b) + _expX_m83(Math.abs(m - n) || 1)];
        var opts = shuffle_m81([res].concat(w).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
        if (opts.indexOf(res) === -1) opts[0] = res;
        return {
          enun: 'Simplifica: ' + a + _expX_m83(m) + ' × ' + b + _expX_m83(n),
          tipo: 'mc', opcoes: opts, resposta: res,
          expl: 'Multiplica os coeficientes (' + a + '×' + b + '=' + coef + ') e soma os expoentes (' + m + '+' + n + '=' + exp + ') → ' + res + '.',
          tema: 'T2 · Op. Monómios'
        };
      }
      return {
        enun: 'Simplifica: ' + a + _expX_m83(m) + ' × ' + b + _expX_m83(n), tipo: 'fill', resposta: res,
        expl: 'Coeficientes: ' + a + '×' + b + '=' + coef + '. Expoentes: ' + m + '+' + n + '=' + exp + '. Resultado: ' + res + '.',
        tema: 'T2 · Op. Monómios'
      };
    }
    // soma de semelhantes: a·x^m + b·x^m = (a+b)·x^m
    var aa = rndNZ_m81(2, maxC), bb = rndNZ_m81(2, maxC), mm = rnd_m81(1, 3);
    var soma = aa + bb;
    var rsoma = soma + _expX_m83(mm);
    if (tipo === 'mc') {
      var ws = [soma + _expX_m83(mm * 2), (aa * bb) + _expX_m83(mm), soma + _expX_m83(mm + 1)];
      var optsS = shuffle_m81([rsoma].concat(ws).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
      if (optsS.indexOf(rsoma) === -1) optsS[0] = rsoma;
      return {
        enun: 'Simplifica: ' + aa + _expX_m83(mm) + ' + ' + bb + _expX_m83(mm),
        tipo: 'mc', opcoes: optsS, resposta: rsoma,
        expl: 'Monómios semelhantes: somam-se os coeficientes (' + aa + '+' + bb + '=' + soma + ') e mantém-se a parte literal → ' + rsoma + '.',
        tema: 'T2 · Op. Monómios'
      };
    }
    return {
      enun: 'Simplifica: ' + aa + _expX_m83(mm) + ' + ' + bb + _expX_m83(mm), tipo: 'fill', resposta: rsoma,
      expl: 'Soma dos coeficientes (mesma parte literal): ' + aa + '+' + bb + '=' + soma + ' → ' + rsoma + '.',
      tema: 'T2 · Op. Monómios'
    };
  }

  // ── TEMA 3 · Polinómios (grau e simplificação) ──
  if (tema === '3') {
    if (tipo === 'mc') {
      // grau de um polinómio
      var g = rnd_m81(2, 4);
      var poly = rnd_m81(2, maxC) + _expX_m83(g) + ' + ' + rnd_m81(2, maxC) + _expX_m83(g - 1) + ' + ' + rnd_m81(2, maxC);
      var optsG = shuffle_m81([g, g + 1, g - 1, g + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (optsG.indexOf(String(g)) === -1) optsG[0] = String(g);
      return {
        enun: 'Qual é o grau do polinómio <strong>' + poly + '</strong>?',
        tipo: 'mc', opcoes: optsG, resposta: String(g),
        expl: 'O grau de um polinómio é o maior dos graus dos seus monómios: ' + g + '.',
        tema: 'T3 · Polinómios'
      };
    }
    // simplificação: ax + bx = (a+b)x  (termos semelhantes)
    var p1 = rndNZ_m81(2, maxC), p2 = rndNZ_m81(2, maxC), k = rndNZ_m81(1, maxC);
    var resS = (p1 + p2) + 'x' + (k >= 0 ? ' + ' + k : ' − ' + Math.abs(k));
    return {
      enun: 'Simplifica: ' + p1 + 'x + ' + k + ' + ' + p2 + 'x', tipo: 'fill',
      resposta: (p1 + p2) + 'x+' + k,
      expl: 'Junta os termos semelhantes em x: ' + p1 + 'x + ' + p2 + 'x = ' + (p1 + p2) + 'x. Resultado: ' + (p1 + p2) + 'x + ' + k + '.',
      tema: 'T3 · Polinómios'
    };
  }

  // ── TEMA 4 · Operações com polinómios ──
  if (tema === '4') {
    // produto monómio × binómio: a(bx + c) = abx + ac
    var a4 = rndNZ_m81(2, easy ? 5 : 8), b4 = rndNZ_m81(1, 6), c4 = rndNZ_m81(1, 8);
    var t1 = a4 * b4, t2 = a4 * c4;
    var res4 = t1 + 'x' + (t2 >= 0 ? ' + ' + t2 : ' − ' + Math.abs(t2));
    if (tipo === 'mc') {
      var w4 = [(a4 + b4) + 'x + ' + t2, t1 + 'x + ' + (a4 + c4), (a4 * b4) + 'x + ' + c4];
      var opts4 = shuffle_m81([t1 + 'x + ' + t2].concat(w4).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
      if (opts4.indexOf(t1 + 'x + ' + t2) === -1) opts4[0] = t1 + 'x + ' + t2;
      return {
        enun: 'Aplica a propriedade distributiva: ' + a4 + '(' + b4 + 'x + ' + c4 + ')',
        tipo: 'mc', opcoes: opts4, resposta: t1 + 'x + ' + t2,
        expl: a4 + ' × ' + b4 + 'x = ' + t1 + 'x e ' + a4 + ' × ' + c4 + ' = ' + t2 + ' → ' + t1 + 'x + ' + t2 + '.',
        tema: 'T4 · Op. Polinómios'
      };
    }
    return {
      enun: 'Desenvolve: ' + a4 + '(' + b4 + 'x + ' + c4 + ')', tipo: 'fill', resposta: t1 + 'x+' + t2,
      expl: 'Distributiva: ' + a4 + '×' + b4 + 'x + ' + a4 + '×' + c4 + ' = ' + t1 + 'x + ' + t2 + '.',
      tema: 'T4 · Op. Polinómios'
    };
  }

  // ── TEMA 5 · Equações do 1.º grau ──
  if (tema === '5') {
    // ax + b = c  → x = (c-b)/a, garante solução inteira
    var a5 = rndNZ_m81(2, easy ? 5 : 9);
    var sol = rnd_m81(-6, 6);
    var b5 = rndNZ_m81(-10, 10);
    var c5 = a5 * sol + b5;
    var eqn = a5 + 'x ' + (b5 >= 0 ? '+ ' + b5 : '− ' + Math.abs(b5)) + ' = ' + c5;
    if (tipo === 'mc') {
      var opts5 = shuffle_m81([sol, sol + 1, sol - 1, -sol || sol + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts5.indexOf(String(sol)) === -1) opts5[0] = String(sol);
      return {
        enun: 'Resolve em ordem a x: <strong>' + eqn + '</strong>',
        tipo: 'mc', opcoes: opts5, resposta: String(sol),
        expl: a5 + 'x = ' + c5 + ' ' + (b5 >= 0 ? '− ' + b5 : '+ ' + Math.abs(b5)) + ' = ' + (c5 - b5) + ', logo x = ' + (c5 - b5) + ' ÷ ' + a5 + ' = ' + sol + '.',
        tema: 'T5 · Equações'
      };
    }
    return {
      enun: 'Resolve em ordem a x: ' + eqn, tipo: 'fill', resposta: String(sol),
      expl: a5 + 'x = ' + (c5 - b5) + ', logo x = ' + sol + '.',
      tema: 'T5 · Equações'
    };
  }

  // ── TEMA 6 · Equações com denominadores ──
  if (tema === '6') {
    // x/a = b → x = ab  (solução inteira)
    var a6 = rnd_m81(2, 6);
    var sol6 = rnd_m81(-6, 8);
    var b6 = sol6; // x/a + 0 = ... mantemos simples
    var rhs = sol6; // x/a = (sol6)/a ... usamos forma x/a = k
    var k6 = rnd_m81(1, 6);
    var solK = a6 * k6;
    if (tipo === 'mc') {
      var opts6 = shuffle_m81([solK, solK + a6, solK - a6, a6 + k6].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts6.indexOf(String(solK)) === -1) opts6[0] = String(solK);
      return {
        enun: 'Resolve em ordem a x: <strong>x/' + a6 + ' = ' + k6 + '</strong>',
        tipo: 'mc', opcoes: opts6, resposta: String(solK),
        expl: 'Multiplica ambos os membros por ' + a6 + ': x = ' + a6 + ' × ' + k6 + ' = ' + solK + '.',
        tema: 'T6 · Eq. Denominadores'
      };
    }
    return {
      enun: 'Resolve em ordem a x: x/' + a6 + ' = ' + k6, tipo: 'fill', resposta: String(solK),
      expl: 'Multiplica por ' + a6 + ': x = ' + a6 + ' × ' + k6 + ' = ' + solK + '.',
      tema: 'T6 · Eq. Denominadores'
    };
  }

  // fallback
  return { enun: 'Resolve: 2x = 6', tipo: 'fill', resposta: '3', expl: 'x = 6 ÷ 2 = 3.', tema: 'Equações' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR — Cap 4 Teorema de Pitágoras e Áreas (Prisma 8)
   Temas:
    1 Pitágoras — calcular a hipotenusa
    2 Pitágoras — calcular um cateto
    3 Recíproco — verificar se é triângulo retângulo
    4 Aplicações — diagonal de quadrado/retângulo, áreas
   Usa ternos pitagóricos para respostas exatas.
   ════════════════════════════════════════════════════════════════ */
var _TERNOS_m84 = [[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[7,24,25],[20,21,29],[10,24,26]];

function buildEx_m84(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Pitágoras: calcular a hipotenusa ──
  if (tema === '1') {
    var t = _TERNOS_m84[rnd_m81(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var a = t[0], b = t[1], c = t[2]; // c = hipotenusa
    if (tipo === 'mc') {
      var opts = shuffle_m81([c, c + 1, c - 1, a + b].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(c)) === -1) opts[0] = String(c);
      return {
        enun: 'Um triângulo retângulo tem catetos ' + a + ' e ' + b + '. Qual é a hipotenusa?',
        tipo: 'mc', opcoes: opts, resposta: String(c),
        expl: 'Pitágoras: h² = ' + a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a+b*b) + '. h = √' + (a*a+b*b) + ' = ' + c + '.',
        tema: 'T1 · Hipotenusa'
      };
    }
    return {
      enun: 'Triângulo retângulo de catetos ' + a + ' e ' + b + '. Calcula a hipotenusa.', tipo: 'fill',
      resposta: String(c), expl: 'h = √(' + a + '² + ' + b + '²) = √' + (a*a+b*b) + ' = ' + c + '.',
      tema: 'T1 · Hipotenusa'
    };
  }

  // ── TEMA 2 · Pitágoras: calcular um cateto ──
  if (tema === '2') {
    var t2 = _TERNOS_m84[rnd_m81(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var cat = t2[0], hip = t2[2], outro = t2[1]; // dado hip e um cateto, achar 'outro'
    if (tipo === 'mc') {
      var opts2 = shuffle_m81([outro, outro + 1, outro - 1, hip - cat].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts2.indexOf(String(outro)) === -1) opts2[0] = String(outro);
      return {
        enun: 'Num triângulo retângulo a hipotenusa mede ' + hip + ' e um cateto mede ' + cat + '. Quanto mede o outro cateto?',
        tipo: 'mc', opcoes: opts2, resposta: String(outro),
        expl: 'Cateto = √(hip² − cateto²) = √(' + hip + '² − ' + cat + '²) = √(' + (hip*hip) + ' − ' + (cat*cat) + ') = √' + (hip*hip-cat*cat) + ' = ' + outro + '.',
        tema: 'T2 · Cateto'
      };
    }
    return {
      enun: 'Hipotenusa ' + hip + ', um cateto ' + cat + '. Calcula o outro cateto.', tipo: 'fill',
      resposta: String(outro), expl: '√(' + hip + '² − ' + cat + '²) = √' + (hip*hip-cat*cat) + ' = ' + outro + '.',
      tema: 'T2 · Cateto'
    };
  }

  // ── TEMA 3 · Recíproco: é triângulo retângulo? ──
  if (tema === '3') {
    var isRight = Math.random() < 0.5;
    var a3, b3, c3;
    if (isRight) {
      var tr = _TERNOS_m84[rnd_m81(0, _TERNOS_m84.length - 1)];
      a3 = tr[0]; b3 = tr[1]; c3 = tr[2];
    } else {
      // não pitagórico
      a3 = rnd_m81(3, 9); b3 = rnd_m81(4, 10); c3 = a3 + b3 - rnd_m81(1, 2);
      if (a3*a3 + b3*b3 === c3*c3) c3 += 1; // garante que NÃO é
    }
    var lados = [a3, b3, c3].sort(function (x, y) { return x - y; });
    var maior = lados[2], cat1 = lados[0], cat2 = lados[1];
    var ok = (cat1*cat1 + cat2*cat2 === maior*maior);
    return {
      enun: 'As medidas ' + a3 + ', ' + b3 + ' e ' + c3 + ' formam um triângulo retângulo?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: ok ? 'Sim' : 'Não',
      expl: 'Pelo recíproco: comparar o maior² com a soma dos quadrados dos outros. ' + maior + '² = ' + (maior*maior) + '; ' + cat1 + '² + ' + cat2 + '² = ' + (cat1*cat1 + cat2*cat2) + '. ' + (ok ? 'São iguais → é retângulo.' : 'São diferentes → não é retângulo.'),
      tema: 'T3 · Recíproco'
    };
  }

  // ── TEMA 4 · Aplicações: diagonal de retângulo ──
  if (tema === '4') {
    var t4 = _TERNOS_m84[rnd_m81(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var l1 = t4[0], l2 = t4[1], diag = t4[2];
    var kind = rnd_m81(0, 1);
    if (kind === 0) {
      // diagonal de retângulo
      if (tipo === 'mc') {
        var opts4 = shuffle_m81([diag, diag + 1, diag - 1, l1 + l2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
        if (opts4.indexOf(String(diag)) === -1) opts4[0] = String(diag);
        return {
          enun: 'Um retângulo tem lados ' + l1 + ' e ' + l2 + '. Qual é o comprimento da diagonal?',
          tipo: 'mc', opcoes: opts4, resposta: String(diag),
          expl: 'A diagonal é a hipotenusa: d = √(' + l1 + '² + ' + l2 + '²) = √' + (l1*l1+l2*l2) + ' = ' + diag + '.',
          tema: 'T4 · Aplicações'
        };
      }
      return {
        enun: 'Retângulo de lados ' + l1 + ' e ' + l2 + '. Calcula a diagonal.', tipo: 'fill',
        resposta: String(diag), expl: 'd = √(' + l1 + '² + ' + l2 + '²) = √' + (l1*l1+l2*l2) + ' = ' + diag + '.',
        tema: 'T4 · Aplicações'
      };
    }
    // área de retângulo
    var area = l1 * l2;
    return {
      enun: 'Calcula a área de um retângulo de lados ' + l1 + ' e ' + l2 + '.', tipo: 'fill',
      resposta: String(area), expl: 'Área = comprimento × largura = ' + l1 + ' × ' + l2 + ' = ' + area + '.',
      tema: 'T4 · Aplicações'
    };
  }

  // fallback
  return { enun: 'Catetos 3 e 4: hipotenusa?', tipo: 'fill', resposta: '5', expl: '√(9+16)=√25=5.', tema: 'Pitágoras' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR — Cap 5 Equações Literais e Funções (Prisma 8)
   Temas:
    1 Equações literais (resolver em ordem a uma variável)
    2 Calcular imagem de uma função f(x)
    3 Função afim (declive e ordenada na origem)
    4 Equação da reta (declive entre dois pontos)
   ════════════════════════════════════════════════════════════════ */
// "mx + b" bem formatado: trata m=±1 e o sinal de b (com "−" tipográfico).
function _afim_m85(m, b) {
  var mp = (m === 1) ? 'x' : (m === -1) ? '−x' : (m + 'x').replace('-', '−');
  if (b === 0) return mp;
  return mp + (b > 0 ? ' + ' + b : ' − ' + Math.abs(b));
}
function buildEx_m85(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var mx = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Equações literais ──
  if (tema === '1') {
    // ax + b = y  → x = (y - b)/a  (apresentar resolução em ordem a x)
    var a = rndNZ_m81(2, 5);
    var sol = rnd_m81(-5, 6);
    var b = rndNZ_m81(-8, 8);
    var yval = a * sol + b;
    if (tipo === 'mc') {
      var correct = 'x = (' + yval + ' − ' + b + ') ÷ ' + a;
      var opts = shuffle_m81([correct, 'x = (' + yval + ' + ' + b + ') ÷ ' + a, 'x = ' + yval + ' ÷ ' + a + ' − ' + b, 'x = (' + yval + ' − ' + b + ') × ' + a]).slice(0, 4);
      return {
        enun: 'Resolve em ordem a x: <strong>' + a + 'x + ' + b + ' = ' + yval + '</strong>',
        tipo: 'mc', opcoes: opts, resposta: correct,
        expl: 'Isola x: ' + a + 'x = ' + yval + ' − ' + b + ', logo x = (' + yval + ' − ' + b + ') ÷ ' + a + ' = ' + sol + '.',
        tema: 'T1 · Eq. Literais'
      };
    }
    return {
      enun: 'Resolve em ordem a x e indica o valor: ' + _afim_m85(a, b) + ' = ' + yval, tipo: 'fill',
      resposta: String(sol), expl: a + 'x = ' + (yval - b) + ', x = ' + sol + '.',
      tema: 'T1 · Eq. Literais'
    };
  }

  // ── TEMA 2 · Calcular imagem f(x) ──
  if (tema === '2') {
    var m = rndNZ_m81(-mx, mx), bb = rnd_m81(-mx, mx);
    var x0 = rnd_m81(-5, 6);
    var fx = m * x0 + bb;
    var fnStr = 'f(x) = ' + _afim_m85(m, bb);
    if (tipo === 'mc') {
      var opts2 = shuffle_m81([fx, fx + m, fx - 1, m + bb].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts2.indexOf(String(fx)) === -1) opts2[0] = String(fx);
      return {
        enun: 'Considera ' + fnStr + '. Calcula f(' + x0 + ').',
        tipo: 'mc', opcoes: opts2, resposta: String(fx),
        expl: 'f(' + x0 + ') = ' + m + '×(' + x0 + ') ' + (bb >= 0 ? '+ ' + bb : '− ' + Math.abs(bb)) + ' = ' + (m*x0) + ' ' + (bb >= 0 ? '+ ' + bb : '− ' + Math.abs(bb)) + ' = ' + fx + '.',
        tema: 'T2 · Imagem f(x)'
      };
    }
    return {
      enun: 'Sendo ' + fnStr + ', calcula f(' + x0 + ').', tipo: 'fill', resposta: String(fx),
      expl: 'f(' + x0 + ') = ' + m + '×' + x0 + ' ' + (bb >= 0 ? '+ ' + bb : '− ' + Math.abs(bb)) + ' = ' + fx + '.',
      tema: 'T2 · Imagem f(x)'
    };
  }

  // ── TEMA 3 · Função afim (declive e ordenada na origem) ──
  if (tema === '3') {
    var m3 = rndNZ_m81(-mx, mx), b3 = rnd_m81(-mx, mx);
    var fnStr3 = 'y = ' + _afim_m85(m3, b3);
    var pedeDeclive = Math.random() < 0.5;
    var resposta = pedeDeclive ? m3 : b3;
    if (tipo === 'mc') {
      var opts3 = shuffle_m81([resposta, m3 + b3, -resposta, (pedeDeclive ? b3 : m3)].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts3.indexOf(String(resposta)) === -1) opts3[0] = String(resposta);
      return {
        enun: 'Na função afim <strong>' + fnStr3 + '</strong>, qual é ' + (pedeDeclive ? 'o declive' : 'a ordenada na origem') + '?',
        tipo: 'mc', opcoes: opts3, resposta: String(resposta),
        expl: 'Na forma y = mx + b, o declive é m = ' + m3 + ' e a ordenada na origem é b = ' + b3 + '. Pedido: ' + resposta + '.',
        tema: 'T3 · Função Afim'
      };
    }
    return {
      enun: 'Na função ' + fnStr3 + ', indica ' + (pedeDeclive ? 'o declive' : 'a ordenada na origem') + '.', tipo: 'fill',
      resposta: String(resposta), expl: 'Declive m = ' + m3 + ', ordenada na origem b = ' + b3 + '.',
      tema: 'T3 · Função Afim'
    };
  }

  // ── TEMA 4 · Declive entre dois pontos ──
  if (tema === '4') {
    // escolhe declive inteiro: dados dois pontos com diferença divisível
    var m4 = rndNZ_m81(-4, 4);
    var x1 = rnd_m81(-4, 2), x2 = x1 + rnd_m81(1, 4);
    var y1 = rnd_m81(-5, 5), y2 = y1 + m4 * (x2 - x1);
    if (tipo === 'mc') {
      var opts4 = shuffle_m81([m4, m4 + 1, m4 - 1, -m4 || m4 + 2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts4.indexOf(String(m4)) === -1) opts4[0] = String(m4);
      return {
        enun: 'Qual é o declive da reta que passa em A(' + x1 + ', ' + y1 + ') e B(' + x2 + ', ' + y2 + ')?',
        tipo: 'mc', opcoes: opts4, resposta: String(m4),
        expl: 'm = (y₂ − y₁) / (x₂ − x₁) = (' + y2 + ' − ' + y1 + ') / (' + x2 + ' − ' + x1 + ') = ' + (y2-y1) + ' / ' + (x2-x1) + ' = ' + m4 + '.',
        tema: 'T4 · Declive'
      };
    }
    return {
      enun: 'Calcula o declive da reta por A(' + x1 + ', ' + y1 + ') e B(' + x2 + ', ' + y2 + ').', tipo: 'fill',
      resposta: String(m4), expl: 'm = (' + y2 + ' − ' + y1 + ')/(' + x2 + ' − ' + x1 + ') = ' + (y2-y1) + '/' + (x2-x1) + ' = ' + m4 + '.',
      tema: 'T4 · Declive'
    };
  }

  // fallback
  return { enun: 'f(x)=2x+1, calcula f(3)', tipo: 'fill', resposta: '7', expl: '2×3+1=7.', tema: 'Funções' };
}
