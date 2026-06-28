/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat8.js — Explicadores lúdicos do 8.º ano (Matemática)
   Um tema por capítulo. Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 8.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat8\//.test(window.location.pathname)) ? '' : 'mat8/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · NÚMEROS — a raiz quadrada é o lado do quadrado ── */
  function raizInterativa(host) {
    var area = 9;
    function pinta() {
      var lado = Math.sqrt(area);
      var px = 110, escala = px / 5; // até 25 de área (lado 5)
      var L = lado * escala;
      var s = '<svg viewBox="0 0 150 150" style="width:100%;max-width:150px">';
      s += '<rect x="20" y="' + (130 - L) + '" width="' + L + '" height="' + L + '" fill="#cfe3f0" stroke="#3f7a9a" stroke-width="2"/>';
      s += '<text x="' + (20 + L / 2) + '" y="' + (130 - L / 2 + 4) + '" font-size="12" font-weight="800" fill="#2a5d7a" text-anchor="middle">área ' + area + '</text>';
      s += '<text x="' + (20 + L / 2) + '" y="143" font-size="10" fill="#3f7a9a" text-anchor="middle">lado = ' + (lado % 1 === 0 ? lado : lado.toFixed(2)) + '</text>';
      s += '</svg>';
      host.querySelector('#apr-raiz').innerHTML = s;
      host.querySelector('#apr-raiz-info').innerHTML = 'Um quadrado de área <b>' + area + '</b> tem lado <b>√' + area + ' = ' + (lado % 1 === 0 ? lado : lado.toFixed(2)) + '</b>. A raiz quadrada «desfaz» o quadrado.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A <b>raiz quadrada</b> de um número é o <b>lado</b> de um quadrado com essa <b>área</b>. Escolhe a área e vê o lado. ⬜</p>' +
      '<div id="apr-raiz" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span>área = <b id="apr-raiz-v">9</b></span><input type="range" min="1" max="25" value="9" class="apr-slider" id="apr-raiz-s"></div>' +
      '<p class="apr-prose" id="apr-raiz-info" style="text-align:center"></p>';
    var sl = host.querySelector('#apr-raiz-s');
    sl.addEventListener('input', function () { area = parseInt(sl.value, 10); host.querySelector('#apr-raiz-v').textContent = area; pinta(); });
    pinta();
  }
  APRENDER.registar('mat8-numeros', {
    curso: CURSO, titulo: 'Raízes e potências', subtitulo: 'Números (8.º)',
    icone: 'ph-square-root', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Potência: multiplicar repetido', html: '<p>Uma <b>potência</b> é uma multiplicação repetida. <b>2³</b> quer dizer 2×2×2 = 8. O número de baixo (<b>base</b>) é o que se repete; o de cima (<b>expoente</b>) diz quantas vezes.</p>' },
      { tipo: 'texto', titulo: 'O quadrado de um número', html: '<p>Elevar ao quadrado (expoente 2) é o mais comum: <b>5² = 25</b>. Chama-se «quadrado» porque é mesmo a <b>área de um quadrado</b> de lado 5.</p>' },
      { tipo: 'interativo', titulo: 'A raiz é o lado ⬜', render: raizInterativa },
      { tipo: 'texto', titulo: 'A raiz desfaz o quadrado', html: '<p>A <b>raiz quadrada</b> faz o contrário: dá-te o <b>lado</b> a partir da <b>área</b>. <b>√25 = 5</b> porque 5² = 25.</p><p>Por isso a raiz e o quadrado são operações <b>inversas</b> — uma desfaz a outra.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · 2³ quer dizer…', opcoes: ['2×2×2', '2×3', '2+2+2', '3×3'], correta: 0, feedback: '2³ = <b>2×2×2</b> = 8. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A raiz quadrada de uma área dá-te…', opcoes: ['o lado do quadrado', 'o dobro', 'a volta', 'o volume'], correta: 0, feedback: 'A raiz da área = o <b>lado</b> do quadrado. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quanto é <b>√49</b>?', opcoes: ['7', '24,5', '9', '14'], correta: 0, feedback: '√49 = <b>7</b> porque 7² = 49. 👍' }
    ],
    fecho: 'Potência = multiplicar repetido. O <b>quadrado</b> é a área; a <b>raiz</b> é o lado — uma desfaz a outra.'
  });

  /* ── CAP 2 · VETORES E ISOMETRIAS — a seta de deslocação ── */
  function vetorInterativo(host) {
    var vx = 3, vy = 2;
    function pinta() {
      var W = 220, cx = 40, cy = 150, u = 22;
      function X(x) { return cx + x * u; } function Y(y) { return cy - y * u; }
      var s = '<svg viewBox="0 0 ' + W + ' 180" style="width:100%;max-width:220px">';
      for (var k = 0; k <= 6; k++) { s += '<line x1="' + X(k) + '" y1="20" x2="' + X(k) + '" y2="' + cy + '" stroke="#eef" stroke-width="1"/>'; s += '<line x1="' + cx + '" y1="' + Y(k) + '" x2="' + (W - 10) + '" y2="' + Y(k) + '" stroke="#eef" stroke-width="1"/>'; }
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (W - 10) + '" y2="' + cy + '" stroke="#999"/><line x1="' + cx + '" y1="20" x2="' + cx + '" y2="' + cy + '" stroke="#999"/>';
      // ponto original (1,1) e imagem
      var ox = 1, oy = 1, ix = ox + vx, iy = oy + vy;
      s += '<defs><marker id="apv" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#4d978f"/></marker></defs>';
      s += '<circle cx="' + X(ox) + '" cy="' + Y(oy) + '" r="4" fill="#888"/><text x="' + (X(ox) - 6) + '" y="' + (Y(oy) + 14) + '" font-size="9" fill="#888">P</text>';
      s += '<line x1="' + X(ox) + '" y1="' + Y(oy) + '" x2="' + X(ix) + '" y2="' + Y(iy) + '" stroke="#4d978f" stroke-width="2.5" marker-end="url(#apv)"/>';
      s += '<circle cx="' + X(ix) + '" cy="' + Y(iy) + '" r="4" fill="#2f9e63"/><text x="' + (X(ix) + 5) + '" y="' + (Y(iy) - 4) + '" font-size="9" font-weight="700" fill="#1f7a49">P\'</text>';
      s += '</svg>';
      host.querySelector('#apr-vet').innerHTML = s;
      host.querySelector('#apr-vet-info').innerHTML = 'O vetor <b>(' + vx + ', ' + vy + ')</b> desloca o ponto P: anda <b>' + vx + '</b> para a direita e <b>' + vy + '</b> para cima, até P\'.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Um <b>vetor</b> é uma <b>seta de deslocação</b>: diz quanto andar para o lado e para cima. Arrasta para mudar a seta. ➡️</p>' +
      '<div id="apr-vet" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span>→ direita: <b id="apr-vx-v">3</b></span><input type="range" min="0" max="4" value="3" class="apr-slider" id="apr-vx"></div>' +
      '<div class="apr-slider-row"><span>↑ cima: <b id="apr-vy-v">2</b></span><input type="range" min="0" max="4" value="2" class="apr-slider" id="apr-vy"></div>' +
      '<p class="apr-prose" id="apr-vet-info" style="text-align:center"></p>';
    host.querySelector('#apr-vx').addEventListener('input', function (e) { vx = parseInt(e.target.value, 10); host.querySelector('#apr-vx-v').textContent = vx; pinta(); });
    host.querySelector('#apr-vy').addEventListener('input', function (e) { vy = parseInt(e.target.value, 10); host.querySelector('#apr-vy-v').textContent = vy; pinta(); });
    pinta();
  }
  APRENDER.registar('mat8-vetores', {
    curso: CURSO, titulo: 'Vetores: setas que deslocam', subtitulo: 'Vetores e isometrias',
    icone: 'ph-arrow-up-right', cor: '#4d978f', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Uma seta com instruções', html: '<p>Um <b>vetor</b> é uma <b>seta</b> que diz como deslocar algo: para que lado e quanto. O vetor (3, 2) significa «anda 3 para a direita e 2 para cima».</p>' },
      { tipo: 'interativo', titulo: 'Move o ponto ➡️', render: vetorInterativo },
      { tipo: 'texto', titulo: 'Isometrias: mover sem deformar', html: '<p>Uma <b>translação</b> (deslizar com um vetor) é uma <b>isometria</b>: muda o sítio mas <b>não muda a forma nem o tamanho</b>. A reflexão (espelho) e a rotação (girar) também são isometrias.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Um vetor é como uma seta: tem…', opcoes: ['tamanho e direção', 'só um número', 'só cor', 'só posição'], correta: 0, feedback: 'Vetor = seta com <b>tamanho e direção</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O vetor (4, −1) desloca um ponto…', opcoes: ['4 à direita e 1 para baixo', '4 para cima e 1 à direita', '1 à direita e 4 para cima', '4 à esquerda e 1 para cima'], correta: 0, feedback: '1.º valor = horizontal (4 à direita); 2.º = vertical (−1 → para baixo). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · No vetor, o 1.º número diz o movimento…', opcoes: ['horizontal (lado)', 'vertical (cima/baixo)', 'em diagonal', 'circular'], correta: 0, feedback: '1.º número = horizontal (para o lado). 👍' }
    ],
    fecho: 'Vetor = <b>seta de deslocação</b> (x, y). Translações, reflexões e rotações movem sem deformar — são isometrias.'
  });

  /* ── CAP 3 · POLINÓMIOS — juntar termos semelhantes ── */
  APRENDER.registar('mat8-polinomios', {
    curso: CURSO, titulo: 'Juntar o que é parecido', subtitulo: 'Monómios e polinómios',
    icone: 'ph-function', cor: '#7d6aa8', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'O que é um monómio?', html: '<p>Um <b>monómio</b> é um número com uma letra: <b>3x</b>, <b>−5a</b>, <b>7y²</b>. A letra representa um valor que não sabemos (uma <b>variável</b>).</p>' },
      { tipo: 'texto', titulo: 'Só se juntam os parecidos', html: '<p>Imagina que <b>x</b> são maçãs e <b>y</b> são laranjas. <b>3x + 2x = 5x</b> (3 maçãs + 2 maçãs = 5 maçãs). Mas <b>3x + 2y</b> fica assim — não podes juntar maçãs com laranjas!</p><p class="apr-formula">3x + 2y + 4x = 7x + 2y</p><p>Juntámos só os <b>x</b> (3x + 4x = 7x). Estes chamam-se <b>termos semelhantes</b>.</p>' },
      { tipo: 'texto', titulo: 'Polinómio = soma de monómios', html: '<p>Um <b>polinómio</b> é só vários monómios somados: <b>2x² + 3x − 5</b>. Simplificar é <b>juntar os termos semelhantes</b> para ficar mais curto.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Numa expressão, só se juntam os termos…', opcoes: ['parecidos (a com a, b com b)', 'todos', 'os números só', 'nenhuns'], correta: 0, feedback: 'Só se juntam os <b>parecidos</b> (a com a, b com b). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Quanto é <b>3a + 2a</b>?', opcoes: ['5a', '6a', '5', '6a²'], correta: 0, feedback: '3a + 2a = <b>5a</b> (juntas os «a»). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Simplifica: <b>5a + 3b − 2a</b>', opcoes: ['3a + 3b', '6ab', '8a + b', '3a − b'], correta: 0, feedback: '5a − 2a = 3a; o 3b fica → <b>3a + 3b</b>. 👍' }
    ],
    fecho: 'Só se somam <b>termos semelhantes</b> (mesma letra) — maçãs com maçãs. Polinómio = soma de monómios.'
  });

  /* ── CAP 4 · TEOREMA DE PITÁGORAS — os quadrados nos lados ── */
  function pitagorasVisual(host) {
    var a = 3, b = 4;
    function pinta() {
      var c = Math.sqrt(a * a + b * b);
      var u = 14, W = 260, H = 240, ox = 70, oy = 150;
      // triângulo retângulo: vértices (ox,oy), (ox+b*u,oy), (ox,oy-a*u)
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:260px">';
      var Ax = ox, Ay = oy, Bx = ox + b * u, By = oy, Cx = ox, Cy = oy - a * u;
      // quadrado sobre cateto b (em baixo)
      s += '<rect x="' + ox + '" y="' + oy + '" width="' + (b * u) + '" height="' + (b * u) + '" fill="#bfe8d4" opacity=".75" stroke="#2f9e63"/>';
      s += '<text x="' + (ox + b * u / 2) + '" y="' + (oy + b * u / 2 + 4) + '" font-size="11" font-weight="800" fill="#1f7a49" text-anchor="middle">b²=' + (b * b) + '</text>';
      // quadrado sobre cateto a (à esquerda)
      s += '<rect x="' + (ox - a * u) + '" y="' + (oy - a * u) + '" width="' + (a * u) + '" height="' + (a * u) + '" fill="#cfe3f0" opacity=".75" stroke="#3f7a9a"/>';
      s += '<text x="' + (ox - a * u / 2) + '" y="' + (oy - a * u / 2 + 4) + '" font-size="11" font-weight="800" fill="#2a5d7a" text-anchor="middle">a²=' + (a * a) + '</text>';
      // triângulo
      s += '<polygon points="' + Ax + ',' + Ay + ' ' + Bx + ',' + By + ' ' + Cx + ',' + Cy + '" fill="#fff" stroke="#333" stroke-width="2"/>';
      s += '<rect x="' + ox + '" y="' + (oy - 9) + '" width="9" height="9" fill="none" stroke="#333"/>';
      // hipotenusa label
      s += '<text x="' + ((Bx + Cx) / 2 + 6) + '" y="' + ((By + Cy) / 2 - 4) + '" font-size="11" font-weight="800" fill="#c0392b">c=' + (c % 1 === 0 ? c : c.toFixed(2)) + '</text>';
      s += '</svg>';
      host.querySelector('#apr-pit').innerHTML = s;
      host.querySelector('#apr-pit-info').innerHTML = 'Os quadrados dos catetos somados dão o quadrado da hipotenusa:<br><b>' + (a * a) + ' + ' + (b * b) + ' = ' + (a * a + b * b) + '</b> → c = √' + (a * a + b * b) + ' = <b>' + (c % 1 === 0 ? c : c.toFixed(2)) + '</b>';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Num triângulo <b>retângulo</b>, desenha um quadrado em cada lado. Os dois pequenos juntos têm a mesma área que o grande! Muda os catetos. 📐</p>' +
      '<div id="apr-pit" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span>cateto a: <b id="apr-pa-v">3</b></span><input type="range" min="2" max="6" value="3" class="apr-slider" id="apr-pa"></div>' +
      '<div class="apr-slider-row"><span>cateto b: <b id="apr-pb-v">4</b></span><input type="range" min="2" max="6" value="4" class="apr-slider" id="apr-pb"></div>' +
      '<p class="apr-prose" id="apr-pit-info" style="text-align:center"></p>';
    host.querySelector('#apr-pa').addEventListener('input', function (e) { a = parseInt(e.target.value, 10); host.querySelector('#apr-pa-v').textContent = a; pinta(); });
    host.querySelector('#apr-pb').addEventListener('input', function (e) { b = parseInt(e.target.value, 10); host.querySelector('#apr-pb-v').textContent = b; pinta(); });
    pinta();
  }
  APRENDER.registar('mat8-pitagoras', {
    curso: CURSO, titulo: 'O Teorema de Pitágoras', subtitulo: 'a² + b² = c²',
    icone: 'ph-triangle', cor: '#b06a6a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'O triângulo especial', html: '<p>Um triângulo <b>retângulo</b> tem um ângulo de 90° (um cantinho reto). Os dois lados que formam esse canto chamam-se <b>catetos</b>; o lado maior, à frente do ângulo reto, é a <b>hipotenusa</b>.</p>' },
      { tipo: 'interativo', titulo: 'Vê os quadrados 📐', render: pitagorasVisual },
      { tipo: 'texto', titulo: 'A regra mágica', html: '<p>Pitágoras descobriu: <b>a área dos dois quadrados pequenos (catetos) somada é igual à área do quadrado grande (hipotenusa)</b>.</p><p class="apr-formula">a² + b² = c²</p><p>Serve para descobrir um lado que falta. Ex: catetos 3 e 4 → 9 + 16 = 25 → c = √25 = <b>5</b>.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O lado maior do triângulo retângulo é a…', opcoes: ['hipotenusa', 'altura', 'base', 'cateto'], correta: 0, feedback: 'O maior (em frente ao canto reto) = <b>hipotenusa</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O Teorema de Pitágoras diz que…', opcoes: ['cateto² + cateto² = hipotenusa²', 'os lados são iguais', 'a área é o lado²', 'os ângulos somam 90°'], correta: 0, feedback: 'a² + b² = c² (catetos e hipotenusa). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Catetos 6 e 8. A hipotenusa mede…', opcoes: ['10', '14', '48', '100'], correta: 0, feedback: '6² + 8² = 100 → √100 = <b>10</b>. 👍' }
    ],
    fecho: 'No triângulo retângulo: <b>a² + b² = c²</b>. Os quadrados dos catetos somam o quadrado da hipotenusa.'
  });

  /* ── CAP 5 · FUNÇÕES — o construtor de retas (y = mx + b) ── */
  function retaConstrutor(host) {
    var m = 1, b = 0;
    function pinta() {
      var W = 240, H = 240, pad = 20, cx = W / 2, cy = H / 2, range = 5, u = (cx - pad) / range;
      function X(x) { return cx + x * u; } function Y(y) { return cy - y * u; }
      function clamp(v) { return Math.max(pad, Math.min(H - pad, v)); }
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:240px">';
      for (var k = -range; k <= range; k++) { if (!k) continue; s += '<line x1="' + X(k) + '" y1="' + pad + '" x2="' + X(k) + '" y2="' + (H - pad) + '" stroke="#eef"/><line x1="' + pad + '" y1="' + Y(k) + '" x2="' + (W - pad) + '" y2="' + Y(k) + '" stroke="#eef"/>'; }
      s += '<line x1="' + pad + '" y1="' + cy + '" x2="' + (W - pad) + '" y2="' + cy + '" stroke="#999"/><line x1="' + cx + '" y1="' + (H - pad) + '" x2="' + cx + '" y2="' + pad + '" stroke="#999"/>';
      var x1 = -range, x2 = range, y1 = m * x1 + b, y2 = m * x2 + b;
      s += '<line x1="' + X(x1) + '" y1="' + clamp(Y(y1)) + '" x2="' + X(x2) + '" y2="' + clamp(Y(y2)) + '" stroke="#5e9676" stroke-width="2.6"/>';
      // ponto onde corta o eixo y (0,b)
      s += '<circle cx="' + X(0) + '" cy="' + clamp(Y(b)) + '" r="4.5" fill="#c0392b"/><text x="' + (X(0) + 6) + '" y="' + (clamp(Y(b)) - 5) + '" font-size="9" font-weight="800" fill="#c0392b">(0,' + b + ')</text>';
      s += '</svg>';
      host.querySelector('#apr-reta2').innerHTML = s;
      var dir = m > 0 ? 'sobe' : m < 0 ? 'desce' : 'é horizontal';
      host.querySelector('#apr-reta2-info').innerHTML = '<b>y = ' + (m === 1 ? '' : m === -1 ? '−' : m) + 'x' + (b > 0 ? ' + ' + b : b < 0 ? ' − ' + (-b) : '') + '</b><br>O <b>m=' + m + '</b> é a inclinação (a reta ' + dir + '). O <b>b=' + b + '</b> é onde corta o eixo y.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Toda a reta é <b>y = mx + b</b>. Mexe nos dois cursores e vê o que cada número faz: <b>m</b> inclina, <b>b</b> sobe/desce. 📈</p>' +
      '<div id="apr-reta2" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span>m (inclinação): <b id="apr-m-v">1</b></span><input type="range" min="-3" max="3" value="1" class="apr-slider" id="apr-m"></div>' +
      '<div class="apr-slider-row"><span>b (corta y em): <b id="apr-b-v">0</b></span><input type="range" min="-4" max="4" value="0" class="apr-slider" id="apr-b"></div>' +
      '<p class="apr-prose" id="apr-reta2-info" style="text-align:center"></p>';
    host.querySelector('#apr-m').addEventListener('input', function (e) { m = parseInt(e.target.value, 10); host.querySelector('#apr-m-v').textContent = m; pinta(); });
    host.querySelector('#apr-b').addEventListener('input', function (e) { b = parseInt(e.target.value, 10); host.querySelector('#apr-b-v').textContent = b; pinta(); });
    pinta();
  }
  APRENDER.registar('mat8-funcoes-afim', {
    curso: CURSO, titulo: 'O Construtor de Retas', subtitulo: 'Função afim y = mx + b',
    icone: 'ph-chart-line', cor: '#5e9676', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'A reta tem uma fórmula', html: '<p>No 7.º viste que f(x) = 2x dá uma reta pela origem. No 8.º acrescentamos um número: <b>y = mx + b</b>. Esta fórmula consegue desenhar <b>qualquer reta</b>.</p><p>Só tens de perceber o que cada letra faz.</p>' },
      { tipo: 'interativo', titulo: 'Constrói a tua reta 📈', render: retaConstrutor },
      { tipo: 'texto', titulo: 'm inclina, b levanta', html: '<p>O <b>m</b> é o <b>declive</b>: quanto maior, mais íngreme a reta sobe. Se for negativo, a reta desce.</p><p>O <b>b</b> é a <b>ordenada na origem</b>: o ponto onde a reta corta o eixo dos y. Mudar o b sobe ou desce a reta toda.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Em y = mx + b, o «m» é…', opcoes: ['a inclinação (declive)', 'onde corta o y', 'o x', 'a área'], correta: 0, feedback: 'O m é o <b>declive</b> (inclinação da reta). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Em y = 2x + 3, onde corta o eixo dos y?', opcoes: ['No 3', 'No 2', 'No 0', 'No 5'], correta: 0, feedback: 'O b (= 3) é onde corta o y: ponto (0, <b>3</b>). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Um declive positivo faz a reta…', opcoes: ['subir', 'descer', 'ficar horizontal', 'desaparecer'], correta: 0, feedback: 'Declive positivo → a reta <b>sobe</b>. 👍' }
    ],
    fecho: 'Toda a reta é <b>y = mx + b</b>: o <b>m</b> inclina (declive), o <b>b</b> diz onde corta o eixo y.'
  });

  /* ── CAP 6 · SISTEMAS — duas retas que se cruzam ── */
  APRENDER.registar('mat8-sistemas', {
    curso: CURSO, titulo: 'Duas condições ao mesmo tempo', subtitulo: 'Sistemas de equações',
    icone: 'ph-intersect', cor: '#a8854d', praticar: pratLink(6),
    blocos: [
      { tipo: 'texto', titulo: 'Quando há dois mistérios', html: '<p>Às vezes há <b>dois números escondidos</b> (x e y) e <b>duas pistas</b> ao mesmo tempo. Por exemplo:</p><p class="apr-formula">x + y = 10<br>x − y = 4</p><p>Isto é um <b>sistema</b>: procuramos os valores de x e y que servem para as <b>duas</b> condições.</p>' },
      { tipo: 'texto', titulo: 'A imagem: duas retas', html: '<p>Cada equação é uma <b>reta</b>. A solução do sistema é o <b>ponto onde as duas retas se cruzam</b> — o único par (x, y) que está nas duas ao mesmo tempo.</p><p>No exemplo, a solução é <b>x = 7, y = 3</b>: confere → 7 + 3 = 10 ✓ e 7 − 3 = 4 ✓.</p>' },
      { tipo: 'texto', titulo: 'Como se resolve', html: '<p>Um truque (método da substituição): da 2.ª pista, x = 4 + y. Mete na 1.ª: (4 + y) + y = 10 → 4 + 2y = 10 → y = 3. E x = 4 + 3 = 7.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Um sistema tem…', opcoes: ['duas (ou mais) equações ao mesmo tempo', 'uma só equação', 'só números', 'só gráficos'], correta: 0, feedback: 'Sistema = várias equações que têm de valer <b>ao mesmo tempo</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A solução de um sistema de duas retas é…', opcoes: ['o ponto onde se cruzam', 'a reta mais alta', 'a origem (0,0)', 'qualquer ponto'], correta: 0, feedback: 'É o <b>ponto de cruzamento</b> das retas. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Se duas retas são paralelas (nunca se cruzam), o sistema…', opcoes: ['não tem solução', 'tem 1 solução', 'tem infinitas', 'tem 2'], correta: 0, feedback: 'Não se cruzam → <b>não há solução</b>. 👍' }
    ],
    fecho: 'Sistema = <b>duas condições juntas</b>. A solução é o <b>ponto onde as duas retas se cruzam</b>.'
  });

  /* ── CAP 7 · VOLUMES — encher o sólido ── */
  APRENDER.registar('mat8-volumes', {
    curso: CURSO, titulo: 'Quanto cabe lá dentro?', subtitulo: 'Volumes de sólidos',
    icone: 'ph-cube', cor: '#4f86b0', praticar: pratLink(7),
    blocos: [
      { tipo: 'texto', titulo: 'Volume = espaço ocupado', html: '<p>O <b>volume</b> é quanto «cabe» dentro de um sólido — como a água que enche um pacote de leite. Mede-se em <b>unidades cúbicas</b> (cm³, m³…).</p>' },
      { tipo: 'texto', titulo: 'Prisma e cilindro: base × altura', html: '<p>Para os sólidos «direitos» (prisma, cilindro), o volume é simples: <b>área da base × altura</b>. Calcula-se a área do «chão» e multiplica-se pela altura, como empilhar fatias iguais.</p><p class="apr-formula">V = área da base × altura</p>' },
      { tipo: 'texto', titulo: 'Pirâmide e cone: a terça parte', html: '<p>Uma pirâmide ou um cone «acabam em bico», por isso cabe <b>menos</b>: exatamente <b>um terço</b> do prisma/cilindro com a mesma base e altura.</p><p class="apr-formula">V = (área da base × altura) ÷ 3</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O volume mede…', opcoes: ['o que cabe dentro', 'a volta', 'o peso', 'a altura só'], correta: 0, feedback: 'Volume = o espaço <b>dentro</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O volume de um prisma é…', opcoes: ['área da base × altura', 'base + altura', 'só a altura', 'a volta da base'], correta: 0, feedback: 'V = <b>área da base × altura</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Base de 10 cm² e altura 6 cm. O volume é…', opcoes: ['60 cm³', '16 cm³', '30 cm³', '600 cm³'], correta: 0, feedback: '10 × 6 = <b>60 cm³</b>. 👍' }
    ],
    fecho: 'Volume = quanto cabe. Prisma/cilindro: <b>base × altura</b>. Pirâmide/cone: <b>a terça parte</b> disso.'
  });

  /* ── CAP 8 · ESTATÍSTICA — o centro dos dados ── */
  function mediaInterativa(host) {
    var vals = [2, 4, 9];
    function pinta() {
      var soma = vals.reduce(function (a, x) { return a + x; }, 0);
      var media = soma / vals.length;
      var W = 280, H = 90, max = 12, u = (W - 30) / max;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:280px">';
      s += '<line x1="15" y1="60" x2="' + (W - 5) + '" y2="60" stroke="#999"/>';
      for (var k = 0; k <= max; k += 2) s += '<text x="' + (15 + k * u) + '" y="74" font-size="8" fill="#aaa" text-anchor="middle">' + k + '</text>';
      vals.forEach(function (v) { s += '<circle cx="' + (15 + v * u) + '" cy="60" r="6" fill="#9a5e96" opacity=".8"/>'; });
      // marcador da média (fulcro)
      s += '<polygon points="' + (15 + media * u) + ',46 ' + (15 + media * u - 6) + ',36 ' + (15 + media * u + 6) + ',36" fill="#c0392b"/>';
      s += '<text x="' + (15 + media * u) + '" y="30" font-size="10" font-weight="800" fill="#c0392b" text-anchor="middle">média ' + media.toFixed(1) + '</text>';
      s += '</svg>';
      host.querySelector('#apr-med').innerHTML = s;
      host.querySelector('#apr-med-info').innerHTML = 'Soma dos valores ÷ quantos são: (' + vals.join(' + ') + ') ÷ ' + vals.length + ' = <b>' + media.toFixed(1) + '</b>. A média é o <b>ponto de equilíbrio</b> dos dados.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A <b>média</b> é o «centro» dos dados — como o ponto onde a régua ficaria equilibrada. Mexe nos 3 valores. ⚖️</p>' +
      '<div id="apr-med" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span>valor 1: <b id="apr-m1v">2</b></span><input type="range" min="0" max="12" value="2" class="apr-slider" id="apr-m1"></div>' +
      '<div class="apr-slider-row"><span>valor 2: <b id="apr-m2v">4</b></span><input type="range" min="0" max="12" value="4" class="apr-slider" id="apr-m2"></div>' +
      '<div class="apr-slider-row"><span>valor 3: <b id="apr-m3v">9</b></span><input type="range" min="0" max="12" value="9" class="apr-slider" id="apr-m3"></div>' +
      '<p class="apr-prose" id="apr-med-info" style="text-align:center"></p>';
    function bind(i, id, lbl) { host.querySelector(id).addEventListener('input', function (e) { vals[i] = parseInt(e.target.value, 10); host.querySelector(lbl).textContent = vals[i]; pinta(); }); }
    bind(0, '#apr-m1', '#apr-m1v'); bind(1, '#apr-m2', '#apr-m2v'); bind(2, '#apr-m3', '#apr-m3v');
    pinta();
  }
  APRENDER.registar('mat8-estatistica', {
    curso: CURSO, titulo: 'O centro dos dados', subtitulo: 'Média, moda e mediana',
    icone: 'ph-chart-bar', cor: '#9a5e96', praticar: pratLink(8),
    blocos: [
      { tipo: 'texto', titulo: 'Resumir muitos números', html: '<p>Quando temos muitos dados (notas, idades…), queremos um número que os <b>resuma</b>. Há três «centros»: a <b>média</b>, a <b>moda</b> e a <b>mediana</b>.</p>' },
      { tipo: 'interativo', titulo: 'Equilibra a média ⚖️', render: mediaInterativa },
      { tipo: 'texto', titulo: 'Os três centros', html: '<p><b>Média</b>: soma tudo e divide pelo número de valores (o equilíbrio).<br><b>Moda</b>: o valor que <b>mais se repete</b>.<br><b>Mediana</b>: o valor <b>do meio</b> quando ordenas todos.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A média calcula-se…', opcoes: ['somar tudo ÷ quantidade', 'a maior', 'a que mais repete', 'a do meio'], correta: 0, feedback: 'Média = somar tudo ÷ quantidade. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Notas: 3, 4, 4, 5. A <b>moda</b> é…', opcoes: ['4', '3', '5', '4,5'], correta: 0, feedback: 'A moda é o que mais aparece: o <b>4</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A média de 4 e 8 é…', opcoes: ['6', '12', '4', '8'], correta: 0, feedback: '(4+8) ÷ 2 = <b>6</b>. 👍' }
    ],
    fecho: 'Três centros: <b>média</b> (equilíbrio), <b>moda</b> (mais repetido), <b>mediana</b> (o do meio).'
  });
})();
