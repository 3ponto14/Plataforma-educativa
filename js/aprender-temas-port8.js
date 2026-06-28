/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-port8.js — Explicadores lúdicos de Português 8.º ano
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Português · 8.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/port8\//.test(window.location.pathname)) ? '' : 'port8/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · EDUCAÇÃO LITERÁRIA — narrador ── */
  APRENDER.registar('port8-literaria', {
    curso: CURSO, titulo: 'Quem conta a história?', subtitulo: 'Educação Literária',
    icone: 'ph-book-open', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'A câmara da história', html: '<p>Imagina que a história é um filme. O <b>narrador</b> é a câmara: pode estar <b>dentro</b> de uma personagem (vê com os olhos dela) ou <b>fora</b>, a ver tudo de cima.</p>' },
      { tipo: 'texto', titulo: 'Narrador participante ou não', html: '<p><b>Participante</b> (1.ª pessoa, «eu»): é uma personagem que conta a sua própria história. <b>Não participante</b> (3.ª pessoa, «ele/ela»): está de fora e conta a história dos outros.</p>' },
      { tipo: 'texto', titulo: 'O que sabe o narrador', html: '<p>Um narrador pode ser <b>omnisciente</b> («sabe tudo», até os pensamentos das personagens) ou ter <b>conhecimento limitado</b> (só sabe o que vê). Isto muda a forma como vivemos a história.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Um narrador que diz «eu fui, eu vi» é…', opcoes: ['participante (1.ª pessoa)', 'não participante', 'omnisciente', 'ausente'], correta: 0, feedback: 'Conta a própria história em «eu» → <b>participante</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um narrador que «sabe tudo», até os pensamentos, é…', opcoes: ['omnisciente', 'participante', 'limitado', 'personagem'], correta: 0, feedback: 'Sabe tudo → <b>omnisciente</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «Ele entrou e ela sorriu» — o narrador está na…', opcoes: ['3.ª pessoa', '1.ª pessoa', '2.ª pessoa', 'nenhuma'], correta: 0, feedback: '«Ele/ela» → <b>3.ª pessoa</b> (não participante). 👍' }
    ],
    fecho: 'Narrador = a câmara. Participante (eu) ou não (ele/ela); pode ser omnisciente (sabe tudo).'
  });

  /* ── CAP 2 · GRAMÁTICA — funções sintáticas ── */
  APRENDER.registar('port8-gramatica', {
    curso: CURSO, titulo: 'Sujeito e predicado', subtitulo: 'Gramática',
    icone: 'ph-text-aa', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Quem faz o quê', html: '<p>Toda a frase responde a duas perguntas: <b>quem?</b> e <b>faz o quê?</b>. «<b>O João</b> (quem) <b>comeu o bolo</b> (faz o quê)».</p>' },
      { tipo: 'texto', titulo: 'Sujeito e predicado', html: '<p>O <b>sujeito</b> é de quem se fala (responde a «quem?»). O <b>predicado</b> é o que se diz sobre ele — começa sempre no verbo. Em «O gato dorme», sujeito = <b>O gato</b>, predicado = <b>dorme</b>.</p>' },
      { tipo: 'texto', titulo: 'O complemento direto', html: '<p>Dentro do predicado, o <b>complemento direto</b> responde a «o quê?» sem preposição: «Comi <b>a maçã</b>» → comi <b>o quê?</b> a maçã. É o CD.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Em «A Maria canta», o sujeito é…', opcoes: ['A Maria', 'canta', 'a música', 'nada'], correta: 0, feedback: 'De quem se fala = <b>A Maria</b> (sujeito). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O predicado começa sempre…', opcoes: ['no verbo', 'no nome', 'no fim', 'no adjetivo'], correta: 0, feedback: 'O predicado arranca no <b>verbo</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Em «Bebi um sumo», «um sumo» responde a…', opcoes: ['o quê? (compl. direto)', 'quem?', 'quando?', 'onde?'], correta: 0, feedback: 'Bebi <b>o quê?</b> um sumo → complemento direto. 👍' }
    ],
    fecho: 'Sujeito = quem; predicado = o que se diz (começa no verbo); compl. direto = «o quê?».'
  });

  /* ── CAP 3 · LEITURA — texto de opinião / argumento ── */
  APRENDER.registar('port8-leitura', {
    curso: CURSO, titulo: 'Facto vs opinião', subtitulo: 'Leitura',
    icone: 'ph-magnifying-glass', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'Duas coisas diferentes', html: '<p>«Hoje estão 20 °C» é um <b>facto</b> — pode ser verificado. «Hoje está um dia lindo» é uma <b>opinião</b> — depende de quem fala. Saber distinguir é essencial para não engolir tudo o que lês!</p>' },
      { tipo: 'texto', titulo: 'O texto de opinião', html: '<p>Num texto de opinião, alguém defende um <b>ponto de vista</b> e apresenta <b>argumentos</b> (razões) para te convencer. Bons argumentos têm <b>exemplos</b> e <b>dados</b>.</p>' },
      { tipo: 'texto', titulo: 'Lê com espírito crítico', html: '<p>Pergunta-te sempre: isto é facto ou opinião? Quais são os argumentos? São fortes? Ler com <b>espírito crítico</b> protege-te de ser enganado (ex.: na publicidade ou nas redes sociais).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «A água ferve a 100 °C» é…', opcoes: ['um facto', 'uma opinião', 'um argumento', 'uma metáfora'], correta: 0, feedback: 'Pode verificar-se → <b>facto</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · «Este é o melhor filme de sempre» é…', opcoes: ['uma opinião', 'um facto', 'um dado', 'uma data'], correta: 0, feedback: 'Depende de quem fala → <b>opinião</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · As razões que apoiam uma opinião são…', opcoes: ['argumentos', 'factos só', 'rimas', 'títulos'], correta: 0, feedback: 'Razões para convencer = <b>argumentos</b>. 👍' }
    ],
    fecho: 'Facto = verificável; opinião = ponto de vista. Argumentos defendem opiniões. Lê com espírito crítico.'
  });

  /* ── CAP 4 · ESCRITA — coesão e conetores ── */
  APRENDER.registar('port8-escrita', {
    curso: CURSO, titulo: 'Ligar as ideias', subtitulo: 'Escrita',
    icone: 'ph-pencil-line', cor: '#7a5a8a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'As pontes entre as frases', html: '<p>Um texto não é uma lista de frases soltas. Para fluir, as ideias precisam de <b>pontes</b> que as liguem. Essas pontes são os <b>conetores</b>.</p>' },
      { tipo: 'texto', titulo: 'Conetores para tudo', html: '<p>Para <b>adicionar</b>: «além disso», «e também». Para <b>opor</b>: «mas», «no entanto». Para <b>explicar causa</b>: «porque», «por isso». Para <b>concluir</b>: «em conclusão», «portanto».</p>' },
      { tipo: 'texto', titulo: 'Coesão e coerência', html: '<p>Um bom texto tem <b>coesão</b> (as frases ligam-se bem, com conetores) e <b>coerência</b> (faz sentido do início ao fim, sem contradições). Os conetores ajudam nas duas.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Palavras que ligam ideias chamam-se…', opcoes: ['conetores', 'adjetivos', 'nomes', 'rimas'], correta: 0, feedback: 'As pontes entre ideias = <b>conetores</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Para opor duas ideias usas…', opcoes: ['mas / no entanto', 'e / também', 'portanto', 'porque'], correta: 0, feedback: 'Oposição → <b>«mas», «no entanto»</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «Estudei muito, ___ tive boa nota.»', opcoes: ['por isso', 'mas', 'apesar de', 'embora'], correta: 0, feedback: 'Causa-consequência → <b>«por isso»</b>. 👍' }
    ],
    fecho: 'Conetores são as pontes entre ideias. Dão coesão (ligação) e ajudam a coerência (sentido).'
  });

  /* ── CAP 5 · RECURSOS — hipérbole, eufemismo, ironia ── */
  APRENDER.registar('port8-recursos', {
    curso: CURSO, titulo: 'Exagero, ironia e mais', subtitulo: 'Recursos expressivos',
    icone: 'ph-sparkle', cor: '#4a9e72', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Quando exageras a falar', html: '<p>Já disseste «tenho <b>milhões</b> de trabalhos para fazer»? Não são mesmo milhões — é um <b>exagero</b> de propósito, para dar força. Esse recurso chama-se <b>hipérbole</b>.</p>' },
      { tipo: 'texto', titulo: 'Suavizar: o eufemismo', html: '<p>Às vezes fazemos o contrário: suavizamos algo desagradável. Em vez de «morreu», dizemos «<b>partiu</b>» ou «<b>deixou-nos</b>». A isso chama-se <b>eufemismo</b>.</p>' },
      { tipo: 'texto', titulo: 'Dizer o contrário: ironia', html: '<p>A <b>ironia</b> é dizer o contrário do que se pensa, com intenção. Se está a chover a potes e dizes «<b>que belo dia!</b>», estás a ser irónico.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «Já te disse um milhão de vezes!» é uma…', opcoes: ['hipérbole (exagero)', 'eufemismo', 'comparação', 'rima'], correta: 0, feedback: 'Exagero de propósito → <b>hipérbole</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Dizer «partiu» em vez de «morreu» é um…', opcoes: ['eufemismo', 'hipérbole', 'ironia', 'metáfora'], correta: 0, feedback: 'Suavizar algo duro → <b>eufemismo</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Dizer «que dia lindo!» a chover é…', opcoes: ['ironia', 'comparação', 'eufemismo', 'facto'], correta: 0, feedback: 'Dizer o contrário do que se pensa → <b>ironia</b>. 👍' }
    ],
    fecho: 'Hipérbole = exagero; eufemismo = suavizar; ironia = dizer o contrário do que se pensa.'
  });

})();
