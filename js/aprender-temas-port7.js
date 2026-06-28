/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-port7.js — Explicadores lúdicos de Português 7.º ano
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Português · 7.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/port7\//.test(window.location.pathname)) ? '' : 'port7/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · EDUCAÇÃO LITERÁRIA — tipos de texto ── */
  APRENDER.registar('port7-literaria', {
    curso: CURSO, titulo: 'Narrativa, poesia e teatro', subtitulo: 'Educação Literária',
    icone: 'ph-book-open', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Três maneiras de contar', html: '<p>Há várias formas de contar uma história. Pensa nos teus filmes e livros favoritos: uns <b>contam uma aventura</b> (narrativa), outros são <b>versos com ritmo</b> (poesia), outros são <b>para representar no palco</b> (teatro).</p>' },
      { tipo: 'texto', titulo: 'O que distingue cada um', html: '<p><b>Narrativa</b>: há um narrador que conta o que acontece a personagens (conto, romance). <b>Poesia</b>: organizada em versos e estrofes, com musicalidade. <b>Teatro</b>: é só falas (diálogo) e indicações para os atores.</p>' },
      { tipo: 'texto', titulo: 'A narrativa tem ingredientes', html: '<p>Numa história há sempre: <b>personagens</b> (quem), <b>espaço</b> (onde), <b>tempo</b> (quando), <b>ação</b> (o que acontece) e um <b>narrador</b> (quem conta).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Um texto escrito em versos e estrofes é…', opcoes: ['poesia', 'narrativa', 'teatro', 'notícia'], correta: 0, feedback: 'Versos e estrofes → <b>poesia</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um texto só com falas, para representar, é…', opcoes: ['teatro', 'poesia', 'conto', 'carta'], correta: 0, feedback: 'Só falas + indicações para atores → <b>teatro</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quem conta a história numa narrativa é o…', opcoes: ['narrador', 'autor', 'leitor', 'ator'], correta: 0, feedback: 'Quem conta = <b>narrador</b>. 👍' }
    ],
    fecho: 'Narrativa (conta-se), poesia (versos), teatro (falas). A narrativa tem personagens, espaço, tempo, ação e narrador.'
  });

  /* ── CAP 2 · GRAMÁTICA — classes de palavras ── */
  function classeInterativa(host) {
    var frases = [
      { p: 'gato', c: 'Nome', d: 'dá nome a seres e coisas', e: '🐱' },
      { p: 'correr', c: 'Verbo', d: 'indica uma ação', e: '🏃' },
      { p: 'bonito', c: 'Adjetivo', d: 'qualifica o nome', e: '✨' },
      { p: 'rapidamente', c: 'Advérbio', d: 'diz como/quando/onde', e: '⏱️' }
    ];
    var i = 0;
    function pinta() {
      var f = frases[i];
      host.querySelector('#apr-cl').innerHTML =
        '<div style="text-align:center"><div style="font-size:2.2rem">' + f.e + '</div>'
        + '<div style="font-size:1.4rem;font-weight:800">«' + f.p + '»</div>'
        + '<div style="font-size:1.1rem;color:#5e9676;font-weight:700">' + f.c + '</div>'
        + '<div style="color:#666">' + f.d + '</div></div>';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Cada palavra tem um «trabalho» na frase. Vê alguns exemplos. 🔤</p>'
      + '<div id="apr-cl"></div>'
      + '<div class="apr-slider-row"><span>exemplo = <b id="apr-cl-v">1</b>/4</span><input type="range" min="0" max="3" value="0" class="apr-slider" id="apr-cl-s"></div>';
    host.querySelector('#apr-cl-s').addEventListener('input', function () { i = +this.value; host.querySelector('#apr-cl-v').textContent = (i + 1); pinta(); });
    pinta();
  }
  APRENDER.registar('port7-gramatica', {
    curso: CURSO, titulo: 'Classes de palavras', subtitulo: 'Gramática',
    icone: 'ph-text-aa', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Cada palavra tem um trabalho', html: '<p>Numa equipa, cada jogador tem uma função. Nas frases é igual: cada palavra pertence a uma <b>classe</b> conforme o que faz.</p><p>«O <b>gato</b> (nome) <b>preto</b> (adjetivo) <b>corre</b> (verbo) <b>depressa</b> (advérbio).»</p>' },
      { tipo: 'interativo', titulo: 'Vê as classes 🔤', render: classeInterativa },
      { tipo: 'texto', titulo: 'As principais', html: '<p><b>Nome</b>: dá nome (cão, alegria). <b>Verbo</b>: ação ou estado (saltar, ser). <b>Adjetivo</b>: qualifica o nome (alto, feliz). <b>Advérbio</b>: diz como/quando/onde (bem, hoje, aqui). <b>Determinante</b>: vem antes do nome (o, a, este).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «correr» é um…', opcoes: ['verbo', 'nome', 'adjetivo', 'advérbio'], correta: 0, feedback: 'Indica uma ação → <b>verbo</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Em «a casa amarela», «amarela» é…', opcoes: ['adjetivo', 'nome', 'verbo', 'determinante'], correta: 0, feedback: 'Qualifica o nome casa → <b>adjetivo</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «felicidade» é um…', opcoes: ['nome', 'verbo', 'adjetivo', 'advérbio'], correta: 0, feedback: 'Dá nome a algo (um sentimento) → <b>nome</b>. 👍' }
    ],
    fecho: 'Cada palavra tem uma classe: nome, verbo, adjetivo, advérbio, determinante…'
  });

  /* ── CAP 3 · LEITURA — ideia principal ── */
  APRENDER.registar('port7-leitura', {
    curso: CURSO, titulo: 'Compreender o que se lê', subtitulo: 'Leitura',
    icone: 'ph-magnifying-glass', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'Ler não é só decifrar', html: '<p>Ler de verdade é <b>perceber</b> o que o texto diz — não basta passar os olhos. É como ver um filme: tens de perceber a história, não só ver imagens.</p>' },
      { tipo: 'texto', titulo: 'A ideia principal', html: '<p>Cada texto tem uma <b>ideia principal</b> (a mensagem mais importante) e <b>ideias secundárias</b> (detalhes que a apoiam). Pergunta-te sempre: «o que é que este texto me quer mesmo dizer?»</p>' },
      { tipo: 'texto', titulo: 'Explícito vs implícito', html: '<p>Há informação <b>explícita</b> (está lá escrita) e <b>implícita</b> (tens de deduzir). Se o texto diz «pegou no guarda-chuva e saiu», está implícito que <b>estava a chover</b>.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A mensagem mais importante de um texto é a…', opcoes: ['ideia principal', 'última frase', 'primeira palavra', 'o título só'], correta: 0, feedback: 'A mensagem mais importante = <b>ideia principal</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Informação que tens de deduzir (não está escrita) é…', opcoes: ['implícita', 'explícita', 'principal', 'falsa'], correta: 0, feedback: 'Deduzida = <b>implícita</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «Vestiu o casaco e tremia.» Está implícito que…', opcoes: ['estava frio', 'estava calor', 'ia dormir', 'estava feliz'], correta: 0, feedback: 'Tremer + casaco → estava <b>frio</b> (informação implícita). 👍' }
    ],
    fecho: 'Ler = compreender. Procura a ideia principal e o que está implícito (deduzido).'
  });

  /* ── CAP 4 · ESCRITA — planificar ── */
  APRENDER.registar('port7-escrita', {
    curso: CURSO, titulo: 'Escrever bem um texto', subtitulo: 'Escrita',
    icone: 'ph-pencil-line', cor: '#7a5a8a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'Primeiro pensa, depois escreve', html: '<p>Ninguém constrói uma casa sem planta. Um bom texto também se <b>planifica</b> antes: pensar nas ideias, pô-las por ordem, e só depois escrever.</p>' },
      { tipo: 'texto', titulo: 'Início, meio e fim', html: '<p>Um texto bem feito tem <b>introdução</b> (apresenta o tema), <b>desenvolvimento</b> (as ideias com detalhe) e <b>conclusão</b> (fecha a ideia). Cada parte num <b>parágrafo</b>.</p>' },
      { tipo: 'texto', titulo: 'Revê no fim', html: '<p>Depois de escrever, <b>relê</b>: vê se há erros, se as frases fazem sentido e se usaste pontuação. Reescrever é normal — até os escritores o fazem!</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Antes de escrever um texto deves…', opcoes: ['planificar as ideias', 'começar logo', 'copiar', 'desistir'], correta: 0, feedback: 'Primeiro <b>planifica</b> (pensa e organiza). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A parte que apresenta o tema é a…', opcoes: ['introdução', 'conclusão', 'lista', 'assinatura'], correta: 0, feedback: 'Apresenta o tema = <b>introdução</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Depois de escrever, deves…', opcoes: ['reler e corrigir', 'entregar logo', 'apagar tudo', 'nada'], correta: 0, feedback: 'Reler e corrigir (revisão) deixa o texto melhor. 👍' }
    ],
    fecho: 'Planifica → escreve com introdução/desenvolvimento/conclusão → relê e corrige.'
  });

  /* ── CAP 5 · RECURSOS EXPRESSIVOS — comparação e metáfora ── */
  APRENDER.registar('port7-recursos', {
    curso: CURSO, titulo: 'Comparação e metáfora', subtitulo: 'Recursos expressivos',
    icone: 'ph-sparkle', cor: '#4a9e72', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Falar com imagens', html: '<p>Às vezes, para dizer algo de forma mais bonita ou forte, usamos <b>imagens</b>. «Ela é rápida» é simples; «ela é <b>veloz como um relâmpago</b>» é muito mais expressivo!</p>' },
      { tipo: 'texto', titulo: 'Comparação vs metáfora', html: '<p>A <b>comparação</b> liga duas coisas com <b>«como»</b>: «forte <b>como</b> um touro». A <b>metáfora</b> faz a ligação <b>sem o «como»</b>, diz diretamente: «és um <b>touro</b>!».</p>' },
      { tipo: 'texto', titulo: 'A personificação', html: '<p>Há outro recurso giro: a <b>personificação</b>, que dá <b>qualidades humanas a coisas</b>: «o vento <b>sussurrava</b>», «as estrelas <b>dançavam</b>». O vento não fala, mas a imagem é linda!</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «Corre como o vento» é uma…', opcoes: ['comparação', 'metáfora', 'personificação', 'rima'], correta: 0, feedback: 'Usa «como» → <b>comparação</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · «És uma estrela!» (sem «como») é uma…', opcoes: ['metáfora', 'comparação', 'pergunta', 'lista'], correta: 0, feedback: 'Ligação direta, sem «como» → <b>metáfora</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «O sol sorria no céu» é uma…', opcoes: ['personificação', 'comparação', 'metáfora', 'rima'], correta: 0, feedback: 'Dá uma ação humana (sorrir) ao sol → <b>personificação</b>. 👍' }
    ],
    fecho: 'Comparação usa «como»; metáfora é direta; personificação dá vida humana às coisas.'
  });

})();
