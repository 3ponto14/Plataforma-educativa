/* ════════════════════════════════════════════════════════════════
   PORT8 HUB - Português 8.º ano (5 domínios) · ver MODELO BASE
   Criado a partir do molde port7/port9 (modelo híbrido de Português).
   Banco-driven (_port8Banco). Conteúdo alinhado ao programa do 8.º e
   aos manuais Mensagens 8 / O Mundo em Palavras 8 / A Par e Passo 8
   (8º ano_portugues/): obras O Diário de Anne Frank, Natal (Torga),
   O Gato Malhado e a Andorinha Sinhá (J. Amado), O Adamastor.
   ════════════════════════════════════════════════════════════════ */

// ═══ Domínios de Português do 9.º ano (Aprendizagens Essenciais) ═══
// Os "capítulos" do hub são os 5 DOMÍNIOS do programa.
var _port8CapMeta = [
  {n:1, icon:'<i class="ph ph-book-open-text"></i>', label:'Educação Literária'},
  {n:2, icon:'<i class="ph ph-text-aa"></i>',        label:'Gramática'},
  {n:3, icon:'<i class="ph ph-book-open"></i>',      label:'Leitura'},
  {n:4, icon:'<i class="ph ph-pencil-line"></i>',    label:'Escrita'},
  {n:5, icon:'<i class="ph ph-sparkle"></i>',        label:'Recursos Expressivos'}
];

// Cores por domínio (alinhadas com --p7cN-* do CSS)
var _port8CapColors = {
  1:'#8a5a3a', 2:'#5a72a0', 3:'#4d8f87', 4:'#9c5e80', 5:'#7f8a4d'
};

// Subtemas por domínio
var _port8Subtemas = {
  1: ['Narrativa', 'Poesia', 'Texto dramático (O Adamastor)', 'Texto épico (Os Lusíadas)'],
  2: ['Classes de palavras', 'Funções sintáticas', 'Frase e orações', 'Verbo (modos e tempos)', 'Léxico e variação'],
  3: ['Compreensão de texto', 'Tipologias textuais', 'Sentidos do texto'],
  4: ['Texto narrativo', 'Texto de opinião', 'Resumo'],
  5: ['Figuras de estilo', 'Recursos expressivos', 'Versificação']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (9.º ano) ═══
var _port8Cards = {
  // ── Domínio 1 · Educação Literária (8.º) ──
  1: [
    { st: 1, tag: 'Definição', q: 'O que é uma narrativa?', a: 'Um texto que conta uma história, com narrador, personagens, ação, espaço e tempo. No 8.º estudam-se autores como Sophia de Mello Breyner, Jorge Amado e José Saramago.' },
    { st: 1, tag: 'Conceito', q: 'Tipos de narrador quanto à presença?', a: 'Participante (narra na 1.ª pessoa, entra na ação) e não participante (3.ª pessoa). Quanto ao conhecimento: omnisciente (sabe tudo) ou de ciência limitada.' },
    { st: 1, tag: 'Conceito', q: 'Personagens quanto ao relevo e à construção?', a: 'Relevo: principal, secundária, figurante. Construção: redonda (complexa, evolui) ou plana (simples, não muda); modelada (caracterizada aos poucos) ou tipo.' },
    { st: 1, tag: 'Contexto', q: 'O que é «O Gato Malhado e a Andorinha Sinhá»?', a: 'Uma narrativa de Jorge Amado, com fortes recursos expressivos e personagens animais que representam comportamentos humanos: o Gato temido aprende sobre o amor com a Andorinha.' },
    { st: 1, tag: 'Contexto', q: 'Quem é o Garrinchas («Natal», de Miguel Torga)?', a: 'Um pedinte pobre e doente do conto «Natal»; o texto critica a insensibilidade das pessoas que não têm piedade da sua miséria.' },
    { st: 1, tag: 'Contexto', q: 'O que é «O Diário de Anne Frank»?', a: 'O diário real de uma jovem judia escondida durante a ocupação nazi. Anne trata o diário como uma amiga, a quem chama «Kitty».' },
    { st: 3, tag: 'Definição', q: 'Como se organiza o texto dramático?', a: 'Em atos e cenas, com as falas das personagens e as didascálias (indicações cénicas). Não tem narrador: a história revela-se pelo diálogo e pela ação.' },
    { st: 3, tag: 'Definição', q: 'O que é o monólogo e o aparte?', a: 'Monólogo: a personagem fala sozinha, em voz alta, expondo os seus pensamentos. Aparte: uma fala dirigida ao público que as outras personagens «não ouvem».' },
    { st: 2, tag: 'Poesia', q: 'O que é o sujeito poético?', a: 'A «voz» que fala no poema: não se confunde com o poeta, a pessoa real. Exprime emoções, ideias e visões do mundo.' },
    { st: 2, tag: 'Poesia', q: 'O que distingue a quadra popular?', a: 'Estrofe de 4 versos, em redondilha (5 ou 7 sílabas), de rima simples: forma típica da poesia tradicional e das cantigas.' },
    { st: 3, tag: 'Contexto', q: 'O que é «O Adamastor» de Luís de Sttau Monteiro?', a: 'Um texto («Aquilo que os Olhos Veem») que recria, em tom crítico e humorístico, o episódio do gigante de Os Lusíadas, a bordo de um navio.' },
    { st: 1, tag: 'Conceito', q: 'O que é a estrutura de uma narrativa?', a: 'Situação inicial → desenvolvimento (peripécias/conflito) → ponto culminante (clímax) → desenlace (resolução).' }
  ],
  // ── Domínio 2 · Gramática (8.º) ──
  2: [
    { st: 2, tag: 'Regra', q: 'Funções sintáticas estudadas no 8.º?', a: 'Sujeito, predicado, complementos (direto, indireto, oblíquo, agente da passiva), predicativo do sujeito e do complemento direto, modificador (do nome e do grupo verbal).' },
    { st: 2, tag: 'Definição', q: 'O que é o predicativo do complemento direto?', a: 'Atribui uma característica ao complemento direto, com verbos como achar, considerar, eleger: «Consideram o livro [CD] interessante [PCD].»' },
    { st: 2, tag: 'Regra', q: 'Complemento direto vs. oblíquo?', a: 'Direto: «o quê?» sem preposição (li-o). Oblíquo: exigido pelo verbo COM preposição, não substituível por lhe («gosto de música»).' },
    { st: 3, tag: 'Regra', q: 'Frase passiva e agente da passiva?', a: 'Na passiva, o CD da ativa torna-se sujeito e o sujeito da ativa passa a complemento agente da passiva, introduzido por «por»: «O livro foi lido por mim.»' },
    { st: 4, tag: 'Regra', q: 'Os quatro modos verbais?', a: 'Indicativo (factos: canto), conjuntivo (hipótese/desejo: que eu cante), condicional (cantaria) e imperativo (canta!).' },
    { st: 4, tag: 'Regra', q: 'Quando se usa o conjuntivo?', a: 'Em desejos/hipóteses e depois de «talvez», «oxalá», «embora», «para que», «caso», «logo que» (futuro): «Espero que venhas.»' },
    { st: 3, tag: 'Definição', q: 'Orações subordinadas: que tipos?', a: 'Adverbiais (tempo, causa, fim, condição, concessão…), adjetivas relativas (restritivas/explicativas) e substantivas (completivas e relativas).' },
    { st: 3, tag: 'Definição', q: 'Os valores da palavra «que»?', a: '«Que» pode ser: pronome relativo (o livro QUE li), conjunção (disse QUE vinha), determinante interrogativo (QUE horas?) ou parte de «tão… que».' },
    { st: 3, tag: 'Regra', q: 'Subordinação substantiva completiva: como reconhecer?', a: 'Completa o sentido de um verbo, nome ou adjetivo e responde a «o quê?»: «Disse [que viria]»: a oração é complemento direto.' },
    { st: 2, tag: 'Definição', q: 'Modificador do nome restritivo e apositivo?', a: 'Restritivo: limita o sentido do nome, sem vírgulas («o aluno que estudou»). Apositivo: acrescenta informação, entre vírgulas («o Rui, meu vizinho»).' },
    { st: 5, tag: 'Definição', q: 'Léxico: como se formam palavras?', a: 'Derivação (prefixação, sufixação, parassíntese: en+triste+cer) e composição (morfológica: pluvi+oso; morfossintática: guarda-chuva).' },
    { st: 3, tag: 'Regra', q: 'Discurso direto e indireto?', a: 'Direto: reproduz as falas (« — Vou já»). Indireto: integra-as na narração (Disse que ia já): mudam tempos verbais, pronomes e dêiticos.' }
  ],
  // ── Domínio 3 · Leitura (8.º) ──
  3: [
    { st: 1, tag: 'Estratégia', q: 'Como abordar um texto e as perguntas?', a: '1) Lê o texto todo; 2) lê as perguntas; 3) localiza a informação no texto; 4) responde por palavras tuas, citando quando pedido.' },
    { st: 2, tag: 'Definição', q: 'O que é uma reportagem?', a: 'Um texto jornalístico aprofundado sobre um tema, que recolhe factos, testemunhos e dados: mais desenvolvido do que a notícia.' },
    { st: 2, tag: 'Definição', q: 'O que é o texto (auto)biográfico?', a: 'Biografia: alguém conta a vida de outra pessoa (3.ª pessoa). Autobiografia: a própria pessoa conta a sua vida (1.ª pessoa): diário, memórias, autorretrato.' },
    { st: 2, tag: 'Definição', q: 'Características do texto jornalístico?', a: 'Informa de forma objetiva, responde a quem/o quê/quando/onde/como/porquê; tem título, lead e corpo. A reportagem e a entrevista são géneros jornalísticos.' },
    { st: 3, tag: 'Definição', q: 'Facto vs. opinião?', a: 'Facto: pode ser verificado («estreou em 2020»). Opinião: exprime um juízo de valor («é uma série brilhante»). Saber distingui-los é essencial.' },
    { st: 3, tag: 'Definição', q: 'Sentido denotativo e conotativo?', a: 'Denotativo: sentido literal, de dicionário. Conotativo: sentido figurado, afetivo ou simbólico («noite» = escuridão/tristeza).' },
    { st: 1, tag: 'Estratégia', q: 'O que é inferir?', a: 'Concluir o que o texto sugere mas não diz com todas as letras, juntando pistas. É «ler nas entrelinhas».' },
    { st: 1, tag: 'Estratégia', q: 'Como justificar uma resposta com o texto?', a: 'Indica a passagem (cita entre aspas ou refere a linha) e mostra como ela apoia a tua afirmação.' }
  ],
  // ── Domínio 4 · Escrita (8.º) ──
  4: [
    { st: 1, tag: 'Estrutura', q: 'Como se estrutura um texto narrativo?', a: 'Situação inicial → desenvolvimento (peripécias) → ponto culminante → desenlace. Com narrador, personagens, espaço e tempo coerentes.' },
    { st: 3, tag: 'Estrutura', q: 'Como se faz um resumo?', a: 'Conserva as ideias principais, por palavras próprias, sem opiniões nem pormenores; muito mais curto que o original, mas fiel ao texto.' },
    { st: 2, tag: 'Estrutura', q: 'Como se estrutura um texto de opinião?', a: 'Introdução (tema + tese), desenvolvimento (argumentos com exemplos, podendo refutar contra-argumentos), conclusão (reafirma a posição).' },
    { st: 2, tag: 'Estratégia', q: 'Para que servem os conectores?', a: 'Dão coesão ao texto: adição (além disso), causa (porque), oposição (contudo), conclusão (portanto), tempo (primeiro, depois).' },
    { st: 2, tag: 'Estratégia', q: 'Como construir um bom argumento?', a: 'Afirma a ideia, justifica-a com uma razão e ilustra-a com um exemplo concreto: não basta repetir a tese.' },
    { st: 1, tag: 'Regra', q: 'O que rever no fim de um texto?', a: 'Ortografia, pontuação, concordâncias, conectores, repetições de palavras e se o texto responde mesmo ao que foi pedido.' },
    { st: 1, tag: 'Estratégia', q: 'Como planificar antes de escrever?', a: 'Anota as ideias-chave (tese, argumentos, exemplos), ordena-as e só depois redige. Poupa tempo e evita fugas ao tema.' },
    { st: 1, tag: 'Estratégia', q: 'Como evitar repetir palavras?', a: 'Usa pronomes («o João… ele») e sinónimos («o rapaz», «o jovem»), além de hiperónimos («o animal»).' }
  ],
  // ── Domínio 5 · Recursos Expressivos (8.º) ──
  5: [
    { st: 1, tag: 'Figura', q: 'Comparação', a: 'Aproxima dois elementos com palavra comparativa (como, tal como): «frio como gelo».' },
    { st: 1, tag: 'Figura', q: 'Metáfora', a: 'Identifica dois elementos SEM palavra de ligação: «os teus olhos são duas estrelas».' },
    { st: 1, tag: 'Figura', q: 'Personificação', a: 'Atribui características humanas a seres não humanos: «a cidade adormeceu».' },
    { st: 1, tag: 'Figura', q: 'Hipérbole', a: 'Exagero intencional para dar ênfase: «morria de rir».' },
    { st: 1, tag: 'Figura', q: 'Antítese', a: 'Aproxima ideias ou palavras de sentido oposto: «é fogo que arde sem se ver».' },
    { st: 1, tag: 'Figura', q: 'Enumeração', a: 'Sucessão de elementos para reforçar uma ideia: «Vim, vi, venci».' },
    { st: 1, tag: 'Figura', q: 'Anáfora', a: 'Repetição de palavras no início de versos ou frases seguidas.' },
    { st: 2, tag: 'Figura', q: 'Aliteração e onomatopeia', a: 'Aliteração: repetição de sons consonânticos («o rato roeu a rolha»). Onomatopeia: palavra que imita um som (tique-taque).' },
    { st: 3, tag: 'Versificação', q: 'Como se conta a métrica?', a: 'Contam-se as sílabas métricas até à última sílaba TÓNICA do verso (as átonas finais não contam).' },
    { st: 3, tag: 'Versificação', q: 'Esquemas de rima e estrofes?', a: 'Rima emparelhada (AABB), cruzada (ABAB), interpolada (ABBA). Estrofes: quadra (4), quintilha (5), sextilha (6), oitava (8).' }
  ]
};

// Seleção atual por tab
var _port8Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function port8SwitchTab(tab, btn) {
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
  var panel = document.getElementById('port8p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Português 8.º · ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') port8BuildResumoNav();
  else if (tab === 'exercicios') port8BuildPraticarNav();
  else if (tab === 'quiz') port8QuizBuildNav();
  else if (tab === 'flashcards') port8FcBuildNav();
  else if (tab === 'teste') port8TesteBuildNav();
  else if (tab === 'jogos') port8JogosInit();
  else if (tab === 'fichas') port8FichasBuildNav();
  else if (tab === 'progresso') port8RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function port8OpenPraticar(modo) { port8SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function port8BuildResumoNav() {
  var capRow = document.getElementById('port8-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _port8Sel['resumo'] || 1;
  var h = '';
  _port8CapMeta.forEach(function(m) {
    var color = _port8CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port8ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  port8ResumoShowSts(activeCap);
  port8RenderResumoInline();
}

function port8ResumoSelectCap(cap, btn) {
  _port8Sel['resumo'] = cap;
  _port8Sel['resumo-st'] = 0;
  var capRow = document.getElementById('port8-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _port8CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  port8ResumoShowSts(cap);
  port8RenderResumoInline();
}

function port8ResumoShowSts(cap) {
  var stRow = document.getElementById('port8-resumo-st-row');
  if (!stRow) return;
  var sts = _port8Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  // conta cards por subtema para esconder chips de subtemas sem teoria
  var _cc = (typeof _port8Cards !== 'undefined' && _port8Cards[cap]) ? _port8Cards[cap] : [];
  var _nSt = {}; _cc.forEach(function(c){ if (c.st) _nSt[c.st] = (_nSt[c.st]||0)+1; });
  var _stSel = _port8Sel['resumo-st'] || 0;
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_stSel === 0 ? ' active' : '') + '" data-st="0" onclick="port8ResumoSelectSt(this,' + cap + ',0)">Todos</button>';
  sts.forEach(function(st, i) {
    if (!_nSt[i + 1]) return; // subtema sem flashcards → não mostra o chip
    var isActive = _stSel === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port8ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port8ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('port8-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port8Sel['resumo'] = cap;
  _port8Sel['resumo-st'] = stIdx;
  port8RenderResumoInline();
}

function port8RenderResumoInline() {
  var cap = _port8Sel['resumo'] || 1;
  var dest = document.getElementById('port8-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _port8CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _port8Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _port8Sel['resumo-st'] || 0;
  // Filtro por subtema usa o campo st de cada flashcard (fiável); 0 = Todos.
  var cards = (stIdx > 0) ? allCards.filter(function(card){ return card.st === stIdx; }) : allCards;

  if (!cards.length) {
    dest.innerHTML = '<div class="resumo-empty">'
      + '<i class="ph ph-book-open-text resumo-empty-icon"></i>'
      + '<div class="resumo-empty-title">Conteúdo em preparação</div>'
      + '<div class="resumo-empty-sub">A teoria deste capítulo está a ser elaborada.</div></div>';
    return;
  }

  _port8PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Português não tem geradores procedurais — a prática usa o _port8Banco.
// Só os caps com gerador são "praticáveis".
// Português não tem geradores procedurais (as perguntas são de análise/banco).
// _port8Gerador devolve sempre null → o hub usa apenas o _port8Banco.
function _port8Gerador(cap) {
  return null;
}
// Um domínio está "disponível" para prática se tiver questões no banco.
function _port8TemConteudo(cap) {
  return !!(_port8Banco[cap] && _port8Banco[cap].length);
}
// Nº de subtemas por domínio (espelha _port8Subtemas) — usado na seleção de prática.
var _port8TemasCount = { 1: 4, 2: 5, 3: 3, 4: 3, 5: 3 };

// Estado da prática
var _port8Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _port8TarefaAtiva=null, _port8TarefaResp={};

function _port8PratStorageKey(cap) { return 'edupt_port8_cap' + cap; }

function port8BuildPraticarNav() {
  var capRow = document.getElementById('port8-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _port8Prat.cap || 1;
  var h = '';
  _port8CapMeta.forEach(function(m) {
    var hasGen = _port8TemConteudo(m.n);
    var color = _port8CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'port8PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  port8PraticarShowSts(activeCap);
  port8GerarExercicios(); // renderiza logo o domínio ativo (módulo ou banco)
}

function port8PraticarShowSts(cap) {
  var stRow = document.getElementById('port8-praticar-st-row');
  if (!stRow) return;
  var sts = _port8Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_port8Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="port8PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_port8Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port8PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port8PraticarSelectCap(cap, btn) {
  if (!_port8TemConteudo(cap)) return;
  _port8Prat.cap = cap;
  _port8Prat.st = 0;
  var capRow = document.getElementById('port8-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _port8CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  port8PraticarShowSts(cap);
  port8GerarExercicios();
}

function port8PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('port8-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port8Prat.st = stIdx;
  port8GerarExercicios();
}

function port8PraticarSetNivel(nivel, btn) {
  _port8Prat.nivel = nivel;
  var grp = document.getElementById('port8-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  port8GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _port8SubtemaTemas = {
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
function _port8PratModulo(cap, dest) {
  // O 7.º ano não tem módulos realojados: a prática é toda banco-driven.
  return false;
}

function port8GerarExercicios() {
  var dest = document.getElementById('port8-praticar-content');
  if (!dest) return;
  var cap = _port8Prat.cap, gen = _port8Gerador(cap);

  // Domínios com módulos próprios (realojados da antiga zona de exame):
  // escondem nível/subtemas/gerar e renderizam o módulo no painel.
  var lvlBar = document.getElementById('port8-praticar-levelbar');
  var stRow = document.getElementById('port8-praticar-st-row');
  if (_port8PratModulo(cap, dest)) {
    if (lvlBar) lvlBar.style.display = 'none';
    if (stRow) stRow.style.display = 'none';
    if (_port8TarefaAtiva && typeof tarefaEntregaBar === 'function') tarefaEntregaBar(_port8TarefaAtiva, 'Trabalho concluído');
    return;
  }
  if (lvlBar) lvlBar.style.display = '';

  // Sem gerador procedural nem banco → nada a mostrar
  if (!gen && !(_port8Banco[cap] && _port8Banco[cap].length)) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_port8Prat.st > 0 && _port8SubtemaTemas[cap] && _port8SubtemaTemas[cap][_port8Prat.st]) {
    temas = _port8SubtemaTemas[cap][_port8Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_port8TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  if (gen) {
    for (var i = 0; i < QTD; i++) {
      var tema = temas[i % temas.length];
      var ex = gen(tema, tipos[i % tipos.length], _port8Prat.nivel);
      if (ex) geradas.push(ex);
    }
  }
  var banco = (typeof _port8Banco !== 'undefined' && _port8Banco[cap]) ? _port8Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs;
  if (!gen) {
    // Sem gerador (PT): usa o banco todo, baralhado
    exs = banco.slice().sort(function () { return Math.random() - .5; })
      .map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  } else {
    exs = (typeof _mixBancoGeradas === 'function') ? _mixBancoGeradas(banco, geradas, QTD, 3, _port8Prat.nivel)
      : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  }
  _port8Prat.exs = exs;
  _port8Prat.answered = {};
  _port8Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="port8-prat-scorebar">'
    + '<div><div class="score-num" id="port8-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="port8-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="port8-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="port8GerarExercicios()">↺ Novas questões</button>'
    + (_port8TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="port8EntregarTarefa()">\u2713 Terminar e entregar</button>' : '')
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'port8CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="port8-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _port8CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _sn = (_port8Subtemas[cap] && _port8Prat.st > 0) ? (_port8Subtemas[cap][_port8Prat.st - 1] || '') : '';
    Atribuir.montar('port8-atribuir', { curso: 'port8', cursoNome: 'Português 8.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_port8Prat.st || ''), subNome: _sn, tipo: 'quiz', nivel: _port8Prat.nivel });
  }
}

function port8CheckEx(qid, tipo, val, btn) {
  if (_port8Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _port8Prat.answered[qid] = true;
  if (r.correct) _port8Prat.score.correct++;
  _port8Prat.score.total++; if(_port8TarefaAtiva){_port8TarefaResp[qid]=!!r.correct;}
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('port8-prat-score'); if (se) se.textContent = _port8Prat.score.correct;
  var te = document.getElementById('port8-prat-total'); if (te) te.textContent = '/ ' + _port8Prat.score.total;
  var pe = document.getElementById('port8-prat-prog'); if (pe && _port8Prat.exs.length) pe.style.width = (_port8Prat.score.total / _port8Prat.exs.length * 100) + '%';
  port8SaveProgress(_port8Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function port8SaveProgress(cap, correct) {
  try {
    var key = _port8PratStorageKey(cap);
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
// ('p8domN') para não misturar com o progresso do 7.º ano.
function _port8PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('p8dom' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _port8BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _port8CapMeta.forEach(function(m) {
    var hasGen = _port8TemConteudo(m.n);
    var color = _port8CapColors[m.n] || '#516860';
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

function _port8SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _port8CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _port8FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

/* Banco do domínio (o 7.º não tem módulos externos para juntar). */
function _port8FichaBanco(cap) {
  return (_port8Banco[cap] || []).slice();
}

// Baralha e tira n questões do banco alargado, respeitando o nível pedido.
// Primeiro só questões DO nível; se não chegarem, completa com as do nível
// mais próximo (médio→fácil→difícil; difícil→médio→fácil; fácil→médio→difícil),
// para que Fácil, Médio e Difícil deem fichas realmente diferentes.
function _port8FichaSlice(banco, n, dif) {
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
function _port8BuildMcQuestion(cap) {
  var qs = _port8FichaBanco(cap).filter(function (q) {
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
var _port8Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function port8QuizBuildNav() {
  if (!_port8TemConteudo(_port8Quiz.cap)) _port8Quiz.cap = 1;
  _port8BuildCapRow('port8-quiz-cap-row', _port8Quiz.cap, 'port8QuizSelectCap');
  port8QuizStart();
}

function port8QuizSelectCap(cap, btn) {
  if (!_port8TemConteudo(cap)) return;
  _port8SetActiveCapBtn('port8-quiz-cap-row', btn, cap);
  _port8Quiz.cap = cap;
  port8QuizStart();
}

function port8QuizStart() {
  _port8Quiz.lives = 3; _port8Quiz.streak = 0; _port8Quiz.maxStreak = 0;
  _port8Quiz.score = 0; _port8Quiz.total = 0; _port8Quiz.answered = false;
  port8QuizNext();
}

function port8QuizNext() {
  var app = document.getElementById('port8-quiz-app');
  if (!app) return;
  if (_port8Quiz.lives <= 0) { port8QuizGameOver(app); return; }
  var ex = _port8BuildMcQuestion(_port8Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _port8Quiz.current = ex; _port8Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _port8Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="port8qopt-' + idx + '" onclick="port8QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_port8Quiz.streak > 1 ? '🔥 ' + _port8Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _port8Quiz.score + ' / ' + _port8Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="port8-quiz-fb" style="min-height:2.5rem"></div>';
}

function port8QuizAnswer(idx) {
  if (_port8Quiz.answered) return;
  _port8Quiz.answered = true;
  var ex = _port8Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _port8Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('port8qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('port8-quiz-fb');
  if (correct) {
    _port8Quiz.score++; _port8Quiz.streak++;
    if (_port8Quiz.streak > _port8Quiz.maxStreak) _port8Quiz.maxStreak = _port8Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _port8Quiz.lives--; _port8Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  port8SaveProgress(_port8Quiz.cap, correct);
  setTimeout(function(){ port8QuizNext(); }, 1400);
}

function port8QuizGameOver(app) {
  var pct = _port8Quiz.total > 0 ? Math.round(_port8Quiz.score / _port8Quiz.total * 100) : 0;
  _port8PM(_port8Quiz.cap, 'quiz', { pontuacao: _port8Quiz.score, total: _port8Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _port8Quiz.score + ' certas em ' + _port8Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_port8Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="port8QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _port8Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function port8FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_port8Cards[_port8Fc.cap] && _port8Cards[_port8Fc.cap].length)) {
    for (var c = 1; c <= _port8CapMeta.length; c++) { if (_port8Cards[c] && _port8Cards[c].length) { _port8Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('port8-fc-cap-row');
  if (row) {
    var h = '';
    _port8CapMeta.forEach(function(m) {
      var has = !!(_port8Cards[m.n] && _port8Cards[m.n].length);
      var color = _port8CapColors[m.n] || '#516860';
      var isActive = _port8Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('port8FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  port8FcSelectCap(_port8Fc.cap, null);
}

function port8FcSelectCap(cap, btn) {
  if (!(_port8Cards[cap] && _port8Cards[cap].length)) return;
  if (btn) _port8SetActiveCapBtn('port8-fc-cap-row', btn, cap);
  _port8Fc.cap = cap;
  _port8Fc.cards = _port8Cards[cap].slice();
  _port8Fc.idx = 0; _port8Fc.flipped = false;
  _port8PM(cap, 'flashcard');
  port8FcRender();
}

function port8FcRender() {
  var app = document.getElementById('port8-fc-app');
  if (!app) return;
  var cards = _port8Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_port8Fc.idx];
  var color = _port8CapColors[_port8Fc.cap] || '#516860';
  var pct = Math.round((_port8Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_port8Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="port8FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_port8Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_port8Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="port8FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="port8FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="port8FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function port8FcFlip() { _port8Fc.flipped = !_port8Fc.flipped; port8FcRender(); }
function port8FcNext() { _port8Fc.idx = (_port8Fc.idx + 1) % (_port8Fc.cards.length || 1); _port8Fc.flipped = false; port8FcRender(); }
function port8FcPrev() { _port8Fc.idx = (_port8Fc.idx - 1 + (_port8Fc.cards.length || 1)) % (_port8Fc.cards.length || 1); _port8Fc.flipped = false; port8FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _port8Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function port8TesteBuildNav() {
  if (!_port8TemConteudo(_port8Teste.cap)) _port8Teste.cap = 1;
  _port8BuildCapRow('port8-teste-cap-row', _port8Teste.cap, 'port8TesteSelectCap');
  port8TesteRenderConfig();
}

function port8TesteSelectCap(cap, btn) {
  if (!_port8TemConteudo(cap)) return;
  _port8SetActiveCapBtn('port8-teste-cap-row', btn, cap);
  _port8Teste.cap = cap;
  port8TesteRenderConfig();
}

function port8TesteRenderConfig() {
  var app = document.getElementById('port8-teste-app');
  if (!app) return;
  if (_port8Teste.timer) { clearInterval(_port8Teste.timer); _port8Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="port8-teste-nivel">' +
            '<button class="gen-level-btn' + (_port8Teste.nivel==='facil'?' active':'') + '" onclick="port8TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_port8Teste.nivel==='medio'?' active':'') + '" onclick="port8TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_port8Teste.nivel==='dificil'?' active':'') + '" onclick="port8TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="port8-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="port8-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="port8TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function port8TesteSetNivel(nivel, btn) {
  _port8Teste.nivel = nivel;
  var grp = document.getElementById('port8-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function port8TesteStart() {
  var gen = _port8Gerador(_port8Teste.cap);
  var qtdEl = document.getElementById('port8-teste-qtd'), tempoEl = document.getElementById('port8-teste-tempo');
  _port8Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _port8Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var exs = [];
  if (gen) {
    var nTemas = _port8TemasCount[_port8Teste.cap] || 1;
    var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
    for (var i = 0; i < _port8Teste.qtd; i++) {
      var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port8Teste.nivel);
      if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
    }
  } else {
    // PT: teste sai do banco alargado do domínio
    exs = _port8FichaSlice(_port8FichaBanco(_port8Teste.cap), _port8Teste.qtd, _port8Teste.nivel);
  }
  if (!exs.length) return;
  _port8Teste.exs = exs; _port8Teste.answered = {}; _port8Teste.score = { correct: 0, total: 0 };
  _port8Teste.restante = _port8Teste.tempo;

  var app = document.getElementById('port8-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'port8TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="port8-teste-timer">' + _port8FmtTime(_port8Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="port8-teste-answered">0 / ' + _port8Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="port8TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="port8-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _port8Teste.timer = setInterval(function() {
    _port8Teste.restante--;
    var t = document.getElementById('port8-teste-timer');
    if (t) t.textContent = _port8FmtTime(_port8Teste.restante);
    if (_port8Teste.restante <= 0) port8TesteFinish();
  }, 1000);
}

function _port8FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function port8TesteCheck(qid, tipo, val, btn) {
  if (_port8Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _port8Teste.answered[qid] = true;
  if (r.correct) _port8Teste.score.correct++;
  _port8Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('port8-teste-answered');
  if (a) a.textContent = _port8Teste.score.total + ' / ' + _port8Teste.qtd;
  port8SaveProgress(_port8Teste.cap, r.correct);
  if (_port8Teste.score.total >= _port8Teste.qtd) setTimeout(port8TesteFinish, 600);
}

function port8TesteFinish() {
  if (_port8Teste.timer) { clearInterval(_port8Teste.timer); _port8Teste.timer = null; }
  var app = document.getElementById('port8-teste-app');
  if (!app) return;
  var total = _port8Teste.qtd;
  var correct = _port8Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _port8PM(_port8Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="port8TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (jogos de Português — pt-jogos.js)
   Quiz Contra o Tempo · Forca · Correspondência. Nada de jogos
   matemáticos (4 em linha, Sudoku…) — não fazem sentido em Português.
   ════════════════════════════════════════════════════════════════ */
function port8JogosInit() {
  (function(){ var pj=document.getElementById('port8p-jogos'); if(pj && !document.getElementById('port8-jogos-atr')){ var d=document.createElement('div'); d.id='port8-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('port8-jogos-atr',{curso:'port8',cursoNome:'Português 8.º',tipo:'jogo',nivel:'',caps:_port8CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
  if (typeof ptJogosRender === 'function') {
    if (typeof ptJogosConfig === 'function') {
      ptJogosConfig({
        appId: 'port8-jogos-app',
        fonte: function () {
          var out = [];
          [1, 2, 3, 4, 5].forEach(function (c) { out = out.concat(_port8FichaBanco(c)); });
          return out;
        },
        forca: PT8_FORCA
      });
    }
    ptJogosRender();
  } else {
    var app = document.getElementById('port8-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (pt-jogos.js não carregado).</p>';
  }
}

/* Termos da Forca/Sopa de Letras ao nível do 7.º ano. */
var PT8_FORCA = [
  { p: 'NARRADOR', dica: 'Entidade que conta a história num texto narrativo.' },
  { p: 'OMNISCIENTE', dica: 'Narrador que sabe tudo, até os pensamentos das personagens.' },
  { p: 'PROTAGONISTA', dica: 'A personagem principal de uma narrativa.' },
  { p: 'DIDASCALIA', dica: 'Indicação cénica no texto dramático (não é dita pelos atores).' },
  { p: 'MONOLOGO', dica: 'Quando uma personagem fala sozinha, em voz alta.' },
  { p: 'METAFORA', dica: 'Figura que identifica dois elementos sem palavra de ligação.' },
  { p: 'ANTITESE', dica: 'Figura que aproxima ideias de sentido oposto.' },
  { p: 'ALITERACAO', dica: 'Repetição de sons consonânticos («o rato roeu a rolha»).' },
  { p: 'CONJUNTIVO', dica: 'Modo verbal do desejo e da hipótese (que eu cante).' },
  { p: 'PASSIVA', dica: 'Frase em que o sujeito sofre a ação (foi lido por mim).' },
  { p: 'PREDICATIVO', dica: 'Função sintática ligada ao sujeito por verbo copulativo.' },
  { p: 'COMPLEMENTO', dica: 'Função que completa o sentido do verbo (direto, indireto, oblíquo).' },
  { p: 'SUBORDINADA', dica: 'Oração que depende de outra (a subordinante).' },
  { p: 'PARASSINTESE', dica: 'Formação de palavra com prefixo e sufixo ao mesmo tempo (entristecer).' },
  { p: 'AUTOBIOGRAFIA', dica: 'Texto em que a própria pessoa conta a sua vida.' },
  { p: 'REPORTAGEM', dica: 'Texto jornalístico que aprofunda um tema com factos e testemunhos.' },
  { p: 'ANNEFRANK', dica: 'Jovem judia cujo diário se estuda no 8.º ano.' },
  { p: 'TORGA', dica: 'Autor do conto «Natal» (Garrinchas).' },
  { p: 'AMADO', dica: 'Autor brasileiro de «O Gato Malhado e a Andorinha Sinhá».' },
  { p: 'ADAMASTOR', dica: 'Gigante de Os Lusíadas recriado no teatro de Sttau Monteiro.' }
];

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_port8_capN (gravado por port8SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _port8ProgGetCaps() {
  var out = [];
  var nCaps = _port8CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_port8_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function port8RenderProgresso() {
  var el = document.getElementById('port8-progresso-content');
  if (!el) return;
  var caps = _port8ProgGetCaps();
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
     + '<button onclick="port8ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 9.º ano)
  h += '<div style="background:var(--m9c1-base);border:1.5px solid var(--m9c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m9c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="port8ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 9.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('p8dom') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _port8CapMeta[c.cap - 1];
    var color = _port8CapColors[c.cap] || '#516860';
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
      var mp = _port8CapMeta[pior.cap - 1];
      var colorp = _port8CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="port8TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="port8ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function port8TreinarCap(cap) {
  _port8Prat.cap = cap;
  _port8Prat.st = 0;
  port8SwitchTab('exercicios', null);
}

function port8ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 9.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _port8CapMeta.length; cap++) { try { localStorage.removeItem('edupt_port8_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 9.º ano (m9cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('p8dom') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  port8RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 9.º ano limpo.', 'ok');
}

function port8ProgDownloadPDF() {
  var caps = _port8ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _port8CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Português 8.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-port8.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _port8gf = {
  caps: {},            // { cap: true } selecionados
  sts: {},             // { cap: { stIdx(1..n): true } } tópicos por capítulo; vazio = todos
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Tópicos (índices 1..n) escolhidos para um capítulo; null = todos.
function _port8gfStsSel(cap) {
  var sel = _port8gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves t do banco correspondentes aos tópicos escolhidos; null = todos.
function _port8gfTemasSel(cap) {
  var sts = _port8gfStsSel(cap);
  if (!sts) return null;
  var mapa = _port8SubtemaTemas[cap] || {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

// Constrói a lista de capítulos selecionáveis e, para cada capítulo
// selecionado, os chips dos tópicos (subtemas) — a dona pediu para poder
// gerar fichas só de um tópico (ex.: só Os Lusíadas, só Funções Sintáticas).
function port8FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('port8-fichas-atr','port8AtribuirFicha');
  var el = document.getElementById('port8-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com conteúdo
  var temAlgum = false;
  for (var k in _port8gf.caps) { if (_port8gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _port8CapMeta.forEach(function(m) {
    var hasGen = _port8TemConteudo(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _port8gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_port8gf.caps[m.n];
    var color = _port8CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port8gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // tópicos do capítulo selecionado
    if (sel) {
      var sts = _port8Subtemas[m.n] || [];
      if (sts.length) {
        var escolhidos = _port8gf.sts[m.n] || {};
        var algumSt = _port8gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Tópicos:</span>';
        h += '<button onclick="port8gfToggleSt(' + m.n + ',0,this)" style="' + _port8gfStStyle(!algumSt, color) + '">Todos</button>';
        sts.forEach(function (st, i) {
          var on = !!escolhidos[i + 1];
          h += '<button onclick="port8gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _port8gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

function _port8gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function port8gfToggleCap(cap, btn) {
  _port8gf.caps[cap] = !_port8gf.caps[cap];
  if (!_port8gf.caps[cap]) delete _port8gf.sts[cap]; // desmarcar cap limpa os tópicos
  port8FichasBuildNav(); // re-render para mostrar/esconder a linha de tópicos
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o tópico.
function port8gfToggleSt(cap, idx, btn) {
  if (idx === 0) {
    delete _port8gf.sts[cap];
  } else {
    if (!_port8gf.sts[cap]) _port8gf.sts[cap] = {};
    _port8gf.sts[cap][idx] = !_port8gf.sts[cap][idx];
    if (_port8gfStsSel(cap) === null) delete _port8gf.sts[cap]; // tudo desmarcado = todos
  }
  port8FichasBuildNav();
}

function port8gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _port8gf.tipos[t] = !_port8gf.tipos[t];
  btn.classList.toggle('active', _port8gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _port8gf.tipos[t] ? '✓' : '';
}

function port8gfSetDif(btn) {
  _port8gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('port8-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function port8gfSetQty(btn) {
  _port8gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('port8-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _port8gfExBloco(exs, startNum) {
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

function _port8gfGenExs(cap, n) {
  var gen = _port8Gerador(cap);
  if (!gen) {
    // PT: a ficha vem toda do banco alargado (domínio + módulos realojados),
    // restringido aos tópicos escolhidos (se a dona/aluno escolheu algum)
    var pool = _port8FichaBanco(cap);
    var temasSel = _port8gfTemasSel(cap);
    if (temasSel) {
      var filtrado = pool.filter(function (q) { return temasSel.indexOf(q.t) !== -1; });
      if (filtrado.length) pool = filtrado;
    }
    return _port8FichaSlice(pool, n, _port8gf.dif);
  }
  var nTemas = _port8TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port8gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _port8Banco !== 'undefined' && _port8Banco[cap]) ? _port8Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _port8gf.dif);
  }
  return geradas;
}

function port8gfGerar(formato) {
  // capítulos selecionados (conta o banco alargado — em PT não há geradores)
  var capsSel = [];
  _port8CapMeta.forEach(function(m) { if (_port8gf.caps[m.n] && (_port8Gerador(m.n) || _port8FichaBanco(m.n).length)) capsSel.push(m.n); });
  var status = document.getElementById('port8-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _port8gf.tipos.resumo || _port8gf.tipos.exercicios || _port8gf.tipos.teste || _port8gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_port8gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _port8PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _port8CapMeta[cap - 1];
    var color = _port8CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards), restringido aos tópicos escolhidos
    // quando o filtro apanha cartões suficientes (senão mostra o domínio todo)
    if (_port8gf.tipos.resumo) {
      var cards = _port8Cards[cap] || [];
      var stsR = _port8gfStsSel(cap);
      if (stsR && cards.length) {
        var palavras = [];
        stsR.forEach(function (i) {
          String((_port8Subtemas[cap] || [])[i - 1] || '').toLowerCase().split(/\s+/).forEach(function (w) {
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
    if (_port8gf.tipos.exercicios) {
      var exs = _port8gfGenExs(cap, _port8gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _port8gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_port8gf.tipos.teste) {
      var exsT = _port8gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _port8gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_port8gf.tipos.minitestes) {
      var subt = _port8Subtemas[cap] || [];
      var mapa = _port8SubtemaTemas[cap] || {};
      var genM = _port8Gerador(cap);
      var bancoM = genM ? null : _port8FichaBanco(cap); // PT: sem gerador, usa o banco alargado
      var stsSelM = _port8gfStsSel(cap); // só minitestes dos tópicos escolhidos
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        if (stsSelM && stsSelM.indexOf(si + 1) === -1) return;
        var temas = mapa[si + 1] || [String(si + 1)];
        var exsM = [];
        if (genM) {
          for (var q = 0; q < 4; q++) {
            var tema = temas[q % temas.length];
            var ex = genM(tema, (q % 2 === 0) ? 'mc' : 'fill', _port8gf.dif);
            if (ex) exsM.push(ex);
          }
        } else {
          var poolM = bancoM.filter(function (qb) { return temas.indexOf(qb.t) !== -1; });
          if (!poolM.length) poolM = bancoM;
          exsM = _port8FichaSlice(poolM, 4, _port8gf.dif);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _port8gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_port8gf.tipos.solucoes && solucoes.length) {
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
    var nome = _port8CapMeta[c - 1].label;
    var sts = _port8gfStsSel(c);
    if (sts) {
      var nomes = sts.map(function (i) { return (_port8Subtemas[c] || [])[i - 1] || ''; }).filter(function (x) { return x; });
      if (nomes.length) nome += ' (' + nomes.join(', ') + ')';
    }
    return nome;
  }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Português 8.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _port8CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('9', 'portugues', _temasNomes, formato) : ('ficha-port8.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _port8Init() {
  // arranca na tab Teoria com o cap 1 selecionado
  port8BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _port8Init);
else _port8Init();

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
var _port8Banco = {
  // ── Domínio 1 · Educação Literária ──
  1: [
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «O Gato Malhado e a Andorinha Sinhá», de Jorge Amado, a Andorinha não foge do Gato porque:', opcoes: ['não é cobarde e está num local seguro, de onde pode voar', 'é amiga antiga do Gato', 'não percebe o perigo', 'é mais forte do que o Gato'], resposta: 'não é cobarde e está num local seguro, de onde pode voar', expl: 'Ao contrário dos outros animais, a Andorinha não tem medo: está num local alto e pode sempre voar.', tema: 'T1 · Narrativa' },
    { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «O Gato Malhado e a Andorinha Sinhá», o Gato reage à Andorinha com sentimentos contraditórios porque:', opcoes: ['ri-se da ousadia dela, mas sente-se ofendido por ela o achar feio', 'fica logo apaixonado', 'decide atacá-la', 'foge com medo'], resposta: 'ri-se da ousadia dela, mas sente-se ofendido por ela o achar feio', expl: 'Diverte-se com a forma destemida como ela fala, mas ofende-se por ela o considerar feio quando ele se julgava bonito.', tema: 'T1 · Narrativa' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'No conto «Natal», de Miguel Torga, o Garrinchas critica as pessoas porque:', opcoes: ['são insensíveis e não têm piedade da sua miséria', 'são demasiado generosas', 'lhe dão sempre esmola', 'o convidam para o Natal'], resposta: 'são insensíveis e não têm piedade da sua miséria', expl: 'Garrinchas considera os habitantes insensíveis: não têm pena da sua miséria nem da fome que passará.', tema: 'T1 · Narrativa' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «O Diário de Anne Frank», Anne trata o diário como:', opcoes: ['uma verdadeira amiga, a quem chama «Kitty»', 'um simples caderno escolar', 'um livro de receitas', 'um documento oficial'], resposta: 'uma verdadeira amiga, a quem chama «Kitty»', expl: 'Para Anne, o diário não é só um caderno: é uma amiga a quem confia tudo e a quem deu o nome de Kitty.', tema: 'T1 · Narrativa' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «O Diário de Anne Frank», quando está com os amigos, Anne sente que:', opcoes: ['se diverte, mas não consegue criar laços profundos com eles', 'é a mais popular do grupo', 'não gosta de nenhum deles', 'prefere estar sozinha sempre'], resposta: 'se diverte, mas não consegue criar laços profundos com eles', expl: 'Diverte-se e fala de coisas triviais, mas sente que não consegue confiar verdadeiramente nem ser próxima dos amigos.', tema: 'T1 · Narrativa' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Um narrador que conta a história na 3.ª pessoa e sabe tudo, incluindo os pensamentos das personagens, é:', opcoes: ['não participante e omnisciente', 'participante', 'de ciência limitada', 'uma personagem'], resposta: 'não participante e omnisciente', expl: 'Omnisciente = «que sabe tudo»: acede ao interior de todas as personagens e a factos que elas desconhecem.', tema: 'T1 · Narrativa' },
    { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Uma personagem REDONDA distingue-se de uma personagem plana porque:', opcoes: ['é complexa e evolui ao longo da narrativa', 'aparece poucas vezes', 'só serve de cenário', 'nunca fala'], resposta: 'é complexa e evolui ao longo da narrativa', expl: 'A personagem redonda tem profundidade psicológica e muda; a plana é simples e mantém-se igual.', tema: 'T1 · Narrativa' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'No texto dramático «Aquilo que os Olhos Veem ou O Adamastor», a discussão entre o Capitão e o Mestre João sobre Manuel é se ele é:', opcoes: ['um degredado abandonado ou um sobrevivente do naufrágio', 'um marinheiro experiente ou um grumete', 'um nobre ou um pirata', 'um vivo ou um fantasma'], resposta: 'um degredado abandonado ou um sobrevivente do naufrágio', expl: 'O Capitão acha-o um degredado deixado na costa; o Mestre João, um sobrevivente do naufrágio no Cabo das Tormentas.', tema: 'T2 · Texto dramático' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'No texto dramático, as falas que orientam a representação (movimentos, tom, cenário) e não são ditas pelos atores chamam-se:', opcoes: ['didascálias', 'apartes', 'monólogos', 'réplicas'], resposta: 'didascálias', expl: 'As didascálias (em itálico/parênteses) são as indicações cénicas: orientam a encenação.', tema: 'T2 · Texto dramático' },
    { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Quando uma personagem fala sozinha em voz alta, expondo os seus pensamentos, trata-se de um:', opcoes: ['monólogo', 'aparte', 'diálogo', 'narrador'], resposta: 'monólogo', expl: 'Monólogo = fala a solo; o aparte é uma fala ao público que as outras personagens «não ouvem».', tema: 'T2 · Texto dramático' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'A «voz» que exprime emoções e ideias num poema chama-se:', opcoes: ['sujeito poético', 'poeta', 'narrador', 'declamador'], resposta: 'sujeito poético', expl: 'O sujeito poético é a entidade criada no texto: não se confunde com o poeta, a pessoa real.', tema: 'T3 · Poesia' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Uma quadra é uma estrofe de:', opcoes: ['quatro versos', 'dois versos', 'seis versos', 'oito versos'], resposta: 'quatro versos', expl: '2 = dístico; 3 = terceto; 4 = quadra; 6 = sextilha; 8 = oitava.', tema: 'T3 · Poesia' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'O Adamastor, recriado no teatro de Sttau Monteiro, é uma figura que vem da epopeia:', opcoes: ['Os Lusíadas, de Luís de Camões', 'a Odisseia, de Homero', 'a Eneida, de Virgílio', 'a Mensagem, de Pessoa'], resposta: 'Os Lusíadas, de Luís de Camões', expl: 'O gigante Adamastor, símbolo dos perigos do mar, aparece no Canto V de Os Lusíadas: base do texto dramático.', tema: 'T4 · Texto épico' },
    { t: '4', tipo: 'mc', dif: 'dificil', enun: 'Na epopeia, o Adamastor personifica, sobretudo:', opcoes: ['os perigos do mar desconhecido e o medo da viagem', 'o amor entre os marinheiros', 'a riqueza da Índia', 'a paz após a tempestade'], resposta: 'os perigos do mar desconhecido e o medo da viagem', expl: 'O gigante do Cabo das Tormentas representa os obstáculos e o medo da expansão marítima.', tema: 'T4 · Texto épico' }
  ],
  // ── Domínio 2 · Gramática ──
  2: [
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Em «As florestas são vitais para a vida no planeta.», «vitais para a vida no planeta» desempenha a função de:', opcoes: ['predicativo do sujeito', 'complemento direto', 'complemento oblíquo', 'modificador'], resposta: 'predicativo do sujeito', expl: '«Ser» é copulativo, liga o sujeito à qualidade: predicativo do sujeito.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «As florestas ocupam cerca de 30% da superfície terrestre.», «cerca de 30% da superfície terrestre» é:', opcoes: ['complemento direto', 'complemento indireto', 'complemento oblíquo', 'predicativo do sujeito'], resposta: 'complemento direto', expl: 'Ocupam o quê?, responde sem preposição: complemento direto.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «As pessoas atribuem muita importância às florestas.», «às florestas» é:', opcoes: ['complemento indireto', 'complemento direto', 'complemento oblíquo', 'modificador'], resposta: 'complemento indireto', expl: 'Atribuem a quê/a quem?, com preposição «a», substituível por «lhes»: complemento indireto.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Consideram o filme uma obra-prima.», «uma obra-prima» desempenha a função de:', opcoes: ['predicativo do complemento direto', 'complemento direto', 'predicativo do sujeito', 'modificador do nome'], resposta: 'predicativo do complemento direto', expl: 'Com «considerar», a qualidade atribuída ao CD «o filme» é predicativo do complemento direto.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «O Rui, meu vizinho, ganhou o prémio.», «meu vizinho» é:', opcoes: ['modificador do nome apositivo', 'modificador do nome restritivo', 'predicativo do sujeito', 'complemento direto'], resposta: 'modificador do nome apositivo', expl: 'Entre vírgulas, acrescenta informação sem restringir «o Rui»: modificador apositivo.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «O aluno que estudou teve boa nota.», «que estudou» é:', opcoes: ['modificador do nome restritivo', 'modificador do nome apositivo', 'complemento direto', 'predicativo'], resposta: 'modificador do nome restritivo', expl: 'Sem vírgulas, restringe «o aluno» (qual aluno? o que estudou): restritivo.', tema: 'T2 · Funções Sintáticas' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'A frase passiva de «Os alunos organizaram a visita.» é:', opcoes: ['«A visita foi organizada pelos alunos.»', '«A visita organizou os alunos.»', '«Os alunos foram organizados pela visita.»', '«A visita tinha organizado os alunos.»'], resposta: '«A visita foi organizada pelos alunos.»', expl: 'O CD «a visita» passa a sujeito; quem organiza vem com «por»: complemento agente da passiva.', tema: 'T3 · Orações' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Mal cheguei à livraria, comprei o livro.», a oração «Mal cheguei à livraria» é subordinada adverbial:', opcoes: ['temporal', 'causal', 'final', 'condicional'], resposta: 'temporal', expl: '«Mal» = «assim que»: introduz uma oração temporal.', tema: 'T3 · Orações' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Fui à livraria a fim de conhecer o meu escritor preferido.», a oração subordinada é adverbial:', opcoes: ['final', 'causal', 'temporal', 'condicional'], resposta: 'final', expl: '«A fim de» exprime a finalidade/objetivo: adverbial final.', tema: 'T3 · Orações' },
    { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Disse que tinham tido sorte.», a oração «que tinham tido sorte» é subordinada:', opcoes: ['substantiva completiva', 'adjetiva relativa restritiva', 'adverbial causal', 'adjetiva relativa explicativa'], resposta: 'substantiva completiva', expl: 'Completa o sentido do verbo «dizer» (disse o quê?): substantiva completiva.', tema: 'T3 · Orações' },
    { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Os marinheiros, que eram homens fortes, enfrentaram a tempestade.», a oração entre vírgulas é subordinada adjetiva relativa:', opcoes: ['explicativa', 'restritiva', 'substantiva', 'adverbial'], resposta: 'explicativa', expl: 'Entre vírgulas, acrescenta informação sem restringir: relativa explicativa.', tema: 'T3 · Orações' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'Completa no conjuntivo: «Espero que tu ___ a tempo.» (verbo conseguir)', opcoes: ['consigas', 'consegues', 'conseguirás', 'conseguias'], resposta: 'consigas', expl: '«Espero que» pede o presente do conjuntivo: consigas.', tema: 'T4 · Modos Verbais' },
    { t: '4', tipo: 'mc', dif: 'dificil', enun: 'Completa: «Se eles ___ cedo, apanham o comboio.» (verbo sair, futuro do conjuntivo)', opcoes: ['saírem', 'saem', 'sairão', 'saíram'], resposta: 'saírem', expl: '«Se» (futuro) + futuro do conjuntivo: saírem.', tema: 'T4 · Modos Verbais' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'No discurso indireto, « — Já terminei o trabalho: disse a Ana.» fica:', opcoes: ['«A Ana disse que já tinha terminado o trabalho.»', '«A Ana disse que já termina o trabalho.»', '«A Ana disse que já terminarei o trabalho.»', '«A Ana disse: já terminei o trabalho.»'], resposta: '«A Ana disse que já tinha terminado o trabalho.»', expl: 'Pretérito perfeito («terminei») → mais-que-perfeito composto («tinha terminado») no discurso indireto.', tema: 'T4 · Modos Verbais' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Aquele aluno é muito aplicado.», a palavra «Aquele» é:', opcoes: ['determinante demonstrativo', 'pronome demonstrativo', 'advérbio', 'quantificador'], resposta: 'determinante demonstrativo', expl: 'Acompanha o nome «aluno»: determinante demonstrativo (se estivesse só, seria pronome).', tema: 'T1 · Classes de Palavras' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «Efetivamente, ela tinha razão.», «efetivamente» é um advérbio de:', opcoes: ['afirmação', 'negação', 'modo', 'quantidade'], resposta: 'afirmação', expl: '«Efetivamente» confirma/afirma: advérbio de afirmação.', tema: 'T1 · Classes de Palavras' },
    { t: '5', tipo: 'mc', dif: 'dificil', enun: 'A palavra «entristecer» forma-se por:', opcoes: ['parassíntese (prefixo e sufixo em simultâneo)', 'derivação por sufixação', 'derivação por prefixação', 'composição'], resposta: 'parassíntese (prefixo e sufixo em simultâneo)', expl: 'en- + triste + -ecer ao mesmo tempo, não existe «entriste» nem «tristecer»: parassíntese.', tema: 'T5 · Léxico e Variação' },
    { t: '5', tipo: 'mc', dif: 'medio', enun: 'A palavra «pluvioso» (de pluvi- + -oso) forma-se por:', opcoes: ['composição por radicais', 'composição por palavras', 'derivação por prefixação', 'parassíntese'], resposta: 'composição por radicais', expl: 'Junta radicais de origem latina/grega (pluvi-): composição morfológica por radicais.', tema: 'T5 · Léxico e Variação' },
    { t: '5', tipo: 'mc', dif: 'facil', enun: '«Guarda-chuva» é uma palavra formada por:', opcoes: ['composição por palavras', 'derivação por sufixação', 'parassíntese', 'derivação por prefixação'], resposta: 'composição por palavras', expl: 'Junta palavras inteiras (guarda + chuva): composição morfossintática.', tema: 'T5 · Léxico e Variação' }
  ],
  // ── Domínio 3 · Leitura ──
  3: [
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Uma reportagem distingue-se de uma notícia porque:', opcoes: ['aprofunda o tema com factos, testemunhos e dados', 'é sempre mais curta', 'não tem título', 'só apresenta opiniões'], resposta: 'aprofunda o tema com factos, testemunhos e dados', expl: 'A reportagem desenvolve o assunto em profundidade; a notícia limita-se ao essencial.', tema: 'T2 · Tipologias' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Um texto em que a própria pessoa conta a sua vida na 1.ª pessoa é:', opcoes: ['autobiográfico', 'biográfico', 'publicitário', 'dramático'], resposta: 'autobiográfico', expl: 'Autobiografia/diário/memórias = a própria pessoa narra a sua vida (1.ª pessoa); biografia = outra pessoa narra (3.ª).', tema: 'T2 · Tipologias' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'O texto jornalístico que informa de forma objetiva sobre um acontecimento recente é:', opcoes: ['a notícia', 'o poema', 'o conto', 'a fábula'], resposta: 'a notícia', expl: 'A notícia responde a quem/o quê/quando/onde/como/porquê, com objetividade.', tema: 'T2 · Tipologias' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'A afirmação «O filme estreou em 2020» é:', opcoes: ['um facto (verificável)', 'uma opinião', 'uma metáfora', 'uma inferência'], resposta: 'um facto (verificável)', expl: 'Pode ser comprovado: é um facto, ao contrário de uma opinião («é um filme brilhante»).', tema: 'T3 · Sentidos' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «O mar engoliu o barco», a palavra «engoliu» tem sentido:', opcoes: ['conotativo (figurado)', 'denotativo (literal)', 'técnico', 'científico'], resposta: 'conotativo (figurado)', expl: 'O mar não «engole» literalmente, é sentido figurado: afundou o barco.', tema: 'T3 · Sentidos' },
    { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Lê: «Fechou o livro devagar, ficou a olhar a parede e deixou escapar um suspiro fundo.» Pode inferir-se que a personagem:', opcoes: ['ficou tocada/pensativa com o que leu', 'detestou o livro', 'estava com pressa', 'adormeceu a ler'], resposta: 'ficou tocada/pensativa com o que leu', expl: 'Fechar devagar, olhar a parede e suspirar são pistas de emoção e reflexão: inferência apoiada no texto.', tema: 'T1 · Compreensão' },
    { t: '1', tipo: 'vf', dif: 'facil', enun: 'Inferir é concluir informação que o texto sugere mas não diz explicitamente.', resposta: 'V', expl: 'É «ler nas entrelinhas»: juntar pistas para chegar a uma conclusão.', tema: 'T1 · Compreensão' }
  ],
  // ── Domínio 4 · Escrita ──
  4: [
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Um bom resumo deve:', opcoes: ['manter as ideias principais, por palavras próprias e sem opiniões', 'copiar as frases mais importantes', 'acrescentar a opinião de quem resume', 'ser maior que o original'], resposta: 'manter as ideias principais, por palavras próprias e sem opiniões', expl: 'Resumir é condensar com fidelidade, por palavras nossas e sem comentários pessoais.', tema: 'T3 · Resumo' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'A estrutura típica de um texto narrativo é:', opcoes: ['situação inicial → desenvolvimento → ponto culminante → desenlace', 'tese → argumentos → conclusão', 'título → resumo → índice', 'introdução → bibliografia'], resposta: 'situação inicial → desenvolvimento → ponto culminante → desenlace', expl: 'A narrativa apresenta, complica (peripécias), chega ao clímax e resolve (desenlace).', tema: 'T1 · Texto narrativo' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Num texto de opinião, refutar um contra-argumento significa:', opcoes: ['apresentá-lo e mostrar porque não invalida a tua tese', 'ignorá-lo', 'aceitá-lo e mudar de opinião', 'repeti-lo várias vezes'], resposta: 'apresentá-lo e mostrar porque não invalida a tua tese', expl: 'Refutar é reconhecer a objeção e desmontá-la com razões: torna a argumentação mais forte.', tema: 'T2 · Texto de opinião' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'O conector mais adequado para introduzir uma conclusão é:', opcoes: ['portanto', 'porque', 'embora', 'por exemplo'], resposta: 'portanto', expl: '«Portanto», «em suma», «assim» introduzem conclusões.', tema: 'T2 · Texto de opinião' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Qual das frases evita a repetição em «O autor escreveu o livro. O autor lançou o livro.»?', opcoes: ['«O autor escreveu o livro e lançou-o.»', '«O autor escreveu o livro. O autor lançou o livro.»', '«O livro foi escrito. O livro foi lançado.»', '«Escreveu. Lançou.»'], resposta: '«O autor escreveu o livro e lançou-o.»', expl: 'A coordenação e o pronome «o» eliminam as repetições: coesão.', tema: 'T1 · Texto narrativo' },
    { t: '2', tipo: 'vf', dif: 'facil', enun: 'Antes de escrever um texto de opinião, deve fazer-se um plano com a tese, os argumentos e os exemplos.', resposta: 'V', expl: 'Planificar organiza as ideias e evita fugas ao tema e repetições.', tema: 'T2 · Texto de opinião' }
  ],
  // ── Domínio 5 · Recursos Expressivos ──
  5: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «os teus olhos são duas estrelas», a figura de estilo é:', opcoes: ['metáfora', 'comparação', 'hipérbole', 'aliteração'], resposta: 'metáfora', expl: 'Identifica olhos e estrelas SEM palavra de ligação: metáfora.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «a cidade adormeceu», a figura de estilo é:', opcoes: ['personificação', 'comparação', 'metáfora', 'enumeração'], resposta: 'personificação', expl: 'Adormecer é próprio de seres vivos: atribuído à cidade, é personificação.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «o amor é fogo que arde sem se ver» (Camões), aproximam-se ideias opostas (arder/não se ver). A figura é:', opcoes: ['antítese', 'anáfora', 'comparação', 'onomatopeia'], resposta: 'antítese', expl: 'Confronta opostos (arde/não se vê): antítese.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «morria de rir», a figura de estilo é:', opcoes: ['hipérbole', 'comparação', 'metáfora', 'antítese'], resposta: 'hipérbole', expl: 'Exagero intencional para dar ênfase: hipérbole.', tema: 'T1 · Figuras' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'A repetição de sons consonânticos em «o rato roeu a rolha» é:', opcoes: ['aliteração', 'anáfora', 'onomatopeia', 'enumeração'], resposta: 'aliteração', expl: 'Repetição do som «r» para musicalidade: aliteração.', tema: 'T2 · Recursos' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: '«Tique-taque» e «zás» são exemplos de:', opcoes: ['onomatopeias', 'metáforas', 'comparações', 'antíteses'], resposta: 'onomatopeias', expl: 'Imitam sons reais: onomatopeias.', tema: 'T2 · Recursos' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Num poema com esquema rimático ABAB, a rima é:', opcoes: ['cruzada', 'emparelhada', 'interpolada', 'solta'], resposta: 'cruzada', expl: 'ABAB = versos rimam alternadamente: rima cruzada.', tema: 'T3 · Versificação' },
    { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Na contagem das sílabas métricas de um verso, conta-se:', opcoes: ['até à última sílaba tónica', 'todas as sílabas gramaticais', 'só as vogais', 'até à primeira vírgula'], resposta: 'até à última sílaba tónica', expl: 'A escansão para na última sílaba acentuada: as átonas finais não contam.', tema: 'T3 · Versificação' }
  ]
};

/* ════════════════════════════════════════════════════════════════
   REFORÇO · gramática e leitura do 8.º (manuais A Par e Passo 8 e
   O Mundo em Palavras 8), com respostas conferidas nas soluções.
   ════════════════════════════════════════════════════════════════ */
_port8Banco[2] = _port8Banco[2].concat([
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Eis o resultado!», a palavra «eis» é um advérbio de:', opcoes: ['designação', 'afirmação', 'negação', 'quantidade'], resposta: 'designação', expl: '«Eis» aponta/designa algo: advérbio de designação (como «efetivamente» é de afirmação).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «Somente dois alunos faltaram.», «somente» é um advérbio de:', opcoes: ['exclusão', 'inclusão', 'afirmação', 'modo'], resposta: 'exclusão', expl: '«Somente/apenas/só» excluem o resto: advérbio de exclusão; «também» é de inclusão.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Aqueles livros são meus. Estes não.», as palavras «Aqueles» e «Estes» são, respetivamente:', opcoes: ['determinante e pronome demonstrativos', 'dois determinantes', 'dois pronomes', 'pronome e determinante'], resposta: 'determinante e pronome demonstrativos', expl: '«Aqueles» acompanha «livros» (determinante); «Estes» está sozinho (pronome).', tema: 'T1 · Classes de Palavras' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Não fui à praia porque estava a chover.», a oração «porque estava a chover» é subordinada adverbial:', opcoes: ['causal', 'final', 'condicional', 'temporal'], resposta: 'causal', expl: '«Porque» introduz a causa: adverbial causal.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Lerei o livro, visto que já li os que tinha em casa.», a oração subordinada é adverbial:', opcoes: ['causal', 'final', 'temporal', 'concessiva'], resposta: 'causal', expl: '«Visto que» = «porque», introduz a causa: adverbial causal.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Estuda enquanto és novo.», a oração «enquanto és novo» é subordinada adverbial:', opcoes: ['temporal', 'causal', 'condicional', 'final'], resposta: 'temporal', expl: '«Enquanto» situa no tempo: adverbial temporal.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Perguntou se seria possível enfrentar a tormenta.», a oração «se seria possível enfrentar a tormenta» é subordinada:', opcoes: ['substantiva completiva', 'adjetiva relativa restritiva', 'adverbial condicional', 'adverbial causal'], resposta: 'substantiva completiva', expl: 'Completa o verbo «perguntar» (perguntou o quê?): substantiva completiva (interrogativa indireta).', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «A tempestade que os marinheiros enfrentaram foi terrível.», a oração «que os marinheiros enfrentaram» é subordinada adjetiva relativa:', opcoes: ['restritiva', 'explicativa', 'substantiva', 'adverbial'], resposta: 'restritiva', expl: 'Sem vírgulas, restringe «a tempestade»: relativa restritiva.', tema: 'T3 · Orações' },
  { t: '4', tipo: 'mc', dif: 'dificil', enun: 'Completa: «É possível que eles ___ a obra.» (verbo fazer, pretérito perfeito do conjuntivo)', opcoes: ['tenham feito', 'fizeram', 'fariam', 'fizessem'], resposta: 'tenham feito', expl: 'Ter no presente do conjuntivo + particípio = pretérito perfeito do conjuntivo: «tenham feito».', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Logo que tiverem saído, fecha a porta.», a forma «tiverem saído» está no:', opcoes: ['futuro composto do conjuntivo', 'pretérito perfeito do conjuntivo', 'condicional composto', 'futuro do indicativo'], resposta: 'futuro composto do conjuntivo', expl: 'Ter no futuro do conjuntivo + particípio = futuro composto do conjuntivo.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'O modo IMPERATIVO usa-se sobretudo para:', opcoes: ['dar ordens, conselhos ou instruções', 'exprimir factos certos', 'exprimir desejos e hipóteses', 'falar do passado'], resposta: 'dar ordens, conselhos ou instruções', expl: 'O imperativo serve para ordenar/aconselhar: «Estuda!», «Tem cuidado.»', tema: 'T4 · Modos Verbais' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'A palavra «infelizmente» forma-se por:', opcoes: ['dupla derivação (prefixo in- e sufixo -mente)', 'composição por palavras', 'composição por radicais', 'parassíntese'], resposta: 'dupla derivação (prefixo in- e sufixo -mente)', expl: 'feliz → infeliz (prefixação) → infelizmente (sufixação): dupla derivação.', tema: 'T5 · Léxico e Variação' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «O livro foi lido pelos alunos.», «pelos alunos» desempenha a função de:', opcoes: ['complemento agente da passiva', 'complemento oblíquo', 'sujeito', 'modificador'], resposta: 'complemento agente da passiva', expl: 'Frase passiva, quem pratica a ação vem com «por»: complemento agente da passiva.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Ontem, à tarde, li no jardim.», a expressão «no jardim» é:', opcoes: ['modificador do grupo verbal', 'complemento oblíquo', 'complemento direto', 'predicativo'], resposta: 'modificador do grupo verbal', expl: 'Indica o lugar, não é exigido pelo verbo «ler» e pode ser retirado: modificador do grupo verbal.', tema: 'T2 · Funções Sintáticas' }
]);

_port8Banco[3] = _port8Banco[3].concat([
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'Numa entrevista, o texto organiza-se em:', opcoes: ['perguntas e respostas', 'estrofes e versos', 'atos e cenas', 'capítulos numerados'], resposta: 'perguntas e respostas', expl: 'A entrevista alterna as perguntas do entrevistador com as respostas do entrevistado.', tema: 'T2 · Tipologias' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'A afirmação «Esta é, sem dúvida, a melhor série do ano» é:', opcoes: ['uma opinião', 'um facto verificável', 'uma data', 'uma citação'], resposta: 'uma opinião', expl: '«A melhor» é um juízo de valor subjetivo: opinião, não facto.', tema: 'T3 · Sentidos' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'O título, o lead (primeiro parágrafo) e o corpo são partes:', opcoes: ['da notícia', 'do poema', 'da didascália', 'da quadra'], resposta: 'da notícia', expl: 'A notícia tem título, lead (resume o essencial) e corpo (desenvolve).', tema: 'T1 · Compreensão' }
]);

/* ════════════════════════════════════════════════════════════════
   REFORÇO 2 · gramática do 8.º (O Mundo em Palavras 8): predicativo
   do complemento direto, valores da palavra «que», quantificadores,
   pronomes pessoais e modos verbais. Frases baseadas nas fichas do
   manual, com a matemática gramatical validada.
   ════════════════════════════════════════════════════════════════ */
_port8Banco[2] = _port8Banco[2].concat([
  // Predicativo do complemento direto
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Os americanos consideram Neil Armstrong um herói.», «um herói» desempenha a função de:', opcoes: ['predicativo do complemento direto', 'complemento direto', 'predicativo do sujeito', 'modificador do nome'], resposta: 'predicativo do complemento direto', expl: 'Com «considerar», a qualidade atribuída ao CD «Neil Armstrong» é predicativo do complemento direto.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Muita gente elegeu a ida à Lua o maior feito da humanidade.», «o maior feito da humanidade» é:', opcoes: ['predicativo do complemento direto', 'complemento direto', 'sujeito', 'modificador'], resposta: 'predicativo do complemento direto', expl: 'Verbo «eleger» + CD «a ida à Lua» + qualidade atribuída a esse CD: predicativo do complemento direto.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'O predicativo do complemento direto surge com verbos como:', opcoes: ['considerar, achar, eleger, julgar', 'gostar, precisar, depender', 'ir, vir, chegar', 'ser, estar, parecer'], resposta: 'considerar, achar, eleger, julgar', expl: 'Estes verbos pedem um CD e uma qualidade atribuída a esse CD (PCD). Os copulativos (ser/estar/parecer) pedem predicativo do SUJEITO.', tema: 'T2 · Funções Sintáticas' },
  // Valores da palavra «que»
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Publicou o livro mais interessante que li.», a palavra «que» é:', opcoes: ['pronome relativo', 'conjunção completiva', 'determinante interrogativo', 'conjunção causal'], resposta: 'pronome relativo', expl: '«Que» retoma «o livro» e introduz a oração relativa: pronome relativo.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «A história era tão fascinante que li o livro pela noite dentro!», a palavra «que» é:', opcoes: ['conjunção subordinativa consecutiva', 'pronome relativo', 'conjunção completiva', 'determinante interrogativo'], resposta: 'conjunção subordinativa consecutiva', expl: '«Tão… que» exprime a consequência: conjunção consecutiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Sabias que a biblioteca tem 100 anos?», a palavra «que» é:', opcoes: ['conjunção subordinativa completiva', 'pronome relativo', 'conjunção causal', 'determinante interrogativo'], resposta: 'conjunção subordinativa completiva', expl: 'Introduz a oração que completa o verbo «saber» (sabias o quê?): conjunção completiva.', tema: 'T3 · Orações' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Que livro queres oferecer?», a palavra «Que» é:', opcoes: ['determinante interrogativo', 'pronome relativo', 'conjunção', 'advérbio'], resposta: 'determinante interrogativo', expl: 'Acompanha o nome «livro» numa pergunta: determinante interrogativo.', tema: 'T1 · Classes de Palavras' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Tenho de parar de ler, que amanhã acordo cedo!», a palavra «que» é uma conjunção subordinativa:', opcoes: ['causal', 'completiva', 'consecutiva', 'comparativa'], resposta: 'causal', expl: 'Aqui «que» = «porque», introduz a causa: conjunção causal.', tema: 'T3 · Orações' },
  // Quantificadores e pronomes
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Comprei três livros e li metade.», «três» e «metade» são quantificadores numerais, respetivamente:', opcoes: ['cardinal e fracionário', 'cardinal e multiplicativo', 'ordinal e cardinal', 'fracionário e cardinal'], resposta: 'cardinal e fracionário', expl: '«Três» indica quantidade exata (cardinal); «metade» exprime uma fração (fracionário).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «Vi-os na biblioteca.», o pronome «os» substitui:', opcoes: ['um complemento direto', 'um complemento indireto', 'o sujeito', 'um modificador'], resposta: 'um complemento direto', expl: 'Os pronomes o/a/os/as substituem o complemento direto; lhe/lhes substituem o indireto.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Na frase «O professor entregou-mo.», o pronome «mo» resulta da junção de:', opcoes: ['me + o (complemento indireto + complemento direto)', 'me + os', 'mo (pronome único)', 'meu + o'], resposta: 'me + o (complemento indireto + complemento direto)', expl: '«Entregou-me o livro» → entregou-mo: me (a mim, CI) + o (o livro, CD).', tema: 'T1 · Classes de Palavras' },
  // Modos verbais (indicativo/condicional/imperativo)
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Eu compraria esse livro se tivesse dinheiro.», a forma «compraria» está no:', opcoes: ['condicional', 'futuro do indicativo', 'pretérito imperfeito', 'presente do conjuntivo'], resposta: 'condicional', expl: 'O condicional exprime o que aconteceria sob uma condição: frequente em frases com «se + imperfeito do conjuntivo».', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'facil', enun: 'A frase «Lê com atenção e responde às perguntas.» tem os verbos no modo:', opcoes: ['imperativo', 'indicativo', 'conjuntivo', 'condicional'], resposta: 'imperativo', expl: '«Lê», «responde» dão instruções/ordens: modo imperativo.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Disseram que o filme estreará em breve.», «estreará» está no:', opcoes: ['futuro do indicativo', 'condicional', 'presente do conjuntivo', 'futuro do conjuntivo'], resposta: 'futuro do indicativo', expl: 'Exprime um facto futuro tido como certo: futuro do indicativo.', tema: 'T4 · Modos Verbais' }
]);


/* atribuir: deep-link port8 */
function _port8DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_port8gf){ _port8gf.caps={}; cs.forEach(function(n){ _port8gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _port8gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ port8SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ var jc=parseInt(p.get('cap'),10); if(jc&&_port8Prat) _port8Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ port8SwitchTab('jogos',null); var jg=p.get('jogo'); if(jg&&typeof ptJogoAbrir==='function')setTimeout(function(){try{ptJogoAbrir(jg);}catch(e){}},250); },350); return; }
    if(p.get('abrir')!=='praticar')return; if(p.get('tarefa')){_port8TarefaAtiva=p.get('tarefa');_port8TarefaResp={};} var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _port8Prat.cap=cap; _port8Prat.st=st; _port8Prat.nivel=nivel; setTimeout(function(){ port8SwitchTab('exercicios',null); if(typeof port8GerarExercicios==='function') port8GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_port8DeepLinkAuto,300);});else setTimeout(_port8DeepLinkAuto,300);

function port8AtribuirFicha(){
  var caps=[]; _port8CapMeta.forEach(function(m){ if(_port8gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('port8-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_port8CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'port8', cursoNome:'Português 8.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_port8gf.dif };
}

function port8EntregarTarefa(){
  if(!_port8TarefaAtiva||typeof Turmas==='undefined'||!Turmas.guardarResultado)return;
  var qids=Object.keys(_port8TarefaResp||{});
  if(!qids.length){alert('Responde a pelo menos uma pergunta antes de entregar.');return;}
  var certas=0,detalhe=[];
  qids.forEach(function(qid,i){ var ok=!!_port8TarefaResp[qid]; if(ok)certas++; var ex=_port8Prat.exs[i]||{}; detalhe.push({q:(ex.enun||ex.pergunta||('Pergunta '+(i+1))),certo:ok}); });
  Turmas.guardarResultado(_port8TarefaAtiva,certas,qids.length,detalhe).then(function(){
    if(typeof eduToast==='function')eduToast('Trabalho entregue! Acertaste '+certas+' de '+qids.length+'. \u2705','success'); else alert('Entregue! '+certas+'/'+qids.length);
    _port8TarefaAtiva=null; _port8TarefaResp={}; port8GerarExercicios();
  }).catch(function(e){alert(e.message||'Não foi possível entregar.');});
}
