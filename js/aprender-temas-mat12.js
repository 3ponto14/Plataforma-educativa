/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat12.js — Explicadores lúdicos do 12.º ano (Matemática A)
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 12.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat12\//.test(window.location.pathname)) ? '' : 'mat12/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · CÁLCULO COMBINATÓRIO — contar sem contar um a um ── */
  function combInterativa(host) {
    var tshirts = 3, calcas = 2;
    function pinta() {
      var total = tshirts * calcas;
      var emojis = ['👕', '👚', '🥼', '🧥'], cal = ['👖', '🩳', '👗'];
      var s = '<div style="display:flex;flex-wrap:wrap;gap:.3rem;justify-content:center;max-width:280px;margin:0 auto">';
      for (var i = 0; i < tshirts; i++) for (var j = 0; j < calcas; j++) s += '<span style="font-size:1.3rem">' + emojis[i % 4] + cal[j % 3] + '</span>';
      s += '</div>';
      host.querySelector('#apr-comb').innerHTML = s;
      host.querySelector('#apr-comb-info').innerHTML = '<b>' + tshirts + '</b> tops × <b>' + calcas + '</b> calças = <b style="font-size:1.2em">' + total + '</b> conjuntos diferentes.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Muda quantas peças tens e vê quantos conjuntos consegues fazer. 👕</p>'
      + '<div id="apr-comb"></div>'
      + '<div class="apr-slider-row"><span>tops = <b id="apr-comb-t">3</b></span><input type="range" min="1" max="4" value="3" class="apr-slider" id="apr-comb-st"></div>'
      + '<div class="apr-slider-row"><span>calças = <b id="apr-comb-c">2</b></span><input type="range" min="1" max="3" value="2" class="apr-slider" id="apr-comb-sc"></div>'
      + '<p class="apr-prose" id="apr-comb-info" style="text-align:center"></p>';
    host.querySelector('#apr-comb-st').addEventListener('input', function () { tshirts = +this.value; host.querySelector('#apr-comb-t').textContent = tshirts; pinta(); });
    host.querySelector('#apr-comb-sc').addEventListener('input', function () { calcas = +this.value; host.querySelector('#apr-comb-c').textContent = calcas; pinta(); });
    pinta();
  }
  APRENDER.registar('mat12-combinatoria', {
    curso: CURSO, titulo: 'Contar hipóteses', subtitulo: 'Cálculo combinatório',
    icone: 'ph-shuffle', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Quantos look podes vestir?', html: '<p>Tens 3 t-shirts e 2 calças. Em vez de desenhar tudo, há um atalho: para <b>cada</b> t-shirt podes usar <b>cada</b> calça → 3 × 2 = <b>6 looks</b>. É o <b>princípio da multiplicação</b>.</p>' },
      { tipo: 'interativo', titulo: 'Combina as roupas 👕', render: combInterativa },
      { tipo: 'texto', titulo: 'A ordem importa?', html: '<p><b>Pódio</b> (1.º, 2.º, 3.º) → a ordem importa → <b>arranjos</b>. <b>Equipa</b> de 3 amigos → a ordem não importa → <b>combinações</b>. A pergunta-chave é sempre: «trocar a ordem dá um resultado diferente?».</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · 4 entradas × 3 sobremesas = … menus', opcoes: ['12', '7', '4', '3'], correta: 0, feedback: '4 × 3 = <b>12</b> menus diferentes. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Escolher 3 amigos para uma equipa (ordem não conta) é…', opcoes: ['combinação', 'arranjo', 'fatorial', 'potência'], correta: 0, feedback: 'Ordem não conta → <b>combinação</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · No pódio (1.º, 2.º, 3.º) a ordem…', opcoes: ['importa (arranjo)', 'não importa', 'é igual', 'desaparece'], correta: 0, feedback: 'No pódio a ordem <b>importa</b> → arranjo. 👍' }
    ],
    fecho: 'Multiplica as escolhas. Ordem importa → arranjos; não importa → combinações.'
  });

  /* ── CAP 2 · PROBABILIDADES — condicional ── */
  APRENDER.registar('mat12-probabilidades', {
    curso: CURSO, titulo: 'Probabilidade condicional', subtitulo: 'Probabilidades',
    icone: 'ph-chart-pie-slice', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Quando uma pista muda tudo', html: '<p>Qual é a hipótese de chover? Talvez 20%. Mas <b>se já vês nuvens escuras</b>, a hipótese sobe muito! Uma <b>informação nova</b> mudou a probabilidade.</p><p>Isto é a <b>probabilidade condicional</b>: P(A sabendo que B aconteceu).</p>' },
      { tipo: 'texto', titulo: 'Escreve-se P(A|B)', html: '<p>A barra <b>|</b> lê-se «sabendo que». <b>P(chuva | nuvens)</b> = «probabilidade de chuva, sabendo que há nuvens». A pista B reduz os casos possíveis.</p>' },
      { tipo: 'texto', titulo: 'Acontecimentos independentes', html: '<p>Às vezes a pista <b>não muda nada</b>: saber que saiu cara numa moeda não muda a hipótese do próximo lançamento. Aí são <b>independentes</b> e P(A|B) = P(A).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A barra em P(A|B) lê-se…', opcoes: ['sabendo que', 'mais', 'vezes', 'menos'], correta: 0, feedback: 'P(A|B) = probabilidade de A <b>sabendo que</b> B. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Saber que há nuvens faz a hipótese de chuva…', opcoes: ['mudar (sobe)', 'ficar igual', 'ser zero', 'ser certa'], correta: 0, feedback: 'A pista <b>muda</b> a probabilidade (sobe). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Dois acontecimentos são independentes quando um…', opcoes: ['não afeta o outro', 'causa o outro', 'impede o outro', 'é igual ao outro'], correta: 0, feedback: 'Independentes = um <b>não afeta</b> o outro. 👍' }
    ],
    fecho: 'P(A|B) = «A sabendo que B». A pista reduz os casos. Independentes = uma não afeta a outra.'
  });

  /* ── CAP 3 · FUNÇÕES FRVR — limites e assíntotas ── */
  APRENDER.registar('mat12-funcoes', {
    curso: CURSO, titulo: 'Funções e assíntotas', subtitulo: 'Funções reais (FRVR)',
    icone: 'ph-function', cor: '#4d8f87', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'A parede invisível', html: '<p>Imagina um carro a aproximar-se de uma parede, cada vez mais devagar, sem nunca lhe tocar. Em matemática, essa «parede» que o gráfico nunca cruza chama-se <b>assíntota</b>.</p>' },
      { tipo: 'texto', titulo: 'Limites dizem o destino', html: '<p>Os <b>limites</b> dizem para onde a função <b>tende</b>: quando o x cresce muito (vai para +∞) ou se aproxima de um valor proibido. É como prever o destino sem lá chegar.</p>' },
      { tipo: 'texto', titulo: 'Continuidade', html: '<p>Uma função é <b>contínua</b> se a desenhas <b>sem levantar o lápis</b>. Se tem um «salto» ou um «buraco», é descontínua nesse ponto.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A linha que o gráfico se aproxima mas nunca toca é…', opcoes: ['assíntota', 'tangente', 'diagonal', 'origem'], correta: 0, feedback: 'A «parede invisível» = <b>assíntota</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Uma função contínua desenha-se…', opcoes: ['sem levantar o lápis', 'só com régua', 'aos saltos', 'com pontos'], correta: 0, feedback: 'Contínua = <b>sem levantar o lápis</b> (sem saltos). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · O limite diz para onde a função…', opcoes: ['tende', 'salta', 'pára', 'volta'], correta: 0, feedback: 'Limite = para onde <b>tende</b>. 👍' }
    ],
    fecho: 'Assíntota = parede que nunca se toca. Limite = destino. Contínua = sem levantar o lápis.'
  });

  /* ── CAP 4 · TRIGONOMETRIA — periódica ── */
  function ondaInterativa(host) {
    var amp = 1;
    function pinta() {
      var W = 240, H = 100, cy = 50, s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:260px">';
      s += '<line x1="0" y1="' + cy + '" x2="' + W + '" y2="' + cy + '" stroke="#ddd"/>';
      var pts = '';
      for (var x = 0; x <= W; x += 4) { var y = cy - amp * 30 * Math.sin(x / W * 4 * Math.PI); pts += x + ',' + y.toFixed(1) + ' '; }
      s += '<polyline points="' + pts + '" fill="none" stroke="#5a7fa8" stroke-width="2.5"/></svg>';
      host.querySelector('#apr-onda').innerHTML = s;
      host.querySelector('#apr-onda-info').innerHTML = 'Amplitude <b>' + amp + '</b>: a onda sobe e desce ' + amp + ' unidade(s). Maior amplitude = onda mais «alta».';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A onda do som, das marés, da roda gigante… repete-se sempre. Muda a amplitude. 🌊</p>'
      + '<div id="apr-onda" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>amplitude = <b id="apr-onda-v">1</b></span><input type="range" min="1" max="3" value="1" class="apr-slider" id="apr-onda-s"></div>'
      + '<p class="apr-prose" id="apr-onda-info" style="text-align:center"></p>';
    host.querySelector('#apr-onda-s').addEventListener('input', function () { amp = +this.value; host.querySelector('#apr-onda-v').textContent = amp; pinta(); });
    pinta();
  }
  APRENDER.registar('mat12-trigonometria', {
    curso: CURSO, titulo: 'Funções periódicas', subtitulo: 'Trigonometria',
    icone: 'ph-wave-sine', cor: '#4a8e9e', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'Tudo o que se repete', html: '<p>As marés sobem e descem. O som vibra. As estações repetem-se. Tudo o que <b>se repete em ciclos</b> descreve-se com <b>seno e cosseno</b> — funções periódicas.</p>' },
      { tipo: 'interativo', titulo: 'A onda 🌊', render: ondaInterativa },
      { tipo: 'texto', titulo: 'Amplitude e período', html: '<p>A <b>amplitude</b> é o quão «alta» é a onda (do meio ao topo). O <b>período</b> é o tempo até se repetir o padrão. Estes dois números descrevem qualquer onda.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Uma função que se repete em ciclos é…', opcoes: ['periódica', 'linear', 'constante', 'única'], correta: 0, feedback: 'Repete-se em ciclos → <b>periódica</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A «altura» da onda chama-se…', opcoes: ['amplitude', 'período', 'fase', 'frequência'], correta: 0, feedback: 'A altura = <b>amplitude</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · O tempo até a onda se repetir é o…', opcoes: ['período', 'amplitude', 'declive', 'limite'], correta: 0, feedback: 'O tempo de um ciclo = <b>período</b>. 👍' }
    ],
    fecho: 'Tudo o que se repete = periódico (seno/cosseno). Amplitude = altura; período = tempo do ciclo.'
  });

  /* ── CAP 5 · EXPONENCIAIS E LOGARITMOS — crescimento explosivo ── */
  function expInterativa(host) {
    var dias = 3;
    function pinta() {
      var val = Math.pow(2, dias);
      var s = '<div style="display:flex;flex-wrap:wrap;gap:.2rem;justify-content:center;max-width:280px;margin:0 auto">';
      var mostra = Math.min(val, 64);
      for (var i = 0; i < mostra; i++) s += '<span style="font-size:1rem">🦠</span>';
      if (val > 64) s += '<span style="align-self:center">… +' + (val - 64) + '</span>';
      s += '</div>';
      host.querySelector('#apr-exp').innerHTML = s;
      host.querySelector('#apr-exp-info').innerHTML = 'Dia ' + dias + ': <b style="font-size:1.2em">' + val + '</b> bactérias. Cada dia <b>duplica</b> — cresce a disparar!';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Uma bactéria duplica todos os dias. Vê o crescimento explodir. 🦠</p>'
      + '<div id="apr-exp"></div>'
      + '<div class="apr-slider-row"><span>dia = <b id="apr-exp-v">3</b></span><input type="range" min="0" max="10" value="3" class="apr-slider" id="apr-exp-s"></div>'
      + '<p class="apr-prose" id="apr-exp-info" style="text-align:center"></p>';
    host.querySelector('#apr-exp-s').addEventListener('input', function () { dias = +this.value; host.querySelector('#apr-exp-v').textContent = dias; pinta(); });
    pinta();
  }
  APRENDER.registar('mat12-exponenciais', {
    curso: CURSO, titulo: 'Exponenciais e logaritmos', subtitulo: 'Crescimento explosivo',
    icone: 'ph-trend-up', cor: '#7a5a8a', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'A bactéria que duplica', html: '<p>Uma bactéria divide-se em duas todos os dias. Dia 1: 2, dia 2: 4, dia 3: 8, dia 10: <b>1024</b>! Isto é <b>crescimento exponencial</b> — começa devagar e depois <b>dispara</b>.</p>' },
      { tipo: 'interativo', titulo: 'Vê as bactérias 🦠', render: expInterativa },
      { tipo: 'texto', titulo: 'O logaritmo desfaz', html: '<p>O <b>logaritmo</b> faz a pergunta ao contrário: «<b>quantos dias</b> até haver 1024 bactérias?». Resposta: 10. O logaritmo <b>desfaz</b> a exponencial, como a raiz desfaz o quadrado.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Crescimento exponencial…', opcoes: ['dispara cada vez mais rápido', 'cresce sempre igual', 'desce', 'pára'], correta: 0, feedback: 'Exponencial = <b>dispara</b> cada vez mais rápido. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Algo que duplica: 2, 4, 8, 16… o próximo é…', opcoes: ['32', '24', '20', '18'], correta: 0, feedback: '16 × 2 = <b>32</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · O logaritmo é a operação que…', opcoes: ['desfaz a exponencial', 'soma', 'duplica', 'divide por 2'], correta: 0, feedback: 'Logaritmo <b>desfaz</b> a exponencial (pergunta «quantas vezes?»). 👍' }
    ],
    fecho: 'Exponencial = duplica e dispara. Logaritmo = desfaz a exponencial («quantas vezes?»).'
  });

  /* ── CAP 6 · PRIMITIVAS E INTEGRAL — a área debaixo da curva ── */
  function integralInterativa(host) {
    var n = 4;
    function pinta() {
      var W = 220, H = 120, cy = 105, s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:240px">';
      var bw = (W - 20) / n;
      for (var i = 0; i < n; i++) { var x = 10 + i * bw, alt = 10 + (i + 0.5) * bw * 0.35; s += '<rect x="' + x + '" y="' + (cy - alt) + '" width="' + (bw - 2) + '" height="' + alt + '" fill="#5e9676" opacity="0.6" stroke="#3e7458"/>'; }
      s += '<line x1="10" y1="' + cy + '" x2="' + (W - 10) + '" y2="' + cy + '" stroke="#999"/></svg>';
      host.querySelector('#apr-int').innerHTML = s;
      host.querySelector('#apr-int-info').innerHTML = 'Com <b>' + n + '</b> barras a área é aproximada. Quanto <b>mais barras</b> (mais finas), mais exata fica.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Para medir a área debaixo de uma curva, enche-a com barras. Mais barras = mais exato. 📐</p>'
      + '<div id="apr-int" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>barras = <b id="apr-int-v">4</b></span><input type="range" min="2" max="20" value="4" class="apr-slider" id="apr-int-s"></div>'
      + '<p class="apr-prose" id="apr-int-info" style="text-align:center"></p>';
    host.querySelector('#apr-int-s').addEventListener('input', function () { n = +this.value; host.querySelector('#apr-int-v').textContent = n; pinta(); });
    pinta();
  }
  APRENDER.registar('mat12-integral', {
    curso: CURSO, titulo: 'Integral: área debaixo da curva', subtitulo: 'Primitivas e integral',
    icone: 'ph-chart-line-up', cor: '#4a9e72', praticar: pratLink(6),
    blocos: [
      { tipo: 'texto', titulo: 'Medir uma forma torta', html: '<p>É fácil medir a área de um retângulo. Mas e a área debaixo de uma <b>curva</b>? O truque: enchê-la com <b>muitas barras finas</b> e somar tudo. Quanto mais finas, mais exato. Isso é o <b>integral</b>.</p>' },
      { tipo: 'interativo', titulo: 'Enche com barras 📐', render: integralInterativa },
      { tipo: 'texto', titulo: 'Primitiva = derivada ao contrário', html: '<p>A <b>primitiva</b> faz o caminho inverso da derivada. Se a derivada é a velocidade, a primitiva é a <b>distância percorrida</b>. Por isso o integral também serve para «desfazer» derivadas.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O integral mede…', opcoes: ['a área debaixo da curva', 'a inclinação', 'o limite', 'o ângulo'], correta: 0, feedback: 'Integral = <b>área</b> debaixo da curva. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Quanto mais barras finas usares, a área fica…', opcoes: ['mais exata', 'mais errada', 'igual', 'maior'], correta: 0, feedback: 'Mais barras finas → <b>mais exata</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A primitiva é a derivada…', opcoes: ['ao contrário', 'a dobrar', 'ao quadrado', 'igual'], correta: 0, feedback: 'Primitiva = derivada <b>ao contrário</b> (inversa). 👍' }
    ],
    fecho: 'Integral = área debaixo da curva (somar barras finas). Primitiva = derivada ao contrário.'
  });

  /* ── CAP 7 · NÚMEROS COMPLEXOS — a raiz «impossível» ── */
  APRENDER.registar('mat12-complexos', {
    curso: CURSO, titulo: 'Números complexos', subtitulo: 'A raiz «impossível»',
    icone: 'ph-compass', cor: '#8a7058', praticar: pratLink(7),
    blocos: [
      { tipo: 'texto', titulo: 'E a raiz de um negativo?', html: '<p>Não há nenhum número real que, ao quadrado, dê −1. Os matemáticos inventaram um novo: o <b>i</b>, em que <b>i² = −1</b>. Parece batota, mas resolve montes de problemas!</p>' },
      { tipo: 'texto', titulo: 'Parte real + parte imaginária', html: '<p>Um número complexo tem duas partes: <b>3 + 2i</b>. O 3 é a parte <b>real</b>, o 2i é a parte <b>imaginária</b>. É como um endereço com duas coordenadas.</p>' },
      { tipo: 'texto', titulo: 'Um ponto no plano', html: '<p>Por isso desenham-se num <b>plano</b>: o 3 na horizontal, o 2 na vertical. Um número complexo é mesmo um <b>ponto</b> (ou uma seta a partir da origem).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Quanto vale i²?', opcoes: ['−1', '1', '0', '2'], correta: 0, feedback: 'Por definição, <b>i² = −1</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Em 5 + 3i, a parte real é…', opcoes: ['5', '3', '8', 'i'], correta: 0, feedback: 'A parte real é o <b>5</b> (o 3i é a imaginária). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Um número complexo representa-se como…', opcoes: ['um ponto no plano', 'só na reta', 'um ângulo só', 'uma fração'], correta: 0, feedback: 'Tem duas partes → é um <b>ponto no plano</b>. 👍' }
    ],
    fecho: 'i² = −1. Complexo = parte real + imaginária = um ponto no plano.'
  });

})();
