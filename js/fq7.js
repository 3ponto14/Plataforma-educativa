/* ════════════════════════════════════════════════════════════════
   MAT8 HUB - Físico-Química 7.º ano
   Modelo de HUB ÚNICO espelhado no mat7 (NUNCA páginas por capítulo).
   Tabs: Teoria · Praticar · Fichas · Progresso.
   Capítulos são botões de seleção; conteúdo renderizado por JS.
   ════════════════════════════════════════════════════════════════ */

// ═══ Capítulos do 8.º ano (Prisma 8) ═══
var _fq7CapMeta = [
  {n:1, icon:'<i class="ph ph-planet"></i>',        label:'Universo'},
  {n:2, icon:'<i class="ph ph-moon-stars"></i>',    label:'Terra, Lua e Forças'},
  {n:3, icon:'<i class="ph ph-flask"></i>',         label:'Materiais'},
  {n:4, icon:'<i class="ph ph-lightning"></i>',     label:'Energia'}
];

// Cores por capítulo
var _fq7CapColors = {
  1:'#4f86b0', 2:'#7d6aa8', 3:'#4d978f', 4:'#a8854d'
};

// Subtemas por capítulo (programa FQ 7.º — Universo FQ7)
var _fq7Subtemas = {
  1: ['Astros e o Universo', 'Distâncias no Universo', 'Sistema solar', 'Observar o céu'],
  2: ['Movimentos da Terra', 'Fases da Lua', 'Forças e gravidade'],
  3: ['Substâncias e misturas', 'Soluções e concentração', 'Densidade (massa volúmica)', 'Estados físicos', 'Separar misturas'],
  4: ['Fontes e formas de energia', 'Transferências de energia', 'Unidades de energia']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (FQ 7.º — base no Universo FQ7) ═══
var _fq7Cards = {
  1: [
    { st: 1, tag: 'Definição', q: 'O que é o Universo?', a: 'É tudo o que existe: toda a matéria, energia, espaço e tempo. Inclui todos os astros — estrelas, planetas, galáxias — e o espaço entre eles.' },
    { st: 1, tag: 'Definição', q: 'O que é um astro?', a: 'Qualquer corpo celeste no Universo: estrelas (como o Sol), planetas, satélites (como a Lua), asteroides, cometas e meteoroides.' },
    { st: 1, tag: 'Definição', q: 'O que é uma estrela?', a: 'Um astro com luz própria, formado por gases muito quentes onde ocorrem reações nucleares. O Sol é a estrela mais próxima da Terra.' },
    { st: 1, tag: 'Definição', q: 'O que é uma galáxia?', a: 'Um enorme conjunto de estrelas, gases e poeiras que se movem em conjunto em torno de um centro comum. A nossa galáxia é a Via Láctea.' },
    { st: 1, tag: 'Definição', q: 'O que é a Via Láctea?', a: 'A galáxia onde está o sistema solar. Tem milhares de milhões de estrelas, gases e poeiras a rodar em torno do seu centro. O Sol NÃO está no centro.' },
    { st: 1, tag: 'Hierarquia', q: 'Ordem de tamanho: planeta, galáxia, sistema solar, Universo?', a: 'Do menor para o maior: planeta < sistema solar < galáxia < grupo de galáxias < Universo.' },
    { st: 3, tag: 'Definição', q: 'O que é o sistema solar?', a: 'O conjunto formado pelo Sol e por tudo o que orbita à sua volta: 8 planetas, planetas anões, satélites, asteroides e cometas.' },
    { st: 3, tag: 'Definição', q: 'Quais são os 8 planetas do sistema solar (por ordem do Sol)?', a: 'Mercúrio, Vénus, Terra, Marte, Júpiter, Saturno, Úrano e Neptuno. (Os 4 primeiros são rochosos; os 4 últimos, gasosos gigantes.)' },
    { st: 3, tag: 'Definição', q: 'O que é um planeta anão? Dá um exemplo.', a: 'Um astro que orbita o Sol e tem forma quase esférica, mas não "limpou" a sua órbita de outros corpos. Ex.: Plutão.' },
    { st: 2, tag: 'Distâncias', q: 'Que unidade se usa para distâncias dentro do sistema solar?', a: 'A unidade astronómica (UA): é a distância média da Terra ao Sol, cerca de 150 milhões de km.' },
    { st: 2, tag: 'Distâncias', q: 'O que é o ano-luz?', a: 'A distância que a luz percorre num ano (≈ 9,5 milhões de milhões de km). Usa-se para distâncias muito grandes, entre estrelas e galáxias. É uma distância, NÃO um tempo.' },
    { st: 4, tag: 'Modelo', q: 'O que é o modelo geocêntrico?', a: 'O modelo antigo que punha a Terra imóvel no centro do Universo, com o Sol e os planetas a girar à sua volta. Foi posto em causa por Galileu.' },
    { st: 4, tag: 'Modelo', q: 'O que é o modelo heliocêntrico?', a: 'O modelo atual: o Sol está no centro do sistema solar e a Terra e os outros planetas giram à sua volta. Defendido por Copérnico e apoiado por Galileu.' },
    { st: 4, tag: 'Instrumentos', q: 'Para que serve um telescópio?', a: 'Para observar astros distantes e de grandes dimensões (planetas, estrelas, galáxias). Galileu foi o primeiro a usá-lo em astronomia.' },
    { st: 4, tag: 'Instrumentos', q: 'O que é o telescópio Hubble?', a: 'Um telescópio espacial, em órbita da Terra, lançado em 1990 pela agência espacial americana (NASA). Tem o nome do cientista Edwin Hubble.' },
    { st: 1, tag: 'Curiosidade', q: 'O Universo está em expansão. Quem propôs essa ideia?', a: 'Edwin Hubble. As galáxias afastam-se umas das outras — o Universo está a expandir-se.' }
  ],
  2: [
    { st: 1, tag: 'Definição', q: 'O que é o movimento de rotação da Terra?', a: 'É o movimento da Terra em torno do seu próprio eixo. Demora ~24 horas e é responsável pela sucessão dos dias e das noites. Faz-se de oeste para este.' },
    { st: 1, tag: 'Definição', q: 'O que é o movimento de translação da Terra?', a: 'É o movimento da Terra à volta do Sol. Demora ~365 dias (um ano). Junto com a inclinação do eixo, dá origem às estações do ano.' },
    { st: 1, tag: 'Regra', q: 'O que causa o dia e a noite?', a: 'A ROTAÇÃO da Terra. Como a Terra roda, cada zona fica virada para o Sol (dia) ou para o lado oposto (noite).' },
    { st: 1, tag: 'Regra', q: 'O que causa as estações do ano?', a: 'A TRANSLAÇÃO da Terra à volta do Sol, combinada com a inclinação do eixo da Terra. Não é a distância ao Sol.' },
    { st: 2, tag: 'Definição', q: 'O que são as fases da Lua?', a: 'São os diferentes aspetos da parte iluminada da Lua vista da Terra: Lua Nova, Quarto Crescente, Lua Cheia e Quarto Minguante. Repetem-se em ~29,5 dias.' },
    { st: 2, tag: 'Definição', q: 'Quanto tempo demora a Lua a dar uma volta à Terra?', a: 'Cerca de 27,3 dias. O período de rotação da Lua é igual, por isso vemos sempre a mesma face.' },
    { st: 2, tag: 'Propriedade', q: 'Porque vemos sempre a mesma face da Lua?', a: 'Porque a Lua demora o MESMO tempo a rodar sobre si própria e a dar uma volta à Terra (~27,3 dias). Da Terra só vemos metade da superfície da Lua.' },
    { st: 2, tag: 'Definição', q: 'Quando ocorre um eclipse solar?', a: 'Em fase de Lua Nova, quando a Lua se coloca ENTRE o Sol e a Terra, fazendo sombra na Terra.' },
    { st: 2, tag: 'Definição', q: 'Quando ocorre um eclipse lunar?', a: 'Em fase de Lua Cheia, quando a Terra se coloca ENTRE o Sol e a Lua, fazendo sombra na Lua.' },
    { st: 3, tag: 'Definição', q: 'O que é uma força?', a: 'Uma ação que pode alterar o movimento de um corpo ou deformá-lo. Mede-se em newton (N) e representa-se por um vetor (seta).' },
    { st: 3, tag: 'Definição', q: 'O que é a força gravítica?', a: 'A força de atração entre corpos com massa. A Terra atrai os corpos para o seu centro; é o que nos mantém no chão e mantém a Lua e os satélites em órbita.' },
    { st: 3, tag: 'Regra', q: 'De que depende a força gravítica?', a: 'É MAIOR quanto maior for a massa dos corpos, e MENOR quanto maior for a distância entre eles.' },
    { st: 3, tag: 'Definição', q: 'Qual é a diferença entre massa e peso?', a: 'Massa (kg) é a quantidade de matéria, é sempre igual. Peso (N) é a força gravítica sobre o corpo e varia conforme o planeta (na Lua pesamos menos).' },
    { st: 3, tag: 'Curiosidade', q: 'O que mantém um satélite em órbita da Terra?', a: 'A força gravítica que a Terra exerce sobre ele. Sem essa força, o satélite seguiria em linha reta para longe.' },
    { st: 3, tag: 'Notação', q: 'Como se representa uma força num desenho?', a: 'Por um vetor (seta): o comprimento indica a intensidade (em N, conforme a escala); a direção e o sentido indicam para onde a força atua.' },
    { st: 1, tag: 'Exemplo', q: 'Em que sentido se faz a rotação da Terra?', a: 'De oeste para este — por isso o Sol parece "nascer" a este e "pôr-se" a oeste.' }
  ],
  3: [
    { st: 1, tag: 'Definição', q: 'O que é uma substância pura?', a: 'Um material formado por um único tipo de constituinte, com propriedades fixas. Ex.: água destilada, ouro puro, oxigénio.' },
    { st: 1, tag: 'Definição', q: 'O que é uma mistura?', a: 'Um material formado por duas ou mais substâncias. Ex.: água com sal, ar, leite, granito.' },
    { st: 1, tag: 'Definição', q: 'Diferença entre mistura homogénea e heterogénea?', a: 'Homogénea: aspeto uniforme, não se distinguem os componentes (ex.: água com sal, ar). Heterogénea: distinguem-se os componentes (ex.: água com areia, granito).' },
    { st: 2, tag: 'Definição', q: 'O que é uma solução?', a: 'Uma mistura homogénea de um soluto dissolvido num solvente. Ex.: água com açúcar — o açúcar é o soluto, a água é o solvente.' },
    { st: 2, tag: 'Definição', q: 'O que é o soluto e o solvente?', a: 'Soluto: a substância que se dissolve (menor quantidade). Solvente: a substância onde o soluto se dissolve (maior quantidade).' },
    { st: 2, tag: 'Fórmula', q: 'Como se calcula a concentração mássica de uma solução?', a: 'Concentração = massa do soluto ÷ volume da solução. Unidade habitual: g/dm³. Ex.: 2,4 g em 1 dm³ → 2,4 g/dm³.' },
    { st: 3, tag: 'Definição', q: 'O que é a massa volúmica (densidade)?', a: 'A massa por unidade de volume de um material: ρ = massa ÷ volume. Unidade: g/cm³, g/dm³ ou kg/m³.' },
    { st: 3, tag: 'Fórmula', q: 'Como se calcula a massa volúmica?', a: 'ρ = m / V (massa a dividir pelo volume). Ex.: 1,14 g num volume de 1 dm³ → 1,14 g/dm³.' },
    { st: 3, tag: 'Regra', q: 'Um corpo flutua ou afunda em função de quê?', a: 'Da massa volúmica: se for menor que a do líquido, flutua; se for maior, afunda. A madeira flutua na água; o ferro afunda.' },
    { st: 4, tag: 'Definição', q: 'Quais são os três estados físicos da matéria?', a: 'Sólido (forma e volume fixos), líquido (volume fixo, forma do recipiente) e gasoso (sem forma nem volume fixos).' },
    { st: 4, tag: 'Definição', q: 'Como se chamam as mudanças de estado físico?', a: 'Fusão (sólido→líquido), solidificação (líquido→sólido), vaporização (líquido→gasoso), condensação (gasoso→líquido) e sublimação (sólido→gasoso).' },
    { st: 5, tag: 'Estratégia', q: 'Como separar areia da água?', a: 'Por filtração: a água passa pelo filtro e a areia (sólido insolúvel) fica retida.' },
    { st: 5, tag: 'Estratégia', q: 'Como separar sal dissolvido na água?', a: 'Por evaporação (ou destilação, se quiseres recuperar também a água): a água evapora e o sal fica.' },
    { st: 5, tag: 'Estratégia', q: 'Como separar limalha de ferro de areia?', a: 'Com um íman (separação magnética): o íman atrai o ferro e deixa a areia.' },
    { st: 5, tag: 'Estratégia', q: 'Como separar dois líquidos que não se misturam (água e óleo)?', a: 'Por decantação, com uma ampola de decantação: o líquido mais denso (água) sai por baixo.' },
    { st: 1, tag: 'Exemplo', q: 'O ar é uma substância pura ou uma mistura?', a: 'É uma mistura (homogénea) de gases: principalmente azoto (~78%) e oxigénio (~21%).' }
  ],
  4: [
    { st: 1, tag: 'Definição', q: 'O que é a energia?', a: 'A capacidade de produzir alterações (movimento, calor, luz, som…). Não se cria nem se destrói, apenas se transfere e transforma.' },
    { st: 1, tag: 'Definição', q: 'O que é uma fonte e um recetor de energia?', a: 'Fonte: o que cede energia (ex.: o Sol, uma pilha). Recetor: o que recebe energia (ex.: uma planta, uma lâmpada).' },
    { st: 1, tag: 'Definição', q: 'Fontes de energia renováveis e não renováveis?', a: 'Renováveis: não se esgotam (Sol, vento, água, biomassa). Não renováveis: esgotam-se (carvão, petróleo, gás natural — combustíveis fósseis).' },
    { st: 1, tag: 'Definição', q: 'Quais são algumas formas de energia?', a: 'Cinética (movimento), potencial (posição), térmica (calor), luminosa (luz), sonora (som), elétrica e química.' },
    { st: 2, tag: 'Regra', q: 'Como se transfere energia por calor?', a: 'A energia transfere-se sempre do corpo a MAIOR temperatura para o de MENOR temperatura, até ficarem em equilíbrio.' },
    { st: 3, tag: 'Fórmula', q: 'Qual é a unidade de energia no Sistema Internacional?', a: 'O joule (J). Também se usam a caloria (cal) e o quilowatt-hora (kWh). 1 cal = 4,18 J.' },
    { st: 3, tag: 'Conversão', q: 'Quantos joules são 1 caloria?', a: '1 cal = 4,18 J. Ex.: 100 kcal = 100 000 cal = 418 000 J.' },
    { st: 1, tag: 'Definição', q: 'O que é a energia cinética?', a: 'A energia associada ao movimento de um corpo. Quanto maior a velocidade e a massa, maior a energia cinética.' },
    { st: 1, tag: 'Definição', q: 'O que é a energia potencial gravítica?', a: 'A energia que um corpo tem por estar a uma certa altura. Quanto mais alto, maior a energia potencial gravítica.' },
    { st: 2, tag: 'Princípio', q: 'O que diz a conservação da energia?', a: 'A energia não se cria nem se destrói; apenas se transforma ou se transfere. A energia total mantém-se.' },
    { st: 2, tag: 'Definição', q: 'O que é o rendimento de um sistema?', a: 'A fração da energia recebida que é aproveitada para o fim útil. O resto dissipa-se (em geral como calor). É sempre menor que 100%.' },
    { st: 1, tag: 'Exemplo', q: 'No Sol a aquecer a Terra, qual é a fonte e o recetor?', a: 'Fonte: o Sol. Recetor: a Terra. A energia transfere-se por radiação (luz).' },
    { st: 2, tag: 'Exemplo', q: 'Que transformação de energia há numa lâmpada?', a: 'Energia elétrica → energia luminosa (luz) + energia térmica (calor, que é a parte dissipada).' },
    { st: 1, tag: 'Exemplo', q: 'Que energia tem a água no topo de uma barragem?', a: 'Energia potencial gravítica. Ao cair, transforma-se em cinética e depois em elétrica (na central).' },
    { st: 1, tag: 'Curiosidade', q: 'De onde vem a maior parte da energia na Terra?', a: 'Do Sol — direta ou indiretamente (vento, chuva, plantas e até os combustíveis fósseis têm origem na energia solar).' },
    { st: 3, tag: 'Conversão', q: 'Quantos joules tem 1 quilojoule (kJ)?', a: '1 kJ = 1000 J. O quilojoule usa-se para quantidades maiores de energia, como o valor energético dos alimentos.' }
  ]
};

// Seleção atual por tab
var _fq7Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function fq7SwitchTab(tab, btn) {
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
  var panel = document.getElementById('fq7p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Mat. 8.º ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') fq7BuildResumoNav();
  else if (tab === 'exercicios') fq7BuildPraticarNav();
  else if (tab === 'quiz') fq7QuizBuildNav();
  else if (tab === 'flashcards') fq7FcBuildNav();
  else if (tab === 'teste') fq7TesteBuildNav();
  else if (tab === 'jogos') fq7JogosInit();
  else if (tab === 'fichas') fq7FichasBuildNav();
  else if (tab === 'progresso') fq7RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function fq7OpenPraticar(modo) { fq7SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function fq7BuildResumoNav() {
  var capRow = document.getElementById('fq7-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _fq7Sel['resumo'] || 1;
  var h = '';
  _fq7CapMeta.forEach(function(m) {
    var color = _fq7CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="fq7ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  fq7ResumoShowSts(activeCap);
  fq7RenderResumoInline();
}

function fq7ResumoSelectCap(cap, btn) {
  _fq7Sel['resumo'] = cap;
  _fq7Sel['resumo-st'] = 0;
  var capRow = document.getElementById('fq7-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _fq7CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  fq7ResumoShowSts(cap);
  fq7RenderResumoInline();
}

function fq7ResumoShowSts(cap) {
  var stRow = document.getElementById('fq7-resumo-st-row');
  if (!stRow) return;
  var sts = _fq7Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var _stSel = _fq7Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="fq7ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="fq7ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function fq7ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('fq7-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _fq7Sel['resumo'] = cap;
  _fq7Sel['resumo-st'] = stIdx;
  fq7RenderResumoInline();
}

function fq7RenderResumoInline() {
  var cap = _fq7Sel['resumo'] || 1;
  var dest = document.getElementById('fq7-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _fq7CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _fq7Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _fq7Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _fq7PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Gerador por capítulo (resolução lazy - buildEx_f71 é definida no fim do ficheiro).
// Só os caps com gerador são "praticáveis".

/* ═══ BANCO DE EXERCÍCIOS FQ 7.º (conceptual) ═══
   {t: subtema(1..N), enun, tipo:'mc'|'vf', opcoes, resposta, expl}
   Cap 1 (Universo) baseado no Universo FQ7. Caps 2-4 starters. */
var _fq7Banco = {
  1: [
    { t:1, tipo:'mc', enun:'Qual destes tem <strong>luz própria</strong>?', opcoes:['O Sol','A Lua','A Terra','Marte'], resposta:'O Sol', expl:'As estrelas (como o Sol) têm luz própria. A Lua e os planetas só refletem a luz do Sol.' },
    { t:1, tipo:'mc', enun:'O que é a <strong>Via Láctea</strong>?', opcoes:['A nossa galáxia','Um planeta','Uma estrela','Um satélite'], resposta:'A nossa galáxia', expl:'A Via Láctea é a galáxia onde está o sistema solar — milhares de milhões de estrelas.' },
    { t:1, tipo:'vf', enun:'O Sol está no centro da Via Láctea.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'O Sol é apenas uma das muitas estrelas da Via Láctea; não está no centro.' },
    { t:1, tipo:'mc', enun:'Coloca por ordem CRESCENTE de tamanho:', opcoes:['planeta < sistema solar < galáxia','galáxia < planeta < sistema solar','sistema solar < planeta < galáxia','planeta < galáxia < sistema solar'], resposta:'planeta < sistema solar < galáxia', expl:'Um planeta cabe no sistema solar, que faz parte de uma galáxia.' },
    { t:1, tipo:'vf', enun:'Uma estrela é um astro com luz própria.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'As estrelas produzem a sua própria luz através de reações nucleares.' },
    { t:2, tipo:'mc', enun:'Que unidade se usa para distâncias DENTRO do sistema solar?', opcoes:['Unidade astronómica (UA)','Ano-luz','Quilómetro','Metro'], resposta:'Unidade astronómica (UA)', expl:'1 UA ≈ 150 milhões de km (distância Terra–Sol). O ano-luz usa-se para distâncias muito maiores.' },
    { t:2, tipo:'vf', enun:'O ano-luz é uma unidade de TEMPO.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'O ano-luz é uma DISTÂNCIA: a distância que a luz percorre num ano (≈ 9,5 biliões de km).' },
    { t:2, tipo:'mc', enun:'1 unidade astronómica (UA) é aproximadamente:', opcoes:['150 milhões de km','150 mil km','1 milhão de km','9,5 biliões de km'], resposta:'150 milhões de km', expl:'É a distância média da Terra ao Sol.' },
    { t:3, tipo:'mc', enun:'Qual é o <strong>terceiro</strong> planeta a contar do Sol?', opcoes:['Terra','Vénus','Marte','Mercúrio'], resposta:'Terra', expl:'Ordem: Mercúrio, Vénus, Terra, Marte, Júpiter, Saturno, Úrano, Neptuno.' },
    { t:3, tipo:'mc', enun:'Quantos planetas tem o sistema solar?', opcoes:['8','9','7','10'], resposta:'8', expl:'São 8 planetas. Plutão foi reclassificado como planeta anão em 2006.' },
    { t:3, tipo:'vf', enun:'Plutão é um planeta anão.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Plutão orbita o Sol e tem forma quase esférica, mas não limpou a sua órbita → planeta anão.' },
    { t:3, tipo:'mc', enun:'Qual é o maior planeta do sistema solar?', opcoes:['Júpiter','Terra','Saturno','Neptuno'], resposta:'Júpiter', expl:'Júpiter é o maior — um gigante gasoso.' },
    { t:4, tipo:'mc', enun:'No modelo <strong>heliocêntrico</strong>, o que está no centro?', opcoes:['O Sol','A Terra','A Lua','A Via Láctea'], resposta:'O Sol', expl:'Hélio = Sol. Copérnico e Galileu defenderam o Sol no centro do sistema solar.' },
    { t:4, tipo:'mc', enun:'No modelo <strong>geocêntrico</strong>, o que estava no centro?', opcoes:['A Terra','O Sol','Júpiter','A Lua'], resposta:'A Terra', expl:'Geo = Terra. Era o modelo antigo, posto em causa por Galileu.' },
    { t:4, tipo:'mc', enun:'O telescópio Hubble é um telescópio…', opcoes:['espacial (em órbita da Terra)','de bolso','de raios X no solo','submarino'], resposta:'espacial (em órbita da Terra)', expl:'Foi lançado em 1990 e orbita a Terra, fora da atmosfera.' },
    { t:4, tipo:'vf', enun:'Galileu foi o primeiro a usar o telescópio em observações astronómicas.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Com o telescópio, Galileu pôs em causa o modelo geocêntrico.' },
    { t:1, tipo:'mc', enun:'O que é uma <strong>constelação</strong>?', opcoes:['Um grupo de estrelas que forma um desenho no céu','Um planeta com anéis','Uma galáxia pequena','Um satélite artificial'], resposta:'Um grupo de estrelas que forma um desenho no céu', expl:'As constelações (ex.: Ursa Maior) são agrupamentos aparentes de estrelas usados para orientação.' },
    { t:2, tipo:'mc', enun:'Para distâncias entre estrelas usa-se sobretudo o…', opcoes:['ano-luz','quilómetro','metro','unidade astronómica'], resposta:'ano-luz', expl:'As distâncias entre estrelas são enormes; a UA seria pequena demais.' },
    { t:3, tipo:'mc', enun:'Os planetas <strong>gasosos</strong> do sistema solar são:', opcoes:['Júpiter, Saturno, Úrano e Neptuno','Mercúrio, Vénus, Terra e Marte','só Júpiter','Terra e Marte'], resposta:'Júpiter, Saturno, Úrano e Neptuno', expl:'Os 4 mais afastados são gigantes gasosos; os 4 interiores são rochosos.' },
    { t:4, tipo:'vf', enun:'No modelo heliocêntrico, a Terra gira em torno do Sol.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Heliocêntrico = Sol no centro; os planetas, incluindo a Terra, orbitam-no.' }
  ],
  2: [
    { t:1, tipo:'mc', enun:'O que causa o dia e a noite?', opcoes:['A rotação da Terra','A translação da Terra','As fases da Lua','O movimento do Sol'], resposta:'A rotação da Terra', expl:'A Terra roda sobre si mesma (rotação) em ~24 h → dia e noite.' },
    { t:1, tipo:'mc', enun:'Quanto tempo demora a rotação da Terra?', opcoes:['Cerca de 24 horas','Cerca de 1 mês','Cerca de 365 dias','Cerca de 27 dias'], resposta:'Cerca de 24 horas', expl:'A rotação (volta sobre o próprio eixo) demora ~24 h.' },
    { t:1, tipo:'mc', enun:'O que dá origem às estações do ano?', opcoes:['A translação da Terra (e a inclinação do eixo)','A rotação da Terra','As marés','As fases da Lua'], resposta:'A translação da Terra (e a inclinação do eixo)', expl:'A Terra dá uma volta ao Sol num ano; a inclinação do eixo causa as estações.' },
    { t:1, tipo:'vf', enun:'A rotação da Terra faz-se de oeste para este.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Por isso o Sol parece nascer a este e pôr-se a oeste.' },
    { t:1, tipo:'vf', enun:'As estações do ano devem-se à distância da Terra ao Sol.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'Devem-se à inclinação do eixo e à translação, não à distância.' },
    { t:2, tipo:'mc', enun:'Quanto tempo (aprox.) demora a Lua a dar uma volta à Terra?', opcoes:['Cerca de 27 dias','Cerca de 24 horas','Cerca de 365 dias','Cerca de 7 dias'], resposta:'Cerca de 27 dias', expl:'O período da Lua em torno da Terra é ~27,3 dias.' },
    { t:2, tipo:'vf', enun:'Da Terra vemos sempre a mesma face da Lua.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'A Lua roda sobre si no mesmo tempo que orbita a Terra, por isso mostra sempre a mesma face.' },
    { t:2, tipo:'mc', enun:'Um eclipse solar ocorre na fase de…', opcoes:['Lua Nova','Lua Cheia','Quarto Crescente','Quarto Minguante'], resposta:'Lua Nova', expl:'A Lua fica entre o Sol e a Terra (Lua Nova), fazendo sombra na Terra.' },
    { t:2, tipo:'mc', enun:'Um eclipse lunar ocorre na fase de…', opcoes:['Lua Cheia','Lua Nova','Quarto Crescente','Quarto Minguante'], resposta:'Lua Cheia', expl:'A Terra fica entre o Sol e a Lua (Lua Cheia), fazendo sombra na Lua.' },
    { t:3, tipo:'vf', enun:'A força gravítica é maior quanto MAIOR for a massa dos corpos.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'A força gravítica aumenta com a massa e diminui com a distância.' },
    { t:3, tipo:'vf', enun:'A força gravítica aumenta quando a distância entre os corpos aumenta.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'É o contrário: quanto maior a distância, MENOR a força gravítica.' },
    { t:3, tipo:'mc', enun:'A força mede-se em…', opcoes:['newton (N)','quilograma (kg)','joule (J)','metro (m)'], resposta:'newton (N)', expl:'A unidade de força é o newton (N).' },
    { t:3, tipo:'mc', enun:'Qual é a diferença entre massa e peso?', opcoes:['Massa é a matéria (kg); peso é a força gravítica (N)','São a mesma coisa','Massa mede-se em N','Peso mede-se em kg'], resposta:'Massa é a matéria (kg); peso é a força gravítica (N)', expl:'A massa é constante; o peso varia com o planeta.' },
    { t:3, tipo:'mc', enun:'O que mantém um satélite em órbita da Terra?', opcoes:['A força gravítica da Terra','O vento solar','O magnetismo da Lua','Nada'], resposta:'A força gravítica da Terra', expl:'A gravidade "puxa" o satélite, mantendo-o em órbita.' },
    { t:3, tipo:'mc', enun:'Dois satélites iguais: A está mais perto, B mais longe da Terra. Em qual a força gravítica é maior?', opcoes:['Em A (mais perto)','Em B (mais longe)','É igual','Não há força'], resposta:'Em A (mais perto)', expl:'Menor distância → maior força gravítica.' },
    { t:1, tipo:'mc', enun:'Quanto tempo demora a translação da Terra?', opcoes:['Cerca de 365 dias (1 ano)','Cerca de 24 horas','Cerca de 27 dias','Cerca de 30 dias'], resposta:'Cerca de 365 dias (1 ano)', expl:'A translação é a volta completa ao Sol: dura ~365,25 dias.' },
    { t:2, tipo:'mc', enun:'Entre o Quarto Crescente e o Quarto Minguante, qual fase ocorre?', opcoes:['Lua Cheia','Lua Nova','Eclipse','Nenhuma'], resposta:'Lua Cheia', expl:'Sequência das fases: Nova → Crescente → Cheia → Minguante → Nova.' },
    { t:2, tipo:'vf', enun:'A Lua tem luz própria.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'A Lua não produz luz: apenas reflete a luz do Sol.' },
    { t:3, tipo:'mc', enun:'Um corpo com 5 kg de massa tem na Terra um peso de cerca de (g ≈ 10 N/kg):', opcoes:['50 N','5 N','0,5 N','500 N'], resposta:'50 N', expl:'Peso = massa × g = 5 × 10 = 50 N.' }
  ],
  3: [
    { t:1, tipo:'mc', enun:'Uma <strong>mistura</strong> é…', opcoes:['duas ou mais substâncias juntas','uma única substância pura','sempre um sólido','sempre líquida'], resposta:'duas ou mais substâncias juntas', expl:'Uma mistura tem mais do que uma substância (ex.: água com sal).' },
    { t:1, tipo:'mc', enun:'Qual destes é uma substância pura?', opcoes:['Água destilada','Água do mar','Ar','Sumo de laranja'], resposta:'Água destilada', expl:'A água destilada tem só um constituinte; as outras são misturas.' },
    { t:1, tipo:'mc', enun:'A água com areia é uma mistura…', opcoes:['heterogénea','homogénea','pura','gasosa'], resposta:'heterogénea', expl:'Distinguem-se os componentes (água e areia) → heterogénea.' },
    { t:1, tipo:'mc', enun:'A água com sal dissolvido é uma mistura…', opcoes:['homogénea','heterogénea','pura','sólida'], resposta:'homogénea', expl:'Tem aspeto uniforme, não se distinguem os componentes → homogénea (solução).' },
    { t:2, tipo:'mc', enun:'Numa solução, o que é o <strong>soluto</strong>?', opcoes:['A substância que se dissolve','O líquido onde se dissolve','O recipiente','O gás'], resposta:'A substância que se dissolve', expl:'Soluto dissolve-se no solvente (ex.: sal=soluto, água=solvente).' },
    { t:2, tipo:'mc', enun:'Na água com açúcar, qual é o solvente?', opcoes:['A água','O açúcar','O copo','O ar'], resposta:'A água', expl:'O solvente é onde se dissolve o soluto (açúcar). Aqui é a água.' },
    { t:3, tipo:'mc', enun:'A densidade (massa volúmica) calcula-se por:', opcoes:['massa ÷ volume','volume ÷ massa','massa × volume','massa + volume'], resposta:'massa ÷ volume', expl:'ρ = m / V. Ex.: 1,14 g em 1 dm³ → 1,14 g/dm³.' },
    { t:3, tipo:'mc', enun:'Um corpo flutua na água quando a sua massa volúmica é…', opcoes:['menor que a da água','maior que a da água','igual à do ar','o dobro da água'], resposta:'menor que a da água', expl:'Menos denso que o líquido → flutua (ex.: madeira).' },
    { t:3, tipo:'vf', enun:'O ferro afunda na água porque é mais denso do que ela.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'A massa volúmica do ferro é maior que a da água → afunda.' },
    { t:4, tipo:'mc', enun:'Quantos estados físicos pode ter a água?', opcoes:['Três (sólido, líquido, gasoso)','Dois','Um','Quatro'], resposta:'Três (sólido, líquido, gasoso)', expl:'Gelo (sólido), água (líquido), vapor (gasoso).' },
    { t:4, tipo:'mc', enun:'A passagem de sólido a líquido chama-se…', opcoes:['fusão','solidificação','condensação','vaporização'], resposta:'fusão', expl:'Sólido → líquido = fusão (ex.: gelo a derreter).' },
    { t:4, tipo:'mc', enun:'A passagem de líquido a gasoso chama-se…', opcoes:['vaporização','condensação','fusão','solidificação'], resposta:'vaporização', expl:'Líquido → gasoso = vaporização (ex.: água a ferver).' },
    { t:5, tipo:'mc', enun:'Como separar areia da água?', opcoes:['Filtração','Destilação','Evaporação do sal','Magnetização'], resposta:'Filtração', expl:'A filtração separa um sólido insolúvel (areia) de um líquido (água).' },
    { t:5, tipo:'mc', enun:'Como separar limalha de ferro de areia?', opcoes:['Com um íman','Filtração','Evaporação','Decantação'], resposta:'Com um íman', expl:'O íman atrai o ferro (separação magnética).' },
    { t:5, tipo:'mc', enun:'Como recuperar o sal dissolvido em água?', opcoes:['Evaporação','Filtração','Magnetização','Peneiração'], resposta:'Evaporação', expl:'A água evapora e o sal fica.' },
    { t:2, tipo:'mc', enun:'Uma solução diz-se <strong>saturada</strong> quando…', opcoes:['já não consegue dissolver mais soluto','tem pouco soluto','está muito quente','é heterogénea'], resposta:'já não consegue dissolver mais soluto', expl:'Atingiu o limite de dissolução: o soluto a mais deposita-se no fundo.' },
    { t:3, tipo:'mc', enun:'Um objeto de 200 g ocupa 100 cm³. Qual é a sua massa volúmica?', opcoes:['2 g/cm³','0,5 g/cm³','200 g/cm³','20 g/cm³'], resposta:'2 g/cm³', expl:'ρ = m/V = 200 ÷ 100 = 2 g/cm³.' },
    { t:4, tipo:'mc', enun:'A passagem de gasoso a líquido chama-se…', opcoes:['condensação','vaporização','fusão','sublimação'], resposta:'condensação', expl:'Gasoso → líquido = condensação (ex.: orvalho a formar-se de manhã).' },
    { t:5, tipo:'mc', enun:'Para separar dois líquidos miscíveis (ex.: água e álcool) usa-se…', opcoes:['destilação','filtração','decantação','um íman'], resposta:'destilação', expl:'A destilação separa líquidos com pontos de ebulição diferentes.' }
  ],
  4: [
    { t:1, tipo:'mc', enun:'Qual destas é uma <strong>fonte de energia renovável</strong>?', opcoes:['O Sol','O carvão','O petróleo','O gás natural'], resposta:'O Sol', expl:'A energia solar é renovável; carvão/petróleo/gás são fósseis (não renováveis).' },
    { t:1, tipo:'mc', enun:'Qual destas é uma fonte de energia NÃO renovável?', opcoes:['O petróleo','O vento','O Sol','A água'], resposta:'O petróleo', expl:'O petróleo é um combustível fóssil — esgota-se.' },
    { t:1, tipo:'vf', enun:'O vento é uma fonte de energia renovável.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'A energia eólica (vento) é renovável.' },
    { t:1, tipo:'mc', enun:'No Sol a aquecer a Terra, qual é a fonte de energia?', opcoes:['O Sol','A Terra','O ar','A Lua'], resposta:'O Sol', expl:'A fonte cede energia (Sol); o recetor recebe-a (Terra).' },
    { t:2, tipo:'mc', enun:'Num aquecimento, a energia transfere-se da fonte para o recetor sobretudo por…', opcoes:['calor','luz visível apenas','som','não há transferência'], resposta:'calor', expl:'A energia transfere-se como calor do corpo mais quente para o mais frio.' },
    { t:2, tipo:'mc', enun:'O calor transfere-se sempre do corpo…', opcoes:['mais quente para o mais frio','mais frio para o mais quente','maior para o menor','não se transfere'], resposta:'mais quente para o mais frio', expl:'Até atingirem a mesma temperatura (equilíbrio térmico).' },
    { t:2, tipo:'mc', enun:'Numa lâmpada, a energia elétrica transforma-se em…', opcoes:['luz e calor','som','energia química','massa'], resposta:'luz e calor', expl:'Elétrica → luminosa (útil) + térmica (dissipada).' },
    { t:2, tipo:'vf', enun:'A energia pode ser criada do nada.', opcoes:['Verdadeiro','Falso'], resposta:'Falso', expl:'A energia não se cria nem se destrói; só se transforma/transfere.' },
    { t:3, tipo:'mc', enun:'A unidade de energia no Sistema Internacional é o…', opcoes:['joule (J)','metro (m)','watt (W)','grama (g)'], resposta:'joule (J)', expl:'A energia mede-se em joule (J). 1 cal = 4,18 J.' },
    { t:3, tipo:'mc', enun:'A quantos joules corresponde 1 caloria?', opcoes:['4,18 J','1 J','100 J','1000 J'], resposta:'4,18 J', expl:'1 cal = 4,18 J.' },
    { t:3, tipo:'mc', enun:'A energia associada ao movimento chama-se energia…', opcoes:['cinética','potencial','química','sonora'], resposta:'cinética', expl:'Energia cinética = energia do movimento.' },
    { t:3, tipo:'mc', enun:'A água no topo de uma barragem tem sobretudo energia…', opcoes:['potencial gravítica','cinética','sonora','elétrica'], resposta:'potencial gravítica', expl:'Por estar em altura; ao cair transforma-se em cinética e depois elétrica.' },
    { t:3, tipo:'vf', enun:'A maior parte da energia na Terra tem origem no Sol.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'Direta ou indiretamente (vento, chuva, plantas, fósseis).' },
    { t:3, tipo:'mc', enun:'O rendimento de um sistema é sempre…', opcoes:['menor que 100%','igual a 100%','maior que 100%','zero'], resposta:'menor que 100%', expl:'Há sempre energia dissipada (em geral como calor).' },
    { t:1, tipo:'mc', enun:'A energia do Sol é uma forma de energia…', opcoes:['radiante (luminosa)','sonora','química','mecânica'], resposta:'radiante (luminosa)', expl:'A energia solar chega à Terra como radiação (luz e calor).' },
    { t:2, tipo:'vf', enun:'Numa pilha, a energia química transforma-se em energia elétrica.', opcoes:['Verdadeiro','Falso'], resposta:'Verdadeiro', expl:'A pilha guarda energia química e fornece-a ao circuito como energia elétrica.' },
    { t:3, tipo:'mc', enun:'Quanto vale 2 kJ em joules?', opcoes:['2000 J','200 J','20 J','2 J'], resposta:'2000 J', expl:'1 kJ = 1000 J, logo 2 kJ = 2000 J.' },
    { t:3, tipo:'mc', enun:'Um carro em movimento tem sobretudo energia…', opcoes:['cinética','potencial gravítica','sonora','nuclear'], resposta:'cinética', expl:'A energia cinética está associada ao movimento dos corpos.' }
  ]
};

function _fq7Gerador(cap) {
  // FQ é conceptual → usa banco de perguntas por capítulo (não geradores numéricos)
  if (typeof _fq7Banco !== 'undefined' && _fq7Banco[cap] && _fq7Banco[cap].length) {
    return function (tema, tipo, dif) { return _fq7PuxaBanco(cap, tema); };
  }
  return null;
}
var _fq7TemasCount = { 1: 4, 2: 3, 3: 5, 4: 3 };

/* Puxa uma pergunta aleatória do banco do capítulo (opcionalmente do tema). */
var _fq7BancoUsadas = {};
function _fq7PuxaBanco(cap, tema) {
  var pool = (_fq7Banco[cap] || []).filter(function (q) { return !tema || String(q.t) === String(tema); });
  if (!pool.length) pool = _fq7Banco[cap] || [];
  if (!pool.length) return null;
  var q = pool[Math.floor(Math.random() * pool.length)];
  // formato esperado pelo motor: {enun, tipo, opcoes, resposta, expl}
  return { enun: q.enun, tipo: q.tipo || 'mc', opcoes: q.opcoes || ['Verdadeiro', 'Falso'], resposta: q.resposta, expl: q.expl || '' };
}

// Estado da prática
var _fq7Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _fq7TarefaAtiva=null, _fq7TarefaResp={};

function _fq7PratStorageKey(cap) { return 'edupt_fq7_cap' + cap; }

function fq7BuildPraticarNav() {
  var capRow = document.getElementById('fq7-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _fq7Prat.cap || 1;
  var h = '';
  _fq7CapMeta.forEach(function(m) {
    var hasGen = !!_fq7Gerador(m.n);
    var color = _fq7CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'fq7PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  fq7PraticarShowSts(activeCap);
}

function fq7PraticarShowSts(cap) {
  var stRow = document.getElementById('fq7-praticar-st-row');
  if (!stRow) return;
  var sts = _fq7Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_fq7Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="fq7PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_fq7Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="fq7PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function fq7PraticarSelectCap(cap, btn) {
  if (!_fq7Gerador(cap)) return;
  _fq7Prat.cap = cap;
  _fq7Prat.st = 0;
  var capRow = document.getElementById('fq7-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _fq7CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  fq7PraticarShowSts(cap);
  fq7GerarExercicios();
}

function fq7PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('fq7-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _fq7Prat.st = stIdx;
  fq7GerarExercicios();
}

function fq7PraticarSetNivel(nivel, btn) {
  _fq7Prat.nivel = nivel;
  var grp = document.getElementById('fq7-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  fq7GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _fq7SubtemaTemas = {
  1: { // Cap 1 Números
    1: ['1'],            // Dízimas
    2: ['2', '3'],       // Multiplicação e divisão
    3: ['4', '5'],       // Propriedades e expressões
    4: ['6', '7', '8'],  // Potências
    5: ['9'],            // Raízes
    6: ['10', '11']      // Notação científica
  },
  2: { // Cap 2 Vetores e Isometrias (1:1 com os 4 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4']
  },
  3: { // Cap 3 Polinómios e Equações (1:1 com os 6 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'], 6: ['6']
  },
  4: { // Cap 4 Pitágoras: 1 Pitágoras(hip+cateto), 2 Recíproco, 3 Aplicações
    1: ['1', '2'], 2: ['3'], 3: ['4']
  },
  5: { // Cap 5 Equações Literais e Funções (1:1 com os 4 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4']
  },
  6: { // Cap 6 Sistemas (1:1 com os 4 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4']
  },
  7: { // Cap 7 Volumes (1:1 com os 6 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'], 6: ['6']
  },
  8: { // Cap 8 Dados e Probabilidades (1:1 com os 6 temas)
    1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'], 6: ['6']
  }
};

function fq7GerarExercicios() {
  var dest = document.getElementById('fq7-praticar-content');
  if (!dest) return;
  var cap = _fq7Prat.cap, gen = _fq7Gerador(cap);
  if (!gen) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_fq7Prat.st > 0 && _fq7SubtemaTemas[cap] && _fq7SubtemaTemas[cap][_fq7Prat.st]) {
    temas = _fq7SubtemaTemas[cap][_fq7Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_fq7TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  for (var i = 0; i < QTD; i++) {
    var tema = temas[i % temas.length];
    var ex = gen(tema, tipos[i % tipos.length], _fq7Prat.nivel);
    if (ex) geradas.push(ex);
  }
  var banco = (typeof _fq7Banco !== "undefined" && _fq7Banco[cap]) ? _fq7Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs = (typeof _mixBancoGeradas === "function") ? _mixBancoGeradas(banco, geradas, QTD, 2, _fq7Prat.nivel)
    : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  _fq7Prat.exs = exs;
  _fq7Prat.answered = {};
  _fq7Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="fq7-prat-scorebar">'
    + '<div><div class="score-num" id="fq7-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="fq7-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="fq7-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="fq7GerarExercicios()">↺ Novas questões</button>'
    + (_fq7TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="fq7EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'fq7CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="fq7-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _fq7CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _sn = (_fq7Subtemas[cap] && _fq7Prat.st > 0) ? (_fq7Subtemas[cap][_fq7Prat.st - 1] || '') : '';
    Atribuir.montar('fq7-atribuir', { curso: 'fq7', cursoNome: 'Físico-Química 7.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_fq7Prat.st || ''), subNome: _sn, tipo: 'quiz', nivel: _fq7Prat.nivel });
  }
}

function fq7CheckEx(qid, tipo, val, btn) {
  if (_fq7Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _fq7Prat.answered[qid] = true;
  if (r.correct) _fq7Prat.score.correct++;
  _fq7Prat.score.total++; if(_fq7TarefaAtiva){_fq7TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('fq7-prat-score'); if (se) se.textContent = _fq7Prat.score.correct;
  var te = document.getElementById('fq7-prat-total'); if (te) te.textContent = '/ ' + _fq7Prat.score.total;
  var pe = document.getElementById('fq7-prat-prog'); if (pe && _fq7Prat.exs.length) pe.style.width = (_fq7Prat.score.total / _fq7Prat.exs.length * 100) + '%';
  fq7SaveProgress(_fq7Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function fq7SaveProgress(cap, correct) {
  try {
    var key = _fq7PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 8.º ano
// ('fq7capN') para não misturar com o progresso do 7.º ano.
function _fq7PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('fq7cap' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _fq7BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _fq7CapMeta.forEach(function(m) {
    var hasGen = !!_fq7Gerador(m.n);
    var color = _fq7CapColors[m.n] || '#516860';
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

function _fq7SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _fq7CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Gera uma questão de escolha múltipla para um capítulo (usada por quiz).
function _fq7BuildMcQuestion(cap) {
  var gen = _fq7Gerador(cap);
  if (!gen) return null;
  var nTemas = _fq7TemasCount[cap] || 1;
  var ex = null;
  for (var i = 0; i < 10; i++) {
    var tema = String(rnd_f7q1(1, nTemas));
    ex = gen(tema, 'mc', 'medio');
    if (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) break;
  }
  return (ex && ex.tipo === 'mc' && ex.opcoes && ex.opcoes.length >= 2) ? ex : null;
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _fq7Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function fq7QuizBuildNav() {
  if (!_fq7Gerador(_fq7Quiz.cap)) _fq7Quiz.cap = 1;
  _fq7BuildCapRow('fq7-quiz-cap-row', _fq7Quiz.cap, 'fq7QuizSelectCap');
  fq7QuizStart();
}

function fq7QuizSelectCap(cap, btn) {
  if (!_fq7Gerador(cap)) return;
  _fq7SetActiveCapBtn('fq7-quiz-cap-row', btn, cap);
  _fq7Quiz.cap = cap;
  fq7QuizStart();
}

function fq7QuizStart() {
  _fq7Quiz.lives = 3; _fq7Quiz.streak = 0; _fq7Quiz.maxStreak = 0;
  _fq7Quiz.score = 0; _fq7Quiz.total = 0; _fq7Quiz.answered = false;
  fq7QuizNext();
}

function fq7QuizNext() {
  var app = document.getElementById('fq7-quiz-app');
  if (!app) return;
  if (_fq7Quiz.lives <= 0) { fq7QuizGameOver(app); return; }
  var ex = _fq7BuildMcQuestion(_fq7Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _fq7Quiz.current = ex; _fq7Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _fq7Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="fq7qopt-' + idx + '" onclick="fq7QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_fq7Quiz.streak > 1 ? '🔥 ' + _fq7Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _fq7Quiz.score + ' / ' + _fq7Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="fq7-quiz-fb" style="min-height:2.5rem"></div>';
}

function fq7QuizAnswer(idx) {
  if (_fq7Quiz.answered) return;
  _fq7Quiz.answered = true;
  var ex = _fq7Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _fq7Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('fq7qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('fq7-quiz-fb');
  if (correct) {
    _fq7Quiz.score++; _fq7Quiz.streak++;
    if (_fq7Quiz.streak > _fq7Quiz.maxStreak) _fq7Quiz.maxStreak = _fq7Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _fq7Quiz.lives--; _fq7Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  fq7SaveProgress(_fq7Quiz.cap, correct);
  setTimeout(function(){ fq7QuizNext(); }, 1400);
}

function fq7QuizGameOver(app) {
  var pct = _fq7Quiz.total > 0 ? Math.round(_fq7Quiz.score / _fq7Quiz.total * 100) : 0;
  _fq7PM(_fq7Quiz.cap, 'quiz', { pontuacao: _fq7Quiz.score, total: _fq7Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _fq7Quiz.score + ' certas em ' + _fq7Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_fq7Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="fq7QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _fq7Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function fq7FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_fq7Cards[_fq7Fc.cap] && _fq7Cards[_fq7Fc.cap].length)) {
    for (var c = 1; c <= 8; c++) { if (_fq7Cards[c] && _fq7Cards[c].length) { _fq7Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('fq7-fc-cap-row');
  if (row) {
    var h = '';
    _fq7CapMeta.forEach(function(m) {
      var has = !!(_fq7Cards[m.n] && _fq7Cards[m.n].length);
      var color = _fq7CapColors[m.n] || '#516860';
      var isActive = _fq7Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('fq7FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  fq7FcSelectCap(_fq7Fc.cap, null);
}

function fq7FcSelectCap(cap, btn) {
  if (!(_fq7Cards[cap] && _fq7Cards[cap].length)) return;
  if (btn) _fq7SetActiveCapBtn('fq7-fc-cap-row', btn, cap);
  _fq7Fc.cap = cap;
  _fq7Fc.cards = _fq7Cards[cap].slice();
  _fq7Fc.idx = 0; _fq7Fc.flipped = false;
  _fq7PM(cap, 'flashcard');
  fq7FcRender();
}

function fq7FcRender() {
  var app = document.getElementById('fq7-fc-app');
  if (!app) return;
  var cards = _fq7Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_fq7Fc.idx];
  var color = _fq7CapColors[_fq7Fc.cap] || '#516860';
  var pct = Math.round((_fq7Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_fq7Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="fq7FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_fq7Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_fq7Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="fq7FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="fq7FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="fq7FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function fq7FcFlip() { _fq7Fc.flipped = !_fq7Fc.flipped; fq7FcRender(); }
function fq7FcNext() { _fq7Fc.idx = (_fq7Fc.idx + 1) % (_fq7Fc.cards.length || 1); _fq7Fc.flipped = false; fq7FcRender(); }
function fq7FcPrev() { _fq7Fc.idx = (_fq7Fc.idx - 1 + (_fq7Fc.cards.length || 1)) % (_fq7Fc.cards.length || 1); _fq7Fc.flipped = false; fq7FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _fq7Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function fq7TesteBuildNav() {
  if (!_fq7Gerador(_fq7Teste.cap)) _fq7Teste.cap = 1;
  _fq7BuildCapRow('fq7-teste-cap-row', _fq7Teste.cap, 'fq7TesteSelectCap');
  fq7TesteRenderConfig();
}

function fq7TesteSelectCap(cap, btn) {
  if (!_fq7Gerador(cap)) return;
  _fq7SetActiveCapBtn('fq7-teste-cap-row', btn, cap);
  _fq7Teste.cap = cap;
  fq7TesteRenderConfig();
}

function fq7TesteRenderConfig() {
  var app = document.getElementById('fq7-teste-app');
  if (!app) return;
  if (_fq7Teste.timer) { clearInterval(_fq7Teste.timer); _fq7Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="fq7-teste-nivel">' +
            '<button class="gen-level-btn' + (_fq7Teste.nivel==='facil'?' active':'') + '" onclick="fq7TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_fq7Teste.nivel==='medio'?' active':'') + '" onclick="fq7TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_fq7Teste.nivel==='dificil'?' active':'') + '" onclick="fq7TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="fq7-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="fq7-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="fq7TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function fq7TesteSetNivel(nivel, btn) {
  _fq7Teste.nivel = nivel;
  var grp = document.getElementById('fq7-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function fq7TesteStart() {
  var gen = _fq7Gerador(_fq7Teste.cap); if (!gen) return;
  var qtdEl = document.getElementById('fq7-teste-qtd'), tempoEl = document.getElementById('fq7-teste-tempo');
  _fq7Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _fq7Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var nTemas = _fq7TemasCount[_fq7Teste.cap] || 1;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
  var exs = [];
  for (var i = 0; i < _fq7Teste.qtd; i++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _fq7Teste.nivel);
    if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
  }
  _fq7Teste.exs = exs; _fq7Teste.answered = {}; _fq7Teste.score = { correct: 0, total: 0 };
  _fq7Teste.restante = _fq7Teste.tempo;

  var app = document.getElementById('fq7-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'fq7TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="fq7-teste-timer">' + _fq7FmtTime(_fq7Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="fq7-teste-answered">0 / ' + _fq7Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="fq7TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="fq7-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _fq7Teste.timer = setInterval(function() {
    _fq7Teste.restante--;
    var t = document.getElementById('fq7-teste-timer');
    if (t) t.textContent = _fq7FmtTime(_fq7Teste.restante);
    if (_fq7Teste.restante <= 0) fq7TesteFinish();
  }, 1000);
}

function _fq7FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function fq7TesteCheck(qid, tipo, val, btn) {
  if (_fq7Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _fq7Teste.answered[qid] = true;
  if (r.correct) _fq7Teste.score.correct++;
  _fq7Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('fq7-teste-answered');
  if (a) a.textContent = _fq7Teste.score.total + ' / ' + _fq7Teste.qtd;
  fq7SaveProgress(_fq7Teste.cap, r.correct);
  if (_fq7Teste.score.total >= _fq7Teste.qtd) setTimeout(fq7TesteFinish, 600);
}

function fq7TesteFinish() {
  if (_fq7Teste.timer) { clearInterval(_fq7Teste.timer); _fq7Teste.timer = null; }
  var app = document.getElementById('fq7-teste-app');
  if (!app) return;
  var total = _fq7Teste.qtd;
  var correct = _fq7Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _fq7PM(_fq7Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="fq7TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (reutiliza o motor genérico _j24AutoInit)
   ════════════════════════════════════════════════════════════════ */
var _fq7JogosInited = false;
function fq7JogosInit() {
  (function(){ var pj=document.getElementById('fq7p-jogos'); if(pj && !document.getElementById('fq7-jogos-atr')){ var d=document.createElement('div'); d.id='fq7-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('fq7-jogos-atr',{curso:'fq7',cursoNome:'Físico-Química 7.º',tipo:'jogo',nivel:'',caps:_fq7CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  _fq7PM(_fq7Prat.cap || 1, 'jogo');
  if (_fq7JogosInited) return;
  if (typeof _j24AutoInit === 'function') {
    // Regista o curso nos jogos (matéria correta + filtro capítulo/subtema).
    if (typeof _gRegisterGameCourse === 'function') {
      _gRegisterGameCourse('fq7-jogos-app', {
        capMeta: _fq7CapMeta,
        subtemas: _fq7Subtemas,
        subtemaTemas: (typeof _fq7SubtemaTemas !== 'undefined') ? _fq7SubtemaTemas : null,
        temasCount: _fq7TemasCount,
        gerador: _fq7Gerador,
        banco: (typeof _fq7Banco !== 'undefined') ? _fq7Banco : null,
        qFor: function (level, sel) { return _jogoQForCourse(this, level, sel); }
      });
    }
    _j24AutoInit('fq7-jogos-app', 'medio');
    _fq7JogosInited = true;
  } else {
    var app = document.getElementById('fq7-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (motor não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_fq7_capN (gravado por fq7SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _fq7ProgGetCaps() {
  var out = [];
  for (var cap = 1; cap <= 8; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_fq7_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function fq7RenderProgresso() {
  var el = document.getElementById('fq7-progresso-content');
  if (!el) return;
  var caps = _fq7ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;

  var msg = totalT === 0 ? 'Ainda não começaste. Vai a Praticar e responde a umas questões!'
    : globalPct >= 80 ? 'Excelente trabalho! Estás a dominar a matéria.'
    : globalPct >= 60 ? 'Bom progresso! Continua a praticar para consolidar.'
    : globalPct >= 40 ? 'A progredir! Há capítulos que pedem mais atenção.'
    : 'Começaste! Pratica com regularidade - cada questão conta.';
  var icon = totalT === 0 ? 'ph-rocket-launch' : globalPct >= 80 ? 'ph-trophy' : globalPct >= 60 ? 'ph-star' : globalPct >= 40 ? 'ph-trend-up' : 'ph-book-open';

  var h = '';
  // Aviso localStorage
  h += '<div style="display:flex;align-items:center;gap:.75rem;background:#fdf0ef;border:1px solid #e8b4b0;border-radius:10px;padding:.65rem 1rem;margin-bottom:1.25rem;font-size:.82rem;color:#8b3a35;flex-wrap:wrap">'
     + '<i class="ph ph-info" style="flex-shrink:0"></i>'
     + '<span style="flex:1">O progresso é guardado <strong>apenas neste browser e neste dispositivo</strong>. '
     + '<button onclick="fq7ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente índigo do 8.º ano)
  h += '<div style="background:var(--m8c1-base);border:1.5px solid var(--m8c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m8c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="fq7ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 8.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('fq7cap') === 0) pmXp += (sum.caps[k].xp || 0); });
    } catch (e) {}
  }

  // Stat chips
  h += '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:.75rem;margin-bottom:1.5rem">';
  [{ v: totalT, l: 'Questões respondidas' }, { v: totalC, l: 'Respostas certas' }, { v: totalT > 0 ? globalPct + '%' : '-', l: 'Taxa global' }, { v: pmXp + ' XP', l: 'XP total' }, { v: pmStreak + (pmStreak === 1 ? ' dia' : ' dias'), l: 'Streak atual' }].forEach(function(s) {
    h += '<div class="card" style="text-align:center;padding:1rem .75rem">'
       + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.75rem;font-weight:900;color:var(--ink);line-height:1">' + s.v + '</div>'
       + '<div style="font-size:.68rem;font-weight:700;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-top:4px">' + s.l + '</div>'
       + '</div>';
  });
  h += '</div>';

  // Barras por capítulo
  h += '<div class="card"><div class="card-title">Desempenho por capítulo</div><div style="display:flex;flex-direction:column;gap:.75rem;margin-top:.5rem">';
  caps.forEach(function(c) {
    var m = _fq7CapMeta[c.cap - 1];
    var color = _fq7CapColors[c.cap] || '#516860';
    var label = c.total > 0 ? (c.pct + '% · ' + c.correct + '/' + c.total) : 'sem atividade';
    h += '<div>'
       + '<div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:.25rem"><span style="font-weight:700;color:var(--ink2)">' + m.label + '</span><span style="color:var(--ink4)">' + label + '</span></div>'
       + '<div style="height:8px;background:var(--border);border-radius:99px;overflow:hidden"><div style="height:100%;width:' + c.pct + '%;background:' + color + ';border-radius:99px;transition:width .4s"></div></div>'
       + '</div>';
  });
  h += '</div></div>';

  // Treino Direcionado: capítulo com pior taxa (entre os que têm atividade)
  if (totalT > 0) {
    var pior = null;
    caps.forEach(function(c) { if (c.total >= 3 && (!pior || c.pct < pior.pct)) pior = c; });
    if (pior) {
      var mp = _fq7CapMeta[pior.cap - 1];
      var colorp = _fq7CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="fq7TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="fq7ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function fq7TreinarCap(cap) {
  _fq7Prat.cap = cap;
  _fq7Prat.st = 0;
  fq7SwitchTab('exercicios', null);
}

function fq7ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 8.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= 8; cap++) { try { localStorage.removeItem('edupt_fq7_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 8.º ano (fq7cap*) do ProgressManager, preservando o 7.º.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('fq7cap') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  fq7RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 8.º ano limpo.', 'ok');
}

function fq7ProgDownloadPDF() {
  var caps = _fq7ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _fq7CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Físico-Química 7.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + eduAlunoLinhaPDF()
    + '<div style="background:#eef2f0;border:1px solid #9ab5aa;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#516860;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-fq7.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _fq7gf = {
  caps: {},
  sts: {},             // { cap: { stIdx: true } } subtemas por capítulo; vazio = todos            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function fq7FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('fq7-fichas-atr','fq7AtribuirFicha');
  var el = document.getElementById('fq7-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _fq7gf.caps) { if (_fq7gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _fq7CapMeta.forEach(function(m) {
    var hasGen = !!_fq7Gerador(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _fq7gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_fq7gf.caps[m.n];
    var color = _fq7CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="fq7gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // subtemas do capítulo selecionado (gerar ficha só de um subtema)
    if (sel) {
      var _sts = (typeof _fq7Subtemas !== 'undefined' && _fq7Subtemas[m.n]) ? _fq7Subtemas[m.n] : [];
      if (_sts.length) {
        var _esc = _fq7gf.sts[m.n] || {};
        var _alg = _fq7gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Subtemas:</span>';
        h += '<button onclick="fq7gfToggleSt(' + m.n + ',0,this)" style="' + _fq7gfStStyle(!_alg, color) + '">Todos</button>';
        _sts.forEach(function (st, i) {
          var on = !!_esc[i + 1];
          h += '<button onclick="fq7gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _fq7gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

// Subtemas (índices 1..n) escolhidos para um capítulo; null = todos.
function _fq7gfStsSel(cap) {
  var sel = _fq7gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves de tema correspondentes aos subtemas escolhidos; null = todos.
function _fq7gfTemasSel(cap) {
  var sts = _fq7gfStsSel(cap);
  if (!sts) return null;
  var mapa = (typeof _fq7SubtemaTemas !== 'undefined' && _fq7SubtemaTemas[cap]) ? _fq7SubtemaTemas[cap] : {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

function _fq7gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function fq7gfToggleCap(cap, btn) {
  _fq7gf.caps[cap] = !_fq7gf.caps[cap];
  if (!_fq7gf.caps[cap]) delete _fq7gf.sts[cap]; // desmarcar cap limpa os subtemas
  fq7FichasBuildNav(); // re-render para mostrar/esconder a linha de subtemas
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o subtema.
function fq7gfToggleSt(cap, idx, btn) {
  if (idx === 0) { delete _fq7gf.sts[cap]; }
  else {
    if (!_fq7gf.sts[cap]) _fq7gf.sts[cap] = {};
    _fq7gf.sts[cap][idx] = !_fq7gf.sts[cap][idx];
    if (_fq7gfStsSel(cap) === null) delete _fq7gf.sts[cap]; // tudo desmarcado = todos
  }
  fq7FichasBuildNav();
}

function fq7gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _fq7gf.tipos[t] = !_fq7gf.tipos[t];
  btn.classList.toggle('active', _fq7gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _fq7gf.tipos[t] ? '✓' : '';
}

function fq7gfSetDif(btn) {
  _fq7gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('fq7-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function fq7gfSetQty(btn) {
  _fq7gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('fq7-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _fq7gfExBloco(exs, startNum) {
  var h = '';
  var _lm = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
  var fm = (typeof formatMath === 'function') ? function(x){ return formatMath(_lm(x)); } : function(x){ return _lm(x); };
  exs.forEach(function(ex, i) {
    h += '<div style="margin-bottom:22px;page-break-inside:avoid">'
      + '<div style="font-weight:600;font-size:12.5px;margin-bottom:6px;line-height:1.5">' + (startNum + i) + '. ' + fm(ex.enun) + '</div>';
    if (ex.visual) h += '<div style="margin:6px 0 10px">' + ex.visual + '</div>'; // gráfico/tabela/figura SVG
    if (ex.tipo === 'mc' && ex.opcoes) {
      h += '<div style="font-size:12px;color:#333;padding-left:14px;line-height:2.1">';
      var _ops = (typeof _normalizaOpcoes === 'function') ? _normalizaOpcoes(ex.opcoes, ex.resposta) : ex.opcoes;
      _ops.forEach(function(o, k) { h += '<span style="display:inline-block;min-width:46%;margin-bottom:3px">(' + 'ABCD'[k] + ') ' + fm(o) + '</span>'; });
      h += '</div>';
    } else if (ex.tipo === 'vf') {
      h += '<div style="font-size:12px;color:#333;padding-left:14px;margin-top:4px">Verdadeiro&nbsp;&#9744;&nbsp;&nbsp;&nbsp;&nbsp;Falso&nbsp;&#9744;</div>';
    } else {
      // espaço de resolução: 3 linhas para o aluno escrever
      h += '<div style="margin-top:6px">'
        + '<div style="border-bottom:1px solid #ccc;height:22px"></div>'
        + '<div style="border-bottom:1px solid #ccc;height:22px"></div>'
        + '<div style="border-bottom:1px solid #ccc;height:22px;width:70%"></div>'
        + '</div>';
    }
    h += '</div>';
  });
  return h;
}

function _fq7gfGenExs(cap, n) {
  var gen = _fq7Gerador(cap); if (!gen) return [];
  var _temasFiltro = _fq7gfTemasSel(cap); // subtemas escolhidos → temas; null = todos
  var nTemas = _fq7TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var _tk = _temasFiltro ? _temasFiltro[i % _temasFiltro.length] : String((i % nTemas) + 1);
    var ex = gen(_tk, tipos[i % tipos.length], _fq7gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _fq7Banco !== 'undefined' && _fq7Banco[cap]) ? _fq7Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _fq7gf.dif);
  }
  return geradas;
}

function fq7gfGerar(formato) {
  // capítulos selecionados
  var capsSel = [];
  _fq7CapMeta.forEach(function(m) { if (_fq7gf.caps[m.n] && _fq7Gerador(m.n)) capsSel.push(m.n); });
  var status = document.getElementById('fq7-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _fq7gf.tipos.resumo || _fq7gf.tipos.exercicios || _fq7gf.tipos.teste || _fq7gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_fq7gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _fq7PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _fq7CapMeta[cap - 1];
    var color = _fq7CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_fq7gf.tipos.resumo) {
      var cards = _fq7Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_fq7gf.tipos.exercicios) {
      var exs = _fq7gfGenExs(cap, _fq7gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _fq7gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_fq7gf.tipos.teste) {
      var exsT = _fq7gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _fq7gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_fq7gf.tipos.minitestes) {
      var subt = _fq7Subtemas[cap] || [];
      var mapa = _fq7SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _fq7Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _fq7gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _fq7gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_fq7gf.tipos.solucoes && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _fq7CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Físico-Química 7.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _fq7CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('8', 'matematica', _temasNomes, formato) : ('ficha-fq7.' + (formato === 'html' ? 'html' : 'pdf'));
  if (formato === 'html') {
    try {
      var blob = new Blob(['<!DOCTYPE html><meta charset="utf-8">' + html], { type: 'text/html' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = fname; a.click();
      if (status) status.textContent = 'Ficha HTML gerada ✓';
    } catch (e) { if (status) status.textContent = 'Erro ao gerar HTML.'; }
  } else {
    if (typeof htmlToPdfDownload === 'function') { htmlToPdfDownload(html, fname); if (status) status.textContent = 'Ficha PDF gerada ✓'; }
    else if (status) status.textContent = 'Geração de PDF indisponível.';
  }
}

// ═══ INIT ═══
function _fq7Init() {
  if (typeof _addStatsTeoriaVisuais === 'function') _addStatsTeoriaVisuais(_fq7Cards[8], '#9a5e96'); // cap8 Dados
  if (typeof _addGeoTeoriaVisuais === 'function') _addGeoTeoriaVisuais(_fq7Cards[4], '#b06a6a', { pitagoras: true }); // cap4 Pitágoras
  // arranca na tab Teoria com o cap 1 selecionado
  fq7BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _fq7Init);
else _fq7Init();

/* ═══ GERADOR DE EXERCÍCIOS - Cap 1 Números (fiel ao Prisma 8) ═══ */
function rnd_f7q1(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function rndNZ_f7q1(a, b) { var v; do { v = rnd_f7q1(a, b); } while (v === 0); return v; }
function shuffle_f7q1(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
function gcd_f7q1(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
function reduce_f7q1(p, q) { if (q < 0) { p = -p; q = -q; } var g = gcd_f7q1(p, q); return [p / g, q / g]; }
function fmtFrac_f7q1(p, q) {
  var r = reduce_f7q1(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  return p + '/' + q;
}
function fmtFracHTML_f7q1(p, q) {
  var r = reduce_f7q1(p, q);
  p = r[0]; q = r[1];
  if (q === 1) return String(p);
  var sign = p < 0 ? '−' : '';
  return sign + '<sup>' + Math.abs(p) + '</sup>⁄<sub>' + q + '</sub>';
}
// expoentes em unicode
var _SUP_f7q1 = { '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
function sup_f7q1(n) { return String(n).split('').map(function (c) { return _SUP_f7q1[c] || c; }).join(''); }

function lim_f7q1(dif) {
  if (dif === 'facil') return { mx: 5 };
  if (dif === 'dificil') return { mx: 12 };
  return { mx: 8 };
}

// ── State (compat com handlers) ──
var dynState_f7q1 = {
  q: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} },
  m: { level: 'medio', score: { correct: 0, total: 0 }, answered: {}, activeMini: 1 },
  t: { level: 'medio', score: { correct: 0, total: 0 }, answered: {} }
};


function buildEx_f71(tema, tipo, dif) {
  tema = String(tema);
  var L = lim_f7q1(dif || 'medio');
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Frações decimais e dízimas ──
  if (tema === '1') {
    // dízima finita se denominador (reduzido) só tem fatores 2 e 5
    var dens1 = [2, 4, 5, 8, 10, 20, 25];          // finitas
    var dens1inf = [3, 6, 7, 9, 11, 12];           // periódicas
    if (tipo === 'mc') {
      var useFin = Math.random() < 0.5;
      var d = useFin ? dens1[rnd_f7q1(0, dens1.length - 1)] : dens1inf[rnd_f7q1(0, dens1inf.length - 1)];
      var num = rnd_f7q1(1, d - 1);
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
      var s = samples[rnd_f7q1(0, samples.length - 1)];
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
    var p1 = pairs1[rnd_f7q1(0, pairs1.length - 1)];
    return {
      enun: 'Escreve a fração ' + p1[0] + '/' + p1[1] + ' na forma de dízima.', tipo: 'fill',
      resposta: p1[2], expl: p1[0] + '/' + p1[1] + ' = ' + p1[0] + ' ÷ ' + p1[1] + ' = ' + p1[2] + '.',
      tema: 'T1 · Dízimas'
    };
  }

  // ── TEMA 2 · Multiplicação de racionais ──
  if (tema === '2') {
    var a2 = rndNZ_f7q1(1, L.mx), b2 = rndNZ_f7q1(2, L.mx);
    var c2 = rndNZ_f7q1(1, L.mx), d2 = rndNZ_f7q1(2, L.mx);
    var rp = a2 * c2, rq = b2 * d2;
    var res2 = reduce_f7q1(rp, rq);
    if (tipo === 'mc') {
      var correct2 = fmtFrac_f7q1(res2[0], res2[1]);
      var wrongs2 = [fmtFrac_f7q1(a2 * c2, b2 + d2), fmtFrac_f7q1(a2 + c2, b2 * d2), fmtFrac_f7q1(-rp, rq)];
      var opts2 = shuffle_f7q1([correct2].concat(wrongs2).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(correct2) === -1) opts2[0] = correct2;
      return {
        enun: 'Calcula: ' + fmtFracHTML_f7q1(a2, b2) + ' × ' + fmtFracHTML_f7q1(c2, d2),
        tipo: 'mc', opcoes: opts2, resposta: correct2,
        expl: 'Multiplica numeradores e denominadores: (' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_f7q1(rp, rq) + ' = ' + correct2 + '.',
        tema: 'T2 · Multiplicação'
      };
    }
    if (tipo === 'vf') {
      var simetrico = Math.random() < 0.5;
      var n2v = rndNZ_f7q1(2, L.mx), d2v = rndNZ_f7q1(2, L.mx);
      var stmt2 = 'o simétrico de ' + fmtFrac_f7q1(n2v, d2v) + ' é ' + fmtFrac_f7q1(simetrico ? -n2v : n2v, d2v);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt2 + '.', tipo: 'vf', resposta: simetrico ? 'V' : 'F',
        expl: 'O simétrico de ' + fmtFrac_f7q1(n2v, d2v) + ' é ' + fmtFrac_f7q1(-n2v, d2v) + ' (troca-se o sinal).',
        tema: 'T2 · Multiplicação'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_f7q1(a2, b2) + ' × ' + fmtFracHTML_f7q1(c2, d2), tipo: 'fill',
      resposta: fmtFrac_f7q1(res2[0], res2[1]),
      expl: '(' + a2 + '×' + c2 + ')/(' + b2 + '×' + d2 + ') = ' + fmtFrac_f7q1(res2[0], res2[1]) + '.',
      tema: 'T2 · Multiplicação'
    };
  }

  // ── TEMA 3 · Divisão de racionais ──
  if (tema === '3') {
    var a3 = rndNZ_f7q1(1, L.mx), b3 = rndNZ_f7q1(2, L.mx);
    var c3 = rndNZ_f7q1(1, L.mx), d3 = rndNZ_f7q1(2, L.mx);
    // a/b ÷ c/d = a/b × d/c
    var rp3 = a3 * d3, rq3 = b3 * c3;
    var res3 = reduce_f7q1(rp3, rq3);
    if (tipo === 'mc') {
      var correct3 = fmtFrac_f7q1(res3[0], res3[1]);
      var wrongs3 = [fmtFrac_f7q1(a3 * c3, b3 * d3), fmtFrac_f7q1(rp3, -rq3), fmtFrac_f7q1(b3 * c3, a3 * d3)];
      var opts3 = shuffle_f7q1([correct3].concat(wrongs3).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts3.indexOf(correct3) === -1) opts3[0] = correct3;
      return {
        enun: 'Calcula: ' + fmtFracHTML_f7q1(a3, b3) + ' ÷ ' + fmtFracHTML_f7q1(c3, d3),
        tipo: 'mc', opcoes: opts3, resposta: correct3,
        expl: 'Dividir é multiplicar pelo inverso: ' + fmtFrac_f7q1(a3, b3) + ' × ' + d3 + '/' + c3 + ' = ' + correct3 + '.',
        tema: 'T3 · Divisão'
      };
    }
    return {
      enun: 'Calcula: ' + fmtFracHTML_f7q1(a3, b3) + ' ÷ ' + fmtFracHTML_f7q1(c3, d3), tipo: 'fill',
      resposta: fmtFrac_f7q1(res3[0], res3[1]),
      expl: 'Multiplica pelo inverso: ' + fmtFrac_f7q1(a3, b3) + ' × ' + fmtFrac_f7q1(d3, c3) + ' = ' + fmtFrac_f7q1(res3[0], res3[1]) + '.',
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
    var pr = props[rnd_f7q1(0, props.length - 1)];
    if (tipo === 'mc' || tipo === 'vf') {
      var opts4 = shuffle_f7q1(props.map(function (x) { return x.nome; })).slice(0, 4);
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
    // Variante de contexto (problema com percentagem) - aumenta a variedade
    if (!easy && Math.random() < 0.4) {
      var ctx5 = [
        { nome: 'A Sueli recebe uma comissão de p% sobre as suas vendas', vendas: true },
        { nome: 'Um artigo de V € tem um desconto de p%', desconto: true }
      ];
      var p5 = [5, 10, 15, 20, 25][rnd_f7q1(0, 4)];
      var V5 = [200, 350, 500, 800, 1200, 6750][rnd_f7q1(0, 5)];
      var qual = rnd_f7q1(0, 1);
      if (qual === 0) {
        var com = V5 * p5 / 100;
        return {
          enun: 'Num mês, a Sueli vendeu ' + V5 + ' € e recebe uma comissão de ' + p5 + '%. Quanto recebeu de comissão? (em €)',
          tipo: 'fill', resposta: String(com),
          expl: p5 + '% de ' + V5 + ' € = (' + p5 + '/100) × ' + V5 + ' = ' + com + ' €.',
          tema: 'T5 · Expressões'
        };
      }
      var pago = V5 * (1 - p5 / 100);
      return {
        enun: 'Um artigo custava ' + V5 + ' € e tem um desconto de ' + p5 + '%. Quanto se paga agora? (em €)',
        tipo: 'fill', resposta: String(pago),
        expl: 'Valor final = ' + V5 + ' × (1 − ' + p5 + '/100) = ' + V5 + ' × ' + (1 - p5 / 100) + ' = ' + pago + ' €.',
        tema: 'T5 · Expressões'
      };
    }
    // a/b × c/d + e/f  (resultado reduzido)
    var a5 = rndNZ_f7q1(1, L.mx), b5 = rndNZ_f7q1(2, 6);
    var c5 = rndNZ_f7q1(1, L.mx), d5 = rndNZ_f7q1(2, 6);
    var e5 = rndNZ_f7q1(1, L.mx), f5 = rndNZ_f7q1(2, 6);
    var prodP = a5 * c5, prodQ = b5 * d5;
    // soma com e/f: prodP/prodQ + e5/f5
    var lcm5 = prodQ * f5 / gcd_f7q1(prodQ, f5);
    var sp5 = prodP * (lcm5 / prodQ) + e5 * (lcm5 / f5);
    var res5 = reduce_f7q1(sp5, lcm5);
    return {
      enun: 'Calcula: ' + fmtFracHTML_f7q1(a5, b5) + ' × ' + fmtFracHTML_f7q1(c5, d5) + ' + ' + fmtFracHTML_f7q1(e5, f5),
      tipo: 'fill', resposta: fmtFrac_f7q1(res5[0], res5[1]),
      expl: 'Primeiro o produto: ' + fmtFrac_f7q1(prodP, prodQ) + '. Depois soma ' + fmtFrac_f7q1(e5, f5) + ' = ' + fmtFrac_f7q1(res5[0], res5[1]) + ' (respeita a hierarquia das operações).',
      tema: 'T5 · Expressões'
    };
  }

  // ── TEMA 6 · Potências de base racional ──
  if (tema === '6') {
    var base6n = rnd_f7q1(2, 4), base6d = rnd_f7q1(2, 5), exp6 = rnd_f7q1(2, hard ? 4 : 3);
    var pn = Math.pow(base6n, exp6), pd = Math.pow(base6d, exp6);
    if (tipo === 'mc') {
      var correct6 = pn + '/' + pd;
      var wrongs6 = [(base6n * exp6) + '/' + (base6d * exp6), pn + '/' + base6d, base6n + '/' + pd];
      var opts6 = shuffle_f7q1([correct6].concat(wrongs6).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts6.indexOf(correct6) === -1) opts6[0] = correct6;
      return {
        enun: 'Calcula: (' + base6n + '/' + base6d + ')' + sup_f7q1(exp6),
        tipo: 'mc', opcoes: opts6, resposta: correct6,
        expl: '(a/b)ⁿ = aⁿ/bⁿ → ' + base6n + sup_f7q1(exp6) + '/' + base6d + sup_f7q1(exp6) + ' = ' + correct6 + '.',
        tema: 'T6 · Potências'
      };
    }
    // vf: sinal de potência de base negativa
    var bneg = rnd_f7q1(2, 5), eneg = rnd_f7q1(2, 5);
    var isEven = (eneg % 2 === 0);
    var claimPos = Math.random() < 0.5;
    return {
      enun: 'Verdadeiro ou Falso: (−' + bneg + ')' + sup_f7q1(eneg) + ' é um número ' + (claimPos ? 'positivo' : 'negativo') + '.',
      tipo: 'vf', resposta: (claimPos === isEven) ? 'V' : 'F',
      expl: 'Base negativa com expoente ' + (isEven ? 'par → positivo' : 'ímpar → negativo') + '.',
      tema: 'T6 · Potências'
    };
  }

  // ── TEMA 7 · Propriedades das potências ──
  if (tema === '7') {
    var base7 = rnd_f7q1(2, 6);
    var kind7 = rnd_f7q1(0, 2);
    if (kind7 === 0) { // mesmo base, produto
      var m7 = rnd_f7q1(2, 6), n7 = rnd_f7q1(2, 6);
      var r7 = m7 + n7;
      return {
        enun: 'Simplifica: ' + base7 + sup_f7q1(m7) + ' × ' + base7 + sup_f7q1(n7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(r7),
        expl: 'Mesma base no produto: somam-se os expoentes → ' + base7 + sup_f7q1(m7) + '⁺' + sup_f7q1(n7) + ' = ' + base7 + sup_f7q1(r7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    if (kind7 === 1) { // mesmo base, quociente
      var big7 = rnd_f7q1(5, 9), sm7 = rnd_f7q1(1, 4);
      return {
        enun: 'Simplifica: ' + base7 + sup_f7q1(big7) + ' ÷ ' + base7 + sup_f7q1(sm7) + ' = ' + base7 + '^?',
        tipo: 'fill', resposta: String(big7 - sm7),
        expl: 'Mesma base no quociente: subtraem-se os expoentes → ' + base7 + sup_f7q1(big7 - sm7) + '.',
        tema: 'T7 · Prop. Potências'
      };
    }
    // potência de potência
    var pp7a = rnd_f7q1(2, 5), pp7b = rnd_f7q1(2, 4);
    return {
      enun: 'Simplifica: (' + base7 + sup_f7q1(pp7a) + ')' + sup_f7q1(pp7b) + ' = ' + base7 + '^?',
      tipo: 'fill', resposta: String(pp7a * pp7b),
      expl: 'Potência de potência: multiplicam-se os expoentes → ' + base7 + sup_f7q1(pp7a * pp7b) + '.',
      tema: 'T7 · Prop. Potências'
    };
  }

  // ── TEMA 8 · Potências de expoente negativo ──
  if (tema === '8') {
    var base8 = rnd_f7q1(2, 5), exp8 = rnd_f7q1(1, hard ? 4 : 3);
    var val8 = Math.pow(base8, exp8);
    if (tipo === 'mc') {
      var correct8 = '1/' + val8;
      var wrongs8 = ['1/' + (base8 * exp8), '−' + val8, String(val8)];
      var opts8 = shuffle_f7q1([correct8].concat(wrongs8).filter(function (v, i, arr) { return arr.indexOf(v) === i; })).slice(0, 4);
      if (opts8.indexOf(correct8) === -1) opts8[0] = correct8;
      return {
        enun: 'Calcula: ' + base8 + sup_f7q1('-' + exp8),
        tipo: 'mc', opcoes: opts8, resposta: correct8,
        expl: 'a⁻ⁿ = 1/aⁿ → ' + base8 + sup_f7q1('-' + exp8) + ' = 1/' + base8 + sup_f7q1(exp8) + ' = 1/' + val8 + '.',
        tema: 'T8 · Expoente Negativo'
      };
    }
    return {
      enun: 'Escreve com expoente positivo: ' + base8 + sup_f7q1('-' + exp8) + ' = 1/__', tipo: 'fill',
      resposta: String(val8), expl: base8 + sup_f7q1('-' + exp8) + ' = 1/' + base8 + sup_f7q1(exp8) + ' = 1/' + val8 + '.',
      tema: 'T8 · Expoente Negativo'
    };
  }

  // ── TEMA 9 · Raízes quadradas e cúbicas ──
  if (tema === '9') {
    var cubica = (Math.random() < 0.4);
    if (cubica) {
      var roots3 = [1, 2, 3, 4, 5];
      var r3 = roots3[rnd_f7q1(0, roots3.length - 1)];
      var cube = r3 * r3 * r3;
      if (tipo === 'mc') {
        var opts9c = shuffle_f7q1([r3, r3 + 1, r3 - 1 || r3 + 2, r3 * 3].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
        if (opts9c.indexOf(String(r3)) === -1) opts9c[0] = String(r3);
        return {
          enun: 'Calcula: ∛' + cube, tipo: 'mc', opcoes: opts9c, resposta: String(r3),
          expl: '∛' + cube + ' = ' + r3 + ' porque ' + r3 + '³ = ' + cube + '.', tema: 'T9 · Raízes'
        };
      }
      return { enun: 'Calcula: ∛' + cube, tipo: 'fill', resposta: String(r3), expl: r3 + '³ = ' + cube + ', logo ∛' + cube + ' = ' + r3 + '.', tema: 'T9 · Raízes' };
    }
    var roots2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var r2 = roots2[rnd_f7q1(0, roots2.length - 1)];
    var sq = r2 * r2;
    if (tipo === 'mc') {
      var opts9 = shuffle_f7q1([r2, r2 + 1, r2 - 1, sq].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts9.indexOf(String(r2)) === -1) opts9[0] = String(r2);
      return { enun: 'Calcula: √' + sq, tipo: 'mc', opcoes: opts9, resposta: String(r2), expl: '√' + sq + ' = ' + r2 + ' porque ' + r2 + '² = ' + sq + '.', tema: 'T9 · Raízes' };
    }
    return { enun: 'Calcula: √' + sq, tipo: 'fill', resposta: String(r2), expl: r2 + '² = ' + sq + ', logo √' + sq + ' = ' + r2 + '.', tema: 'T9 · Raízes' };
  }

  // ── TEMA 10 · Notação científica ──
  if (tema === '10') {
    // gera a × 10^n a partir de um número
    var aMant = rnd_f7q1(1, 9), dec = rnd_f7q1(0, 9);
    var mant = aMant + (Math.random() < 0.5 ? '' : ',' + dec);
    var mantNum = parseFloat(mant.replace(',', '.'));
    var expo = rnd_f7q1(easy ? 2 : 3, hard ? 9 : 7);
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
      var correct10 = mant + ' × 10' + sup_f7q1(realExp);
      var wrongs10 = [mant + ' × 10' + sup_f7q1(realExp + 1), mant + ' × 10' + sup_f7q1(-realExp), (mantNum * 10) + ' × 10' + sup_f7q1(realExp - 1)];
      var opts10 = shuffle_f7q1([correct10].concat(wrongs10).filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts10.indexOf(correct10) === -1) opts10[0] = correct10;
      return {
        enun: 'Escreve <strong>' + bigNum + '</strong> em notação científica.',
        tipo: 'mc', opcoes: opts10, resposta: correct10,
        expl: bigNum + ' = ' + correct10 + ' (mantissa entre 1 e 10, expoente ' + realExp + ').',
        tema: 'T10 · Notação Científica'
      };
    }
    // vf: validade da forma a×10^n (1 ≤ a < 10)
    var aTest = [2.5, 25, 0.7, 8.1, 14][rnd_f7q1(0, 4)];
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
    var a11 = rnd_f7q1(1, 9), b11 = rnd_f7q1(1, 9);
    var m11 = rnd_f7q1(2, 8), n11 = rnd_f7q1(2, 8);
    var mult = (Math.random() < 0.5);
    if (mult) {
      var prod = a11 * b11, sumE = m11 + n11;
      var mantOut = prod, expOut = sumE;
      if (prod >= 10) { mantOut = prod / 10; expOut = sumE + 1; }
      var correct11 = String(mantOut).replace('.', ',') + ' × 10' + sup_f7q1(expOut);
      return {
        enun: 'Calcula: (' + a11 + ' × 10' + sup_f7q1(m11) + ') × (' + b11 + ' × 10' + sup_f7q1(n11) + ')',
        tipo: 'fill', resposta: correct11,
        expl: 'Multiplica as mantissas (' + a11 + '×' + b11 + '=' + prod + ') e soma os expoentes (' + m11 + '+' + n11 + '=' + sumE + ') → ' + correct11 + '.',
        tema: 'T11 · Operações N.C.'
      };
    }
    // divisão (garante mantissa exata)
    var bigA = a11 * b11; // para divisão exacta: (bigA × 10^M) ÷ (b11 × 10^n) = a11 × 10^(M-n)
    var M = n11 + rnd_f7q1(1, 5);
    var correctD = a11 + ' × 10' + sup_f7q1(M - n11);
    return {
      enun: 'Calcula: (' + bigA + ' × 10' + sup_f7q1(M) + ') ÷ (' + b11 + ' × 10' + sup_f7q1(n11) + ')',
      tipo: 'fill', resposta: correctD,
      expl: 'Divide as mantissas (' + bigA + '÷' + b11 + '=' + a11 + ') e subtrai os expoentes (' + M + '−' + n11 + '=' + (M - n11) + ') → ' + correctD + '.',
      tema: 'T11 · Operações N.C.'
    };
  }

  // fallback
  return { enun: 'Calcula: 1/2 + 1/2', tipo: 'fill', resposta: '1', expl: '1/2 + 1/2 = 1.', tema: 'Números' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 3 Polinómios e Equações do 1.º grau (Prisma 8)
   Temas:
    1 Monómios (coeficiente, grau, semelhantes)
    2 Operações com monómios (produto, soma de semelhantes)
    3 Polinómios (grau, simplificação)
    4 Operações com polinómios (soma, produto)
    5 Equações do 1.º grau (com parênteses)
    6 Equações com denominadores
   Reutiliza helpers _f7q1 (rnd_f7q1, etc.) já definidos no fq7.js.
   ════════════════════════════════════════════════════════════════ */
// expoente unicode para x^n
function _expX_m83(n) { return n === 1 ? 'x' : ('x' + sup_f7q1(n)); }

function buildEx_f73(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var maxC = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Monómios ──
  if (tema === '1') {
    if (tipo === 'mc') {
      var c1 = rndNZ_f7q1(2, maxC), g1 = rnd_f7q1(1, 4);
      var correct1 = String(g1);
      var opts1 = shuffle_f7q1([g1, g1 + 1, g1 - 1 || g1 + 2, g1 + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts1.indexOf(correct1) === -1) opts1[0] = correct1;
      return {
        enun: 'Qual é o grau do monómio <strong>' + c1 + _expX_m83(g1) + '</strong>?',
        tipo: 'mc', opcoes: opts1, resposta: correct1,
        expl: 'O grau de um monómio é o expoente da parte literal: ' + c1 + _expX_m83(g1) + ' tem grau ' + g1 + '.',
        tema: 'T1 · Monómios'
      };
    }
    if (tipo === 'vf') {
      var c2 = rndNZ_f7q1(2, maxC), g2 = rnd_f7q1(2, 4);
      var claimC = Math.random() < 0.5;
      var stmt = 'o coeficiente do monómio ' + c2 + _expX_m83(g2) + ' é ' + (claimC ? c2 : g2);
      return {
        enun: 'Verdadeiro ou Falso: ' + stmt + '.', tipo: 'vf', resposta: claimC ? 'V' : 'F',
        expl: 'No monómio ' + c2 + _expX_m83(g2) + ', o coeficiente é ' + c2 + ' e a parte literal é ' + _expX_m83(g2) + '.',
        tema: 'T1 · Monómios'
      };
    }
    var cf = rndNZ_f7q1(2, maxC), gf = rnd_f7q1(1, 4);
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
      var a = rndNZ_f7q1(2, maxC), m = rnd_f7q1(1, 3);
      var b = rndNZ_f7q1(2, maxC), n = rnd_f7q1(1, 3);
      var coef = a * b, exp = m + n;
      var res = coef + _expX_m83(exp);
      if (tipo === 'mc') {
        var w = [(a + b) + _expX_m83(exp), coef + _expX_m83(m * n), (a * b) + _expX_m83(Math.abs(m - n) || 1)];
        var opts = shuffle_f7q1([res].concat(w).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
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
    var aa = rndNZ_f7q1(2, maxC), bb = rndNZ_f7q1(2, maxC), mm = rnd_f7q1(1, 3);
    var soma = aa + bb;
    var rsoma = soma + _expX_m83(mm);
    if (tipo === 'mc') {
      var ws = [soma + _expX_m83(mm * 2), (aa * bb) + _expX_m83(mm), soma + _expX_m83(mm + 1)];
      var optsS = shuffle_f7q1([rsoma].concat(ws).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
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
      var g = rnd_f7q1(2, 4);
      var poly = rnd_f7q1(2, maxC) + _expX_m83(g) + ' + ' + rnd_f7q1(2, maxC) + _expX_m83(g - 1) + ' + ' + rnd_f7q1(2, maxC);
      var optsG = shuffle_f7q1([g, g + 1, g - 1, g + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (optsG.indexOf(String(g)) === -1) optsG[0] = String(g);
      return {
        enun: 'Qual é o grau do polinómio <strong>' + poly + '</strong>?',
        tipo: 'mc', opcoes: optsG, resposta: String(g),
        expl: 'O grau de um polinómio é o maior dos graus dos seus monómios: ' + g + '.',
        tema: 'T3 · Polinómios'
      };
    }
    // simplificação: ax + bx = (a+b)x  (termos semelhantes)
    var p1 = rndNZ_f7q1(2, maxC), p2 = rndNZ_f7q1(2, maxC), k = rndNZ_f7q1(1, maxC);
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
    var a4 = rndNZ_f7q1(2, easy ? 5 : 8), b4 = rndNZ_f7q1(1, 6), c4 = rndNZ_f7q1(1, 8);
    var t1 = a4 * b4, t2 = a4 * c4;
    var res4 = t1 + 'x' + (t2 >= 0 ? ' + ' + t2 : ' − ' + Math.abs(t2));
    if (tipo === 'mc') {
      var w4 = [(a4 + b4) + 'x + ' + t2, t1 + 'x + ' + (a4 + c4), (a4 * b4) + 'x + ' + c4];
      var opts4 = shuffle_f7q1([t1 + 'x + ' + t2].concat(w4).filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4);
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
    // Variante de contexto (problema → equação)
    if (!easy && Math.random() < 0.4) {
      var solC = rnd_f7q1(2, 12);
      var mult = rnd_f7q1(2, 5), add = rnd_f7q1(1, 15);
      var tot = mult * solC + add;
      var cenas = [
        { e: 'O ' + (mult === 2 ? 'dobro' : mult === 3 ? 'triplo' : mult + ' vezes') + ' de um número, mais ' + add + ', é igual a ' + tot + '. Qual é o número?', r: solC },
        { e: 'A Rita tem ' + add + ' € e poupa ' + mult + ' € por semana. Ao fim de quantas semanas terá ' + tot + ' €?', r: solC }
      ];
      var pc = cenas[rnd_f7q1(0, cenas.length - 1)];
      return {
        enun: pc.e, tipo: 'fill', resposta: String(pc.r),
        expl: 'Traduz por uma equação: ' + mult + 'x + ' + add + ' = ' + tot + '. Resolve: ' + mult + 'x = ' + (tot - add) + ', x = ' + solC + '.',
        tema: 'T5 · Equações'
      };
    }
    // ax + b = c  → x = (c-b)/a, garante solução inteira
    var a5 = rndNZ_f7q1(2, easy ? 5 : 9);
    var sol = rnd_f7q1(-6, 6);
    var b5 = rndNZ_f7q1(-10, 10);
    var c5 = a5 * sol + b5;
    var eqn = a5 + 'x ' + (b5 >= 0 ? '+ ' + b5 : '− ' + Math.abs(b5)) + ' = ' + c5;
    if (tipo === 'mc') {
      var opts5 = shuffle_f7q1([sol, sol + 1, sol - 1, -sol || sol + 2].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var a6 = rnd_f7q1(2, 6);
    var sol6 = rnd_f7q1(-6, 8);
    var b6 = sol6; // x/a + 0 = ... mantemos simples
    var rhs = sol6; // x/a = (sol6)/a ... usamos forma x/a = k
    var k6 = rnd_f7q1(1, 6);
    var solK = a6 * k6;
    if (tipo === 'mc') {
      var opts6 = shuffle_f7q1([solK, solK + a6, solK - a6, a6 + k6].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
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
   GERADOR - Cap 4 Teorema de Pitágoras e Áreas (Prisma 8)
   Temas:
    1 Pitágoras - calcular a hipotenusa
    2 Pitágoras - calcular um cateto
    3 Recíproco - verificar se é triângulo retângulo
    4 Aplicações - diagonal de quadrado/retângulo, áreas
   Usa ternos pitagóricos para respostas exatas.
   ════════════════════════════════════════════════════════════════ */
var _TERNOS_m84 = [[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[7,24,25],[20,21,29],[10,24,26]];

function buildEx_f74(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');

  // ── TEMA 1 · Pitágoras: calcular a hipotenusa ──
  if (tema === '1') {
    var t = _TERNOS_m84[rnd_f7q1(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var a = t[0], b = t[1], c = t[2]; // c = hipotenusa
    var visT1 = (typeof EduVisual !== 'undefined') ? EduVisual.triangulo({ right: true, aLabel: '?', bLabel: b + '', cLabel: a + '', color: '#c4733a' }) : '';
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([c, c + 1, c - 1, a + b].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(c)) === -1) opts[0] = String(c);
      return {
        enun: 'Um triângulo retângulo tem catetos ' + a + ' e ' + b + '. Qual é a hipotenusa?',
        visual: visT1,
        tipo: 'mc', opcoes: opts, resposta: String(c),
        expl: 'Pitágoras: h² = ' + a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a+b*b) + '. h = √' + (a*a+b*b) + ' = ' + c + '.',
        tema: 'T1 · Hipotenusa'
      };
    }
    return {
      enun: 'Triângulo retângulo de catetos ' + a + ' e ' + b + '. Calcula a hipotenusa.', visual: visT1, tipo: 'fill',
      resposta: String(c), expl: 'h = √(' + a + '² + ' + b + '²) = √' + (a*a+b*b) + ' = ' + c + '.',
      tema: 'T1 · Hipotenusa'
    };
  }

  // ── TEMA 2 · Pitágoras: calcular um cateto ──
  if (tema === '2') {
    var t2 = _TERNOS_m84[rnd_f7q1(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var cat = t2[0], hip = t2[2], outro = t2[1]; // dado hip e um cateto, achar 'outro'
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([outro, outro + 1, outro - 1, hip - cat].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
      var tr = _TERNOS_m84[rnd_f7q1(0, _TERNOS_m84.length - 1)];
      a3 = tr[0]; b3 = tr[1]; c3 = tr[2];
    } else {
      // não pitagórico
      a3 = rnd_f7q1(3, 9); b3 = rnd_f7q1(4, 10); c3 = a3 + b3 - rnd_f7q1(1, 2);
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
    var t4 = _TERNOS_m84[rnd_f7q1(0, easy ? 3 : _TERNOS_m84.length - 1)];
    var l1 = t4[0], l2 = t4[1], diag = t4[2];
    // Variante de contexto (escada / rampa)
    if (!easy && Math.random() < 0.4) {
      // escada de comprimento = diag (hipotenusa), base = l1 (cateto), altura = l2
      return {
        enun: 'Uma escada de ' + diag + ' m está encostada a uma parede, com a base a ' + l1 + ' m da parede. A que altura chega a escada? (em m)',
        tipo: 'fill', resposta: String(l2),
        expl: 'A escada é a hipotenusa: altura = √(' + diag + '² − ' + l1 + '²) = √(' + (diag*diag) + ' − ' + (l1*l1) + ') = √' + (diag*diag - l1*l1) + ' = ' + l2 + ' m.',
        tema: 'T4 · Aplicações'
      };
    }
    var kind = rnd_f7q1(0, 1);
    if (kind === 0) {
      // diagonal de retângulo
      if (tipo === 'mc') {
        var opts4 = shuffle_f7q1([diag, diag + 1, diag - 1, l1 + l2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
   GERADOR - Cap 5 Equações Literais e Funções (Prisma 8)
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
function buildEx_f75(tema, tipo, dif) {
  tema = String(tema);
  var hard = (dif === 'dificil'), easy = (dif === 'facil');
  var mx = easy ? 6 : hard ? 12 : 9;

  // ── TEMA 1 · Equações literais ──
  if (tema === '1') {
    // ax + b = y  → x = (y − b)/a. Para evitar "y − -b", usamos b POSITIVO
    // e mostramos a equação como "ax + b = y" (b somado, sempre limpo).
    var a = rndNZ_f7q1(2, 5);
    var sol = rnd_f7q1(-5, 6);
    var b = rnd_f7q1(1, 8);                 // b > 0 → enunciado e passos sem sinais duplos
    var yval = a * sol + b;
    if (tipo === 'mc') {
      var correct = 'x = (' + yval + ' − ' + b + ') ÷ ' + a;
      var opts = shuffle_f7q1([
        correct,
        'x = (' + yval + ' + ' + b + ') ÷ ' + a,
        'x = ' + yval + ' ÷ ' + a + ' − ' + b,
        'x = (' + yval + ' − ' + b + ') × ' + a
      ]).slice(0, 4);
      return {
        enun: 'Resolve em ordem a x: <strong>' + a + 'x + ' + b + ' = ' + yval + '</strong>',
        tipo: 'mc', opcoes: opts, resposta: correct,
        expl: 'Isola x: ' + a + 'x = ' + yval + ' − ' + b + ' = ' + (yval - b) + ', logo x = ' + (yval - b) + ' ÷ ' + a + ' = ' + sol + '.',
        tema: 'T1 · Eq. Literais'
      };
    }
    return {
      enun: 'Resolve em ordem a x e indica o valor: ' + a + 'x + ' + b + ' = ' + yval, tipo: 'fill',
      resposta: String(sol), expl: a + 'x = ' + yval + ' − ' + b + ' = ' + (yval - b) + ', x = ' + (yval - b) + ' ÷ ' + a + ' = ' + sol + '.',
      tema: 'T1 · Eq. Literais'
    };
  }

  // ── TEMA 2 · Calcular imagem f(x) ──
  if (tema === '2') {
    // Variante de contexto (tarifário / táxi)
    if (!easy && Math.random() < 0.4) {
      var fixo = rnd_f7q1(2, 8), porU = rnd_f7q1(1, 4), unid = rnd_f7q1(3, 12);
      var custo = porU * unid + fixo;
      var cen = [
        { e: 'Um tarifário cobra ' + fixo + ' € fixos e ' + porU + ' € por GB. Quanto custam ' + unid + ' GB? (em €)', },
        { e: 'Um táxi cobra ' + fixo + ' € de partida e ' + porU + ' € por km. Quanto custa uma viagem de ' + unid + ' km? (em €)' }
      ];
      var pc5 = cen[rnd_f7q1(0, cen.length - 1)];
      return {
        enun: pc5.e, tipo: 'fill', resposta: String(custo),
        expl: 'Modela com C(x) = ' + porU + 'x + ' + fixo + '. Para x = ' + unid + ': ' + porU + '×' + unid + ' + ' + fixo + ' = ' + custo + ' €.',
        tema: 'T2 · Imagem f(x)'
      };
    }
    var m = rndNZ_f7q1(-mx, mx), bb = rnd_f7q1(-mx, mx);
    var x0 = rnd_f7q1(-5, 6);
    var fx = m * x0 + bb;
    var fnStr = 'f(x) = ' + _afim_m85(m, bb);
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([fx, fx + m, fx - 1, m + bb].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var m3 = rndNZ_f7q1(-mx, mx), b3 = rnd_f7q1(-mx, mx);
    var fnStr3 = 'y = ' + _afim_m85(m3, b3);
    var pedeDeclive = Math.random() < 0.5;
    var resposta = pedeDeclive ? m3 : b3;
    if (tipo === 'mc') {
      var opts3 = shuffle_f7q1([resposta, m3 + b3, -resposta, (pedeDeclive ? b3 : m3)].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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
    var m4 = rndNZ_f7q1(-4, 4);
    var x1 = rnd_f7q1(-4, 2), x2 = x1 + rnd_f7q1(1, 4);
    var y1 = rnd_f7q1(-5, 5), y2 = y1 + m4 * (x2 - x1);
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([m4, m4 + 1, m4 - 1, -m4 || m4 + 2].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
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

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 6 Sistemas de Equações (Prisma 8)
   Temas:
    1 Equação com duas incógnitas (verificar par solução)
    2 Resolver sistema - valor de x
    3 Resolver sistema - valor de y
    4 Verificar se um par é solução do sistema
   Soluções inteiras controladas (constrói o sistema a partir de (x,y)).
   ════════════════════════════════════════════════════════════════ */
function _sgn_m86(n) { return n < 0 ? ' − ' + Math.abs(n) : ' + ' + n; }
// Termo " + by" / " − by" bem formatado (trata b=±1: "y"/"−y", sem "1y").
function _byTerm_m86(b) {
  var abs = Math.abs(b);
  var coef = (abs === 1) ? 'y' : abs + 'y';
  return (b < 0 ? ' − ' : ' + ') + coef;
}
function _eq_m86(a, b, c) {
  var ax = (a === 1) ? 'x' : (a === -1) ? '−x' : (a + 'x');
  return ax + _byTerm_m86(b) + ' = ' + c;
}

function buildEx_f76(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');

  // solução inteira do sistema
  var x = rnd_f7q1(-5, 6), y = rnd_f7q1(-5, 6);

  // ── TEMA 1 · Equação com duas incógnitas: par solução? ──
  if (tema === '1') {
    var a = rndNZ_f7q1(1, 4), b = rndNZ_f7q1(1, 4);
    var c = a * x + b * y;
    var eq = _eq_m86(a, b, c);
    var isSol = Math.random() < 0.5;
    var px = x, py = y;
    if (!isSol) { px = x + rnd_f7q1(1, 2); } // par que não satisfaz
    var ok = (a * px + b * py === c);
    return {
      enun: 'O par (' + px + ', ' + py + ') é solução da equação <strong>' + eq + '</strong>?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: ok ? 'Sim' : 'Não',
      expl: 'Substitui: ' + a + '×(' + px + ') + ' + b + '×(' + py + ') = ' + (a*px) + ' + ' + (b*py) + ' = ' + (a*px+b*py) + '. ' + (ok ? 'Igual a ' + c + ' → é solução.' : 'Diferente de ' + c + ' → não é solução.'),
      tema: 'T1 · Eq. 2 incógnitas'
    };
  }

  // ── TEMAS 2 e 3 · Resolver sistema (substituição) ──
  if (tema === '2' || tema === '3') {
    // Variante de contexto (problema da soma e diferença → sistema)
    if (!easy && Math.random() < 0.35) {
      var n1 = rnd_f7q1(4, 15), n2 = rnd_f7q1(1, n1 - 1); // n1 > n2 > 0
      var soma = n1 + n2, dif = n1 - n2;
      var pedeMaior = (tema === '2'); // x = maior
      var respC = pedeMaior ? n1 : n2;
      return {
        enun: 'A soma de dois números é ' + soma + ' e a diferença é ' + dif + '. Qual é o número ' + (pedeMaior ? 'maior' : 'menor') + '?',
        tipo: 'fill', resposta: String(respC),
        expl: 'Sistema { x + y = ' + soma + ' ; x − y = ' + dif + ' }. Somando as equações: 2x = ' + (soma + dif) + ' → x = ' + n1 + ' (maior), y = ' + n2 + ' (menor).',
        tema: (tema === '2' ? 'T2 · Sistema (x)' : 'T3 · Sistema (y)')
      };
    }
    // Equação 1: x + b1·y = c1 ; Equação 2: a2·x + b2·y = c2
    var b1 = rndNZ_f7q1(1, 3);
    var c1 = x + b1 * y;
    var a2 = rndNZ_f7q1(2, 4), b2 = rndNZ_f7q1(-3, 3); if (b2 === 0) b2 = 1;
    var c2 = a2 * x + b2 * y;
    var eq1 = 'x' + _byTerm_m86(b1) + ' = ' + c1;
    var eq2 = a2 + 'x' + _byTerm_m86(b2) + ' = ' + c2;
    var pede = (tema === '2') ? 'x' : 'y';
    var resp = (tema === '2') ? x : y;
    var sistema = '{ ' + eq1 + ' ; ' + eq2 + ' }';
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([resp, resp + 1, resp - 1, (tema === '2' ? y : x)].filter(function (v, i, ar) { return ar.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(resp)) === -1) opts[0] = String(resp);
      return {
        enun: 'Resolve o sistema <strong>' + sistema + '</strong> e indica o valor de <strong>' + pede + '</strong>.',
        tipo: 'mc', opcoes: opts, resposta: String(resp),
        expl: 'A solução do sistema é (x, y) = (' + x + ', ' + y + '). Logo ' + pede + ' = ' + resp + '. (Isola x na 1.ª equação: x = ' + c1 + (b1 < 0 ? ' + ' + Math.abs(b1) + 'y' : ' − ' + b1 + 'y') + ', substitui na 2.ª.)',
        tema: (tema === '2' ? 'T2 · Sistema (x)' : 'T3 · Sistema (y)')
      };
    }
    return {
      enun: 'Resolve o sistema ' + sistema + ' e indica ' + pede + '.', tipo: 'fill', resposta: String(resp),
      expl: 'Solução do sistema: (x, y) = (' + x + ', ' + y + '). ' + pede + ' = ' + resp + '.',
      tema: (tema === '2' ? 'T2 · Sistema (x)' : 'T3 · Sistema (y)')
    };
  }

  // ── TEMA 4 · Verificar par solução do sistema ──
  if (tema === '4') {
    var ba = rndNZ_f7q1(1, 3), bb = rndNZ_f7q1(1, 3);
    var ca = x + ba * y, cb = 2 * x + bb * y;
    var e1 = 'x' + _byTerm_m86(ba) + ' = ' + ca;
    var e2 = '2x' + _byTerm_m86(bb) + ' = ' + cb;
    var isSol = Math.random() < 0.5;
    var px = x, py = y;
    if (!isSol) { py = y + rnd_f7q1(1, 2); }
    var ok = (px + ba * py === ca) && (2 * px + bb * py === cb);
    return {
      enun: 'O par (' + px + ', ' + py + ') é solução do sistema { ' + e1 + ' ; ' + e2 + ' }?',
      tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: ok ? 'Sim' : 'Não',
      expl: 'Um par é solução do sistema se satisfaz as DUAS equações. ' + (ok ? 'Substituindo, ambas se verificam → é solução.' : 'Pelo menos uma equação não se verifica → não é solução.'),
      tema: 'T4 · Solução do sistema'
    };
  }

  // fallback
  return { enun: '(2,1) é solução de x + y = 3?', tipo: 'mc', opcoes: ['Sim', 'Não'], resposta: 'Sim', expl: '2+1=3 → sim.', tema: 'Sistemas' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 8 Dados e Probabilidades (Prisma 8)
   Temas:
    1 Média
    2 Moda
    3 Mediana
    4 Amplitude / amplitude interquartis (amplitude)
    5 Probabilidade simples
    6 Frequência relativa (%)
   ════════════════════════════════════════════════════════════════ */
function _media_m88(arr) { var s = 0; for (var i = 0; i < arr.length; i++) s += arr[i]; return s / arr.length; }
function _ordena_m88(arr) { return arr.slice().sort(function (a, b) { return a - b; }); }

function buildEx_f78(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  var n = easy ? 5 : hard ? 7 : 5; // tamanho do conjunto (ímpar para mediana limpa)

  // gera conjunto de dados; difícil usa números maiores
  var _escD8 = hard ? 2.5 : easy ? 0.7 : 1;
  function dados(len, lo, hi) {
    var h = Math.max(lo + len, Math.round(hi * _escD8));
    var a = [];
    for (var i = 0; i < len; i++) a.push(rnd_f7q1(lo, h));
    return a;
  }

  // ── TEMA 1 · Média (garante média inteira) ──
  if (tema === '1') {
    // Variante VISUAL: gráfico de barras → ler e calcular a média
    if (typeof EduVisual !== 'undefined' && Math.random() < 0.35) {
      var cats = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
      var valsV; do { valsV = dados(5, 2, 12); } while (_media_m88(valsV) % 1 !== 0);
      var mediaV = _media_m88(valsV);
      var dataV = cats.map(function (c, i) { return { label: c, value: valsV[i] }; });
      return {
        enun: 'O gráfico mostra o número de livros lidos em cada dia. Qual é a <strong>média</strong> diária?',
        visual: EduVisual.barras(dataV, '#9a5e96'),
        tipo: 'fill', resposta: String(mediaV),
        expl: 'Média = (' + valsV.join(' + ') + ') ÷ 5 = ' + valsV.reduce(function (s, v) { return s + v; }, 0) + ' ÷ 5 = ' + mediaV + '.',
        tema: 'T1 · Média'
      };
    }
    // Variante de contexto (notas de um aluno), média inteira
    if (!easy && Math.random() < 0.4) {
      var notas;
      do { notas = dados(5, 8, 20); } while (_media_m88(notas) % 1 !== 0);
      var mediaN = _media_m88(notas);
      return {
        enun: 'Um aluno teve as notas ' + notas.join(', ') + '. Qual é a média (em valores)?',
        tipo: 'fill', resposta: String(mediaN),
        expl: 'Média = (' + notas.join(' + ') + ') ÷ 5 = ' + notas.reduce(function (s, v) { return s + v; }, 0) + ' ÷ 5 = ' + mediaN + ' valores.',
        tema: 'T1 · Média'
      };
    }
    var arr;
    do { arr = dados(n, 1, easy ? 10 : 20); } while (_media_m88(arr) % 1 !== 0);
    var media = _media_m88(arr);
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([media, media + 1, media - 1, Math.max.apply(null, arr)].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(media)) === -1) opts[0] = String(media);
      return {
        enun: 'Calcula a média do conjunto: <strong>' + arr.join(', ') + '</strong>',
        tipo: 'mc', opcoes: opts, resposta: String(media),
        expl: 'Média = soma ÷ nº de dados = ' + arr.join('+') + ' = ' + arr.reduce(function (s, v) { return s + v; }, 0) + ' ÷ ' + arr.length + ' = ' + media + '.',
        tema: 'T1 · Média'
      };
    }
    return {
      enun: 'Calcula a média de: ' + arr.join(', '), tipo: 'fill', resposta: String(media),
      expl: 'Soma = ' + arr.reduce(function (s, v) { return s + v; }, 0) + '; ÷ ' + arr.length + ' = ' + media + '.',
      tema: 'T1 · Média'
    };
  }

  // ── TEMA 2 · Moda (garante moda única) ──
  if (tema === '2') {
    var base = dados(n - 2, 1, 8);
    var modaVal = base[rnd_f7q1(0, base.length - 1)];
    var arr2 = base.concat([modaVal, modaVal]); // garante que modaVal aparece mais vezes
    shuffle_f7q1(arr2);
    // confirma moda única
    var freq = {}; arr2.forEach(function (v) { freq[v] = (freq[v] || 0) + 1; });
    var maxF = 0, moda = modaVal, ties = 0;
    Object.keys(freq).forEach(function (k) { if (freq[k] > maxF) { maxF = freq[k]; moda = parseInt(k); } });
    Object.keys(freq).forEach(function (k) { if (freq[k] === maxF) ties++; });
    if (ties > 1) { arr2.push(moda); } // reforça
    if (tipo === 'mc') {
      var distintos = Object.keys(freq).map(Number).filter(function (v) { return v !== moda; });
      var opts2arr = [moda].concat(shuffle_f7q1(distintos));
      // garante 4 opções únicas, preenchendo com valores próximos da moda
      var extra = 1;
      while (opts2arr.length < 4) {
        var cand = moda + extra; if (opts2arr.indexOf(cand) === -1 && cand > 0) opts2arr.push(cand);
        var cand2 = moda - extra; if (opts2arr.length < 4 && opts2arr.indexOf(cand2) === -1 && cand2 > 0) opts2arr.push(cand2);
        extra++;
        if (extra > 20) break;
      }
      var opts2 = shuffle_f7q1(opts2arr.slice(0, 4)).map(String);
      if (opts2.indexOf(String(moda)) === -1) opts2[0] = String(moda);
      return {
        enun: 'Qual é a moda do conjunto: <strong>' + arr2.join(', ') + '</strong>?',
        tipo: 'mc', opcoes: opts2, resposta: String(moda),
        expl: 'A moda é o valor que aparece mais vezes: ' + moda + ' (aparece ' + maxF + ' vezes).',
        tema: 'T2 · Moda'
      };
    }
    return {
      enun: 'Indica a moda de: ' + arr2.join(', '), tipo: 'fill', resposta: String(moda),
      expl: 'O valor mais frequente é ' + moda + '.', tema: 'T2 · Moda'
    };
  }

  // ── TEMA 3 · Mediana (n ímpar → valor central) ──
  if (tema === '3') {
    var len3 = (n % 2 === 0) ? n + 1 : n;
    var arr3 = dados(len3, 1, 20);
    var ord = _ordena_m88(arr3);
    var mediana = ord[(len3 - 1) / 2];
    if (tipo === 'mc') {
      var opts3 = shuffle_f7q1([mediana, mediana + 1, mediana - 1, ord[0]].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts3.indexOf(String(mediana)) === -1) opts3[0] = String(mediana);
      return {
        enun: 'Qual é a mediana do conjunto: <strong>' + arr3.join(', ') + '</strong>?',
        tipo: 'mc', opcoes: opts3, resposta: String(mediana),
        expl: 'Ordena os dados: ' + ord.join(', ') + '. Com ' + len3 + ' valores (ímpar), a mediana é o valor central → ' + mediana + '.',
        tema: 'T3 · Mediana'
      };
    }
    return {
      enun: 'Indica a mediana de: ' + arr3.join(', '), tipo: 'fill', resposta: String(mediana),
      expl: 'Ordenado: ' + ord.join(', ') + '. Valor central = ' + mediana + '.', tema: 'T3 · Mediana'
    };
  }

  // ── TEMA 4 · Amplitude ──
  if (tema === '4') {
    var arr4 = dados(n, 1, 30);
    var ord4 = _ordena_m88(arr4);
    var amp = ord4[ord4.length - 1] - ord4[0];
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([amp, amp + 1, amp - 1, ord4[ord4.length - 1]].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts4.indexOf(String(amp)) === -1) opts4[0] = String(amp);
      return {
        enun: 'Qual é a amplitude do conjunto: <strong>' + arr4.join(', ') + '</strong>?',
        tipo: 'mc', opcoes: opts4, resposta: String(amp),
        expl: 'Amplitude = máximo − mínimo = ' + ord4[ord4.length - 1] + ' − ' + ord4[0] + ' = ' + amp + '.',
        tema: 'T4 · Amplitude'
      };
    }
    return {
      enun: 'Calcula a amplitude de: ' + arr4.join(', '), tipo: 'fill', resposta: String(amp),
      expl: 'Máximo (' + ord4[ord4.length - 1] + ') − mínimo (' + ord4[0] + ') = ' + amp + '.', tema: 'T4 · Amplitude'
    };
  }

  // ── TEMA 5 · Probabilidade simples ──
  if (tema === '5') {
    var contextos = [
      { tot: 6, desc: 'lançar um dado', fav: rnd_f7q1(1, 3), o: 'sair um número' },
      { tot: rnd_f7q1(8, 12), desc: 'tirar uma bola de um saco' }
    ];
    var ctx = contextos[rnd_f7q1(0, contextos.length - 1)];
    var total = ctx.tot, fav = rnd_f7q1(1, total - 1);
    var r = reduce_f7q1(fav, total);
    var fracStr = (r[1] === 1) ? String(r[0]) : r[0] + '/' + r[1];
    var enun = (ctx.desc === 'lançar um dado')
      ? 'Ao lançar um dado equilibrado, qual é a probabilidade de sair um de ' + fav + ' resultados favoráveis (em ' + total + ')?'
      : 'Num saco há ' + total + ' bolas, ' + fav + ' das quais são vermelhas. Qual é a probabilidade de tirar uma bola vermelha?';
    return {
      enun: enun, tipo: 'fill', resposta: fracStr,
      expl: 'P = casos favoráveis ÷ casos possíveis = ' + fav + '/' + total + ' = ' + fracStr + '.',
      tema: 'T5 · Probabilidade'
    };
  }

  // ── TEMA 6 · Frequência relativa (%) ──
  if (tema === '6') {
    var tot6 = [10, 20, 25, 50, 100][rnd_f7q1(0, 4)];
    var abs = rnd_f7q1(1, tot6);
    var pct = Math.round(abs / tot6 * 100);
    if (tipo === 'mc') {
      var opts6 = shuffle_f7q1([pct, pct + 5, pct - 5, abs].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts6.indexOf(String(pct)) === -1) opts6[0] = String(pct);
      return {
        enun: 'Num total de ' + tot6 + ' alunos, ' + abs + ' praticam natação. Qual é a frequência relativa (em %)?',
        tipo: 'mc', opcoes: opts6.map(function (v) { return v + '%'; }), resposta: pct + '%',
        expl: 'Frequência relativa = ' + abs + ' ÷ ' + tot6 + ' = ' + (abs / tot6) + ' = ' + pct + '%.',
        tema: 'T6 · Frequência'
      };
    }
    return {
      enun: 'Em ' + tot6 + ' alunos, ' + abs + ' praticam natação. Frequência relativa em %?', tipo: 'fill',
      resposta: String(pct), expl: abs + ' ÷ ' + tot6 + ' × 100 = ' + pct + '%.', tema: 'T6 · Frequência'
    };
  }

  // fallback
  return { enun: 'Média de 2, 4, 6?', tipo: 'fill', resposta: '4', expl: '(2+4+6)/3 = 4.', tema: 'Dados' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 7 Figuras no Espaço e Volumes (Prisma 8)
   Temas:
    1 Volume de prisma (Abase × altura)
    2 Volume de cilindro (π r² h) - resposta "kπ"
    3 Volume de pirâmide (1/3 Abase × altura)
    4 Volume de cone (1/3 π r² h) - resposta "kπ"
    5 Volume de esfera (4/3 π r³) - resposta "kπ"
    6 Área do círculo (π r²) - resposta "kπ"
   Respostas com π usam tipo 'fill_frac' (comparação textual).
   ════════════════════════════════════════════════════════════════ */
function buildEx_f77(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  function piStr(k) { return k === 1 ? 'π' : k + 'π'; }
  // Respostas em "kπ" são sempre de resposta aberta → fill_frac (texto).
  // Qualquer pedido que não seja 'mc' (fill, vf, …) cai em fill_frac, para
  // nunca gerar um falso "Verdadeiro/Falso" com resposta tipo "180π".
  function fillTipoPi(t) { return (t === 'mc') ? 'mc' : 'fill_frac'; }

  // ── TEMA 1 · Volume de prisma ──
  if (tema === '1') {
    // Variante de contexto (caixa / aquário) - paralelepípedo c × l × a
    if (!easy && Math.random() < 0.4) {
      var c1 = rnd_f7q1(4, 12), l1 = rnd_f7q1(3, 8), a1 = rnd_f7q1(2, 6);
      var Vcx = c1 * l1 * a1;
      var obj = ['Uma caixa', 'Um aquário', 'Um depósito'][rnd_f7q1(0, 2)];
      return {
        enun: obj + ' tem a forma de um paralelepípedo de ' + c1 + ' cm de comprimento, ' + l1 + ' cm de largura e ' + a1 + ' cm de altura. Qual é o volume? (em cm³)',
        tipo: 'fill', resposta: String(Vcx),
        expl: 'V = comprimento × largura × altura = ' + c1 + ' × ' + l1 + ' × ' + a1 + ' = ' + Vcx + ' cm³.',
        tema: 'T1 · Volume Prisma'
      };
    }
    var Ab = rnd_f7q1(easy ? 4 : 6, hard ? 30 : 20), h = rnd_f7q1(2, hard ? 12 : 8);
    var V = Ab * h;
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([V, V + Ab, V - h, Ab + h].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts.indexOf(String(V)) === -1) opts[0] = String(V);
      return {
        enun: 'Um prisma tem área da base ' + Ab + ' cm² e altura ' + h + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts.map(function (v) { return v + ' cm³'; }), resposta: V + ' cm³',
        expl: 'V = área da base × altura = ' + Ab + ' × ' + h + ' = ' + V + ' cm³.',
        tema: 'T1 · Volume Prisma'
      };
    }
    return {
      enun: 'Volume de um prisma de área da base ' + Ab + ' cm² e altura ' + h + ' cm (em cm³)?', tipo: 'fill',
      resposta: String(V), expl: 'V = ' + Ab + ' × ' + h + ' = ' + V + ' cm³.', tema: 'T1 · Volume Prisma'
    };
  }

  // ── TEMA 2 · Volume de cilindro (π r² h) ──
  if (tema === '2') {
    var r = rnd_f7q1(1, easy ? 4 : 6), hc = rnd_f7q1(2, hard ? 10 : 7);
    var k = r * r * hc;
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([k, r * hc, r * r + hc, 2 * r * hc].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(k) === -1) opts2[0] = k;
      return {
        enun: 'Um cilindro tem raio da base ' + r + ' cm e altura ' + hc + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts2.map(piStr).map(function (s) { return s + ' cm³'; }), resposta: piStr(k) + ' cm³',
        expl: 'V = π × r² × h = π × ' + (r * r) + ' × ' + hc + ' = ' + piStr(k) + ' cm³.',
        tema: 'T2 · Volume Cilindro'
      };
    }
    return {
      enun: 'Volume de um cilindro de raio ' + r + ' cm e altura ' + hc + ' cm? (escreve na forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(k),
      expl: 'V = π·r²·h = π·' + (r * r) + '·' + hc + ' = ' + piStr(k) + ' cm³.', tema: 'T2 · Volume Cilindro'
    };
  }

  // ── TEMA 3 · Volume de pirâmide ──
  if (tema === '3') {
    var Ab3 = rnd_f7q1(2, 12) * 3, h3 = rnd_f7q1(2, hard ? 12 : 8);
    var V3 = Ab3 * h3 / 3;
    if (tipo === 'mc') {
      var opts3 = shuffle_f7q1([V3, Ab3 * h3, V3 + h3, V3 - 1].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4).map(String);
      if (opts3.indexOf(String(V3)) === -1) opts3[0] = String(V3);
      return {
        enun: 'Uma pirâmide tem área da base ' + Ab3 + ' cm² e altura ' + h3 + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts3.map(function (v) { return v + ' cm³'; }), resposta: V3 + ' cm³',
        expl: 'V = (área da base × altura) ÷ 3 = (' + Ab3 + ' × ' + h3 + ') ÷ 3 = ' + V3 + ' cm³.',
        tema: 'T3 · Volume Pirâmide'
      };
    }
    return {
      enun: 'Volume de uma pirâmide de área da base ' + Ab3 + ' cm² e altura ' + h3 + ' cm (em cm³)?', tipo: 'fill',
      resposta: String(V3), expl: 'V = (' + Ab3 + ' × ' + h3 + ') ÷ 3 = ' + V3 + ' cm³.', tema: 'T3 · Volume Pirâmide'
    };
  }

  // ── TEMA 4 · Volume de cone ──
  if (tema === '4') {
    var r4, h4, k4;
    do { r4 = rnd_f7q1(1, 6); h4 = rnd_f7q1(2, 9); k4 = r4 * r4 * h4; } while (k4 % 3 !== 0);
    var Vk = k4 / 3;
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([Vk, k4, Vk + r4, r4 * h4].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts4.indexOf(Vk) === -1) opts4[0] = Vk;
      return {
        enun: 'Um cone tem raio da base ' + r4 + ' cm e altura ' + h4 + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts4.map(piStr).map(function (s) { return s + ' cm³'; }), resposta: piStr(Vk) + ' cm³',
        expl: 'V = (π × r² × h) ÷ 3 = (π × ' + (r4 * r4) + ' × ' + h4 + ') ÷ 3 = ' + piStr(Vk) + ' cm³.',
        tema: 'T4 · Volume Cone'
      };
    }
    return {
      enun: 'Volume de um cone de raio ' + r4 + ' cm e altura ' + h4 + ' cm? (forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(Vk),
      expl: 'V = (π·' + (r4 * r4) + '·' + h4 + ')÷3 = ' + piStr(Vk) + ' cm³.', tema: 'T4 · Volume Cone'
    };
  }

  // ── TEMA 5 · Volume de esfera ──
  if (tema === '5') {
    var r5 = [3, 6][rnd_f7q1(0, 1)];
    var k5 = 4 * r5 * r5 * r5 / 3;
    if (tipo === 'mc') {
      var opts5 = shuffle_f7q1([k5, k5 / 2, k5 + r5, r5 * r5 * r5].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts5.indexOf(k5) === -1) opts5[0] = k5;
      return {
        enun: 'Uma esfera tem raio ' + r5 + ' cm. Qual é o volume?',
        tipo: 'mc', opcoes: opts5.map(piStr).map(function (s) { return s + ' cm³'; }), resposta: piStr(k5) + ' cm³',
        expl: 'V = (4 × π × r³) ÷ 3 = (4 × π × ' + (r5 * r5 * r5) + ') ÷ 3 = ' + piStr(k5) + ' cm³.',
        tema: 'T5 · Volume Esfera'
      };
    }
    return {
      enun: 'Volume de uma esfera de raio ' + r5 + ' cm? (forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(k5),
      expl: 'V = (4·π·' + (r5 * r5 * r5) + ')÷3 = ' + piStr(k5) + ' cm³.', tema: 'T5 · Volume Esfera'
    };
  }

  // ── TEMA 6 · Área do círculo ──
  if (tema === '6') {
    var r6 = rnd_f7q1(1, easy ? 5 : 9);
    var k6 = r6 * r6;
    if (tipo === 'mc') {
      var opts6 = shuffle_f7q1([k6, 2 * r6, k6 + r6, 4 * r6].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts6.indexOf(k6) === -1) opts6[0] = k6;
      return {
        enun: 'Qual é a área de um círculo de raio ' + r6 + ' cm?',
        tipo: 'mc', opcoes: opts6.map(piStr).map(function (s) { return s + ' cm²'; }), resposta: piStr(k6) + ' cm²',
        expl: 'A = π × r² = π × ' + (r6 * r6) + ' = ' + piStr(k6) + ' cm².',
        tema: 'T6 · Área Círculo'
      };
    }
    return {
      enun: 'Área de um círculo de raio ' + r6 + ' cm? (forma kπ)',
      tipo: fillTipoPi(tipo), resposta: piStr(k6),
      expl: 'A = π·r² = π·' + (r6 * r6) + ' = ' + piStr(k6) + ' cm².', tema: 'T6 · Área Círculo'
    };
  }

  // fallback
  return { enun: 'Volume de prisma: Abase 5, altura 4?', tipo: 'fill', resposta: '20', expl: '5×4=20.', tema: 'Volumes' };
}

/* ════════════════════════════════════════════════════════════════
   GERADOR - Cap 2 Vetores e Isometrias (Prisma 8)
   Capítulo muito visual; o gerador cobre o que é viável sem figura:
    1 Translação em coordenadas (somar vetor a ponto)
    2 Componentes da soma de vetores
    3 Tipos de simetria (conceptual)
    4 Vetor simétrico (componentes)
   ════════════════════════════════════════════════════════════════ */
function buildEx_f72(tema, tipo, dif) {
  tema = String(tema);
  var easy = (dif === 'facil'), hard = (dif === 'dificil');
  var lim = easy ? 5 : hard ? 10 : 7;

  // ── TEMA 1 · Translação de um ponto por um vetor ──
  if (tema === '1') {
    var px = rnd_f7q1(-lim, lim), py = rnd_f7q1(-lim, lim);
    var vx = rndNZ_f7q1(-lim, lim), vy = rndNZ_f7q1(-lim, lim);
    var rx = px + vx, ry = py + vy;
    var resp = '(' + rx + ', ' + ry + ')';
    // Variante de contexto (movimento de um objeto)
    if (!easy && Math.random() < 0.4) {
      var ator = ['Um robô', 'Uma peça do jogo', 'Um drone'][rnd_f7q1(0, 2)];
      return {
        enun: ator + ' está na posição (' + px + ', ' + py + ') e desloca-se segundo o vetor (' + vx + ', ' + vy + '). Qual é a nova posição? (forma (x, y))',
        tipo: 'fill_frac', resposta: resp,
        expl: 'Soma o vetor à posição: (' + px + '+' + vx + ', ' + py + '+' + vy + ') = ' + resp + '.',
        tema: 'T1 · Translação'
      };
    }
    // referencial com o ponto P e o vetor de translação (a partir de P)
    var visT = (typeof EduVisual !== 'undefined') ? EduVisual.referencial({
      range: Math.max(6, lim + Math.max(Math.abs(vx), Math.abs(vy))),
      points: [{ x: px, y: py, label: 'P' }],
      vectors: [{ x1: px, y1: py, x2: rx, y2: ry, label: 'v' }],
      color: '#4d978f'
    }) : '';
    if (tipo === 'mc') {
      var opts = shuffle_f7q1([resp, '(' + (px - vx) + ', ' + (py - vy) + ')', '(' + rx + ', ' + (py - vy) + ')', '(' + (px * vx) + ', ' + (py * vy) + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts.indexOf(resp) === -1) opts[0] = resp;
      return {
        enun: 'Aplica ao ponto P(' + px + ', ' + py + ') a translação associada ao vetor v(' + vx + ', ' + vy + '). Qual é a imagem?',
        visual: visT,
        tipo: 'mc', opcoes: opts, resposta: resp,
        expl: 'A translação soma as componentes do vetor às coordenadas: (' + px + ' + ' + vx + ', ' + py + ' + ' + vy + ') = ' + resp + '.',
        tema: 'T1 · Translação'
      };
    }
    return {
      enun: 'Imagem de P(' + px + ', ' + py + ') pela translação do vetor v(' + vx + ', ' + vy + ')? (forma (x, y))',
      visual: visT,
      tipo: 'fill_frac', resposta: resp,
      expl: '(' + px + '+' + vx + ', ' + py + '+' + vy + ') = ' + resp + '.', tema: 'T1 · Translação'
    };
  }

  // ── TEMA 2 · Soma de vetores (componentes) ──
  if (tema === '2') {
    var ax = rndNZ_f7q1(-lim, lim), ay = rndNZ_f7q1(-lim, lim);
    var bx = rndNZ_f7q1(-lim, lim), by = rndNZ_f7q1(-lim, lim);
    var sx = ax + bx, sy = ay + by;
    var resp2 = '(' + sx + ', ' + sy + ')';
    if (tipo === 'mc') {
      var opts2 = shuffle_f7q1([resp2, '(' + (ax - bx) + ', ' + (ay - by) + ')', '(' + sx + ', ' + (ay - by) + ')', '(' + (ax * bx) + ', ' + (ay * by) + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts2.indexOf(resp2) === -1) opts2[0] = resp2;
      return {
        enun: 'Sendo u(' + ax + ', ' + ay + ') e v(' + bx + ', ' + by + '), quais são as componentes de u + v?',
        tipo: 'mc', opcoes: opts2, resposta: resp2,
        expl: 'Somam-se as componentes: (' + ax + ' + ' + bx + ', ' + ay + ' + ' + by + ') = ' + resp2 + '.',
        tema: 'T2 · Soma de Vetores'
      };
    }
    return {
      enun: 'u(' + ax + ', ' + ay + ') + v(' + bx + ', ' + by + ') = ? (componentes, forma (x, y))',
      tipo: 'fill_frac', resposta: resp2,
      expl: '(' + ax + '+' + bx + ', ' + ay + '+' + by + ') = ' + resp2 + '.', tema: 'T2 · Soma de Vetores'
    };
  }

  // ── TEMA 3 · Tipos de simetria (conceptual) ──
  if (tema === '3') {
    var perguntas = [
      { q: 'Que isometria desliza todos os pontos a mesma distância e direção, sem rodar nem refletir?', r: 'Translação', w: ['Reflexão', 'Rotação', 'Reflexão deslizante'] },
      { q: 'Que isometria corresponde a uma "imagem ao espelho" em relação a uma reta (eixo)?', r: 'Reflexão', w: ['Translação', 'Rotação', 'Reflexão deslizante'] },
      { q: 'Que isometria faz girar a figura em torno de um ponto (centro), segundo um ângulo?', r: 'Rotação', w: ['Translação', 'Reflexão', 'Reflexão deslizante'] },
      { q: 'Que isometria combina uma reflexão num eixo com uma translação segundo esse eixo?', r: 'Reflexão deslizante', w: ['Translação', 'Reflexão', 'Rotação'] }
    ];
    var p = perguntas[rnd_f7q1(0, perguntas.length - 1)];
    var opts3 = shuffle_f7q1([p.r].concat(p.w)).slice(0, 4);
    if (opts3.indexOf(p.r) === -1) opts3[0] = p.r;
    return {
      enun: p.q, tipo: 'mc', opcoes: opts3, resposta: p.r,
      expl: 'A resposta é: ' + p.r + '. As quatro isometrias são translação, reflexão, rotação e reflexão deslizante.',
      tema: 'T3 · Simetrias'
    };
  }

  // ── TEMA 4 · Vetor simétrico ──
  if (tema === '4') {
    var vx4 = rndNZ_f7q1(-lim, lim), vy4 = rndNZ_f7q1(-lim, lim);
    var resp4 = '(' + (-vx4) + ', ' + (-vy4) + ')';
    if (tipo === 'mc') {
      var opts4 = shuffle_f7q1([resp4, '(' + vx4 + ', ' + vy4 + ')', '(' + (-vx4) + ', ' + vy4 + ')', '(' + vy4 + ', ' + vx4 + ')'].filter(function (v, i, a) { return a.indexOf(v) === i; })).slice(0, 4);
      if (opts4.indexOf(resp4) === -1) opts4[0] = resp4;
      return {
        enun: 'Qual é o vetor simétrico de v(' + vx4 + ', ' + vy4 + ')?',
        tipo: 'mc', opcoes: opts4, resposta: resp4,
        expl: 'O simétrico de um vetor tem as componentes com sinal trocado: −v = ' + resp4 + '.',
        tema: 'T4 · Vetor Simétrico'
      };
    }
    return {
      enun: 'Componentes do simétrico de v(' + vx4 + ', ' + vy4 + ')? (forma (x, y))',
      tipo: 'fill_frac', resposta: resp4,
      expl: 'Troca o sinal das componentes: ' + resp4 + '.', tema: 'T4 · Vetor Simétrico'
    };
  }

  // fallback
  return { enun: 'Simétrico de v(2, −3)?', tipo: 'mc', opcoes: ['(−2, 3)', '(2, 3)', '(−2, −3)', '(3, 2)'], resposta: '(−2, 3)', expl: 'Troca os sinais.', tema: 'Vetores' };
}

/* atribuir: deep-link fq7 */
function _fq7DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_fq7gf){ _fq7gf.caps={}; cs.forEach(function(n){ _fq7gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _fq7gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ fq7SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_fq7Prat) _fq7Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ fq7SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof gTabSwitch==='function')setTimeout(function(){try{gTabSwitch('fq7-jogos-app',jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_fq7TarefaAtiva=p.get('tarefa');_fq7TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _fq7Prat.cap=cap; _fq7Prat.st=st; _fq7Prat.nivel=nivel; setTimeout(function(){ fq7SwitchTab('exercicios',null); if(typeof fq7GerarExercicios==='function') fq7GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_fq7DeepLinkAuto,300);});else setTimeout(_fq7DeepLinkAuto,300);

function fq7AtribuirFicha(){
  var caps=[]; _fq7CapMeta.forEach(function(m){ if(_fq7gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('fq7-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_fq7CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'fq7', cursoNome:'Físico-Química 7.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_fq7gf.dif };
}

function fq7EntregarTarefa(){
  if(!_fq7TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_fq7TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_fq7TarefaResp[qid]; if(ok)certas++; var ex=_fq7Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_fq7TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _fq7TarefaAtiva=null; _fq7TarefaResp={}; fq7GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
