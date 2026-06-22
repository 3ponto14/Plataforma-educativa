/* ════════════════════════════════════════════════════════════════
   aprender-temas.js — DADOS dos explicadores (um objeto por tema)
   Depende de aprender.js (APRENDER.registar) e, onde útil, de EduVisual.
   Para acrescentar um tema novo: copiar a estrutura abaixo e registar.
   ════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────────
   TEMA: A Máquina de Funções (Matemática 7.º — Funções)
   Ideia central: uma função é uma MÁQUINA. Metes um número (x), ela faz
   sempre a mesma conta, e sai outro número f(x). A tabela e o gráfico
   são só registos do que a máquina faz.
   ────────────────────────────────────────────────────────────────── */
(function () {
  if (typeof APRENDER === 'undefined') return;

  // —— Widget interativo: a máquina + tabela + gráfico, ao vivo ——
  // O aluno arrasta o cursor do x; máquina "mastiga", tabela e ponto no
  // gráfico atualizam-se em conjunto. f(x) = a·x + b (aqui a=2, b=1).
  function maquinaInterativa(host) {
    var A = 2, B = 1;                 // f(x) = 2x + 1
    var xVal = 1;
    function f(x) { return A * x + B; }
    var registos = {};                // x -> y já "experimentados"

    function grafico() {
      var W = 240, H = 240, pad = 22, cx = W / 2, cy = H / 2, range = 6;
      var u = (cx - pad) / range;
      function X(x) { return cx + x * u; }
      function Y(y) { return cy - y * u; }
      function clampY(v) { return Math.max(pad - 6, Math.min(H - pad + 6, v)); }
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="max-width:240px;width:100%">';
      // grelha
      for (var k = -range; k <= range; k++) {
        if (k === 0) continue;
        s += '<line x1="' + X(k) + '" y1="' + pad + '" x2="' + X(k) + '" y2="' + (H - pad) + '" stroke="#eef" stroke-width="1"/>';
        s += '<line x1="' + pad + '" y1="' + Y(k) + '" x2="' + (W - pad) + '" y2="' + Y(k) + '" stroke="#eef" stroke-width="1"/>';
      }
      // eixos
      s += '<line x1="' + pad + '" y1="' + cy + '" x2="' + (W - pad) + '" y2="' + cy + '" stroke="#999" stroke-width="1.2"/>';
      s += '<line x1="' + cx + '" y1="' + (H - pad) + '" x2="' + cx + '" y2="' + pad + '" stroke="#999" stroke-width="1.2"/>';
      s += '<text x="' + (W - pad) + '" y="' + (cy - 4) + '" font-size="9" fill="#999" text-anchor="end">x</text>';
      s += '<text x="' + (cx + 5) + '" y="' + (pad + 7) + '" font-size="9" fill="#999">y</text>';
      // pontos já experimentados (a reta vai-se "descobrindo")
      Object.keys(registos).forEach(function (kx) {
        var xx = parseFloat(kx), yy = registos[kx];
        if (Math.abs(yy) <= range + 0.5)
          s += '<circle cx="' + X(xx) + '" cy="' + clampY(Y(yy)) + '" r="2.6" fill="#9bb3a8"/>';
      });
      // ponto atual destacado + linhas guia
      var px = X(xVal), py = clampY(Y(f(xVal)));
      if (Math.abs(f(xVal)) <= range + 0.5) {
        s += '<line x1="' + px + '" y1="' + cy + '" x2="' + px + '" y2="' + py + '" stroke="#2f9e63" stroke-width="1" stroke-dasharray="3 2"/>';
        s += '<line x1="' + cx + '" y1="' + py + '" x2="' + px + '" y2="' + py + '" stroke="#2f9e63" stroke-width="1" stroke-dasharray="3 2"/>';
        s += '<circle cx="' + px + '" cy="' + py + '" r="5" fill="#2f9e63" stroke="#fff" stroke-width="1.5"/>';
        s += '<text x="' + (px + 7) + '" y="' + (py - 6) + '" font-size="9.5" font-weight="800" fill="#1f7a49">(' + xVal + ', ' + f(xVal) + ')</text>';
      }
      s += '</svg>';
      return s;
    }

    function tabela() {
      var xs = [-2, -1, 0, 1, 2, 3];
      var head = '', row = '';
      xs.forEach(function (x) {
        var on = (x === xVal), seen = registos.hasOwnProperty(String(x));
        head += '<td class="apr-tab-x' + (on ? ' on' : '') + '">' + x + '</td>';
        row += '<td class="apr-tab-y' + (on ? ' on' : '') + '">' + (on || seen ? f(x) : '?') + '</td>';
      });
      return '<table class="apr-mini-tab"><tr><th>x</th>' + head + '</tr><tr><th>f(x)</th>' + row + '</tr></table>';
    }

    function maquina() {
      return '<div class="apr-maq">' +
        '<div class="apr-maq-in"><span class="apr-maq-lbl">entra</span><span class="apr-maq-num">' + xVal + '</span></div>' +
        '<div class="apr-maq-box"><i class="ph ph-gear apr-maq-gear"></i><span class="apr-maq-rule">× 2 + 1</span></div>' +
        '<div class="apr-maq-out"><span class="apr-maq-lbl">sai</span><span class="apr-maq-num apr-maq-out-num">' + f(xVal) + '</span></div>' +
        '</div>';
    }

    function pintar() {
      host.querySelector('#apr-maq-zone').innerHTML = maquina();
      host.querySelector('#apr-tab-zone').innerHTML = tabela();
      host.querySelector('#apr-graf-zone').innerHTML = grafico();
      host.querySelector('#apr-x-val').textContent = xVal;
    }

    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Arrasta o cursor para escolher o número que <b>entra</b> (o x). Vê a máquina fazer sempre a mesma conta, e repara: a tabela e o gráfico mexem-se ao mesmo tempo. São a mesma coisa! 👇</p>' +
      '<div id="apr-maq-zone"></div>' +
      '<div class="apr-slider-row"><span>x = <b id="apr-x-val">1</b></span>' +
      '<input type="range" min="-2" max="3" step="1" value="1" class="apr-slider" id="apr-x-slider"></div>' +
      '<div class="apr-maq-grid">' +
      '<div><div class="apr-maq-cap">Tabela (o registo)</div><div id="apr-tab-zone"></div></div>' +
      '<div><div class="apr-maq-cap">Gráfico (o mesmo, em pontos)</div><div id="apr-graf-zone"></div></div>' +
      '</div>';

    var slider = host.querySelector('#apr-x-slider');
    slider.addEventListener('input', function () {
      xVal = parseInt(slider.value, 10);
      registos[String(xVal)] = f(xVal);
      pintar();
    });
    registos[String(xVal)] = f(xVal);
    pintar();
  }

  APRENDER.registar('mat7-funcoes-maquina', {
    curso: 'Matemática · 7.º ano',
    titulo: 'A Máquina de Funções',
    subtitulo: 'O que é mesmo uma função?',
    icone: 'ph-function', cor: '#56b6c2',
    praticar: 'mat7/index.html?abrir=praticar&cap=6',
    blocos: [
      {
        tipo: 'texto',
        titulo: 'Imagina uma máquina',
        html: '<p>Uma <b>função</b> é como uma <b>máquina</b>: tu metes um número lá dentro, ' +
          'ela faz <b>sempre a mesma conta</b>, e cospe outro número cá fora.</p>' +
          '<p>O número que <b>entra</b> chama-se <b>objeto</b> (o nosso <b>x</b>). ' +
          'O número que <b>sai</b> chama-se <b>imagem</b> (escreve-se <b>f(x)</b>, lê-se «f de x»).</p>',
        visual: '<div class="apr-maq apr-maq-static">' +
          '<div class="apr-maq-in"><span class="apr-maq-lbl">entra</span><span class="apr-maq-num">x</span></div>' +
          '<div class="apr-maq-box"><i class="ph ph-gear apr-maq-gear"></i><span class="apr-maq-rule">a regra</span></div>' +
          '<div class="apr-maq-out"><span class="apr-maq-lbl">sai</span><span class="apr-maq-num apr-maq-out-num">f(x)</span></div></div>'
      },
      {
        tipo: 'texto',
        titulo: 'A regra desta máquina',
        html: '<p>Vamos usar uma máquina com a regra <b>«multiplica por 2 e soma 1»</b>.</p>' +
          '<p>Em linguagem matemática, escreve-se assim:</p>' +
          '<p class="apr-formula">f(x) = 2x + 1</p>' +
          '<p>Por exemplo, se entrar o <b>3</b>: faz 2×3 = 6, depois 6 + 1 = <b>7</b>. ' +
          'Então <b>f(3) = 7</b>. A imagem do 3 é o 7.</p>'
      },
      {
        tipo: 'interativo',
        titulo: 'Experimenta tu! 🎮',
        render: maquinaInterativa
      },
      {
        tipo: 'texto',
        titulo: 'Os pontos formam uma reta',
        html: '<p>Reparaste? Cada vez que metes um x, fica um <b>ponto</b> no gráfico: ' +
          '(x , f(x)). Se experimentares todos, os pontos ficam <b>alinhados</b> — formam uma <b>reta</b>.</p>' +
          '<p>É por isso que f(x) = 2x + 1 se chama uma <b>função afim</b>: o gráfico é sempre uma reta. ' +
          'A tabela, o gráfico e a fórmula são <b>três formas de ver a mesma máquina</b>.</p>'
      },
      {
        tipo: 'confirma',
        pergunta: 'Na máquina f(x) = 2x + 1, que número <b>sai</b> se entrar o <b>5</b>?',
        opcoes: ['11', '7', '10', '6'],
        correta: 0,
        feedback: 'f(5) = 2×5 + 1 = 10 + 1 = <b>11</b>. Primeiro a multiplicação, depois a soma. 👍'
      }
    ],
    fecho: 'Sempre que vires <b>f(x)</b>, pensa: «é a máquina a trabalhar». Metes um x, sai a imagem. ' +
      'A tabela e o gráfico são só o registo do que ela faz.'
  });
})();
