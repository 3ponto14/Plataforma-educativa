/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat9.js — Explicadores lúdicos do 9.º ano (Matemática)
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 9.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat9\//.test(window.location.pathname)) ? '' : 'mat9/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · INEQUAÇÕES — a regra dos «pelo menos» ── */
  function inequacaoInterativa(host) {
    var x = 2;
    function pinta() {
      var esq = 2 * x + 1, dir = 7, ok = esq <= dir;
      host.querySelector('#apr-ineq').innerHTML =
        '<div style="font-size:1.4rem;font-weight:800;text-align:center;margin:.4rem 0">2x + 1 ' + (esq < dir ? '&lt;' : esq === dir ? '=' : '&gt;') + ' 7</div>'
        + '<div style="font-size:1.05rem;text-align:center;color:#555">com x = <b>' + x + '</b>:&nbsp; ' + esq + ' ' + (esq < dir ? '&lt;' : esq === dir ? '=' : '&gt;') + ' 7</div>';
      host.querySelector('#apr-ineq-info').innerHTML = ok
        ? '<b style="color:#2e9e6a">✓ x = ' + x + ' serve!</b>'
        : '<b style="color:#c4796e">✗ x = ' + x + ' não serve.</b>';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Arrasta o <b>x</b> e vê quais é que «servem» (deixam o lado esquerdo até 7). 🎚️</p>'
      + '<div id="apr-ineq"></div>'
      + '<div class="apr-slider-row"><span>x = <b id="apr-ineq-v">2</b></span><input type="range" min="-2" max="6" value="2" class="apr-slider" id="apr-ineq-s"></div>'
      + '<p class="apr-prose" id="apr-ineq-info" style="text-align:center"></p>';
    var sl = host.querySelector('#apr-ineq-s');
    sl.addEventListener('input', function () { x = +sl.value; host.querySelector('#apr-ineq-v').textContent = x; pinta(); });
    pinta();
  }
  APRENDER.registar('mat9-reais', {
    curso: CURSO, titulo: 'Inequações: «pelo menos»', subtitulo: 'Números reais e inequações',
    icone: 'ph-scales', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Já viste isto na vida real', html: '<p>Numa atração de feira diz: «só podes andar se tiveres <b>pelo menos 12 anos</b>».</p><p>Não tens de ter <b>exatamente</b> 12. Podes ter 12, 13, 14… ou mais. <b>Muitos números servem ao mesmo tempo.</b></p>' },
      { tipo: 'texto', titulo: 'Isto é uma inequação', html: '<p>Uma <b>equação</b> procura um número <b>certo</b> (com o sinal <b>=</b>).</p><p>Uma <b>inequação</b> usa <b>&lt;</b> (menor), <b>&gt;</b> (maior), <b>≤</b> («até», menor ou igual) ou <b>≥</b> («pelo menos», maior ou igual). A resposta é um <b>conjunto de números</b>, não um só.</p>' },
      { tipo: 'interativo', titulo: 'Vê quais servem 🎚️', render: inequacaoInterativa },
      { tipo: 'texto', titulo: 'O único truque a decorar', html: '<p>Resolve-se quase como uma equação. Só há <b>uma surpresa</b>: se trocares o sinal de tudo (multiplicar ou dividir por um número <b>negativo</b>), o &lt; vira &gt; (e ao contrário).</p><p>Ex.: −x &gt; 4 fica x <b>&lt;</b> −4.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «Pelo menos 18 anos» quer dizer…', opcoes: ['18 ou mais', 'exatamente 18', 'menos de 18', 'até 18'], correta: 0, feedback: '«Pelo menos» = <b>18 ou mais</b> (≥ 18). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Que sinal usa uma inequação?', opcoes: ['&lt; , &gt; , ≤ , ≥', 'só o =', '+ e −', '× e ÷'], correta: 0, feedback: 'A inequação <b>compara</b> com &lt;, &gt;, ≤ ou ≥. O = é da equação. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Em −x &gt; 4, o x é…', opcoes: ['x &lt; −4', 'x &gt; 4', 'x &gt; −4', 'x &lt; 4'], correta: 0, feedback: 'Trocaste o sinal de tudo (negativo) → o &gt; vira &lt;: x <b>&lt;</b> −4. 👍' }
    ],
    fecho: 'Inequação = «muitos números servem». E lembra-te: trocar por negativo vira o sinal.'
  });

  /* ── CAP 2 · EQUAÇÕES 2.º GRAU — a bola atirada ao ar ── */
  function parabolaInterativa(host) {
    var a = 1;
    function pinta() {
      var W = 220, H = 150, cx = W / 2, cy = 120, esc = 9;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:240px">';
      s += '<line x1="10" y1="' + cy + '" x2="' + (W - 10) + '" y2="' + cy + '" stroke="#ccc"/><line x1="' + cx + '" y1="10" x2="' + cx + '" y2="' + (H - 5) + '" stroke="#ccc"/>';
      var pts = '';
      for (var px = -7; px <= 7; px += 0.5) { var y = a * px * px, sy = cy - y * (esc / 4); if (sy > 8) pts += (cx + px * esc) + ',' + sy + ' '; }
      s += '<polyline points="' + pts + '" fill="none" stroke="' + (a > 0 ? '#5e9676' : '#c4796e') + '" stroke-width="2.5"/></svg>';
      host.querySelector('#apr-par').innerHTML = s;
      host.querySelector('#apr-par-info').innerHTML = a > 0
        ? 'a = ' + a + ' (positivo) → abre para <b>cima</b> 🙂 (tem um ponto mais baixo).'
        : 'a = ' + a + ' (negativo) → abre para <b>baixo</b> 🙃 (como uma bola a cair, tem um ponto mais alto).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Muda o <b>a</b> e vê a curva virar para cima ou para baixo. 🏀</p>'
      + '<div id="apr-par" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>a = <b id="apr-par-v">1</b></span><input type="range" min="-3" max="3" value="1" class="apr-slider" id="apr-par-s"></div>'
      + '<p class="apr-prose" id="apr-par-info" style="text-align:center"></p>';
    var sl = host.querySelector('#apr-par-s');
    sl.addEventListener('input', function () { a = +sl.value; if (a === 0) a = 1; host.querySelector('#apr-par-v').textContent = a; pinta(); });
    pinta();
  }
  APRENDER.registar('mat9-eq2grau', {
    curso: CURSO, titulo: 'Equações do 2.º grau', subtitulo: 'A bola no ar e a fórmula',
    icone: 'ph-chart-line', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Pensa numa bola atirada ao ar', html: '<p>Atiras uma bola para cima. Ela <b>sobe, chega ao mais alto e volta a cair</b>. Esse caminho curvo chama-se <b>parábola</b>.</p><p>A pergunta «em que instantes a bola está no chão?» é mesmo uma equação do 2.º grau.</p>' },
      { tipo: 'texto', titulo: 'O que tem de diferente', html: '<p>Uma equação do <b>2.º grau</b> tem um <b>x²</b> (x ao quadrado): <b>ax² + bx + c = 0</b>.</p><p>Como a curva pode cortar o chão em <b>dois sítios, num só, ou nenhum</b>, a equação pode ter <b>2, 1 ou 0 soluções</b>.</p>' },
      { tipo: 'interativo', titulo: 'Vê a curva virar 🏀', render: parabolaInterativa },
      { tipo: 'texto', titulo: 'A fórmula que resolve tudo', html: '<p>A «máquina» que dá as soluções: <b>x = (−b ± √(b²−4ac)) / 2a</b>.</p><p>Primeiro calculas só o de dentro da raiz, <b>Δ = b²−4ac</b>. Ele avisa-te: Δ positivo → 2 soluções; Δ = 0 → 1; Δ negativo → 0.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O caminho curvo de uma bola atirada ao ar chama-se…', opcoes: ['parábola', 'reta', 'círculo', 'espiral'], correta: 0, feedback: 'É uma <b>parábola</b> — a forma das equações do 2.º grau. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O que torna uma equação «do 2.º grau»?', opcoes: ['ter x²', 'ter vírgula', 'ter x', 'ter =' ], correta: 0, feedback: 'O <b>x²</b> (x ao quadrado) é a marca do 2.º grau. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Se Δ = b²−4ac der negativo, há…', opcoes: ['0 soluções', '2 soluções', '1 solução', 'infinitas'], correta: 0, feedback: 'Raiz de um negativo não existe nos reais → <b>0 soluções</b>. 👍' }
    ],
    fecho: 'Bola ao ar = parábola. Calcula Δ primeiro: ele diz-te logo quantas soluções vais ter.'
  });

  /* ── CAP 3 · FUNÇÕES — a máquina de sumos ── */
  function funcaoInterativa(host) {
    var m = 2, x = 3;
    function pinta() {
      var y = m * x;
      host.querySelector('#apr-fn').innerHTML =
        '<div style="display:flex;align-items:center;justify-content:center;gap:.5rem;font-size:1.1rem;flex-wrap:wrap">'
        + '<div style="background:#eaf3ff;border-radius:10px;padding:.5rem .8rem">metes x = <b>' + x + '</b></div><div style="font-size:1.4rem">→</div>'
        + '<div style="background:#5e9676;color:#fff;border-radius:10px;padding:.5rem .9rem;font-weight:800">× ' + m + '</div><div style="font-size:1.4rem">→</div>'
        + '<div style="background:#fdeef0;border-radius:10px;padding:.5rem .8rem">sai y = <b>' + y + '</b></div></div>';
      host.querySelector('#apr-fn-info').innerHTML = 'A regra é «multiplicar por ' + m + '». Metes ' + x + ', sai <b>' + y + '</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A máquina segue uma regra. Escolhe o que metes (x) e a regra (×). ⚙️</p>'
      + '<div id="apr-fn"></div>'
      + '<div class="apr-slider-row"><span>metes x = <b id="apr-fn-x">3</b></span><input type="range" min="0" max="6" value="3" class="apr-slider" id="apr-fn-xs"></div>'
      + '<div class="apr-slider-row"><span>regra: × <b id="apr-fn-m">2</b></span><input type="range" min="1" max="5" value="2" class="apr-slider" id="apr-fn-ms"></div>'
      + '<p class="apr-prose" id="apr-fn-info" style="text-align:center"></p>';
    host.querySelector('#apr-fn-xs').addEventListener('input', function () { x = +this.value; host.querySelector('#apr-fn-x').textContent = x; pinta(); });
    host.querySelector('#apr-fn-ms').addEventListener('input', function () { m = +this.value; host.querySelector('#apr-fn-m').textContent = m; pinta(); });
    pinta();
  }
  APRENDER.registar('mat9-funcoes', {
    curso: CURSO, titulo: 'Funções são máquinas', subtitulo: 'Função afim',
    icone: 'ph-function', cor: '#4d8f87', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'Como uma máquina de vending', html: '<p>Pões uma moeda, sai um sumo. Pões <b>2 moedas</b>, saem <b>2 sumos</b>. A máquina segue <b>sempre a mesma regra</b>.</p><p>Uma <b>função</b> é isso: metes um número, sai outro, segundo uma regra fixa.</p>' },
      { tipo: 'texto', titulo: 'A linguagem das funções', html: '<p>Escreve-se <b>f(x)</b>: o <b>x</b> é o que metes, e <b>f(x)</b> é o que sai. Se a regra é «×2», então f(3) = 6.</p>' },
      { tipo: 'interativo', titulo: 'A máquina ⚙️', render: funcaoInterativa },
      { tipo: 'texto', titulo: 'A função afim: y = mx + b', html: '<p>Muitas funções têm a forma <b>y = mx + b</b>. Pensa num táxi: <b>b</b> é o que pagas só por entrar (fixo), e <b>m</b> é o que pagas por cada km. O gráfico é uma <b>reta</b>.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Numa função, o x é…', opcoes: ['o que metes', 'o que sai', 'a regra', 'o gráfico'], correta: 0, feedback: 'O <b>x</b> é a entrada (o que metes na máquina). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Se a regra é «×4», quanto é f(5)?', opcoes: ['20', '9', '45', '4'], correta: 0, feedback: '5 × 4 = <b>20</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Em f(x) = 3x + 2, o que pagas «só por entrar» (o fixo) é…', opcoes: ['2', '3', '5', '6'], correta: 0, feedback: 'O <b>2</b> é o valor fixo (ordenada na origem). O 3 é por cada x. 👍' }
    ],
    fecho: 'Função = máquina com uma regra fixa. Em y = mx + b, o b é o fixo e o m é o «por cada x».'
  });

  /* ── CAP 4 · TRIGONOMETRIA — a rampa ── */
  function trigInterativa(host) {
    var ang = 30;
    function pinta() {
      var r = ang * Math.PI / 180, W = 200, H = 130, ox = 30, oy = 110, L = 150;
      var tx = ox + L, ty = oy - L * Math.tan(r); if (oy - ty > 100) ty = oy - 100;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:220px">';
      s += '<polygon points="' + ox + ',' + oy + ' ' + (ox + L) + ',' + oy + ' ' + tx + ',' + ty + '" fill="#f3ede4" stroke="#8a7058" stroke-width="2"/>';
      s += '<text x="' + (ox + 16) + '" y="' + (oy - 5) + '" font-size="11" fill="#6a5038">' + ang + '°</text></svg>';
      host.querySelector('#apr-trig').innerHTML = s;
      host.querySelector('#apr-trig-info').innerHTML = 'Inclinação <b>' + ang + '°</b>: quanto maior o ângulo, mais <b>íngreme</b> a rampa.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Muda a inclinação da rampa e vê o triângulo mudar. 📐</p>'
      + '<div id="apr-trig" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>inclinação = <b id="apr-trig-v">30</b>°</span><input type="range" min="10" max="75" value="30" class="apr-slider" id="apr-trig-s"></div>'
      + '<p class="apr-prose" id="apr-trig-info" style="text-align:center"></p>';
    host.querySelector('#apr-trig-s').addEventListener('input', function () { ang = +this.value; host.querySelector('#apr-trig-v').textContent = ang; pinta(); });
    pinta();
  }
  APRENDER.registar('mat9-trigonometria', {
    curso: CURSO, titulo: 'Trigonometria sem susto', subtitulo: 'Seno, cosseno e tangente',
    icone: 'ph-triangle', cor: '#8a7058', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'Pensa numa rampa', html: '<p>Uma rampa de skate forma um <b>triângulo</b> com o chão. Quanto mais <b>inclinada</b>, mais difícil de subir.</p><p>A trigonometria serve para medir essas inclinações sem precisar de subir lá acima.</p>' },
      { tipo: 'texto', titulo: 'Os três lados', html: '<p>Num triângulo com um canto reto: a <b>hipotenusa</b> é o lado maior (a rampa em si); o <b>cateto oposto</b> é a altura (em frente ao ângulo); o <b>adjacente</b> é o chão (encostado ao ângulo).</p>' },
      { tipo: 'interativo', titulo: 'Mexe na rampa 📐', render: trigInterativa },
      { tipo: 'texto', titulo: 'Uma lengalenga: SOH-CAH-TOA', html: '<p><b>S</b>eno = <b>O</b>posto/<b>H</b>ipotenusa. <b>C</b>osseno = <b>A</b>djacente/<b>H</b>ipotenusa. <b>T</b>angente = <b>O</b>posto/<b>A</b>djacente.</p><p>Decora «SOH-CAH-TOA» como se fosse uma palavra esquisita — funciona! 😄</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O lado maior do triângulo retângulo chama-se…', opcoes: ['hipotenusa', 'cateto', 'vértice', 'ângulo'], correta: 0, feedback: 'A <b>hipotenusa</b> é o lado maior, em frente ao canto reto. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Seno = …', opcoes: ['oposto ÷ hipotenusa', 'adjacente ÷ hipotenusa', 'oposto ÷ adjacente', 'hipotenusa ÷ oposto'], correta: 0, feedback: 'SOH: <b>S</b>eno = <b>O</b>posto ÷ <b>H</b>ipotenusa. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quanto mais inclinada a rampa, maior é o…', opcoes: ['ângulo', 'chão', 'nada muda', 'número de lados'], correta: 0, feedback: 'Mais inclinação = maior <b>ângulo</b>. 👍' }
    ],
    fecho: 'Rampa = triângulo. Decora SOH-CAH-TOA e identifica primeiro o oposto e o adjacente.'
  });

  /* ── CAP 5 · PROBABILIDADES — a sorte ── */
  function probInterativa(host) {
    var fav = 2, tot = 6;
    function pinta() {
      var cx = 70, cy = 70, r = 55, ang0 = -90, s = '<svg viewBox="0 0 140 140" style="width:100%;max-width:150px">';
      for (var i = 0; i < tot; i++) {
        var a1 = ang0 + i * 360 / tot, a2 = ang0 + (i + 1) * 360 / tot;
        var x1 = cx + r * Math.cos(a1 * Math.PI / 180), y1 = cy + r * Math.sin(a1 * Math.PI / 180);
        var x2 = cx + r * Math.cos(a2 * Math.PI / 180), y2 = cy + r * Math.sin(a2 * Math.PI / 180);
        s += '<path d="M' + cx + ',' + cy + ' L' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' A' + r + ',' + r + ' 0 0 1 ' + x2.toFixed(1) + ',' + y2.toFixed(1) + ' Z" fill="' + (i < fav ? '#5e9676' : '#eee') + '" stroke="#fff" stroke-width="1.5"/>';
      }
      s += '</svg>';
      host.querySelector('#apr-prob').innerHTML = s;
      host.querySelector('#apr-prob-info').innerHTML = 'Hipótese de calhar na cor: <b>' + fav + ' em ' + tot + '</b> ≈ ' + Math.round(fav / tot * 100) + '%.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Pinta os gomos «que ganham» e vê a hipótese. 🎯</p>'
      + '<div id="apr-prob" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>gomos que ganham = <b id="apr-prob-f">2</b></span><input type="range" min="0" max="6" value="2" class="apr-slider" id="apr-prob-fs"></div>'
      + '<div class="apr-slider-row"><span>total de gomos = <b id="apr-prob-t">6</b></span><input type="range" min="2" max="8" value="6" class="apr-slider" id="apr-prob-ts"></div>'
      + '<p class="apr-prose" id="apr-prob-info" style="text-align:center"></p>';
    var fs = host.querySelector('#apr-prob-fs'), ts = host.querySelector('#apr-prob-ts');
    fs.addEventListener('input', function () { fav = +fs.value; if (fav > tot) { fav = tot; fs.value = tot; } host.querySelector('#apr-prob-f').textContent = fav; pinta(); });
    ts.addEventListener('input', function () { tot = +ts.value; if (fav > tot) fav = tot; fs.max = tot; host.querySelector('#apr-prob-t').textContent = tot; host.querySelector('#apr-prob-f').textContent = fav; pinta(); });
    pinta();
  }
  APRENDER.registar('mat9-probabilidades', {
    curso: CURSO, titulo: 'Probabilidades: a sorte', subtitulo: 'Lei de Laplace',
    icone: 'ph-chart-pie-slice', cor: '#5e9676', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Vais ganhar a rifa?', html: '<p>Compras <b>1 rifa</b> e foram vendidas <b>100</b>. A tua hipótese de ganhar é <b>1 em 100</b> — pequena, mas existe.</p><p>A <b>probabilidade</b> é só isso: medir a hipótese de algo acontecer.</p>' },
      { tipo: 'texto', titulo: 'De 0 a 100%', html: '<p>A probabilidade vai de <b>0</b> (impossível — sair um 7 num dado normal) a <b>1</b> ou <b>100%</b> (certo — o sol nascer amanhã). Tudo o resto fica pelo meio.</p>' },
      { tipo: 'interativo', titulo: 'Pinta a roleta 🎯', render: probInterativa },
      { tipo: 'texto', titulo: 'A conta (Lei de Laplace)', html: '<p>Quando tudo tem a mesma hipótese: <b>P = casos que ganham ÷ casos possíveis</b>.</p><p>Num dado, P(sair par) = 3 ÷ 6 = 1/2, porque há 3 pares {2,4,6} em 6 números.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Uma probabilidade de 0 quer dizer…', opcoes: ['impossível', 'certo', 'metade', '100%'], correta: 0, feedback: '0 = <b>impossível</b>. 1 (ou 100%) = certo. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Num dado, qual a hipótese de sair o 5?', opcoes: ['1/6', '5/6', '1/2', '5'], correta: 0, feedback: '1 caso (o 5) em 6 possíveis → <b>1/6</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Tens 2 bolas verdes e 2 vermelhas. Tirar uma verde é…', opcoes: ['1/2', '1/4', '2', '1/3'], correta: 0, feedback: '2 verdes em 4 bolas = 2/4 = <b>1/2</b>. 👍' }
    ],
    fecho: 'Probabilidade = casos que ganham ÷ casos possíveis. Vai de 0 (impossível) a 1 (certo).'
  });

  /* ── CAP 6 · ESTATÍSTICA — as notas da turma ── */
  function mediaInterativa(host) {
    var vals = [2, 4, 6];
    function pinta() {
      var soma = vals[0] + vals[1] + vals[2], media = soma / 3, W = 200, H = 110, bw = 40, gap = 14, maxv = 10;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:220px">';
      vals.forEach(function (v, i) { var bh = v / maxv * 80, x = 20 + i * (bw + gap); s += '<rect x="' + x + '" y="' + (95 - bh) + '" width="' + bw + '" height="' + bh + '" rx="4" fill="#5a7fa8"/><text x="' + (x + bw / 2) + '" y="108" font-size="11" text-anchor="middle" fill="#444">' + v + '</text>'; });
      var my = 95 - (media / maxv * 80);
      s += '<line x1="10" y1="' + my + '" x2="' + (W - 10) + '" y2="' + my + '" stroke="#c4796e" stroke-width="2" stroke-dasharray="4 3"/><text x="' + (W - 8) + '" y="' + (my - 3) + '" font-size="10" text-anchor="end" fill="#c4796e">média ' + media.toFixed(1) + '</text></svg>';
      host.querySelector('#apr-med').innerHTML = s;
      host.querySelector('#apr-med-info').innerHTML = 'Notas ' + vals.join(', ') + ' → média <b>' + media.toFixed(1) + '</b> (a linha tracejada).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Estas são 3 notas. Muda-as e vê a média subir e descer. 📊</p>'
      + '<div id="apr-med" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>nota 1: <b id="apr-med-1">2</b></span><input type="range" min="0" max="10" value="2" class="apr-slider" id="apr-med-s1"></div>'
      + '<div class="apr-slider-row"><span>nota 2: <b id="apr-med-2">4</b></span><input type="range" min="0" max="10" value="4" class="apr-slider" id="apr-med-s2"></div>'
      + '<div class="apr-slider-row"><span>nota 3: <b id="apr-med-3">6</b></span><input type="range" min="0" max="10" value="6" class="apr-slider" id="apr-med-s3"></div>'
      + '<p class="apr-prose" id="apr-med-info" style="text-align:center"></p>';
    [1, 2, 3].forEach(function (i) { host.querySelector('#apr-med-s' + i).addEventListener('input', function () { vals[i - 1] = +this.value; host.querySelector('#apr-med-' + i).textContent = vals[i - 1]; pinta(); }); });
    pinta();
  }
  APRENDER.registar('mat9-estatistica', {
    curso: CURSO, titulo: 'Média, moda e mediana', subtitulo: 'Estatística',
    icone: 'ph-chart-bar', cor: '#7a5a8a', praticar: pratLink(6),
    blocos: [
      { tipo: 'texto', titulo: 'A tua média do período', html: '<p>No fim do período, somam-se as tuas notas e divide-se pelo número de testes. Esse «número que resume tudo» é a <b>média</b>.</p>' },
      { tipo: 'interativo', titulo: 'Mexe nas notas 📊', render: mediaInterativa },
      { tipo: 'texto', titulo: 'Três formas de resumir', html: '<p><b>Média</b>: soma tudo e divide (o «valor justo»). <b>Moda</b>: o que <b>mais se repete</b> (a nota que mais gente teve). <b>Mediana</b>: o valor do <b>meio</b>, depois de pores tudo por ordem.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Tens 8, 10 e 12. A média é…', opcoes: ['10', '12', '8', '30'], correta: 0, feedback: '(8+10+12) ÷ 3 = 30 ÷ 3 = <b>10</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Em 3, 5, 5, 7, 8, a moda é…', opcoes: ['5', '7', '8', '3'], correta: 0, feedback: 'A <b>moda</b> é o que mais se repete: o 5 (aparece 2 vezes). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A mediana é o valor que fica…', opcoes: ['no meio (depois de ordenar)', 'mais alto', 'mais baixo', 'que mais se repete'], correta: 0, feedback: 'Mediana = o do <b>meio</b>, depois de ordenares os valores. 👍' }
    ],
    fecho: 'Média = soma ÷ quantidade. Moda = o mais repetido. Mediana = o do meio.'
  });

})();
