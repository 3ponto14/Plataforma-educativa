/* ════════════════════════════════════════════════════════════════
   PORT7 HUB - Português 7.º ano (5 domínios) · ver MODELO BASE
   Criado a partir do molde port9.js (modelo híbrido de Português).
   Sem módulos realojados: a prática é banco-driven (_port1Banco).
   Conteúdo alinhado ao programa do 7.º e ao manual «Mensagens 7»;
   a ingestão das fichas do manual entra por lotes, como no 9.º.
   ════════════════════════════════════════════════════════════════ */

// ═══ Domínios de Português do 9.º ano (Aprendizagens Essenciais) ═══
// Os "capítulos" do hub são os 5 DOMÍNIOS do programa.
var _port1CapMeta = [
  {n:1, icon:'<i class="ph ph-alphabet"></i>',       label:'Sons e Letras'},
  {n:2, icon:'<i class="ph ph-text-aa"></i>',        label:'Sílabas e Palavras'},
  {n:3, icon:'<i class="ph ph-book-open"></i>',      label:'Ler Frases'},
  {n:4, icon:'<i class="ph ph-pencil-line"></i>',    label:'Escrever'},
  {n:5, icon:'<i class="ph ph-book-bookmark"></i>',  label:'Histórias'}
];

// Cores por domínio (alinhadas com --p1cN-* do CSS)
var _port1CapColors = {
  1:'#8a5a3a', 2:'#5a72a0', 3:'#4d8f87', 4:'#9c5e80', 5:'#7f8a4d'
};

// Subtemas por domínio (1.º ano · iniciação à leitura e à escrita)
var _port1Subtemas = {
  1: ['Vogais e consoantes', 'Som inicial', 'Maiúsculas e minúsculas'],
  2: ['Contar sílabas', 'Juntar sílabas', 'Palavras e imagens'],
  3: ['Ler palavras', 'Ler frases', 'Sinais de pontuação'],
  4: ['Ordem das letras', 'Escrever frases', 'Maiúscula e ponto final'],
  5: ['Personagens', 'Início, meio e fim', 'Rimas e lengalengas']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (9.º ano) ═══
var _port1Cards = {
  // ── Cap 1 · Sons e Letras ──
  1: [
    { st: 1, tag: 'Aprender', q: 'Quais são as vogais?', a: 'São cinco: a, e, i, o, u. Quase todas as palavras têm vogais.' },
    { st: 1, tag: 'Aprender', q: 'O que são consoantes?', a: 'São todas as outras letras: b, c, d, f, g… Juntam-se às vogais para formar sílabas (ba, ca, da…).' },
    { st: 1, tag: 'Aprender', q: 'Quantas letras tem o alfabeto?', a: 'Tem 23 letras (mais o k, w e y, usadas em palavras estrangeiras).' },
    { st: 2, tag: 'Aprender', q: 'O que é o som inicial de uma palavra?', a: 'É o primeiro som que ouvimos. "Bola" começa pelo som "b"; "uva" começa pelo som "u".' },
    { st: 2, tag: 'Exemplo', q: 'Qual é o som inicial de "gato"?', a: 'O som "g". "Gato" começa por g.' },
    { st: 3, tag: 'Aprender', q: 'O que são letras maiúsculas e minúsculas?', a: 'A maiúscula é grande (A, B, C) e usa-se no início e nos nomes. A minúscula é pequena (a, b, c).' },
    { st: 3, tag: 'Regra', q: 'Quando se usa letra maiúscula?', a: 'No início da frase e nos nomes de pessoas, lugares e países. Ex.: "A Maria mora em Lisboa."' },
    { st: 1, tag: 'Exemplo', q: 'Quantas vogais tem a palavra "escola"?', a: 'Tem 3 vogais: e, o, a.' },
    { st: 2, tag: 'Exemplo', q: 'Que palavra começa pelo som "m": mão ou pé?', a: '"Mão" começa pelo som "m".' },
    { st: 1, tag: 'Aprender', q: 'Que letra vem depois do "a" no alfabeto?', a: 'Vem o "b". O alfabeto começa a, b, c, d…' },
    { st: 3, tag: 'Aprender', q: 'O nome "Pedro" escreve-se com maiúscula porquê?', a: 'Porque é um nome de pessoa. Os nomes começam sempre por letra maiúscula.' },
    { st: 1, tag: 'Aprender', q: 'A letra "a" é vogal ou consoante?', a: 'É vogal. As vogais são a, e, i, o, u.' },
    { st: 2, tag: 'Exemplo', q: 'Qual é o som inicial de "sapato"?', a: 'O som "s".' },
    { st: 1, tag: 'Exemplo', q: 'Quantas vogais tem a palavra "pai"?', a: 'Tem 2: a, i.' },
    { st: 3, tag: 'Exemplo', q: 'Escreve-se "lisboa" ou "Lisboa"?', a: '"Lisboa", com L maiúsculo (é o nome de uma cidade).' },
    { st: 2, tag: 'Aprender', q: 'O que ouvimos no fim de "bola"?', a: 'O som "a". É o som final da palavra.' }
  ],
  // ── Cap 2 · Sílabas e Palavras ──
  2: [
    { st: 1, tag: 'Aprender', q: 'O que é uma sílaba?', a: 'É um "bocadinho" de palavra que dizemos numa só vez. "Bola" tem duas: bo-la.' },
    { st: 1, tag: 'Estratégia', q: 'Como conto as sílabas?', a: 'Bato palmas a dizer a palavra! "Ja-ne-la" → 3 palmas → 3 sílabas.' },
    { st: 1, tag: 'Exemplo', q: 'Quantas sílabas tem "gato"?', a: 'Duas: ga-to.' },
    { st: 1, tag: 'Exemplo', q: 'Quantas sílabas tem "borboleta"?', a: 'Quatro: bor-bo-le-ta.' },
    { st: 2, tag: 'Aprender', q: 'Como se juntam sílabas para fazer palavras?', a: 'Juntamos os bocadinhos: pa + to = "pato"; me + sa = "mesa".' },
    { st: 2, tag: 'Exemplo', q: 'Que palavra formam as sílabas "ca" + "sa"?', a: '"Casa".' },
    { st: 2, tag: 'Exemplo', q: 'Que palavra formam "so" + "pa"?', a: '"Sopa".' },
    { st: 3, tag: 'Aprender', q: 'Como ligo uma palavra à sua imagem?', a: 'Leio a palavra devagar e penso no que ela quer dizer. "Sol" → o desenho do sol.' },
    { st: 1, tag: 'Exemplo', q: 'Quantas sílabas tem "pé"?', a: 'Só uma: pé.' },
    { st: 2, tag: 'Exemplo', q: 'Que palavra formam "bo" + "ne" + "ca"?', a: '"Boneca".' },
    { st: 1, tag: 'Exemplo', q: 'Quantas sílabas tem "escola"?', a: 'Três: es-co-la.' },
    { st: 3, tag: 'Aprender', q: 'O que é uma palavra?', a: 'É um conjunto de letras com significado. "Cão" é uma palavra; "xptz" não é.' },
    { st: 2, tag: 'Exemplo', q: 'Que palavra formam "li" + "vro"?', a: '"Livro".' },
    { st: 1, tag: 'Exemplo', q: 'Quantas sílabas tem "girafa"?', a: 'Três: gi-ra-fa.' },
    { st: 3, tag: 'Exemplo', q: 'A palavra "mesa" mostra o quê?', a: 'O móvel onde comemos ou trabalhamos.' },
    { st: 2, tag: 'Aprender', q: 'Qual é a primeira sílaba de "janela"?', a: '"ja".' }
  ],
  // ── Cap 3 · Ler Frases ──
  3: [
    { st: 1, tag: 'Aprender', q: 'O que é ler?', a: 'É juntar as letras e as sílabas para descobrir o que está escrito.' },
    { st: 1, tag: 'Estratégia', q: 'Como leio uma palavra nova?', a: 'Leio devagar, sílaba a sílaba, e depois junto tudo: "ca-mi-ão" → "camião".' },
    { st: 2, tag: 'Aprender', q: 'O que é uma frase?', a: 'É um conjunto de palavras que diz alguma coisa. "O cão corre." é uma frase.' },
    { st: 2, tag: 'Regra', q: 'Como começa e acaba uma frase?', a: 'Começa com letra maiúscula e acaba com um sinal (ponto final, ponto de interrogação…).' },
    { st: 3, tag: 'Aprender', q: 'Para que serve o ponto final (.)?', a: 'Marca o fim de uma frase. Diz-nos para parar e respirar.' },
    { st: 3, tag: 'Aprender', q: 'Para que serve o ponto de interrogação (?)?', a: 'Mostra que é uma pergunta. "Como te chamas?"' },
    { st: 3, tag: 'Aprender', q: 'Para que serve o ponto de exclamação (!)?', a: 'Mostra emoção ou surpresa. "Que bonito!"' },
    { st: 1, tag: 'Exemplo', q: 'Lê: "o sol". O que é?', a: 'A estrela que nos dá luz e calor de dia.' },
    { st: 2, tag: 'Exemplo', q: 'Quantas palavras tem a frase "A Ana tem um gato."?', a: 'Cinco: A / Ana / tem / um / gato.' },
    { st: 2, tag: 'Aprender', q: 'Lê da esquerda para a direita?', a: 'Sim! Lemos sempre da esquerda para a direita e de cima para baixo.' },
    { st: 1, tag: 'Estratégia', q: 'O que faço se não percebo uma frase?', a: 'Leio outra vez devagar e penso no que cada palavra quer dizer.' },
    { st: 3, tag: 'Exemplo', q: 'Que sinal falta? "Onde está o cão_"', a: 'O ponto de interrogação (?), porque é uma pergunta.' },
    { st: 2, tag: 'Exemplo', q: 'A frase "o pato nada" fala de quê?', a: 'De um pato que está a nadar.' },
    { st: 1, tag: 'Aprender', q: 'O que é o título de um texto?', a: 'É o "nome" do texto, que aparece em cima e diz do que ele fala.' },
    { st: 3, tag: 'Exemplo', q: 'Que sinal acaba "Que giro_"', a: 'O ponto de exclamação (!), porque mostra alegria/surpresa.' },
    { st: 2, tag: 'Exemplo', q: 'Lê: "A bola é vermelha." De que cor é a bola?', a: 'Vermelha.' }
  ],
  // ── Cap 4 · Escrever ──
  4: [
    { st: 2, tag: 'Regra', q: 'Como começo uma frase quando escrevo?', a: 'Sempre com letra maiúscula.' },
    { st: 2, tag: 'Regra', q: 'Como acabo uma frase?', a: 'Com um ponto final (.) ou outro sinal (? ou !).' },
    { st: 1, tag: 'Aprender', q: 'O que é a ordem das letras numa palavra?', a: 'As letras têm de estar na ordem certa. " loba" não é o mesmo que "bola"!' },
    { st: 1, tag: 'Exemplo', q: 'Ordena as letras o-s-l para fazer uma palavra.', a: '"sol".' },
    { st: 3, tag: 'Estratégia', q: 'O que faço antes de escrever uma frase?', a: 'Penso no que quero dizer e em que palavras vou usar.' },
    { st: 3, tag: 'Estratégia', q: 'O que faço depois de escrever?', a: 'Leio outra vez para ver se está bem e se não falta nenhuma letra.' },
    { st: 1, tag: 'Regra', q: 'Deixo espaço entre as palavras?', a: 'Sim! Cada palavra fica separada da outra por um espaço.' },
    { st: 2, tag: 'Exemplo', q: 'Está certo: "o gato dorme" ou "O gato dorme."?', a: '"O gato dorme." — com maiúscula no início e ponto no fim.' },
    { st: 1, tag: 'Exemplo', q: 'Ordena: a-t-o-g para fazer uma palavra.', a: '"gato".' },
    { st: 3, tag: 'Aprender', q: 'Como escrevo o meu nome?', a: 'Com letra maiúscula no início, porque é um nome de pessoa.' },
    { st: 2, tag: 'Exemplo', q: 'Que falta nesta frase: "a maria canta"?', a: 'A maiúscula no início (A) e o ponto final no fim.' },
    { st: 1, tag: 'Exemplo', q: 'Ordena: s-a-c-a para fazer uma palavra.', a: '"casa".' },
    { st: 3, tag: 'Estratégia', q: 'O que é um recado ou bilhete?', a: 'Uma mensagem curta para alguém. Ex.: "Mãe, fui brincar lá fora."' },
    { st: 2, tag: 'Regra', q: 'As perguntas acabam com que sinal?', a: 'Com ponto de interrogação (?).' },
    { st: 1, tag: 'Aprender', q: 'Escrevo as letras todas iguais?', a: 'Não: umas são maiúsculas (grandes) e outras minúsculas (pequenas).' },
    { st: 2, tag: 'Exemplo', q: 'Faz uma frase com a palavra "cão".', a: 'Por exemplo: "O cão é meu amigo."' }
  ],
  // ── Cap 5 · Histórias ──
  5: [
    { st: 1, tag: 'Aprender', q: 'O que é uma personagem?', a: 'É quem aparece na história: pode ser uma pessoa, um animal ou até um objeto que fala.' },
    { st: 1, tag: 'Exemplo', q: 'No "Capuchinho Vermelho", quem é a personagem principal?', a: 'O Capuchinho Vermelho (a menina).' },
    { st: 2, tag: 'Aprender', q: 'Toda a história tem três partes. Quais?', a: 'O início (como começa), o meio (o que acontece) e o fim (como termina).' },
    { st: 2, tag: 'Aprender', q: 'O que é o início de uma história?', a: 'É a parte onde conhecemos as personagens e onde tudo começa. Muitas vezes diz "Era uma vez…".' },
    { st: 2, tag: 'Aprender', q: 'O que é o fim de uma história?', a: 'É como a história acaba, o desfecho. Ex.: "…e viveram felizes para sempre."' },
    { st: 3, tag: 'Aprender', q: 'O que é uma rima?', a: 'São palavras que acabam com o mesmo som. "Gato" rima com "pato".' },
    { st: 3, tag: 'Exemplo', q: 'Qual destas rima com "mão": pão ou casa?', a: '"pão" (mão–pão acabam no mesmo som).' },
    { st: 3, tag: 'Aprender', q: 'O que é uma lengalenga?', a: 'É um texto curto, com ritmo e rimas, divertido de dizer. Ex.: "Hoje é domingo, pé de cachimbo…".' },
    { st: 1, tag: 'Aprender', q: 'O que são os contos tradicionais?', a: 'Histórias antigas que passam de avós para netos, como "Os Três Porquinhos".' },
    { st: 1, tag: 'Exemplo', q: 'Nos "Três Porquinhos", quantos porquinhos há?', a: 'Três.' },
    { st: 2, tag: 'Estratégia', q: 'Como conto uma história por palavras minhas?', a: 'Digo o que acontece pela ordem certa: primeiro o início, depois o meio, no fim o final.' },
    { st: 3, tag: 'Exemplo', q: 'Qual destas rima com "sol": lençol ou mesa?', a: '"lençol" (sol–lençol).' },
    { st: 1, tag: 'Aprender', q: 'O que é o herói de uma história?', a: 'É a personagem boa e corajosa, a que costuma resolver o problema.' },
    { st: 2, tag: 'Exemplo', q: 'O que costuma acontecer no MEIO de um conto?', a: 'Surge um problema ou uma aventura que as personagens vivem.' },
    { st: 3, tag: 'Aprender', q: 'Para que servem as imagens num livro?', a: 'Ajudam a perceber a história e a imaginar o que acontece.' },
    { st: 1, tag: 'Exemplo', q: 'Que história tem um lobo e três casas?', a: '"Os Três Porquinhos".' }
  ]
};

// Seleção atual por tab
var _port1Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function port1SwitchTab(tab, btn) {
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
  var panel = document.getElementById('port1p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Português 7.º · ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') port1BuildResumoNav();
  else if (tab === 'exercicios') port1BuildPraticarNav();
  else if (tab === 'quiz') port1QuizBuildNav();
  else if (tab === 'flashcards') port1FcBuildNav();
  else if (tab === 'teste') port1TesteBuildNav();
  else if (tab === 'jogos') port1JogosInit();
  else if (tab === 'jogar') { if (typeof LudicoPort1 !== 'undefined') LudicoPort1.init('port1-ludico-menu', 'port1-ludico-jogo'); }
  else if (tab === 'fichas') port1FichasBuildNav();
  else if (tab === 'progresso') port1RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function port1OpenPraticar(modo) { port1SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function port1BuildResumoNav() {
  var capRow = document.getElementById('port1-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _port1Sel['resumo'] || 1;
  var h = '';
  _port1CapMeta.forEach(function(m) {
    var color = _port1CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port1ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  port1ResumoShowSts(activeCap);
  port1RenderResumoInline();
}

function port1ResumoSelectCap(cap, btn) {
  _port1Sel['resumo'] = cap;
  _port1Sel['resumo-st'] = 0;
  var capRow = document.getElementById('port1-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _port1CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  port1ResumoShowSts(cap);
  port1RenderResumoInline();
}

function port1ResumoShowSts(cap) {
  var stRow = document.getElementById('port1-resumo-st-row');
  if (!stRow) return;
  var sts = _port1Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  // conta cards por subtema para esconder chips de subtemas sem teoria
  var _cc = (typeof _port1Cards !== 'undefined' && _port1Cards[cap]) ? _port1Cards[cap] : [];
  var _nSt = {}; _cc.forEach(function(c){ if (c.st) _nSt[c.st] = (_nSt[c.st]||0)+1; });
  var _stSel = _port1Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="port1ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    if (!_nSt[i + 1]) return; // subtema sem flashcards → não mostra o chip
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port1ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port1ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('port1-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port1Sel['resumo'] = cap;
  _port1Sel['resumo-st'] = stIdx;
  port1RenderResumoInline();
}

function port1RenderResumoInline() {
  var cap = _port1Sel['resumo'] || 1;
  var dest = document.getElementById('port1-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _port1CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _port1Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _port1Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _port1PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Português não tem geradores procedurais — a prática usa o _port1Banco.
// Só os caps com gerador são "praticáveis".
// Português não tem geradores procedurais (as perguntas são de análise/banco).
// _port1Gerador devolve sempre null → o hub usa apenas o _port1Banco.
function _port1Gerador(cap) {
  return null;
}
// Um domínio está "disponível" para prática se tiver questões no banco.
function _port1TemConteudo(cap) {
  return !!(_port1Banco[cap] && _port1Banco[cap].length);
}
// Nº de subtemas por domínio (espelha _port1Subtemas) — usado na seleção de prática.
var _port1TemasCount = { 1: 4, 2: 5, 3: 3, 4: 3, 5: 3 };

// Estado da prática
var _port1Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _port1TarefaAtiva=null, _port1TarefaResp={};

function _port1PratStorageKey(cap) { return 'edupt_port1_cap' + cap; }

function port1BuildPraticarNav() {
  var capRow = document.getElementById('port1-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _port1Prat.cap || 1;
  var h = '';
  _port1CapMeta.forEach(function(m) {
    var hasGen = _port1TemConteudo(m.n);
    var color = _port1CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'port1PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  port1PraticarShowSts(activeCap);
  port1GerarExercicios(); // renderiza logo o domínio ativo (módulo ou banco)
}

function port1PraticarShowSts(cap) {
  var stRow = document.getElementById('port1-praticar-st-row');
  if (!stRow) return;
  var sts = _port1Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_port1Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="port1PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_port1Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port1PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port1PraticarSelectCap(cap, btn) {
  if (!_port1TemConteudo(cap)) return;
  _port1Prat.cap = cap;
  _port1Prat.st = 0;
  var capRow = document.getElementById('port1-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _port1CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  port1PraticarShowSts(cap);
  port1GerarExercicios();
}

function port1PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('port1-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port1Prat.st = stIdx;
  port1GerarExercicios();
}

function port1PraticarSetNivel(nivel, btn) {
  _port1Prat.nivel = nivel;
  var grp = document.getElementById('port1-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  port1GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _port1SubtemaTemas = {
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
function _port1PratModulo(cap, dest) {
  // O 7.º ano não tem módulos realojados: a prática é toda banco-driven.
  return false;
}

function port1GerarExercicios() {
  var dest = document.getElementById('port1-praticar-content');
  if (!dest) return;
  var cap = _port1Prat.cap, gen = _port1Gerador(cap);

  // Domínios com módulos próprios (realojados da antiga zona de exame):
  // escondem nível/subtemas/gerar e renderizam o módulo no painel.
  var lvlBar = document.getElementById('port1-praticar-levelbar');
  var stRow = document.getElementById('port1-praticar-st-row');
  if (_port1PratModulo(cap, dest)) {
    if (lvlBar) lvlBar.style.display = 'none';
    if (stRow) stRow.style.display = 'none';
    if (_port1TarefaAtiva && typeof tarefaEntregaBar === 'function') tarefaEntregaBar(_port1TarefaAtiva, 'Trabalho concluído');
    return;
  }
  if (lvlBar) lvlBar.style.display = '';

  // Sem gerador procedural nem banco → nada a mostrar
  if (!gen && !(_port1Banco[cap] && _port1Banco[cap].length)) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_port1Prat.st > 0 && _port1SubtemaTemas[cap] && _port1SubtemaTemas[cap][_port1Prat.st]) {
    temas = _port1SubtemaTemas[cap][_port1Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_port1TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  if (gen) {
    for (var i = 0; i < QTD; i++) {
      var tema = temas[i % temas.length];
      var ex = gen(tema, tipos[i % tipos.length], _port1Prat.nivel);
      if (ex) geradas.push(ex);
    }
  }
  var banco = (typeof _port1Banco !== 'undefined' && _port1Banco[cap]) ? _port1Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs;
  if (!gen) {
    // Sem gerador (PT): usa o banco todo, baralhado
    exs = banco.slice().sort(function () { return Math.random() - .5; })
      .map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  } else {
    exs = (typeof _mixBancoGeradas === 'function') ? _mixBancoGeradas(banco, geradas, QTD, 3, _port1Prat.nivel)
      : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  }
  _port1Prat.exs = exs;
  _port1Prat.answered = {};
  _port1Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="port1-prat-scorebar">'
    + '<div><div class="score-num" id="port1-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="port1-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="port1-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="port1GerarExercicios()">↺ Novas questões</button>'
    + (_port1TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="port1EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'port1CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="port1-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _port1CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _sn = (_port1Subtemas[cap] && _port1Prat.st > 0) ? (_port1Subtemas[cap][_port1Prat.st - 1] || '') : '';
    Atribuir.montar('port1-atribuir', { curso: 'port1', cursoNome: 'Português 7.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_port1Prat.st || ''), subNome: _sn, tipo: 'quiz', nivel: _port1Prat.nivel });
  }
}

function port1CheckEx(qid, tipo, val, btn) {
  if (_port1Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _port1Prat.answered[qid] = true;
  if (r.correct) _port1Prat.score.correct++;
  _port1Prat.score.total++; if(_port1TarefaAtiva){_port1TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('port1-prat-score'); if (se) se.textContent = _port1Prat.score.correct;
  var te = document.getElementById('port1-prat-total'); if (te) te.textContent = '/ ' + _port1Prat.score.total;
  var pe = document.getElementById('port1-prat-prog'); if (pe && _port1Prat.exs.length) pe.style.width = (_port1Prat.score.total / _port1Prat.exs.length * 100) + '%';
  port1SaveProgress(_port1Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function port1SaveProgress(cap, correct) {
  try {
    var key = _port1PratStorageKey(cap);
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
function _port1PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('p7dom' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _port1BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _port1CapMeta.forEach(function(m) {
    var hasGen = _port1TemConteudo(m.n);
    var color = _port1CapColors[m.n] || '#516860';
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

function _port1SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _port1CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _port1FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

/* Banco do domínio (o 7.º não tem módulos externos para juntar). */
function _port1FichaBanco(cap) {
  return (_port1Banco[cap] || []).slice();
}

// Baralha e tira n questões do banco alargado, respeitando o nível pedido.
// Primeiro só questões DO nível; se não chegarem, completa com as do nível
// mais próximo (médio→fácil→difícil; difícil→médio→fácil; fácil→médio→difícil),
// para que Fácil, Médio e Difícil deem fichas realmente diferentes.
function _port1FichaSlice(banco, n, dif) {
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
function _port1BuildMcQuestion(cap) {
  var qs = _port1FichaBanco(cap).filter(function (q) {
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
var _port1Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function port1QuizBuildNav() {
  if (!_port1TemConteudo(_port1Quiz.cap)) _port1Quiz.cap = 1;
  _port1BuildCapRow('port1-quiz-cap-row', _port1Quiz.cap, 'port1QuizSelectCap');
  port1QuizStart();
}

function port1QuizSelectCap(cap, btn) {
  if (!_port1TemConteudo(cap)) return;
  _port1SetActiveCapBtn('port1-quiz-cap-row', btn, cap);
  _port1Quiz.cap = cap;
  port1QuizStart();
}

function port1QuizStart() {
  _port1Quiz.lives = 3; _port1Quiz.streak = 0; _port1Quiz.maxStreak = 0;
  _port1Quiz.score = 0; _port1Quiz.total = 0; _port1Quiz.answered = false;
  port1QuizNext();
}

function port1QuizNext() {
  var app = document.getElementById('port1-quiz-app');
  if (!app) return;
  if (_port1Quiz.lives <= 0) { port1QuizGameOver(app); return; }
  var ex = _port1BuildMcQuestion(_port1Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _port1Quiz.current = ex; _port1Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _port1Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="port1qopt-' + idx + '" onclick="port1QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_port1Quiz.streak > 1 ? '🔥 ' + _port1Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _port1Quiz.score + ' / ' + _port1Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="port1-quiz-fb" style="min-height:2.5rem"></div>';
}

function port1QuizAnswer(idx) {
  if (_port1Quiz.answered) return;
  _port1Quiz.answered = true;
  var ex = _port1Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _port1Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('port1qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('port1-quiz-fb');
  if (correct) {
    _port1Quiz.score++; _port1Quiz.streak++;
    if (_port1Quiz.streak > _port1Quiz.maxStreak) _port1Quiz.maxStreak = _port1Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _port1Quiz.lives--; _port1Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  port1SaveProgress(_port1Quiz.cap, correct);
  setTimeout(function(){ port1QuizNext(); }, 1400);
}

function port1QuizGameOver(app) {
  var pct = _port1Quiz.total > 0 ? Math.round(_port1Quiz.score / _port1Quiz.total * 100) : 0;
  _port1PM(_port1Quiz.cap, 'quiz', { pontuacao: _port1Quiz.score, total: _port1Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _port1Quiz.score + ' certas em ' + _port1Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_port1Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="port1QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _port1Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function port1FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_port1Cards[_port1Fc.cap] && _port1Cards[_port1Fc.cap].length)) {
    for (var c = 1; c <= _port1CapMeta.length; c++) { if (_port1Cards[c] && _port1Cards[c].length) { _port1Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('port1-fc-cap-row');
  if (row) {
    var h = '';
    _port1CapMeta.forEach(function(m) {
      var has = !!(_port1Cards[m.n] && _port1Cards[m.n].length);
      var color = _port1CapColors[m.n] || '#516860';
      var isActive = _port1Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('port1FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  port1FcSelectCap(_port1Fc.cap, null);
}

function port1FcSelectCap(cap, btn) {
  if (!(_port1Cards[cap] && _port1Cards[cap].length)) return;
  if (btn) _port1SetActiveCapBtn('port1-fc-cap-row', btn, cap);
  _port1Fc.cap = cap;
  _port1Fc.cards = _port1Cards[cap].slice();
  _port1Fc.idx = 0; _port1Fc.flipped = false;
  _port1PM(cap, 'flashcard');
  port1FcRender();
}

function port1FcRender() {
  var app = document.getElementById('port1-fc-app');
  if (!app) return;
  var cards = _port1Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_port1Fc.idx];
  var color = _port1CapColors[_port1Fc.cap] || '#516860';
  var pct = Math.round((_port1Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_port1Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="port1FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_port1Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_port1Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="port1FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="port1FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="port1FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function port1FcFlip() { _port1Fc.flipped = !_port1Fc.flipped; port1FcRender(); }
function port1FcNext() { _port1Fc.idx = (_port1Fc.idx + 1) % (_port1Fc.cards.length || 1); _port1Fc.flipped = false; port1FcRender(); }
function port1FcPrev() { _port1Fc.idx = (_port1Fc.idx - 1 + (_port1Fc.cards.length || 1)) % (_port1Fc.cards.length || 1); _port1Fc.flipped = false; port1FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _port1Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function port1TesteBuildNav() {
  if (!_port1TemConteudo(_port1Teste.cap)) _port1Teste.cap = 1;
  _port1BuildCapRow('port1-teste-cap-row', _port1Teste.cap, 'port1TesteSelectCap');
  port1TesteRenderConfig();
}

function port1TesteSelectCap(cap, btn) {
  if (!_port1TemConteudo(cap)) return;
  _port1SetActiveCapBtn('port1-teste-cap-row', btn, cap);
  _port1Teste.cap = cap;
  port1TesteRenderConfig();
}

function port1TesteRenderConfig() {
  var app = document.getElementById('port1-teste-app');
  if (!app) return;
  if (_port1Teste.timer) { clearInterval(_port1Teste.timer); _port1Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="port1-teste-nivel">' +
            '<button class="gen-level-btn' + (_port1Teste.nivel==='facil'?' active':'') + '" onclick="port1TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_port1Teste.nivel==='medio'?' active':'') + '" onclick="port1TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_port1Teste.nivel==='dificil'?' active':'') + '" onclick="port1TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="port1-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="port1-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="port1TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function port1TesteSetNivel(nivel, btn) {
  _port1Teste.nivel = nivel;
  var grp = document.getElementById('port1-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function port1TesteStart() {
  var gen = _port1Gerador(_port1Teste.cap);
  var qtdEl = document.getElementById('port1-teste-qtd'), tempoEl = document.getElementById('port1-teste-tempo');
  _port1Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _port1Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var exs = [];
  if (gen) {
    var nTemas = _port1TemasCount[_port1Teste.cap] || 1;
    var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
    for (var i = 0; i < _port1Teste.qtd; i++) {
      var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port1Teste.nivel);
      if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
    }
  } else {
    // PT: teste sai do banco alargado do domínio
    exs = _port1FichaSlice(_port1FichaBanco(_port1Teste.cap), _port1Teste.qtd, _port1Teste.nivel);
  }
  if (!exs.length) return;
  _port1Teste.exs = exs; _port1Teste.answered = {}; _port1Teste.score = { correct: 0, total: 0 };
  _port1Teste.restante = _port1Teste.tempo;

  var app = document.getElementById('port1-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'port1TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="port1-teste-timer">' + _port1FmtTime(_port1Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="port1-teste-answered">0 / ' + _port1Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="port1TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="port1-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _port1Teste.timer = setInterval(function() {
    _port1Teste.restante--;
    var t = document.getElementById('port1-teste-timer');
    if (t) t.textContent = _port1FmtTime(_port1Teste.restante);
    if (_port1Teste.restante <= 0) port1TesteFinish();
  }, 1000);
}

function _port1FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function port1TesteCheck(qid, tipo, val, btn) {
  if (_port1Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _port1Teste.answered[qid] = true;
  if (r.correct) _port1Teste.score.correct++;
  _port1Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('port1-teste-answered');
  if (a) a.textContent = _port1Teste.score.total + ' / ' + _port1Teste.qtd;
  port1SaveProgress(_port1Teste.cap, r.correct);
  if (_port1Teste.score.total >= _port1Teste.qtd) setTimeout(port1TesteFinish, 600);
}

function port1TesteFinish() {
  if (_port1Teste.timer) { clearInterval(_port1Teste.timer); _port1Teste.timer = null; }
  var app = document.getElementById('port1-teste-app');
  if (!app) return;
  var total = _port1Teste.qtd;
  var correct = _port1Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _port1PM(_port1Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="port1TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (jogos de Português — pt-jogos.js)
   Quiz Contra o Tempo · Forca · Correspondência. Nada de jogos
   matemáticos (4 em linha, Sudoku…) — não fazem sentido em Português.
   ════════════════════════════════════════════════════════════════ */
function port1JogosInit() {
  (function(){ var pj=document.getElementById('port1p-jogos'); if(pj && !document.getElementById('port1-jogos-atr')){ var d=document.createElement('div'); d.id='port1-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('port1-jogos-atr',{curso:'port1',cursoNome:'Português 7.º',tipo:'jogo',nivel:'',caps:_port1CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  if (typeof ptJogosRender === 'function') {
    if (typeof ptJogosConfig === 'function') {
      ptJogosConfig({
        appId: 'port1-jogos-app',
        fonte: function () {
          var out = [];
          [1, 2, 3, 4, 5].forEach(function (c) { out = out.concat(_port1FichaBanco(c)); });
          return out;
        },
        forca: PT7_FORCA
      });
    }
    ptJogosRender();
  } else {
    var app = document.getElementById('port1-jogos-app');
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
   Lê edupt_port1_capN (gravado por port1SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _port1ProgGetCaps() {
  var out = [];
  var nCaps = _port1CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_port1_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function port1RenderProgresso() {
  var el = document.getElementById('port1-progresso-content');
  if (!el) return;
  var caps = _port1ProgGetCaps();
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
     + '<button onclick="port1ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 9.º ano)
  h += '<div style="background:var(--m9c1-base);border:1.5px solid var(--m9c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m9c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="port1ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
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
    var m = _port1CapMeta[c.cap - 1];
    var color = _port1CapColors[c.cap] || '#516860';
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
      var mp = _port1CapMeta[pior.cap - 1];
      var colorp = _port1CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="port1TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="port1ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function port1TreinarCap(cap) {
  _port1Prat.cap = cap;
  _port1Prat.st = 0;
  port1SwitchTab('exercicios', null);
}

function port1ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 9.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _port1CapMeta.length; cap++) { try { localStorage.removeItem('edupt_port1_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 9.º ano (m9cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('p7dom') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  port1RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 9.º ano limpo.', 'ok');
}

function port1ProgDownloadPDF() {
  var caps = _port1ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _port1CapMeta[c.cap - 1];
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
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-port1.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _port1gf = {
  caps: {},            // { cap: true } selecionados
  sts: {},             // { cap: { stIdx(1..n): true } } tópicos por capítulo; vazio = todos
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Tópicos (índices 1..n) escolhidos para um capítulo; null = todos.
function _port1gfStsSel(cap) {
  var sel = _port1gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves t do banco correspondentes aos tópicos escolhidos; null = todos.
function _port1gfTemasSel(cap) {
  var sts = _port1gfStsSel(cap);
  if (!sts) return null;
  var mapa = _port1SubtemaTemas[cap] || {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

// Constrói a lista de capítulos selecionáveis e, para cada capítulo
// selecionado, os chips dos tópicos (subtemas) — a dona pediu para poder
// gerar fichas só de um tópico (ex.: só Os Lusíadas, só Funções Sintáticas).
function port1FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('port1-fichas-atr','port1AtribuirFicha');
  var el = document.getElementById('port1-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com conteúdo
  var temAlgum = false;
  for (var k in _port1gf.caps) { if (_port1gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _port1CapMeta.forEach(function(m) {
    var hasGen = _port1TemConteudo(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _port1gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_port1gf.caps[m.n];
    var color = _port1CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port1gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // tópicos do capítulo selecionado
    if (sel) {
      var sts = _port1Subtemas[m.n] || [];
      if (sts.length) {
        var escolhidos = _port1gf.sts[m.n] || {};
        var algumSt = _port1gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Tópicos:</span>';
        h += '<button onclick="port1gfToggleSt(' + m.n + ',0,this)" style="' + _port1gfStStyle(!algumSt, color) + '">Todos</button>';
        sts.forEach(function (st, i) {
          var on = !!escolhidos[i + 1];
          h += '<button onclick="port1gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _port1gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

function _port1gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function port1gfToggleCap(cap, btn) {
  _port1gf.caps[cap] = !_port1gf.caps[cap];
  if (!_port1gf.caps[cap]) delete _port1gf.sts[cap]; // desmarcar cap limpa os tópicos
  port1FichasBuildNav(); // re-render para mostrar/esconder a linha de tópicos
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o tópico.
function port1gfToggleSt(cap, idx, btn) {
  if (idx === 0) {
    delete _port1gf.sts[cap];
  } else {
    if (!_port1gf.sts[cap]) _port1gf.sts[cap] = {};
    _port1gf.sts[cap][idx] = !_port1gf.sts[cap][idx];
    if (_port1gfStsSel(cap) === null) delete _port1gf.sts[cap]; // tudo desmarcado = todos
  }
  port1FichasBuildNav();
}

function port1gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _port1gf.tipos[t] = !_port1gf.tipos[t];
  btn.classList.toggle('active', _port1gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _port1gf.tipos[t] ? '✓' : '';
}

function port1gfSetDif(btn) {
  _port1gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('port1-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function port1gfSetQty(btn) {
  _port1gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('port1-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _port1gfExBloco(exs, startNum) {
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

function _port1gfGenExs(cap, n) {
  var gen = _port1Gerador(cap);
  if (!gen) {
    // PT: a ficha vem toda do banco alargado (domínio + módulos realojados),
    // restringido aos tópicos escolhidos (se a dona/aluno escolheu algum)
    var pool = _port1FichaBanco(cap);
    var temasSel = _port1gfTemasSel(cap);
    if (temasSel) {
      var filtrado = pool.filter(function (q) { return temasSel.indexOf(q.t) !== -1; });
      if (filtrado.length) pool = filtrado;
    }
    return _port1FichaSlice(pool, n, _port1gf.dif);
  }
  var nTemas = _port1TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port1gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _port1Banco !== 'undefined' && _port1Banco[cap]) ? _port1Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _port1gf.dif);
  }
  return geradas;
}

function port1gfGerar(formato) {
  // capítulos selecionados (conta o banco alargado — em PT não há geradores)
  var capsSel = [];
  _port1CapMeta.forEach(function(m) { if (_port1gf.caps[m.n] && (_port1Gerador(m.n) || _port1FichaBanco(m.n).length)) capsSel.push(m.n); });
  var status = document.getElementById('port1-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _port1gf.tipos.resumo || _port1gf.tipos.exercicios || _port1gf.tipos.teste || _port1gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_port1gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _port1PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _port1CapMeta[cap - 1];
    var color = _port1CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards), restringido aos tópicos escolhidos
    // quando o filtro apanha cartões suficientes (senão mostra o domínio todo)
    if (_port1gf.tipos.resumo) {
      var cards = _port1Cards[cap] || [];
      var stsR = _port1gfStsSel(cap);
      if (stsR && cards.length) {
        var palavras = [];
        stsR.forEach(function (i) {
          String((_port1Subtemas[cap] || [])[i - 1] || '').toLowerCase().split(/\s+/).forEach(function (w) {
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
    if (_port1gf.tipos.exercicios) {
      var exs = _port1gfGenExs(cap, _port1gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _port1gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_port1gf.tipos.teste) {
      var exsT = _port1gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _port1gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_port1gf.tipos.minitestes) {
      var subt = _port1Subtemas[cap] || [];
      var mapa = _port1SubtemaTemas[cap] || {};
      var genM = _port1Gerador(cap);
      var bancoM = genM ? null : _port1FichaBanco(cap); // PT: sem gerador, usa o banco alargado
      var stsSelM = _port1gfStsSel(cap); // só minitestes dos tópicos escolhidos
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        if (stsSelM && stsSelM.indexOf(si + 1) === -1) return;
        var temas = mapa[si + 1] || [String(si + 1)];
        var exsM = [];
        if (genM) {
          for (var q = 0; q < 4; q++) {
            var tema = temas[q % temas.length];
            var ex = genM(tema, (q % 2 === 0) ? 'mc' : 'fill', _port1gf.dif);
            if (ex) exsM.push(ex);
          }
        } else {
          var poolM = bancoM.filter(function (qb) { return temas.indexOf(qb.t) !== -1; });
          if (!poolM.length) poolM = bancoM;
          exsM = _port1FichaSlice(poolM, 4, _port1gf.dif);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _port1gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_port1gf.tipos.solucoes && eduPodeSolucoes() && solucoes.length) {
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
    var nome = _port1CapMeta[c - 1].label;
    var sts = _port1gfStsSel(c);
    if (sts) {
      var nomes = sts.map(function (i) { return (_port1Subtemas[c] || [])[i - 1] || ''; }).filter(function (x) { return x; });
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

  var _temasNomes = capsSel.map(function(c){ return _port1CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('9', 'portugues', _temasNomes, formato) : ('ficha-port1.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _port1Init() {
  // arranca na tab Teoria com o cap 1 selecionado
  port1BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _port1Init);
else _port1Init();

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
var _port1Banco = {
  1: [ // Sons e Letras
    { t: '1', tipo: 'mc', enun: 'Qual destas é uma <strong>vogal</strong>?', opcoes: ['a', 'b', 't', 'm'], resposta: 'a', expl: 'As vogais são a, e, i, o, u.', tema: 'T1 · Vogais' },
    { t: '1', tipo: 'mc', enun: 'Quantas vogais diferentes existem?', opcoes: ['5', '3', '10', '2'], resposta: '5', expl: 'São 5: a, e, i, o, u.', tema: 'T1 · Vogais' },
    { t: '1', tipo: 'mc', enun: 'A letra "p" é vogal ou consoante?', opcoes: ['consoante', 'vogal'], resposta: 'consoante', expl: 'Só a, e, i, o, u são vogais; as outras são consoantes.', tema: 'T1 · Consoantes' },
    { t: '2', tipo: 'mc', enun: 'Por que som começa a palavra <strong>"bola"</strong>?', opcoes: ['b', 'o', 'l', 'a'], resposta: 'b', expl: 'O primeiro som de "bola" é o "b".', tema: 'T2 · Som inicial' },
    { t: '2', tipo: 'mc', enun: 'Qual destas palavras começa pelo som <strong>"m"</strong>?', opcoes: ['mão', 'pé', 'olho', 'casa'], resposta: 'mão', expl: '"Mão" começa pelo som "m".', tema: 'T2 · Som inicial' },
    { t: '2', tipo: 'mc', enun: 'Qual destas começa por <strong>vogal</strong>?', opcoes: ['uva', 'gato', 'sol', 'pato'], resposta: 'uva', expl: '"Uva" começa pela vogal "u".', tema: 'T2 · Som inicial' },
    { t: '3', tipo: 'mc', enun: 'O nome de uma pessoa escreve-se com…', opcoes: ['letra maiúscula', 'letra minúscula', 'número', 'só vogais'], resposta: 'letra maiúscula', expl: 'Os nomes começam por maiúscula: Ana, Pedro, Rita.', tema: 'T3 · Maiúsculas' },
    { t: '3', tipo: 'mc', enun: 'Está certo: <strong>"lisboa"</strong> ou <strong>"Lisboa"</strong>?', opcoes: ['Lisboa', 'lisboa'], resposta: 'Lisboa', expl: 'Lisboa é o nome de uma cidade → maiúscula.', tema: 'T3 · Maiúsculas' },
    { t: '1', tipo: 'mc', enun: 'Quantas vogais tem a palavra <strong>"pai"</strong>?', opcoes: ['2', '1', '3', '0'], resposta: '2', expl: 'Tem a e i → 2 vogais.', tema: 'T1 · Vogais' },
    { t: '2', tipo: 'mc', enun: 'Por que som acaba a palavra <strong>"sol"</strong>?', opcoes: ['l', 's', 'o', 'a'], resposta: 'l', expl: 'O último som de "sol" é o "l".', tema: 'T2 · Som inicial' }
  ],
  2: [ // Sílabas e Palavras
    { t: '1', tipo: 'mc', enun: 'Quantas sílabas tem <strong>"gato"</strong>? (bate palmas: ga-to)', opcoes: ['2', '1', '3', '4'], resposta: '2', expl: 'ga-to → 2 sílabas.', tema: 'T1 · Contar sílabas' },
    { t: '1', tipo: 'mc', enun: 'Quantas sílabas tem <strong>"borboleta"</strong>?', opcoes: ['4', '3', '2', '5'], resposta: '4', expl: 'bor-bo-le-ta → 4 sílabas.', tema: 'T1 · Contar sílabas' },
    { t: '1', tipo: 'mc', enun: 'Quantas sílabas tem <strong>"pé"</strong>?', opcoes: ['1', '2', '3', '0'], resposta: '1', expl: 'pé → 1 sílaba.', tema: 'T1 · Contar sílabas' },
    { t: '2', tipo: 'mc', enun: 'Que palavra formam <strong>"ca" + "sa"</strong>?', opcoes: ['casa', 'saca', 'cosa', 'cama'], resposta: 'casa', expl: 'ca + sa = casa.', tema: 'T2 · Juntar sílabas' },
    { t: '2', tipo: 'mc', enun: 'Que palavra formam <strong>"so" + "pa"</strong>?', opcoes: ['sopa', 'paso', 'sapo', 'posa'], resposta: 'sopa', expl: 'so + pa = sopa.', tema: 'T2 · Juntar sílabas' },
    { t: '2', tipo: 'mc', enun: 'Que palavra formam <strong>"bo" + "ne" + "ca"</strong>?', opcoes: ['boneca', 'cabone', 'canebo', 'bonéca'], resposta: 'boneca', expl: 'bo + ne + ca = boneca.', tema: 'T2 · Juntar sílabas' },
    { t: '1', tipo: 'mc', enun: 'Quantas sílabas tem <strong>"escola"</strong>?', opcoes: ['3', '2', '4', '1'], resposta: '3', expl: 'es-co-la → 3 sílabas.', tema: 'T1 · Contar sílabas' },
    { t: '3', tipo: 'mc', enun: 'A palavra <strong>"sol"</strong> mostra…', opcoes: ['a estrela que brilha de dia', 'um animal', 'uma fruta', 'uma cor'], resposta: 'a estrela que brilha de dia', expl: 'O sol dá-nos luz e calor de dia.', tema: 'T3 · Palavras e imagens' },
    { t: '3', tipo: 'mc', enun: 'Que palavra combina com a imagem de um cão?', opcoes: ['cão', 'pão', 'mão', 'são'], resposta: 'cão', expl: 'O animal que ladra é o "cão".', tema: 'T3 · Palavras e imagens' },
    { t: '1', tipo: 'mc', enun: 'Qual é a 1.ª sílaba de <strong>"janela"</strong>?', opcoes: ['ja', 'ne', 'la', 'jan'], resposta: 'ja', expl: 'ja-ne-la: a primeira é "ja".', tema: 'T1 · Contar sílabas' }
  ],
  3: [ // Ler Frases
    { t: '1', tipo: 'mc', enun: 'Lê: <strong>"o pato"</strong>. O que é?', opcoes: ['um animal', 'uma fruta', 'uma cor', 'um número'], resposta: 'um animal', expl: 'O pato é uma ave que nada.', tema: 'T1 · Ler palavras' },
    { t: '2', tipo: 'mc', enun: 'Quantas palavras tem a frase <strong>"A Ana tem um gato."</strong>?', opcoes: ['5', '4', '6', '3'], resposta: '5', expl: 'A / Ana / tem / um / gato = 5 palavras.', tema: 'T2 · Ler frases' },
    { t: '2', tipo: 'mc', enun: 'Lê: <strong>"A bola é vermelha."</strong> De que cor é a bola?', opcoes: ['vermelha', 'azul', 'verde', 'amarela'], resposta: 'vermelha', expl: 'A frase diz que a bola é vermelha.', tema: 'T2 · Ler frases' },
    { t: '3', tipo: 'mc', enun: 'Que sinal acaba uma <strong>pergunta</strong>?', opcoes: ['?', '.', '!', ','], resposta: '?', expl: 'As perguntas acabam com ponto de interrogação (?).', tema: 'T3 · Pontuação' },
    { t: '3', tipo: 'mc', enun: 'Que sinal mostra <strong>surpresa ou alegria</strong>?', opcoes: ['!', '?', '.', '-'], resposta: '!', expl: 'O ponto de exclamação (!) mostra emoção.', tema: 'T3 · Pontuação' },
    { t: '3', tipo: 'mc', enun: 'Que sinal marca o <strong>fim</strong> de uma frase normal?', opcoes: ['ponto final', 'vírgula', 'interrogação', 'traço'], resposta: 'ponto final', expl: 'A frase normal acaba com ponto final (.).', tema: 'T3 · Pontuação' },
    { t: '2', tipo: 'mc', enun: 'Lê: <strong>"O cão corre no jardim."</strong> Onde corre o cão?', opcoes: ['no jardim', 'na escola', 'em casa', 'na praia'], resposta: 'no jardim', expl: 'A frase diz "no jardim".', tema: 'T2 · Ler frases' },
    { t: '1', tipo: 'mc', enun: 'Lemos as palavras…', opcoes: ['da esquerda para a direita', 'da direita para a esquerda', 'de baixo para cima', 'às voltas'], resposta: 'da esquerda para a direita', expl: 'Em português, lemos da esquerda para a direita.', tema: 'T1 · Ler palavras' },
    { t: '2', tipo: 'mc', enun: 'Lê: <strong>"A Rita come uma maçã."</strong> O que come a Rita?', opcoes: ['uma maçã', 'pão', 'sopa', 'um bolo'], resposta: 'uma maçã', expl: 'A frase diz "uma maçã".', tema: 'T2 · Ler frases' },
    { t: '3', tipo: 'mc', enun: 'Que sinal falta? <strong>"Como te chamas_"</strong>', opcoes: ['?', '.', '!', ','], resposta: '?', expl: 'É uma pergunta → ponto de interrogação (?).', tema: 'T3 · Pontuação' }
  ],
  4: [ // Escrever
    { t: '1', tipo: 'mc', enun: 'Ordena as letras <strong>o-s-l</strong> para fazer uma palavra.', opcoes: ['sol', 'los', 'osl', 'slo'], resposta: 'sol', expl: 's-o-l = "sol".', tema: 'T1 · Ordem das letras' },
    { t: '1', tipo: 'mc', enun: 'Ordena: <strong>a-t-o-g</strong>.', opcoes: ['gato', 'toga', 'gota', 'tago'], resposta: 'gato', expl: 'g-a-t-o = "gato".', tema: 'T1 · Ordem das letras' },
    { t: '1', tipo: 'mc', enun: 'Ordena: <strong>s-a-c-a</strong>.', opcoes: ['casa', 'saca', 'asca', 'cas'], resposta: 'casa', expl: 'c-a-s-a = "casa".', tema: 'T1 · Ordem das letras' },
    { t: '2', tipo: 'mc', enun: 'Qual está bem escrita?', opcoes: ['O gato dorme.', 'o gato dorme', 'O gato dorme', 'o Gato dorme.'], resposta: 'O gato dorme.', expl: 'Maiúscula no início e ponto final no fim.', tema: 'T2 · Escrever frases' },
    { t: '3', tipo: 'mc', enun: 'O que falta em <strong>"a maria canta"</strong>?', opcoes: ['maiúscula no início e ponto no fim', 'mais palavras', 'um número', 'nada'], resposta: 'maiúscula no início e ponto no fim', expl: 'Deve ser "A Maria canta."', tema: 'T3 · Maiúscula e ponto' },
    { t: '2', tipo: 'mc', enun: 'Entre as palavras de uma frase deixamos…', opcoes: ['um espaço', 'uma vírgula', 'um ponto', 'nada'], resposta: 'um espaço', expl: 'As palavras separam-se por espaços.', tema: 'T2 · Escrever frases' },
    { t: '3', tipo: 'mc', enun: 'Uma <strong>pergunta</strong> que escreves acaba com…', opcoes: ['?', '.', '!', ','], resposta: '?', expl: 'Pergunta → ponto de interrogação.', tema: 'T3 · Maiúscula e ponto' },
    { t: '1', tipo: 'mc', enun: 'Ordena: <strong>l-u-a</strong>.', opcoes: ['lua', 'ula', 'alu', 'aul'], resposta: 'lua', expl: 'l-u-a = "lua".', tema: 'T1 · Ordem das letras' },
    { t: '2', tipo: 'mc', enun: 'Qual está bem escrita?', opcoes: ['A Rita brinca.', 'a rita brinca', 'A rita brinca', 'a Rita brinca.'], resposta: 'A Rita brinca.', expl: 'Maiúscula em "A" e em "Rita" (nome), e ponto final.', tema: 'T2 · Escrever frases' },
    { t: '3', tipo: 'mc', enun: 'O teu nome começa por…', opcoes: ['letra maiúscula', 'letra minúscula', 'número', 'ponto'], resposta: 'letra maiúscula', expl: 'Os nomes começam por maiúscula.', tema: 'T3 · Maiúscula e ponto' }
  ],
  5: [ // Histórias
    { t: '1', tipo: 'mc', enun: 'O que é uma <strong>personagem</strong>?', opcoes: ['quem aparece na história', 'o título', 'a capa', 'o número de páginas'], resposta: 'quem aparece na história', expl: 'Personagens são quem age na história (pessoas, animais…).', tema: 'T1 · Personagens' },
    { t: '1', tipo: 'mc', enun: 'Nos <strong>"Três Porquinhos"</strong>, quantos porquinhos há?', opcoes: ['3', '2', '4', '1'], resposta: '3', expl: 'São três porquinhos.', tema: 'T1 · Personagens' },
    { t: '2', tipo: 'mc', enun: 'Quais são as três partes de uma história?', opcoes: ['início, meio e fim', 'capa, meio e contracapa', 'título, autor e preço', 'cima, baixo e lado'], resposta: 'início, meio e fim', expl: 'Toda a história tem início, meio e fim.', tema: 'T2 · Início, meio e fim' },
    { t: '2', tipo: 'mc', enun: 'Muitos contos começam por…', opcoes: ['"Era uma vez…"', '"Fim."', '"Adeus!"', '"Olá."'], resposta: '"Era uma vez…"', expl: 'É a forma típica de começar um conto.', tema: 'T2 · Início, meio e fim' },
    { t: '3', tipo: 'mc', enun: 'Qual destas palavras <strong>rima</strong> com <strong>"gato"</strong>?', opcoes: ['pato', 'cão', 'casa', 'sol'], resposta: 'pato', expl: 'gato–pato acabam no mesmo som.', tema: 'T3 · Rimas' },
    { t: '3', tipo: 'mc', enun: 'Qual rima com <strong>"mão"</strong>?', opcoes: ['pão', 'mesa', 'gato', 'flor'], resposta: 'pão', expl: 'mão–pão rimam.', tema: 'T3 · Rimas' },
    { t: '1', tipo: 'mc', enun: 'No "Capuchinho Vermelho", quem é a personagem principal?', opcoes: ['o Capuchinho Vermelho', 'a casa', 'a floresta', 'o cesto'], resposta: 'o Capuchinho Vermelho', expl: 'A menina é a personagem principal.', tema: 'T1 · Personagens' },
    { t: '2', tipo: 'mc', enun: 'Como costuma acabar um conto de fadas?', opcoes: ['"…felizes para sempre."', '"…Era uma vez."', '"Capítulo 1."', '"Bom dia."'], resposta: '"…felizes para sempre."', expl: 'É um fim típico dos contos.', tema: 'T2 · Início, meio e fim' },
    { t: '3', tipo: 'mc', enun: 'Qual rima com <strong>"sol"</strong>?', opcoes: ['lençol', 'mesa', 'pato', 'casa'], resposta: 'lençol', expl: 'sol–lençol rimam.', tema: 'T3 · Rimas' },
    { t: '1', tipo: 'mc', enun: 'Que história tem um lobo e três casas?', opcoes: ['Os Três Porquinhos', 'O Capuchinho Vermelho', 'A Cigarra e a Formiga', 'O Patinho Feio'], resposta: 'Os Três Porquinhos', expl: 'O lobo tenta deitar abaixo as casas dos porquinhos.', tema: 'T1 · Personagens' }
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
_port1Banco[2] = _port1Banco[2].concat([
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
_port1Banco[2] = _port1Banco[2].concat([
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
_port1Banco[1] = _port1Banco[1].concat([
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
_port1Banco[1] = _port1Banco[1].concat([
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
_port1Banco[3] = _port1Banco[3].concat([
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


/* atribuir: deep-link port1 */
function _port1DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_port1gf){ _port1gf.caps={}; cs.forEach(function(n){ _port1gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _port1gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ port1SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_port1Prat) _port1Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ port1SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof ptJogoAbrir==='function')setTimeout(function(){try{ptJogoAbrir(jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_port1TarefaAtiva=p.get('tarefa');_port1TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _port1Prat.cap=cap; _port1Prat.st=st; _port1Prat.nivel=nivel; setTimeout(function(){ port1SwitchTab('exercicios',null); if(typeof port1GerarExercicios==='function') port1GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_port1DeepLinkAuto,300);});else setTimeout(_port1DeepLinkAuto,300);

function port1AtribuirFicha(){
  var caps=[]; _port1CapMeta.forEach(function(m){ if(_port1gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('port1-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_port1CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'port1', cursoNome:'Português 7.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_port1gf.dif };
}

function port1EntregarTarefa(){
  if(!_port1TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_port1TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_port1TarefaResp[qid]; if(ok)certas++; var ex=_port1Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_port1TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _port1TarefaAtiva=null; _port1TarefaResp={}; port1GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
