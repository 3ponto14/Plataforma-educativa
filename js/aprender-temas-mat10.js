/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat10.js — Explicadores lúdicos do 10.º ano (Matemática A)
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 10.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat10\//.test(window.location.pathname)) ? '' : 'mat10/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · LÓGICA E CONJUNTOS — E / OU ── */
  APRENDER.registar('mat10-logica', {
    curso: CURSO, titulo: 'Lógica: «e», «ou», «não»', subtitulo: 'Lógica e conjuntos',
    icone: 'ph-intersect', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Já usas isto a falar', html: '<p>«Quero gelado <b>e</b> bolacha» — só ficas feliz se tiveres as <b>duas</b>. «Quero gelado <b>ou</b> bolacha» — basta <b>uma</b>. A lógica matemática usa estas mesmíssimas palavras.</p>' },
      { tipo: 'texto', titulo: 'Verdadeiro ou falso', html: '<p>Uma <b>proposição</b> é uma frase que ou é <b>verdadeira</b> ou <b>falsa</b> (não pode ser as duas). «2+2=4» é verdadeira; «2+2=5» é falsa.</p><p>O <b>«não»</b> troca o valor: «não é dia» = é noite.</p>' },
      { tipo: 'texto', titulo: 'Conjuntos: caixas de coisas', html: '<p>Um <b>conjunto</b> é uma caixa de elementos. A <b>interseção</b> (∩) é o que está nas <b>duas</b> caixas (o «e»); a <b>reunião</b> (∪) é tudo junto (o «ou»).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «Gelado E bolacha» fica verdade se…', opcoes: ['tiveres os dois', 'tiveres só um', 'não tiveres nada', 'sempre'], correta: 0, feedback: 'O «e» exige os <b>dois</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · «Gelado OU bolacha» fica verdade se…', opcoes: ['tiveres pelo menos um', 'tiveres os dois só', 'não tiveres nada', 'nunca'], correta: 0, feedback: 'O «ou» basta <b>um</b> (ou os dois). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A interseção (∩) de duas caixas é…', opcoes: ['o que está nas duas', 'tudo junto', 'o que falta', 'nada'], correta: 0, feedback: 'Interseção = o que está nas <b>duas</b> (o «e»). 👍' }
    ],
    fecho: '«E» = os dois (interseção ∩). «Ou» = pelo menos um (reunião ∪). «Não» troca verdade/falso.'
  });

  /* ── CAP 2 · ÁLGEBRA — radicais ── */
  function radicalInterativa(host) {
    var area = 9;
    function pinta() {
      var lado = Math.sqrt(area), px = 110, esc = px / 5, L = lado * esc;
      var s = '<svg viewBox="0 0 150 150" style="width:100%;max-width:150px">';
      s += '<rect x="20" y="' + (130 - L) + '" width="' + L + '" height="' + L + '" fill="#cfe3f0" stroke="#3f7a9a" stroke-width="2"/>';
      s += '<text x="' + (20 + L / 2) + '" y="' + (130 - L / 2 + 4) + '" font-size="12" font-weight="800" fill="#2a5d7a" text-anchor="middle">área ' + area + '</text>';
      s += '<text x="' + (20 + L / 2) + '" y="143" font-size="10" fill="#3f7a9a" text-anchor="middle">lado = ' + (lado % 1 === 0 ? lado : lado.toFixed(2)) + '</text></svg>';
      host.querySelector('#apr-rad').innerHTML = s;
      host.querySelector('#apr-rad-info').innerHTML = 'Um quadrado de área <b>' + area + '</b> tem lado <b>√' + area + ' = ' + (lado % 1 === 0 ? lado : lado.toFixed(2)) + '</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A raiz quadrada é o lado de um quadrado com essa área. Experimenta. ⬜</p>'
      + '<div id="apr-rad" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>área = <b id="apr-rad-v">9</b></span><input type="range" min="1" max="25" value="9" class="apr-slider" id="apr-rad-s"></div>'
      + '<p class="apr-prose" id="apr-rad-info" style="text-align:center"></p>';
    host.querySelector('#apr-rad-s').addEventListener('input', function () { area = +this.value; host.querySelector('#apr-rad-v').textContent = area; pinta(); });
    pinta();
  }
  APRENDER.registar('mat10-algebra', {
    curso: CURSO, titulo: 'Radicais e potências', subtitulo: 'Álgebra',
    icone: 'ph-square-root', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'A raiz desfaz o quadrado', html: '<p>Se sabes que um quadrado tem <b>área 25</b>, qual é o <b>lado</b>? É 5, porque 5×5 = 25. Procurar esse lado é fazer uma <b>raiz quadrada</b>: √25 = 5.</p>' },
      { tipo: 'interativo', titulo: 'A raiz é o lado ⬜', render: radicalInterativa },
      { tipo: 'texto', titulo: 'Raiz e potência são inversas', html: '<p>A raiz <b>desfaz</b> o quadrado, e o quadrado desfaz a raiz: são <b>operações inversas</b>, como vestir e despir. Por isso (√7)² = 7.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · √36 = …', opcoes: ['6', '18', '9', '12'], correta: 0, feedback: '6 × 6 = 36 → √36 = <b>6</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A raiz quadrada de uma área dá-te…', opcoes: ['o lado', 'o dobro', 'a volta', 'o volume'], correta: 0, feedback: 'A raiz da área = o <b>lado</b> do quadrado. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quanto é (√10)²?', opcoes: ['10', '100', '5', '20'], correta: 0, feedback: 'O quadrado desfaz a raiz → <b>10</b>. 👍' }
    ],
    fecho: 'Raiz quadrada = o lado a partir da área. Raiz e quadrado são inversas.'
  });

  /* ── CAP 3 · GEOMETRIA ANALÍTICA — o mapa de coordenadas ── */
  function pontoInterativa(host) {
    var px = 2, py = 3;
    function pinta() {
      var W = 180, cx = 30, cy = 150, esc = 22;
      var s = '<svg viewBox="0 0 ' + W + ' 180" style="width:100%;max-width:200px">';
      s += '<line x1="' + cx + '" y1="10" x2="' + cx + '" y2="' + cy + '" stroke="#bbb"/><line x1="' + cx + '" y1="' + cy + '" x2="' + (W - 6) + '" y2="' + cy + '" stroke="#bbb"/>';
      var dx = cx + px * esc, dy = cy - py * esc;
      s += '<line x1="' + cx + '" y1="' + dy + '" x2="' + dx + '" y2="' + dy + '" stroke="#ddd" stroke-dasharray="3 2"/><line x1="' + dx + '" y1="' + cy + '" x2="' + dx + '" y2="' + dy + '" stroke="#ddd" stroke-dasharray="3 2"/>';
      s += '<circle cx="' + dx + '" cy="' + dy + '" r="6" fill="#4d8f87"/><text x="' + (dx + 8) + '" y="' + (dy - 4) + '" font-size="11" font-weight="700" fill="#2e6058">(' + px + ', ' + py + ')</text></svg>';
      host.querySelector('#apr-pt').innerHTML = s;
      host.querySelector('#apr-pt-info').innerHTML = 'Andas <b>' + px + '</b> para a direita e <b>' + py + '</b> para cima. Ponto (<b>' + px + ', ' + py + '</b>).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Como num mapa: primeiro andas para o lado (x), depois para cima (y). 🗺️</p>'
      + '<div id="apr-pt" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>x (lado) = <b id="apr-pt-x">2</b></span><input type="range" min="0" max="6" value="2" class="apr-slider" id="apr-pt-sx"></div>'
      + '<div class="apr-slider-row"><span>y (cima) = <b id="apr-pt-y">3</b></span><input type="range" min="0" max="6" value="3" class="apr-slider" id="apr-pt-sy"></div>'
      + '<p class="apr-prose" id="apr-pt-info" style="text-align:center"></p>';
    host.querySelector('#apr-pt-sx').addEventListener('input', function () { px = +this.value; host.querySelector('#apr-pt-x').textContent = px; pinta(); });
    host.querySelector('#apr-pt-sy').addEventListener('input', function () { py = +this.value; host.querySelector('#apr-pt-y').textContent = py; pinta(); });
    pinta();
  }
  APRENDER.registar('mat10-geometria', {
    curso: CURSO, titulo: 'Pontos no mapa', subtitulo: 'Geometria analítica',
    icone: 'ph-map-pin', cor: '#4d8f87', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'Como o jogo da Batalha Naval', html: '<p>Na Batalha Naval dizes «coluna B, linha 4» para acertar num barco. A geometria analítica faz o mesmo: dá um <b>endereço</b> a cada ponto com dois números.</p>' },
      { tipo: 'texto', titulo: 'As coordenadas (x, y)', html: '<p>O ponto <b>(2, 3)</b> quer dizer: anda <b>2 para a direita</b> (x) e <b>3 para cima</b> (y). A ordem importa: primeiro o lado, depois a altura.</p>' },
      { tipo: 'interativo', titulo: 'Coloca o ponto 🗺️', render: pontoInterativa },
      { tipo: 'texto', titulo: 'Distância entre dois pontos', html: '<p>Para saber a distância entre dois pontos, usamos o <b>Teorema de Pitágoras</b> escondido: é como medir a hipotenusa de um triângulo formado pela diferença de x e de y.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · No ponto (4, 1), o 4 é…', opcoes: ['quanto andas para o lado', 'quanto andas para cima', 'a distância', 'nada'], correta: 0, feedback: 'O primeiro número (x) = para o <b>lado</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O ponto (0, 0) chama-se…', opcoes: ['origem', 'topo', 'centro do x', 'infinito'], correta: 0, feedback: '(0,0) é a <b>origem</b> — o ponto de partida. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Em (x, y), a ordem…', opcoes: ['importa (1.º lado, 2.º cima)', 'é indiferente', 'é sempre igual', 'é ao contrário'], correta: 0, feedback: 'Primeiro x (lado), depois y (cima). A ordem <b>importa</b>. 👍' }
    ],
    fecho: 'Cada ponto tem um endereço (x, y): primeiro o lado, depois a altura.'
  });

  /* ── CAP 4 · FUNÇÕES REAIS — a máquina + gráfico ── */
  function fnGrafico(host) {
    var m = 1;
    function pinta() {
      var W = 180, cx = 90, cy = 90, esc = 14;
      var s = '<svg viewBox="0 0 ' + W + ' 180" style="width:100%;max-width:200px">';
      s += '<line x1="10" y1="' + cy + '" x2="' + (W - 10) + '" y2="' + cy + '" stroke="#ccc"/><line x1="' + cx + '" y1="10" x2="' + cx + '" y2="170" stroke="#ccc"/>';
      var x1 = -5, x2 = 5;
      s += '<line x1="' + (cx + x1 * esc) + '" y1="' + (cy - m * x1 * esc) + '" x2="' + (cx + x2 * esc) + '" y2="' + (cy - m * x2 * esc) + '" stroke="#4d8f87" stroke-width="2.5"/></svg>';
      host.querySelector('#apr-fg').innerHTML = s;
      host.querySelector('#apr-fg-info').innerHTML = m > 0 ? 'Declive <b>' + m + '</b> (positivo): a reta <b>sobe</b> ↗️' : m < 0 ? 'Declive <b>' + m + '</b> (negativo): a reta <b>desce</b> ↘️' : 'Declive <b>0</b>: a reta é <b>horizontal</b> →';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Muda o declive e vê a reta inclinar-se. ↗️</p>'
      + '<div id="apr-fg" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>declive = <b id="apr-fg-v">1</b></span><input type="range" min="-3" max="3" value="1" class="apr-slider" id="apr-fg-s"></div>'
      + '<p class="apr-prose" id="apr-fg-info" style="text-align:center"></p>';
    host.querySelector('#apr-fg-s').addEventListener('input', function () { m = +this.value; host.querySelector('#apr-fg-v').textContent = m; pinta(); });
    pinta();
  }
  APRENDER.registar('mat10-funcoes', {
    curso: CURSO, titulo: 'Funções e gráficos', subtitulo: 'Funções reais',
    icone: 'ph-function', cor: '#4a8e9e', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'O preço do táxi', html: '<p>Um táxi cobra <b>3€ fixos</b> ao entrar e <b>1€ por km</b>. Quanto pagas depende dos km — é uma <b>função</b>! Mais km, mais caro, sempre pela mesma regra.</p>' },
      { tipo: 'texto', titulo: 'O gráfico mostra a regra', html: '<p>Se desenhares «km vs preço», sai uma <b>reta</b>. O <b>declive</b> é o quão inclinada está: quanto sobe por cada passo para a direita.</p>' },
      { tipo: 'interativo', titulo: 'Inclina a reta ↗️', render: fnGrafico },
      { tipo: 'texto', titulo: 'Domínio: o que podes meter', html: '<p>O <b>domínio</b> é o conjunto de valores que <b>podes</b> meter na função. Não podes pedir «−3 km» de táxi — esses valores ficam de fora do domínio.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Táxi: 3€ + 1€/km. Por 5 km pagas…', opcoes: ['8€', '5€', '3€', '15€'], correta: 0, feedback: '3 + 5×1 = <b>8€</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um declive positivo faz a reta…', opcoes: ['subir', 'descer', 'ficar horizontal', 'desaparecer'], correta: 0, feedback: 'Declive positivo → a reta <b>sobe</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · O domínio de uma função é…', opcoes: ['os valores que podes meter', 'os que saem', 'o gráfico', 'o declive'], correta: 0, feedback: 'Domínio = o que <b>podes meter</b> (entradas válidas). 👍' }
    ],
    fecho: 'Função = regra (entra→sai). Declive = inclinação. Domínio = o que podes meter.'
  });

  /* ── CAP 5 · ESTATÍSTICA — média e desvio ── */
  APRENDER.registar('mat10-estatistica', {
    curso: CURSO, titulo: 'Estatística: resumir dados', subtitulo: 'Estatística',
    icone: 'ph-chart-bar', cor: '#7a5a8a', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Dois jogadores, mesma média', html: '<p>Dois jogadores marcam, em média, 10 pontos. Mas um faz sempre 10, e o outro ora faz 2, ora faz 18. A média é igual, mas são <b>muito diferentes</b>!</p><p>Falta medir a <b>variação</b>.</p>' },
      { tipo: 'texto', titulo: 'Média e desvio-padrão', html: '<p>A <b>média</b> diz o «centro». O <b>desvio-padrão</b> diz se os valores estão <b>juntinhos da média</b> (desvio pequeno) ou <b>espalhados</b> (desvio grande).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A média diz-te…', opcoes: ['o centro dos dados', 'o mais espalhado', 'o maior', 'o menor'], correta: 0, feedback: 'Média = o <b>centro</b> (valor justo). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um desvio-padrão grande quer dizer dados…', opcoes: ['espalhados', 'todos iguais', 'pequenos', 'inteiros'], correta: 0, feedback: 'Desvio grande = valores <b>espalhados</b> da média. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Notas 10,10,10. O desvio-padrão é…', opcoes: ['0 (todos iguais)', 'grande', '10', '3'], correta: 0, feedback: 'Todos iguais → não há variação → desvio <b>0</b>. 👍' }
    ],
    fecho: 'Média = o centro. Desvio-padrão = quão espalhados estão os dados.'
  });

  /* ── CAP 6 · TRIGONOMETRIA — a rampa ── */
  function trigInterativa(host) {
    var ang = 30;
    function pinta() {
      var r = ang * Math.PI / 180, W = 200, H = 130, ox = 30, oy = 110, L = 150;
      var tx = ox + L, ty = oy - L * Math.tan(r); if (oy - ty > 100) ty = oy - 100;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:220px">';
      s += '<polygon points="' + ox + ',' + oy + ' ' + (ox + L) + ',' + oy + ' ' + tx + ',' + ty + '" fill="#f3ede4" stroke="#8a7058" stroke-width="2"/>';
      s += '<text x="' + (ox + 16) + '" y="' + (oy - 5) + '" font-size="11" fill="#6a5038">' + ang + '°</text></svg>';
      host.querySelector('#apr-tr').innerHTML = s;
      host.querySelector('#apr-tr-info').innerHTML = 'Ângulo <b>' + ang + '°</b>: sen ≈ <b>' + Math.sin(r).toFixed(2) + '</b>, cos ≈ <b>' + Math.cos(r).toFixed(2) + '</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Muda a inclinação e vê o seno e o cosseno. 📐</p>'
      + '<div id="apr-tr" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>ângulo = <b id="apr-tr-v">30</b>°</span><input type="range" min="10" max="75" value="30" class="apr-slider" id="apr-tr-s"></div>'
      + '<p class="apr-prose" id="apr-tr-info" style="text-align:center"></p>';
    host.querySelector('#apr-tr-s').addEventListener('input', function () { ang = +this.value; host.querySelector('#apr-tr-v').textContent = ang; pinta(); });
    pinta();
  }
  APRENDER.registar('mat10-trigonometria', {
    curso: CURSO, titulo: 'Trigonometria', subtitulo: 'Seno, cosseno e tangente',
    icone: 'ph-triangle', cor: '#8a7058', praticar: pratLink(6),
    blocos: [
      { tipo: 'texto', titulo: 'Medir sem subir', html: '<p>Como medir a altura de uma árvore sem lá subir? Mede a sombra e o ângulo do sol — a trigonometria faz o resto. Tudo a partir de <b>triângulos</b>.</p>' },
      { tipo: 'interativo', titulo: 'Mexe na rampa 📐', render: trigInterativa },
      { tipo: 'texto', titulo: 'SOH-CAH-TOA', html: '<p><b>S</b>eno = <b>O</b>posto/<b>H</b>ipotenusa. <b>C</b>osseno = <b>A</b>djacente/<b>H</b>ipotenusa. <b>T</b>angente = <b>O</b>posto/<b>A</b>djacente. Três razões, uma lengalenga.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Seno = …', opcoes: ['oposto ÷ hipotenusa', 'adjacente ÷ hipotenusa', 'oposto ÷ adjacente', 'hip ÷ oposto'], correta: 0, feedback: 'SOH: Seno = Oposto ÷ Hipotenusa. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O lado maior (em frente ao reto) é a…', opcoes: ['hipotenusa', 'altura', 'base', 'tangente'], correta: 0, feedback: 'O maior = <b>hipotenusa</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Cosseno usa o cateto…', opcoes: ['adjacente', 'oposto', 'maior', 'nenhum'], correta: 0, feedback: 'CAH: Cosseno = <b>Adjacente</b> ÷ Hipotenusa. 👍' }
    ],
    fecho: 'Trigonometria mede com triângulos. Decora SOH-CAH-TOA.'
  });

})();
