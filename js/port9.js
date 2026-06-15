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
  2: ['Classes de palavras', 'Funções sintáticas', 'Frase e orações', 'Tempos, modos e modalidade', 'Léxico e variação'],
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
    { tag: 'Auto da Barca', q: 'Quem julga as almas no Auto da Barca do Inferno?', a: 'O Diabo (barca do Inferno) e o Anjo (barca do Paraíso). Cada figura: Fidalgo, Onzeneiro, Frade, Sapateiro…: é julgada pelos seus pecados.' },
    { tag: 'Conceito', q: 'O que é uma personagem-tipo (figura alegórica)?', a: 'Uma personagem que representa um grupo ou um vício/virtude, não um indivíduo. No Auto, o Onzeneiro representa a usura, o Frade a hipocrisia do clero.' },
    { tag: 'Conceito', q: 'O que é o sujeito poético?', a: 'A "voz" que fala no poema: não é o autor, mas a entidade que exprime emoções e ideias no texto lírico.' },
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
    { tag: 'Definição', q: 'O que é uma oração subordinada?', a: 'Uma oração que depende de outra (a subordinante). Ex: «Disse que vinha»: «que vinha» é subordinada substantiva completiva.' },
    { tag: 'Regra', q: 'Tipos de orações coordenadas?', a: 'Copulativas (e, nem), adversativas (mas, porém), disjuntivas (ou), conclusivas (logo, portanto) e explicativas (pois, que).' },
    { tag: 'Regra', q: 'Modos verbais?', a: 'Indicativo (factos: canto), conjuntivo (hipótese/desejo: que eu cante), condicional (cantaria), imperativo (canta!), infinitivo e gerúndio.' },
    { tag: 'Definição', q: 'O que é o discurso direto e indireto?', a: 'Direto: reproduz as palavras tal qual (« — Vou já», disse). Indireto: integra-as na narração (Disse que ia já).' },
    { tag: 'Regra', q: 'Funções sintáticas a nível da palavra: modificador do nome?', a: 'O modificador acrescenta informação ao nome sem ser essencial. Restritivo (sem vírgulas) ou apositivo (entre vírgulas).' },
    { tag: 'Exemplo', q: 'Classifica "rapidamente" em "Correu rapidamente".', a: 'Advérbio de modo, com função de modificador do grupo verbal.' },
    { tag: 'Definição', q: 'O que é o predicativo do sujeito?', a: 'Atribui uma qualidade ou estado ao sujeito, através de um verbo copulativo (ser, estar, parecer). Ex: «A casa está limpa»: limpa é predicativo.' },
    { tag: 'Regra', q: 'Coesão e coerência: que diferença?', a: 'Coesão = ligações gramaticais e lexicais (conectores, pronomes). Coerência = sentido lógico global do texto. Ambas tornam o texto bem construído.' },
    { tag: 'Definição', q: 'Léxico: como se formam palavras novas?', a: 'Por DERIVAÇÃO (afixos: caça → caçada; in+feliz) ou por COMPOSIÇÃO (malcriado = palavra+palavra; sonoplastia = radical+radical).' },
    { tag: 'Definição', q: 'Léxico: relações semânticas entre palavras?', a: 'Sinonímia (macio/suave), antonímia (fraco/forte), hierarquia: hiperónimo/hipónimo (flor/rosa) e parte-todo: holónimo/merónimo (livro/capa).' },
    { tag: 'Definição', q: 'Léxico: arcaísmos e neologismos?', a: 'Arcaísmo = palavra que caiu em desuso (antre → entre). Neologismo = palavra ou sentido novo (cibersegurança; as invenções literárias de Mia Couto).' },
    { tag: 'Regra', q: 'Variação da língua: que tipos há?', a: 'Geográfica (pequeno-almoço/café da manhã), social (linguagem juvenil, técnica) e histórica/diacrónica (processos fonológicos: FLORE → flor).' }
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
    { tag: 'Exemplo', q: 'Frase de introdução de um texto de opinião?', a: '«Atualmente, discute-se muito se… Na minha perspetiva, …»: apresenta o tema e toma logo posição.' }
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
var _port9TemasCount = { 1: 4, 2: 5, 3: 3, 4: 3, 5: 3 };

// Estado da prática
var _port9Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };
var _port9TarefaAtiva = null;   // id da tarefa, se veio por deep-link
var _port9TarefaResp = {};      // qid -> certo (modo-tarefa)

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
  2: { 1: ['1'], 2: ['2'], 3: ['3'], 4: ['4'], 5: ['5'] }, // Gramática
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
    + (_port9TarefaAtiva ? '<button class="btn" style="background:#2e7d52;color:#fff;border:none;border-radius:999px;padding:6px 14px;font-weight:800;cursor:pointer;margin-left:.4rem" onclick="port9EntregarTarefa()">✓ Terminar e entregar</button>' : '')
    + '</div>'
    + (_port9TarefaAtiva ? '<div style="font-size:.8rem;color:#2e7d52;background:#e8f5ee;border:1px solid #bfe3c9;border-radius:10px;padding:.5rem .8rem;margin-bottom:.6rem">📋 Estás a fazer um trabalho atribuído pelo professor. Responde e carrega em <strong>Terminar e entregar</strong>.</div>' : '');
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'port9CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  // contentor do botão «Atribuir» (só professores) por cima das questões
  dest.innerHTML = scoreBar + '<div id="port9-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;

  // ── Atribuir a aluno/grupo (professor) ──
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var capM = _port9CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var subNome = (_port9Subtemas[cap] && _port9Prat.st > 0) ? (_port9Subtemas[cap][_port9Prat.st - 1] || '') : '';
    Atribuir.montar('port9-atribuir', {
      curso: 'port9', cursoNome: 'Português 9.º',
      tema: String(cap), temaNome: capM.label || ('Cap. ' + cap),
      sub: String(_port9Prat.st || ''), subNome: subNome,
      tipo: 'quiz', nivel: _port9Prat.nivel
    });
  }
}

/* Entrega o trabalho atribuído: regista nota + detalhe (onde acertou/errou). */
function port9EntregarTarefa() {
  if (!_port9TarefaAtiva || typeof Turmas === 'undefined' || !Turmas.guardarResultado) return;
  var qids = Object.keys(_port9TarefaResp || {});
  if (!qids.length) { alert('Responde a pelo menos uma pergunta antes de entregar.'); return; }
  var certas = 0, detalhe = [];
  qids.forEach(function (qid, i) {
    var ok = !!_port9TarefaResp[qid];
    if (ok) certas++;
    var ex = _port9Prat.exs[i] || {};
    detalhe.push({ q: (ex.enun || ex.pergunta || ('Pergunta ' + (i + 1))), certo: ok });
  });
  Turmas.guardarResultado(_port9TarefaAtiva, certas, qids.length, detalhe).then(function () {
    if (typeof eduToast === 'function') eduToast('Trabalho entregue! Acertaste ' + certas + ' de ' + qids.length + '. ✅', 'success');
    else alert('Trabalho entregue! ' + certas + '/' + qids.length);
    _port9TarefaAtiva = null; _port9TarefaResp = {};
    port9GerarExercicios(); // remove o botão de entregar
  }).catch(function (e) { alert(e.message || 'Não foi possível entregar.'); });
}

function port9CheckEx(qid, tipo, val, btn) {
  if (_port9Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _port9Prat.answered[qid] = true;
  if (r.correct) _port9Prat.score.correct++;
  _port9Prat.score.total++;
  // modo-tarefa: guarda acerto/erro por questão (resolve enunciado depois)
  if (_port9TarefaAtiva) { _port9TarefaResp = _port9TarefaResp || {}; _port9TarefaResp[qid] = !!r.correct; }
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

// Nível de uma questão convertida: primeiro padrão do difMap que casar com
// o texto (resposta + tipo + enunciado, em minúsculas) ganha; senão fallback.
// A ordem do difMap importa: pôr os padrões mais longos primeiro
// (ex.: 'predicativo do complemento direto' antes de 'complemento direto').
function _port9DifDe(texto, difMap, fallback) {
  if (difMap) {
    for (var i = 0; i < difMap.length; i++) {
      if (texto.indexOf(difMap[i][0]) !== -1) return difMap[i][1];
    }
  }
  return fallback || 'medio';
}

// Bancos dos módulos com {frase, correct, opts, exp} (resposta = texto da opção).
// `dif` é o nível por omissão; `difMap` afina questão a questão.
function _port9ConvBancoMod(arr, prefixo, t, temaLabel, dif, difMap) {
  var out = [];
  (arr || []).forEach(function (q) {
    if (!q || !q.opts || !q.correct || q.opts.indexOf(q.correct) === -1) return;
    var texto = (q.correct + ' ' + (q.tipo || '') + ' ' + q.frase).toLowerCase();
    out.push({ t: t, tipo: 'mc', enun: prefixo + q.frase, opcoes: q.opts.slice(), resposta: q.correct, expl: q.exp || '', tema: temaLabel, dif: _port9DifDe(texto, difMap, dif) });
  });
  return out;
}

// Bancos dos guias de obras com opts "(A) …" e correct = letra (PT_LUS_BANCO…)
function _port9ConvBancoLetra(arr, t, temaLabel, difMap) {
  var letras = ['A', 'B', 'C', 'D', 'E'];
  var out = [];
  (arr || []).forEach(function (q) {
    if (!q || !q.opts || !q.correct) return;
    var idx = letras.indexOf(q.correct);
    if (idx < 0 || idx >= q.opts.length) return;
    var ops = q.opts.map(function (o) { return String(o).replace(/^\([A-E]\)\s*/, ''); });
    out.push({ t: t, tipo: 'mc', enun: q.enun, opcoes: ops, resposta: ops[idx], expl: q.exp || '', tema: temaLabel, dif: _port9DifDe(q.enun.toLowerCase(), difMap, 'medio') });
  });
  return out;
}

/* Mapas de dificuldade por questão (afinados à mão, conteúdo do 9.º ano).
   Padrões em minúsculas; primeiro match ganha. */
var _P9_DIF_FUNCOES = [
  ['predicativo do complemento direto', 'dificil'], ['modificador apositivo', 'dificil'],
  ['complemento oblíquo', 'dificil'], ['modificador do grupo verbal', 'dificil'],
  ['modificador do nome', 'medio'], ['predicativo do sujeito', 'medio'],
  ['complemento indireto', 'medio'], ['vocativo', 'facil'],
  ['complemento direto', 'facil'], ['sujeito', 'facil']
];
var _P9_DIF_TEMPOS = [
  ['mais-que-perfeito', 'dificil'], ['perfeito do conjuntivo', 'dificil'],
  ['futuro do conjuntivo', 'medio'], ['presente do conjuntivo', 'medio'],
  ['imperfeito do conjuntivo', 'medio'], ['condicional', 'medio'],
  ['perfeito simples', 'facil'], ['imperfeito do indicativo', 'facil']
];
var _P9_DIF_CLASSES = [
  ['pronome relativo', 'dificil'], ['pronome indefinido', 'medio'],
  ['determinante', 'medio'], ['imperativo', 'facil'], ['advérbio', 'facil']
];
var _P9_DIF_SUBORD = [
  ['consecutiva', 'dificil'], ['completiva', 'dificil'], ['relativa', 'dificil'],
  ['concessiva', 'medio'], ['final', 'medio'],
  ['temporal', 'facil'], ['causal', 'facil'], ['condicional', 'facil']
];
var _P9_DIF_CONECT = [
  ['concessão', 'medio'], ['condição', 'medio'], ['conclusão', 'medio'],
  ['exemplificação', 'facil'], ['causa', 'facil'], ['adição', 'facil']
];
var _P9_DIF_FIGURAS = [
  ['metonímia', 'dificil'], ['antítese', 'medio'], ['anáfora', 'medio'],
  ['pleonasmo', 'medio'], ['eufemismo', 'medio'], ['ironia', 'medio'],
  ['aliteração', 'medio'], ['assonância', 'medio'],
  ['metáfora', 'facil'], ['comparação', 'facil'], ['personificação', 'facil'], ['hipérbole', 'facil']
];
var _P9_DIF_CONTOS = [
  ['conclusão de «a palavra mágica»', 'dificil'], ['critica sobretudo', 'dificil'], ['recusa de joão', 'dificil'],
  ['significado de «inócuo»', 'facil'], ['conflito familiar', 'facil'], ['«o mesmo saco»', 'facil'],
  ['caracterizam-se', 'facil']
];
var _P9_DIF_LUS = [
  ['captatio', 'dificil'], ['plano mitológico', 'dificil'], ['sintetiza melhor', 'dificil'],
  ['mares nunca dantes', 'facil'], ['vénus', 'facil'], ['no canto', 'facil'],
  ['superiores a', 'medio'], ['velho do restelo', 'medio'], ['adamastor', 'medio'],
  ['inês', 'medio'], ['ilha dos amores', 'medio'], ['glória de mandar', 'medio']
];
var _P9_DIF_BARCA = [
  ['confessado e comungado', 'dificil'], ['cómico de linguagem', 'dificil'],
  ['únicas figuras', 'facil'], ['objetos de cena', 'facil'], ['onzeneiro', 'facil'],
  ['corregedor e o procurador', 'facil'], ['duas barcas', 'facil'],
  ['parvo', 'medio'], ['frade', 'medio'], ['brísida', 'medio'], ['enforcado', 'medio'], ['pajem', 'medio']
];
var _P9_DIF_POESIA = [
  ['contagem das sílabas', 'dificil'], ['malhas que o império', 'dificil'],
  ['sujeito poético é', 'facil'], ['terceto e', 'facil'], ['abab', 'facil'], ['«eles não sabem»', 'facil'],
  ['duas quadras e dois tercetos', 'facil'],
  ['sete sílabas', 'medio'], ['métrica regular', 'medio'],
  ['menino da sua mãe', 'medio'], ['camões e a tença', 'medio'], ['pedradas', 'medio']
];

function _port9FichaBanco(cap) {
  var out = (_port9Banco[cap] || []).slice();
  function add(a) { out = out.concat(a); }
  if (cap === 1) {
    if (typeof PT_LUS_BANCO !== 'undefined') add(_port9ConvBancoLetra(PT_LUS_BANCO, '2', 'Os Lusíadas', _P9_DIF_LUS));
    if (typeof PT_BARCA_BANCO !== 'undefined') add(_port9ConvBancoLetra(PT_BARCA_BANCO, '1', 'Auto da Barca do Inferno', _P9_DIF_BARCA));
    if (typeof PT_POESIA_BANCO !== 'undefined') add(_port9ConvBancoLetra(PT_POESIA_BANCO, '4', 'Poesia', _P9_DIF_POESIA));
    if (typeof PT_CONTOS_BANCO !== 'undefined') add(_port9ConvBancoLetra(PT_CONTOS_BANCO, '3', 'Leitura de Contos', _P9_DIF_CONTOS));
  } else if (cap === 2) {
    if (typeof PT_CLASSES_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_CLASSES_BANCO, 'Identifica a classe da palavra destacada: ', '1', 'Classes de palavras', 'facil', _P9_DIF_CLASSES));
    if (typeof PT_FUNCOES_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_FUNCOES_BANCO, 'Indica a função sintática do elemento destacado: ', '2', 'Funções sintáticas', 'medio', _P9_DIF_FUNCOES));
    if (typeof PT_SUBORDINADAS_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_SUBORDINADAS_BANCO, 'Classifica a oração destacada: ', '3', 'Orações subordinadas', 'medio', _P9_DIF_SUBORD));
    if (typeof PT_CONECTORES_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_CONECTORES_BANCO, 'Seleciona o conector que completa a frase: ', '3', 'Conectores', 'facil', _P9_DIF_CONECT));
    if (typeof PT_TEMPOS_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_TEMPOS_BANCO, 'Identifica o tempo e o modo da forma verbal destacada: ', '4', 'Tempos verbais', 'medio', _P9_DIF_TEMPOS));
  } else if (cap === 5) {
    if (typeof PT_FIGURAS_BANCO !== 'undefined') add(_port9ConvBancoMod(PT_FIGURAS_BANCO, 'Identifica a figura de estilo presente em: ', '1', 'Figuras de estilo', 'facil', _P9_DIF_FIGURAS));
  }
  return out;
}

// Baralha e tira n questões do banco alargado, respeitando o nível pedido.
// Primeiro só questões DO nível; se não chegarem, completa com as do nível
// mais próximo (médio→fácil→difícil; difícil→médio→fácil; fácil→médio→difícil),
// para que Fácil, Médio e Difícil deem fichas realmente diferentes.
function _port9FichaSlice(banco, n, dif) {
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
  (function(){ var pj=document.getElementById('port9p-jogos'); if(pj && !document.getElementById('port9-jogos-atr')){ var d=document.createElement('div'); d.id='port9-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('port9-jogos-atr',{curso:'port9',cursoNome:'Português 9.º',tipo:'jogo',nivel:'',caps:_port9CapMeta.map(function(mm){return {n:mm.n,label:mm.label};})}); })();
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
  sts: {},             // { cap: { stIdx(1..n): true } } tópicos por capítulo; vazio = todos
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Tópicos (índices 1..n) escolhidos para um capítulo; null = todos.
function _port9gfStsSel(cap) {
  var sel = _port9gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves t do banco correspondentes aos tópicos escolhidos; null = todos.
function _port9gfTemasSel(cap) {
  var sts = _port9gfStsSel(cap);
  if (!sts) return null;
  var mapa = _port9SubtemaTemas[cap] || {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

// Constrói a lista de capítulos selecionáveis e, para cada capítulo
// selecionado, os chips dos tópicos (subtemas) — a dona pediu para poder
// gerar fichas só de um tópico (ex.: só Os Lusíadas, só Funções Sintáticas).
function port9FichasBuildNav() {
  if(typeof Atribuir!=='undefined'&&Atribuir.fixo) Atribuir.fixo('port9-fichas-atr','port9AtribuirFicha');
  var el = document.getElementById('port9-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com conteúdo
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
    // tópicos do capítulo selecionado
    if (sel) {
      var sts = _port9Subtemas[m.n] || [];
      if (sts.length) {
        var escolhidos = _port9gf.sts[m.n] || {};
        var algumSt = _port9gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Tópicos:</span>';
        h += '<button onclick="port9gfToggleSt(' + m.n + ',0,this)" style="' + _port9gfStStyle(!algumSt, color) + '">Todos</button>';
        sts.forEach(function (st, i) {
          var on = !!escolhidos[i + 1];
          h += '<button onclick="port9gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _port9gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

function _port9gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function port9gfToggleCap(cap, btn) {
  _port9gf.caps[cap] = !_port9gf.caps[cap];
  if (!_port9gf.caps[cap]) delete _port9gf.sts[cap]; // desmarcar cap limpa os tópicos
  port9FichasBuildNav(); // re-render para mostrar/esconder a linha de tópicos
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o tópico.
function port9gfToggleSt(cap, idx, btn) {
  if (idx === 0) {
    delete _port9gf.sts[cap];
  } else {
    if (!_port9gf.sts[cap]) _port9gf.sts[cap] = {};
    _port9gf.sts[cap][idx] = !_port9gf.sts[cap][idx];
    if (_port9gfStsSel(cap) === null) delete _port9gf.sts[cap]; // tudo desmarcado = todos
  }
  port9FichasBuildNav();
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
    // PT: a ficha vem toda do banco alargado (domínio + módulos realojados),
    // restringido aos tópicos escolhidos (se a dona/aluno escolheu algum)
    var pool = _port9FichaBanco(cap);
    var temasSel = _port9gfTemasSel(cap);
    if (temasSel) {
      var filtrado = pool.filter(function (q) { return temasSel.indexOf(q.t) !== -1; });
      if (filtrado.length) pool = filtrado;
    }
    return _port9FichaSlice(pool, n, _port9gf.dif);
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

    // Resumo teórico (das flashcards), restringido aos tópicos escolhidos
    // quando o filtro apanha cartões suficientes (senão mostra o domínio todo)
    if (_port9gf.tipos.resumo) {
      var cards = _port9Cards[cap] || [];
      var stsR = _port9gfStsSel(cap);
      if (stsR && cards.length) {
        var palavras = [];
        stsR.forEach(function (i) {
          String((_port9Subtemas[cap] || [])[i - 1] || '').toLowerCase().split(/\s+/).forEach(function (w) {
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
      var genM = _port9Gerador(cap);
      var bancoM = genM ? null : _port9FichaBanco(cap); // PT: sem gerador, usa o banco alargado
      var stsSelM = _port9gfStsSel(cap); // só minitestes dos tópicos escolhidos
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        if (stsSelM && stsSelM.indexOf(si + 1) === -1) return;
        var temas = mapa[si + 1] || [String(si + 1)];
        var exsM = [];
        if (genM) {
          for (var q = 0; q < 4; q++) {
            var tema = temas[q % temas.length];
            var ex = genM(tema, (q % 2 === 0) ? 'mc' : 'fill', _port9gf.dif);
            if (ex) exsM.push(ex);
          }
        } else {
          var poolM = bancoM.filter(function (qb) { return temas.indexOf(qb.t) !== -1; });
          if (!poolM.length) poolM = bancoM;
          exsM = _port9FichaSlice(poolM, 4, _port9gf.dif);
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

  // nome dos capítulos no cabeçalho, com os tópicos escolhidos entre parêntesis
  var nomesCaps = capsSel.map(function(c) {
    var nome = _port9CapMeta[c - 1].label;
    var sts = _port9gfStsSel(c);
    if (sts) {
      var nomes = sts.map(function (i) { return (_port9Subtemas[c] || [])[i - 1] || ''; }).filter(function (x) { return x; });
      if (nomes.length) nome += ' (' + nomes.join(', ') + ')';
    }
    return nome;
  }).join(', ');
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
  _port9DeepLink();
}

/* Deep-link de tarefa atribuída: ?abrir=praticar&cap=2&st=1&nivel=medio
   abre a tab Exercícios já no capítulo/subtema/nível indicados. */
function _port9DeepLink() {
  try {
    var p = new URLSearchParams(window.location.search);
    if (p.get('abrir') === 'fichas') { var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_port9gf){ _port9gf.caps={}; cs.forEach(function(n){ _port9gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _port9gf.dif=p.get('dif'); } if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Ficha concluída');},400); setTimeout(function(){ port9SwitchTab('fichas', null); }, 250); return; }
    if (p.get('abrir') === 'jogos') { var jc=parseInt(p.get('cap'),10); if(jc&&_port9Prat) _port9Prat.cap=jc; if(p.get('tarefa'))setTimeout(function(){tarefaEntregaBar(p.get('tarefa'),'Jogo concluído');},400); setTimeout(function(){ port9SwitchTab('jogos', null); var jg=p.get('jogo'); if(jg&&typeof ptJogoAbrir==='function')setTimeout(function(){try{ptJogoAbrir(jg);}catch(e){}},250); }, 250); return; }
    if (p.get('abrir') !== 'praticar') return;
    var cap = parseInt(p.get('cap'), 10) || 1;
    var st = parseInt(p.get('st'), 10) || 0;
    var nivel = p.get('nivel') || 'medio';
    if (p.get('tarefa')) { _port9TarefaAtiva = p.get('tarefa'); _port9TarefaResp = {}; }
    _port9Prat.cap = cap; _port9Prat.st = st; _port9Prat.nivel = nivel;
    setTimeout(function () {
      // switchTab('exercicios') já chama port9BuildPraticarNav, que gera
      // os exercícios do cap/subtema/nível definidos acima.
      port9SwitchTab('exercicios', null);
    }, 250);
  } catch (e) {}
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
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'No Auto da Barca do Inferno, que figura representa a usura (cobiça do dinheiro)?', opcoes: ['O Onzeneiro', 'O Frade', 'O Sapateiro', 'O Fidalgo'], resposta: 'O Onzeneiro', expl: 'O Onzeneiro é a figura-tipo do usurário, condenado pela sua avareza.', tema: 'T1 · Auto da Barca' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Quem julga as almas que merecem a salvação no Auto da Barca do Inferno?', opcoes: ['O Anjo', 'O Diabo', 'O Parvo', 'O Fidalgo'], resposta: 'O Anjo', expl: 'O Anjo comanda a barca do Paraíso; o Diabo a do Inferno.', tema: 'T1 · Auto da Barca' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Os Lusíadas narram sobretudo a viagem de:', opcoes: ['Vasco da Gama à Índia', 'Pedro Álvares Cabral ao Brasil', 'Colombo à América', 'Magalhães à volta ao mundo'], resposta: 'Vasco da Gama à Índia', expl: 'A epopeia celebra a viagem de Vasco da Gama (1497-98) como feito heroico português.', tema: 'T2 · Os Lusíadas' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'No episódio do Adamastor, esta figura simboliza:', opcoes: ['os perigos e o medo do mar desconhecido', 'o amor entre os marinheiros', 'a riqueza da Índia', 'a paz após a viagem'], resposta: 'os perigos e o medo do mar desconhecido', expl: 'O Adamastor, gigante do Cabo das Tormentas, personifica os perigos da navegação.', tema: 'T2 · Os Lusíadas' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Que episódio de Os Lusíadas trata de um amor trágico que termina em morte?', opcoes: ['Inês de Castro', 'A Ilha dos Amores', 'A Proposição', 'O Consílio dos Deuses'], resposta: 'Inês de Castro', expl: 'O episódio de Inês de Castro narra o seu amor por D. Pedro e o seu assassínio.', tema: 'T2 · Os Lusíadas' },
    { t: '3', tipo: 'mc', dif: 'facil', enun: 'Um conto é uma narrativa:', opcoes: ['curta, com uma só ação central', 'longa, com muitas personagens', 'sempre em verso', 'sem narrador'], resposta: 'curta, com uma só ação central', expl: 'O conto caracteriza-se pela brevidade e por concentrar-se numa única ação.', tema: 'T3 · Contos' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'A «voz» que exprime emoções num poema chama-se:', opcoes: ['sujeito poético', 'narrador', 'autor', 'personagem'], resposta: 'sujeito poético', expl: 'O sujeito poético é a entidade que fala no texto lírico: não se confunde com o autor.', tema: 'T4 · Poesia' }
  ],
  // ── Domínio 2 · Gramática ──
  2: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Na frase «O João comprou um livro», qual é a classe de «livro»?', opcoes: ['nome', 'verbo', 'adjetivo', 'advérbio'], resposta: 'nome', expl: '«Livro» designa um ser/objeto → é um nome (substantivo).', tema: 'T1 · Classes de Palavras' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Na frase «A Maria leu o livro», qual é a função sintática de «o livro»?', opcoes: ['complemento direto', 'sujeito', 'complemento indireto', 'predicativo do sujeito'], resposta: 'complemento direto', expl: 'Responde a «leu o quê?» sem preposição → complemento direto.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Ofereci flores à minha mãe», «à minha mãe» é:', opcoes: ['complemento indireto', 'complemento direto', 'sujeito', 'modificador'], resposta: 'complemento indireto', expl: 'Responde a «a quem?» com a preposição a → complemento indireto.', tema: 'T2 · Funções Sintáticas' },
    { t: '3', tipo: 'mc', dif: 'dificil', enun: 'A oração sublinhada em «Disse QUE VINHA» é:', opcoes: ['subordinada substantiva completiva', 'coordenada copulativa', 'subordinada adverbial', 'oração principal'], resposta: 'subordinada substantiva completiva', expl: 'Completa o sentido do verbo «disse» e funciona como complemento → completiva.', tema: 'T3 · Orações' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Espero que tu venhas», o verbo «venhas» está no modo:', opcoes: ['conjuntivo', 'indicativo', 'imperativo', 'condicional'], resposta: 'conjuntivo', expl: 'Exprime um desejo/hipótese dependente → conjuntivo (presente).', tema: 'T4 · Modos Verbais' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Qual destas palavras é um determinante?', opcoes: ['aquele', 'correr', 'rapidamente', 'belo'], resposta: 'aquele', expl: '«Aquele» é determinante demonstrativo (acompanha o nome).', tema: 'T1 · Classes de Palavras' }
  ],
  // ── Domínio 3 · Leitura ──
  3: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'O assunto central de que um texto trata chama-se:', opcoes: ['tema', 'título', 'narrador', 'conclusão'], resposta: 'tema', expl: 'O tema é o assunto central; distingue-se da ideia principal (o que se afirma sobre ele).', tema: 'T1 · Compreensão' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Um texto que defende uma tese com argumentos é predominantemente:', opcoes: ['argumentativo', 'narrativo', 'descritivo', 'dialogal'], resposta: 'argumentativo', expl: 'O texto argumentativo apresenta uma tese e fundamenta-a com argumentos.', tema: 'T2 · Tipologias' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Deduzir informação que o texto não diz explicitamente é:', opcoes: ['inferir', 'resumir', 'citar', 'parafrasear'], resposta: 'inferir', expl: 'Inferir é tirar conclusões a partir de pistas do texto.', tema: 'T3 · Sentidos' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Na expressão «a noite da sua vida», «noite» tem sentido:', opcoes: ['conotativo', 'denotativo', 'literal', 'objetivo'], resposta: 'conotativo', expl: 'Sentido figurado (tristeza/dificuldade), não o literal de período do dia.', tema: 'T3 · Sentidos' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Um narrador que conta a história na 1.ª pessoa é:', opcoes: ['participante', 'omnisciente', 'ausente', 'não participante'], resposta: 'participante', expl: 'O narrador de 1.ª pessoa participa na ação que narra.', tema: 'T1 · Compreensão' }
  ],
  // ── Domínio 4 · Escrita ──
  4: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'A estrutura típica de um texto de opinião é:', opcoes: ['introdução, desenvolvimento, conclusão', 'só desenvolvimento', 'título e lista', 'diálogo e desfecho'], resposta: 'introdução, desenvolvimento, conclusão', expl: 'Introdução (tese), desenvolvimento (argumentos), conclusão (reafirma a posição).', tema: 'T1 · Texto de Opinião' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'No exame, o texto de opinião deve ter:', opcoes: ['entre 160 e 260 palavras', 'no máximo 50 palavras', 'exatamente 100 palavras', 'sem limite'], resposta: 'entre 160 e 260 palavras', expl: 'O exame de 9.º pede um mínimo de 160 e um máximo de 260 palavras.', tema: 'T1 · Texto de Opinião' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'A sequência de um texto narrativo é, em geral:', opcoes: ['situação inicial, conflito, desenlace', 'tese, argumentos, conclusão', 'pergunta e resposta', 'introdução e índice'], resposta: 'situação inicial, conflito, desenlace', expl: 'A narrativa progride da situação inicial, pelo conflito, até ao desenlace.', tema: 'T2 · Texto Narrativo' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Palavras como «além disso», «contudo», «portanto» são:', opcoes: ['conectores', 'adjetivos', 'nomes', 'interjeições'], resposta: 'conectores', expl: 'Conectores ligam ideias e dão coesão ao texto.', tema: 'T1 · Coesão' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Um texto que apresenta e explica informação de forma objetiva é:', opcoes: ['expositivo', 'de opinião', 'lírico', 'dramático'], resposta: 'expositivo', expl: 'O texto expositivo informa de forma clara e objetiva.', tema: 'T2 · Texto Expositivo' }
  ],
  // ── Domínio 5 · Recursos Expressivos ──
  5: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «os teus olhos são duas estrelas», a figura de estilo é:', opcoes: ['metáfora', 'comparação', 'hipérbole', 'aliteração'], resposta: 'metáfora', expl: 'Identifica olhos e estrelas SEM palavra de ligação → metáfora.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «corre como o vento», a figura de estilo é:', opcoes: ['comparação', 'metáfora', 'personificação', 'eufemismo'], resposta: 'comparação', expl: 'Usa «como» para aproximar dois elementos → comparação.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «o vento gemia na noite», a figura é:', opcoes: ['personificação', 'hipérbole', 'antítese', 'ironia'], resposta: 'personificação', expl: 'Atribui uma ação humana (gemer) ao vento → personificação.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «chorei rios de lágrimas», a figura é:', opcoes: ['hipérbole', 'comparação', 'metáfora', 'anáfora'], resposta: 'hipérbole', expl: 'Exagero intencional para dar ênfase → hipérbole.', tema: 'T1 · Figuras' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'A repetição de sons consonânticos («o rato roeu a rolha») é:', opcoes: ['aliteração', 'anáfora', 'enumeração', 'metáfora'], resposta: 'aliteração', expl: 'Repetição de sons (r) para musicalidade → aliteração.', tema: 'T2 · Recursos' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Um verso de 10 sílabas métricas chama-se:', opcoes: ['decassílabo', 'redondilha maior', 'alexandrino', 'octossílabo'], resposta: 'decassílabo', expl: 'Dez sílabas métricas = decassílabo (a medida de Os Lusíadas).', tema: 'T3 · Versificação' }
  ]
};

/* ════════════════════════════════════════════════════════════════
   REFORÇO DO BANCO (passo 3 do plano PT) — mais questões por domínio,
   com nível explícito (dif). Os domínios 1, 2 e 5 são também servidos
   pelos bancos dos módulos via _port9FichaBanco; aqui reforçam-se
   sobretudo Leitura (3) e Escrita (4).
   ════════════════════════════════════════════════════════════════ */
_port9Banco[1] = _port9Banco[1].concat([
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'No Auto da Barca do Inferno, que figuras se salvam?', opcoes: ['O Parvo e os Quatro Cavaleiros', 'O Fidalgo e o Frade', 'A Alcoviteira e o Judeu', 'O Sapateiro e o Onzeneiro'], resposta: 'O Parvo e os Quatro Cavaleiros', expl: 'Só o Parvo (sem malícia) e os Quatro Cavaleiros (morreram a combater pela fé) escapam à barca do Inferno.', tema: 'T1 · Auto da Barca' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'No Auto da Barca do Inferno, o objeto de cena que cada figura transporta simboliza:', opcoes: ['o pecado que a condena', 'a riqueza da família', 'um presente para o Anjo', 'a sua terra natal'], resposta: 'o pecado que a condena', expl: 'O bolsão do Onzeneiro (usura), a vara do Corregedor (justiça corrupta), o baraço do Enforcado… cada símbolo denuncia o pecado da figura.', tema: 'T1 · Auto da Barca' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'O Fidalgo do Auto da Barca do Inferno é condenado sobretudo por:', opcoes: ['tirania e presunção', 'roubo ao povo no ofício', 'feitiçaria', 'usura'], resposta: 'tirania e presunção', expl: 'O Fidalgo desprezava o povo e vivia na vaidade (o pajem, o manto, a cadeira): é condenado pela tirania e pela presunção.', tema: 'T1 · Auto da Barca' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'No episódio do Velho do Restelo, critica-se sobretudo:', opcoes: ['a «vã cobiça» e a «glória de mandar»', 'a coragem dos marinheiros', 'os deuses do Olimpo', 'a rota escolhida por Vasco da Gama'], resposta: 'a «vã cobiça» e a «glória de mandar»', expl: 'O Velho do Restelo condena a ambição e a sede de poder que motivam a expansão marítima.', tema: 'T2 · Os Lusíadas' },
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'Quantos cantos tem Os Lusíadas?', opcoes: ['10', '8', '12', '9'], resposta: '10', expl: 'A epopeia organiza-se em 10 cantos, em oitavas de versos decassílabos.', tema: 'T2 · Os Lusíadas' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Num conto, o narrador omnisciente:', opcoes: ['conhece os pensamentos e sentimentos de todas as personagens', 'participa na ação como protagonista', 'desconhece o desfecho da história', 'é sempre uma personagem secundária'], resposta: 'conhece os pensamentos e sentimentos de todas as personagens', expl: 'Omnisciente = que sabe tudo: acede ao interior de todas as personagens e a factos que elas desconhecem.', tema: 'T3 · Contos' },
  { t: '4', tipo: 'mc', dif: 'facil', enun: 'Uma estrofe de quatro versos chama-se:', opcoes: ['quadra', 'terceto', 'oitava', 'décima'], resposta: 'quadra', expl: '2 versos = dístico; 3 = terceto; 4 = quadra; 8 = oitava; 10 = décima.', tema: 'T4 · Poesia' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'A rima cruzada segue o esquema:', opcoes: ['ABAB', 'AABB', 'ABBA', 'AAAA'], resposta: 'ABAB', expl: 'Cruzada = ABAB; emparelhada = AABB; interpolada = ABBA.', tema: 'T4 · Poesia' }
]);

_port9Banco[2] = _port9Banco[2].concat([
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Na frase «Estuda, pois amanhã tens teste», a oração «pois amanhã tens teste» é:', opcoes: ['coordenada explicativa', 'coordenada adversativa', 'coordenada disjuntiva', 'subordinada final'], resposta: 'coordenada explicativa', expl: '«Pois» introduz uma justificação/explicação do que se afirmou: oração coordenada explicativa.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'Em «Ou estudas, ou reprovas», as orações são coordenadas:', opcoes: ['disjuntivas', 'copulativas', 'adversativas', 'conclusivas'], resposta: 'disjuntivas', expl: '«Ou… ou» apresenta alternativas que se excluem: coordenação disjuntiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Pensou muito; logo, decidiu bem», a segunda oração é coordenada:', opcoes: ['conclusiva', 'explicativa', 'adversativa', 'disjuntiva'], resposta: 'conclusiva', expl: '«Logo» introduz uma conclusão do que foi dito antes: coordenada conclusiva.', tema: 'T3 · Orações' },
  { t: '4', tipo: 'mc', dif: 'dificil', enun: 'Em «Se eu tivesse estudado, teria passado», a forma «teria passado» está no:', opcoes: ['condicional composto', 'pretérito mais-que-perfeito composto do indicativo', 'futuro composto do indicativo', 'pretérito perfeito composto do conjuntivo'], resposta: 'condicional composto', expl: '«Teria» (condicional de ter) + particípio «passado» = condicional composto: exprime o que teria acontecido.', tema: 'T4 · Modos Verbais' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'A palavra «Ai!» pertence à classe:', opcoes: ['interjeição', 'advérbio', 'conjunção', 'pronome'], resposta: 'interjeição', expl: 'As interjeições exprimem emoções ou reações (Ai!, Olá!, Ufa!).', tema: 'T1 · Classes de Palavras' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «A Maria parece cansada», «cansada» desempenha a função de:', opcoes: ['predicativo do sujeito', 'complemento direto', 'modificador do nome', 'sujeito'], resposta: 'predicativo do sujeito', expl: '«Parecer» é verbo copulativo, «cansada» atribui uma característica ao sujeito: predicativo do sujeito.', tema: 'T2 · Funções Sintáticas' }
]);

_port9Banco[3] = _port9Banco[3].concat([
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'Uma notícia é, predominantemente, um texto:', opcoes: ['informativo', 'argumentativo', 'lírico', 'dramático'], resposta: 'informativo', expl: 'A notícia relata factos com objetividade: é um género jornalístico informativo.', tema: 'T2 · Tipologias' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'O primeiro parágrafo de uma notícia (lead) responde, em regra, às perguntas:', opcoes: ['quem, o quê, quando, onde', 'quanto custa e a quem interessa', 'só porquê e como', 'qual é a opinião do jornalista'], resposta: 'quem, o quê, quando, onde', expl: 'O lead concentra a informação essencial: quem fez o quê, quando e onde (o como e o porquê desenvolvem-se a seguir).', tema: 'T2 · Tipologias' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'A principal intenção do texto publicitário é:', opcoes: ['persuadir o destinatário', 'informar com objetividade', 'narrar acontecimentos passados', 'descrever paisagens'], resposta: 'persuadir o destinatário', expl: 'A publicidade usa a função apelativa da linguagem: quer convencer o destinatário a agir (comprar, aderir…).', tema: 'T2 · Tipologias' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Um bom resumo deve:', opcoes: ['manter as ideias principais, por palavras próprias e sem opiniões', 'copiar as frases mais importantes do texto', 'acrescentar a opinião de quem resume', 'ser mais extenso do que o original'], resposta: 'manter as ideias principais, por palavras próprias e sem opiniões', expl: 'Resumir é condensar a informação essencial com fidelidade ao texto e sem comentários pessoais.', tema: 'T1 · Compreensão' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'A ideia principal de um parágrafo encontra-se, muitas vezes:', opcoes: ['na frase inicial (frase-tópico)', 'sempre na última palavra', 'no título do livro', 'nas notas de rodapé'], resposta: 'na frase inicial (frase-tópico)', expl: 'A frase-tópico abre o parágrafo e anuncia a ideia que as restantes frases desenvolvem.', tema: 'T1 · Compreensão' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'A expressão «Estou morto de fome» é um exemplo de sentido:', opcoes: ['figurado (hipérbole)', 'literal', 'denotativo', 'técnico'], resposta: 'figurado (hipérbole)', expl: 'Ninguém está literalmente morto: é um exagero expressivo, sentido figurado.', tema: 'T3 · Sentidos' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Ler «nas entrelinhas» significa:', opcoes: ['inferir o que está implícito', 'ler em voz alta', 'saltar parágrafos', 'decorar o texto'], resposta: 'inferir o que está implícito', expl: 'É captar o que o texto sugere sem dizer explicitamente: fazer inferências.', tema: 'T3 · Sentidos' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Lê: «O João fechou a janela, vestiu o casaco e aproximou-se da lareira.» Que inferência é legítima?', opcoes: ['Estava frio.', 'Estava calor.', 'Era pleno verão.', 'O João ia sair de casa.'], resposta: 'Estava frio.', expl: 'As três ações (fechar a janela, vestir o casaco, ir para a lareira) apontam todas para o frio: inferência apoiada no texto.', tema: 'T1 · Compreensão' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'O diário e a carta pessoal caracterizam-se por:', opcoes: ['uso da 1.ª pessoa e subjetividade', 'uso da 3.ª pessoa e objetividade', 'linguagem científica', 'ausência total de marcas pessoais'], resposta: 'uso da 1.ª pessoa e subjetividade', expl: 'São textos pessoais: quem escreve fala de si, na 1.ª pessoa, com marcas de subjetividade.', tema: 'T2 · Tipologias' },
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'O sentido denotativo de «coração» é:', opcoes: ['órgão que bombeia o sangue', 'o centro das emoções', 'a coragem', 'o amor'], resposta: 'órgão que bombeia o sangue', expl: 'Denotação = sentido literal, de dicionário; «centro das emoções» já é conotação.', tema: 'T3 · Sentidos' }
]);

_port9Banco[4] = _port9Banco[4].concat([
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Num texto de opinião, a tese é:', opcoes: ['a posição que o autor defende', 'um exemplo concreto', 'a opinião de outro autor citado', 'uma pergunta retórica'], resposta: 'a posição que o autor defende', expl: 'A tese é o ponto de vista que todo o texto vai sustentar com argumentos.', tema: 'T1 · Texto de Opinião' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Qual é o conector mais adequado para introduzir um contra-argumento?', opcoes: ['No entanto', 'Além disso', 'Por exemplo', 'Em suma'], resposta: 'No entanto', expl: '«No entanto» marca oposição: serve para apresentar a perspetiva contrária antes de a refutar.', tema: 'T1 · Coesão' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Para introduzir a conclusão de um texto de opinião usa-se:', opcoes: ['Em suma', 'Porque', 'Se', 'Embora'], resposta: 'Em suma', expl: '«Em suma», «em conclusão», «portanto» são conectores de conclusão/síntese.', tema: 'T1 · Coesão' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Um argumento bem construído é constituído por:', opcoes: ['afirmação + justificação + exemplo', 'a tese repetida com outras palavras', 'uma citação sem fonte', 'uma sucessão de perguntas'], resposta: 'afirmação + justificação + exemplo', expl: 'Afirma-se a ideia, justifica-se com uma razão e ilustra-se com um exemplo concreto: é isto que dá força ao argumento.', tema: 'T1 · Texto de Opinião' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'No texto narrativo, o momento de maior tensão chama-se:', opcoes: ['ponto culminante (clímax)', 'situação inicial', 'desenlace', 'epílogo'], resposta: 'ponto culminante (clímax)', expl: 'O clímax é o auge do conflito, imediatamente antes da resolução.', tema: 'T2 · Texto Narrativo' },
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'O desenlace de uma narrativa é:', opcoes: ['a resolução final do conflito', 'a apresentação das personagens', 'o início do conflito', 'o título da história'], resposta: 'a resolução final do conflito', expl: 'O desenlace fecha a ação: o conflito resolve-se (bem ou mal).', tema: 'T2 · Texto Narrativo' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Num texto expositivo deve privilegiar-se:', opcoes: ['linguagem objetiva, clara e organizada', 'calão e expressões familiares', 'opiniões pessoais vincadas', 'rima e ritmo'], resposta: 'linguagem objetiva, clara e organizada', expl: 'O texto expositivo informa/explica: exige rigor, clareza e organização (introdução, desenvolvimento, conclusão).', tema: 'T3 · Texto Expositivo' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'A repetição desnecessária de palavras num texto evita-se com:', opcoes: ['pronomes e sinónimos', 'mais adjetivos', 'frases mais longas', 'pontos de exclamação'], resposta: 'pronomes e sinónimos', expl: 'A substituição pronominal e lexical (sinónimos, hiperónimos) é um mecanismo de coesão que evita repetições.', tema: 'T1 · Coesão' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'No exame, antes de escrever a composição deves:', opcoes: ['fazer um plano com tese, argumentos e exemplos', 'começar logo a escrever para ganhar tempo', 'escrever primeiro a conclusão', 'usar um texto decorado, seja qual for o tema'], resposta: 'fazer um plano com tese, argumentos e exemplos', expl: 'Planificar evita repetições e fugas ao tema: e o tema do exame nunca se adivinha de antemão.', tema: 'T1 · Texto de Opinião' }
]);

_port9Banco[5] = _port9Banco[5].concat([
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Um verso com sete sílabas métricas chama-se:', opcoes: ['redondilha maior', 'redondilha menor', 'decassílabo', 'alexandrino'], resposta: 'redondilha maior', expl: 'Redondilha maior = 7 sílabas; redondilha menor = 5; decassílabo = 10; alexandrino = 12.', tema: 'T3 · Versificação' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Na contagem das sílabas métricas de um verso conta-se:', opcoes: ['até à última sílaba tónica', 'todas as sílabas gramaticais', 'apenas as vogais abertas', 'até à primeira pausa'], resposta: 'até à última sílaba tónica', expl: 'A escansão termina na última sílaba acentuada do verso: as átonas finais não contam.', tema: 'T3 · Versificação' },
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'A rima emparelhada segue o esquema:', opcoes: ['AABB', 'ABAB', 'ABBA', 'ABCA'], resposta: 'AABB', expl: 'Emparelhada = AABB; cruzada = ABAB; interpolada = ABBA.', tema: 'T3 · Versificação' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'A repetição da mesma vogal em palavras próximas, para criar musicalidade, chama-se:', opcoes: ['assonância', 'aliteração', 'anáfora', 'enumeração'], resposta: 'assonância', expl: 'Assonância = repetição de sons vocálicos; aliteração = repetição de sons consonânticos.', tema: 'T2 · Recursos' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «Lisboa inteira aplaudiu a equipa», a figura presente é:', opcoes: ['metonímia (o lugar pelos seus habitantes)', 'personificação', 'comparação', 'eufemismo'], resposta: 'metonímia (o lugar pelos seus habitantes)', expl: 'Diz-se «Lisboa» em vez de «os habitantes de Lisboa», substituição por contiguidade: metonímia.', tema: 'T1 · Figuras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «Ele é um autêntico leão em campo», a figura é:', opcoes: ['metáfora', 'comparação', 'eufemismo', 'pleonasmo'], resposta: 'metáfora', expl: 'Identifica o jogador com um leão SEM palavra comparativa («como»): metáfora.', tema: 'T1 · Figuras' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Quanto à forma, os versos de Os Lusíadas são:', opcoes: ['decassílabos, em oitavas com esquema ABABABCC', 'redondilhas, em quadras AABB', 'alexandrinos soltos', 'versos livres'], resposta: 'decassílabos, em oitavas com esquema ABABABCC', expl: 'A oitava camoniana (oitava rima): 8 versos decassílabos rimados ABABABCC.', tema: 'T3 · Versificação' }
]);

/* ── REFORÇO 2 · questões DIFÍCEIS de contexto (estilo exame: ler, inferir,
   aplicar) — sobretudo Leitura e Escrita, que tinham défice no nível difícil. */
_port9Banco[3] = _port9Banco[3].concat([
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Lê: «Apesar de a chuva ter parado, o jogo continuou adiado, pois o relvado permanecia impraticável.» O adiamento manteve-se porque:', opcoes: ['o relvado não tinha condições de jogo', 'continuava a chover', 'os jogadores não apareceram', 'o árbitro chegou atrasado'], resposta: 'o relvado não tinha condições de jogo', expl: 'O conector «pois» introduz a causa real: mesmo sem chuva, o relvado «permanecia impraticável».', tema: 'T1 · Compreensão' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Lê: «A Marta olhou para o relógio pela quinta vez e suspirou, enquanto o autocarro não aparecia.» Do comportamento da Marta pode inferir-se que:', opcoes: ['estava impaciente com a espera', 'estava atrasada para o autocarro', 'não sabia ver as horas', 'gostava de andar de autocarro'], resposta: 'estava impaciente com a espera', expl: 'Olhar repetidamente para o relógio e suspirar são sinais de impaciência: inferência apoiada nas ações descritas.', tema: 'T1 · Compreensão' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Lê: «O meu irmão é um “génio” a estacionar: precisou de seis tentativas.» As aspas em «génio» sugerem:', opcoes: ['ironia: quer dizer-se o contrário', 'admiração sincera', 'uma citação de outro autor', 'um termo técnico'], resposta: 'ironia: quer dizer-se o contrário', expl: 'O contexto (seis tentativas) mostra que «génio» é usado com sentido irónico: afirma-se o contrário do que se pensa.', tema: 'T3 · Sentidos' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Lê: «Naquela loja, as bicicletas vendem-se como pão quente.» Quer dizer-se que as bicicletas:', opcoes: ['se vendem muito e depressa', 'são vendidas junto à padaria', 'são baratas como o pão', 'se estragam com o calor'], resposta: 'se vendem muito e depressa', expl: '«Vender-se como pão quente» é uma expressão idiomática: sair rapidamente, ter muita procura.', tema: 'T3 · Sentidos' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Lê: « — Não vou desistir: repetiu, de punhos cerrados.» Os punhos cerrados reforçam, na personagem:', opcoes: ['a determinação', 'o medo', 'a alegria', 'o cansaço'], resposta: 'a determinação', expl: 'O gesto físico (punhos cerrados) intensifica a firmeza das palavras: caracterização indireta da personagem.', tema: 'T1 · Compreensão' }
]);

_port9Banco[4] = _port9Banco[4].concat([
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Qual é a sequência mais lógica para desenvolver um argumento num texto de opinião?', opcoes: ['afirmação → justificação → exemplo', 'exemplo → conclusão → afirmação', 'conclusão → afirmação → tese', 'justificação → tese → título'], resposta: 'afirmação → justificação → exemplo', expl: 'Primeiro afirma-se a ideia, depois justifica-se com uma razão e ilustra-se com um exemplo concreto.', tema: 'T1 · Texto de Opinião' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em qual das frases o registo de língua é adequado a um texto de opinião escolar?', opcoes: ['Considero que o uso do telemóvel nas aulas deve ser regulado.', 'Acho que isso dos telemóveis é uma grande cena.', 'Os telemóveis? Nada a ver, fogo.', 'O pessoal não curte nada estas regras.'], resposta: 'Considero que o uso do telemóvel nas aulas deve ser regulado.', expl: 'Num texto de opinião escolar usa-se registo cuidado: sem calão («cena», «curte») nem marcas de oralidade.', tema: 'T1 · Texto de Opinião' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Qual das frases evita a repetição em «O João leu o livro. O João gostou muito do livro.»?', opcoes: ['O João leu o livro e gostou muito dele.', 'O João leu o livro. O João adorou o livro.', 'O livro foi lido pelo João. O João gostou do livro.', 'O João leu. O João gostou.'], resposta: 'O João leu o livro e gostou muito dele.', expl: 'A coordenação e o pronome «dele» eliminam as repetições sem perder informação: mecanismos de coesão.', tema: 'T1 · Coesão' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Num texto de opinião, refutar um contra-argumento significa:', opcoes: ['apresentá-lo e mostrar porque não invalida a tua tese', 'ignorá-lo para não dar ideias ao leitor', 'aceitá-lo e mudar de tese', 'repeti-lo várias vezes'], resposta: 'apresentá-lo e mostrar porque não invalida a tua tese', expl: 'Refutar é reconhecer a objeção e desmontá-la com razões: torna a argumentação mais forte e completa.', tema: 'T1 · Texto de Opinião' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Lê: «Cheguei. Vi a casa. Era velha. Tinha medo.» O principal problema deste excerto narrativo é:', opcoes: ['frases demasiado curtas e desligadas, sem conectores', 'erros de ortografia', 'excesso de conectores', 'tempo verbal errado'], resposta: 'frases demasiado curtas e desligadas, sem conectores', expl: 'O texto precisa de coesão: «Quando cheguei e vi a casa, percebi que era velha e senti medo.»', tema: 'T2 · Texto Narrativo' }
]);

_port9Banco[5] = _port9Banco[5].concat([
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «E vi claramente visto o lume vivo» (Os Lusíadas, Canto V), «claramente visto» é um exemplo de:', opcoes: ['pleonasmo expressivo', 'eufemismo', 'comparação', 'anáfora'], resposta: 'pleonasmo expressivo', expl: 'Camões reforça a ideia de ver com «claramente visto»: redundância intencional (pleonasmo) que dá credibilidade ao relato do fogo-de-santelmo.', tema: 'T1 · Figuras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Lê: «Não sou nada. / Nunca serei nada. / Não posso querer ser nada.» (Álvaro de Campos). O recurso dominante é:', opcoes: ['anáfora (repetição em início de verso)', 'eufemismo', 'metonímia', 'comparação'], resposta: 'anáfora (repetição em início de verso)', expl: 'A repetição de «N...» no início dos três versos (não/nunca/não) martela a negação: anáfora.', tema: 'T1 · Figuras' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'No verso «As armas e os barões assinalados», o número de sílabas métricas é:', opcoes: ['10', '12', '8', '11'], resposta: '10', expl: 'A-sar-ma-se os-ba-rões-as-si-na-LA(-dos), conta-se até à última tónica («la»): decassílabo, a medida de Os Lusíadas.', tema: 'T3 · Versificação' }
]);

/* ════════════════════════════════════════════════════════════════
   MANUAL «MENSAGENS 9» · Fichas de Gramática — LOTE 1
   Fichas 5, 6, 7, 9, 11, 13, 17, 18, 21 e 23, convertidas das
   fichas/questões de aula do manual (pasta "9º ano_portugues/"),
   com TODAS as respostas conferidas no documento de Soluções.
   ════════════════════════════════════════════════════════════════ */
_port9Banco[2] = _port9Banco[2].concat([
  // ── Ficha 5 · Nome ──
  { t: '1', tipo: 'vf', dif: 'medio', enun: 'O nome «atlas» é invariável quanto ao número.', resposta: 'V', expl: 'Diz-se «o atlas» e «os atlas»: a forma não muda no plural.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'vf', dif: 'dificil', enun: 'Os nomes «cavalheiro», «infante» e «pediatra» são todos variáveis quanto ao género.', resposta: 'F', expl: '«Cavalheiro» e «infante» variam (dama/infanta), mas «pediatra» é comum de dois: o pediatra / a pediatra.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'O plural de «porta-voz» é:', opcoes: ['porta-vozes', 'portas-vozes', 'portas-voz', 'porta-vozs'], resposta: 'porta-vozes', expl: 'Em «porta-voz», «porta» é forma verbal (de portar) e não varia, só «voz» vai ao plural: porta-vozes.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'O feminino de «ator» e de «conde» é, respetivamente:', opcoes: ['atriz e condessa', 'atora e conda', 'atriz e conda', 'atora e condessa'], resposta: 'atriz e condessa', expl: 'Femininos irregulares: ator → atriz; conde → condessa.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: '«Viseu», «Beira Baixa», «Rio» e «Mónica» pertencem todos à subclasse dos nomes:', opcoes: ['próprios', 'comuns', 'comuns coletivos', 'compostos'], resposta: 'próprios', expl: 'Designam entidades únicas (terras, rios, pessoas) e escrevem-se com maiúscula: nomes próprios.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Qual destes nomes é um nome coletivo?', opcoes: ['chusma', 'tristeza', 'jantar', 'livro'], resposta: 'chusma', expl: 'Uma «chusma» é um conjunto de pessoas: nome coletivo (como «cardume» ou «elenco»).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Qual destes nomes se usa apenas no plural?', opcoes: ['férias', 'cavalo', 'país', 'escola'], resposta: 'férias', expl: 'Há nomes só usados no plural: férias, calças, óculos…', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 6 · Determinante/Pronome ──
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Na frase «A Joana, cuja irmã mora em Paris, convidou-nos para a irmos visitar estas férias.» estão presentes:', opcoes: ['dois pronomes pessoais, um determinante artigo definido, um determinante relativo e um determinante demonstrativo', 'um pronome pessoal, um determinante demonstrativo e um determinante artigo definido', 'dois determinantes artigos definidos, um pronome pessoal e um determinante relativo', 'um pronome pessoal, um determinante artigo definido, um determinante demonstrativo e um determinante relativo'], resposta: 'dois pronomes pessoais, um determinante artigo definido, um determinante relativo e um determinante demonstrativo', expl: '«A» (artigo definido), «cuja» (det. relativo), «nos» e «a» (pronomes pessoais), «estas» (det. demonstrativo).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «Amanhã, alguém bastante famoso virá à nossa escola entregar o prémio literário que ganhaste.» estão presentes:', opcoes: ['um pronome indefinido, um determinante possessivo, um determinante artigo definido e um pronome relativo', 'um pronome indefinido, um determinante possessivo e um determinante artigo definido', 'um determinante indefinido, um pronome possessivo, um determinante artigo definido e um pronome relativo', 'um determinante indefinido, um determinante possessivo e um pronome relativo'], resposta: 'um pronome indefinido, um determinante possessivo, um determinante artigo definido e um pronome relativo', expl: '«Alguém» (pron. indefinido), «nossa» (det. possessivo), «o» (artigo definido), «que» (pron. relativo).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Este é o prémio que ganhei no concurso.», a palavra «Este» é:', opcoes: ['pronome demonstrativo', 'determinante demonstrativo', 'pronome pessoal', 'determinante artigo definido'], resposta: 'pronome demonstrativo', expl: '«Este» está sozinho, sem acompanhar nenhum nome: é pronome. Se acompanhasse («este prémio»), seria determinante.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «o trabalho de Português, cujo prazo de entrega termina amanhã», a palavra «cujo» é:', opcoes: ['determinante relativo', 'pronome relativo', 'pronome interrogativo', 'conjunção subordinativa'], resposta: 'determinante relativo', expl: '«Cujo» acompanha o nome «prazo» e exprime posse: determinante relativo.', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 7 · Quantificador ──
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Na frase «Dois amigos convidaram-nos, há já algum tempo, para passarmos o dia em sua casa.», as palavras «dois», «algum» e «sua» são, respetivamente:', opcoes: ['um quantificador numeral cardinal, um quantificador existencial e um determinante possessivo', 'um quantificador numeral cardinal, um determinante possessivo e um quantificador existencial', 'um determinante possessivo, um quantificador existencial e um quantificador universal', 'um determinante possessivo, um quantificador existencial e um determinante artigo definido'], resposta: 'um quantificador numeral cardinal, um quantificador existencial e um determinante possessivo', expl: '«Dois» quantifica com número exato (numeral cardinal); «algum» indica quantidade vaga (existencial); «sua» indica posse (det. possessivo).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Muita gente foi de férias para a praia.», «muita» é um quantificador:', opcoes: ['existencial', 'universal', 'numeral', 'relativo'], resposta: 'existencial', expl: 'Indica uma quantidade indefinida (não exata, não total): quantificador existencial.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Colhemos todas as flores do jardim.», «todas» é um quantificador:', opcoes: ['universal', 'existencial', 'numeral', 'interrogativo'], resposta: 'universal', expl: 'Abrange a totalidade do conjunto (todas, sem exceção): quantificador universal.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «O meu primo tem o dobro da minha idade.», «o dobro» é um quantificador numeral:', opcoes: ['multiplicativo', 'cardinal', 'fracionário', 'ordinal'], resposta: 'multiplicativo', expl: '«O dobro», «o triplo»… multiplicam uma quantidade: numerais multiplicativos. «Metade»/«um terço» são fracionários.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Metade dos meus amigos foi para fora no verão.», «metade» é um quantificador numeral:', opcoes: ['fracionário', 'cardinal', 'multiplicativo', 'ordinal'], resposta: 'fracionário', expl: '«Metade», «um terço», «dois quartos» exprimem frações: numerais fracionários.', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 9 · Verbo (subclasses) ──
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «A que horas tens adormecido na última semana?», a forma «tens» é:', opcoes: ['verbo auxiliar dos tempos compostos', 'verbo principal transitivo direto', 'verbo copulativo', 'verbo auxiliar da passiva'], resposta: 'verbo auxiliar dos tempos compostos', expl: '«Tens adormecido» = ter + particípio: «ter» é auxiliar do tempo composto (pretérito perfeito composto).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «O verão já acabou!», o verbo «acabou» é:', opcoes: ['principal intransitivo', 'principal transitivo direto', 'copulativo', 'auxiliar'], resposta: 'principal intransitivo', expl: 'Não pede complementos, o sentido fica completo: verbo principal intransitivo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «A Joana anda toda animada com a nova escola!», o verbo «anda» é:', opcoes: ['copulativo', 'principal intransitivo', 'principal transitivo direto', 'auxiliar da passiva'], resposta: 'copulativo', expl: 'Aqui «andar» equivale a «estar» e liga o sujeito ao predicativo «animada»: verbo copulativo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «A equipa foi desclassificada devido ao atraso.», a forma «foi» é:', opcoes: ['verbo auxiliar da passiva', 'verbo principal intransitivo', 'verbo copulativo', 'verbo auxiliar dos tempos compostos'], resposta: 'verbo auxiliar da passiva', expl: '«Foi desclassificada» = ser + particípio numa frase passiva: «ser» é o auxiliar da passiva.', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 11 · Advérbio ──
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «Fizemos tudo o que era possível, no entanto a loja fechou.», «no entanto» é:', opcoes: ['locução adverbial conectiva', 'locução prepositiva', 'conjunção subordinativa', 'advérbio de modo'], resposta: 'locução adverbial conectiva', expl: '«No entanto» liga frases exprimindo oposição: locução adverbial com função conectiva.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Gosto bastante da cidade onde moro.», «onde» é um advérbio:', opcoes: ['relativo', 'interrogativo', 'de lugar', 'de modo'], resposta: 'relativo', expl: '«Onde» retoma «a cidade» e introduz a oração relativa: advérbio relativo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'O advérbio equivalente a «muito devagar» é:', opcoes: ['vagarosamente', 'rapidamente', 'dificilmente', 'raramente'], resposta: 'vagarosamente', expl: '«O automóvel seguia muito devagar» = «seguia vagarosamente» (advérbio de modo em -mente).', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 13 · Conjunções ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Comi tanto que acabei por ficar maldisposto.», «que» é uma conjunção:', opcoes: ['subordinativa consecutiva', 'subordinativa causal', 'coordenativa explicativa', 'subordinativa final'], resposta: 'subordinativa consecutiva', expl: '«Tanto… que» exprime a consequência do excesso: conjunção subordinativa consecutiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Mal chegue a casa, ligarei a confirmar.», «mal» é uma conjunção:', opcoes: ['subordinativa temporal', 'subordinativa condicional', 'coordenativa adversativa', 'subordinativa concessiva'], resposta: 'subordinativa temporal', expl: '«Mal» = «logo que/assim que»: introduz uma oração temporal.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Usei dois despertadores para não correr o risco de adormecer.», «para» introduz uma oração com valor de:', opcoes: ['finalidade', 'causa', 'consequência', 'condição'], resposta: 'finalidade', expl: '«Para» + infinitivo exprime o objetivo da ação: valor final.', tema: 'T3 · Orações' },
  // ── Ficha 17 · Sujeito, predicado e vocativo ──
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Assinala a única frase em que está presente um vocativo:', opcoes: ['A partir deste momento, caríssimos amigos, podemos dar início ao almoço!', 'A minha família já decidiu onde vamos nas férias, mas eu não faço ideia nenhuma.', 'O pai do Tiago esperou por nós no final do espetáculo.', 'São estes dois os livros que me ofereceram no último Natal.'], resposta: 'A partir deste momento, caríssimos amigos, podemos dar início ao almoço!', expl: '«Caríssimos amigos» é um chamamento, isolado por vírgulas: vocativo.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Todos os dias, apanho um dos primeiros autocarros para a escola.», o sujeito é:', opcoes: ['subentendido (eu)', 'simples («todos os dias»)', 'indeterminado', 'inexistente'], resposta: 'subentendido (eu)', expl: 'O sujeito não está expresso mas recupera-se pela forma verbal, (eu) apanho: sujeito nulo subentendido.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Pensa-se que, nos próximos anos, as alterações climáticas agravem as condições de vida na Terra.», o sujeito de «pensa-se» é:', opcoes: ['indeterminado', 'subentendido', 'simples', 'composto'], resposta: 'indeterminado', expl: '«Pensa-se» com «-se», não é possível identificar quem pensa: sujeito indeterminado.', tema: 'T2 · Funções Sintáticas' },
  // ── Ficha 18 · Funções sintáticas no grupo verbal ──
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'Em «Apesar da derrota, todos continuaram a aplaudir a equipa.», «a equipa» desempenha a função de:', opcoes: ['complemento direto', 'complemento indireto', 'sujeito', 'predicativo do sujeito'], resposta: 'complemento direto', expl: 'Aplaudir o quê? A equipa, complemento direto (substituível por «a»: «continuaram a aplaudi-la»).', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «O Paulo foi eleito delegado de turma.», «delegado de turma» desempenha a função de:', opcoes: ['predicativo do sujeito', 'complemento direto', 'predicativo do complemento direto', 'modificador do nome'], resposta: 'predicativo do sujeito', expl: 'Na passiva com «ser eleito», a qualidade atribuída ao sujeito («delegado de turma») é predicativo do sujeito.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «A professora pediu que o grupo fizesse a apresentação.», a oração «que o grupo fizesse a apresentação» desempenha a função de:', opcoes: ['complemento direto', 'complemento oblíquo', 'sujeito', 'modificador do grupo verbal'], resposta: 'complemento direto', expl: 'Pediu o quê?: a oração completiva é o complemento direto do verbo «pedir».', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Para a estreia da peça, foram todos convidados pelo autor.», «pelo autor» desempenha a função de:', opcoes: ['complemento agente da passiva', 'complemento oblíquo', 'complemento indireto', 'modificador do grupo verbal'], resposta: 'complemento agente da passiva', expl: 'Na frase passiva, quem pratica a ação surge introduzido por «por»: complemento agente da passiva.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «A turma concordou com a alteração da data da prova.», «com a alteração da data da prova» desempenha a função de:', opcoes: ['complemento oblíquo', 'complemento direto', 'complemento indireto', 'modificador do grupo verbal'], resposta: 'complemento oblíquo', expl: '«Concordar» exige um complemento com preposição («com») que não é substituível por «lhe»: complemento oblíquo.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Muita gente considera Camões o maior poeta da língua portuguesa.», «o maior poeta da língua portuguesa» desempenha a função de:', opcoes: ['predicativo do complemento direto', 'complemento direto', 'predicativo do sujeito', 'modificador do nome'], resposta: 'predicativo do complemento direto', expl: 'Com «considerar», a qualidade atribuída ao CD «Camões» é predicativo do complemento direto.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Os meus primos pertencem à minha equipa de futebol.», «à minha equipa de futebol» desempenha a função de:', opcoes: ['complemento indireto', 'complemento oblíquo', 'complemento direto', 'modificador do grupo verbal'], resposta: 'complemento indireto', expl: 'É substituível por «lhe», «pertencem-lhe»: complemento indireto.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «A minha amiga garantiu-me que não sabia de nada.», o pronome «me» desempenha a função de:', opcoes: ['complemento indireto', 'complemento direto', 'sujeito', 'predicativo do sujeito'], resposta: 'complemento indireto', expl: 'Garantiu a quem? A mim («me»): complemento indireto; o que garantiu é a oração CD.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'vf', dif: 'dificil', enun: 'Na frase «Eu achei fascinante a história que ele nos contou.», «fascinante» desempenha a função de predicativo do complemento direto.', resposta: 'V', expl: 'Com «achar», a qualidade atribuída ao CD «a história…» é predicativo do complemento direto.', tema: 'T2 · Funções Sintáticas' },
  // ── Ficha 21 · Frase ativa e passiva ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'A frase passiva correspondente a «Uma tempestade tropical afetará o país nos próximos dias.» é:', opcoes: ['«O país será afetado, nos próximos dias, por uma tempestade tropical.»', '«O país tem sido afetado por uma tempestade tropical.»', '«O país, nos próximos dias, vai ser afetado por uma tempestade tropical.»', '«O país foi afetado por uma tempestade tropical.»'], resposta: '«O país será afetado, nos próximos dias, por uma tempestade tropical.»', expl: 'O futuro «afetará» passa a «será afetado»: mantém-se o tempo verbal na passiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'A frase ativa correspondente a «Medidas severas de combate ao desperdício de água têm sido tomadas por vários países.» é:', opcoes: ['«Vários países têm tomado medidas severas de combate ao desperdício de água.»', '«Vários países tomaram medidas severas de combate ao desperdício de água.»', '«Vários países tomarão medidas severas de combate ao desperdício de água.»', '«Vários países decidiram tomar medidas severas de combate ao desperdício de água.»'], resposta: '«Vários países têm tomado medidas severas de combate ao desperdício de água.»', expl: '«Têm sido tomadas» (pretérito perfeito composto passivo) → «têm tomado» na ativa: o tempo composto mantém-se.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'A frase «A população de chitas está a crescer a uma taxa de 8% ao ano.» NÃO pode ser reescrita na passiva porque:', opcoes: ['não tem complemento direto', 'não tem sujeito', 'está no presente do indicativo', 'já é uma frase passiva'], resposta: 'não tem complemento direto', expl: 'Só frases com complemento direto podem passar à passiva (o CD torna-se sujeito). «Crescer» é intransitivo.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'Em «A exposição de fotografia foi organizada pela autarquia.», «pela autarquia» desempenha a função de:', opcoes: ['complemento agente da passiva', 'complemento oblíquo', 'sujeito', 'modificador do grupo verbal'], resposta: 'complemento agente da passiva', expl: 'Frase passiva: quem organizou (a autarquia) é o complemento agente da passiva.', tema: 'T3 · Orações' },
  // ── Ficha 23 · Subordinação adverbial ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «O cão da Rita é tão inteligente que consegue abrir a porta de casa.», a oração subordinada é adverbial:', opcoes: ['consecutiva', 'causal', 'comparativa', 'final'], resposta: 'consecutiva', expl: '«Tão… que» exprime a consequência: adverbial consecutiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «O Pedro não conseguirá jogar na equipa principal, a menos que se aplique nos treinos.», a oração subordinada é adverbial:', opcoes: ['condicional', 'concessiva', 'causal', 'temporal'], resposta: 'condicional', expl: '«A menos que» = «se não», exprime uma condição: adverbial condicional.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Faremos a caminhada, ainda que o tempo não ajude.», a oração subordinada é adverbial:', opcoes: ['concessiva', 'condicional', 'consecutiva', 'causal'], resposta: 'concessiva', expl: '«Ainda que» introduz um obstáculo que não impede a ação: adverbial concessiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «O tema foi tratado com todo o cuidado, como se se tratasse de um plano oficial.», a oração subordinada é adverbial:', opcoes: ['comparativa', 'consecutiva', 'concessiva', 'condicional'], resposta: 'comparativa', expl: '«Como se» estabelece uma comparação hipotética: adverbial comparativa.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Assinala a única frase que NÃO inclui uma oração subordinada adverbial condicional:', opcoes: ['«Ninguém se despediu de nós antes de sair!»', '«Terei de acordar cedo se a visita se confirmar.»', '«Se nos despedirmos já, conseguiremos apanhar o comboio.»', '«Ainda chegas a horas, se te apressares.»'], resposta: '«Ninguém se despediu de nós antes de sair!»', expl: '«Antes de sair» tem valor temporal, não condicional: as outras três usam «se».', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Qual destas frases exprime uma relação de finalidade?', opcoes: ['«A mãe do João acorda-o todos os dias para que não chegue atrasado à escola.»', '«A mãe do João acorda-o todos os dias porque ele não ouve o despertador.»', '«Como o João não ouve o despertador, a mãe acorda-o todos os dias.»', '«O João não ouve o despertador, por isso a mãe acorda-o.»'], resposta: '«A mãe do João acorda-o todos os dias para que não chegue atrasado à escola.»', expl: '«Para que» introduz o objetivo da ação: oração final. As outras exprimem causa ou consequência.', tema: 'T3 · Orações' }
]);

/* ════════════════════════════════════════════════════════════════
   MANUAL «MENSAGENS 9» · Fichas de Gramática — LOTE 2
   Fichas 1-4, 8, 10, 12, 15, 16, 19, 20, 22, 24-32, com TODAS as
   respostas conferidas no documento de Soluções do manual.
   t5 = subtema novo «Léxico e variação».
   ════════════════════════════════════════════════════════════════ */
_port9Banco[2] = _port9Banco[2].concat([
  // ── Ficha 1 · Pontuação ──
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'Em «Aonde vais de férias este ano, Joana?», a vírgula serve para:', opcoes: ['separar o vocativo', 'isolar o modificador', 'delimitar uma oração causal', 'marcar uma enumeração'], resposta: 'separar o vocativo', expl: '«Joana» é um chamamento (vocativo): separa-se sempre por vírgula.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «A minha viagem de sonho, um safari em África, vai ter de esperar por melhor oportunidade.», as vírgulas isolam:', opcoes: ['o modificador apositivo', 'o vocativo', 'uma oração subordinada', 'o sujeito'], resposta: 'o modificador apositivo', expl: '«Um safari em África» acrescenta informação ao nome sem o restringir: modificador apositivo, entre vírgulas.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Como tive de estudar até tarde, não consegui acordar a tempo.», a vírgula delimita:', opcoes: ['a oração subordinada adverbial causal', 'o vocativo', 'uma enumeração', 'a oração coordenada adversativa'], resposta: 'a oração subordinada adverbial causal', expl: 'A oração causal («Como tive de estudar até tarde») antecede a subordinante e separa-se por vírgula.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Gostava de ir convosco, mas este ano tenho de estudar para os exames.», a vírgula surge:', opcoes: ['antes da conjunção adversativa', 'antes do vocativo', 'a separar o sujeito do predicado', 'antes de uma oração relativa'], resposta: 'antes da conjunção adversativa', expl: 'Antes de «mas» (conjunção coordenativa adversativa) usa-se vírgula.', tema: 'T3 · Orações' },
  // ── Ficha 2 · Variação da língua ──
  { t: '5', tipo: 'mc', dif: 'facil', enun: '«Café da manhã» (Brasil) face a «pequeno-almoço» (Portugal) é um exemplo de variação:', opcoes: ['geográfica', 'social', 'histórica', 'individual'], resposta: 'geográfica', expl: 'A mesma língua varia consoante o território: variação geográfica (variedades do português).', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'O uso de «bué» (= muito) na linguagem juvenil é um exemplo de variação:', opcoes: ['social', 'geográfica', 'histórica', 'ortográfica'], resposta: 'social', expl: 'Varia com o grupo social (idade, escolaridade, profissão): variação social.', tema: 'T5 · Léxico e Variação' },
  // ── Ficha 3 · Formação de palavras ──
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'A palavra «caçada» é formada por:', opcoes: ['derivação por sufixação', 'derivação por prefixação', 'composição', 'derivação não afixal'], resposta: 'derivação por sufixação', expl: 'Caça + -ada, acrescenta-se um sufixo: derivação por sufixação.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'A palavra «malcriado» é formada por:', opcoes: ['composição (palavra + palavra)', 'composição (radical + radical)', 'derivação por prefixação', 'derivação por sufixação'], resposta: 'composição (palavra + palavra)', expl: 'Mal + criado junta duas palavras: composição morfossintática (≠ «sonoplastia», radical + radical).', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'O radical «omni-» (em «omnipresente») significa:', opcoes: ['todo', 'tempo', 'igual', 'ar'], resposta: 'todo', expl: 'Omni- = todo (omnipresente = presente em todo o lado); crono- = tempo; equi- = igual; aero- = ar.', tema: 'T5 · Léxico e Variação' },
  // ── Ficha 4 · Relações de sentido ──
  { t: '5', tipo: 'mc', dif: 'facil', enun: 'Entre «macio» e «suave» estabelece-se uma relação de:', opcoes: ['sinonímia', 'antonímia', 'hiperonímia', 'meronímia'], resposta: 'sinonímia', expl: 'Têm sentido equivalente: sinónimos.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'Em relação a «profissão», a palavra «piloto» é um:', opcoes: ['hipónimo', 'hiperónimo', 'sinónimo', 'merónimo'], resposta: 'hipónimo', expl: '«Piloto» é um caso particular de «profissão» (o termo geral): hipónimo.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'Em relação a «automóvel», a palavra «volante» é um:', opcoes: ['merónimo', 'holónimo', 'hipónimo', 'hiperónimo'], resposta: 'merónimo', expl: 'O volante é uma PARTE do automóvel: merónimo (o automóvel é o holónimo).', tema: 'T5 · Léxico e Variação' },
  // ── Ficha 8 · Adjetivo (graus) ──
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Ninguém é tão forte como o meu amigo!», o adjetivo encontra-se no grau:', opcoes: ['comparativo de igualdade', 'comparativo de superioridade', 'superlativo absoluto', 'superlativo relativo'], resposta: 'comparativo de igualdade', expl: '«Tão… como» compara em igualdade: comparativo de igualdade.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: '«Frigidíssimo» corresponde ao grau:', opcoes: ['superlativo absoluto sintético', 'superlativo absoluto analítico', 'comparativo de superioridade', 'superlativo relativo'], resposta: 'superlativo absoluto sintético', expl: 'Forma única com sufixo -íssimo (sintético); «muito frio» seria a forma analítica.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «A minha turma é a mais forte nas atividades desportivas.», o adjetivo está no grau:', opcoes: ['superlativo relativo de superioridade', 'comparativo de superioridade', 'superlativo absoluto sintético', 'normal'], resposta: 'superlativo relativo de superioridade', expl: '«A mais forte» destaca dentro de um conjunto: superlativo relativo de superioridade.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'vf', dif: 'dificil', enun: '«Malíssimo» e «péssimo» são duas formas equivalentes do superlativo absoluto sintético de «mau».', resposta: 'V', expl: '«Mau» admite as duas formas: a regular «malíssimo» e a erudita «péssimo».', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'O superlativo absoluto sintético de «bom» é:', opcoes: ['ótimo', 'bondíssimo', 'melhor', 'máximo'], resposta: 'ótimo', expl: 'Bom → ótimo (forma erudita); «melhor» é o comparativo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'O superlativo absoluto sintético de «célebre» e o de «pobre» são, respetivamente:', opcoes: ['celebérrimo e paupérrimo', 'celebríssimo e pobríssimo', 'celebérrimo e pobrissimo', 'celebríssimo e paupérrimo'], resposta: 'celebérrimo e paupérrimo', expl: 'Formas eruditas: célebre → celebérrimo; pobre → paupérrimo.', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 10 · Tempos simples e compostos ──
  { t: '4', tipo: 'mc', dif: 'facil', enun: 'Em «Quando éramos crianças, passávamos férias na aldeia.», a forma «éramos» está no:', opcoes: ['pretérito imperfeito do indicativo', 'pretérito perfeito do indicativo', 'presente do indicativo', 'condicional'], resposta: 'pretérito imperfeito do indicativo', expl: 'Ação habitual/prolongada no passado: imperfeito do indicativo.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Talvez eu tenha de fazer a inscrição durante as férias.», a forma «tenha» está no:', opcoes: ['presente do conjuntivo', 'presente do indicativo', 'futuro do conjuntivo', 'imperfeito do conjuntivo'], resposta: 'presente do conjuntivo', expl: '«Talvez» obriga ao conjuntivo: presente do conjuntivo.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'dificil', enun: '«Teria visto» é a conjugação do verbo «ver» no:', opcoes: ['condicional composto', 'condicional simples', 'pretérito mais-que-perfeito composto', 'futuro composto'], resposta: 'condicional composto', expl: 'Ter no condicional + particípio = condicional composto.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: '«Tenho estudado» é uma forma do:', opcoes: ['pretérito perfeito composto do indicativo', 'gerúndio', 'pretérito imperfeito do indicativo', 'infinitivo pessoal'], resposta: 'pretérito perfeito composto do indicativo', expl: 'Ter no presente + particípio = pretérito perfeito composto (ação repetida até ao presente). É uma forma finita.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'dificil', enun: '«Terão terminado» é a conjugação no:', opcoes: ['futuro composto do indicativo', 'futuro composto do conjuntivo', 'condicional composto', 'presente composto'], resposta: 'futuro composto do indicativo', expl: 'Ter no futuro do indicativo + particípio = futuro composto do indicativo.', tema: 'T4 · Modos Verbais' },
  // ── Ficha 12 · Preposições ──
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'A contração «pela» decompõe-se em:', opcoes: ['por + a', 'para + a', 'pelo + a', 'per + la'], resposta: 'por + a', expl: 'Pela = preposição «por» + artigo «a» (como «do» = de + o, «nas» = em + as).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: '«Em frente de», «em vez de» e «de acordo com» são:', opcoes: ['locuções prepositivas', 'preposições simples', 'locuções adverbiais', 'conjunções'], resposta: 'locuções prepositivas', expl: 'Grupos de palavras com valor de preposição: locuções prepositivas.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Qual destas palavras NÃO é uma preposição?', opcoes: ['ah', 'a', 'em', 'até'], resposta: 'ah', expl: '«Ah» é uma interjeição (exprime emoção); «a», «em» e «até» são preposições.', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 15 · Classes (global) ──
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «O azul é a minha cor favorita.» e «O meu vestido azul tem uma nódoa.», a palavra «azul» é, respetivamente:', opcoes: ['nome comum e adjetivo qualificativo', 'adjetivo e nome', 'nome próprio e adjetivo', 'adjetivo nos dois casos'], resposta: 'nome comum e adjetivo qualificativo', expl: 'Na 1.ª designa a própria cor (nome); na 2.ª caracteriza o nome «vestido» (adjetivo).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Comprar bilhetes a esse preço? Jamais!», «jamais» é:', opcoes: ['advérbio de tempo', 'advérbio de negação', 'interjeição', 'advérbio de modo'], resposta: 'advérbio de tempo', expl: '«Jamais» = «nunca»: advérbio de tempo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «Cuidado! A calçada está escorregadia…», «Cuidado!» é:', opcoes: ['uma interjeição', 'um nome', 'um advérbio', 'um verbo'], resposta: 'uma interjeição', expl: 'Exprime um aviso/emoção de forma exclamativa: interjeição.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «Como não disseste nada, pensei que não virias.», «como» é:', opcoes: ['conjunção subordinativa causal', 'advérbio interrogativo', 'conjunção comparativa', 'pronome relativo'], resposta: 'conjunção subordinativa causal', expl: 'No início da frase, «como» introduz a causa (= «porque»): conjunção subordinativa causal.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Em «O segundo lugar já está assegurado!», «segundo» é:', opcoes: ['adjetivo numeral', 'quantificador numeral', 'determinante ordinal', 'nome'], resposta: 'adjetivo numeral', expl: 'Indica ordem e caracteriza o nome «lugar»: adjetivo numeral (ordinal).', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'A palavra «que» é uma CONJUNÇÃO na frase:', opcoes: ['«Fiquei tão surpreendido que nem consegui responder.»', '«O trabalho que tinha para fazer já foi entregue.»', '«A que horas é o próximo comboio?»', '«O bolo de chocolate que fiz está ótimo!»'], resposta: '«Fiquei tão surpreendido que nem consegui responder.»', expl: 'Em «tão… que» introduz a consequência (conjunção consecutiva); nas outras é pronome relativo ou determinante interrogativo.', tema: 'T1 · Classes de Palavras' },
  { t: '1', tipo: 'mc', dif: 'dificil', enun: 'O verbo «andar» é COPULATIVO na frase:', opcoes: ['«O meu primo anda bastante desmotivado.»', '«Quando fica nervosa, a professora anda de um lado para o outro.»', '«A família mudou-se para um novo andar.»', '«Desde que mudei de escola, ando de autocarro todos os dias.»'], resposta: '«O meu primo anda bastante desmotivado.»', expl: 'Aí «andar» = «estar» e liga o sujeito ao predicativo «desmotivado»: copulativo; nas outras é verbo principal (ou nome).', tema: 'T1 · Classes de Palavras' },
  // ── Ficha 16 · Articuladores ──
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'O articulador «ou seja» introduz:', opcoes: ['uma explicação/esclarecimento', 'uma oposição', 'uma conclusão', 'uma enumeração'], resposta: 'uma explicação/esclarecimento', expl: '«Ou seja» reformula o que foi dito por outras palavras: valor de explicação.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «O medo à água atingiu o seu auge, até nas classes mais altas da sociedade.», «até» tem valor de:', opcoes: ['inclusão', 'tempo', 'oposição', 'comparação'], resposta: 'inclusão', expl: '«Até» = «mesmo, inclusivamente»: inclui um caso extremo no que se afirma.', tema: 'T3 · Orações' },
  // ── Ficha 19 · Modificadores do nome ──
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «A funcionária, que todos conhecíamos desde a infância, reformou-se este mês.», a oração entre vírgulas é:', opcoes: ['modificador do nome apositivo', 'modificador do nome restritivo', 'complemento do nome', 'predicativo do sujeito'], resposta: 'modificador do nome apositivo', expl: 'Entre vírgulas, acrescenta informação sem restringir: apositivo (oração relativa explicativa).', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «A chuva que teima em não cair faz muita falta ao país.», a oração «que teima em não cair» é:', opcoes: ['modificador do nome restritivo', 'modificador do nome apositivo', 'complemento direto', 'modificador do grupo verbal'], resposta: 'modificador do nome restritivo', expl: 'Sem vírgulas, restringe o sentido de «chuva» (aquela que não cai): restritivo.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Camões e Pessoa, os nossos maiores poetas, não podiam faltar!», «os nossos maiores poetas» é:', opcoes: ['modificador do nome apositivo', 'modificador do nome restritivo', 'sujeito composto', 'predicativo do sujeito'], resposta: 'modificador do nome apositivo', expl: 'Grupo nominal entre vírgulas que acrescenta informação: modificador apositivo.', tema: 'T2 · Funções Sintáticas' },
  // ── Ficha 20 · Funções (global) ──
  { t: '2', tipo: 'mc', dif: 'facil', enun: 'Em «Estes contos são muito interessantes.», «muito interessantes» é:', opcoes: ['predicativo do sujeito', 'complemento direto', 'modificador do nome', 'complemento oblíquo'], resposta: 'predicativo do sujeito', expl: 'O verbo copulativo «ser» liga o sujeito à qualidade: predicativo do sujeito.', tema: 'T2 · Funções Sintáticas' },
  { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «O ambiente domina a agenda política.», a palavra «política» é:', opcoes: ['modificador do nome restritivo', 'complemento direto', 'predicativo do sujeito', 'modificador apositivo'], resposta: 'modificador do nome restritivo', expl: 'O adjetivo restringe o nome «agenda» (qual agenda? a política): modificador do nome restritivo.', tema: 'T2 · Funções Sintáticas' },
  // ── Ficha 22 · Coordenação ──
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'A única frase composta apenas por orações coordenadas ASSINDÉTICAS (sem conjunção) é:', opcoes: ['«O verão chegou ao fim, terminaram as férias, começou a chover.»', '«Cheguei a casa, pousei a mochila, entrei na cozinha e apanhei um susto.»', '«Vens almoçar a casa ou preferes levar almoço?»', '«O João estava com febre, mas não quis faltar à receção.»'], resposta: '«O verão chegou ao fim, terminaram as férias, começou a chover.»', expl: 'As orações ligam-se só por vírgulas, sem conjunções: coordenação assindética.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «O rapaz não escreveu nem telefonou aos pais durante toda a semana.», as orações são coordenadas:', opcoes: ['copulativas', 'disjuntivas', 'adversativas', 'conclusivas'], resposta: 'copulativas', expl: '«Nem» é a forma negativa da adição: coordenação copulativa.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «O meu cão ora ladra para ir à rua ora ladra para comer.», as orações são coordenadas:', opcoes: ['disjuntivas', 'copulativas', 'explicativas', 'adversativas'], resposta: 'disjuntivas', expl: '«Ora… ora» apresenta alternância: coordenação disjuntiva.', tema: 'T3 · Orações' },
  // ── Ficha 24 · Relativas ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'A frase que integra uma oração subordinada adjetiva relativa é:', opcoes: ['«Os surfistas que integram a comitiva nacional encontraram-se antes do início da prova.»', '«Quando estou em cima de uma prancha, não penso em mais nada.»', '«A iniciativa de surf adaptado teve tanto êxito que se repete pela oitava edição.»', '«Os desportos aquáticos podem ajudar na preservação dos oceanos, já que são cada vez mais populares.»'], resposta: '«Os surfistas que integram a comitiva nacional encontraram-se antes do início da prova.»', expl: '«Que integram a comitiva» retoma «os surfistas»: adjetiva relativa (restritiva). As outras são temporal, consecutiva e causal.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Os biólogos, cuja missão é estudar a vida marinha, estão preocupados com a poluição.», a oração destacada é adjetiva relativa:', opcoes: ['explicativa', 'restritiva', 'completiva', 'adverbial'], resposta: 'explicativa', expl: 'Entre vírgulas, não restringe «os biólogos»: relativa explicativa (modificador apositivo).', tema: 'T3 · Orações' },
  // ── Ficha 25 · Substantivas ──
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «As autoridades pediram à população que ficasse em casa.», a oração «que ficasse em casa» é subordinada substantiva:', opcoes: ['completiva', 'relativa', 'adverbial', 'adjetiva'], resposta: 'completiva', expl: 'Completa o sentido do verbo «pedir» (pediram o quê?): substantiva completiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Quem tudo quer tudo perde.», a oração «Quem tudo quer» é subordinada substantiva:', opcoes: ['relativa', 'completiva', 'adverbial', 'comparativa'], resposta: 'relativa', expl: 'Relativa SEM antecedente expresso («quem» = a pessoa que): substantiva relativa, com função de sujeito.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «É preciso que todos os elementos do grupo se empenhem.», a oração completiva desempenha a função de:', opcoes: ['sujeito', 'complemento direto', 'complemento oblíquo', 'predicativo do sujeito'], resposta: 'sujeito', expl: 'O que é preciso? «Que todos se empenhem»: a oração é o sujeito da frase.', tema: 'T3 · Orações' },
  // ── Ficha 26 · Coordenação e subordinação (global) ──
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Assinala o provérbio que NÃO inclui uma oração subordinada:', opcoes: ['«Depois de um belo gesto, não faças um manifesto.»', '«Quando os favores acabam, começa a ingratidão.»', '«O bem que se faz por temor não tem duração nem valor.»', '«Se queres colher flores, não temas os espinhos.»'], resposta: '«Depois de um belo gesto, não faças um manifesto.»', expl: '«Depois de um belo gesto» é um grupo preposicional (não tem verbo): não é oração. Os outros têm orações temporal, relativa e condicional.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «A professora gostou de assistir à apresentação do grupo.», a oração «de assistir à apresentação do grupo» desempenha a função de:', opcoes: ['complemento oblíquo', 'complemento direto', 'sujeito', 'modificador'], resposta: 'complemento oblíquo', expl: '«Gostar» exige complemento com a preposição «de»: a oração completiva tem função de complemento oblíquo.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'A frase complexa que inclui uma oração subordinada ADVERBIAL é:', opcoes: ['«Gosto de fazer jardinagem porque me ajuda a descontrair.»', '«Gosto muito de fazer jardinagem, mas nem sempre tenho tempo.»', '«A jardinagem, que é uma das minhas ocupações favoritas, descontrai-me.»', '«Os meus amigos dizem que eu tenho muito jeito para as plantas.»'], resposta: '«Gosto de fazer jardinagem porque me ajuda a descontrair.»', expl: '«Porque me ajuda a descontrair» é adverbial causal; as outras têm coordenada, relativa e completiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'A frase complexa que inclui uma oração subordinada SUBSTANTIVA é:', opcoes: ['«Disseram-nos para chegarmos a seguir ao almoço.»', '«A Matilde comprou um bilhete de teatro para oferecer à amiga.»', '«A amiga da Matilde, que se chama Andreia, fez 15 anos no sábado.»', '«Apesar de estar com muito trabalho, não posso deixar de ir à festa.»'], resposta: '«Disseram-nos para chegarmos a seguir ao almoço.»', expl: '«Para chegarmos…» completa o verbo «dizer» (disseram o quê?): substantiva completiva.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'facil', enun: 'A frase complexa que inclui uma oração subordinada adjetiva RELATIVA é:', opcoes: ['«Este fim de semana, vou ver a série que me recomendaste.»', '«O trabalho de grupo não ficou pronto, logo não o conseguiremos apresentar.»', '«Estava com tanto trabalho que nem consegui almoçar!»', '«Quando tiveres tempo, podemos combinar um almoço.»'], resposta: '«Este fim de semana, vou ver a série que me recomendaste.»', expl: '«Que me recomendaste» retoma «a série»: adjetiva relativa.', tema: 'T3 · Orações' },
  // ── Ficha 27 · Processos fonológicos ──
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'No par latim-português FLORE > flor, ocorreu:', opcoes: ['apócope (queda no fim da palavra)', 'aférese (queda no início)', 'síncope (queda no meio)', 'prótese (adição no início)'], resposta: 'apócope (queda no fim da palavra)', expl: 'Caiu o -e final: apócope.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'No par SPIRITU > espírito, ocorreu:', opcoes: ['prótese (adição no início)', 'epêntese (adição no meio)', 'paragoge (adição no fim)', 'apócope (queda no fim)'], resposta: 'prótese (adição no início)', expl: 'Acrescentou-se o e- inicial: prótese.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'No par INAMORARE > namorar, ocorreu:', opcoes: ['aférese (queda no início)', 'apócope (queda no fim)', 'prótese (adição no início)', 'síncope (queda no meio)'], resposta: 'aférese (queda no início)', expl: 'Caiu o i- inicial: aférese (também caiu o -e final, mas a queda inicial é a aférese).', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'No par JESU > Jesus, ocorreu:', opcoes: ['paragoge (adição no fim)', 'epêntese (adição no meio)', 'prótese (adição no início)', 'assimilação'], resposta: 'paragoge (adição no fim)', expl: 'Acrescentou-se o -s final: paragoge.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'No par persona > pessoa, ocorreu:', opcoes: ['assimilação', 'metátese', 'prótese', 'paragoge'], resposta: 'assimilação', expl: 'O r assimilou-se ao s (rs > ss): assimilação (alteração de segmento).', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'No par SEMPER > sempre, ocorreu:', opcoes: ['metátese (troca de posição de sons)', 'assimilação', 'síncope', 'epêntese'], resposta: 'metátese (troca de posição de sons)', expl: 'O r mudou de posição (per > pre): metátese.', tema: 'T5 · Léxico e Variação' },
  // ── Ficha 28 · Arcaísmos e neologismos ──
  { t: '5', tipo: 'vf', dif: 'facil', enun: 'Os arcaísmos são palavras que foram caindo em desuso até deixarem de ser usadas por uma comunidade linguística.', resposta: 'V', expl: 'É a definição de arcaísmo (ex.: «antre» → entre, «dolores» → dores).', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'As palavras de Mia Couto «luzinhenta» e «permeolhável» são exemplos de:', opcoes: ['neologismos', 'arcaísmos', 'estrangeirismos', 'onomatopeias'], resposta: 'neologismos', expl: 'Palavras novas criadas pelo autor: neologismos literários.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'facil', enun: 'O arcaísmo «antre» corresponde, no português atual, a:', opcoes: ['entre', 'antes', 'dentro', 'antro'], resposta: 'entre', expl: 'Forma antiga da preposição «entre» (como «dolores» → dores, «almários» → armários).', tema: 'T5 · Léxico e Variação' },
  // ── Ficha 29 · Próclise e mesóclise ──
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Ao substituir «a encomenda» por um pronome, a frase «Entregaremos a encomenda amanhã.» assume a forma:', opcoes: ['«Entregá-la-emos amanhã.»', '«Entregaremos-a amanhã.»', '«A entregaremos amanhã.»', '«Entregaremo-la amanhã.»'], resposta: '«Entregá-la-emos amanhã.»', expl: 'No futuro do indicativo, o pronome vai para o MEIO do verbo: mesóclise.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'medio', enun: 'Na forma negativa, «Todos viram o professor.» com pronome fica:', opcoes: ['«Ninguém o viu.»', '«Ninguém viu-o.»', '«Todos lhe viram.»', '«Ninguém lhe viu.»'], resposta: '«Ninguém o viu.»', expl: 'A negação obriga à próclise (pronome ANTES do verbo), e «ver alguém» pede o pronome «o» (CD), não «lhe».', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em «Talvez o acabe a tempo.», o pronome antecede o verbo porque:', opcoes: ['certos advérbios, como «talvez», obrigam à próclise', 'a frase está no presente', 'o pronome é sempre proclítico', 'a frase é exclamativa'], resposta: 'certos advérbios, como «talvez», obrigam à próclise', expl: 'Advérbios como «talvez», «já», «sempre», «não» atraem o pronome para antes do verbo.', tema: 'T3 · Orações' },
  { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Em orações subordinadas, o pronome pessoal átono antecede o verbo, como em:', opcoes: ['«A professora perguntou se a conseguiam ouvir.»', '«Alguma coisa de grave lhe aconteceu!»', '«Ou me respondes até amanhã, ou não conto contigo.»', '«Talvez lhe consiga falar antes do almoço.»'], resposta: '«A professora perguntou se a conseguiam ouvir.»', expl: 'A conjunção «se» introduz uma subordinada: contexto obrigatório de próclise.', tema: 'T3 · Orações' },
  // ── Ficha 30 · Valor aspetual ──
  { t: '4', tipo: 'mc', dif: 'facil', enun: 'O valor aspetual PERFETIVO expressa:', opcoes: ['uma ação concluída', 'uma ação inacabada', 'uma ação habitual', 'uma ação futura'], resposta: 'uma ação concluída', expl: 'Perfetivo = ação terminada (pretérito perfeito); imperfetivo = ação em curso/inacabada.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Os alunos ouviam atentamente, enquanto a professora falava.», o valor aspetual é:', opcoes: ['imperfetivo', 'perfetivo', 'pontual', 'concluído'], resposta: 'imperfetivo', expl: 'Ações em curso no passado, sem indicação de fim: valor imperfetivo.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Todo o estádio aplaudiu a jogada.», o valor aspetual é:', opcoes: ['perfetivo', 'imperfetivo', 'durativo', 'habitual'], resposta: 'perfetivo', expl: 'Ação pontual e concluída: valor perfetivo.', tema: 'T4 · Modos Verbais' },
  // ── Ficha 31 · Relações semânticas ──
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'Entre «religião – cristianismo» e «arte – pintura» estabelece-se uma relação de:', opcoes: ['hierarquia (hiperonímia/hiponímia)', 'parte/todo (meronímia)', 'sinonímia', 'antonímia'], resposta: 'hierarquia (hiperonímia/hiponímia)', expl: 'O termo geral inclui o específico, religião ⊃ cristianismo: relação hierárquica.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'medio', enun: 'Entre «capa – livro» e «raiz – árvore» estabelece-se uma relação de:', opcoes: ['parte/todo (meronímia/holonímia)', 'hierarquia', 'sinonímia', 'antonímia'], resposta: 'parte/todo (meronímia/holonímia)', expl: 'A capa é parte do livro; a raiz é parte da árvore: meronímia/holonímia.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'Assinala a única afirmação FALSA:', opcoes: ['«Canário» e «cegonha» são hipónimos de «ave», pelo que entre elas há uma relação de parte/todo.', 'Entre os hiperónimos e os hipónimos estabelece-se uma relação de hierarquia.', '«Página», «capa» e «contracapa» são merónimos do holónimo «livro».', 'Entre «interessante» e «enfadonho» há uma relação de antonímia.'], resposta: '«Canário» e «cegonha» são hipónimos de «ave», pelo que entre elas há uma relação de parte/todo.', expl: 'Hipónimo/hiperónimo é relação de HIERARQUIA (tipo de), não de parte/todo: o canário não é uma «parte» da ave.', tema: 'T5 · Léxico e Variação' },
  { t: '5', tipo: 'mc', dif: 'dificil', enun: 'Assinala a única afirmação VERDADEIRA:', opcoes: ['«Teatro» representa o todo e «palco», «plateia» e «camarim» as partes: relação de holonímia/meronímia.', '«Dedo» é um holónimo de «mão».', '«Terra» e «Marte» são hiperónimos de «planeta».', '«Cão», «gato» e «papagaio» são sinónimos de «animais domésticos».'], resposta: '«Teatro» representa o todo e «palco», «plateia» e «camarim» as partes: relação de holonímia/meronímia.', expl: 'O teatro é o todo (holónimo) e as suas zonas são as partes (merónimos). «Dedo» é merónimo; Terra/Marte são hipónimos.', tema: 'T5 · Léxico e Variação' },
  // ── Ficha 32 · Modalidade ──
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «D. Afonso Henriques foi o primeiro rei de Portugal.», o valor modal é:', opcoes: ['epistémico com valor de certeza', 'epistémico com valor de probabilidade', 'deôntico com valor de obrigação', 'apreciativo'], resposta: 'epistémico com valor de certeza', expl: 'O locutor apresenta o conteúdo como um facto certo: modalidade epistémica (certeza).', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'facil', enun: 'Em «Tens de estar atento nas aulas.», o valor modal é:', opcoes: ['deôntico com valor de obrigação', 'deôntico com valor de permissão', 'epistémico', 'apreciativo'], resposta: 'deôntico com valor de obrigação', expl: '«Ter de» exprime obrigação: modalidade deôntica.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Quando acabares de arrumar o quarto, podes sair.», «podes sair» exprime modalidade:', opcoes: ['deôntica com valor de permissão', 'deôntica com valor de obrigação', 'epistémica com valor de certeza', 'apreciativa'], resposta: 'deôntica com valor de permissão', expl: '«Poder» aqui autoriza: deôntica com valor de permissão.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'medio', enun: 'Em «Não me agradou de todo a experiência do teletrabalho!», a modalidade é:', opcoes: ['apreciativa', 'deôntica', 'epistémica de certeza', 'epistémica de probabilidade'], resposta: 'apreciativa', expl: 'O locutor exprime uma avaliação/opinião pessoal: modalidade apreciativa.', tema: 'T4 · Modos Verbais' },
  { t: '4', tipo: 'mc', dif: 'dificil', enun: 'Em «Talvez a meteorologia se tenha enganado e amanhã não chova.», o valor modal é:', opcoes: ['epistémico com valor de probabilidade', 'epistémico com valor de certeza', 'deôntico com valor de permissão', 'apreciativo'], resposta: 'epistémico com valor de probabilidade', expl: '«Talvez» + conjuntivo exprime possibilidade/probabilidade: modalidade epistémica.', tema: 'T4 · Modos Verbais' }
]);


function port9AtribuirFicha(){
  var caps=[]; _port9CapMeta.forEach(function(m){ if(_port9gf.caps[m.n]) caps.push(m.n); });
  if(!caps.length){ var st=document.getElementById('port9-fichas-status'); if(st) st.textContent='Escolhe pelo menos um capítulo para atribuir.'; return null; }
  var nomes=caps.map(function(n){ var mm=_port9CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
  return { curso:'port9', cursoNome:'Português 9.º', tema:caps.join('.'), temaNome:nomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_port9gf.dif };
}
