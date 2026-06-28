/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-port9.js — Explicadores lúdicos de Português 9.º ano
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Português · 9.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/port9\//.test(window.location.pathname)) ? '' : 'port9/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · EDUCAÇÃO LITERÁRIA — texto dramático (Gil Vicente / Auto) ── */
  APRENDER.registar('port9-literaria', {
    curso: CURSO, titulo: 'O texto de teatro', subtitulo: 'Educação Literária',
    icone: 'ph-mask-happy', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Uma história para ver no palco', html: '<p>O <b>texto dramático</b> (teatro) é escrito para ser <b>representado</b>. Em vez de um narrador, são as <b>personagens a falar</b> diretamente — como num episódio de uma série.</p>' },
      { tipo: 'texto', titulo: 'Falas e didascálias', html: '<p>Tem duas partes: as <b>falas</b> (o que as personagens dizem) e as <b>didascálias</b> (as indicações em itálico: cenário, gestos, tom de voz). As didascálias são instruções para os atores.</p>' },
      { tipo: 'texto', titulo: 'A sátira de Gil Vicente', html: '<p>Gil Vicente, autor clássico, usava o teatro para <b>criticar a sociedade a rir</b> — a isso chama-se <b>sátira</b>. Criticava os defeitos das pessoas (a ganância, a vaidade) de forma cómica.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · No teatro, quem «conta» a história são…', opcoes: ['as personagens (nas falas)', 'um narrador', 'o autor', 'o público'], correta: 0, feedback: 'No teatro são as <b>personagens</b> a falar (não há narrador). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · As indicações de cenário e gestos chamam-se…', opcoes: ['didascálias', 'falas', 'versos', 'rimas'], correta: 0, feedback: 'As instruções para os atores = <b>didascálias</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Criticar a sociedade a rir é fazer…', opcoes: ['sátira', 'biografia', 'notícia', 'receita'], correta: 0, feedback: 'Crítica cómica dos defeitos = <b>sátira</b>. 👍' }
    ],
    fecho: 'Teatro = personagens a falar (falas) + indicações (didascálias). Gil Vicente fazia sátira.'
  });

  /* ── CAP 2 · GRAMÁTICA — orações (frase complexa) ── */
  APRENDER.registar('port9-gramatica', {
    curso: CURSO, titulo: 'Orações: juntar frases', subtitulo: 'Gramática',
    icone: 'ph-text-aa', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Frases dentro de frases', html: '<p>«Eu estudei» é uma frase simples. «Eu estudei <b>porque tinha teste</b>» tem <b>duas partes</b> ligadas — cada parte com o seu verbo é uma <b>oração</b>.</p>' },
      { tipo: 'texto', titulo: 'Coordenadas vs subordinadas', html: '<p><b>Coordenadas</b>: as orações são «iguais», ligadas por «e», «mas», «ou» («Comi e bebi»). <b>Subordinadas</b>: uma <b>depende</b> da outra, ligada por «porque», «que», «quando» («Saí <b>quando chegaste</b>»).</p>' },
      { tipo: 'texto', titulo: 'Como saber qual é', html: '<p>Truque: se podes separar as duas partes em frases independentes, são <b>coordenadas</b>. Se uma não faz sentido sozinha («quando chegaste»), é <b>subordinada</b> (depende da outra).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Cada parte de uma frase com o seu verbo é uma…', opcoes: ['oração', 'sílaba', 'rima', 'estrofe'], correta: 0, feedback: 'Parte com verbo próprio = <b>oração</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · «Comi e bebi» — as orações estão…', opcoes: ['coordenadas (e)', 'subordinadas', 'soltas', 'em verso'], correta: 0, feedback: 'Ligadas por «e», são iguais → <b>coordenadas</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «Fiquei feliz porque ganhei» — «porque ganhei» é…', opcoes: ['subordinada', 'coordenada', 'sujeito', 'predicado'], correta: 0, feedback: 'Depende da 1.ª e liga-se por «porque» → <b>subordinada</b>. 👍' }
    ],
    fecho: 'Oração = parte com verbo. Coordenadas (e/mas/ou) são iguais; subordinadas dependem uma da outra.'
  });

  /* ── CAP 3 · LEITURA — texto argumentativo ── */
  APRENDER.registar('port9-leitura', {
    curso: CURSO, titulo: 'Convencer com argumentos', subtitulo: 'Leitura',
    icone: 'ph-magnifying-glass', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'Defender uma posição', html: '<p>Quando queres convencer os pais a deixar-te ir a uma festa, dás <b>razões</b>: «já fiz os trabalhos», «volto cedo». Isso é <b>argumentar</b> — defender uma posição com razões.</p>' },
      { tipo: 'texto', titulo: 'Tese e argumentos', html: '<p>Num texto argumentativo há a <b>tese</b> (a ideia que defendes) e os <b>argumentos</b> (as razões). Bons argumentos têm <b>provas</b>: exemplos, dados, factos. Quanto melhores, mais convences.</p>' },
      { tipo: 'texto', titulo: 'Cuidado com falsos argumentos', html: '<p>Nem tudo o que parece argumento é bom. «Toda a gente faz isso» não prova nada! Aprende a distinguir <b>argumentos fortes</b> (com provas) de <b>fracos</b> (opiniões disfarçadas).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A ideia que defendes num texto argumentativo é a…', opcoes: ['tese', 'rima', 'didascália', 'oração'], correta: 0, feedback: 'A ideia central a defender = <b>tese</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O que torna um argumento forte são…', opcoes: ['provas (exemplos, dados)', 'mais palavras', 'letra bonita', 'rimas'], correta: 0, feedback: 'Argumentos fortes têm <b>provas</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «Toda a gente faz isso» é um argumento…', opcoes: ['fraco', 'forte', 'verdadeiro sempre', 'científico'], correta: 0, feedback: 'Não prova nada → argumento <b>fraco</b>. 👍' }
    ],
    fecho: 'Argumentar = defender uma tese com argumentos. Os fortes têm provas; desconfia dos fracos.'
  });

  /* ── CAP 4 · ESCRITA — texto de opinião estruturado ── */
  APRENDER.registar('port9-escrita', {
    curso: CURSO, titulo: 'Escrever para convencer', subtitulo: 'Escrita',
    icone: 'ph-pencil-line', cor: '#7a5a8a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'A estrutura de um bom texto de opinião', html: '<p>Para convencer por escrito, organiza assim: <b>1)</b> introdução com a tua <b>tese</b>; <b>2)</b> 2-3 <b>argumentos</b> (um por parágrafo, com exemplos); <b>3)</b> conclusão que reforça a tese.</p>' },
      { tipo: 'texto', titulo: 'Um argumento por parágrafo', html: '<p>Não amontoes tudo num bloco. Cada <b>argumento</b> merece o seu <b>parágrafo</b>, começado com um conetor («Em primeiro lugar…», «Além disso…», «Por fim…»). Assim é fácil de seguir.</p>' },
      { tipo: 'texto', titulo: 'Conclusão que fecha', html: '<p>A conclusão não traz ideias novas: <b>resume</b> e <b>reforça</b> a tua posição. Usa «em conclusão», «por tudo isto», «portanto». Deixa o leitor convencido.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Onde apresentas a tua tese?', opcoes: ['na introdução', 'na conclusão', 'no meio', 'em lado nenhum'], correta: 0, feedback: 'A tese vai logo na <b>introdução</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Cada argumento deve ficar…', opcoes: ['no seu parágrafo', 'tudo junto', 'numa lista', 'no título'], correta: 0, feedback: 'Um argumento por <b>parágrafo</b> (com conetor). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A conclusão deve…', opcoes: ['reforçar a tese', 'trazer ideias novas', 'fazer perguntas', 'ficar vazia'], correta: 0, feedback: 'A conclusão <b>resume e reforça</b> (não traz ideias novas). 👍' }
    ],
    fecho: 'Texto de opinião: introdução (tese) → argumentos (um por parágrafo) → conclusão (reforça).'
  });

  /* ── CAP 5 · RECURSOS — alegoria, apóstrofe, aliteração ── */
  APRENDER.registar('port9-recursos', {
    curso: CURSO, titulo: 'Recursos mais avançados', subtitulo: 'Recursos expressivos',
    icone: 'ph-sparkle', cor: '#4a9e72', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Chamar alguém (ou algo)', html: '<p>Quando, num poema, o poeta <b>se dirige diretamente</b> a alguém ou a algo — «Ó <b>mar</b> salgado!» — está a usar a <b>apóstrofe</b>. É como um chamamento.</p>' },
      { tipo: 'texto', titulo: 'Repetir sons: aliteração', html: '<p>A <b>aliteração</b> é repetir o mesmo <b>som</b> em palavras próximas, para criar musicalidade: «o <b>r</b>ato <b>r</b>oeu a <b>r</b>olha». Sentes o efeito sonoro?</p>' },
      { tipo: 'texto', titulo: 'Uma história com duplo sentido', html: '<p>A <b>alegoria</b> é uma história ou imagem que representa <b>outra coisa</b> por trás. Uma fábula de animais que afinal fala dos defeitos humanos é uma alegoria.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «Ó mar salgado!» (dirigir-se a algo) é uma…', opcoes: ['apóstrofe', 'aliteração', 'alegoria', 'rima'], correta: 0, feedback: 'Chamamento direto → <b>apóstrofe</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Repetir o mesmo som («o sino soa suave») é…', opcoes: ['aliteração', 'apóstrofe', 'metáfora', 'tese'], correta: 0, feedback: 'Repetição de som → <b>aliteração</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Uma história que representa outra coisa por trás é uma…', opcoes: ['alegoria', 'aliteração', 'comparação', 'didascália'], correta: 0, feedback: 'Duplo sentido (representa outra coisa) → <b>alegoria</b>. 👍' }
    ],
    fecho: 'Apóstrofe = chamar alguém/algo; aliteração = repetir sons; alegoria = história com duplo sentido.'
  });

})();
