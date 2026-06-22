/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat7.js — Explicadores lúdicos do 7.º ano (Matemática)
   Um tema por capítulo. Funções (cap 6) está em aprender-temas.js.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 7.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat7\//.test(window.location.pathname)) ? '' : 'mat7/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · NÚMEROS INTEIROS — a reta / o termómetro ── */
  function retaInterativa(host) {
    var pos = 0;
    function pinta() {
      var W = 320, H = 90, pad = 22, mid = H / 2, range = 6;
      var u = (W - 2 * pad) / (2 * range);
      function X(v) { return pad + (v + range) * u; }
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:320px">';
      s += '<line x1="' + pad + '" y1="' + mid + '" x2="' + (W - pad) + '" y2="' + mid + '" stroke="#999" stroke-width="1.5"/>';
      for (var k = -range; k <= range; k++) {
        var col = k < 0 ? '#c0392b' : k > 0 ? '#1f7a49' : '#555';
        s += '<line x1="' + X(k) + '" y1="' + (mid - 4) + '" x2="' + X(k) + '" y2="' + (mid + 4) + '" stroke="' + col + '" stroke-width="1.2"/>';
        s += '<text x="' + X(k) + '" y="' + (mid + 18) + '" font-size="9" fill="' + col + '" text-anchor="middle">' + k + '</text>';
      }
      // marcador
      s += '<circle cx="' + X(pos) + '" cy="' + mid + '" r="7" fill="#56b6c2" stroke="#fff" stroke-width="2"/>';
      s += '<text x="' + X(pos) + '" y="' + (mid - 12) + '" font-size="11" font-weight="800" fill="#2a8a99" text-anchor="middle">' + pos + '</text>';
      s += '</svg>';
      var zona = pos < 0 ? '<b style="color:#c0392b">negativo</b> (abaixo de zero)' : pos > 0 ? '<b style="color:#1f7a49">positivo</b> (acima de zero)' : '<b>zero</b>';
      host.querySelector('#apr-reta').innerHTML = s;
      host.querySelector('#apr-reta-info').innerHTML = 'Estás no <b>' + pos + '</b> — um número ' + zona + '. O <b>valor absoluto</b> (distância ao zero) é <b>|' + pos + '| = ' + Math.abs(pos) + '</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Carrega nas setas para andar na reta. À esquerda do zero é negativo (como graus abaixo de zero num termómetro), à direita é positivo. 👇</p>' +
      '<div id="apr-reta" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row" style="justify-content:center;gap:1.2rem">' +
      '<button class="apr-btn apr-btn-ghost" id="apr-reta-menos"><i class="ph ph-minus"></i> Recua</button>' +
      '<button class="apr-btn apr-btn-ghost" id="apr-reta-mais">Avança <i class="ph ph-plus"></i></button></div>' +
      '<p class="apr-prose" id="apr-reta-info" style="text-align:center"></p>';
    host.querySelector('#apr-reta-menos').onclick = function () { if (pos > -6) pos--; pinta(); };
    host.querySelector('#apr-reta-mais').onclick = function () { if (pos < 6) pos++; pinta(); };
    pinta();
  }
  APRENDER.registar('mat7-inteiros', {
    curso: CURSO, titulo: 'Números Negativos sem medo', subtitulo: 'Inteiros e a reta numérica',
    icone: 'ph-thermometer-simple', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'O que há antes do zero?', html: '<p>Já viste um <b>termómetro</b> marcar 3 graus <b>abaixo de zero</b>? Isso é <b>−3</b>. Os números <b>negativos</b> são os que ficam <b>antes do zero</b>.</p><p>Juntando os negativos, o zero e os positivos, temos os <b>números inteiros</b> (ℤ): …, −3, −2, −1, <b>0</b>, 1, 2, 3, …</p>' },
      { tipo: 'interativo', titulo: 'Anda na reta 🎮', render: retaInterativa },
      { tipo: 'texto', titulo: 'Valor absoluto = distância', html: '<p>O <b>valor absoluto</b> de um número é a sua <b>distância ao zero</b> — e a distância nunca é negativa!</p><p>Por isso <b>|−5| = 5</b> e <b>|5| = 5</b>: o −5 e o 5 estão ambos a 5 passos do zero. O sinal desaparece.</p>' },
      { tipo: 'confirma', pergunta: 'Qual é o valor de <b>|−7|</b>?', opcoes: ['7', '−7', '0', '14'], correta: 0, feedback: '|−7| é a distância do −7 ao zero = <b>7</b>. O valor absoluto é sempre positivo (ou zero).' }
    ],
    fecho: 'Pensa sempre na <b>reta</b>: negativos à esquerda, positivos à direita, e o valor absoluto é só a distância ao zero.'
  });

  /* ── CAP 2 · RACIONAIS — a barra de chocolate ── */
  function fracaoInterativa(host) {
    var partes = 1, total = 4;
    function pinta() {
      var W = 300, h = 46, gap = 3, w = (W - (total - 1) * gap) / total;
      var s = '<svg viewBox="0 0 ' + W + ' ' + h + '" style="width:100%;max-width:300px">';
      for (var i = 0; i < total; i++) {
        var on = i < partes;
        s += '<rect x="' + (i * (w + gap)) + '" y="0" width="' + w + '" height="' + h + '" rx="5" fill="' + (on ? '#a06535' : '#f0e6dc') + '" stroke="#7a4a22" stroke-width="1.2"/>';
      }
      s += '</svg>';
      host.querySelector('#apr-frac').innerHTML = s;
      host.querySelector('#apr-frac-info').innerHTML = 'Comeste <b>' + partes + '</b> de <b>' + total + '</b> pedaços: a fração <b style="font-size:1.2em">' + partes + '/' + total + '</b> &nbsp;(' + (Math.round(partes / total * 100)) + '% da barra).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Uma fração é uma <b>parte de um todo</b>. Esta barra de chocolate tem 4 pedaços. Escolhe quantos comes e quantos pedaços tem a barra. 🍫</p>' +
      '<div id="apr-frac" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span>Comes <b id="apr-frac-p">1</b></span><input type="range" min="0" max="8" value="1" class="apr-slider" id="apr-frac-ps"></div>' +
      '<div class="apr-slider-row"><span>Barra com <b id="apr-frac-t">4</b> pedaços</span><input type="range" min="2" max="8" value="4" class="apr-slider" id="apr-frac-ts"></div>' +
      '<p class="apr-prose" id="apr-frac-info" style="text-align:center"></p>';
    var ps = host.querySelector('#apr-frac-ps'), ts = host.querySelector('#apr-frac-ts');
    function upd() { total = parseInt(ts.value, 10); if (partes > total) partes = total; ps.max = total; host.querySelector('#apr-frac-p').textContent = partes; host.querySelector('#apr-frac-t').textContent = total; pinta(); }
    ps.addEventListener('input', function () { partes = parseInt(ps.value, 10); if (partes > total) { partes = total; ps.value = total; } host.querySelector('#apr-frac-p').textContent = partes; pinta(); });
    ts.addEventListener('input', upd);
    pinta();
  }
  APRENDER.registar('mat7-racionais', {
    curso: CURSO, titulo: 'Frações são pedaços', subtitulo: 'Números racionais',
    icone: 'ph-chart-pie-slice', cor: '#5e9676', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Uma fração é uma divisão', html: '<p>Uma <b>fração</b> 3/4 quer dizer: divide o todo em <b>4 partes iguais</b> e fica com <b>3</b>.</p><p>O número de baixo (<b>denominador</b>) diz <b>em quantas partes</b> dividimos. O de cima (<b>numerador</b>) diz <b>quantas</b> ficamos.</p>' },
      { tipo: 'interativo', titulo: 'Parte a barra 🍫', render: fracaoInterativa },
      { tipo: 'texto', titulo: 'A mesma fração, outro nome', html: '<p>Repara: <b>2/4</b> é o mesmo que <b>1/2</b> — metade da barra! São <b>frações equivalentes</b>: o mesmo pedaço, escrito de outra forma.</p><p>Por isso é que <b>50%</b>, <b>0,5</b> e <b>1/2</b> são a mesma coisa, só vestidas de maneira diferente.</p>' },
      { tipo: 'confirma', pergunta: 'Comeste <b>2 de 4</b> pedaços. Que fração da barra comeste?', opcoes: ['Metade (1/2)', 'Um quarto', 'A barra toda', 'Dois inteiros'], correta: 0, feedback: '2/4 = 1/2 = <b>metade</b>. Dois pedaços de quatro são exatamente meia barra. 👍' }
    ],
    fecho: 'Sempre que vires uma fração, imagina a <b>barra</b>: o de baixo diz em quantos pedaços cortar, o de cima quantos tens.'
  });

  /* ── CAP 3 · GEOMETRIA — o ângulo como abertura ── */
  function anguloInterativo(host) {
    var ang = 60;
    function pinta() {
      var W = 220, H = 160, ox = 30, oy = 130, R = 110;
      var rad = ang * Math.PI / 180;
      var ex = ox + R * Math.cos(rad), ey = oy - R * Math.sin(rad);
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:220px">';
      s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + (ox + R) + '" y2="' + oy + '" stroke="#888" stroke-width="2"/>';
      s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + ex.toFixed(1) + '" y2="' + ey.toFixed(1) + '" stroke="#2a8a99" stroke-width="2.5"/>';
      // arco
      var ax = ox + 34 * Math.cos(rad), ay = oy - 34 * Math.sin(rad);
      s += '<path d="M ' + (ox + 34) + ' ' + oy + ' A 34 34 0 0 0 ' + ax.toFixed(1) + ' ' + ay.toFixed(1) + '" fill="none" stroke="#e5a020" stroke-width="2"/>';
      s += '<text x="' + (ox + 44) + '" y="' + (oy - 16) + '" font-size="13" font-weight="800" fill="#c07a10">' + ang + '°</text>';
      s += '</svg>';
      host.querySelector('#apr-ang').innerHTML = s;
      var tipo = ang < 90 ? '<b style="color:#1f7a49">agudo</b> (menos de 90°)' : ang === 90 ? '<b>reto</b> (exatamente 90°)' : ang < 180 ? '<b style="color:#c0392b">obtuso</b> (mais de 90°)' : '<b>raso</b> (180°)';
      host.querySelector('#apr-ang-info').innerHTML = 'Este ângulo é ' + tipo + '.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Um <b>ângulo</b> mede a <b>abertura</b> entre duas semirretas — como abrir uma tesoura ou um leque. Arrasta para abrir e fechar. ✂️</p>' +
      '<div id="apr-ang" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span><b id="apr-ang-v">60</b>°</span><input type="range" min="10" max="180" step="5" value="60" class="apr-slider" id="apr-ang-s"></div>' +
      '<p class="apr-prose" id="apr-ang-info" style="text-align:center"></p>';
    var sl = host.querySelector('#apr-ang-s');
    sl.addEventListener('input', function () { ang = parseInt(sl.value, 10); host.querySelector('#apr-ang-v').textContent = ang; pinta(); });
    pinta();
  }
  APRENDER.registar('mat7-geometria', {
    curso: CURSO, titulo: 'Ângulos são aberturas', subtitulo: 'Geometria',
    icone: 'ph-angle', cor: '#a8854d', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'O que mede um ângulo?', html: '<p>Um <b>ângulo</b> não mede comprimento — mede a <b>abertura</b> entre duas linhas que partem do mesmo ponto (o <b>vértice</b>).</p><p>Mede-se em <b>graus (°)</b>. Uma volta completa tem 360°; meia volta, 180°; um quarto de volta (o canto de uma folha), 90°.</p>' },
      { tipo: 'interativo', titulo: 'Abre e fecha ✂️', render: anguloInterativo },
      { tipo: 'texto', titulo: 'Os nomes dos ângulos', html: '<p>Pelo tamanho da abertura: <b>agudo</b> (&lt; 90°), <b>reto</b> (= 90°, o cantinho certo), <b>obtuso</b> (entre 90° e 180°) e <b>raso</b> (= 180°, uma linha reta).</p>' },
      { tipo: 'confirma', pergunta: 'Um ângulo de <b>120°</b> é…', opcoes: ['Obtuso', 'Agudo', 'Reto', 'Raso'], correta: 0, feedback: '120° está entre 90° e 180°, por isso é <b>obtuso</b> (maior que o canto reto). 👍' }
    ],
    fecho: 'Ângulo é <b>abertura</b>, medida em graus. Decora os marcos: 90° é o cantinho reto, 180° é uma linha reta.'
  });

  /* ── CAP 4 · EQUAÇÕES — a balança ── */
  function balancaInterativa(host) {
    // x + 2 = 5 ; o aluno "tira 2 dos dois lados"
    var passo = 0; // 0: inicial, 1: tirou 2, 2: resolvido
    function pinta() {
      var esq = passo === 0 ? 'x + 2' : 'x';
      var dir = passo === 0 ? '5' : '3';
      host.querySelector('#apr-bal-esq').textContent = esq;
      host.querySelector('#apr-bal-dir').textContent = dir;
      host.querySelector('#apr-bal-info').innerHTML = passo === 0
        ? 'A balança está <b>equilibrada</b>: o que está à esquerda vale o mesmo que à direita. Para descobrir o x, tira <b>2</b> dos <b>dois</b> pratos.'
        : 'Tiraste 2 de cada lado — continua equilibrada! E agora vês: <b style="color:#1f7a49;font-size:1.2em">x = 3</b>. 🎉';
      host.querySelector('#apr-bal-btn').style.display = passo === 0 ? '' : 'none';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Uma equação é uma <b>balança equilibrada</b>. O sinal = quer dizer «os dois lados valem o mesmo». Para manter o equilíbrio, o que fazes a um lado, fazes ao outro. ⚖️</p>' +
      '<div class="apr-bal"><div class="apr-bal-prato"><span id="apr-bal-esq">x + 2</span></div><div class="apr-bal-eq">=</div><div class="apr-bal-prato"><span id="apr-bal-dir">5</span></div></div>' +
      '<div style="text-align:center;margin:.8rem 0"><button class="apr-btn apr-btn-primary" id="apr-bal-btn">− 2 dos dois lados</button></div>' +
      '<p class="apr-prose" id="apr-bal-info" style="text-align:center"></p>';
    host.querySelector('#apr-bal-btn').onclick = function () { passo = 1; pinta(); };
    pinta();
  }
  APRENDER.registar('mat7-equacoes', {
    curso: CURSO, titulo: 'Equações são balanças', subtitulo: 'Resolver equações',
    icone: 'ph-scales', cor: '#7d6aa8', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'O segredo do sinal =', html: '<p>Numa equação como <b>x + 2 = 5</b>, o sinal <b>=</b> significa que os <b>dois lados valem o mesmo</b> — como uma <b>balança em equilíbrio</b>.</p><p>O <b>x</b> é um número escondido. Resolver a equação é <b>descobrir esse número</b> sem desequilibrar a balança.</p>' },
      { tipo: 'interativo', titulo: 'Equilibra a balança ⚖️', render: balancaInterativa },
      { tipo: 'texto', titulo: 'A regra de ouro', html: '<p><b>O que fizeres a um lado, faz ao outro.</b> Se tiras 2 à esquerda, tens de tirar 2 à direita — assim a balança continua equilibrada e o x fica sozinho.</p><p>Foi o que fizemos: x + 2 = 5 → (tira 2) → x = 3. ✓</p>' },
      { tipo: 'confirma', pergunta: 'Para resolver <b>x + 4 = 10</b>, o que fazes aos dois lados?', opcoes: ['Tirar 4', 'Somar 4', 'Multiplicar por 4', 'Tirar 10'], correta: 0, feedback: 'Tiras <b>4</b> a cada lado: x + 4 − 4 = 10 − 4 → <b>x = 6</b>. A balança mantém-se equilibrada. 👍' }
    ],
    fecho: 'Equação = <b>balança</b>. Para isolar o x, faz a mesma coisa aos dois lados e o equilíbrio mantém-se.'
  });

  /* ── CAP 5 · SEQUÊNCIAS — o padrão que continua ── */
  function sequenciaInterativa(host) {
    var n = 3; // termos mostrados; regra: 2,5,8,11... (a_n = 3n-1)
    function termo(k) { return 3 * k - 1; }
    function pinta() {
      var s = '';
      for (var k = 1; k <= n; k++) s += '<span class="apr-seq-bola">' + termo(k) + '</span>' + (k < n ? '<span class="apr-seq-seta">+3 →</span>' : '');
      host.querySelector('#apr-seq').innerHTML = s;
      host.querySelector('#apr-seq-info').innerHTML = n < 6
        ? 'Cada termo é o anterior <b>+3</b>. Consegues prever o próximo? Carrega para revelar.'
        : 'Viste o padrão? Para chegar ao termo <b>n</b> sem contar um a um, usa a fórmula: <b>3n − 1</b>. Ex: o 10.º termo é 3×10 − 1 = <b>29</b>.';
      host.querySelector('#apr-seq-btn').style.display = n < 6 ? '' : 'none';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Uma <b>sequência</b> é uma lista de números com um <b>padrão</b>. Descobre a regra e podes continuar para sempre. 🔢</p>' +
      '<div id="apr-seq" class="apr-seq-row"></div>' +
      '<div style="text-align:center;margin:.8rem 0"><button class="apr-btn apr-btn-primary" id="apr-seq-btn">Mostrar o próximo termo</button></div>' +
      '<p class="apr-prose" id="apr-seq-info" style="text-align:center"></p>';
    host.querySelector('#apr-seq-btn').onclick = function () { if (n < 6) n++; pinta(); };
    pinta();
  }
  APRENDER.registar('mat7-sequencias', {
    curso: CURSO, titulo: 'Sequências e padrões', subtitulo: 'O termo geral',
    icone: 'ph-dots-three-outline', cor: '#2f9e63', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Descobre o padrão', html: '<p>Olha para esta lista: <b>2, 5, 8, 11, …</b> Consegues ver a regra? De cada vez somamos <b>3</b>.</p><p>A isto chama-se uma <b>sequência</b>: números em ordem, seguindo um padrão. Cada número é um <b>termo</b>.</p>' },
      { tipo: 'interativo', titulo: 'Continua o padrão 🔢', render: sequenciaInterativa },
      { tipo: 'texto', titulo: 'O atalho: o termo geral', html: '<p>Se quiseres o <b>100.º termo</b>, somar +3 cem vezes é uma seca. Por isso usamos uma <b>fórmula</b> — o <b>termo geral</b> — que dá qualquer termo de uma vez.</p><p>Aqui é <b>3n − 1</b>: mete o número da posição (n) e sai o termo. 5.º termo? 3×5 − 1 = <b>14</b>. ✓</p>' },
      { tipo: 'confirma', pergunta: 'Na fórmula <b>3n − 1</b>, qual é o <b>4.º</b> termo (n = 4)?', opcoes: ['11', '12', '7', '13'], correta: 0, feedback: '3×4 − 1 = 12 − 1 = <b>11</b>. A fórmula dá qualquer termo sem contar um a um. 👍' }
    ],
    fecho: 'Sequência = números com <b>padrão</b>. O <b>termo geral</b> (uma fórmula com n) é o atalho para chegar a qualquer termo.'
  });

  /* ── CAP 7 · FIGURAS SEMELHANTES — ampliar/reduzir ── */
  function semelhancaInterativa(host) {
    var k = 1.5;
    function pinta() {
      var base = 40, w1 = base, h1 = base * 0.7, w2 = base * k, h2 = base * 0.7 * k;
      var W = 260, H = 130;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:260px">';
      s += '<rect x="20" y="' + (H - 20 - h1) + '" width="' + w1 + '" height="' + h1 + '" fill="#cfe3f0" stroke="#3f7a9a" stroke-width="2"/>';
      s += '<text x="' + (20 + w1 / 2) + '" y="' + (H - 6) + '" font-size="9" fill="#3f7a9a" text-anchor="middle">original</text>';
      s += '<rect x="130" y="' + (H - 20 - h2) + '" width="' + w2 + '" height="' + h2 + '" fill="#bfe8d4" stroke="#2f9e63" stroke-width="2"/>';
      s += '<text x="' + (130 + w2 / 2) + '" y="' + (H - 6) + '" font-size="9" fill="#2f9e63" text-anchor="middle">×' + k + '</text>';
      s += '</svg>';
      host.querySelector('#apr-sem').innerHTML = s;
      host.querySelector('#apr-sem-info').innerHTML = k === 1 ? 'Com escala <b>1</b> as figuras são <b>iguais</b> (congruentes).' : (k > 1 ? 'Ampliaste ' : 'Reduziste ') + '<b>' + k + '×</b>: a forma é a <b>mesma</b>, só muda o tamanho. São <b>figuras semelhantes</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Duas figuras são <b>semelhantes</b> se têm a <b>mesma forma</b> mas tamanhos diferentes — como uma foto ampliada. Arrasta a escala. 🔍</p>' +
      '<div id="apr-sem" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span>escala ×<b id="apr-sem-v">1.5</b></span><input type="range" min="0.5" max="2.5" step="0.5" value="1.5" class="apr-slider" id="apr-sem-s"></div>' +
      '<p class="apr-prose" id="apr-sem-info" style="text-align:center"></p>';
    var sl = host.querySelector('#apr-sem-s');
    sl.addEventListener('input', function () { k = parseFloat(sl.value); host.querySelector('#apr-sem-v').textContent = k; pinta(); });
    pinta();
  }
  APRENDER.registar('mat7-semelhantes', {
    curso: CURSO, titulo: 'Ampliar e reduzir', subtitulo: 'Figuras semelhantes',
    icone: 'ph-magnifying-glass-plus', cor: '#4f86b0', praticar: pratLink(7),
    blocos: [
      { tipo: 'texto', titulo: 'Mesma forma, outro tamanho', html: '<p>Quando amplias uma foto, ela fica maior mas <b>continua a mesma foto</b> — não fica esticada nem deformada. Em matemática dizemos que as duas são <b>figuras semelhantes</b>.</p><p>O número que diz quantas vezes ampliaste (ou reduziste) chama-se <b>razão de semelhança</b> (ou escala).</p>' },
      { tipo: 'interativo', titulo: 'Amplia a figura 🔍', render: semelhancaInterativa },
      { tipo: 'texto', titulo: 'Tudo cresce na mesma proporção', html: '<p>Numa ampliação ×2, <b>todos</b> os comprimentos ficam a dobrar: largura, altura, lados… mas os <b>ângulos não mudam</b>. É isso que mantém a forma igual.</p>' },
      { tipo: 'confirma', pergunta: 'Amplias um retângulo de lados 3 e 4 com escala <b>×2</b>. Os novos lados são:', opcoes: ['6 e 8', '5 e 6', '3 e 4', '9 e 16'], correta: 0, feedback: 'Escala ×2 → cada lado a dobrar: 3×2 = 6 e 4×2 = 8. A forma mantém-se. 👍' }
    ],
    fecho: 'Semelhantes = <b>mesma forma, tamanho diferente</b>. A escala diz quantas vezes ampliaste; os ângulos nunca mudam.'
  });

  /* ── CAP 8 · DADOS E PROBABILIDADES — quão provável ── */
  function probInterativa(host) {
    var favoraveis = 2, total = 6;
    function pinta() {
      var W = 240, r = 90, cx = 120, cy = 110;
      var s = '<svg viewBox="0 0 ' + W + ' 150" style="width:100%;max-width:240px">';
      var ang0 = -90;
      for (var i = 0; i < total; i++) {
        var a1 = ang0 + i * 360 / total, a2 = ang0 + (i + 1) * 360 / total;
        var x1 = cx + r * Math.cos(a1 * Math.PI / 180), y1 = cy + r * Math.sin(a1 * Math.PI / 180);
        var x2 = cx + r * Math.cos(a2 * Math.PI / 180), y2 = cy + r * Math.sin(a2 * Math.PI / 180);
        var on = i < favoraveis;
        s += '<path d="M ' + cx + ' ' + cy + ' L ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' A ' + r + ' ' + r + ' 0 0 1 ' + x2.toFixed(1) + ' ' + y2.toFixed(1) + ' Z" fill="' + (on ? '#9a5e96' : '#efe6ee') + '" stroke="#fff" stroke-width="1.5"/>';
      }
      s += '</svg>';
      host.querySelector('#apr-prob').innerHTML = s;
      var pct = Math.round(favoraveis / total * 100);
      host.querySelector('#apr-prob-info').innerHTML = 'Probabilidade = <b>casos favoráveis / casos possíveis</b> = <b style="font-size:1.15em">' + favoraveis + '/' + total + '</b> ≈ ' + pct + '%. ' + (pct === 0 ? 'Impossível!' : pct === 100 ? 'De certeza!' : pct >= 50 ? 'É provável.' : 'É pouco provável.');
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A <b>probabilidade</b> diz <b>quão provável</b> é algo acontecer, de 0 (impossível) a 1 (certo). Esta roleta tem fatias roxas (ganhar). Escolhe quantas. 🎯</p>' +
      '<div id="apr-prob" style="display:flex;justify-content:center"></div>' +
      '<div class="apr-slider-row"><span><b id="apr-prob-f">2</b> fatias a ganhar</span><input type="range" min="0" max="6" value="2" class="apr-slider" id="apr-prob-fs"></div>' +
      '<div class="apr-slider-row"><span>de <b id="apr-prob-t">6</b> no total</span><input type="range" min="2" max="8" value="6" class="apr-slider" id="apr-prob-ts"></div>' +
      '<p class="apr-prose" id="apr-prob-info" style="text-align:center"></p>';
    var fs = host.querySelector('#apr-prob-fs'), ts = host.querySelector('#apr-prob-ts');
    fs.addEventListener('input', function () { favoraveis = parseInt(fs.value, 10); if (favoraveis > total) { favoraveis = total; fs.value = total; } host.querySelector('#apr-prob-f').textContent = favoraveis; pinta(); });
    ts.addEventListener('input', function () { total = parseInt(ts.value, 10); if (favoraveis > total) favoraveis = total; fs.max = total; host.querySelector('#apr-prob-f').textContent = favoraveis; host.querySelector('#apr-prob-t').textContent = total; pinta(); });
    pinta();
  }
  APRENDER.registar('mat7-probabilidades', {
    curso: CURSO, titulo: 'Quão provável é?', subtitulo: 'Dados e probabilidades',
    icone: 'ph-dice-three', cor: '#9a5e96', praticar: pratLink(8),
    blocos: [
      { tipo: 'texto', titulo: 'Do impossível ao certo', html: '<p>A <b>probabilidade</b> mede a <b>hipótese</b> de algo acontecer, numa escala de <b>0 a 1</b>: <b>0</b> = impossível, <b>1</b> = de certeza, <b>0,5</b> = tanto faz (como o cara ou coroa).</p>' },
      { tipo: 'interativo', titulo: 'Roda a roleta 🎯', render: probInterativa },
      { tipo: 'texto', titulo: 'A fração mágica', html: '<p>Calcula-se assim: <b>casos favoráveis ÷ casos possíveis</b>.</p><p>Num dado, a probabilidade de sair <b>5</b> é <b>1/6</b> (um caso favorável, seis possíveis). De sair <b>par</b> é <b>3/6 = 1/2</b> (o 2, o 4 e o 6).</p>' },
      { tipo: 'confirma', pergunta: 'Num dado normal, qual a probabilidade de sair um número <b>maior que 4</b> (5 ou 6)?', opcoes: ['2/6 (= 1/3)', '1/6', '4/6', '1/2'], correta: 0, feedback: 'Favoráveis: 5 e 6 (2 casos). Possíveis: 6. Logo <b>2/6 = 1/3</b>. 👍' }
    ],
    fecho: 'Probabilidade = <b>favoráveis ÷ possíveis</b>, sempre entre 0 (impossível) e 1 (certo).'
  });
})();
