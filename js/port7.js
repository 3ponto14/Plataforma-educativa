/* ════════════════════════════════════════════════════════════════
   PORT7 HUB - Português 7.º ano (5 domínios) · ver MODELO BASE
   Criado a partir do molde port9.js (modelo híbrido de Português).
   Sem módulos realojados: a prática é banco-driven (_port7Banco).
   Conteúdo alinhado ao programa do 7.º e ao manual «Mensagens 7»;
   a ingestão das fichas do manual entra por lotes, como no 9.º.
   ════════════════════════════════════════════════════════════════ */

// ═══ Domínios de Português do 9.º ano (Aprendizagens Essenciais) ═══
// Os "capítulos" do hub são os 5 DOMÍNIOS do programa.
var _port7CapMeta = [
  {n:1, icon:'<i class="ph ph-book-open-text"></i>', label:'Educação Literária'},
  {n:2, icon:'<i class="ph ph-text-aa"></i>',        label:'Gramática'},
  {n:3, icon:'<i class="ph ph-book-open"></i>',      label:'Leitura'},
  {n:4, icon:'<i class="ph ph-pencil-line"></i>',    label:'Escrita'},
  {n:5, icon:'<i class="ph ph-sparkle"></i>',        label:'Recursos Expressivos'}
];

// Cores por domínio (alinhadas com --p7cN-* do CSS)
var _port7CapColors = {
  1:'#8a5a3a', 2:'#5a72a0', 3:'#4d8f87', 4:'#9c5e80', 5:'#7f8a4d'
};

// Subtemas por domínio
var _port7Subtemas = {
  1: ['Narrativas tradicionais', 'Narrativas de autor', 'Poesia', 'Texto dramático'],
  2: ['Classes de palavras', 'Funções sintáticas', 'Frase e orações', 'Tempos e modos verbais', 'Léxico e variação'],
  3: ['Compreensão de texto', 'Tipologias textuais', 'Sentidos do texto'],
  4: ['Texto narrativo', 'Texto de opinião', 'Texto descritivo'],
  5: ['Figuras de estilo', 'Recursos expressivos', 'Versificação']
};

// ═══ FLASHCARDS / TEORIA por capítulo ═══
// Cap 1 (Números) - conteúdo real, fiel ao Prisma 8.
// Caps 2-8 - placeholders honestos até serem construídos.
// ═══ FLASHCARDS / TEORIA por capítulo (9.º ano) ═══
var _port7Cards = {
  // ── Domínio 1 · Educação Literária (7.º) ──
  1: [
    { tag: 'Definição', q: 'O que é uma narrativa tradicional?', a: 'Um conto transmitido oralmente de geração em geração, de autor anónimo (o povo), muitas vezes com uma lição de vida. Há versões diferentes do mesmo conto.' },
    { tag: 'Definição', q: 'O que distingue a fábula?', a: 'É uma narrativa curta, geralmente com animais que falam e agem como pessoas, terminando com uma moralidade (lição).' },
    { tag: 'Definição', q: 'O que é uma lenda?', a: 'Uma narrativa tradicional que mistura factos reais (lugares, figuras históricas) com elementos maravilhosos, para explicar origens ou acontecimentos.' },
    { tag: 'Conceito', q: 'Quais são os elementos da narrativa?', a: 'Narrador (quem conta), personagens (quem age), ação (o que acontece), espaço (onde) e tempo (quando).' },
    { tag: 'Conceito', q: 'Tipos de narrador quanto à presença?', a: 'Participante (entra na história, narra na 1.ª pessoa) ou não participante (apenas conta, na 3.ª pessoa).' },
    { tag: 'Conceito', q: 'Tipos de personagens quanto ao relevo?', a: 'Principal (protagonista, centro da ação), secundária (participa mas não é o centro) e figurante (apenas compõe o cenário).' },
    { tag: 'Conceito', q: 'Modos de relato no texto narrativo?', a: 'Narração (contar ações), descrição (caracterizar pessoas/lugares, com pausa na ação) e diálogo (falas das personagens).' },
    { tag: 'Contexto', q: 'Quem é o «Ladino» de Miguel Torga?', a: 'Um pardal esperto e manhoso, protagonista do conto «Ladino» (do livro Bichos), em que os animais são tratados como pessoas.' },
    { tag: 'Definição', q: 'Como se organiza o texto dramático?', a: 'Em atos e cenas, com as falas das personagens e as didascálias (indicações cénicas em itálico ou parênteses, que não são ditas).' },
    { tag: 'Poesia', q: 'O que é o sujeito poético?', a: 'A «voz» que fala no poema: não se confunde com o poeta, a pessoa real que o escreveu.' },
    { tag: 'Poesia', q: 'Verso, estrofe e refrão?', a: 'Verso = cada linha; estrofe = grupo de versos (quadra = 4); refrão = verso ou estrofe que se repete ao longo do poema.' },
    { tag: 'Contexto', q: 'Poetas trabalhados no 7.º ano (manual Mensagens 7)?', a: 'José Régio, Vitorino Nemésio, Sebastião da Gama, Ruy Cinatti, David Mourão-Ferreira e Percy B. Shelley.' },
    { tag: 'Contexto', q: 'Que textos narrativos saem no manual Mensagens 7?', a: 'Contos tradicionais («Os dez anõezinhos da Tia Verde-Água»); narrativas de autor português (o touro Miura; a avó e o neto na praia; a caça à baleia nos Açores) e estrangeiro (A Ilha do Tesouro; Sexta-Feira).' },
    { tag: 'Exemplo', q: '«Pelo sonho é que vamos», de Sebastião da Gama: qual é a mensagem?', a: 'O importante é SONHAR, mesmo sem garantia de êxito («chegamos ou não chegamos»). Verso hexassílabo (6 sílabas) e anáfora na repetição do verso-título.' },
    { tag: 'Exemplo', q: 'O «Senhor Papão» no poema de José Régio: o que simboliza?', a: 'É uma metáfora do medo que mora dentro de cada um. Só quando o sujeito se rende consegue vê-lo sem disfarce.' }
  ],
  // ── Domínio 2 · Gramática (7.º) ──
  2: [
    { tag: 'Definição', q: 'Quais são as classes de palavras?', a: 'Nome, adjetivo, verbo, advérbio, determinante, pronome, quantificador, preposição, conjunção e interjeição.' },
    { tag: 'Regra', q: 'Determinante ou pronome?', a: 'O determinante acompanha o nome («este livro»); o pronome substitui-o («este é meu»). A mesma palavra pode ser uma coisa ou outra!' },
    { tag: 'Regra', q: 'Como identificar o sujeito?', a: 'Pergunta-se «quem?» antes do verbo. Pode ser simples (a Ana), composto (a Ana e o Rui) ou nulo/subentendido («[Eu] cheguei tarde»).' },
    { tag: 'Regra', q: 'Complemento direto vs. indireto?', a: 'Direto: responde a «o quê?» sem preposição («Li o livro» → li-o). Indireto: responde a «a quem?» («Dei o livro à Ana» → dei-lhe).' },
    { tag: 'Definição', q: 'O que é o vocativo?', a: 'O chamamento, separado por vírgula(s): «Rita, anda cá!». Não desempenha função na oração.' },
    { tag: 'Regra', q: 'Orações coordenadas: tipos?', a: 'Copulativas (e, nem), adversativas (mas, porém), disjuntivas (ou), conclusivas (logo, portanto) e explicativas (pois).' },
    { tag: 'Regra', q: 'Subordinadas adverbiais do 7.º ano?', a: 'Temporal (quando), causal (porque), final (para que) e condicional (se).' },
    { tag: 'Regra', q: 'Tempos compostos: como se formam?', a: 'Verbo auxiliar TER + particípio passado: «tenho lido», «tinha saído», «terá chegado».' },
    { tag: 'Definição', q: 'Discurso direto e indireto?', a: 'Direto: reproduz as falas tal e qual (« — Vou sair», disse). Indireto: integra-as na narração (Disse que ia sair): mudam tempos verbais, pronomes e advérbios.' },
    { tag: 'Regra', q: 'Colocação do pronome átono: quando vai para antes do verbo?', a: 'Com negação («Não o vi»), com certos advérbios («Já o li») e em orações subordinadas («…que o viu»).' },
    { tag: 'Definição', q: 'Léxico: como se formam palavras?', a: 'Derivação (prefixos/sufixos: feliz → infeliz, felizmente) e composição (guarda-chuva, couve-flor).' },
    { tag: 'Regra', q: 'Variedades geográficas do português?', a: 'Português europeu, do Brasil e variedades africanas: a mesma língua com diferenças de vocabulário, pronúncia e construção.' }
  ],
  // ── Domínio 3 · Leitura (7.º) ──
  3: [
    { tag: 'Estratégia', q: 'Como abordar um texto e as perguntas?', a: '1) Lê o texto todo; 2) lê as perguntas; 3) volta ao texto para localizar a informação; 4) responde por palavras tuas, citando se for pedido.' },
    { tag: 'Definição', q: 'O que é o tema de um texto?', a: 'O assunto central de que o texto trata: não confundir com o título nem com pormenores.' },
    { tag: 'Definição', q: 'Texto publicitário: o que pretende?', a: 'Persuadir o destinatário (comprar, aderir, mudar de comportamento), com slogan, imagem e linguagem apelativa.' },
    { tag: 'Definição', q: 'O que é uma crítica?', a: 'Um texto que apresenta e avalia uma obra (livro, filme, espetáculo), combinando informação com a opinião fundamentada do autor.' },
    { tag: 'Definição', q: 'O que é uma biografia?', a: 'Um texto que relata a vida de uma pessoa real, geralmente por ordem cronológica (nascimento, percurso, feitos).' },
    { tag: 'Definição', q: 'Sentido literal vs. sentido figurado?', a: 'Literal = o que as palavras dizem exatamente. Figurado = um sentido «emprestado»: «coração de pedra» = pessoa insensível.' },
    { tag: 'Estratégia', q: 'O que é inferir?', a: 'Concluir algo que o texto não diz com todas as letras, juntando pistas: «vestiu o casaco e pegou no chapéu-de-chuva» → ia sair e chovia.' },
    { tag: 'Estratégia', q: 'Como justificar com o texto?', a: 'Indica a passagem (cita entre aspas ou refere a linha) e explica como ela apoia a tua resposta.' }
  ],
  // ── Domínio 4 · Escrita (7.º) ──
  4: [
    { tag: 'Estrutura', q: 'Como se estrutura um texto narrativo?', a: 'Situação inicial → desenvolvimento (peripécias/conflito) → desenlace. Com narrador, personagens, espaço e tempo definidos.' },
    { tag: 'Estrutura', q: 'Como se faz uma boa descrição?', a: 'Caracteriza-se com adjetivos expressivos e sensações (ver, ouvir, cheirar…), organizando do geral para o pormenor.' },
    { tag: 'Estrutura', q: 'Como se estrutura um texto de opinião?', a: 'Introdução (apresenta o tema e a tua posição), desenvolvimento (razões + exemplos), conclusão (reafirma a posição).' },
    { tag: 'Estratégia', q: 'Para que servem os conectores?', a: 'Ligam as ideias: primeiro, depois, finalmente (tempo); porque (causa); mas (oposição); por isso (conclusão).' },
    { tag: 'Estratégia', q: 'O que fazer antes de escrever?', a: 'Planificar: anota as ideias principais, ordena-as e só depois redige. No fim, relê para rever erros e repetições.' },
    { tag: 'Regra', q: 'Cuidados na revisão do texto?', a: 'Verificar ortografia, pontuação, concordâncias, repetições de palavras e se o texto responde mesmo ao que foi pedido.' },
    { tag: 'Estratégia', q: 'Como evitar repetir palavras?', a: 'Usa pronomes («o João… ele») e sinónimos («o rapaz», «o jovem»).' },
    { tag: 'Exemplo', q: 'Início possível para uma narrativa?', a: '«Naquela manhã de inverno, quando saiu de casa, o Pedro não imaginava o que estava prestes a acontecer.»: situa tempo, personagem e cria expectativa.' }
  ],
  // ── Domínio 5 · Recursos Expressivos (7.º) ──
  5: [
    { tag: 'Figura', q: 'Comparação', a: 'Aproxima dois elementos com palavra comparativa (como, tal como): «veloz como um relâmpago».' },
    { tag: 'Figura', q: 'Personificação', a: 'Atribui características humanas a animais ou coisas: «o vento uivava lá fora».' },
    { tag: 'Figura', q: 'Metáfora', a: 'Identifica dois elementos SEM palavra comparativa: «este quarto é uma gelataria» (= está frio).' },
    { tag: 'Figura', q: 'Onomatopeia', a: 'Palavra que imita um som: trrrim!, miau, bzzz, cocorococó.' },
    { tag: 'Figura', q: 'Anáfora', a: 'Repetição de palavras no início de versos ou frases seguidas: «Era a manhã… / Era a luz…».' },
    { tag: 'Figura', q: 'Enumeração', a: 'Lista de elementos seguidos: «trouxe pão, queijo, fruta e sumo».' },
    { tag: 'Figura', q: 'Hipérbole', a: 'Exagero intencional: «já te chamei mil vezes!».' },
    { tag: 'Versificação', q: 'Como se conta a métrica de um verso?', a: 'Contam-se as sílabas métricas até à última sílaba TÓNICA do verso (as átonas finais não contam).' },
    { tag: 'Versificação', q: 'Esquemas de rima?', a: 'Emparelhada (AABB), cruzada (ABAB) e interpolada (ABBA). Versos sem rima = versos soltos/brancos.' },
    { tag: 'Versificação', q: 'Nomes das estrofes?', a: 'Dístico (2 versos), terceto (3), quadra (4), quintilha (5), sextilha (6).' }
  ]
};

// Seleção atual por tab
var _port7Sel = { resumo: 1, 'resumo-st': 0 };

// ═══ NAVEGAÇÃO DE TABS ═══
function port7SwitchTab(tab, btn) {
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
  var panel = document.getElementById('port7p-' + tab);
  if (panel) { panel.classList.add('active'); panel.style.setProperty('display','block','important'); }

  var titles = { resumo:'Teoria', praticar:'Praticar', fichas:'Fichas', progresso:'Progresso',
                 exercicios:'Exercícios', quiz:'Quiz', flashcards:'Flashcards', teste:'Teste', jogos:'Jogos' };
  if (titles[tab]) document.title = 'Português 7.º · ' + titles[tab] + ' · 3ponto14';

  if (tab === 'resumo') port7BuildResumoNav();
  else if (tab === 'exercicios') port7BuildPraticarNav();
  else if (tab === 'quiz') port7QuizBuildNav();
  else if (tab === 'flashcards') port7FcBuildNav();
  else if (tab === 'teste') port7TesteBuildNav();
  else if (tab === 'jogos') port7JogosInit();
  else if (tab === 'fichas') port7FichasBuildNav();
  else if (tab === 'progresso') port7RenderProgresso();
}

// Abre um sub-modo de prática a partir dos cartões do menu Praticar.
function port7OpenPraticar(modo) { port7SwitchTab(modo, null); }

// ═══ TAB TEORIA ═══
function port7BuildResumoNav() {
  var capRow = document.getElementById('port7-resumo-cap-row');
  if (!capRow) return;
  var activeCap = _port7Sel['resumo'] || 1;
  var h = '';
  _port7CapMeta.forEach(function(m) {
    var color = _port7CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var hoverCode = isActive ? '' : ' onmouseover="this.style.borderColor=\'' + color + '\';this.style.color=\'' + color + '\'" onmouseout="this.style.borderColor=\'\';this.style.color=\'\'"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port7ResumoSelectCap(' + m.n + ',this)" style="' + activeStyle + '"' + hoverCode + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + '</button>';
  });
  capRow.innerHTML = h;
  port7ResumoShowSts(activeCap);
  port7RenderResumoInline();
}

function port7ResumoSelectCap(cap, btn) {
  _port7Sel['resumo'] = cap;
  _port7Sel['resumo-st'] = 0;
  var capRow = document.getElementById('port7-resumo-cap-row');
  if (capRow) {
    capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) {
      b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = '';
    });
  }
  if (btn) {
    var color = _port7CapColors[cap] || '#516860';
    btn.classList.add('active');
    btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff';
  }
  port7ResumoShowSts(cap);
  port7RenderResumoInline();
}

function port7ResumoShowSts(cap) {
  var stRow = document.getElementById('port7-resumo-st-row');
  if (!stRow) return;
  var sts = _port7Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  sts.forEach(function(st, i) {
    var isActive = (_port7Sel['resumo-st'] || 0) === (i + 1);
    h += '<button class="resumo-st-btn' + (isActive ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port7ResumoSelectSt(this,' + cap + ',' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port7ResumoSelectSt(btn, cap, stIdx) {
  var stRow = document.getElementById('port7-resumo-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port7Sel['resumo'] = cap;
  _port7Sel['resumo-st'] = stIdx;
  port7RenderResumoInline();
}

function port7RenderResumoInline() {
  var cap = _port7Sel['resumo'] || 1;
  var dest = document.getElementById('port7-resumo-content');
  if (!dest) return;

  var color = (function(){
    var c = _port7CapColors[cap] || '#516860';
    return c;
  })();

  var tagIcons = {
    'Definição':'ph-book-bookmark', 'Fórmula':'ph-function', 'Regra':'ph-check-square',
    'Propriedade':'ph-star', 'Exemplo':'ph-pencil-line', 'Estratégia':'ph-lightbulb',
    'Síntese':'ph-seal-check', 'Notação':'ph-at', 'Hierarquia':'ph-tree-structure',
    'Teorema':'ph-intersect', 'Conceito':'ph-cube'
  };

  var allCards = _port7Cards[cap] || [];

  // Filtrar por subtema, se selecionado
  var stIdx = _port7Sel['resumo-st'] || 0;
  var cards = allCards;
  if (stIdx > 0 && _port7Subtemas[cap]) {
    var stLabel = (_port7Subtemas[cap][stIdx - 1] || '').toLowerCase();
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

  _port7PM(cap, 'teoria'); // estudou a teoria deste capítulo

  // Acordeão partilhado: grupos colapsáveis + perguntas que abrem a resposta.
  dest.innerHTML = _teoriaAccordionHTML(cards, color, tagIcons);
}

/* ════════════════════════════════════════════════════════════════
   TAB PRATICAR - exercícios gerados com correção imediata
   Renderiza tudo no painel (sem páginas externas). Reutiliza os
   motores genéricos do chapter-engine: _capBuildQuizHTML,
   _capCheckAnswer, _capShowFeedback.
   ════════════════════════════════════════════════════════════════ */

// Português não tem geradores procedurais — a prática usa o _port7Banco.
// Só os caps com gerador são "praticáveis".
// Português não tem geradores procedurais (as perguntas são de análise/banco).
// _port7Gerador devolve sempre null → o hub usa apenas o _port7Banco.
function _port7Gerador(cap) {
  return null;
}
// Um domínio está "disponível" para prática se tiver questões no banco.
function _port7TemConteudo(cap) {
  return !!(_port7Banco[cap] && _port7Banco[cap].length);
}
// Nº de subtemas por domínio (espelha _port7Subtemas) — usado na seleção de prática.
var _port7TemasCount = { 1: 4, 2: 5, 3: 3, 4: 3, 5: 3 };

// Estado da prática
var _port7Prat = { cap: 1, st: 0, nivel: 'medio', score: { correct: 0, total: 0 }, answered: {}, exs: [] };

function _port7PratStorageKey(cap) { return 'edupt_port7_cap' + cap; }

function port7BuildPraticarNav() {
  var capRow = document.getElementById('port7-praticar-cap-row');
  if (!capRow) return;
  var activeCap = _port7Prat.cap || 1;
  var h = '';
  _port7CapMeta.forEach(function(m) {
    var hasGen = _port7TemConteudo(m.n);
    var color = _port7CapColors[m.n] || '#516860';
    var isActive = activeCap === m.n;
    var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    var disabledStyle = hasGen ? '' : 'opacity:.45;cursor:not-allowed';
    var onclick = hasGen ? 'port7PraticarSelectCap(' + m.n + ',this)' : '';
    var title = hasGen ? '' : ' title="Em preparação"';
    h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" data-cap="' + m.n + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabledStyle + '"' + title + '>'
       + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (hasGen ? '' : ' ·') + '</button>';
  });
  capRow.innerHTML = h;
  port7PraticarShowSts(activeCap);
  port7GerarExercicios(); // renderiza logo o domínio ativo (módulo ou banco)
}

function port7PraticarShowSts(cap) {
  var stRow = document.getElementById('port7-praticar-st-row');
  if (!stRow) return;
  var sts = _port7Subtemas[cap] || [];
  if (!sts.length) { stRow.style.display = 'none'; return; }
  var h = '<div class="resumo-st-label">Subtema</div>';
  h += '<button class="resumo-st-btn' + (_port7Prat.st === 0 ? ' active' : '') + '" data-st="0" onclick="port7PraticarSelectSt(this,0)">Todos</button>';
  sts.forEach(function(st, i) {
    h += '<button class="resumo-st-btn' + (_port7Prat.st === (i + 1) ? ' active' : '') + '" data-st="' + (i + 1) + '" onclick="port7PraticarSelectSt(this,' + (i + 1) + ')">' + st + '</button>';
  });
  stRow.innerHTML = h;
  stRow.style.display = 'flex';
}

function port7PraticarSelectCap(cap, btn) {
  if (!_port7TemConteudo(cap)) return;
  _port7Prat.cap = cap;
  _port7Prat.st = 0;
  var capRow = document.getElementById('port7-praticar-cap-row');
  if (capRow) capRow.querySelectorAll('.resumo-cap-btn').forEach(function(b) { b.classList.remove('active'); b.style.background = ''; b.style.borderColor = ''; b.style.color = ''; });
  if (btn) { var color = _port7CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background = color; btn.style.borderColor = color; btn.style.color = '#fff'; }
  port7PraticarShowSts(cap);
  port7GerarExercicios();
}

function port7PraticarSelectSt(btn, stIdx) {
  var stRow = document.getElementById('port7-praticar-st-row');
  if (stRow) stRow.querySelectorAll('.resumo-st-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  _port7Prat.st = stIdx;
  port7GerarExercicios();
}

function port7PraticarSetNivel(nivel, btn) {
  _port7Prat.nivel = nivel;
  var grp = document.getElementById('port7-praticar-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b) { b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
  port7GerarExercicios();
}

// Mapa subtema → temas a usar no gerador (Cap 1 Números)
var _port7SubtemaTemas = {
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
function _port7PratModulo(cap, dest) {
  // O 7.º ano não tem módulos realojados: a prática é toda banco-driven.
  return false;
}

function port7GerarExercicios() {
  var dest = document.getElementById('port7-praticar-content');
  if (!dest) return;
  var cap = _port7Prat.cap, gen = _port7Gerador(cap);

  // Domínios com módulos próprios (realojados da antiga zona de exame):
  // escondem nível/subtemas/gerar e renderizam o módulo no painel.
  var lvlBar = document.getElementById('port7-praticar-levelbar');
  var stRow = document.getElementById('port7-praticar-st-row');
  if (_port7PratModulo(cap, dest)) {
    if (lvlBar) lvlBar.style.display = 'none';
    if (stRow) stRow.style.display = 'none';
    return;
  }
  if (lvlBar) lvlBar.style.display = '';

  // Sem gerador procedural nem banco → nada a mostrar
  if (!gen && !(_port7Banco[cap] && _port7Banco[cap].length)) { dest.innerHTML = ''; return; }

  // Que temas usar?
  var temas;
  if (_port7Prat.st > 0 && _port7SubtemaTemas[cap] && _port7SubtemaTemas[cap][_port7Prat.st]) {
    temas = _port7SubtemaTemas[cap][_port7Prat.st];
  } else {
    temas = [];
    for (var t = 1; t <= (_port7TemasCount[cap] || 1); t++) temas.push(String(t));
  }

  var QTD = 8;
  var tipos = ['mc', 'fill', 'mc', 'vf', 'fill', 'mc', 'fill', 'mc'];
  var geradas = [];
  if (gen) {
    for (var i = 0; i < QTD; i++) {
      var tema = temas[i % temas.length];
      var ex = gen(tema, tipos[i % tipos.length], _port7Prat.nivel);
      if (ex) geradas.push(ex);
    }
  }
  var banco = (typeof _port7Banco !== 'undefined' && _port7Banco[cap]) ? _port7Banco[cap].filter(function (q) { return temas.indexOf(q.t) !== -1; }) : [];
  var exs;
  if (!gen) {
    // Sem gerador (PT): usa o banco todo, baralhado
    exs = banco.slice().sort(function () { return Math.random() - .5; })
      .map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  } else {
    exs = (typeof _mixBancoGeradas === 'function') ? _mixBancoGeradas(banco, geradas, QTD, 3, _port7Prat.nivel)
      : geradas.map(function (e, idx) { return Object.assign({}, e, { num: idx + 1 }); });
  }
  _port7Prat.exs = exs;
  _port7Prat.answered = {};
  _port7Prat.score = { correct: 0, total: 0 };

  // Score bar + questões (reutiliza motor genérico do chapter-engine)
  var scoreBar = '<div class="score-bar" id="port7-prat-scorebar">'
    + '<div><div class="score-num" id="port7-prat-score">0</div><div class="score-label">pontos</div></div>'
    + '<div><div class="score-num" id="port7-prat-total">/ 0</div><div class="score-label">respondidas</div></div>'
    + '<div class="progress-track"><div class="progress-fill" id="port7-prat-prog" style="width:0%"></div></div>'
    + '<button class="btn btn-ghost ml-auto" onclick="port7GerarExercicios()">↺ Novas questões</button>'
    + '</div>';
  var quizHTML = (typeof _capBuildQuizHTML === 'function')
    ? _capBuildQuizHTML(exs, 'm8ex', 'port7CheckEx')
    : '<p style="color:var(--ink4)">Motor de exercícios indisponível.</p>';
  dest.innerHTML = scoreBar + '<div id="port7-atribuir" style="margin:.2rem 0 .8rem"></div>' + quizHTML;
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _cm = _port7CapMeta.filter(function (m) { return m.n === cap; })[0] || {};
    var _sn = (_port7Subtemas[cap] && _port7Prat.st > 0) ? (_port7Subtemas[cap][_port7Prat.st - 1] || '') : '';
    Atribuir.montar('port7-atribuir', { curso: 'port7', cursoNome: 'Português 7.º', tema: String(cap), temaNome: (_cm.label || ('Cap. ' + cap)), sub: String(_port7Prat.st || ''), subNome: _sn, tipo: 'quiz', nivel: _port7Prat.nivel });
  }
}

function port7CheckEx(qid, tipo, val, btn) {
  if (_port7Prat.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return; // resposta vazia
  _port7Prat.answered[qid] = true;
  if (r.correct) _port7Prat.score.correct++;
  _port7Prat.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var se = document.getElementById('port7-prat-score'); if (se) se.textContent = _port7Prat.score.correct;
  var te = document.getElementById('port7-prat-total'); if (te) te.textContent = '/ ' + _port7Prat.score.total;
  var pe = document.getElementById('port7-prat-prog'); if (pe && _port7Prat.exs.length) pe.style.width = (_port7Prat.score.total / _port7Prat.exs.length * 100) + '%';
  port7SaveProgress(_port7Prat.cap, r.correct);
}

// ═══ PROGRESSO (localStorage por capítulo) ═══
function port7SaveProgress(cap, correct) {
  try {
    var key = _port7PratStorageKey(cap);
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
function _port7PM(cap, tipo, opts) {
  if (typeof ProgressManager === 'undefined') return;
  try { ProgressManager.record('p7dom' + cap, tipo, opts || {}); } catch (e) {}
}

/* ════════════════════════════════════════════════════════════════
   HELPER: linha de capítulos para sub-modos (quiz, flashcards, teste)
   Só capítulos com gerador ficam ativos.
   ════════════════════════════════════════════════════════════════ */
function _port7BuildCapRow(rowId, activeCap, onclickName) {
  var row = document.getElementById(rowId);
  if (!row) return;
  var h = '';
  _port7CapMeta.forEach(function(m) {
    var hasGen = _port7TemConteudo(m.n);
    var color = _port7CapColors[m.n] || '#516860';
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

function _port7SetActiveCapBtn(rowId, btn, cap) {
  var row = document.getElementById(rowId);
  if (row) row.querySelectorAll('.resumo-cap-btn').forEach(function(b){ b.classList.remove('active'); b.style.background=''; b.style.borderColor=''; b.style.color=''; });
  if (btn) { var color = _port7CapColors[cap] || '#516860'; btn.classList.add('active'); btn.style.background=color; btn.style.borderColor=color; btn.style.color='#fff'; }
}

// Converte uma questão de resposta aberta em escolha múltipla. Delega no
// helper partilhado _fillParaMc (shared.js), com distratores pedagógicos.
function _port7FillToMc(ex) {
  return (typeof _fillParaMc === 'function') ? _fillParaMc(ex) : null;
}

/* Banco do domínio (o 7.º não tem módulos externos para juntar). */
function _port7FichaBanco(cap) {
  return (_port7Banco[cap] || []).slice();
}

// Baralha e tira n questões do banco alargado, respeitando o nível pedido.
// Primeiro só questões DO nível; se não chegarem, completa com as do nível
// mais próximo (médio→fácil→difícil; difícil→médio→fácil; fácil→médio→difícil),
// para que Fácil, Médio e Difícil deem fichas realmente diferentes.
function _port7FichaSlice(banco, n, dif) {
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
function _port7BuildMcQuestion(cap) {
  var qs = _port7FichaBanco(cap).filter(function (q) {
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
var _port7Quiz = { cap: 1, lives: 3, streak: 0, maxStreak: 0, score: 0, total: 0, answered: false, current: null };

function port7QuizBuildNav() {
  if (!_port7TemConteudo(_port7Quiz.cap)) _port7Quiz.cap = 1;
  _port7BuildCapRow('port7-quiz-cap-row', _port7Quiz.cap, 'port7QuizSelectCap');
  port7QuizStart();
}

function port7QuizSelectCap(cap, btn) {
  if (!_port7TemConteudo(cap)) return;
  _port7SetActiveCapBtn('port7-quiz-cap-row', btn, cap);
  _port7Quiz.cap = cap;
  port7QuizStart();
}

function port7QuizStart() {
  _port7Quiz.lives = 3; _port7Quiz.streak = 0; _port7Quiz.maxStreak = 0;
  _port7Quiz.score = 0; _port7Quiz.total = 0; _port7Quiz.answered = false;
  port7QuizNext();
}

function port7QuizNext() {
  var app = document.getElementById('port7-quiz-app');
  if (!app) return;
  if (_port7Quiz.lives <= 0) { port7QuizGameOver(app); return; }
  var ex = _port7BuildMcQuestion(_port7Quiz.cap);
  if (!ex) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem questões disponíveis para este capítulo.</p>'; return; }
  _port7Quiz.current = ex; _port7Quiz.answered = false;
  var lives = '';
  for (var i = 0; i < 3; i++) lives += (i < _port7Quiz.lives ? '❤️' : '🖤') + ' ';
  var opts = '';
  ex.opcoes.forEach(function(opt, idx) {
    opts += '<button class="qg-opt-btn" id="port7qopt-' + idx + '" onclick="port7QuizAnswer(' + idx + ')">' + opt + '</button>';
  });
  app.innerHTML =
    '<div class="qg-hub-bar">' +
      '<div class="qg-hub-lives">' + lives + '</div>' +
      '<div class="qg-hub-streak">' + (_port7Quiz.streak > 1 ? '🔥 ' + _port7Quiz.streak + ' seguidas' : '') + '</div>' +
      '<div class="qg-hub-score">✓ ' + _port7Quiz.score + ' / ' + _port7Quiz.total + '</div>' +
    '</div>' +
    '<div class="qg-hub-question">' + ex.enun + '</div>' +
    '<div class="qg-hub-opts">' + opts + '</div>' +
    '<div class="qg-hub-feedback" id="port7-quiz-fb" style="min-height:2.5rem"></div>';
}

function port7QuizAnswer(idx) {
  if (_port7Quiz.answered) return;
  _port7Quiz.answered = true;
  var ex = _port7Quiz.current; if (!ex) return;
  var correct = String(ex.opcoes[idx]) === String(ex.resposta);
  _port7Quiz.total++;
  document.querySelectorAll('.qg-opt-btn').forEach(function(b, i) {
    b.disabled = true;
    if (String(ex.opcoes[i]) === String(ex.resposta)) { b.style.background = '#4caf50'; b.style.color = '#fff'; }
  });
  var clicked = document.getElementById('port7qopt-' + idx);
  if (clicked && !correct) { clicked.style.background = '#f44336'; clicked.style.color = '#fff'; }
  var fb = document.getElementById('port7-quiz-fb');
  if (correct) {
    _port7Quiz.score++; _port7Quiz.streak++;
    if (_port7Quiz.streak > _port7Quiz.maxStreak) _port7Quiz.maxStreak = _port7Quiz.streak;
    if (fb) fb.innerHTML = '<span style="color:var(--correct,#3ecf8e);font-weight:700">✓ Certo!</span> ' + (ex.expl || '');
  } else {
    _port7Quiz.lives--; _port7Quiz.streak = 0;
    if (fb) fb.innerHTML = '<span style="color:var(--wrong,#ff6b6b);font-weight:700">✗ Errado.</span> ' + (ex.expl || '');
  }
  port7SaveProgress(_port7Quiz.cap, correct);
  setTimeout(function(){ port7QuizNext(); }, 1400);
}

function port7QuizGameOver(app) {
  var pct = _port7Quiz.total > 0 ? Math.round(_port7Quiz.score / _port7Quiz.total * 100) : 0;
  _port7PM(_port7Quiz.cap, 'quiz', { pontuacao: _port7Quiz.score, total: _port7Quiz.total });
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2rem;font-weight:900;color:var(--ink)">' + pct + '%</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + _port7Quiz.score + ' certas em ' + _port7Quiz.total + ' questões</div>' +
      '<div style="font-size:1.5rem;margin-bottom:1.5rem">Melhor sequência: ' + (_port7Quiz.maxStreak || 0) + ' 🔥</div>' +
      '<button class="btn btn-primary" onclick="port7QuizStart()">↺ Jogar novamente</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: FLASHCARDS
   ════════════════════════════════════════════════════════════════ */
var _port7Fc = { cap: 1, idx: 0, flipped: false, cards: [] };

function port7FcBuildNav() {
  // primeiro capítulo com cartões
  if (!(_port7Cards[_port7Fc.cap] && _port7Cards[_port7Fc.cap].length)) {
    for (var c = 1; c <= _port7CapMeta.length; c++) { if (_port7Cards[c] && _port7Cards[c].length) { _port7Fc.cap = c; break; } }
  }
  // linha de capítulos: só os que têm cartões
  var row = document.getElementById('port7-fc-cap-row');
  if (row) {
    var h = '';
    _port7CapMeta.forEach(function(m) {
      var has = !!(_port7Cards[m.n] && _port7Cards[m.n].length);
      var color = _port7CapColors[m.n] || '#516860';
      var isActive = _port7Fc.cap === m.n;
      var activeStyle = isActive ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
      var disabled = has ? '' : 'opacity:.45;cursor:not-allowed';
      var onclick = has ? ('port7FcSelectCap(' + m.n + ',this)') : '';
      var title = has ? '' : ' title="Em preparação"';
      h += '<button class="resumo-cap-btn' + (isActive ? ' active' : '') + '" onclick="' + onclick + '" style="' + activeStyle + ';' + disabled + '"' + title + '>'
         + '<span class="resumo-cap-icon">' + m.icon + '</span>' + m.label + (has ? '' : ' ·') + '</button>';
    });
    row.innerHTML = h;
  }
  port7FcSelectCap(_port7Fc.cap, null);
}

function port7FcSelectCap(cap, btn) {
  if (!(_port7Cards[cap] && _port7Cards[cap].length)) return;
  if (btn) _port7SetActiveCapBtn('port7-fc-cap-row', btn, cap);
  _port7Fc.cap = cap;
  _port7Fc.cards = _port7Cards[cap].slice();
  _port7Fc.idx = 0; _port7Fc.flipped = false;
  _port7PM(cap, 'flashcard');
  port7FcRender();
}

function port7FcRender() {
  var app = document.getElementById('port7-fc-app');
  if (!app) return;
  var cards = _port7Fc.cards;
  if (!cards.length) { app.innerHTML = '<p style="color:var(--ink4);padding:2rem;text-align:center">Sem flashcards para este capítulo.</p>'; return; }
  var card = cards[_port7Fc.idx];
  var color = _port7CapColors[_port7Fc.cap] || '#516860';
  var pct = Math.round((_port7Fc.idx + 1) / cards.length * 100);
  app.innerHTML =
    '<div class="card card-narrow">' +
      '<div class="flex items-center justify-between mb-3">' +
        '<span class="fc2-tag-pill" style="background:' + color + ';color:#fff">' + (card.tag || '') + '</span>' +
        '<span class="fc-counter">' + (_port7Fc.idx + 1) + ' / ' + cards.length + '</span>' +
      '</div>' +
      '<div class="fc2-prog-track"><div class="fc2-prog-fill" style="width:' + pct + '%;background:' + color + '"></div></div>' +
      '<div onclick="port7FcFlip()" class="fc2-card-inner" style="cursor:pointer;min-height:140px">' +
        '<div>' +
          '<p style="font-size:1.05rem;font-weight:600;color:var(--ink);line-height:1.4">' + (card.q || '') + '</p>' +
          '<p style="font-size:.9rem;color:' + color + ';margin-top:.75rem;line-height:1.5;display:' + (_port7Fc.flipped ? 'block' : 'none') + '">' + (card.a || '') + '</p>' +
          '<p style="font-size:.75rem;color:var(--ink4);margin-top:.5rem">' + (_port7Fc.flipped ? '' : 'Carrega para ver a resposta') + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="flex flex-wrap gap-3 justify-center mt-5">' +
        '<button class="btn btn-ghost" onclick="port7FcPrev()">← Anterior</button>' +
        '<button class="btn btn-primary" onclick="port7FcFlip()">↕ Virar</button>' +
        '<button class="btn btn-ghost" onclick="port7FcNext()">Seguinte →</button>' +
      '</div>' +
    '</div>';
}

function port7FcFlip() { _port7Fc.flipped = !_port7Fc.flipped; port7FcRender(); }
function port7FcNext() { _port7Fc.idx = (_port7Fc.idx + 1) % (_port7Fc.cards.length || 1); _port7Fc.flipped = false; port7FcRender(); }
function port7FcPrev() { _port7Fc.idx = (_port7Fc.idx - 1 + (_port7Fc.cards.length || 1)) % (_port7Fc.cards.length || 1); _port7Fc.flipped = false; port7FcRender(); }

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: TESTE CRONOMETRADO
   ════════════════════════════════════════════════════════════════ */
var _port7Teste = { cap: 1, nivel: 'medio', qtd: 10, tempo: 600, exs: [], answered: {}, score: { correct: 0, total: 0 }, timer: null, restante: 0 };

function port7TesteBuildNav() {
  if (!_port7TemConteudo(_port7Teste.cap)) _port7Teste.cap = 1;
  _port7BuildCapRow('port7-teste-cap-row', _port7Teste.cap, 'port7TesteSelectCap');
  port7TesteRenderConfig();
}

function port7TesteSelectCap(cap, btn) {
  if (!_port7TemConteudo(cap)) return;
  _port7SetActiveCapBtn('port7-teste-cap-row', btn, cap);
  _port7Teste.cap = cap;
  port7TesteRenderConfig();
}

function port7TesteRenderConfig() {
  var app = document.getElementById('port7-teste-app');
  if (!app) return;
  if (_port7Teste.timer) { clearInterval(_port7Teste.timer); _port7Teste.timer = null; }
  app.innerHTML =
    '<div class="card">' +
      '<div class="card-title">Configurar teste</div>' +
      '<div class="flex flex-wrap gap-6 items-end">' +
        '<div><div class="label-small">Nível</div>' +
          '<div class="gen-level-group" id="port7-teste-nivel">' +
            '<button class="gen-level-btn' + (_port7Teste.nivel==='facil'?' active':'') + '" onclick="port7TesteSetNivel(\'facil\',this)"><span class="status-dot status-dot--easy"></span> Fácil</button>' +
            '<button class="gen-level-btn' + (_port7Teste.nivel==='medio'?' active':'') + '" onclick="port7TesteSetNivel(\'medio\',this)"><span class="status-dot status-dot--medium"></span> Médio</button>' +
            '<button class="gen-level-btn' + (_port7Teste.nivel==='dificil'?' active':'') + '" onclick="port7TesteSetNivel(\'dificil\',this)"><span class="status-dot status-dot--hard"></span> Difícil</button>' +
          '</div></div>' +
        '<div><div class="label-small">N.º questões</div>' +
          '<select class="ai-select" id="port7-teste-qtd"><option value="10">10</option><option value="15">15</option><option value="20">20</option></select></div>' +
        '<div><div class="label-small">Tempo</div>' +
          '<select class="ai-select" id="port7-teste-tempo"><option value="600">10 min</option><option value="900">15 min</option><option value="1800">30 min</option></select></div>' +
        '<button class="btn btn-primary" onclick="port7TesteStart()">▶ Iniciar teste</button>' +
      '</div>' +
    '</div>';
}

function port7TesteSetNivel(nivel, btn) {
  _port7Teste.nivel = nivel;
  var grp = document.getElementById('port7-teste-nivel');
  if (grp) grp.querySelectorAll('.gen-level-btn').forEach(function(b){ b.classList.remove('active'); });
  if (btn) btn.classList.add('active');
}

function port7TesteStart() {
  var gen = _port7Gerador(_port7Teste.cap);
  var qtdEl = document.getElementById('port7-teste-qtd'), tempoEl = document.getElementById('port7-teste-tempo');
  _port7Teste.qtd = qtdEl ? parseInt(qtdEl.value) : 10;
  _port7Teste.tempo = tempoEl ? parseInt(tempoEl.value) : 600;
  var exs = [];
  if (gen) {
    var nTemas = _port7TemasCount[_port7Teste.cap] || 1;
    var tipos = ['mc', 'fill', 'mc', 'vf', 'fill'];
    for (var i = 0; i < _port7Teste.qtd; i++) {
      var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port7Teste.nivel);
      if (ex) exs.push(Object.assign({}, ex, { num: i + 1 }));
    }
  } else {
    // PT: teste sai do banco alargado do domínio
    exs = _port7FichaSlice(_port7FichaBanco(_port7Teste.cap), _port7Teste.qtd, _port7Teste.nivel);
  }
  if (!exs.length) return;
  _port7Teste.exs = exs; _port7Teste.answered = {}; _port7Teste.score = { correct: 0, total: 0 };
  _port7Teste.restante = _port7Teste.tempo;

  var app = document.getElementById('port7-teste-app');
  var quizHTML = (typeof _capBuildQuizHTML === 'function') ? _capBuildQuizHTML(exs, 'm8teste', 'port7TesteCheck') : '';
  app.innerHTML =
    '<div class="exam-progress-bar" style="position:sticky;top:0;z-index:5;background:var(--surface);padding:.75rem;border-radius:12px;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.8rem;font-weight:900" id="port7-teste-timer">' + _port7FmtTime(_port7Teste.restante) + '</div>' +
      '<div style="font-size:.78rem;color:var(--ink3)">Respondidas: <span id="port7-teste-answered">0 / ' + _port7Teste.qtd + '</span></div>' +
      '<button class="btn btn-ghost ml-auto" onclick="port7TesteFinish()">⏹ Terminar</button>' +
    '</div>' +
    '<div id="port7-teste-questions" style="margin-top:1rem">' + quizHTML + '</div>';

  _port7Teste.timer = setInterval(function() {
    _port7Teste.restante--;
    var t = document.getElementById('port7-teste-timer');
    if (t) t.textContent = _port7FmtTime(_port7Teste.restante);
    if (_port7Teste.restante <= 0) port7TesteFinish();
  }, 1000);
}

function _port7FmtTime(s) {
  var m = Math.floor(s / 60), sec = s % 60;
  return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
}

function port7TesteCheck(qid, tipo, val, btn) {
  if (_port7Teste.answered[qid]) return;
  if (typeof _capCheckAnswer !== 'function') return;
  var r = _capCheckAnswer(qid, tipo, val);
  if (!r) return;
  _port7Teste.answered[qid] = true;
  if (r.correct) _port7Teste.score.correct++;
  _port7Teste.score.total++;
  if (typeof _capShowFeedback === 'function') _capShowFeedback(qid, r.correct, r.expl, val, btn);
  var a = document.getElementById('port7-teste-answered');
  if (a) a.textContent = _port7Teste.score.total + ' / ' + _port7Teste.qtd;
  port7SaveProgress(_port7Teste.cap, r.correct);
  if (_port7Teste.score.total >= _port7Teste.qtd) setTimeout(port7TesteFinish, 600);
}

function port7TesteFinish() {
  if (_port7Teste.timer) { clearInterval(_port7Teste.timer); _port7Teste.timer = null; }
  var app = document.getElementById('port7-teste-app');
  if (!app) return;
  var total = _port7Teste.qtd;
  var correct = _port7Teste.score.correct;
  var pct = total > 0 ? Math.round(correct / total * 100) : 0;
  _port7PM(_port7Teste.cap, 'quiz', { pontuacao: correct, total: total });
  var nota = Math.round(correct / total * 20 * 10) / 10;
  var emoji = pct >= 90 ? '🏆' : pct >= 70 ? '⭐' : pct >= 50 ? '👍' : '📚';
  app.innerHTML =
    '<div style="text-align:center;padding:2.5rem 1rem">' +
      '<div style="font-size:3.5rem;margin-bottom:.75rem">' + emoji + '</div>' +
      '<div style="font-family:\'Cormorant Garamond\',serif;font-size:2.2rem;font-weight:900;color:var(--ink)">' + nota + ' / 20</div>' +
      '<div style="color:var(--ink3);margin:.5rem 0 1.5rem">' + correct + ' certas em ' + total + ' questões (' + pct + '%)</div>' +
      '<button class="btn btn-primary" onclick="port7TesteRenderConfig()">↺ Novo teste</button>' +
    '</div>';
}

/* ════════════════════════════════════════════════════════════════
   SUB-MODO: JOGOS (jogos de Português — pt-jogos.js)
   Quiz Contra o Tempo · Forca · Correspondência. Nada de jogos
   matemáticos (4 em linha, Sudoku…) — não fazem sentido em Português.
   ════════════════════════════════════════════════════════════════ */
function port7JogosInit() {
  (function(){ var pj=document.getElementById('port7p-jogos'); if(pj && !document.getElementById('port7-jogos-atr')){ var d=document.createElement('div'); d.id='port7-jogos-atr'; d.style.margin='0 0 .8rem'; if(pj.firstChild) pj.insertBefore(d,pj.firstChild); else pj.appendChild(d); } if(typeof Atribuir!=='undefined'&&Atribuir.montar) Atribuir.montar('port7-jogos-atr',{curso:'port7',cursoNome:'Português 7.º',tema:'',temaNome:'',sub:'',subNome:'',tipo:'jogo',nivel:''}); })();
  if (typeof ptJogosRender === 'function') {
    if (typeof ptJogosConfig === 'function') {
      ptJogosConfig({
        appId: 'port7-jogos-app',
        fonte: function () {
          var out = [];
          [1, 2, 3, 4, 5].forEach(function (c) { out = out.concat(_port7FichaBanco(c)); });
          return out;
        },
        forca: PT7_FORCA
      });
    }
    ptJogosRender();
  } else {
    var app = document.getElementById('port7-jogos-app');
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
   Lê edupt_port7_capN (gravado por port7SaveProgress). Mostra resumo
   global, stats, barras por capítulo, Relatório PDF e Limpar.
   ════════════════════════════════════════════════════════════════ */
function _port7ProgGetCaps() {
  var out = [];
  var nCaps = _port7CapMeta.length;
  for (var cap = 1; cap <= nCaps; cap++) {
    var correct = 0, total = 0;
    try {
      var d = JSON.parse(localStorage.getItem('edupt_port7_cap' + cap) || '{}');
      if (d.sections) Object.keys(d.sections).forEach(function(k) {
        correct += (d.sections[k].correct || 0);
        total += (d.sections[k].total || 0);
      });
    } catch (e) {}
    out.push({ cap: cap, correct: correct, total: total, pct: total > 0 ? Math.round(correct / total * 100) : 0 });
  }
  return out;
}

function port7RenderProgresso() {
  var el = document.getElementById('port7-progresso-content');
  if (!el) return;
  var caps = _port7ProgGetCaps();
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
     + '<button onclick="port7ProgDownloadPDF()" style="font-family:inherit;font-size:.82rem;font-weight:700;color:#8b3a35;background:none;border:none;cursor:pointer;text-decoration:underline;padding:0">Guarda o relatório PDF</button> para o manteres.</span>'
     + '</div>';

  // Resumo global (gradiente terracota do 9.º ano)
  h += '<div style="background:var(--m9c1-base);border:1.5px solid var(--m9c1-mid);border-radius:16px;padding:1.1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">'
     +   '<div style="width:52px;height:52px;border-radius:50%;background:var(--m9c1-mid);display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="ph ' + icon + '" style="font-size:1.4rem;color:#fff"></i></div>'
     +   '<div style="flex:1;min-width:180px">'
     +     '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.6rem;font-weight:900;color:var(--ink);line-height:1">' + (totalT > 0 ? globalPct + '<span style="font-size:1rem">%</span>' : '-') + '</div>'
     +     '<div style="font-size:.82rem;color:var(--ink2);margin-top:3px">' + msg + '</div>'
     +   '</div>'
     +   '<button class="btn btn-ghost" onclick="port7ProgDownloadPDF()" style="font-size:.78rem;padding:7px 14px;display:inline-flex;align-items:center;gap:5px"><i class="ph ph-file-text"></i>Relatório PDF</button>'
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
    var m = _port7CapMeta[c.cap - 1];
    var color = _port7CapColors[c.cap] || '#516860';
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
      var mp = _port7CapMeta[pior.cap - 1];
      var colorp = _port7CapColors[pior.cap] || '#516860';
      h += '<div class="card mt-4" style="border-color:' + colorp + '">'
        + '<div class="card-title" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem">'
        + '<span>🎯 Treino Direcionado</span></div>'
        + '<div style="font-size:.85rem;color:var(--ink2);margin:.3rem 0 .8rem">O capítulo onde tens mais a melhorar é <strong>' + mp.label + '</strong> (' + pior.pct + '%). Pratica mais um pouco para subir a tua taxa!</div>'
        + '<button class="btn btn-primary" onclick="port7TreinarCap(' + pior.cap + ')" style="display:inline-flex;align-items:center;gap:6px"><i class="ph ph-target"></i> Treinar ' + mp.label + '</button>'
        + '</div>';
    }
  }

  // Última atualização
  h += '<div style="font-size:.72rem;color:var(--ink4);margin-top:1rem">Última atualização: ' + new Date().toLocaleString('pt-PT', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit' }) + '</div>';

  // Limpar
  h += '<div class="mt-4 flex flex-wrap gap-3"><button class="btn btn-ghost" onclick="port7ProgReset()"><i class="ph ph-trash"></i> Limpar progresso</button></div>';

  el.innerHTML = h;
}

// Abre a tab Exercícios da Praticar já no capítulo indicado (treino direcionado).
function port7TreinarCap(cap) {
  _port7Prat.cap = cap;
  _port7Prat.st = 0;
  port7SwitchTab('exercicios', null);
}

function port7ProgReset() {
  if (typeof window !== 'undefined' && window.confirm && !window.confirm('Limpar todo o progresso do 9.º ano? Esta ação não pode ser desfeita.')) return;
  for (var cap = 1; cap <= _port7CapMeta.length; cap++) { try { localStorage.removeItem('edupt_port7_cap' + cap); } catch (e) {} }
  // Remove só os capítulos do 9.º ano (m9cap*) do ProgressManager, preservando os outros anos.
  try {
    var raw = localStorage.getItem('edupt_progress_v2');
    if (raw) {
      var d = JSON.parse(raw);
      if (d.caps) { Object.keys(d.caps).forEach(function(k) { if (k.indexOf('p7dom') === 0) delete d.caps[k]; }); }
      localStorage.setItem('edupt_progress_v2', JSON.stringify(d));
    }
  } catch (e) {}
  port7RenderProgresso();
  if (typeof eduToast === 'function') eduToast('Progresso do 9.º ano limpo.', 'ok');
}

function port7ProgDownloadPDF() {
  var caps = _port7ProgGetCaps();
  var totalC = 0, totalT = 0;
  caps.forEach(function(c) { totalC += c.correct; totalT += c.total; });
  var globalPct = totalT > 0 ? Math.round(totalC / totalT * 100) : 0;
  var rows = caps.map(function(c) {
    var m = _port7CapMeta[c.cap - 1];
    return '<tr><td style="padding:6px 10px;border-bottom:1px solid #eee">' + m.label + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.correct + ' / ' + c.total : '-') + '</td>'
      + '<td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center">' + (c.total > 0 ? c.pct + '%' : '-') + '</td></tr>';
  }).join('');
  var html = '<div style="font-family:Arial,sans-serif;max-width:680px;margin:0 auto;padding:24px">'
    + '<h1 style="font-size:20px;margin:0 0 4px">Relatório de Progresso · Português 7.º Ano</h1>'
    + '<div style="color:#666;font-size:13px;margin-bottom:16px">3ponto14 · ' + new Date().toLocaleString('pt-PT', { day: '2-digit', month: '2-digit', year: 'numeric' }) + '</div>'
    + '<div style="background:#eef3f9;border:1px solid #5a7fa8;border-radius:8px;padding:12px 16px;margin-bottom:16px">'
    + '<strong>Taxa global:</strong> ' + (totalT > 0 ? globalPct + '%' : '-') + ' &nbsp;·&nbsp; ' + totalC + ' certas em ' + totalT + ' questões.</div>'
    + '<table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr style="background:#36527a;color:#fff">'
    + '<th style="padding:8px 10px;text-align:left">Capítulo</th><th style="padding:8px 10px">Certas</th><th style="padding:8px 10px">%</th></tr></thead>'
    + '<tbody>' + rows + '</tbody></table></div>';
  if (typeof htmlToPdfDownload === 'function') htmlToPdfDownload(html, 'progresso-port7.pdf');
  else if (typeof eduToast === 'function') eduToast('Geração de PDF indisponível.', 'warn');
}

/* ════════════════════════════════════════════════════════════════
   TAB FICHAS - gerador rico (multi-capítulo), igual ao 7.º ano.
   Tipos: resumo teórico, exercícios, teste, minitestes, soluções.
   Seleção de vários capítulos; nível; nº de exercícios; PDF ou HTML.
   ════════════════════════════════════════════════════════════════ */
var _port7gf = {
  caps: {},            // { cap: true } selecionados
  sts: {},             // { cap: { stIdx(1..n): true } } tópicos por capítulo; vazio = todos
  tipos: { resumo: true, exercicios: true, teste: true, minitestes: false, solucoes: true },
  dif: 'facil',
  qty: 10
};

// Tópicos (índices 1..n) escolhidos para um capítulo; null = todos.
function _port7gfStsSel(cap) {
  var sel = _port7gf.sts[cap];
  if (!sel) return null;
  var out = [];
  Object.keys(sel).forEach(function (i) { if (sel[i]) out.push(parseInt(i)); });
  return out.length ? out : null;
}

// Chaves t do banco correspondentes aos tópicos escolhidos; null = todos.
function _port7gfTemasSel(cap) {
  var sts = _port7gfStsSel(cap);
  if (!sts) return null;
  var mapa = _port7SubtemaTemas[cap] || {};
  var temas = [];
  sts.forEach(function (i) { (mapa[i] || [String(i)]).forEach(function (t) { if (temas.indexOf(t) === -1) temas.push(t); }); });
  return temas.length ? temas : null;
}

// Constrói a lista de capítulos selecionáveis e, para cada capítulo
// selecionado, os chips dos tópicos (subtemas) — a dona pediu para poder
// gerar fichas só de um tópico (ex.: só Os Lusíadas, só Funções Sintáticas).
function port7FichasBuildNav() {
  var el = document.getElementById('port7-fichas-caps');
  if (!el) return;
  // por defeito, seleciona o primeiro capítulo com conteúdo
  var temAlgum = false;
  for (var k in _port7gf.caps) { if (_port7gf.caps[k]) { temAlgum = true; break; } }
  var h = '';
  _port7CapMeta.forEach(function(m) {
    var hasGen = _port7TemConteudo(m.n);
    if (!hasGen) return;
    if (!temAlgum) { _port7gf.caps[m.n] = true; temAlgum = true; } // 1.º disponível
    var sel = !!_port7gf.caps[m.n];
    var color = _port7CapColors[m.n] || '#516860';
    var style = sel ? 'background:' + color + ';border-color:' + color + ';color:#fff' : '';
    h += '<button class="gf-cap-btn' + (sel ? ' active' : '') + '" data-cap="' + m.n + '" onclick="port7gfToggleCap(' + m.n + ',this)" style="' + style + '">' + m.icon + ' ' + m.label + '</button>';
    // tópicos do capítulo selecionado
    if (sel) {
      var sts = _port7Subtemas[m.n] || [];
      if (sts.length) {
        var escolhidos = _port7gf.sts[m.n] || {};
        var algumSt = _port7gfStsSel(m.n) !== null;
        h += '<div style="margin:.15rem 0 .55rem 1.1rem;display:flex;flex-wrap:wrap;gap:.3rem;align-items:center">';
        h += '<span style="font-size:.66rem;font-weight:800;color:var(--ink4);text-transform:uppercase;letter-spacing:.06em;margin-right:.2rem">Tópicos:</span>';
        h += '<button onclick="port7gfToggleSt(' + m.n + ',0,this)" style="' + _port7gfStStyle(!algumSt, color) + '">Todos</button>';
        sts.forEach(function (st, i) {
          var on = !!escolhidos[i + 1];
          h += '<button onclick="port7gfToggleSt(' + m.n + ',' + (i + 1) + ',this)" style="' + _port7gfStStyle(on, color) + '">' + st + '</button>';
        });
        h += '</div>';
      }
    }
  });
  el.innerHTML = h;
}

function _port7gfStStyle(on, color) {
  return 'border-radius:999px;padding:3px 11px;font-size:.7rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;'
    + (on ? 'background:' + color + ';border:1.5px solid ' + color + ';color:#fff'
          : 'background:var(--white);border:1.5px solid var(--border);color:var(--ink3)');
}

function port7gfToggleCap(cap, btn) {
  _port7gf.caps[cap] = !_port7gf.caps[cap];
  if (!_port7gf.caps[cap]) delete _port7gf.sts[cap]; // desmarcar cap limpa os tópicos
  port7FichasBuildNav(); // re-render para mostrar/esconder a linha de tópicos
}

// idx 0 = «Todos» (limpa a seleção); idx 1..n alterna o tópico.
function port7gfToggleSt(cap, idx, btn) {
  if (idx === 0) {
    delete _port7gf.sts[cap];
  } else {
    if (!_port7gf.sts[cap]) _port7gf.sts[cap] = {};
    _port7gf.sts[cap][idx] = !_port7gf.sts[cap][idx];
    if (_port7gfStsSel(cap) === null) delete _port7gf.sts[cap]; // tudo desmarcado = todos
  }
  port7FichasBuildNav();
}

function port7gfToggleType(btn) {
  var t = btn.getAttribute('data-type');
  _port7gf.tipos[t] = !_port7gf.tipos[t];
  btn.classList.toggle('active', _port7gf.tipos[t]);
  var tick = btn.querySelector('.gf-tick'); if (tick) tick.textContent = _port7gf.tipos[t] ? '✓' : '';
}

function port7gfSetDif(btn) {
  _port7gf.dif = btn.getAttribute('data-dif');
  var grp = document.getElementById('port7-fichas-dif');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

function port7gfSetQty(btn) {
  _port7gf.qty = parseInt(btn.getAttribute('data-qty')) || 10;
  var grp = document.getElementById('port7-fichas-qty');
  if (grp) grp.querySelectorAll('.gf-dif-btn').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
}

// Renderiza um bloco de exercícios (com ou sem espaço de resposta).
function _port7gfExBloco(exs, startNum) {
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

function _port7gfGenExs(cap, n) {
  var gen = _port7Gerador(cap);
  if (!gen) {
    // PT: a ficha vem toda do banco alargado (domínio + módulos realojados),
    // restringido aos tópicos escolhidos (se a dona/aluno escolheu algum)
    var pool = _port7FichaBanco(cap);
    var temasSel = _port7gfTemasSel(cap);
    if (temasSel) {
      var filtrado = pool.filter(function (q) { return temasSel.indexOf(q.t) !== -1; });
      if (filtrado.length) pool = filtrado;
    }
    return _port7FichaSlice(pool, n, _port7gf.dif);
  }
  var nTemas = _port7TemasCount[cap] || 1;
  var tipos = ['mc', 'fill', 'vf', 'fill', 'mc', 'mc'];
  var geradas = [], vistos = {};
  // gera até n questões DISTINTAS (evita enunciados repetidos na ficha)
  for (var i = 0, tent = 0; geradas.length < n && tent < n * 6; tent++) {
    var ex = gen(String((i % nTemas) + 1), tipos[i % tipos.length], _port7gf.dif);
    i++;
    if (!ex) continue;
    var chave = String(ex.enun || '').replace(/<[^>]+>/g, '').trim();
    if (vistos[chave]) continue;
    vistos[chave] = 1;
    geradas.push(ex);
  }
  // mistura questões reais do banco (multi-passo, com contexto/figuras)
  var banco = (typeof _port7Banco !== 'undefined' && _port7Banco[cap]) ? _port7Banco[cap] : [];
  if (banco.length && typeof _mixBancoGeradas === 'function') {
    return _mixBancoGeradas(banco, geradas, n, Math.min(Math.ceil(n / 3), banco.length), _port7gf.dif);
  }
  return geradas;
}

function port7gfGerar(formato) {
  // capítulos selecionados (conta o banco alargado — em PT não há geradores)
  var capsSel = [];
  _port7CapMeta.forEach(function(m) { if (_port7gf.caps[m.n] && (_port7Gerador(m.n) || _port7FichaBanco(m.n).length)) capsSel.push(m.n); });
  var status = document.getElementById('port7-fichas-status');
  if (!capsSel.length) { if (status) status.textContent = 'Seleciona pelo menos um capítulo.'; return; }
  var algumTipo = _port7gf.tipos.resumo || _port7gf.tipos.exercicios || _port7gf.tipos.teste || _port7gf.tipos.minitestes;
  if (!algumTipo) { if (status) status.textContent = 'Seleciona pelo menos um tipo de conteúdo.'; return; }
  if (status) status.textContent = 'A gerar…';
  if (typeof Atribuir !== 'undefined' && Atribuir.montar) {
    var _capsF = []; _port7CapMeta.forEach(function(m){ if (_port7gf.caps[m.n]) _capsF.push(m.n); });
    var _capsNomes = _capsF.map(function(n){ var mm=_port7CapMeta[n-1]||{}; return mm.label||('Cap. '+n); });
    Atribuir.montar('port7-fichas-atr', { curso:'port7', cursoNome:'Português 7.º', tema:_capsF.join('.'), temaNome:_capsNomes.join(', '), sub:'', subNome:'', tipo:'ficha', nivel:_port7gf.dif });
  }

  var difLabel = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' }[_port7gf.dif];
  var solucoes = []; // {num, ex} acumuladas para a secção final
  var solCounter = 0;

  var corpo = '';
  capsSel.forEach(function(cap, ci) {
    _port7PM(cap, 'ficha'); // gerou ficha deste capítulo
    var m = _port7CapMeta[cap - 1];
    var color = _port7CapColors[cap] || '#36527a';
    corpo += '<div style="' + (ci > 0 ? 'page-break-before:always;' : '') + 'margin-bottom:6px">'
      + '<h2 style="font-size:16px;color:' + color + ';border-bottom:2px solid ' + color + ';padding-bottom:4px;margin:0 0 10px">' + cap + '. ' + m.label + '</h2>';

    // Resumo teórico (das flashcards), restringido aos tópicos escolhidos
    // quando o filtro apanha cartões suficientes (senão mostra o domínio todo)
    if (_port7gf.tipos.resumo) {
      var cards = _port7Cards[cap] || [];
      var stsR = _port7gfStsSel(cap);
      if (stsR && cards.length) {
        var palavras = [];
        stsR.forEach(function (i) {
          String((_port7Subtemas[cap] || [])[i - 1] || '').toLowerCase().split(/\s+/).forEach(function (w) {
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
    if (_port7gf.tipos.exercicios) {
      var exs = _port7gfGenExs(cap, _port7gf.qty);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Exercícios</h3>'
        + _port7gfExBloco(exs, solCounter + 1) + '</div>';
      exs.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Teste de avaliação (8 questões mistas)
    if (_port7gf.tipos.teste) {
      var exsT = _port7gfGenExs(cap, 8);
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Teste de avaliação</h3>'
        + _port7gfExBloco(exsT, solCounter + 1) + '</div>';
      exsT.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
    }
    // Minitestes (um por subtema, 4 questões cada)
    if (_port7gf.tipos.minitestes) {
      var subt = _port7Subtemas[cap] || [];
      var mapa = _port7SubtemaTemas[cap] || {};
      var genM = _port7Gerador(cap);
      var bancoM = genM ? null : _port7FichaBanco(cap); // PT: sem gerador, usa o banco alargado
      var stsSelM = _port7gfStsSel(cap); // só minitestes dos tópicos escolhidos
      corpo += '<div style="margin-bottom:12px"><h3 style="font-size:13px;color:#444;margin:0 0 5px">Minitestes</h3>';
      subt.forEach(function(st, si) {
        if (stsSelM && stsSelM.indexOf(si + 1) === -1) return;
        var temas = mapa[si + 1] || [String(si + 1)];
        var exsM = [];
        if (genM) {
          for (var q = 0; q < 4; q++) {
            var tema = temas[q % temas.length];
            var ex = genM(tema, (q % 2 === 0) ? 'mc' : 'fill', _port7gf.dif);
            if (ex) exsM.push(ex);
          }
        } else {
          var poolM = bancoM.filter(function (qb) { return temas.indexOf(qb.t) !== -1; });
          if (!poolM.length) poolM = bancoM;
          exsM = _port7FichaSlice(poolM, 4, _port7gf.dif);
        }
        corpo += '<div style="margin-bottom:8px"><div style="font-size:12px;font-weight:700;color:#555">Mini ' + (si + 1) + ' · ' + st + '</div>'
          + _port7gfExBloco(exsM, solCounter + 1) + '</div>';
        exsM.forEach(function(ex) { solCounter++; solucoes.push({ num: solCounter, ex: ex }); });
      });
      corpo += '</div>';
    }
    corpo += '</div>';
  });

  // Secção de soluções
  var solHTML = '';
  if (_port7gf.tipos.solucoes && solucoes.length) {
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
    var nome = _port7CapMeta[c - 1].label;
    var sts = _port7gfStsSel(c);
    if (sts) {
      var nomes = sts.map(function (i) { return (_port7Subtemas[c] || [])[i - 1] || ''; }).filter(function (x) { return x; });
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

  var _temasNomes = capsSel.map(function(c){ return _port7CapMeta[c-1].label; });
  var fname = (typeof _nomeFicha === 'function') ? _nomeFicha('9', 'portugues', _temasNomes, formato) : ('ficha-port7.' + (formato === 'html' ? 'html' : 'pdf'));
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
function _port7Init() {
  // arranca na tab Teoria com o cap 1 selecionado
  port7BuildResumoNav();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _port7Init);
else _port7Init();

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
var _port7Banco = {
  // ── Domínio 1 · Educação Literária ──
  1: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'As narrativas tradicionais caracterizam-se por:', opcoes: ['serem de autor anónimo e transmitidas oralmente', 'terem sempre autor conhecido', 'serem escritas em verso', 'serem sempre histórias verídicas'], resposta: 'serem de autor anónimo e transmitidas oralmente', expl: 'Passaram de boca em boca ao longo de gerações: o «autor» é o povo, e por isso existem várias versões.', tema: 'T1 · Narrativas tradicionais' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Uma fábula é uma narrativa que:', opcoes: ['tem animais como personagens e termina com uma moralidade', 'conta a vida de uma pessoa real', 'explica a origem de um lugar', 'é sempre assustadora'], resposta: 'tem animais como personagens e termina com uma moralidade', expl: 'Na fábula, os animais agem como pessoas e a história fecha com uma lição de vida.', tema: 'T1 · Narrativas tradicionais' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'A lenda distingue-se do conto porque:', opcoes: ['mistura factos reais (lugares, figuras históricas) com elementos maravilhosos', 'é sempre cómica', 'não tem personagens', 'é escrita em verso'], resposta: 'mistura factos reais (lugares, figuras históricas) com elementos maravilhosos', expl: 'A lenda parte de algo real (um lugar, uma figura) e acrescenta-lhe o maravilhoso para explicar origens.', tema: 'T1 · Narrativas tradicionais' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Ladino», de Miguel Torga (Bichos), o protagonista é:', opcoes: ['um pardal esperto e manhoso', 'um cão de caça', 'um padre da aldeia', 'um gato vadio'], resposta: 'um pardal esperto e manhoso', expl: 'Ladino é um pardal: nos contos de Bichos, Torga trata os animais como pessoas, com sentimentos e astúcia.', tema: 'T2 · Narrativas de autor' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Um narrador que conta a história na 1.ª pessoa e entra na ação é:', opcoes: ['participante', 'não participante', 'objetivo', 'ausente'], resposta: 'participante', expl: 'O narrador participante faz parte da história que conta (usa «eu»).', tema: 'T2 · Narrativas de autor' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Numa narrativa, a personagem que apenas compõe o cenário, sem intervir na ação, é:', opcoes: ['o figurante', 'a personagem principal', 'a personagem secundária', 'o narrador'], resposta: 'o figurante', expl: 'Relevo das personagens: principal (centro da ação), secundária (participa) e figurante (apenas «paisagem humana»).', tema: 'T2 · Narrativas de autor' },
    { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Quando a narrativa para a ação para caracterizar um lugar ou uma personagem, estamos perante:', opcoes: ['uma descrição', 'um diálogo', 'um resumo', 'um desenlace'], resposta: 'uma descrição', expl: 'A descrição é um modo de relato que suspende a ação para caracterizar: com adjetivos e sensações.', tema: 'T2 · Narrativas de autor' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'No poema, a «voz» que exprime sentimentos chama-se:', opcoes: ['sujeito poético', 'poeta', 'narrador', 'declamador'], resposta: 'sujeito poético', expl: 'O sujeito poético é a voz criada NO texto: não se confunde com o poeta, a pessoa real.', tema: 'T3 · Poesia' },
    { t: '3', tipo: 'mc', dif: 'facil', enun: 'O verso ou estrofe que se repete ao longo de um poema chama-se:', opcoes: ['refrão', 'rima', 'título', 'métrica'], resposta: 'refrão', expl: 'O refrão repete-se em momentos regulares do poema, criando ritmo e musicalidade.', tema: 'T3 · Poesia' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'No texto dramático, as didascálias são:', opcoes: ['as indicações cénicas, que não são ditas pelos atores', 'as falas das personagens principais', 'os aplausos do público', 'os cenários do palco'], resposta: 'as indicações cénicas, que não são ditas pelos atores', expl: 'As didascálias (em itálico ou parênteses) indicam movimentos, tons de voz, cenários: orientam a encenação.', tema: 'T4 · Texto dramático' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: 'O texto dramático organiza-se em:', opcoes: ['atos e cenas', 'capítulos e parágrafos', 'estrofes e versos', 'introdução e conclusão'], resposta: 'atos e cenas', expl: 'Atos (grandes divisões, com mudança de cenário) e cenas (entrada/saída de personagens).', tema: 'T4 · Texto dramático' },
    { t: '4', tipo: 'vf', dif: 'dificil', enun: 'No texto dramático, é o narrador que apresenta as personagens e descreve os espaços.', resposta: 'F', expl: 'O texto dramático NÃO tem narrador: conhecemos a história pelas falas das personagens e pelas didascálias.', tema: 'T4 · Texto dramático' }
  ],
  // ── Domínio 2 · Gramática ──
  2: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «O cão ladrou furiosamente.», a palavra «furiosamente» é:', opcoes: ['advérbio', 'adjetivo', 'nome', 'verbo'], resposta: 'advérbio', expl: 'Os advérbios em -mente indicam o modo da ação: são invariáveis.', tema: 'T1 · Classes de Palavras' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «Este livro é meu.» e «Este é o melhor!», a palavra «Este» é, respetivamente:', opcoes: ['determinante e pronome', 'pronome e determinante', 'determinante nas duas frases', 'pronome nas duas frases'], resposta: 'determinante e pronome', expl: 'Na 1.ª acompanha o nome «livro» (determinante); na 2.ª está sozinho, a substituí-lo (pronome).', tema: 'T1 · Classes de Palavras' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Em «A Rita comeu o bolo.», o sujeito é:', opcoes: ['A Rita', 'o bolo', 'comeu', 'comeu o bolo'], resposta: 'A Rita', expl: 'Quem comeu? A Rita: sujeito simples.', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «A Rita comeu o bolo.», «o bolo» desempenha a função de:', opcoes: ['complemento direto', 'sujeito', 'complemento indireto', 'vocativo'], resposta: 'complemento direto', expl: 'Comeu o quê? O bolo, substituível por «o»: «comeu-o».', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Em «Pedro, traz-me o caderno!», a palavra «Pedro» é:', opcoes: ['vocativo', 'sujeito', 'complemento direto', 'predicado'], resposta: 'vocativo', expl: 'É um chamamento, separado por vírgula: vocativo (não é o sujeito!).', tema: 'T2 · Funções Sintáticas' },
    { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em «Emprestei o lápis ao meu colega.», «ao meu colega» desempenha a função de:', opcoes: ['complemento indireto', 'complemento direto', 'sujeito', 'vocativo'], resposta: 'complemento indireto', expl: 'Emprestei a quem? Ao colega, substituível por «lhe»: «emprestei-lhe o lápis».', tema: 'T2 · Funções Sintáticas' },
    { t: '3', tipo: 'mc', dif: 'facil', enun: 'Em «Estudei muito, mas a nota foi baixa.», a conjunção «mas» liga orações coordenadas:', opcoes: ['adversativas', 'copulativas', 'disjuntivas', 'conclusivas'], resposta: 'adversativas', expl: '«Mas» exprime oposição/contraste: coordenação adversativa.', tema: 'T3 · Orações' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «Fiquei em casa porque estava a chover.», a oração subordinada é adverbial:', opcoes: ['causal', 'temporal', 'final', 'condicional'], resposta: 'causal', expl: '«Porque» introduz a causa: adverbial causal.', tema: 'T3 · Orações' },
    { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Na forma negativa, «Vi o filme.» com pronome fica:', opcoes: ['«Não o vi.»', '«Não vi-o.»', '«O não vi.»', '«Não lhe vi.»'], resposta: '«Não o vi.»', expl: 'A negação puxa o pronome para ANTES do verbo (próclise): e «ver algo» pede «o», não «lhe».', tema: 'T3 · Orações' },
    { t: '4', tipo: 'mc', dif: 'medio', enun: '«Tenho lido muitos livros este ano.»: a forma verbal «tenho lido» é:', opcoes: ['um tempo composto (ter + particípio)', 'um tempo simples', 'um verbo no imperativo', 'uma forma do conjuntivo simples'], resposta: 'um tempo composto (ter + particípio)', expl: 'Tempos compostos = auxiliar TER + particípio passado (lido).', tema: 'T4 · Modos Verbais' },
    { t: '4', tipo: 'mc', dif: 'dificil', enun: 'A passagem correta de « — Vou ao cinema hoje: disse o João.» para o discurso indireto é:', opcoes: ['O João disse que ia ao cinema naquele dia.', 'O João disse que vou ao cinema hoje.', 'O João disse que irá ao cinema hoje.', 'O João disse: vou ao cinema naquele dia.'], resposta: 'O João disse que ia ao cinema naquele dia.', expl: 'No discurso indireto, presente → imperfeito (vou → ia) e «hoje» → «naquele dia».', tema: 'T4 · Modos Verbais' },
    { t: '5', tipo: 'mc', dif: 'facil', enun: 'A palavra «infeliz» é formada por:', opcoes: ['derivação por prefixação', 'derivação por sufixação', 'composição', 'onomatopeia'], resposta: 'derivação por prefixação', expl: 'in- + feliz, acrescenta-se um prefixo: derivação por prefixação.', tema: 'T5 · Léxico e Variação' },
    { t: '5', tipo: 'mc', dif: 'medio', enun: 'Qual destas palavras é formada por composição?', opcoes: ['guarda-chuva', 'felizmente', 'infeliz', 'gatinho'], resposta: 'guarda-chuva', expl: 'Composição junta duas palavras (guarda + chuva); as outras são derivação (sufixos/prefixos).', tema: 'T5 · Léxico e Variação' },
    { t: '5', tipo: 'mc', dif: 'medio', enun: '«Ônibus» (Brasil) face a «autocarro» (Portugal) é um exemplo de:', opcoes: ['variedade geográfica do português', 'erro de português', 'linguagem juvenil', 'palavra arcaica'], resposta: 'variedade geográfica do português', expl: 'A mesma língua tem variedades geográficas: vocabulário diferente, língua igual.', tema: 'T5 · Léxico e Variação' }
  ],
  // ── Domínio 3 · Leitura ──
  3: [
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'O texto publicitário tem como principal objetivo:', opcoes: ['persuadir o destinatário', 'contar uma história', 'ensinar gramática', 'descrever uma paisagem'], resposta: 'persuadir o destinatário', expl: 'A publicidade quer convencer (comprar, aderir): usa slogan, imagem e linguagem apelativa.', tema: 'T2 · Tipologias' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Um texto que relata a vida de uma pessoa real é:', opcoes: ['uma biografia', 'uma fábula', 'uma notícia', 'um anúncio'], resposta: 'uma biografia', expl: 'A biografia conta a vida de alguém, geralmente por ordem cronológica.', tema: 'T2 · Tipologias' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Uma crítica (de livro ou filme) distingue-se da notícia porque:', opcoes: ['inclui a opinião fundamentada de quem escreve', 'não tem título', 'é sempre negativa', 'só apresenta factos'], resposta: 'inclui a opinião fundamentada de quem escreve', expl: 'A crítica informa E avalia: combina factos sobre a obra com a apreciação do autor.', tema: 'T2 · Tipologias' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'O tema de um texto é:', opcoes: ['o assunto central de que o texto trata', 'o título do texto', 'a primeira frase', 'o nome do autor'], resposta: 'o assunto central de que o texto trata', expl: 'O tema é o assunto de fundo: pode coincidir ou não com o título.', tema: 'T1 · Compreensão' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Em «O Rui tem um coração de pedra.», a expressão tem sentido:', opcoes: ['figurado: o Rui é insensível', 'literal: o coração do Rui é de pedra', 'científico', 'humorístico apenas'], resposta: 'figurado: o Rui é insensível', expl: 'Sentido figurado: as palavras ganham um significado «emprestado» (dureza = insensibilidade).', tema: 'T3 · Sentidos' },
    { t: '1', tipo: 'mc', dif: 'dificil', enun: 'Lê: «A Marta vestiu o casaco, pegou no chapéu-de-chuva e olhou pela janela com um suspiro.» Pode inferir-se que:', opcoes: ['estava mau tempo e ela não tinha vontade de sair', 'estava um dia de sol', 'a Marta ia dormir', 'a janela estava partida'], resposta: 'estava mau tempo e ela não tinha vontade de sair', expl: 'O chapéu-de-chuva indica chuva; o suspiro, contrariedade: inferência apoiada nas pistas do texto.', tema: 'T1 · Compreensão' },
    { t: '3', tipo: 'vf', dif: 'medio', enun: 'Inferir é concluir informação que o texto sugere mas não diz explicitamente.', resposta: 'V', expl: 'É «ler nas entrelinhas»: juntar pistas do texto para chegar a uma conclusão.', tema: 'T3 · Sentidos' }
  ],
  // ── Domínio 4 · Escrita ──
  4: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'A sequência correta de um texto narrativo é:', opcoes: ['situação inicial → desenvolvimento → desenlace', 'conclusão → introdução → desenvolvimento', 'desenlace → peripécias → situação inicial', 'título → moralidade → diálogo'], resposta: 'situação inicial → desenvolvimento → desenlace', expl: 'A narrativa apresenta a situação, complica-a (peripécias) e resolve-a no desenlace.', tema: 'T1 · Texto narrativo' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Para narrar acontecimentos pela ordem em que ocorrem, usam-se conectores como:', opcoes: ['primeiro, depois, finalmente', 'porque, visto que, já que', 'mas, porém, contudo', 'ou seja, isto é'], resposta: 'primeiro, depois, finalmente', expl: 'São conectores de tempo/ordenação: organizam a sequência da narrativa.', tema: 'T1 · Texto narrativo' },
    { t: '3', tipo: 'mc', dif: 'facil', enun: 'Numa boa descrição deve usar-se sobretudo:', opcoes: ['adjetivos expressivos e sensações (ver, ouvir, cheirar…)', 'muitas datas e números', 'frases de diálogo', 'apenas verbos de ação'], resposta: 'adjetivos expressivos e sensações (ver, ouvir, cheirar…)', expl: 'Descrever é caracterizar: os adjetivos e as sensações pintam a imagem para o leitor.', tema: 'T3 · Texto descritivo' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'Num texto de opinião, depois de apresentares a tua posição deves:', opcoes: ['justificá-la com razões e exemplos', 'mudar de assunto', 'repetir a posição várias vezes', 'terminar imediatamente'], resposta: 'justificá-la com razões e exemplos', expl: 'Opinião sem argumentos não convence: cada razão deve ter um exemplo concreto.', tema: 'T2 · Texto de opinião' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Qual das frases evita a repetição em «O Rui chegou. O Rui sentou-se.»?', opcoes: ['«O Rui chegou e sentou-se.»', '«O Rui chegou. O Rui sentou.»', '«Chegou o Rui. O Rui sentou-se.»', '«O Rui, o Rui chegou e sentou-se.»'], resposta: '«O Rui chegou e sentou-se.»', expl: 'Coordenar as orações elimina a repetição do sujeito sem perder informação.', tema: 'T1 · Texto narrativo' },
    { t: '2', tipo: 'mc', dif: 'dificil', enun: 'Em qual das frases o registo de língua é adequado a um trabalho escolar?', opcoes: ['«Considero que a reciclagem é fundamental.»', '«A reciclagem é uma cena fixe.»', '«Reciclar? Bué importante, tipo.»', '«Isso da reciclagem é mesmo top.»'], resposta: '«Considero que a reciclagem é fundamental.»', expl: 'Na escola usa-se registo cuidado: sem calão («cena», «bué», «top») nem marcas de oralidade.', tema: 'T2 · Texto de opinião' },
    { t: '3', tipo: 'vf', dif: 'facil', enun: 'Antes de escrever um texto, deve fazer-se um plano com as ideias principais.', resposta: 'V', expl: 'Planificar organiza as ideias e evita repetições e fugas ao tema; no fim, relê-se para rever.', tema: 'T3 · Texto descritivo' }
  ],
  // ── Domínio 5 · Recursos Expressivos ──
  5: [
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «veloz como um relâmpago», a figura de estilo é:', opcoes: ['comparação', 'metáfora', 'personificação', 'onomatopeia'], resposta: 'comparação', expl: 'A palavra «como» liga os dois elementos: comparação.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'facil', enun: 'Em «o vento uivava lá fora», a figura de estilo é:', opcoes: ['personificação', 'comparação', 'enumeração', 'hipérbole'], resposta: 'personificação', expl: 'Uivar é próprio de animais: atribuído ao vento, é personificação.', tema: 'T1 · Figuras' },
    { t: '1', tipo: 'mc', dif: 'medio', enun: 'Em «já te chamei mil vezes!», a figura de estilo é:', opcoes: ['hipérbole', 'comparação', 'metáfora', 'anáfora'], resposta: 'hipérbole', expl: 'Exagero intencional («mil vezes») para dar ênfase: hipérbole.', tema: 'T1 · Figuras' },
    { t: '2', tipo: 'mc', dif: 'facil', enun: 'Palavras como «trrrim!», «miau» e «bzzz» são exemplos de:', opcoes: ['onomatopeias', 'metáforas', 'comparações', 'rimas'], resposta: 'onomatopeias', expl: 'Imitam sons reais: onomatopeias.', tema: 'T2 · Recursos' },
    { t: '2', tipo: 'mc', dif: 'medio', enun: 'A repetição de «Era a manhã… / Era a luz…» no início de versos seguidos é:', opcoes: ['anáfora', 'onomatopeia', 'hipérbole', 'enumeração'], resposta: 'anáfora', expl: 'Repetição no INÍCIO de versos/frases: anáfora.', tema: 'T2 · Recursos' },
    { t: '3', tipo: 'mc', dif: 'facil', enun: 'Uma estrofe de quatro versos chama-se:', opcoes: ['quadra', 'terceto', 'dístico', 'quintilha'], resposta: 'quadra', expl: '2 = dístico; 3 = terceto; 4 = quadra; 5 = quintilha; 6 = sextilha.', tema: 'T3 · Versificação' },
    { t: '3', tipo: 'mc', dif: 'medio', enun: 'Num poema com esquema rimático AABB, a rima é:', opcoes: ['emparelhada', 'cruzada', 'interpolada', 'solta'], resposta: 'emparelhada', expl: 'AABB = versos rimam dois a dois: rima emparelhada.', tema: 'T3 · Versificação' },
    { t: '3', tipo: 'mc', dif: 'dificil', enun: 'Na contagem das sílabas métricas de um verso:', opcoes: ['conta-se até à última sílaba tónica', 'contam-se todas as sílabas', 'contam-se só as vogais', 'conta-se até à primeira vírgula'], resposta: 'conta-se até à última sílaba tónica', expl: 'A escansão para na última sílaba acentuada: as átonas finais não contam.', tema: 'T3 · Versificação' }
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
_port7Banco[2] = _port7Banco[2].concat([
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
_port7Banco[2] = _port7Banco[2].concat([
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
_port7Banco[1] = _port7Banco[1].concat([
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
_port7Banco[1] = _port7Banco[1].concat([
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
_port7Banco[3] = _port7Banco[3].concat([
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


/* atribuir: deep-link port7 */
function _port7DeepLinkAuto(){ try{ var p=new URLSearchParams(window.location.search); if(p.get('abrir')==='fichas'){ var cs=(p.get('caps')||'').split(',').filter(Boolean); if(_port7gf){ _port7gf.caps={}; cs.forEach(function(n){ _port7gf.caps[parseInt(n,10)]=true; }); if(p.get('dif')) _port7gf.dif=p.get('dif'); } setTimeout(function(){ port7SwitchTab('fichas',null); },350); return; }
    if(p.get('abrir')==='jogos'){ setTimeout(function(){ port7SwitchTab('jogos',null); },350); return; }
    if(p.get('abrir')!=='praticar')return; var cap=parseInt(p.get('cap'),10)||1, st=parseInt(p.get('st'),10)||0, nivel=p.get('nivel')||'medio'; _port7Prat.cap=cap; _port7Prat.st=st; _port7Prat.nivel=nivel; setTimeout(function(){ port7SwitchTab('exercicios',null); if(typeof port7GerarExercicios==='function') port7GerarExercicios(); },350); }catch(e){} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){setTimeout(_port7DeepLinkAuto,300);});else setTimeout(_port7DeepLinkAuto,300);
