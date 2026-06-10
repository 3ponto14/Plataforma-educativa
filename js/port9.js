/* ════════════════════════════════════════════════════════════════
   PORT9 HUB - Português 9.º ano (5 domínios) · ver MODELO BASE
   Modelo de HUB ÚNICO (ver MODELO BASE no CLAUDE.md). NUNCA páginas
   por capítulo. Tabs: Teoria · Praticar · Fichas · Progresso.
   Capítulos são botões de seleção; conteúdo renderizado por JS.
   ════════════════════════════════════════════════════════════════ */

// ═══ Domínios de Português do 9.º ano (Aprendizagens Essenciais) ═══
// Os "capítulos" do hub são os 5 DOMÍNIOS do programa.
var _port9CapMeta = [
  {n:1, icon:'<i class="ph ph-book-open-text"></i>', label:'Educação Literária'},
  {n:2, icon:'<i class="ph ph-text-aa"></i>',        label:'Gramática'},
  {n:3, icon:'<i class="ph ph-book-open"></i>',      label:'Leitura'},
  {n:4, icon:'<i class="ph ph-pencil-line"></i>',    label:'Escrita'},
  {n:5, icon:'<i class="ph ph-sparkle"></i>',        label:'Recursos Expressivos'}
];

// Cores por domínio (alinhadas com --p9cN-* do CSS)
var _port9CapColors = {
  1:'#8a5a3a', 2:'#5a72a0', 3:'#4d8f87', 4:'#9c5e80', 5:'#7f8a4d'
};

// Subtemas por domínio
var _port9Subtemas = {
  1: ['Auto da Barca do Inferno', 'Os Lusíadas', 'Contos', 'Poesia'],
  2: ['Classes de palavras', 'Funções sintáticas', 'Frase e orações', 'Tempos e modos verbais'],
  3: ['Compreensão de texto', 'Tipologias textuais', 'Sentidos do texto'],
  4: ['Texto de opinião', 'Texto narrativo', 'Texto expositivo'],
  5: ['Figuras de estilo', 'Recursos expressivos', 'Versificação']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (9.º ano) ═══
var _port9Cards = {
  // ── Domínio 1 · Educação Literária ──
  1: [
    { tag: 'Definição', q: 'O que é uma epopeia?', a: 'Uma longa narrativa em verso que celebra os feitos heroicos de um povo ou herói. Ex: Os Lusíadas, de Camões.' },
    { tag: 'Definição', q: 'O que é um auto (teatro vicentino)?', a: 'Uma peça curta de teatro, muitas vezes alegórica e satírica. O Auto da Barca do Inferno, de Gil Vicente, critica os vícios sociais através de figuras-tipo.' },
    { tag: 'Os Lusíadas', q: 'Quais são os planos de Os Lusíadas?', a: 'Plano da viagem (Vasco da Gama à Índia), plano da História de Portugal, plano mitológico (deuses do Olimpo) e plano do Poeta (reflexões de Camões).' },
    { tag: 'Os Lusíadas', q: 'O que é a Proposição?', a: 'A apresentação do tema da epopeia, no início (Canto I): «As armas e os barões assinalados…». Camões anuncia que vai cantar os feitos dos portugueses.' },
    { tag: 'Os Lusíadas', q: 'Episódios líricos centrais de Os Lusíadas?', a: 'Inês de Castro (amor e morte), o Adamastor (medo e profecia) e a Ilha dos Amores (recompensa dos heróis).' },
    { tag: 'Auto da Barca', q: 'Quem julga as almas no Auto da Barca do Inferno?', a: 'O Diabo (barca do Inferno) e o Anjo (barca do Paraíso). Cada figura — Fidalgo, Onzeneiro, Frade, Sapateiro… — é julgada pelos seus pecados.' },
    { tag: 'Conceito', q: 'O que é uma personagem-tipo (figura alegórica)?', a: 'Uma personagem que representa um grupo ou um vício/virtude, não um indivíduo. No Auto, o Onzeneiro representa a usura, o Frade a hipocrisia do clero.' },
    { tag: 'Conceito', q: 'O que é o sujeito poético?', a: 'A "voz" que fala no poema — não é o autor, mas a entidade que exprime emoções e ideias no texto lírico.' },
    { tag: 'Conceito', q: 'O que distingue texto narrativo de texto lírico?', a: 'O narrativo conta uma história (ação, personagens, narrador); o lírico exprime emoções e estados de alma do sujeito poético.' },
    { tag: 'Poesia', q: 'O que é uma estrofe e um verso?', a: 'O verso é cada linha do poema; a estrofe é um conjunto de versos. Ex: a oitava de Os Lusíadas tem 8 versos decassílabos.' },
    { tag: 'Poesia', q: 'O que é a rima?', a: 'A correspondência de sons no final dos versos. Pode ser emparelhada (aabb), cruzada (abab) ou interpolada (abba).' },
    { tag: 'Contexto', q: 'O que é o conto?', a: 'Uma narrativa curta, com poucas personagens e uma só ação central. Ex: «A Aia», de Eça de Queirós; «Um Dia Destes», de García Márquez.' }
  ],
  // ── Domínio 2 · Gramática ──
  2: [
    { tag: 'Definição', q: 'O que são classes de palavras?', a: 'Grupos em que se organizam as palavras: nome, verbo, adjetivo, advérbio, determinante, pronome, preposição, conjunção, quantificador, interjeição.' },
    { tag: 'Regra', q: 'Quais são as funções sintáticas principais?', a: 'Sujeito, predicado, complemento direto, complemento indireto, complemento oblíquo, predicativo do sujeito, modificador.' },
    { tag: 'Regra', q: 'Como identificar o sujeito?', a: 'É quem pratica ou de quem se diz a ação. Pergunta-se "quem?" antes do verbo. Pode ser simples, composto, nulo (subentendido) ou indeterminado.' },
    { tag: 'Regra', q: 'Complemento direto vs. indireto?', a: 'Direto: responde a "o quê?/quem?" sem preposição (Vi o filme). Indireto: responde a "a quem?" com preposição a (Dei o livro à Ana).' },
    { tag: 'Definição', q: 'O que é uma oração subordinada?', a: 'Uma oração que depende de outra (a subordinante). Ex: «Disse que vinha» — «que vinha» é subordinada substantiva completiva.' },
    { tag: 'Regra', q: 'Tipos de orações coordenadas?', a: 'Copulativas (e, nem), adversativas (mas, porém), disjuntivas (ou), conclusivas (logo, portanto) e explicativas (pois, que).' },
    { tag: 'Regra', q: 'Modos verbais?', a: 'Indicativo (factos: canto), conjuntivo (hipótese/desejo: que eu cante), condicional (cantaria), imperativo (canta!), infinitivo e gerúndio.' },
    { tag: 'Definição', q: 'O que é o discurso direto e indireto?', a: 'Direto: reproduz as palavras tal qual («— Vou já», disse). Indireto: integra-as na narração (Disse que ia já).' },
    { tag: 'Regra', q: 'Funções sintáticas a nível da palavra: modificador do nome?', a: 'O modificador acrescenta informação ao nome sem ser essencial. Restritivo (sem vírgulas) ou apositivo (entre vírgulas).' },
    { tag: 'Exemplo', q: 'Classifica "rapidamente" em "Correu rapidamente".', a: 'Advérbio de modo, com função de modificador do grupo verbal.' },
    { tag: 'Definição', q: 'O que é o predicativo do sujeito?', a: 'Atribui uma qualidade ou estado ao sujeito, através de um verbo copulativo (ser, estar, parecer). Ex: «A casa está limpa» — limpa é predicativo.' },
    { tag: 'Regra', q: 'Coesão e coerência: que diferença?', a: 'Coesão = ligações gramaticais e lexicais (conectores, pronomes). Coerência = sentido lógico global do texto. Ambas tornam o texto bem construído.' }
  ],
  // ── Domínio 3 · Leitura ──
  3: [
    { tag: 'Estratégia', q: 'Como abordar a compreensão de um texto?', a: '1) Lê o texto todo; 2) lê as perguntas; 3) procura no texto a informação; 4) responde com base no texto, citando quando pedido.' },
    { tag: 'Definição', q: 'O que é o tema de um texto?', a: 'O assunto central, aquilo de que o texto trata. Distingue-se da ideia principal (o que se afirma sobre o tema).' },
    { tag: 'Definição', q: 'Tipologias textuais?', a: 'Narrativo (conta), descritivo (caracteriza), argumentativo (defende uma tese), expositivo (informa) e dialogal (troca de falas).' },
    { tag: 'Estratégia', q: 'O que é inferir?', a: 'Deduzir informação que não está escrita explicitamente, mas que o texto deixa subentender. Ex: «Tremia e os olhos brilhavam» → estava emocionado.' },
    { tag: 'Definição', q: 'Sentido denotativo vs. conotativo?', a: 'Denotativo = sentido literal, de dicionário. Conotativo = sentido figurado, com valor afetivo ou simbólico. Ex: "noite" (escuridão / tristeza).' },
    { tag: 'Definição', q: 'O que é o narrador?', a: 'A entidade que conta a história. Pode ser participante (1.ª pessoa) ou não participante (3.ª pessoa); pode ter conhecimento total (omnisciente) ou parcial.' },
    { tag: 'Estratégia', q: 'Como justificar uma resposta com o texto?', a: 'Indica a passagem (cita ou refere) e explica como ela apoia a tua afirmação. "Como se lê em…, conclui-se que…".' },
    { tag: 'Definição', q: 'O que são marcas de subjetividade?', a: 'Palavras que revelam a opinião/emoção de quem escreve: adjetivos valorativos, advérbios, verbos de opinião (acho, penso), pontuação expressiva.' }
  ],
  // ── Domínio 4 · Escrita ──
  4: [
    { tag: 'Estrutura', q: 'Como se estrutura um texto de opinião?', a: 'Introdução (apresenta o tema e a tese), desenvolvimento (argumentos + exemplos), conclusão (reafirma a posição). 160–260 palavras no exame.' },
    { tag: 'Estrutura', q: 'Como se estrutura um texto narrativo?', a: 'Situação inicial → desenvolvimento (peripécias/conflito) → ponto culminante → desenlace. Com narrador, personagens, espaço e tempo.' },
    { tag: 'Estrutura', q: 'O que é um texto expositivo?', a: 'Apresenta e explica informação de forma objetiva e organizada. Introdução (tema), desenvolvimento (informação clara), conclusão (síntese).' },
    { tag: 'Estratégia', q: 'O que são conectores e para que servem?', a: 'Palavras que ligam ideias e dão coesão: de adição (além disso), de causa (porque), de oposição (contudo), de conclusão (portanto).' },
    { tag: 'Estratégia', q: 'Como construir um argumento forte?', a: 'Afirma a ideia, justifica-a com uma razão e ilustra com um exemplo concreto. Evita repetir só a tese sem a fundamentar.' },
    { tag: 'Regra', q: 'Cuidados de escrita avaliados no exame?', a: 'Tema e tipologia respeitados, estrutura clara, coesão (conectores), correção linguística (ortografia, pontuação, acordo) e número de palavras.' },
    { tag: 'Estratégia', q: 'Como planificar antes de escrever?', a: 'Faz um esquema rápido: tese/ideia central, 2–3 argumentos com exemplos, e como vais concluir. Poupa tempo e evita repetições.' },
    { tag: 'Exemplo', q: 'Frase de introdução de um texto de opinião?', a: '«Atualmente, discute-se muito se… Na minha perspetiva, …» — apresenta o tema e toma logo posição.' }
  ],
  // ── Domínio 5 · Recursos Expressivos ──
  5: [
    { tag: 'Figura', q: 'Comparação', a: 'Aproxima dois elementos através de uma palavra de ligação (como, tal como, semelhante a). Ex: «forte como um touro».' },
    { tag: 'Figura', q: 'Metáfora', a: 'Identifica dois elementos sem palavra de ligação, por semelhança. Ex: «és o sol da minha vida».' },
    { tag: 'Figura', q: 'Personificação', a: 'Atribui características humanas a seres não humanos. Ex: «o vento sussurrava segredos».' },
    { tag: 'Figura', q: 'Hipérbole', a: 'Exagero intencional para dar ênfase. Ex: «chorei rios de lágrimas».' },
    { tag: 'Figura', q: 'Antítese', a: 'Aproxima ideias ou palavras de sentido oposto. Ex: «o amor é fogo que arde sem se ver» (frio/calor).' },
    { tag: 'Figura', q: 'Anáfora', a: 'Repetição de uma palavra ou expressão no início de versos/frases. Ex: «Tudo no mundo… / Tudo o que vive…».' },
    { tag: 'Figura', q: 'Eufemismo', a: 'Suaviza uma ideia desagradável. Ex: «partiu» em vez de «morreu».' },
    { tag: 'Figura', q: 'Aliteração', a: 'Repetição de sons consonânticos para criar musicalidade. Ex: «o rato roeu a rolha».' },
    { tag: 'Figura', q: 'Ironia', a: 'Diz-se o contrário do que se quer dar a entender, com intenção crítica ou humorística.' },
    { tag: 'Figura', q: 'Enumeração', a: 'Sucessão de elementos (palavras ou expressões) para reforçar uma ideia. Ex: «Vim, vi, venci».' },
    { tag: 'Versificação', q: 'O que é a métrica?', a: 'A contagem das sílabas métricas de um verso. Decassílabo = 10 sílabas (como em Os Lusíadas); redondilha maior = 7 sílabas.' },
    { tag: 'Versificação', q: 'O que é a quadra e a oitava?', a: 'Quadra = estrofe de 4 versos. Oitava = estrofe de 8 versos (a forma de Os Lusíadas).' }
  ]
};

// Seleção atual por tab
var _port9Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function port9SwitchTab(tab, btn) {
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
  var panel = document.getElementById('port9p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Português 9.º · ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') port9BuildResumoNav();
  else if (tab === 'exercicios') port9BuildPraticarNav();
  else if (tab === 'quiz') port9QuizBuildNav();
  else if (tab === 'flashcards') port9FcBuildNav();
  else if (tab === 'teste') port9TesteBuildNav();
  else if (tab === 'jogos') port9JogosInit();
  else if (tab === 'fichas') port9FichasBuildNav();
  else if (tab === 'progresso') port9RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function port9OpenPraticar(modo) { port9SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function port9BuildResumoNav() {
  var capRow = document.getElementById('port9-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _port9Sel['resumo'] || 1;
  var h = '';
  _port9CapMeta.forEach(function(m) {
    var color = _port9CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port9ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  port9ResumoShowSts(activeCap);
  port9RenderResumoInline();
}

function port9ResumoSelectCap(cap, btn) {
  _port9Sel['resumo'] = cap;
  _port9Sel['resumo-st'] = 0;
  var capRow = document.getElementById('port9-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _port9CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  port9ResumoShowSts(cap);
  port9RenderResumoInline();
}

function port9ResumoShowSts(cap) {
  var stRow = document.getElementById('port9-resumo-st-row');
  if (!stRow) return;
  var sts = _port9Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_port9Sel['resumo-st'] || 0) === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port9ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port9ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('port9-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port9Sel['resumo'] = cap;
  _port9Sel['resumo-st'] = stIdx;
  port9RenderResumoInline();
}

function port9RenderResumoInline() {
  var cap = _port9Sel['resumo'] || 1;
  var dest = document.getElementById('port9-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _port9CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _port9Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _port9Sel['resumo-st'] || 0;
  var cards = allCards;
  if (stIdx > 0 && _port9Subtemas[cap]) {
    var stLabel = (_port9Subtemas[cap][stIdx - 1] || '').toLowerCase();
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

  _port9PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Português não tem geradores procedurais — a prática usa o _port9Banco.
// Só os caps com gerador são "praticáveis".
// Português não tem geradores procedurais (as perguntas são de análise/banco).
// _port9Gerador devolve sempre null → o hub usa apenas o _port9Banco.
function _port9Gerador(cap) {
  return null;
}
// Um domínio está "disponível" para prática se tiver questões no banco.
function _port9TemConteudo(cap) {
  return !!(_port9Banco[cap] && _port9Banco[cap].length);
}
// Nº de subtemas por domínio (espelha _port9Subtemas) — usado na seleção de prática.
var _port9TemasCount = { 1: 4, 2: 4, 3: 3, 4: 3, 5: 3 };

// Estado da prática
var _port9Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };

function _port9PratStorageKey(cap) { return 'edupt_port9_cap' + cap; }

function port9BuildPraticarNav() {
  var capRow = document.getElementById('port9-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _port9Prat.cap || 1;
  var h = '';
  _port9CapMeta.forEach(function(m) {
    var hasGen = _port9TemConteudo(m.n);
    var color = _port9CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'port9PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  port9PraticarShowSts(activeCap);
  port9GerarExercicios(); // renderiza logo o domínio ativo (módulo ou banco)
}

function port9PraticarShowSts(cap) {
  var stRow = document.getElementById('port9-praticar-st-row');
  if (!stRow) return;
  var sts = _port9Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_port9Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="port9PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_port9Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port9PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port9PraticarSelectCap(cap, btn) {
  if (!_port9TemConteudo(cap)) return;
  _port9Prat.cap = cap;
  _port9Prat.st = 0;
  var capRow = document.getElementById('port9-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _port9CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  port9PraticarShowSts(cap);
  port9GerarExercicios();
}

function port9PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('port9-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port9Prat.st = stIdx;
  port9GerarExercicios();
}

function port9PraticarSetNivel(nivel, btn) {
  _port9Prat.nivel = nivel;
  var grp = document.getElementById('port9-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  port9GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _port9SubtemaTemas = {
  // domínio: { subtemaIdx(1..n): [chaves t do banco] }. Em PT, subtema = t.
  1: { 1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'] }, // Educação Literária
  2: { 1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'] }, // Gramática
  3: { 1: ['1'], 2: ['2'], 3: ['3'] },           // Leitura
  4: { 1: ['1'], 2: ['2'], 3: ['3'] },           // Escrita
  5: { 1: ['1'], 2: ['2'], 3: ['3'] }            // Recursos Expressivos
};

/* ════════════════════════════════════════════════════════════════
   MÓDULOS REALOJADOS da antiga zona de exame (exames-pt.html, 7 tabs):
   cada domínio com módulo próprio renderiza-o no painel de Exercícios.
   Os mounts vivem nos ficheiros dos módulos (pt-gramatica, pt-figuras,
   pt-obras, pt-escrita) — aqui só se monta o esqueleto e despacha.
   Devolve true se o domínio tem módulo (e já foi renderizado).
   ════════════════════════════════════════════════════════════════ */
function _port9PratModulo(cap, dest) {
  if (cap === 1 && typeof ptObrasMount === 'function') {
    // Educação Literária: guias das obras (Os Lusíadas com quiz incluído)
    dest.innerHTML = '<div id="port9-mod-obras"></div>';
    ptObrasMount('port9-mod-obras');
    return true;
  }
  if (cap === 2 && typeof ptGramMount === 'function') {
    // Gramática: módulos interativos + discurso direto/indireto + conectores
    dest.innerHTML = '<div id="port9-mod-gram"></div>'
      + '<div id="port9-mod-disc" style="margin-top:2rem"></div>'
      + '<div id="port9-mod-con" style="margin-top:2rem"></div>';
    ptGramMount('port9-mod-gram');
    if (typeof ptDiscMount === 'function') ptDiscMount('port9-mod-disc');
    if (typeof ptConMount === 'function') ptConMount('port9-mod-con');
    return true;
  }
  if (cap === 4 && typeof ptEscritaMount === 'function') {
    // Escrita: composição com critérios do exame, editor e autocorreção
    dest.innerHTML = '<div id="port9-mod-escrita"></div>';
    ptEscritaMount('port9-mod-escrita');
    return true;
  }
  if (cap === 5 && typeof ptFigMount === 'function') {
    // Recursos Expressivos: figuras de estilo (teoria + identificação)
    dest.innerHTML = '<div id="port9-mod-fig"></div>';
    ptFigMount('port9-mod-fig');
    return true;
  }
  return false;
}

function port9GerarExercicios() {
  var dest = document.getElementById('port9-praticar-content');
  if (!dest) return;
  var cap = _port9Prat.cap, gen = _port9Gerador(cap);

  // Domínios com módulos próprios (realojados da antiga zona de exame):
  // escondem nível/subtemas/gerar e renderizam o módulo no painel.
  var lvlBar = document.getElementById('port9-praticar-levelbar');
  var stRow = document.getElementById('port9-praticar-st-row');
  if (_port9PratModulo(cap, dest)) {
    if (lvlBar) lvlBar.style.display = 'none';
    if (stRow) stRow.style.display = 'none';
    return;
  }
  if (lvlBar) lvlBar.style.display = '';

  // Sem gerador procedural nem banco → nada a mostrar
  if (!gen && !(_port9Banco[cap] && _port9Banco[cap].length)) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_port9Prat.st > 0 && _port9SubtemaTemas[cap] && _port9SubtemaTemas[cap][_port9Prat.st]) {
    temas = _port9SubtemaTemas[cap][_port9Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_port9TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  if (gen) {
    for (var i = 0; i < QTD; i++) {
      var tema = temas[i % temas.length];
      var ex = gen(tema, tipos[i % tipos.length], _port9Prat.nivel);
      if (ex) geradas.push(ex);
    }
  }
  var banco = (typeof _port9Banco !== 'undefined' && _port9Banco[cap]) ? _port9Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs;
  if (!gen) {
    // Sem gerador (PT): usa o banco todo, baralhado
    exs = banco.slice().sort(function () { return Math.random() - .5; })
      .map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  } else {
    exs = (typeof _mixBancoGeradas === 'function') ? _mixBancoGeradas(banco, geradas, QTD, 3, _port9Prat.nivel)
      : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  }
  _port9Prat.exs = exs;
  _port9Prat.answered = {};
  _port9Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="port9-prat-scorebar">'
    + '<div><div class="score-num" id="port9-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="port9-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="port9-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="port9GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'port9CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + quizHTML;
}

function port9CheckEx(qid, tipo, val, btn) {
  if (_port9Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _port9Prat.answered[qid] = true;
  if (r.correct) _port9Prat.score.correct++;
  _port9Prat.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('port9-prat-score'); if (se) se.textContent = _port9Prat.score.correct;
  var te = document.getElementById('port9-prat-total'); if (te) te.textContent = '/ ' + _port9Prat.score.total;
  var pe = document.getElementById('port9-prat-prog'); if (pe && _port9Prat.exs.length) pe.style.width = (_port9Prat.score.total / _port9Prat.exs.length * 100) + '%';
  port9SaveProgress(_port9Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function port9SaveProgress(cap, correct) {
  try {
    var key = _port9PratStorageKey(cap);
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
// ('p9domN') para não misturar com o progresso do 7.º ano.
function _port9PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('p9dom' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _port9BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _port9CapMeta.forEach(function(m) {
    var hasGen = _port9TemConteudo(m.n);
    var color = _port9CapColors[m.n] || '#516860';
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

function _port9SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _port9CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _port9FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

/* ════════════════════════════════════════════════════════════════
   BANCO ALARGADO por domínio: junta o _port9Banco com os bancos dos
   módulos realojados (pt-gramatica, pt-figuras, pt-lusiadas, guias),
   convertidos para o formato comum {tipo:'mc', enun, opcoes, resposta,
   expl, tema}. Alimenta as Fichas, o Teste Cronometrado e o Quiz.
   ════════════════════════════════════════════════════════════════ */

// Bancos dos módulos com {frase, correct, opts, exp} (resposta = texto da opção).
// `dif` marca o nível base do banco (a dificuldade que o módulo anunciava).
function _port9ConvBancoMod(arr, prefixo, t, temaLabel, dif) {
  var out = [];
  (arr || []).forEach(function (q) {
    if (!q || !q.opts || !q.correct || q.opts.indexOf(q.correct) === -1) return;
    out.push({ t: t, tipo: 'mc', enun: prefixo + q.frase, opcoes: q.opts.slice(), resposta: q.correct, expl: q.exp || '', tema: temaLabel, dif: dif || 'medio' });
  });
  return out;
}

// Bancos dos guias de obras com opts "(A) …" e correct = letra (PT_LUS_BANCO…)
function _port9ConvBancoLetra(arr, t, temaLabel) {
  var letras = ['A', 'B', 'C', 'D', 'E'];
  var out = [];
  (arr || []).forEach(function (q) {
    if (!q || !q.opts || !q.correct) return;
    var idx = letras.indexOf(q.correct);
    if (idx < 0 || idx >= q.opts.length) return;
    var ops = q.opts.map(function (o) { return String(o).replace(/^\([A-E]\)\s*/, ''); });
    out.push({ t: t, tipo: 'mc', enun: q.enun, opcoes: ops, resposta: ops[idx], expl: q.exp || '', tema: temaLabel, dif: 'medio' });
  });
  return out;
}

function _port9FichaBanco(cap) {
  var out = (_port9Banco[cap] || []).slice();
  function add(a) { out = out.concat(a); }
  if (cap === 1) {
    if (typeof PT_LUS_BANCO !== 'undefined') add(_port9ConvBancoLetra(PT_LUS_BANCO, '2', 'Os Lusíadas'));
    if (typeof PT_BARCA_BANCO !== 'undefined') add(_port9ConvBancoLetra(PT_BARCA_BANCO, '1', 'Auto da Barca do Inferno'));
    if (typeof PT_POESIA_BANCO !== 'undefined') add(_port9ConvBancoLetra(PT_POESIA_BANCO, '4', 'Poesia'));
  } else if (cap === 2) {
    if (typeof PT_CLASSES_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_CLASSES_BANCO, 'Identifica a classe da palavra destacada: ', '1', 'Classes de palavras', 'facil'));
    if (typeof PT_FUNCOES_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_FUNCOES_BANCO, 'Indica a função sintática do elemento destacado: ', '2', 'Funções sintáticas', 'dificil'));
    if (typeof PT_SUBORDINADAS_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_SUBORDINADAS_BANCO, 'Classifica a oração destacada: ', '3', 'Orações subordinadas', 'medio'));
    if (typeof PT_CONECTORES_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_CONECTORES_BANCO, 'Seleciona o conector que completa a frase: ', '3', 'Conectores', 'facil'));
    if (typeof PT_TEMPOS_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_TEMPOS_BANCO, 'Identifica o tempo e o modo da forma verbal destacada: ', '4', 'Tempos verbais', 'medio'));
  } else if (cap === 5) {
    if (typeof PT_FIGURAS_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_FIGURAS_BANCO, 'Identifica a figura de estilo presente em: ', '1', 'Figuras de estilo', 'facil'));
  }
  return out;
}

// Baralha e tira n questões do banco alargado, respeitando o nível pedido.
// Se o nível pedido não tiver n questões, completa com as restantes.
function _port9FichaSlice(banco, n, dif) {
  var ordem = { facil: 0, medio: 1, dificil: 2 };
  var fil = banco;
  if (dif && typeof _nivelQuestao === 'function') {
    fil = banco.filter(function (q) {
      var nq = ordem[_nivelQuestao(q)];
      if (dif === 'facil') return nq === 0;
      if (dif === 'dificil') return nq >= 1;
      return true;
    });
    if (!fil.length) fil = banco;
  }
  fil = shuffle_m81(fil.slice());
  if (fil.length < n) {
    var resto = banco.filter(function (q) { return fil.indexOf(q) === -1; });
    fil = fil.concat(shuffle_m81(resto));
  }
  return fil.slice(0, n).map(function (e, i) { return Object.assign({}, e, { num: i + 1 }); });
}

// Português: o Quiz tira questões de escolha múltipla do banco alargado do domínio.
function _port9BuildMcQuestion(cap) {
  var qs = _port9FichaBanco(cap).filter(function (q) {
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
var _port9Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function port9QuizBuildNav() {
  if (!_port9TemConteudo(_port9Quiz.cap)) _port9Quiz.cap = 1;
  _port9BuildCapRow('port9-quiz-cap-row', _port9Quiz.cap, 'port9QuizSelectCap');
  port9QuizStart();
}

function port9QuizSelectCap(cap, btn) {
  if (!_port9TemConteudo(cap)) return;
  _port9SetActiveCapBtn('port9-quiz-cap-row', btn, cap);
  _port9Quiz.cap = cap;
  port9QuizStart();
}

function port9QuizStart() {
  _port9Quiz.lives = 3; _port9Quiz.streak = 0; _port9Quiz.maxStreak = 0;
  _port9Quiz.score = 0; _port9Quiz.total = 0; _port9Quiz.answered = false;
  port9QuizNext();
}

function port9QuizNext() {
  var app = document.getElementById('port9-quiz-app');
  if (!app) return;
  if (_port9Quiz.lives <= 0) { port9QuizGameOver(app); return; }
  var ex = _port9BuildMcQuestion(_port9Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _port9Quiz.current = ex; _port9Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _port9Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="port9qopt-' + idx + '" onclick="port9QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_port9Quiz.streak > 1 ? '🔥 ' + _port9Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _port9Quiz.score + ' / ' + _port9Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="port9-quiz-fb" style="min-height:2.5rem"></div>';
}

function port9QuizAnswer(idx) {
  if (_port9Quiz.answered) return;
  _port9Quiz.answered = true;
  var ex = _port9Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _port9Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('port9qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('port9-quiz-fb');
  if (correct) {
    _port9Quiz.score++; _port9Quiz.streak++;
    if (_port9Quiz.streak > _port9Quiz.maxStreak) _port9Quiz.maxStreak = _port9Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _port9Quiz.lives--; _port9Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  port9SaveProgress(_port9Quiz.cap, correct);
  setTimeout(function(){ port9QuizNext(); }, 1400);
}

function port9QuizGameOver(app) {
  var pct = _port9Quiz.total > 0 ? Math.round(_port9Quiz.score / _port9Quiz.total * 100) : 0;
  _port9PM(_port9Quiz.cap, 'quiz', { pontuacao: _port9Quiz.score, total: _port9Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _port9Quiz.score + ' certas em ' + _port9Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_port9Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="port9QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _port9Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function port9FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_port9Cards[_port9Fc.cap] && _port9Cards[_port9Fc.cap].length)) {
    for (var c = 1; c <= _port9CapMeta.length; c++) { if (_port9Cards[c] && _port9Cards[c].length) { _port9Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('port9-fc-cap-row');
  if (row) {
    var h = '';
    _port9CapMeta.forEach(function(m) {
      var has = !!(_port9Cards[m.n] && _port9Cards[m.n].length);
      var color = _port9CapColors[m.n] || '#516860';
      var isActive = _port9Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('port9FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  port9FcSelectCap(_port9Fc.cap, null);
}

function port9FcSelectCap(cap, btn) {
  if (!(_port9Cards[cap] && _port9Cards[cap].length)) return;
  if (btn) _port9SetActiveCapBtn('port9-fc-cap-row', btn, cap);
  _port9Fc.cap = cap;
  _port9Fc.cards = _port9Cards[cap].slice();
  _port9Fc.idx = 0; _port9Fc.flipped = false;
  _port9PM(cap, 'flashcard');
  port9FcRender();
}

function port9FcRender() {
  var app = document.getElementById('port9-fc-app');
  if (!app) return;
  var cards = _port9Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_port9Fc.idx];
  var color = _port9CapColors[_port9Fc.cap] || '#516860';
  var pct = Math.round((_port9Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_port9Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="port9FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_port9Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_port9Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="port9FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="port9FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="port9FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function port9FcFlip() { _port9Fc.flipped = !_port9Fc.flipped; port9FcRender(); }
function port9FcNext() { _port9Fc.idx = (_port9Fc.idx + 1) % (_port9Fc.cards.length || 1); _port9Fc.flipped = false; port9FcRender(); }
function port9FcPrev() { _port9Fc.idx = (_port9Fc.idx - 1 + (_port9Fc.cards.length || 1)) % (_port9Fc.cards.length || 1); _port9Fc.flipped = false; port9FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _port9Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function port9TesteBuildNav() {
  if (!_port9TemConteudo(_port9Teste.cap)) _port9Teste.cap = 1;
  _port9BuildCapRow('port9-teste-cap-row', _port9Teste.cap, 'port9TesteSelectCap');
  port9TesteRenderConfig();
}

function port9TesteSelectCap(cap, btn) {
  if (!_port9TemConteudo(cap)) return;
  _port9SetActiveCapBtn('port9-teste-cap-row', btn, cap);
  _port9Teste.cap = cap;
  port9TesteRenderConfig();
}

function port9TesteRenderConfig() {
  var app = document.getElementById('port9-teste-app');
  if (!app) return;
  if (_port9Teste.timer) { clearInterval(_port9Teste.timer); _port9Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="port9-teste-nivel">' +
            '<button class="gen-level-btn' + (_port9Teste.nivel==='facil'?' active':'') + '" onclick="port9TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_port9Teste.nivel==='medio'?' active':'') + '" onclick="port9TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_port9Teste.nivel==='dificil'?' active':'') + '" onclick="port9TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="port9-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="port9-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="port9TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function port9TesteSetNivel(nivel, btn) {
  _port9Teste.nivel = nivel;
  var grp = document.getElementById('port9-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function port9TesteStart() {
  var gen = _port9Gerador(_port9Teste.cap);
  var qtdEl = document.getElementById('port9-teste-qtd'), tempoEl = document.getElementById('port9-teste-tempo');
  _port9Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _port9Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var exs = [];
  if (gen) {
    var nTemas = _port9TemasCount[_port9Teste.cap] || 1;
    var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
    for (var i = 0; i < _port9Teste.qtd; i++) {
      var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port9Teste.nivel);
      if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
    }
  } else {
    // PT: teste sai do banco alargado do domínio
    exs = _port9FichaSlice(_port9FichaBanco(_port9Teste.cap), _port9Teste.qtd, _port9Teste.nivel);
  }
  if (!exs.length) return;
  _port9Teste.exs = exs; _port9Teste.answered = {}; _port9Teste.score = { correct: 0, total: 0 };
  _port9Teste.restante = _port9Teste.tempo;

  var app = document.getElementById('port9-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'port9TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="port9-teste-timer">' + _port9FmtTime(_port9Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="port9-teste-answered">0 / ' + _port9Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="port9TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="port9-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _port9Teste.timer = setInterval(function() {
    _port9Teste.restante--;
    var t = document.getElementById('port9-teste-timer');
    if (t) t.textContent = _port9FmtTime(_port9Teste.restante);
    if (_port9Teste.restante <= 0) port9TesteFinish();
  }, 1000);
}

function _port9FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function port9TesteCheck(qid, tipo, val, btn) {
  if (_port9Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _port9Teste.answered[qid] = true;
  if (r.correct) _port9Teste.score.correct++;
  _port9Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('port9-teste-answered');
  if (a) a.textContent = _port9Teste.score.total + ' / ' + _port9Teste.qtd;
  port9SaveProgress(_port9Teste.cap, r.correct);
  if (_port9Teste.score.total >= _port9Teste.qtd) setTimeout(port9TesteFinish, 600);
}

function port9TesteFinish() {
  if (_port9Teste.timer) { clearInterval(_port9Teste.timer); _port9Teste.timer = null; }
  var app = document.getElementById('port9-teste-app');
  if (!app) return;
  var total = _port9Teste.qtd;
  var correct = _port9Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _port9PM(_port9Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="port9TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (jogos de Português — pt-jogos.js)
   Quiz Contra o Tempo · Forca · Correspondência. Nada de jogos
   matemáticos (4 em linha, Sudoku…) — não fazem sentido em Português.
   ════════════════════════════════════════════════════════════════ */
function port9JogosInit() {
  if (typeof ptJogosRender === 'function') {
    ptJogosRender();
  } else {
    var app = document.getElementById('port9-jogos-app');
    if (app) app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Jogos indisponíveis (pt-jogos.js não carregado).</p>';
  }
}

/* ════════════════════════════════════════════════════════════════
   TAB PROGRESSO
   Lê edupt_port9_capN (gravado por port9SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _port9ProgGetCaps() {
  var out = [];
  var nCaps = _port9CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_port9_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function port9RenderProgresso() {
  var el = document.getElementById('port9-progresso-content');
  if (!el) return;
  var caps = _port9ProgGetCaps();
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
     + '<button onclick="port9ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 9.º ano)
  h += '<div style="background:var(--m9c1-base);border:1.5px solid var(--m9c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m9c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="port9ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
     + '</div>';

  // XP + streak do ProgressManager (apenas dos capítulos do 9.º ano)
  var pmXp = 0, pmStreak = 0;
  if (typeof ProgressManager !== 'undefined') {
    try {
      var sum = ProgressManager.getSummary();
      pmStreak = sum.streak || 0;
      if (sum.caps) Object.keys(sum.caps).forEach(function(k) { if (k.indexOf('p9dom') === 0) pmXp += (sum.caps[k].xp || 0); });
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
    var m = _port9CapMeta[c.cap - 1];
    var color = _port9CapColors[c.cap] || '#516860';
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
      var mp = _port9CapMeta[pior.cap - 1];
      var colorp = _port9CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="port9TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="port9ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function port9TreinarCap(cap) {
  _port9Prat.cap = cap;
  _port9Prat.st = 0;
  port9SwitchTab('exercicios', null);
}

function port9ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 9.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _port9CapMeta.length; cap++) { try { localStorage.removeItem('edupt_port9_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 9.º ano (m9cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('p9dom') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  port9RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 9.º ano limpo.', 'ok');
}

function port9ProgDownloadPDF() {
  var caps = _port9ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _port9CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Português 9.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-port9.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _port9gf = {
  caps: {},            // { cap: true } selecionados
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Constrói a lista de capítulos selecionáveis (só os com gerador).
function port9FichasBuildNav() {
  var el = document.getElementById('port9-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com gerador
  var temAlgum = false;
  for (var k in _port9gf.caps) { if (_port9gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _port9CapMeta.forEach(function(m) {
    var hasGen = _port9TemConteudo(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _port9gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_port9gf.caps[m.n];
    var color = _port9CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port9gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
  });
  el.innerHTML = h;
}

function port9gfToggleCap(cap, btn) {
  _port9gf.caps[cap] = !_port9gf.caps[cap];
  var color = _port9CapColors[cap] || '#516860';
  if (_port9gf.caps[cap]) { btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  else { btn.classList.remove('active'); btn.style.background = ''; btn.style.borderColor = ''; btn.style.color = ''; }
}

function port9gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _port9gf.tipos[t] = !_port9gf.tipos[t];
  btn.classList.toggle('active', _port9gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _port9gf.tipos[t] ? '✓' : '';
}

function port9gfSetDif(btn) {
  _port9gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('port9-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function port9gfSetQty(btn) {
  _port9gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('port9-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _port9gfExBloco(exs, startNum) {
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

function _port9gfGenExs(cap, n) {
  var gen = _port9Gerador(cap);
  if (!gen) {
    // PT: a ficha vem toda do banco alargado (domínio + módulos realojados)
    return _port9FichaSlice(_port9FichaBanco(cap), n, _port9gf.dif);
  }
  var nTemas = _port9TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port9gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _port9Banco !== 'undefined' && _port9Banco[cap]) ? _port9Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _port9gf.dif);
  }
  return geradas;
}

function port9gfGerar(formato) {
  // capítulos selecionados (conta o banco alargado — em PT não há geradores)
  var capsSel = [];
  _port9CapMeta.forEach(function(m) { if (_port9gf.caps[m.n] && (_port9Gerador(m.n) || _port9FichaBanco(m.n).length)) capsSel.push(m.n); });
  var status = document.getElementById('port9-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _port9gf.tipos.resumo || _port9gf.tipos.exercicios || _port9gf.tipos.teste || _port9gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_port9gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _port9PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _port9CapMeta[cap - 1];
    var color = _port9CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards)
    if (_port9gf.tipos.resumo) {
      var cards = _port9Cards[cap] || [];
      if (cards.length) {
        corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Resumo teórico</h3>';
        cards.slice(0, 8).forEach(function(c) {
          corpo += '<div style="font-size:11.5px;margin-bottom:4px"><strong>' + c.q + '</strong> ' + c.a + (c.v ? '<div style="margin:3px 0">' + c.v + '</div>' : '') + '</div>';
        });
        corpo += '</div>';
      }
    }
    // Exercícios
    if (_port9gf.tipos.exercicios) {
      var exs = _port9gfGenExs(cap, _port9gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _port9gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_port9gf.tipos.teste) {
      var exsT = _port9gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _port9gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_port9gf.tipos.minitestes) {
      var subt = _port9Subtemas[cap] || [];
      var mapa = _port9SubtemaTemas[cap] || {};
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        var temas = mapa[si + 1] || [String(si + 1)];
        var gen = _port9Gerador(cap);
        var exsM = [];
        for (var q = 0; q < 4; q++) {
          var tema = temas[q % temas.length];
          var ex = gen(tema, (q % 2 === 0) ? 'mc' : 'fill', _port9gf.dif);
          if (ex) exsM.push(ex);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _port9gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_port9gf.tipos.solucoes && solucoes.length) {
    var _lmS = (typeof _limpaMath === 'function') ? _limpaMath : function(x){ return x; };
    var fmS = (typeof formatMath === 'function') ? function(x){ return formatMath(_lmS(x)); } : function(x){ return _lmS(x); };
    var lst = solucoes.map(function(s) {
      return '<div style="font-size:11.5px;margin-bottom:7px;line-height:1.5;page-break-inside:avoid">'
        + '<strong>' + s.num + '.</strong> <strong style="color:#1a6b4a">' + fmS(String(s.ex.resposta)) + '</strong>'
        + (s.ex.expl ? '<br><span style="color:#555">' + fmS(s.ex.expl) + '</span>' : '') + '</div>';
    }).join('');
    solHTML = '<div style="page-break-before:always;padding-top:8px"><h2 style="font-size:16px;border-bottom:2px solid #36527a;padding-bottom:4px">Soluções</h2>' + lst + '</div>';
  }

  var nomesCaps = capsSel.map(function(c) { return _port9CapMeta[c - 1].label; }).join(', ');
  var html = '<div style="font-family:Arial,sans-serif;max-width:740px;margin:0 auto;padding:24px;color:#222">'
    + '<div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #36527a;padding-bottom:8px;margin-bottom:14px">'
    + '<div><h1 style="font-size:18px;margin:0">Ficha de Trabalho · Português 9.º Ano</h1>'
    + '<div style="font-size:11.5px;color:#666">' + nomesCaps + ' · Nível ' + difLabel + '</div></div>'
    + '<div style="font-size:11.5px;color:#888">3ponto14</div></div>'
    + '<div style="font-size:11.5px;color:#666;margin-bottom:12px">Nome: ____________________________  Data: ____ / ____ / ______</div>'
    + corpo + solHTML + '</div>';

  var _temasNomes = capsSel.map(function(c){ return _port9CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('9', 'portugues', _temasNomes, formato) : ('ficha-port9.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _port9Init() {
  if (typeof _addFuncTeoriaVisuais === 'function') _addFuncTeoriaVisuais(_port9Cards[3], '#4d8f87'); // cap3 Funções
  // arranca na tab Teoria com o cap 1 selecionado
  port9BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _port9Init);
else _port9Init();

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
var _port9Banco = {
  // ── Domínio 1 · Educação Literária ──
  1: [
    { t: '1', tipo: 'mc', enun: 'No Auto da Barca do Inferno, que figura representa a usura (cobiça do dinheiro)?', opcoes: ['O Onzeneiro', 'O Frade', 'O Sapateiro', 'O Fidalgo'], resposta: 'O Onzeneiro', expl: 'O Onzeneiro é a figura-tipo do usurário, condenado pela sua avareza.', tema: 'T1 · Auto da Barca' },
    { t: '1', tipo: 'mc', enun: 'Quem julga as almas que merecem a salvação no Auto da Barca do Inferno?', opcoes: ['O Anjo', 'O Diabo', 'O Parvo', 'O Fidalgo'], resposta: 'O Anjo', expl: 'O Anjo comanda a barca do Paraíso; o Diabo a do Inferno.', tema: 'T1 · Auto da Barca' },
    { t: '2', tipo: 'mc', enun: 'Os Lusíadas narram sobretudo a viagem de:', opcoes: ['Vasco da Gama à Índia', 'Pedro Álvares Cabral ao Brasil', 'Colombo à América', 'Magalhães à volta ao mundo'], resposta: 'Vasco da Gama à Índia', expl: 'A epopeia celebra a viagem de Vasco da Gama (1497-98) como feito heroico português.', tema: 'T2 · Os Lusíadas' },
    { t: '2', tipo: 'mc', enun: 'No episódio do Adamastor, esta figura simboliza:', opcoes: ['os perigos e o medo do mar desconhecido', 'o amor entre os marinheiros', 'a riqueza da Índia', 'a paz após a viagem'], resposta: 'os perigos e o medo do mar desconhecido', expl: 'O Adamastor, gigante do Cabo das Tormentas, personifica os perigos da navegação.', tema: 'T2 · Os Lusíadas' },
    { t: '2', tipo: 'mc', enun: 'Que episódio de Os Lusíadas trata de um amor trágico que termina em morte?', opcoes: ['Inês de Castro', 'A Ilha dos Amores', 'A Proposição', 'O Consílio dos Deuses'], resposta: 'Inês de Castro', expl: 'O episódio de Inês de Castro narra o seu amor por D. Pedro e o seu assassínio.', tema: 'T2 · Os Lusíadas' },
    { t: '3', tipo: 'mc', enun: 'Um conto é uma narrativa:', opcoes: ['curta, com uma só ação central', 'longa, com muitas personagens', 'sempre em verso', 'sem narrador'], resposta: 'curta, com uma só ação central', expl: 'O conto caracteriza-se pela brevidade e por concentrar-se numa única ação.', tema: 'T3 · Contos' },
    { t: '4', tipo: 'mc', enun: 'A "voz" que exprime emoções num poema chama-se:', opcoes: ['sujeito poético', 'narrador', 'autor', 'personagem'], resposta: 'sujeito poético', expl: 'O sujeito poético é a entidade que fala no texto lírico — não se confunde com o autor.', tema: 'T4 · Poesia' }
  ],
  // ── Domínio 2 · Gramática ──
  2: [
    { t: '1', tipo: 'mc', enun: 'Na frase "O João comprou um livro", qual é a classe de "livro"?', opcoes: ['nome', 'verbo', 'adjetivo', 'advérbio'], resposta: 'nome', expl: '"Livro" designa um ser/objeto → é um nome (substantivo).', tema: 'T1 · Classes de Palavras' },
    { t: '2', tipo: 'mc', enun: 'Na frase "A Maria leu o livro", qual é a função sintática de "o livro"?', opcoes: ['complemento direto', 'sujeito', 'complemento indireto', 'predicativo do sujeito'], resposta: 'complemento direto', expl: 'Responde a "leu o quê?" sem preposição → complemento direto.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', enun: 'Em "Ofereci flores à minha mãe", "à minha mãe" é:', opcoes: ['complemento indireto', 'complemento direto', 'sujeito', 'modificador'], resposta: 'complemento indireto', expl: 'Responde a "a quem?" com a preposição a → complemento indireto.', tema: 'T2 · Funções Sintáticas' },
    { t: '3', tipo: 'mc', enun: 'A oração sublinhada em "Disse QUE VINHA" é:', opcoes: ['subordinada substantiva completiva', 'coordenada copulativa', 'subordinada adverbial', 'oração principal'], resposta: 'subordinada substantiva completiva', expl: 'Completa o sentido do verbo "disse" e funciona como complemento → completiva.', tema: 'T3 · Orações' },
    { t: '4', tipo: 'mc', enun: 'Em "Espero que tu venhas", o verbo "venhas" está no modo:', opcoes: ['conjuntivo', 'indicativo', 'imperativo', 'condicional'], resposta: 'conjuntivo', expl: 'Exprime um desejo/hipótese dependente → conjuntivo (presente).', tema: 'T4 · Modos Verbais' },
    { t: '1', tipo: 'mc', enun: 'Qual destas palavras é um determinante?', opcoes: ['aquele', 'correr', 'rapidamente', 'belo'], resposta: 'aquele', expl: '"Aquele" é determinante demonstrativo (acompanha o nome).', tema: 'T1 · Classes de Palavras' }
  ],
  // ── Domínio 3 · Leitura ──
  3: [
    { t: '1', tipo: 'mc', enun: 'O assunto central de que um texto trata chama-se:', opcoes: ['tema', 'título', 'narrador', 'conclusão'], resposta: 'tema', expl: 'O tema é o assunto central; distingue-se da ideia principal (o que se afirma sobre ele).', tema: 'T1 · Compreensão' },
    { t: '2', tipo: 'mc', enun: 'Um texto que defende uma tese com argumentos é predominantemente:', opcoes: ['argumentativo', 'narrativo', 'descritivo', 'dialogal'], resposta: 'argumentativo', expl: 'O texto argumentativo apresenta uma tese e fundamenta-a com argumentos.', tema: 'T2 · Tipologias' },
    { t: '3', tipo: 'mc', enun: 'Deduzir informação que o texto não diz explicitamente é:', opcoes: ['inferir', 'resumir', 'citar', 'parafrasear'], resposta: 'inferir', expl: 'Inferir é tirar conclusões a partir de pistas do texto.', tema: 'T3 · Sentidos' },
    { t: '3', tipo: 'mc', enun: 'Na expressão "a noite da sua vida", "noite" tem sentido:', opcoes: ['conotativo', 'denotativo', 'literal', 'objetivo'], resposta: 'conotativo', expl: 'Sentido figurado (tristeza/dificuldade), não o literal de período do dia.', tema: 'T3 · Sentidos' },
    { t: '1', tipo: 'mc', enun: 'Um narrador que conta a história na 1.ª pessoa é:', opcoes: ['participante', 'omnisciente', 'ausente', 'não participante'], resposta: 'participante', expl: 'O narrador de 1.ª pessoa participa na ação que narra.', tema: 'T1 · Compreensão' }
  ],
  // ── Domínio 4 · Escrita ──
  4: [
    { t: '1', tipo: 'mc', enun: 'A estrutura típica de um texto de opinião é:', opcoes: ['introdução, desenvolvimento, conclusão', 'só desenvolvimento', 'título e lista', 'diálogo e desfecho'], resposta: 'introdução, desenvolvimento, conclusão', expl: 'Introdução (tese), desenvolvimento (argumentos), conclusão (reafirma a posição).', tema: 'T1 · Texto de Opinião' },
    { t: '1', tipo: 'mc', enun: 'No exame, o texto de opinião deve ter:', opcoes: ['entre 160 e 260 palavras', 'no máximo 50 palavras', 'exatamente 100 palavras', 'sem limite'], resposta: 'entre 160 e 260 palavras', expl: 'O exame de 9.º pede um mínimo de 160 e um máximo de 260 palavras.', tema: 'T1 · Texto de Opinião' },
    { t: '2', tipo: 'mc', enun: 'A sequência de um texto narrativo é, em geral:', opcoes: ['situação inicial, conflito, desenlace', 'tese, argumentos, conclusão', 'pergunta e resposta', 'introdução e índice'], resposta: 'situação inicial, conflito, desenlace', expl: 'A narrativa progride da situação inicial, pelo conflito, até ao desenlace.', tema: 'T2 · Texto Narrativo' },
    { t: '1', tipo: 'mc', enun: 'Palavras como "além disso", "contudo", "portanto" são:', opcoes: ['conectores', 'adjetivos', 'nomes', 'interjeições'], resposta: 'conectores', expl: 'Conectores ligam ideias e dão coesão ao texto.', tema: 'T1 · Coesão' },
    { t: '2', tipo: 'mc', enun: 'Um texto que apresenta e explica informação de forma objetiva é:', opcoes: ['expositivo', 'de opinião', 'lírico', 'dramático'], resposta: 'expositivo', expl: 'O texto expositivo informa de forma clara e objetiva.', tema: 'T2 · Texto Expositivo' }
  ],
  // ── Domínio 5 · Recursos Expressivos ──
  5: [
    { t: '1', tipo: 'mc', enun: 'Em "os teus olhos são duas estrelas", a figura de estilo é:', opcoes: ['metáfora', 'comparação', 'hipérbole', 'aliteração'], resposta: 'metáfora', expl: 'Identifica olhos e estrelas SEM palavra de ligação → metáfora.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', enun: 'Em "corre como o vento", a figura de estilo é:', opcoes: ['comparação', 'metáfora', 'personificação', 'eufemismo'], resposta: 'comparação', expl: 'Usa "como" para aproximar dois elementos → comparação.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', enun: 'Em "o vento gemia na noite", a figura é:', opcoes: ['personificação', 'hipérbole', 'antítese', 'ironia'], resposta: 'personificação', expl: 'Atribui uma ação humana (gemer) ao vento → personificação.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', enun: 'Em "chorei rios de lágrimas", a figura é:', opcoes: ['hipérbole', 'comparação', 'metáfora', 'anáfora'], resposta: 'hipérbole', expl: 'Exagero intencional para dar ênfase → hipérbole.', tema: 'T1 · Figuras' },
    { t: '2', tipo: 'mc', enun: 'A repetição de sons consonânticos ("o rato roeu a rolha") é:', opcoes: ['aliteração', 'anáfora', 'enumeração', 'metáfora'], resposta: 'aliteração', expl: 'Repetição de sons (r) para musicalidade → aliteração.', tema: 'T2 · Recursos' },
    { t: '3', tipo: 'mc', enun: 'Um verso de 10 sílabas métricas chama-se:', opcoes: ['decassílabo', 'redondilha maior', 'alexandrino', 'octossílabo'], resposta: 'decassílabo', expl: 'Dez sílabas métricas = decassílabo (a medida de Os Lusíadas).', tema: 'T3 · Versificação' }
  ]
};