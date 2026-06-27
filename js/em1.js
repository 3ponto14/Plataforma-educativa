/* ════════════════════════════════════════════════════════════════
   PORT7 HUB - Português 7.º ano (5 domínios) · ver MODELO BASE
   Criado a partir do molde port9.js (modelo híbrido de Português).
   Sem módulos realojados: a prática é banco-driven (_em1Banco).
   Conteúdo alinhado ao programa do 7.º e ao manual «Mensagens 7»;
   a ingestão das fichas do manual entra por lotes, como no 9.º.
   ════════════════════════════════════════════════════════════════ */

// ═══ Domínios de Português do 9.º ano (Aprendizagens Essenciais) ═══
// Os "capítulos" do hub são os 5 DOMÍNIOS do programa.
var _em1CapMeta = [
  {n:1, icon:'<i class="ph ph-smiley"></i>',           label:'Eu e o meu corpo'},
  {n:2, icon:'<i class="ph ph-house-line"></i>',       label:'Família e Escola'},
  {n:3, icon:'<i class="ph ph-calendar-blank"></i>',   label:'O Tempo e as Estações'},
  {n:4, icon:'<i class="ph ph-plant"></i>',            label:'Animais e Plantas'},
  {n:5, icon:'<i class="ph ph-shield-check"></i>',     label:'Objetos e Segurança'}
];

// Cores por domínio (definidas no JS; Estudo do Meio não usa CSS vars)
var _em1CapColors = {
  1:'#c77a3a', 2:'#5a72a0', 3:'#4d8f87', 4:'#5e9c4d', 5:'#9c5e5e'
};

// Subtemas por domínio (1.º ano · Estudo do Meio)
var _em1Subtemas = {
  1: ['As partes do corpo', 'Os cinco sentidos', 'Higiene e saúde'],
  2: ['A minha família', 'A escola', 'Datas e festas'],
  3: ['Dias e meses', 'As quatro estações', 'O estado do tempo'],
  4: ['Os animais', 'As plantas', 'Cuidar da natureza'],
  5: ['Materiais e objetos', 'Segurança em casa', 'Na rua e sinais']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (9.º ano) ═══
var _em1Cards = {
  // ── Cap 1 · Eu e o meu corpo ──
  1: [
    { st: 1, tag: 'Aprender', q: 'Quais são algumas partes da cabeça?', a: 'Os olhos, o nariz, a boca, as orelhas e o cabelo.' },
    { st: 1, tag: 'Aprender', q: 'Para que servem as pernas?', a: 'Para andar, correr, saltar e ficar de pé.' },
    { st: 1, tag: 'Aprender', q: 'Quantos dedos temos em cada mão?', a: 'Cinco dedos em cada mão (dez nas duas mãos).' },
    { st: 1, tag: 'Aprender', q: 'Para que servem os braços e as mãos?', a: 'Para pegar nas coisas, escrever, comer e abraçar.' },
    { st: 2, tag: 'Aprender', q: 'Quais são os cinco sentidos?', a: 'A visão (ver), a audição (ouvir), o olfato (cheirar), o paladar (saborear) e o tato (tocar).' },
    { st: 2, tag: 'Aprender', q: 'Com que parte do corpo vemos?', a: 'Com os olhos — é o sentido da visão.' },
    { st: 2, tag: 'Aprender', q: 'Com que parte do corpo ouvimos?', a: 'Com os ouvidos (orelhas) — é a audição.' },
    { st: 2, tag: 'Aprender', q: 'Com que parte do corpo cheiramos?', a: 'Com o nariz — é o olfato.' },
    { st: 2, tag: 'Aprender', q: 'Com que parte do corpo saboreamos?', a: 'Com a língua — é o paladar.' },
    { st: 3, tag: 'Saúde', q: 'Quando devemos lavar as mãos?', a: 'Antes de comer e depois de ir à casa de banho. Mãos limpas evitam doenças.' },
    { st: 3, tag: 'Saúde', q: 'Quantas vezes por dia se lavam os dentes?', a: 'Pelo menos duas vezes: de manhã e antes de dormir.' },
    { st: 3, tag: 'Saúde', q: 'O que é uma alimentação saudável?', a: 'Comer fruta, legumes e beber água; doces e refrigerantes só de vez em quando.' },
    { st: 3, tag: 'Saúde', q: 'Por que é importante dormir bem?', a: 'Para o corpo descansar e crescer, e para termos energia no dia seguinte.' },
    { st: 1, tag: 'Aprender', q: 'O que protege o nosso corpo por fora?', a: 'A pele. Também sentimos o tato através dela.' },
    { st: 2, tag: 'Exemplo', q: 'Para sentir se a água está quente, que sentido uso?', a: 'O tato (toco com a mão/pele).' },
    { st: 3, tag: 'Saúde', q: 'O que devemos fazer antes de comer fruta?', a: 'Lavá-la bem com água.' }
  ],
  // ── Cap 2 · Família e Escola ──
  2: [
    { st: 1, tag: 'Aprender', q: 'Quem faz parte da família mais próxima?', a: 'O pai, a mãe, os irmãos e, muitas vezes, os avós.' },
    { st: 1, tag: 'Aprender', q: 'Quem são os meus avós?', a: 'São os pais do meu pai e da minha mãe.' },
    { st: 1, tag: 'Aprender', q: 'Quem é o meu irmão ou a minha irmã?', a: 'É um filho ou filha dos meus pais, como eu.' },
    { st: 1, tag: 'Aprender', q: 'O que é um primo?', a: 'É filho dos meus tios. Os tios são os irmãos dos meus pais.' },
    { st: 2, tag: 'Aprender', q: 'Para que serve a escola?', a: 'Para aprender a ler, escrever, contar e brincar com os amigos.' },
    { st: 2, tag: 'Aprender', q: 'Quem nos ensina na escola?', a: 'O professor ou a professora.' },
    { st: 2, tag: 'Aprender', q: 'Como devemos tratar os colegas?', a: 'Com respeito e amizade: partilhar, ajudar e não bater.' },
    { st: 2, tag: 'Aprender', q: 'O que fazemos no recreio?', a: 'Brincamos, descansamos e convivemos com os amigos.' },
    { st: 2, tag: 'Aprender', q: 'O que são as regras da sala de aula?', a: 'Combinações para corre tudo bem: estar com atenção, pôr o dedo no ar, arrumar.' },
    { st: 3, tag: 'Datas', q: 'O que comemoramos no Natal?', a: 'É uma festa em família, em dezembro, com prendas e momentos juntos.' },
    { st: 3, tag: 'Datas', q: 'O que é o dia de anos (aniversário)?', a: 'É o dia em que fazemos mais um ano de idade.' },
    { st: 3, tag: 'Datas', q: 'Quando é o Dia da Criança?', a: 'No dia 1 de junho.' },
    { st: 1, tag: 'Aprender', q: 'Quem cuida de mim em casa?', a: 'Os meus pais ou as pessoas da minha família.' },
    { st: 2, tag: 'Aprender', q: 'O que levamos na mochila para a escola?', a: 'Os livros, os cadernos, o estojo e o lanche.' },
    { st: 3, tag: 'Datas', q: 'Em que altura há férias grandes?', a: 'No verão (junho a setembro).' },
    { st: 2, tag: 'Aprender', q: 'O que é uma profissão?', a: 'É o trabalho de cada pessoa: médico, professor, padeiro, bombeiro…' }
  ],
  // ── Cap 3 · O Tempo e as Estações ──
  3: [
    { st: 1, tag: 'Aprender', q: 'Quantos dias tem uma semana?', a: '7 dias: segunda, terça, quarta, quinta, sexta, sábado e domingo.' },
    { st: 1, tag: 'Aprender', q: 'Quais são os dias do fim de semana?', a: 'Sábado e domingo.' },
    { st: 1, tag: 'Aprender', q: 'Quantos meses tem um ano?', a: '12 meses, de janeiro a dezembro.' },
    { st: 1, tag: 'Aprender', q: 'Quais são as partes do dia?', a: 'Manhã, tarde e noite.' },
    { st: 2, tag: 'Aprender', q: 'Quais são as quatro estações do ano?', a: 'Primavera, verão, outono e inverno.' },
    { st: 2, tag: 'Aprender', q: 'O que acontece na primavera?', a: 'As flores nascem, as árvores enchem-se de folhas e está mais calor.' },
    { st: 2, tag: 'Aprender', q: 'Como é o verão?', a: 'É a estação mais quente; os dias são grandes e vamos à praia.' },
    { st: 2, tag: 'Aprender', q: 'O que acontece no outono?', a: 'As folhas das árvores ficam castanhas e caem; começa a arrefecer.' },
    { st: 2, tag: 'Aprender', q: 'Como é o inverno?', a: 'É a estação mais fria; chove mais e, às vezes, neva.' },
    { st: 3, tag: 'Aprender', q: 'O que é o estado do tempo?', a: 'É como está o tempo: sol, chuva, vento, nuvens ou neve.' },
    { st: 3, tag: 'Aprender', q: 'O que vestimos quando está frio?', a: 'Roupa quente: casaco, cachecol, gorro e luvas.' },
    { st: 3, tag: 'Aprender', q: 'O que usamos quando chove?', a: 'O chapéu-de-chuva (guarda-chuva) e as botas.' },
    { st: 1, tag: 'Exemplo', q: 'Que dia vem depois de domingo?', a: 'Segunda-feira.' },
    { st: 2, tag: 'Exemplo', q: 'Em que estação caem as folhas das árvores?', a: 'No outono.' },
    { st: 3, tag: 'Exemplo', q: 'Se está sol e calor, que roupa uso?', a: 'Roupa fresca, como t-shirt e calções; e um chapéu.' },
    { st: 1, tag: 'Aprender', q: 'O que é "ontem", "hoje" e "amanhã"?', a: 'Ontem foi o dia que passou; hoje é agora; amanhã é o dia seguinte.' }
  ],
  // ── Cap 4 · Animais e Plantas ──
  4: [
    { st: 1, tag: 'Aprender', q: 'O que comem os animais?', a: 'Uns comem plantas (herbívoros), outros comem carne (carnívoros) e outros comem de tudo.' },
    { st: 1, tag: 'Aprender', q: 'Onde vivem os animais?', a: 'Em sítios diferentes: o peixe na água, o pássaro no ninho, a toupeira na terra.' },
    { st: 1, tag: 'Aprender', q: 'O que são animais domésticos?', a: 'Os que vivem com as pessoas, como o cão, o gato e o canário.' },
    { st: 1, tag: 'Aprender', q: 'O que são animais selvagens?', a: 'Os que vivem na natureza, como o leão, o lobo e o macaco.' },
    { st: 1, tag: 'Aprender', q: 'Como se deslocam os animais?', a: 'Uns andam, outros voam, outros nadam e outros rastejam.' },
    { st: 1, tag: 'Exemplo', q: 'Onde vive o peixe?', a: 'Na água (no mar, no rio ou no aquário).' },
    { st: 2, tag: 'Aprender', q: 'Quais são as partes de uma planta?', a: 'A raiz, o caule, as folhas, a flor e o fruto.' },
    { st: 2, tag: 'Aprender', q: 'Para que serve a raiz da planta?', a: 'Para a prender à terra e ir buscar água e alimento.' },
    { st: 2, tag: 'Aprender', q: 'De que precisam as plantas para crescer?', a: 'De água, luz do sol e ar.' },
    { st: 2, tag: 'Aprender', q: 'De onde vem o fruto?', a: 'Nasce da flor da planta. Dentro do fruto há, muitas vezes, sementes.' },
    { st: 2, tag: 'Exemplo', q: 'A macieira dá que fruto?', a: 'A maçã.' },
    { st: 3, tag: 'Natureza', q: 'Como podemos cuidar da natureza?', a: 'Não deitar lixo no chão, poupar água e não estragar as plantas.' },
    { st: 3, tag: 'Natureza', q: 'O que é reciclar?', a: 'Separar o lixo (papel, plástico, vidro) para ser reaproveitado.' },
    { st: 3, tag: 'Natureza', q: 'Por que devemos poupar água?', a: 'Porque é muito importante para a vida e não devemos desperdiçá-la.' },
    { st: 1, tag: 'Exemplo', q: 'Que animal faz "muu" e dá leite?', a: 'A vaca.' },
    { st: 2, tag: 'Exemplo', q: 'O que dá a planta para respirarmos melhor?', a: 'As plantas ajudam a limpar o ar.' }
  ],
  // ── Cap 5 · Objetos e Segurança ──
  5: [
    { st: 1, tag: 'Aprender', q: 'De que são feitos os objetos à nossa volta?', a: 'De materiais diferentes: madeira, plástico, vidro, metal, papel ou tecido.' },
    { st: 1, tag: 'Aprender', q: 'De que é feita uma janela?', a: 'O vidro é transparente (vê-se através); a moldura pode ser de madeira ou metal.' },
    { st: 1, tag: 'Aprender', q: 'Para que serve cada objeto?', a: 'Cada objeto tem uma função: a colher para comer, o lápis para escrever, a tesoura para cortar.' },
    { st: 1, tag: 'Exemplo', q: 'De que é feito, normalmente, um livro?', a: 'De papel.' },
    { st: 2, tag: 'Segurança', q: 'Podemos brincar com a tomada ou a eletricidade?', a: 'Não! É muito perigoso e pode magoar-nos.' },
    { st: 2, tag: 'Segurança', q: 'Podemos mexer no fogão ou no fogo?', a: 'Não. O fogo queima; só os adultos devem mexer.' },
    { st: 2, tag: 'Segurança', q: 'O que fazemos com facas e objetos cortantes?', a: 'Não brincamos com eles; pedimos ajuda a um adulto.' },
    { st: 2, tag: 'Segurança', q: 'Para que serve o número 112?', a: 'É o número de emergência: chama-se a ambulância, os bombeiros ou a polícia.' },
    { st: 3, tag: 'Na rua', q: 'Onde se atravessa a rua em segurança?', a: 'Na passadeira, e olhando primeiro para os dois lados.' },
    { st: 3, tag: 'Na rua', q: 'O que quer dizer o sinal vermelho do semáforo?', a: 'Parar! Os carros e as pessoas devem esperar.' },
    { st: 3, tag: 'Na rua', q: 'O que quer dizer o sinal verde do semáforo (para peões)?', a: 'Que se pode atravessar com atenção.' },
    { st: 3, tag: 'Na rua', q: 'O que devemos usar de noite para sermos vistos?', a: 'Roupa clara ou refletora, para os carros nos verem.' },
    { st: 2, tag: 'Segurança', q: 'Podemos abrir a porta a estranhos quando estamos sozinhos?', a: 'Não. Só abrimos a porta com um adulto de confiança.' },
    { st: 1, tag: 'Exemplo', q: 'A garrafa de água é, normalmente, de que material?', a: 'De plástico (ou de vidro).' },
    { st: 3, tag: 'Na rua', q: 'No carro, o que usamos sempre?', a: 'O cinto de segurança (e a cadeirinha, para os mais pequenos).' },
    { st: 2, tag: 'Segurança', q: 'O que fazemos se virmos fumo ou fogo em casa?', a: 'Sair e avisar logo um adulto; nunca esconder-se.' }
  ]
};

// Seleção atual por tab
var _em1Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function em1SwitchTab(tab, btn) {
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
  var panel = document.getElementById('em1p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Estudo do Meio 1.º · ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') em1BuildResumoNav();
  else if (tab === 'exercicios') em1BuildPraticarNav();
  else if (tab === 'quiz') em1QuizBuildNav();
  else if (tab === 'flashcards') em1FcBuildNav();
  else if (tab === 'teste') em1TesteBuildNav();
  else if (tab === 'jogos') em1JogosInit();
  else if (tab === 'fichas') em1FichasBuildNav();
  else if (tab === 'progresso') em1RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function em1OpenPraticar(modo) { em1SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function em1BuildResumoNav() {
  var capRow = document.getElementById('em1-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _em1Sel['resumo'] || 1;
  var h = '';
  _em1CapMeta.forEach(function(m) {
    var color = _em1CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="em1ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  em1ResumoShowSts(activeCap);
  em1RenderResumoInline();
}

function em1ResumoSelectCap(cap, btn) {
  _em1Sel['resumo'] = cap;
  _em1Sel['resumo-st'] = 0;
  var capRow = document.getElementById('em1-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _em1CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  em1ResumoShowSts(cap);
  em1RenderResumoInline();
}

function em1ResumoShowSts(cap) {
  var stRow = document.getElementById('em1-resumo-st-row');
  if (!stRow) return;
  var sts = _em1Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  // conta cards por subtema para esconder chips de subtemas sem teoria
  var _cc = (typeof _em1Cards !== 'undefined' && _em1Cards[cap]) ? _em1Cards[cap] : [];
  var _nSt = {}; _cc.forEach(function(c){ if (c.st) _nSt[c.st] = (_nSt[c.st]||0)+1; });
  var _stSel = _em1Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="em1ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    if (!_nSt[i + 1]) return; // subtema sem flashcards → não mostra o chip
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="em1ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function em1ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('em1-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _em1Sel['resumo'] = cap;
  _em1Sel['resumo-st'] = stIdx;
  em1RenderResumoInline();
}

function em1RenderResumoInline() {
  var cap = _em1Sel['resumo'] || 1;
  var dest = document.getElementById('em1-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _em1CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _em1Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _em1Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _em1PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Português não tem geradores procedurais — a prática usa o _em1Banco.
// Só os caps com gerador são "praticáveis".
// Português não tem geradores procedurais (as perguntas são de análise/banco).
// _em1Gerador devolve sempre null → o hub usa apenas o _em1Banco.
function _em1Gerador(cap) {
  return null;
}
// Um domínio está "disponível" para prática se tiver questões no banco.
function _em1TemConteudo(cap) {
  return !!(_em1Banco[cap] && _em1Banco[cap].length);
}
// Nº de subtemas por domínio (espelha _em1Subtemas) — usado na seleção de prática.
var _em1TemasCount = { 1: 4, 2: 5, 3: 3, 4: 3, 5: 3 };

// Estado da prática
var _em1Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _em1TarefaAtiva=null, _em1TarefaResp={};

function _em1PratStorageKey(cap) { return 'edupt_em1_cap' + cap; }

function em1BuildPraticarNav() {
  var capRow = document.getElementById('em1-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _em1Prat.cap || 1;
  var h = '';
  _em1CapMeta.forEach(function(m) {
    var hasGen = _em1TemConteudo(m.n);
    var color = _em1CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'em1PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  em1PraticarShowSts(activeCap);
  em1GerarExercicios(); // renderiza logo o domínio ativo (módulo ou banco)
}

function em1PraticarShowSts(cap) {
  var stRow = document.getElementById('em1-praticar-st-row');
  if (!stRow) return;
  var sts = _em1Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_em1Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="em1PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_em1Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="em1PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function em1PraticarSelectCap(cap, btn) {
  if (!_em1TemConteudo(cap)) return;
  _em1Prat.cap = cap;
  _em1Prat.st = 0;
  var capRow = document.getElementById('em1-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _em1CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  em1PraticarShowSts(cap);
  em1GerarExercicios();
}

function em1PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('em1-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _em1Prat.st = stIdx;
  em1GerarExercicios();
}

function em1PraticarSetNivel(nivel, btn) {
  _em1Prat.nivel = nivel;
  var grp = document.getElementById('em1-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  em1GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _em1SubtemaTemas = {
  1: { 1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'] },
  2: { 1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'] },
  3: { 1: ['1'], 2: ['2'], 3: ['3'] },
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },
  5: { 1: ['1'], 2: ['2'], 3: ['3'] }
};

/* ════════════════════════════════════════════════════════════════
   MÓDULOS REALOJADOS da antiga zona de exame (exames-pt.html, 7 tabs):
   cada domínio com módulo próprio renderiza-o no painel de Exercícios.
   Os mounts vivem nos ficheiros dos módulos (pt-gramatica, pt-figuras,
   pt-obras, pt-escrita) — aqui só se monta o esqueleto e despacha.
   Devolve true se o domínio tem módulo (e já foi renderizado).
   ════════════════════════════════════════════════════════════════ */
function _em1PratModulo(cap, dest) {
  // O 7.º ano não tem módulos realojados: a prática é toda banco-driven.
  return false;
}

function em1GerarExercicios() {
  var dest = document.getElementById('em1-praticar-content');
  if (!dest) return;
  var cap = _em1Prat.cap, gen = _em1Gerador(cap);

  // Domínios com módulos próprios (realojados da antiga zona de exame):
  // escondem nível/subtemas/gerar e renderizam o módulo no painel.
  var lvlBar = document.getElementById('em1-praticar-levelbar');
  var stRow = document.getElementById('em1-praticar-st-row');
  if (_em1PratModulo(cap, dest)) {
    if (lvlBar) lvlBar.style.display = 'none';
    if (stRow) stRow.style.display = 'none';
    if (_em1TarefaAtiva && typeof tarefaEntregaBar === 'function') tarefaEntregaBar(_em1TarefaAtiva, 'Trabalho concluído');
    return;
  }
  if (lvlBar) lvlBar.style.display = '';

  // Sem gerador procedural nem banco → nada a mostrar
  if (!gen && !(_em1Banco[cap] && _em1Banco[cap].length)) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_em1Prat.st > 0 && _em1SubtemaTemas[cap] && _em1SubtemaTemas[cap][_em1Prat.st]) {
    temas = _em1SubtemaTemas[cap][_em1Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_em1TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  if (gen) {
    for (var i = 0; i < QTD; i++) {
      var tema = temas[i % temas.length];
      var ex = gen(tema, tipos[i % tipos.length], _em1Prat.nivel);
      if (ex) geradas.push(ex);
    }
  }
  var banco = (typeof _em1Banco !== 'undefined' && _em1Banco[cap]) ? _em1Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs;
  if (!gen) {
    // Sem gerador (PT): usa o banco todo, baralhado
    exs = banco.slice().sort(function () { return Math.random() - .5; })
      .map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  } else {
    exs = (typeof _mixBancoGeradas === 'function') ? _mixBancoGeradas(banco, geradas, QTD, 3, _em1Prat.nivel)
      : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  }
  _em1Prat.exs = exs;
  _em1Prat.answered = {};
  _em1Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="em1-prat-scorebar">'
    + '<div><div class="score-num" id="em1-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="em1-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="em1-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="em1GerarExercicios()">↺ Novas questões</button>'
    + (_em1TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="em1EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'em1CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="em1-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _em1CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _sn = (_em1Subtemas[cap] && _em1Prat.st > 0) ? (_em1Subtemas[cap][_em1Prat.st - 1] || '') : '';
    Atribuir.montar('em1-atribuir', { curso: 'em1', cursoNome: 'Estudo do Meio 1.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_em1Prat.st || ''), subNome: _sn, tipo: 'quiz', nivel: _em1Prat.nivel });
  }
}

function em1CheckEx(qid, tipo, val, btn) {
  if (_em1Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _em1Prat.answered[qid] = true;
  if (r.correct) _em1Prat.score.correct++;
  _em1Prat.score.total++; if(_em1TarefaAtiva){_em1TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('em1-prat-score'); if (se) se.textContent = _em1Prat.score.correct;
  var te = document.getElementById('em1-prat-total'); if (te) te.textContent = '/ ' + _em1Prat.score.total;
  var pe = document.getElementById('em1-prat-prog'); if (pe && _em1Prat.exs.length) pe.style.width = (_em1Prat.score.total / _em1Prat.exs.length * 100) + '%';
  em1SaveProgress(_em1Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function em1SaveProgress(cap, correct) {
  try {
    var key = _em1PratStorageKey(cap);
    var d = JSON.parse(localStorage.getItem(key) || '{}');
    if (!d.sections) d.sections = {};
    if (!d.sections.praticar) d.sections.praticar = { correct: 0, total: 0 };
    d.sections.praticar.total++;
    if (correct) d.sections.praticar.correct++;
    d.lastActivity = Date.now();
    localStorage.setItem(key, JSON.stringify(d));
  } catch (e) {}
}

// Regista atividade no ProgressManager (XP + streak), com capId próprio do 9.º ano
// ('p7domN') para não misturar com o progresso do 7.º ano.
function _em1PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('p7dom' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _em1BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _em1CapMeta.forEach(function(m) {
    var hasGen = _em1TemConteudo(m.n);
    var color = _em1CapColors[m.n] || '#516860';
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

function _em1SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _em1CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _em1FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

/* Banco do domínio (o 7.º não tem módulos externos para juntar). */
function _em1FichaBanco(cap) {
  return (_em1Banco[cap] || []).slice();
}

// Baralha e tira n questões do banco alargado, respeitando o nível pedido.
// Primeiro só questões DO nível; se não chegarem, completa com as do nível
// mais próximo (médio→fácil→difícil; difícil→médio→fácil; fácil→médio→difícil),
// para que Fácil, Médio e Difícil deem fichas realmente diferentes.
function _em1FichaSlice(banco, n, dif) {
  var ordem = { facil: 0, medio: 1, dificil: 2 };
  var alvo = ordem[dif];
  if (alvo === undefined || typeof _nivelQuestao !== 'function') {
    return shuffle_m81(banco.slice()).slice(0, n).map(function (e, i) { return Object.assign({}, e, { num: i + 1 }); });
  }
  var porNivel = { 0: [], 1: [], 2: [] };
  banco.forEach(function (q) { porNivel[ordem[_nivelQuestao(q)]].push(q); });
  // níveis por ordem de proximidade ao pedido (em empate, prefere o mais fácil)
  var niveis = [0, 1, 2].sort(function (a, b) {
    var da = Math.abs(a - alvo), db = Math.abs(b - alvo);
    return da !== db ? da - db : a - b;
  });
  var fil = [];
  niveis.forEach(function (nv) { if (fil.length < n) fil = fil.concat(shuffle_m81(porNivel[nv].slice())); });
  return fil.slice(0, n).map(function (e, i) { return Object.assign({}, e, { num: i + 1 }); });
}

// Português: o Quiz tira questões de escolha múltipla do banco alargado do domínio.
function _em1BuildMcQuestion(cap) {
  var qs = _em1FichaBanco(cap).filter(function (q) {
    return q.tipo === 'mc' && q.opcoes && q.opcoes.length >= 2 && q.opcoes.indexOf(q.resposta) >= 0;
  });
  if (!qs.length) return null;
  var ex = qs[Math.floor(Math.random() * qs.length)];
  // devolve uma cópia com as opções baralhadas
  return {
    enun: ex.enun, tipo: 'mc', opcoes: shuffle_m81(ex.opcoes.slice()),
    resposta: ex.resposta, expl: ex.expl, tema: ex.tema
  };
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: QUIZ RELÂMPAGO (3 vidas, streak)
   ════════════════════════════════════════════════════════════════ */
var _em1Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function em1QuizBuildNav() {
  if (!_em1TemConteudo(_em1Quiz.cap)) _em1Quiz.cap = 1;
  _em1BuildCapRow('em1-quiz-cap-row', _em1Quiz.cap, 'em1QuizSelectCap');
  em1QuizStart();
}

function em1QuizSelectCap(cap, btn) {
  if (!_em1TemConteudo(cap)) return;
  _em1SetActiveCapBtn('em1-quiz-cap-row', btn, cap);
  _em1Quiz.cap = cap;
  em1QuizStart();
}

function em1QuizStart() {
  _em1Quiz.lives = 3; _em1Quiz.streak = 0; _em1Quiz.maxStreak = 0;
  _em1Quiz.score = 0; _em1Quiz.total = 0; _em1Quiz.answered = false;
  em1QuizNext();
}

function em1QuizNext() {
  var app = document.getElementById('em1-quiz-app');
  if (!app) return;
  if (_em1Quiz.lives <= 0) { em1QuizGameOver(app); return; }
  var ex = _em1BuildMcQuestion(_em1Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _em1Quiz.current = ex; _em1Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _em1Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="em1qopt-' + idx + '" onclick="em1QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_em1Quiz.streak > 1 ? '🔥 ' + _em1Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _em1Quiz.score + ' / ' + _em1Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="em1-quiz-fb" style="min-height:2.5rem"></div>';
}

function em1QuizAnswer(idx) {
  if (_em1Quiz.answered) return;
  _em1Quiz.answered = true;
  var ex = _em1Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _em1Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('em1qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('em1-quiz-fb');
  if (correct) {
    _em1Quiz.score++; _em1Quiz.streak++;
    if (_em1Quiz.streak > _em1Quiz.maxStreak) _em1Quiz.maxStreak = _em1Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _em1Quiz.lives--; _em1Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  em1SaveProgress(_em1Quiz.cap, correct);
  setTimeout(function(){ em1QuizNext(); }, 1400);
}

function em1QuizGameOver(app) {
  var pct = _em1Quiz.total > 0 ? Math.round(_em1Quiz.score / _em1Quiz.total * 100) : 0;
  _em1PM(_em1Quiz.cap, 'quiz', { pontuacao: _em1Quiz.score, total: _em1Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _em1Quiz.score + ' certas em ' + _em1Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_em1Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="em1QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _em1Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function em1FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_em1Cards[_em1Fc.cap] && _em1Cards[_em1Fc.cap].length)) {
    for (var c = 1; c <= _em1CapMeta.length; c++) { if (_em1Cards[c] && _em1Cards[c].length) { _em1Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('em1-fc-cap-row');
  if (row) {
    var h = '';
    _em1CapMeta.forEach(function(m) {
      var has = !!(_em1Cards[m.n] && _em1Cards[m.n].length);
      var color = _em1CapColors[m.n] || '#516860';
      var isActive = _em1Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('em1FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  em1FcSelectCap(_em1Fc.cap, null);
}

function em1FcSelectCap(cap, btn) {
  if (!(_em1Cards[cap] && _em1Cards[cap].length)) return;
  if (btn) _em1SetActiveCapBtn('em1-fc-cap-row', btn, cap);
  _em1Fc.cap = cap;
  _em1Fc.cards = _em1Cards[cap].slice();
  _em1Fc.idx = 0; _em1Fc.flipped = false;
  _em1PM(cap, 'flashcard');
  em1FcRender();
}

function em1FcRender() {
  var app = document.getElementById('em1-fc-app');
  if (!app) return;
  var cards = _em1Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_em1Fc.idx];
  var color = _em1CapColors[_em1Fc.cap] || '#516860';
  var pct = Math.round((_em1Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_em1Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="em1FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_em1Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_em1Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="em1FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="em1FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="em1FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function em1FcFlip() { _em1Fc.flipped = !_em1Fc.flipped; em1FcRender(); }
function em1FcNext() { _em1Fc.idx = (_em1Fc.idx + 1) % (_em1Fc.cards.length || 1); _em1Fc.flipped = false; em1FcRender(); }
function em1FcPrev() { _em1Fc.idx = (_em1Fc.idx - 1 + (_em1Fc.cards.length || 1)) % (_em1Fc.cards.length || 1); _em1Fc.flipped = false; em1FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _em1Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function em1TesteBuildNav() {
  if (!_em1TemConteudo(_em1Teste.cap)) _em1Teste.cap = 1;
  _em1BuildCapRow('em1-teste-cap-row', _em1Teste.cap, 'em1TesteSelectCap');
  em1TesteRenderConfig();
}

function em1TesteSelectCap(cap, btn) {
  if (!_em1TemConteudo(cap)) return;
  _em1SetActiveCapBtn('em1-teste-cap-row', btn, cap);
  _em1Teste.cap = cap;
  em1TesteRenderConfig();
}

function em1TesteRenderConfig() {
  var app = document.getElementById('em1-teste-app');
  if (!app) return;
  if (_em1Teste.timer) { clearInterval(_em1Teste.timer); _em1Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="em1-teste-nivel">' +
            '<button class="gen-level-btn' + (_em1Teste.nivel==='facil'?' active':'') + '" onclick="em1TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_em1Teste.nivel==='medio'?' active':'') + '" onclick="em1TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_em1Teste.nivel==='dificil'?' active':'') + '" onclick="em1TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="em1-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="em1-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="em1TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function em1TesteSetNivel(nivel, btn) {
  _em1Teste.nivel = nivel;
  var grp = document.getElementById('em1-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function em1TesteStart() {
  var gen = _em1Gerador(_em1Teste.cap);
  var qtdEl = document.getElementById('em1-teste-qtd'), tempoEl = document.getElementById('em1-teste-tempo');
  _em1Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _em1Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var exs = [];
  if (gen) {
    var nTemas = _em1TemasCount[_em1Teste.cap] || 1;
    var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
    for (var i = 0; i < _em1Teste.qtd; i++) {
      var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _em1Teste.nivel);
      if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
    }
  } else {
    // PT: teste sai do banco alargado do domínio
    exs = _em1FichaSlice(_em1FichaBanco(_em1Teste.cap), _em1Teste.qtd, _em1Teste.nivel);
  }
  if (!exs.length) return;
  _em1Teste.exs = exs; _em1Teste.answered = {}; _em1Teste.score = { correct: 0, total: 0 };
  _em1Teste.restante = _em1Teste.tempo;

  var app = document.getElementById('em1-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'em1TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="em1-teste-timer">' + _em1FmtTime(_em1Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="em1-teste-answered">0 / ' + _em1Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="em1TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="em1-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _em1Teste.timer = setInterval(function() {
    _em1Teste.restante--;
    var t = document.getElementById('em1-teste-timer');
    if (t) t.textContent = _em1FmtTime(_em1Teste.restante);
    if (_em1Teste.restante <= 0) em1TesteFinish();
  }, 1000);
}

function _em1FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function em1TesteCheck(qid, tipo, val, btn) {
  if (_em1Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _em1Teste.answered[qid] = true;
  if (r.correct) _em1Teste.score.correct++;
  _em1Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('em1-teste-answered');
  if (a) a.textContent = _em1Teste.score.total + ' / ' + _em1Teste.qtd;
  em1SaveProgress(_em1Teste.cap, r.correct);
  if (_em1Teste.score.total >= _em1Teste.qtd) setTimeout(em1TesteFinish, 600);
}

function em1TesteFinish() {
  if (_em1Teste.timer) { clearInterval(_em1Teste.timer); _em1Teste.timer = null; }
  var app = document.getElementById('em1-teste-app');
  if (!app) return;
  var total = _em1Teste.qtd;
  var correct = _em1Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _em1PM(_em1Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="em1TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (jogos de Português — pt-jogos.js)
   Quiz Contra o Tempo · Forca · Correspondência. Nada de jogos
   matemáticos (4 em linha, Sudoku…) — não fazem sentido em Português.
   ════════════════════════════════════════════════════════════════ */
function em1JogosInit() {
  (function(){ var pj=document.getElementById('em1p-jogos'); if(pj && !document.getElementById('em1-jogos-atr')){ var d=document.createElement('div'); d.id='em1-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('em1-jogos-atr',{curso:'em1',cursoNome:'Português 7.º',tipo:'jogo',nivel:'',caps:_em1CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  if (typeof ptJogosRender === 'function') {
    if (typeof ptJogosConfig === 'function') {
      ptJogosConfig({
        appId: 'em1-jogos-app',
        fonte: function () {
          var out = [];
          [1, 2, 3, 4, 5].forEach(function (c) { out = out.concat(_em1FichaBanco(c)); });
          return out;
        },
        forca: PT7_FORCA
      });
    }
    ptJogosRender();
  } else {
    var app = document.getElementById('em1-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (pt-jogos.js não carregado).</p>';
  }
}

/* Termos da Forca/Sopa de Letras ao nível do 7.º ano. */
var PT7_FORCA = [
  { p: 'NARRADOR', dica: 'Entidade que conta a história num texto narrativo.' },
  { p: 'PERSONAGEM', dica: 'Quem participa na ação de uma narrativa.' },
  { p: 'FABULA', dica: 'Narrativa curta com animais e uma moralidade.' },
  { p: 'LENDA', dica: 'Narrativa tradicional que mistura realidade e fantasia.' },
  { p: 'DESENLACE', dica: 'Momento final da narrativa, em que o conflito se resolve.' },
  { p: 'DIDASCALIA', dica: 'Indicação cénica no texto dramático (não é dita pelos atores).' },
  { p: 'COMPARACAO', dica: 'Figura de estilo que aproxima dois elementos com «como».' },
  { p: 'PERSONIFICACAO', dica: 'Atribui características humanas a animais ou coisas.' },
  { p: 'ONOMATOPEIA', dica: 'Palavra que imita um som (trrrim!, miau).' },
  { p: 'ANAFORA', dica: 'Repetição de palavras no início de versos ou frases.' },
  { p: 'ESTROFE', dica: 'Conjunto de versos de um poema.' },
  { p: 'QUADRA', dica: 'Estrofe de quatro versos.' },
  { p: 'REFRAO', dica: 'Verso ou estrofe que se repete ao longo do poema.' },
  { p: 'SUJEITO', dica: 'Função sintática de quem pratica a ação.' },
  { p: 'PREDICADO', dica: 'Função sintática que exprime o que se diz do sujeito.' },
  { p: 'VOCATIVO', dica: 'Função sintática do chamamento (separa-se por vírgula).' },
  { p: 'ADVERBIO', dica: 'Classe de palavras invariável que modifica o verbo (ex.: rapidamente).' },
  { p: 'PRONOME', dica: 'Classe de palavras que substitui o nome.' },
  { p: 'SARAMAGO', dica: 'Único escritor português com o Prémio Nobel da Literatura.' },
  { p: 'SLOGAN', dica: 'Frase curta e marcante de um anúncio publicitário.' },
  { p: 'BIOGRAFIA', dica: 'Texto que relata a vida de uma pessoa real.' },
  { p: 'HEXASSILABO', dica: 'Verso com seis sílabas métricas (ex.: «Pelo sonho é que vamos»).' },
  { p: 'COORDENACAO', dica: 'Ligação de orações independentes (e, mas, ou, logo).' }
];

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_em1_capN (gravado por em1SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _em1ProgGetCaps() {
  var out = [];
  var nCaps = _em1CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_em1_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function em1RenderProgresso() {
  var el = document.getElementById('em1-progresso-content');
  if (!el) return;
  var caps = _em1ProgGetCaps();
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
     + '<button onclick="em1ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 9.º ano)
  h += '<div style="background:var(--m9c1-base);border:1.5px solid var(--m9c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m9c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="em1ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 9.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('p7dom') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _em1CapMeta[c.cap - 1];
    var color = _em1CapColors[c.cap] || '#516860';
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
      var mp = _em1CapMeta[pior.cap - 1];
      var colorp = _em1CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="em1TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="em1ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function em1TreinarCap(cap) {
  _em1Prat.cap = cap;
  _em1Prat.st = 0;
  em1SwitchTab('exercicios', null);
}

function em1ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 9.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _em1CapMeta.length; cap++) { try { localStorage.removeItem('edupt_em1_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 9.º ano (m9cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('p7dom') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  em1RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 9.º ano limpo.', 'ok');
}

function em1ProgDownloadPDF() {
  var caps = _em1ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _em1CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Português 7.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + eduAlunoLinhaPDF()
    + '<div style="background:#eef2f0;border:1px solid #9ab5aa;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#516860;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-em1.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _em1gf = {
  caps: {},            // { cap: true } selecionados
  sts: {},             // { cap: { stIdx(1..n): true } } tópicos por capítulo; vazio = todos
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Tópicos (índices 1..n) escolhidos para um capítulo; null = todos.
function _em1gfStsSel(cap) {
  var sel = _em1gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves t do banco correspondentes aos tópicos escolhidos; null = todos.
function _em1gfTemasSel(cap) {
  var sts = _em1gfStsSel(cap);
  if (!sts) return null;
  var mapa = _em1SubtemaTemas[cap] || {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

// Constrói a lista de capítulos selecionáveis e, para cada capítulo
// selecionado, os chips dos tópicos (subtemas) — a dona pediu para poder
// gerar fichas só de um tópico (ex.: só Os Lusíadas, só Funções Sintáticas).
function em1FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('em1-fichas-atr','em1AtribuirFicha');
  var el = document.getElementById('em1-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com conteúdo
  var temAlgum = false;
  for (var k in _em1gf.caps) { if (_em1gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _em1CapMeta.forEach(function(m) {
    var hasGen = _em1TemConteudo(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _em1gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_em1gf.caps[m.n];
    var color = _em1CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="em1gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // tópicos do capítulo selecionado
    if (sel) {
      var sts = _em1Subtemas[m.n] || [];
      if (sts.length) {
        var escolhidos = _em1gf.sts[m.n] || {};
        var algumSt = _em1gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Tópicos:</span>';
        h += '<button onclick="em1gfToggleSt(' + m.n + ',0,this)" style="' + _em1gfStStyle(!algumSt, color) + '">Todos</button>';
        sts.forEach(function (st, i) {
          var on = !!escolhidos[i + 1];
          h += '<button onclick="em1gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _em1gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

function _em1gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function em1gfToggleCap(cap, btn) {
  _em1gf.caps[cap] = !_em1gf.caps[cap];
  if (!_em1gf.caps[cap]) delete _em1gf.sts[cap]; // desmarcar cap limpa os tópicos
  em1FichasBuildNav(); // re-render para mostrar/esconder a linha de tópicos
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o tópico.
function em1gfToggleSt(cap, idx, btn) {
  if (idx === 0) {
    delete _em1gf.sts[cap];
  } else {
    if (!_em1gf.sts[cap]) _em1gf.sts[cap] = {};
    _em1gf.sts[cap][idx] = !_em1gf.sts[cap][idx];
    if (_em1gfStsSel(cap) === null) delete _em1gf.sts[cap]; // tudo desmarcado = todos
  }
  em1FichasBuildNav();
}

function em1gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _em1gf.tipos[t] = !_em1gf.tipos[t];
  btn.classList.toggle('active', _em1gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _em1gf.tipos[t] ? '✓' : '';
}

function em1gfSetDif(btn) {
  _em1gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('em1-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function em1gfSetQty(btn) {
  _em1gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('em1-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _em1gfExBloco(exs, startNum) {
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

function _em1gfGenExs(cap, n) {
  var gen = _em1Gerador(cap);
  if (!gen) {
    // PT: a ficha vem toda do banco alargado (domínio + módulos realojados),
    // restringido aos tópicos escolhidos (se a dona/aluno escolheu algum)
    var pool = _em1FichaBanco(cap);
    var temasSel = _em1gfTemasSel(cap);
    if (temasSel) {
      var filtrado = pool.filter(function (q) { return temasSel.indexOf(q.t) !== -1; });
      if (filtrado.length) pool = filtrado;
    }
    return _em1FichaSlice(pool, n, _em1gf.dif);
  }
  var nTemas = _em1TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _em1gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _em1Banco !== 'undefined' && _em1Banco[cap]) ? _em1Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _em1gf.dif);
  }
  return geradas;
}

function em1gfGerar(formato) {
  // capítulos selecionados (conta o banco alargado — em PT não há geradores)
  var capsSel = [];
  _em1CapMeta.forEach(function(m) { if (_em1gf.caps[m.n] && (_em1Gerador(m.n) || _em1FichaBanco(m.n).length)) capsSel.push(m.n); });
  var status = document.getElementById('em1-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _em1gf.tipos.resumo || _em1gf.tipos.exercicios || _em1gf.tipos.teste || _em1gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_em1gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _em1PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _em1CapMeta[cap - 1];
    var color = _em1CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards), restringido aos tópicos escolhidos
    // quando o filtro apanha cartões suficientes (senão mostra o domínio todo)
    if (_em1gf.tipos.resumo) {
      var cards = _em1Cards[cap] || [];
      var stsR = _em1gfStsSel(cap);
      if (stsR && cards.length) {
        var palavras = [];
        stsR.forEach(function (i) {
          String((_em1Subtemas[cap] || [])[i - 1] || '').toLowerCase().split(/\s+/).forEach(function (w) {
            if (w.length >= 5 && palavras.indexOf(w) === -1) palavras.push(w);
          });
        });
        var filtrados = cards.filter(function (c) {
          var txt = ((c.tag || '') + ' ' + (c.q || '') + ' ' + (c.a || '')).toLowerCase();
          return palavras.some(function (w) { return txt.indexOf(w) !== -1; });
        });
        if (filtrados.length >= 2) cards = filtrados;
      }
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_em1gf.tipos.exercicios) {
      var exs = _em1gfGenExs(cap, _em1gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _em1gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_em1gf.tipos.teste) {
      var exsT = _em1gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _em1gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_em1gf.tipos.minitestes) {
      var subt = _em1Subtemas[cap] || [];
      var mapa = _em1SubtemaTemas[cap] || {};
      var genM = _em1Gerador(cap);
      var bancoM = genM ? null : _em1FichaBanco(cap); // PT: sem gerador, usa o banco alargado
      var stsSelM = _em1gfStsSel(cap); // só minitestes dos tópicos escolhidos
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        if (stsSelM && stsSelM.indexOf(si + 1) === -1) return;
        var temas = mapa[si + 1] || [String(si + 1)];
        var exsM = [];
        if (genM) {
          for (var q = 0; q < 4; q++) {
            var tema = temas[q % temas.length];
            var ex = genM(tema, (q % 2 === 0) ? 'mc' : 'fill', _em1gf.dif);
            if (ex) exsM.push(ex);
          }
        } else {
          var poolM = bancoM.filter(function (qb) { return temas.indexOf(qb.t) !== -1; });
          if (!poolM.length) poolM = bancoM;
          exsM = _em1FichaSlice(poolM, 4, _em1gf.dif);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _em1gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_em1gf.tipos.solucoes && eduPodeSolucoes() && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  // nome dos capítulos no cabeçalho, com os tópicos escolhidos entre parêntesis
  var nomesCaps = capsSel.map(function(c) {
    var nome = _em1CapMeta[c - 1].label;
    var sts = _em1gfStsSel(c);
    if (sts) {
      var nomes = sts.map(function (i) { return (_em1Subtemas[c] || [])[i - 1] || ''; }).filter(function (x) { return x; });
      if (nomes.length) nome += ' (' + nomes.join(', ') + ')';
    }
    return nome;
  }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Português 7.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _em1CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('9', 'portugues', _temasNomes, formato) : ('ficha-em1.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _em1Init() {
  // arranca na tab Teoria com o cap 1 selecionado
  em1BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _em1Init);
else _em1Init();

/* ═══ GERADOR DE EXERCÍCIOS - Cap 1 Números (fiel ao Prisma 8) ═══ */
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

/* ════════════════════════════════════════════════════════════════
   BANCO DE QUESTÕES - Português · 9.º ano (por domínio)
   ════════════════════════════════════════════════════════════════ */
var _em1Banco = {
  1: [ // Eu e o meu corpo
    { t: '1', tipo: 'mc', enun: 'Com que parte do corpo <strong>vemos</strong>?', opcoes: ['os olhos', 'as orelhas', 'o nariz', 'as mãos'], resposta: 'os olhos', expl: 'Vemos com os olhos — é o sentido da visão.', tema: 'T1 · Corpo' },
    { t: '1', tipo: 'mc', enun: 'Quantos dedos temos em cada mão?', opcoes: ['5', '4', '10', '6'], resposta: '5', expl: 'Cinco dedos em cada mão.', tema: 'T1 · Corpo' },
    { t: '2', tipo: 'mc', enun: 'Com que parte do corpo <strong>cheiramos</strong>?', opcoes: ['o nariz', 'a boca', 'os olhos', 'os pés'], resposta: 'o nariz', expl: 'Cheiramos com o nariz — é o olfato.', tema: 'T2 · Sentidos' },
    { t: '2', tipo: 'mc', enun: 'Quantos sentidos temos?', opcoes: ['5', '3', '4', '7'], resposta: '5', expl: 'Visão, audição, olfato, paladar e tato.', tema: 'T2 · Sentidos' },
    { t: '2', tipo: 'mc', enun: 'Para saborear a comida usamos…', opcoes: ['a língua', 'as orelhas', 'os olhos', 'as mãos'], resposta: 'a língua', expl: 'Saboreamos com a língua — é o paladar.', tema: 'T2 · Sentidos' },
    { t: '3', tipo: 'mc', enun: 'Quando devemos lavar as mãos?', opcoes: ['antes de comer', 'nunca', 'só ao domingo', 'depois de dormir só'], resposta: 'antes de comer', expl: 'Antes de comer e depois da casa de banho.', tema: 'T3 · Higiene' },
    { t: '3', tipo: 'mc', enun: 'O que é mais saudável comer?', opcoes: ['fruta', 'rebuçados', 'bolos', 'batatas fritas'], resposta: 'fruta', expl: 'A fruta faz bem; os doces só de vez em quando.', tema: 'T3 · Saúde' },
    { t: '1', tipo: 'mc', enun: 'O que protege o corpo por fora?', opcoes: ['a pele', 'o cabelo', 'os dentes', 'as unhas'], resposta: 'a pele', expl: 'A pele cobre e protege o corpo.', tema: 'T1 · Corpo' },
    { t: '2', tipo: 'mc', enun: 'Para sentir se a água está quente uso o sentido do…', opcoes: ['tato', 'paladar', 'olfato', 'audição'], resposta: 'tato', expl: 'Toco com a pele/mão → tato.', tema: 'T2 · Sentidos' },
    { t: '3', tipo: 'mc', enun: 'Quantas vezes por dia se lavam os dentes?', opcoes: ['pelo menos 2', 'nunca', '1 por semana', '10'], resposta: 'pelo menos 2', expl: 'De manhã e antes de dormir.', tema: 'T3 · Higiene' }
  ],
  2: [ // Família e Escola
    { t: '1', tipo: 'mc', enun: 'Os meus avós são…', opcoes: ['os pais dos meus pais', 'os meus irmãos', 'os meus amigos', 'os meus professores'], resposta: 'os pais dos meus pais', expl: 'Os avós são os pais do pai e da mãe.', tema: 'T1 · Família' },
    { t: '1', tipo: 'mc', enun: 'Quem são os meus tios?', opcoes: ['os irmãos dos meus pais', 'os meus colegas', 'os meus primos', 'os meus avós'], resposta: 'os irmãos dos meus pais', expl: 'Os tios são irmãos do pai ou da mãe.', tema: 'T1 · Família' },
    { t: '2', tipo: 'mc', enun: 'Quem nos ensina na escola?', opcoes: ['o professor', 'o médico', 'o padeiro', 'o bombeiro'], resposta: 'o professor', expl: 'O professor ou a professora ensina-nos.', tema: 'T2 · Escola' },
    { t: '2', tipo: 'mc', enun: 'Como devemos tratar os colegas?', opcoes: ['com respeito e amizade', 'à bulha', 'ignorando-os', 'a gritar'], resposta: 'com respeito e amizade', expl: 'Partilhar e ajudar é o correto.', tema: 'T2 · Escola' },
    { t: '2', tipo: 'mc', enun: 'O que levamos na mochila para a escola?', opcoes: ['livros e cadernos', 'panelas', 'um cão', 'ferramentas'], resposta: 'livros e cadernos', expl: 'Livros, cadernos, estojo e lanche.', tema: 'T2 · Escola' },
    { t: '3', tipo: 'mc', enun: 'O Natal comemora-se em…', opcoes: ['dezembro', 'junho', 'março', 'agosto'], resposta: 'dezembro', expl: 'O Natal é em dezembro.', tema: 'T3 · Datas' },
    { t: '3', tipo: 'mc', enun: 'O Dia da Criança é a…', opcoes: ['1 de junho', '25 de dezembro', '1 de janeiro', '10 de junho'], resposta: '1 de junho', expl: 'Celebra-se a 1 de junho.', tema: 'T3 · Datas' },
    { t: '1', tipo: 'mc', enun: 'O que é um primo?', opcoes: ['filho dos meus tios', 'o meu pai', 'o meu professor', 'o meu vizinho'], resposta: 'filho dos meus tios', expl: 'Os primos são filhos dos tios.', tema: 'T1 · Família' },
    { t: '2', tipo: 'mc', enun: 'O que fazemos no recreio?', opcoes: ['brincamos e descansamos', 'temos teste', 'dormimos a sesta', 'vamos para casa'], resposta: 'brincamos e descansamos', expl: 'O recreio é para brincar e conviver.', tema: 'T2 · Escola' },
    { t: '3', tipo: 'mc', enun: 'As férias grandes são…', opcoes: ['no verão', 'no inverno', 'em janeiro', 'nunca'], resposta: 'no verão', expl: 'As férias grandes são no verão.', tema: 'T3 · Datas' }
  ],
  3: [ // O Tempo e as Estações
    { t: '1', tipo: 'mc', enun: 'Quantos dias tem uma semana?', opcoes: ['7', '5', '10', '12'], resposta: '7', expl: 'A semana tem 7 dias.', tema: 'T1 · Dias' },
    { t: '1', tipo: 'mc', enun: 'Quais são os dias do fim de semana?', opcoes: ['sábado e domingo', 'segunda e terça', 'quinta e sexta', 'só domingo'], resposta: 'sábado e domingo', expl: 'O fim de semana é sábado e domingo.', tema: 'T1 · Dias' },
    { t: '1', tipo: 'mc', enun: 'Quantos meses tem um ano?', opcoes: ['12', '7', '10', '24'], resposta: '12', expl: 'O ano tem 12 meses.', tema: 'T1 · Dias' },
    { t: '2', tipo: 'mc', enun: 'Quantas estações tem o ano?', opcoes: ['4', '2', '3', '5'], resposta: '4', expl: 'Primavera, verão, outono e inverno.', tema: 'T2 · Estações' },
    { t: '2', tipo: 'mc', enun: 'Em que estação caem as folhas das árvores?', opcoes: ['outono', 'verão', 'primavera', 'inverno'], resposta: 'outono', expl: 'No outono as folhas ficam castanhas e caem.', tema: 'T2 · Estações' },
    { t: '2', tipo: 'mc', enun: 'Qual é a estação mais quente?', opcoes: ['verão', 'inverno', 'outono', 'primavera'], resposta: 'verão', expl: 'O verão é a estação mais quente.', tema: 'T2 · Estações' },
    { t: '2', tipo: 'mc', enun: 'Em que estação nascem mais flores?', opcoes: ['primavera', 'inverno', 'outono', 'verão'], resposta: 'primavera', expl: 'Na primavera as flores nascem.', tema: 'T2 · Estações' },
    { t: '3', tipo: 'mc', enun: 'Quando chove, o que usamos?', opcoes: ['o chapéu-de-chuva', 'óculos de sol', 'calções', 'um leque'], resposta: 'o chapéu-de-chuva', expl: 'Guarda-chuva e botas, para a chuva.', tema: 'T3 · Estado do tempo' },
    { t: '3', tipo: 'mc', enun: 'Que roupa vestimos quando está frio?', opcoes: ['casaco e cachecol', 'fato de banho', 't-shirt fina', 'chinelos'], resposta: 'casaco e cachecol', expl: 'Roupa quente para o frio.', tema: 'T3 · Estado do tempo' },
    { t: '1', tipo: 'mc', enun: 'Que dia vem depois de sexta-feira?', opcoes: ['sábado', 'quinta', 'domingo', 'segunda'], resposta: 'sábado', expl: 'Depois de sexta vem sábado.', tema: 'T1 · Dias' }
  ],
  4: [ // Animais e Plantas
    { t: '1', tipo: 'mc', enun: 'Onde vive o peixe?', opcoes: ['na água', 'na árvore', 'na terra', 'no ar'], resposta: 'na água', expl: 'O peixe vive na água.', tema: 'T1 · Animais' },
    { t: '1', tipo: 'mc', enun: 'Qual destes é um animal doméstico?', opcoes: ['o cão', 'o leão', 'o lobo', 'o tigre'], resposta: 'o cão', expl: 'O cão vive com as pessoas → doméstico.', tema: 'T1 · Animais' },
    { t: '1', tipo: 'mc', enun: 'Que animal faz "muu" e dá leite?', opcoes: ['a vaca', 'o gato', 'a galinha', 'o pato'], resposta: 'a vaca', expl: 'A vaca dá-nos o leite.', tema: 'T1 · Animais' },
    { t: '1', tipo: 'mc', enun: 'Qual destes animais voa?', opcoes: ['o pássaro', 'o peixe', 'a cobra', 'o caracol'], resposta: 'o pássaro', expl: 'O pássaro voa com as asas.', tema: 'T1 · Animais' },
    { t: '2', tipo: 'mc', enun: 'Qual destas é uma parte da planta?', opcoes: ['a raiz', 'a pata', 'a asa', 'a barbatana'], resposta: 'a raiz', expl: 'A planta tem raiz, caule, folhas, flor e fruto.', tema: 'T2 · Plantas' },
    { t: '2', tipo: 'mc', enun: 'De que precisam as plantas para crescer?', opcoes: ['água e luz do sol', 'só de escuridão', 'de brinquedos', 'de música'], resposta: 'água e luz do sol', expl: 'Precisam de água, sol e ar.', tema: 'T2 · Plantas' },
    { t: '2', tipo: 'mc', enun: 'A macieira dá que fruto?', opcoes: ['a maçã', 'a pera', 'a banana', 'a uva'], resposta: 'a maçã', expl: 'A macieira dá maçãs.', tema: 'T2 · Plantas' },
    { t: '2', tipo: 'mc', enun: 'Para que serve a raiz da planta?', opcoes: ['ir buscar água à terra', 'voar', 'dar luz', 'fazer barulho'], resposta: 'ir buscar água à terra', expl: 'A raiz prende a planta e busca água.', tema: 'T2 · Plantas' },
    { t: '3', tipo: 'mc', enun: 'Como cuidamos da natureza?', opcoes: ['não deitar lixo no chão', 'cortar as árvores', 'gastar muita água', 'assustar os animais'], resposta: 'não deitar lixo no chão', expl: 'Cuidar = não poluir e poupar.', tema: 'T3 · Natureza' },
    { t: '3', tipo: 'mc', enun: 'O que é reciclar?', opcoes: ['separar o lixo', 'queimar tudo', 'deitar tudo junto', 'esconder o lixo'], resposta: 'separar o lixo', expl: 'Separar papel, plástico e vidro.', tema: 'T3 · Natureza' }
  ],
  5: [ // Objetos e Segurança
    { t: '1', tipo: 'mc', enun: 'De que é feito, normalmente, um livro?', opcoes: ['papel', 'vidro', 'metal', 'água'], resposta: 'papel', expl: 'Os livros são de papel.', tema: 'T1 · Materiais' },
    { t: '1', tipo: 'mc', enun: 'O vidro de uma janela é…', opcoes: ['transparente', 'mole', 'feito de madeira', 'feito de papel'], resposta: 'transparente', expl: 'Vê-se através do vidro.', tema: 'T1 · Materiais' },
    { t: '1', tipo: 'mc', enun: 'Para que serve a tesoura?', opcoes: ['cortar', 'comer', 'escrever', 'beber'], resposta: 'cortar', expl: 'Cada objeto tem a sua função.', tema: 'T1 · Materiais' },
    { t: '2', tipo: 'mc', enun: 'Podemos brincar com a tomada elétrica?', opcoes: ['não, é perigoso', 'sim', 'só à noite', 'sim, com água'], resposta: 'não, é perigoso', expl: 'A eletricidade é perigosa.', tema: 'T2 · Segurança' },
    { t: '2', tipo: 'mc', enun: 'Qual é o número de emergência?', opcoes: ['112', '100', '999', '123'], resposta: '112', expl: '112 chama ambulância, bombeiros ou polícia.', tema: 'T2 · Segurança' },
    { t: '2', tipo: 'mc', enun: 'Podemos mexer no fogão aceso?', opcoes: ['não', 'sim', 'só um bocadinho', 'sim, com a mão molhada'], resposta: 'não', expl: 'O fogo queima; só os adultos mexem.', tema: 'T2 · Segurança' },
    { t: '3', tipo: 'mc', enun: 'Onde se atravessa a rua em segurança?', opcoes: ['na passadeira', 'a correr', 'no meio da estrada', 'de olhos fechados'], resposta: 'na passadeira', expl: 'Na passadeira, olhando para os dois lados.', tema: 'T3 · Na rua' },
    { t: '3', tipo: 'mc', enun: 'O sinal vermelho do semáforo quer dizer…', opcoes: ['parar', 'avançar', 'correr', 'saltar'], resposta: 'parar', expl: 'Vermelho = parar.', tema: 'T3 · Na rua' },
    { t: '3', tipo: 'mc', enun: 'No carro usamos sempre…', opcoes: ['o cinto de segurança', 'o telemóvel', 'os óculos de sol', 'nada'], resposta: 'o cinto de segurança', expl: 'O cinto protege-nos.', tema: 'T3 · Na rua' },
    { t: '2', tipo: 'mc', enun: 'Estando sozinho, abres a porta a um estranho?', opcoes: ['não', 'sim', 'só se ele pedir', 'sim, sempre'], resposta: 'não', expl: 'Só se abre a porta com um adulto de confiança.', tema: 'T2 · Segurança' }
  ]
};

/* ════════════════════════════════════════════════════════════════
   MANUAL «MENSAGENS 7» · Fichas de Gramática — LOTE 1
   Conteúdo das 26 fichas de trabalho de Gramática (pasta
   "7º ano_portugu|es/Mensagens 7/"), com as respostas conferidas
   no Solucoes.docx do manual. Onde a ficha original dependia de
   texto/imagem, a frase-exemplo foi adaptada mantendo a
   classificação dada pelas soluções.
   ════════════════════════════════════════════════════════════════ */
// ── F1 Variedades geográficas · F3 Formação de palavras (t5) ──
_em1Banco[2] = _em1Banco[2].concat([
  { t: '5', tipo: 'vf', dif: 'facil', enun: 'A língua portuguesa é falada exatamente da mesma maneira em Portugal, em Angola e no Brasil.', resposta: 'F', expl: 'É falada de modo diferente em cada território: são as variedades geográficas do português.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'Em termos geográficos, consideram-se no português:', opcoes: ['três variedades principais: europeia, brasileira e africanas', 'duas variedades: de Lisboa e do Porto', 'uma única variedade oficial', 'tantas variedades quantos os falantes'], resposta: 'três variedades principais: europeia, brasileira e africanas', expl: 'Variedade europeia, variedade brasileira e variedades africanas: a mesma língua, com diferenças.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'A frase brasileira «Estou trabalhando» corresponde, no português europeu, a:', opcoes: ['«Estou a trabalhar.»', '«Estou trabalhado.»', '«Trabalho estou.»', '«Estou por trabalhar.»'], resposta: '«Estou a trabalhar.»', expl: 'O português europeu prefere «estar a + infinitivo»; o do Brasil usa o gerúndio («trabalhando»).', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'facil', enun: 'O antónimo de «capaz», formado por prefixação, é:', opcoes: ['incapaz', 'capacidade', 'capazmente', 'descapaz'], resposta: 'incapaz', expl: 'Acrescenta-se o prefixo in- (valor negativo): in + capaz.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'facil', enun: 'A palavra «estrela-do-mar» é formada por:', opcoes: ['composição', 'derivação por sufixação', 'derivação por prefixação', 'onomatopeia'], resposta: 'composição', expl: 'Junta palavras já existentes (estrela + do + mar): composição.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'Qual é o intruso no grupo «desfazer · infeliz · couve-flor · refazer»?', opcoes: ['couve-flor', 'desfazer', 'infeliz', 'refazer'], resposta: 'couve-flor', expl: '«Couve-flor» é palavra COMPOSTA; as outras são derivadas por prefixação (des-, in-, re-).', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'A palavra «entristecer» é formada por:', opcoes: ['parassíntese (prefixo e sufixo em simultâneo)', 'derivação por sufixação apenas', 'derivação por prefixação apenas', 'composição'], resposta: 'parassíntese (prefixo e sufixo em simultâneo)', expl: 'en- + triste + -ecer, prefixo e sufixo juntam-se ao mesmo tempo: não existe «entriste» nem «tristecer».', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: '«Conta-gotas», «obra-prima» e «segunda-feira» são palavras formadas por:', opcoes: ['composição por associação de palavras', 'derivação por sufixação', 'parassíntese', 'truncação'], resposta: 'composição por associação de palavras', expl: 'Associam-se palavras inteiras: composição morfossintática.', tema: 'T5 · Léxico e Variação' },

  // ── F4 Nome · F5 Determinante/Quantificador · F6 Adjetivo · F7 Pronome (t1) ──
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'No grupo «mãe · nora · mulher · cliente · ovelha», a palavra que NÃO muda de forma no feminino e no masculino é:', opcoes: ['cliente', 'mãe', 'nora', 'ovelha'], resposta: 'cliente', expl: '«Cliente» é nome comum de dois: o cliente / a cliente. Os outros são femininos próprios.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Comi duas maçãs e o dobro das cerejas.», «duas» e «o dobro» são:', opcoes: ['quantificadores numerais', 'determinantes artigos', 'adjetivos qualificativos', 'advérbios de quantidade'], resposta: 'quantificadores numerais', expl: 'Indicam quantidades exatas, «duas» (cardinal) e «o dobro» (multiplicativo): quantificadores numerais.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «a maior ilha do arquipélago», o adjetivo «maior» está no grau:', opcoes: ['superlativo relativo de superioridade', 'comparativo de superioridade', 'superlativo absoluto', 'normal'], resposta: 'superlativo relativo de superioridade', expl: '«A maior» destaca a ilha dentro de um conjunto: superlativo relativo de superioridade.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «uma praia muito comprida», o adjetivo está no grau:', opcoes: ['superlativo absoluto analítico', 'superlativo absoluto sintético', 'comparativo de igualdade', 'superlativo relativo'], resposta: 'superlativo absoluto analítico', expl: '«Muito + adjetivo» = superlativo absoluto analítico; «compridíssima» seria a forma sintética.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «os primeiros classificados», a palavra «primeiros» é um adjetivo:', opcoes: ['numeral', 'qualificativo', 'comparativo', 'relativo'], resposta: 'numeral', expl: 'Indica ordem (1.º) e caracteriza o nome: adjetivo numeral.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'O antónimo de «trabalhador» é:', opcoes: ['preguiçoso', 'esforçado', 'aplicado', 'ativo'], resposta: 'preguiçoso', expl: 'Antónimos têm sentidos opostos: trabalhador ↔ preguiçoso.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Na frase «A professora leu um texto que era muito extenso.», «que» é:', opcoes: ['pronome relativo', 'conjunção subordinativa', 'determinante interrogativo', 'advérbio'], resposta: 'pronome relativo', expl: '«Que» substitui «o texto» e liga as duas orações: pronome relativo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Nenhuma das respostas está certa.», «nenhuma» é:', opcoes: ['pronome indefinido', 'determinante artigo', 'advérbio de negação', 'quantificador numeral'], resposta: 'pronome indefinido', expl: '«Nenhuma» está sem nome, a substituí-lo: pronome indefinido.', tema: 'T1 · Classes de Palavras' },

  // ── F9 Verbo (subclasses) (t1) ──
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «O bolo foi comido pelo João.», a forma «foi» é:', opcoes: ['verbo auxiliar da passiva', 'verbo principal', 'verbo copulativo', 'verbo auxiliar dos tempos compostos'], resposta: 'verbo auxiliar da passiva', expl: '«Ser + particípio» numa frase passiva: «ser» é o auxiliar da passiva.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «A Maria parece feliz.», o verbo «parece» é:', opcoes: ['copulativo', 'transitivo direto', 'intransitivo', 'auxiliar'], resposta: 'copulativo', expl: '«Parecer» liga o sujeito à qualidade «feliz» (predicativo do sujeito): verbo copulativo.', tema: 'T1 · Classes de Palavras' },

  // ── F12 Advérbio · F13 Preposição (t1) ──
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «Sim, eu vou contigo.», a palavra «sim» é um advérbio de:', opcoes: ['afirmação', 'negação', 'modo', 'tempo'], resposta: 'afirmação', expl: '«Sim» afirma: advérbio de afirmação (como «não» é de negação).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: '«Sem dúvida» é:', opcoes: ['uma locução adverbial', 'um advérbio simples', 'uma locução prepositiva', 'uma conjunção'], resposta: 'uma locução adverbial', expl: 'Grupo de palavras com valor de advérbio (de afirmação): locução adverbial.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'O advérbio de modo formado a partir de «apressado» é:', opcoes: ['apressadamente', 'apressando', 'apressamento', 'pressa'], resposta: 'apressadamente', expl: 'Adjetivo + -mente = advérbio de modo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'A palavra «pelo» (ex.: «passámos pelo parque») é a contração de:', opcoes: ['por + o', 'para + o', 'em + o', 'de + o'], resposta: 'por + o', expl: 'Preposição «por» + artigo «o» = pelo (como «pela» = por + a).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: '«Por fora», «por dentro» e «pelo menos» são:', opcoes: ['locuções prepositivas', 'preposições simples', 'locuções adverbiais conectivas', 'conjunções'], resposta: 'locuções prepositivas', expl: 'Grupos de palavras com valor de preposição: locuções prepositivas.', tema: 'T1 · Classes de Palavras' },

  // ── F8 Colocação do pronome átono (t3) ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Na forma negativa, «Encontrei-os no cinema.» fica:', opcoes: ['«Não os encontrei no cinema.»', '«Não encontrei-os no cinema.»', '«Os não encontrei no cinema.»', '«Não lhes encontrei no cinema.»'], resposta: '«Não os encontrei no cinema.»', expl: 'A negação obriga o pronome a ir para ANTES do verbo (próclise).', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Numa pergunta com «quem», a colocação correta do pronome é:', opcoes: ['«Quem a conhece?»', '«Quem conhece-a?»', '«Quem a conhece-a?»', '«A quem conhece?»'], resposta: '«Quem a conhece?»', expl: 'Os pronomes interrogativos atraem o pronome átono para antes do verbo: próclise.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Com pronome, a frase «Eu comprarei o livro.» fica:', opcoes: ['«Eu comprá-lo-ei.»', '«Eu comprarei-o.»', '«Eu o comprarei.»', '«Eu comprar-lo-ei.»'], resposta: '«Eu comprá-lo-ei.»', expl: 'No futuro do indicativo, o pronome vai para o MEIO do verbo: mesóclise.', tema: 'T3 · Orações' },

  // ── F14/F15 Conjunções · F21 Coordenação (t3) ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Completa com a conjunção explicativa: «Despacha-te, ___ vais chegar tarde.»', opcoes: ['pois', 'mas', 'ou', 'e'], resposta: 'pois', expl: '«Pois» introduz a justificação: conjunção coordenativa explicativa.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'A conjunção «se» introduz orações subordinadas adverbiais:', opcoes: ['condicionais', 'causais', 'temporais', 'finais'], resposta: 'condicionais', expl: '«Se» exprime uma condição: «Se estudares, terás boa nota.»', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Estudei bastante, logo espero ter boa nota.», a segunda oração é coordenada:', opcoes: ['conclusiva', 'explicativa', 'adversativa', 'copulativa'], resposta: 'conclusiva', expl: '«Logo» introduz uma conclusão: coordenada conclusiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Podes emprestar-me um lápis, pois perdi o estojo?», a oração «pois perdi o estojo» é coordenada:', opcoes: ['explicativa', 'conclusiva', 'adversativa', 'disjuntiva'], resposta: 'explicativa', expl: '«Pois» justifica o pedido: coordenada explicativa.', tema: 'T3 · Orações' },

  // ── F22 Subordinação adverbial · F23 Relativas (t3) ──
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Mal chegues a casa, liga-me.», a oração «mal chegues a casa» é adverbial:', opcoes: ['temporal', 'condicional', 'causal', 'final'], resposta: 'temporal', expl: '«Mal» = «assim que/logo que»: introduz tempo.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Passarei de ano, desde que me concentre nos exames.», a oração subordinada é adverbial:', opcoes: ['condicional', 'temporal', 'final', 'causal'], resposta: 'condicional', expl: '«Desde que» = «se»: exprime uma condição.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Abriram mais uma sala, a fim de que toda a assistência tenha lugar sentado.», a oração subordinada é adverbial:', opcoes: ['final', 'causal', 'condicional', 'temporal'], resposta: 'final', expl: '«A fim de que» introduz a finalidade/objetivo.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Os meus avós, que vivem no Norte do país, vêm visitar-nos.», a oração relativa é:', opcoes: ['explicativa', 'restritiva', 'completiva', 'adverbial'], resposta: 'explicativa', expl: 'Entre vírgulas, acrescenta informação sem restringir «os meus avós»: relativa explicativa.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «A escola onde estudo fica perto de casa.», «onde estudo» é uma oração subordinada adjetiva relativa:', opcoes: ['restritiva', 'explicativa', 'substantiva', 'adverbial'], resposta: 'restritiva', expl: 'Sem vírgulas, restringe «a escola» (qual escola? aquela onde estudo): restritiva.', tema: 'T3 · Orações' },

  // ── F20 Ativa/passiva (t3) ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'A frase passiva de «O jornalista deu a notícia.» é:', opcoes: ['«A notícia foi dada pelo jornalista.»', '«A notícia deu o jornalista.»', '«O jornalista foi dado pela notícia.»', '«A notícia tinha dado o jornalista.»'], resposta: '«A notícia foi dada pelo jornalista.»', expl: 'O complemento direto («a notícia») passa a sujeito, e quem age vem com «por»: agente da passiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Na frase passiva, quem pratica a ação desempenha a função de:', opcoes: ['complemento agente da passiva', 'sujeito', 'complemento direto', 'vocativo'], resposta: 'complemento agente da passiva', expl: 'Introduzido por «por»: «foi dada PELO jornalista».', tema: 'T3 · Orações' },

  // ── F10/F11 Conjugação (t4) · F26 Discurso (t4) ──
  { t: '4', tipo: 'mc', dif: 'dificil', enun: 'Completa: «Se eu ___ ir à festa, aviso-te.» (verbo poder)', opcoes: ['puder', 'poder', 'posso', 'podia'], resposta: 'puder', expl: '«Se» + futuro do conjuntivo: puder (não confundir com o infinitivo «poder»).', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Quando chegares, telefona-me.», a forma «chegares» está no:', opcoes: ['futuro do conjuntivo', 'presente do indicativo', 'infinitivo', 'imperativo'], resposta: 'futuro do conjuntivo', expl: '«Quando» (referido ao futuro) pede o futuro do conjuntivo.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Qual é o intruso (tempo verbal diferente) em «cantou · saiu · faziam · comeu · partiu»?', opcoes: ['faziam', 'cantou', 'comeu', 'partiu'], resposta: 'faziam', expl: '«Faziam» está no pretérito imperfeito; os outros estão no pretérito perfeito.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'facil', enun: 'O particípio passado de «abrir» é:', opcoes: ['aberto', 'abrido', 'abrindo', 'abriu'], resposta: 'aberto', expl: 'Particípio irregular: abrir → aberto (como escrever → escrito).', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'dificil', enun: 'Completa: «A proposta foi ___ por todos.» (verbo aceitar)', opcoes: ['aceite', 'aceitado', 'aceitada', 'aceitando'], resposta: 'aceite', expl: 'Com os auxiliares ser/estar usa-se o particípio irregular: aceite.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'dificil', enun: '«Terão terminado» é a conjugação no:', opcoes: ['futuro composto do indicativo', 'condicional composto', 'pretérito perfeito composto', 'futuro do conjuntivo'], resposta: 'futuro composto do indicativo', expl: 'Ter no futuro + particípio = futuro composto do indicativo.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'No discurso indireto, « — Perdi o autocarro: informou o João.» fica:', opcoes: ['«O João informou que tinha perdido o autocarro.»', '«O João informou que perdi o autocarro.»', '«O João informou: perdeu o autocarro.»', '«O João informou que perderá o autocarro.»'], resposta: '«O João informou que tinha perdido o autocarro.»', expl: 'Pretérito perfeito («perdi») → pretérito mais-que-perfeito composto («tinha perdido»).', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'facil', enun: 'Na passagem do discurso direto para o indireto, «hoje» passa a:', opcoes: ['«naquele dia»', '«amanhã»', '«ontem»', '«agora»'], resposta: '«naquele dia»', expl: 'hoje → naquele dia; amanhã → no dia seguinte; aqui → ali.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'vf', dif: 'facil', enun: 'Na reprodução escrita do discurso direto devem usar-se os dois pontos e o travessão.', resposta: 'V', expl: 'São as marcas gráficas do discurso direto, «A mãe gritou: — Cuidado!»', tema: 'T4 · Modos Verbais' }
]);

// ── F16-F19 Funções sintáticas (t2) ──
_em1Banco[2] = _em1Banco[2].concat([
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Os nossos amigos e familiares chegaram ontem.», o sujeito é:', opcoes: ['composto', 'simples', 'subentendido', 'indeterminado'], resposta: 'composto', expl: 'Dois núcleos ligados por «e» (amigos + familiares): sujeito composto.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Todo este lixo vai para reciclagem.», o sujeito é:', opcoes: ['simples («Todo este lixo»)', 'composto', 'subentendido', 'inexistente'], resposta: 'simples («Todo este lixo»)', expl: 'Um só núcleo (lixo): sujeito simples.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «A turma gosta de desafios.», «de desafios» desempenha a função de:', opcoes: ['complemento oblíquo', 'complemento direto', 'complemento indireto', 'modificador'], resposta: 'complemento oblíquo', expl: '«Gostar» exige complemento com a preposição «de», que não é substituível por «lhe»: complemento oblíquo.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Eu expliquei aos meus pais o que aconteceu.», «aos meus pais» é substituível por:', opcoes: ['«lhes» («expliquei-lhes»)', '«os» («expliquei-os»)', '«eles» («expliquei eles»)', '«se» («expliquei-se»)'], resposta: '«lhes» («expliquei-lhes»)', expl: 'A quem expliquei? Aos meus pais: complemento indireto, substituível por «lhes».', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Ontem, encontrei o meu primo.», a palavra «ontem» desempenha a função de:', opcoes: ['modificador (de grupo verbal)', 'complemento direto', 'sujeito', 'complemento oblíquo'], resposta: 'modificador (de grupo verbal)', expl: 'Indica o tempo da ação e pode ser retirado sem afetar a gramaticalidade: modificador.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'Em «O céu está cinzento.», «cinzento» desempenha a função de:', opcoes: ['predicativo do sujeito', 'complemento direto', 'modificador do nome', 'vocativo'], resposta: 'predicativo do sujeito', expl: '«Estar» é copulativo, liga o sujeito à qualidade: predicativo do sujeito.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «O meu irmão tornou-se ator.», o predicativo do sujeito «ator» é realizado por um:', opcoes: ['nome', 'adjetivo', 'advérbio', 'pronome'], resposta: 'nome', expl: 'O predicativo pode ser um adjetivo («ficou feliz»), um nome («tornou-se ator») ou um advérbio («é assim»).', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'O modificador do nome APOSITIVO distingue-se do restritivo porque:', opcoes: ['surge entre vírgulas e pode retirar-se sem alterar o essencial da frase', 'é sempre um adjetivo', 'restringe o sentido do nome', 'vem sempre antes do nome'], resposta: 'surge entre vírgulas e pode retirar-se sem alterar o essencial da frase', expl: 'O apositivo acrescenta informação extra (entre vírgulas); o restritivo limita o sentido do nome (sem vírgulas).', tema: 'T2 · Funções Sintáticas' }
]);

/* ════════════════════════════════════════════════════════════════
   MANUAL «MENSAGENS 7» · Fichas de Educação Literária e Leitura — LOTE 2
   14 fichas EL (narrativas tradicionais e de autor + 6 poemas) e 7 de
   Leitura (publicidade, opinião, crítica, biografia), com os factos
   conferidos no Solucoes.docx do manual.
   ════════════════════════════════════════════════════════════════ */

// ── Educação Literária: NARRATIVAS (t1 tradicionais, t2 de autor) ──
_em1Banco[1] = _em1Banco[1].concat([
  // F1-F2 · Narrativas tradicionais
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'No conto tradicional «Os dez anõezinhos da Tia Verde-Água», o que muda a vida da protagonista é:', opcoes: ['seguir os conselhos da vizinha e organizar-se', 'encontrar um tesouro escondido', 'casar com um príncipe', 'fugir de casa'], resposta: 'seguir os conselhos da vizinha e organizar-se', expl: 'A mulher, desorganizada e infeliz, torna-se organizada e passa a viver em harmonia depois de seguir os conselhos da Tia Verde-Água.', tema: 'T1 · Narrativas tradicionais' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'São marcas típicas da narrativa tradicional:', opcoes: ['poucas personagens, tempo e espaço indefinidos e marcas de discurso oral', 'muitas personagens e datas exatas', 'narrador participante e linguagem técnica', 'ausência de personagens'], resposta: 'poucas personagens, tempo e espaço indefinidos e marcas de discurso oral', expl: 'Número reduzido de personagens, ação simples, tempo/espaço vagos («à boca da noite», «casa») e oralidade («Vossemecê»).', tema: 'T1 · Narrativas tradicionais' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Expressões como «Era uma vez», «por esse mundo fora» e «debaixo de uma árvore» são marcas:', opcoes: ['de tempo e espaço indefinidos, próprias do conto tradicional', 'de um texto científico', 'de uma notícia', 'de uma biografia'], resposta: 'de tempo e espaço indefinidos, próprias do conto tradicional', expl: 'O conto tradicional não situa a ação com precisão: usa fórmulas vagas de tempo e lugar.', tema: 'T1 · Narrativas tradicionais' },
  // F3 · Miura (o touro)
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'No conto sobre o touro Miura, o narrador apresenta a tourada como:', opcoes: ['uma luta injusta entre o animal corajoso e o homem', 'uma festa alegre e justa', 'um jogo entre iguais', 'um espetáculo sem violência'], resposta: 'uma luta injusta entre o animal corajoso e o homem', expl: 'Miura luta de frente, com lealdade; o toureiro esconde-se atrás da capa, foge e é ajudado: o narrador reconhece coragem ao animal e chama «palhaço» ao homem.', tema: 'T2 · Narrativas de autor' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Nas recordações de Miura, a lezíria ribatejana simboliza:', opcoes: ['a liberdade e o espaço infinito onde nasceu', 'o medo da tourada', 'a fome que passou em pequeno', 'a praça de touros'], resposta: 'a liberdade e o espaço infinito onde nasceu', expl: 'A planície surge como um «paraíso fresco», sinónimo de liberdade: em contraste com a arena onde está preso.', tema: 'T2 · Narrativas de autor' },
  // F4 · Avó e neto na praia
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'No conto da avó e do neto na praia, a relação entre os dois é de:', opcoes: ['ternura, afeto e cumplicidade: protegem-se um ao outro', 'conflito e distância', 'indiferença', 'rivalidade'], resposta: 'ternura, afeto e cumplicidade: protegem-se um ao outro', expl: 'Avó e neto gostam de estar juntos e protegem-se mutuamente; a presença do neto faz a avó sentir-se feliz e útil.', tema: 'T2 · Narrativas de autor' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'A frase «Afinal atravessámos o vento e a areia» pode ler-se como metáfora:', opcoes: ['da própria vida, com obstáculos que se devem superar', 'de uma viagem de barco', 'de uma tempestade no mar', 'do trabalho na praia'], resposta: 'da própria vida, com obstáculos que se devem superar', expl: 'Como avó e neto venceram o vento e a areia até ao café, também a vida nos põe obstáculos que devemos superar.', tema: 'T2 · Narrativas de autor' },
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'Um narrador que conta a história na 3.ª pessoa, sem participar nela («Tinham ido à praia»), é:', opcoes: ['não participante', 'participante', 'personagem principal', 'inexistente'], resposta: 'não participante', expl: 'Conta de fora, na 3.ª pessoa, sem ser personagem: narrador não participante.', tema: 'T2 · Narrativas de autor' },
  // F5 · Caça à baleia (Açores)
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'No texto sobre a caça à baleia nos Açores, a coragem do baleeiro é realçada porque:', opcoes: ['é minúsculo e frágil perante a baleia, mas mantém-se de pé e destro', 'usa armas modernas e poderosas', 'tem a ajuda de muitos barcos', 'a baleia não oferece perigo'], resposta: 'é minúsculo e frágil perante a baleia, mas mantém-se de pé e destro', expl: 'O contraste entre o homem pequeno e a baleia enorme («cabeçorra») torna grandiosa a coragem e a destreza do baleeiro.', tema: 'T2 · Narrativas de autor' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'A caça à baleia foi importante para a economia açoriana porque:', opcoes: ['dela se extraía óleo (espermacete) e âmbar, que davam rendimento às famílias', 'servia apenas como desporto', 'alimentava os turistas', 'não tinha qualquer utilidade'], resposta: 'dela se extraía óleo (espermacete) e âmbar, que davam rendimento às famílias', expl: 'Grande parte da população dependia da baleia, aproveitada por inteiro para gerar rendimento.', tema: 'T2 · Narrativas de autor' }
]);

// ── Educação Literária: POESIA (t3) ──
_em1Banco[1] = _em1Banco[1].concat([
  // F9 · José Régio - «Cântico Negro»/o Papão
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'No poema de José Régio, o «Senhor Papão» que persegue o sujeito poético pode entender-se como:', opcoes: ['uma metáfora do medo que mora dentro de cada um', 'um animal real', 'um amigo de infância', 'a morte'], resposta: 'uma metáfora do medo que mora dentro de cada um', expl: 'O «papão» representa o medo interior: só quando o sujeito se rende o consegue ver sem disfarce.', tema: 'T3 · Poesia' },
  // F11 · Sebastião da Gama - «Pelo sonho é que vamos»
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'No poema «Pelo sonho é que vamos», de Sebastião da Gama, o tema central é:', opcoes: ['a importância de sonhar, mesmo sem garantia de êxito', 'a tristeza da despedida', 'o medo do futuro', 'a beleza do mar'], resposta: 'a importância de sonhar, mesmo sem garantia de êxito', expl: 'Não importa se «chegamos ou não chegamos»: ter a capacidade de sonhar já é, em si, uma vitória.', tema: 'T3 · Poesia' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'O verso «Pelo sonho é que vamos» tem seis sílabas métricas; chama-se por isso:', opcoes: ['hexassílabo', 'redondilha maior', 'decassílabo', 'alexandrino'], resposta: 'hexassílabo', expl: 'Pe-lo-so-nho-é-que-va-mos → contam-se 6 sílabas métricas (até à última tónica): hexassílabo.', tema: 'T3 · Versificação' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'A repetição de «Pelo sonho é que vamos» ao longo do poema de Sebastião da Gama é um(a):', opcoes: ['anáfora', 'comparação', 'metáfora', 'onomatopeia'], resposta: 'anáfora', expl: 'Repetição de uma expressão no início de versos/estrofes: anáfora.', tema: 'T3 · Recursos' },
  // F12 · Ruy Cinatti - Timor
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'No poema de Ruy Cinatti, o verso final «O fogo é o mais obscuro» exprime:', opcoes: ['o desencanto perante o uso destrutivo que o ser humano faz do fogo', 'a alegria das fogueiras de festa', 'o medo do escuro', 'a beleza de Timor'], resposta: 'o desencanto perante o uso destrutivo que o ser humano faz do fogo', expl: 'O ser humano usa o fogo para forjar armas e destruir: daí o «lado negro» do fogo no poema.', tema: 'T3 · Poesia' },
  // F13 · Percy Shelley - «Filosofia do Amor»
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'No poema de Percy B. Shelley, a Natureza («os montes adorando o vasto azul», «as vagas osculando-se») surge como:', opcoes: ['exemplo de harmonia e amor, em que cada elemento tem o seu par', 'um cenário de guerra', 'um lugar perigoso', 'algo indiferente ao ser humano'], resposta: 'exemplo de harmonia e amor, em que cada elemento tem o seu par', expl: '«Nada no mundo é sozinho»: o sujeito poético usa a Natureza para mostrar que tudo tem a sua «alma gémea».', tema: 'T3 · Poesia' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «os montes adorando / o vasto azul» e «as vagas uma a outra se osculando», o recurso expressivo é a:', opcoes: ['personificação', 'hipérbole', 'comparação', 'enumeração'], resposta: 'personificação', expl: 'Atribui ações humanas (adorar, beijar-se) aos montes e às vagas: personificação.', tema: 'T3 · Recursos' },
  // F10 · Vitorino Nemésio
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «sensações do tamanho de cinco oceanos», o recurso expressivo dominante é a:', opcoes: ['hipérbole', 'comparação', 'anáfora', 'onomatopeia'], resposta: 'hipérbole', expl: 'Exagero intencional para dar dimensão às sensações: hipérbole (também há comparação no «do tamanho de»).', tema: 'T3 · Recursos' }
]);

// ── Leitura: tipos de texto (t2) e sentidos (t1/t3) ──
_em1Banco[3] = _em1Banco[3].concat([
  // F1-F2 · Publicidade
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Num anúncio publicitário, o slogan é:', opcoes: ['uma frase curta e marcante que fixa a mensagem', 'a imagem do produto', 'o símbolo da marca', 'o texto longo de argumentação'], resposta: 'uma frase curta e marcante que fixa a mensagem', expl: 'O slogan (ex.: «Compal. É mesmo natural.») resume a mensagem de forma memorável.', tema: 'T2 · Tipologias' },
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'O símbolo que identifica uma marca num anúncio chama-se:', opcoes: ['logótipo', 'slogan', 'argumento', 'parágrafo'], resposta: 'logótipo', expl: 'O logótipo é a marca gráfica (imagem/letras) que identifica a empresa.', tema: 'T2 · Tipologias' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Palavras inventadas num anúncio, como «laranjologia» e «frutologia» (laranja/fruta + -logia), servem para:', opcoes: ['dar um ar científico e credibilidade ao produto', 'confundir o público', 'preencher espaço', 'imitar sons'], resposta: 'dar um ar científico e credibilidade ao produto', expl: 'O sufixo -logia remete para áreas científicas: a invenção lexical reforça a ideia de seriedade do produto.', tema: 'T2 · Tipologias' },
  // F3-F4 · Texto de opinião
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Num texto de opinião, o autor:', opcoes: ['defende um ponto de vista com argumentos', 'relata factos sem tomar posição', 'inventa uma história', 'descreve uma paisagem'], resposta: 'defende um ponto de vista com argumentos', expl: 'O texto de opinião apresenta uma tese e fundamenta-a: é argumentativo.', tema: 'T2 · Tipologias' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Iniciar um texto com uma pergunta provocadora («Pode parar de comer vivo o nosso planeta?») serve, sobretudo, para:', opcoes: ['captar a atenção do leitor e alertá-lo para o tema', 'dar uma resposta imediata', 'mudar de assunto', 'terminar o texto'], resposta: 'captar a atenção do leitor e alertá-lo para o tema', expl: 'A interrogação inicial, em tom irónico, prende o leitor e prepara-o para o problema a discutir.', tema: 'T1 · Compreensão' },
  // F5-F6 · Crítica
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Numa crítica (de série, livro ou filme), encontramos:', opcoes: ['factos sobre a obra E a opinião fundamentada de quem escreve', 'apenas o resumo da história', 'só a opinião, sem dados', 'uma simples lista de personagens'], resposta: 'factos sobre a obra E a opinião fundamentada de quem escreve', expl: 'A crítica combina informação (autor, género, elenco) com avaliação: distingue facto de opinião.', tema: 'T2 · Tipologias' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Numa crítica, a expressão «prima pela criatividade» é:', opcoes: ['uma opinião (juízo de valor)', 'um facto verificável', 'uma data', 'um nome próprio'], resposta: 'uma opinião (juízo de valor)', expl: 'É uma apreciação subjetiva do crítico, não um facto objetivo como «foi filmada em Itália».', tema: 'T3 · Sentidos' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Quando o crítico diz que um livro «se lê de um fôlego», quer dizer que:', opcoes: ['se lê rapidamente, prende o leitor', 'é muito difícil de ler', 'é demasiado longo', 'não tem interesse'], resposta: 'se lê rapidamente, prende o leitor', expl: 'Expressão idiomática: um livro que «se lê de um fôlego» é cativante e de leitura rápida.', tema: 'T3 · Sentidos' },
  // F7 · Biografia
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'A biografia de José Saramago destaca, entre os prémios, sobretudo:', opcoes: ['o Prémio Nobel da Literatura', 'um prémio de fotografia', 'uma medalha desportiva', 'um prémio de música'], resposta: 'o Prémio Nobel da Literatura', expl: 'Saramago é o único escritor português com o Nobel da Literatura: o prémio mais importante, que simboliza os restantes.', tema: 'T2 · Tipologias' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Uma biografia organiza-se, normalmente:', opcoes: ['por ordem cronológica (nascimento, percurso, feitos)', 'por ordem alfabética', 'do fim para o início', 'sem qualquer ordem'], resposta: 'por ordem cronológica (nascimento, percurso, feitos)', expl: 'A biografia relata a vida de uma pessoa real seguindo a linha do tempo.', tema: 'T2 · Tipologias' }
]);


/* atribuir: deep-link em1 */
function _em1DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_em1gf){ _em1gf.caps={}; cs.forEach(function(n){ _em1gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _em1gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ em1SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_em1Prat) _em1Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ em1SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof ptJogoAbrir==='function')setTimeout(function(){try{ptJogoAbrir(jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_em1TarefaAtiva=p.get('tarefa');_em1TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _em1Prat.cap=cap; _em1Prat.st=st; _em1Prat.nivel=nivel; setTimeout(function(){ em1SwitchTab('exercicios',null); if(typeof em1GerarExercicios==='function') em1GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_em1DeepLinkAuto,300);});else setTimeout(_em1DeepLinkAuto,300);

function em1AtribuirFicha(){
  var caps=[]; _em1CapMeta.forEach(function(m){ if(_em1gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('em1-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_em1CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'em1', cursoNome:'Português 7.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_em1gf.dif };
}

function em1EntregarTarefa(){
  if(!_em1TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_em1TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_em1TarefaResp[qid]; if(ok)certas++; var ex=_em1Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_em1TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _em1TarefaAtiva=null; _em1TarefaResp={}; em1GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
