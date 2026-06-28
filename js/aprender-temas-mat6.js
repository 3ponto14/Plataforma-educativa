/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat6.js — Explicadores lúdicos do 6.º ano (Matemática)
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 6.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat6\//.test(window.location.pathname)) ? '' : 'mat6/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · DIVISIBILIDADE — repartir em grupos iguais ── */
  function divisivelInterativa(host) {
    var n = 12, g = 3;
    function pinta() {
      var resto = n % g, certos = n - resto;
      var s = '<div style="display:flex;flex-wrap:wrap;gap:.3rem;justify-content:center;max-width:280px;margin:0 auto">';
      for (var i = 0; i < n; i++) {
        var grupo = Math.floor(i / g);
        var dentro = i < certos;
        s += '<span style="font-size:1.4rem">' + (dentro ? ['🔴', '🟢', '🔵', '🟡', '🟣'][grupo % 5] : '⚪') + '</span>';
      }
      s += '</div>';
      host.querySelector('#apr-div').innerHTML = s;
      host.querySelector('#apr-div-info').innerHTML = resto === 0
        ? '<b style="color:#2e9e6a">✓ ' + n + ' é divisível por ' + g + '</b> — sobram 0! (' + (n / g) + ' grupos certinhos)'
        : '<b style="color:#c4796e">✗ ' + n + ' não é divisível por ' + g + '</b> — sobram ' + resto + ' (a cinzento).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Tenta repartir os berlindes em grupos iguais. Sobra algum? 🔴</p>'
      + '<div id="apr-div"></div>'
      + '<div class="apr-slider-row"><span>berlindes = <b id="apr-div-n">12</b></span><input type="range" min="4" max="20" value="12" class="apr-slider" id="apr-div-sn"></div>'
      + '<div class="apr-slider-row"><span>por grupo = <b id="apr-div-g">3</b></span><input type="range" min="2" max="6" value="3" class="apr-slider" id="apr-div-sg"></div>'
      + '<p class="apr-prose" id="apr-div-info" style="text-align:center"></p>';
    host.querySelector('#apr-div-sn').addEventListener('input', function () { n = +this.value; host.querySelector('#apr-div-n').textContent = n; pinta(); });
    host.querySelector('#apr-div-sg').addEventListener('input', function () { g = +this.value; host.querySelector('#apr-div-g').textContent = g; pinta(); });
    pinta();
  }
  APRENDER.registar('mat6-divisibilidade', {
    curso: CURSO, titulo: 'Divisível? Sobra ou não sobra', subtitulo: 'Divisibilidade e primos',
    icone: 'ph-squares-four', cor: '#4a9e6e', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Repartir os rebuçados', html: '<p>Tens 12 rebuçados para dar a 3 amigos, igual para todos. Cada um leva 4 e <b>não sobra nada</b>: dizemos que 12 é <b>divisível por 3</b>.</p><p>Se sobrasse algum, já não era divisível.</p>' },
      { tipo: 'interativo', titulo: 'Tenta repartir 🔴', render: divisivelInterativa },
      { tipo: 'texto', titulo: 'Números primos', html: '<p>Um número <b>primo</b> só se reparte certinho por <b>1 e por ele próprio</b>. O 7, por exemplo: só dá grupos de 1 ou de 7. Os primos são as «peças básicas» dos números.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · 12 rebuçados por 4 amigos: sobra?', opcoes: ['não sobra (divisível)', 'sobra 1', 'sobra 2', 'sobra 3'], correta: 0, feedback: '12 ÷ 4 = 3 certinho → <b>divisível</b>, sobra 0. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um número primo só se divide por…', opcoes: ['1 e por ele próprio', 'todos os números', '2', '0'], correta: 0, feedback: 'Primo = só por <b>1 e por ele próprio</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Qual destes é primo?', opcoes: ['7', '8', '9', '10'], correta: 0, feedback: 'O <b>7</b> só se divide por 1 e por 7 → primo. 👍' }
    ],
    fecho: 'Divisível = reparte sem sobrar. Primo = só se reparte por 1 e por ele próprio.'
  });

  /* ── CAP 2 · FRAÇÕES E POTÊNCIAS — multiplicar repetido ── */
  function potenciaInterativa(host) {
    var base = 2, exp = 3;
    function pinta() {
      var val = Math.pow(base, exp);
      var fatores = [];
      for (var i = 0; i < exp; i++) fatores.push(base);
      host.querySelector('#apr-pot').innerHTML =
        '<div style="text-align:center;font-size:1.5rem;font-weight:800">' + base + '<sup>' + exp + '</sup> = ' + fatores.join(' × ') + ' = <span style="color:#5e9676">' + val + '</span></div>';
      host.querySelector('#apr-pot-info').innerHTML = 'O ' + base + ' multiplica-se por si próprio <b>' + exp + ' vezes</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A potência é só multiplicar o mesmo número várias vezes. Experimenta! 🔢</p>'
      + '<div id="apr-pot"></div>'
      + '<div class="apr-slider-row"><span>base = <b id="apr-pot-b">2</b></span><input type="range" min="2" max="5" value="2" class="apr-slider" id="apr-pot-sb"></div>'
      + '<div class="apr-slider-row"><span>expoente = <b id="apr-pot-e">3</b></span><input type="range" min="1" max="5" value="3" class="apr-slider" id="apr-pot-se"></div>'
      + '<p class="apr-prose" id="apr-pot-info" style="text-align:center"></p>';
    host.querySelector('#apr-pot-sb').addEventListener('input', function () { base = +this.value; host.querySelector('#apr-pot-b').textContent = base; pinta(); });
    host.querySelector('#apr-pot-se').addEventListener('input', function () { exp = +this.value; host.querySelector('#apr-pot-e').textContent = exp; pinta(); });
    pinta();
  }
  APRENDER.registar('mat6-potencias', {
    curso: CURSO, titulo: 'Potências: multiplicar repetido', subtitulo: 'Frações e potências',
    icone: 'ph-superscript', cor: '#6a9e4a', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Escrever menos, dizer o mesmo', html: '<p>Escrever <b>2 × 2 × 2</b> dá trabalho. Os matemáticos inventaram um atalho: <b>2³</b> («dois ao cubo»). O 3 pequenino diz quantas vezes o 2 aparece.</p>' },
      { tipo: 'texto', titulo: 'Base e expoente', html: '<p>Em <b>2³</b>: o <b>2</b> é a <b>base</b> (o número que se repete) e o <b>3</b> é o <b>expoente</b> (quantas vezes). Resultado: 2×2×2 = 8.</p>' },
      { tipo: 'interativo', titulo: 'Constrói a potência 🔢', render: potenciaInterativa },
      { tipo: 'texto', titulo: 'Cuidado!', html: '<p><b>2³ não é 2×3!</b> É 2×2×2 = 8, e não 6. O expoente conta <b>quantas vezes multiplicas</b>, não é uma multiplicação normal.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · 2³ quer dizer…', opcoes: ['2×2×2', '2×3', '3×3', '2+2+2'], correta: 0, feedback: '2³ = <b>2×2×2</b> = 8. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Em 5², a base é…', opcoes: ['5', '2', '25', '10'], correta: 0, feedback: 'A base é o número que se repete: <b>5</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quanto é 3²?', opcoes: ['9', '6', '5', '8'], correta: 0, feedback: '3² = 3×3 = <b>9</b>. 👍' }
    ],
    fecho: 'Potência = multiplicar a base por si própria «expoente» vezes. 2³ = 2×2×2 = 8.'
  });

  /* ── CAP 3 · NÚMEROS RACIONAIS — negativos na reta ── */
  function retaInterativa(host) {
    var x = 0;
    function pinta() {
      var W = 280, cx = W / 2, esc = 22;
      var s = '<svg viewBox="0 0 ' + W + ' 60" style="width:100%;max-width:280px">';
      s += '<line x1="10" y1="30" x2="' + (W - 10) + '" y2="30" stroke="#999" stroke-width="1.5"/>';
      for (var v = -5; v <= 5; v++) { var px = cx + v * esc; s += '<line x1="' + px + '" y1="26" x2="' + px + '" y2="34" stroke="#999"/><text x="' + px + '" y="48" font-size="8" text-anchor="middle" fill="#888">' + v + '</text>'; }
      var dx = cx + x * esc;
      s += '<circle cx="' + dx + '" cy="30" r="7" fill="' + (x < 0 ? '#c4796e' : x > 0 ? '#5e9676' : '#888') + '"/></svg>';
      host.querySelector('#apr-reta').innerHTML = s;
      host.querySelector('#apr-reta-info').innerHTML = x < 0 ? 'O <b>' + x + '</b> está à <b>esquerda</b> do zero (negativo).' : x > 0 ? 'O <b>' + x + '</b> está à <b>direita</b> do zero (positivo).' : 'Estás no <b>zero</b>, no meio.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Arrasta o ponto pela reta. À esquerda do zero, os números são negativos. 🌡️</p>'
      + '<div id="apr-reta" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>número = <b id="apr-reta-v">0</b></span><input type="range" min="-5" max="5" value="0" class="apr-slider" id="apr-reta-s"></div>'
      + '<p class="apr-prose" id="apr-reta-info" style="text-align:center"></p>';
    host.querySelector('#apr-reta-s').addEventListener('input', function () { x = +this.value; host.querySelector('#apr-reta-v').textContent = x; pinta(); });
    pinta();
  }
  APRENDER.registar('mat6-racionais', {
    curso: CURSO, titulo: 'Números negativos', subtitulo: 'Números racionais',
    icone: 'ph-thermometer-simple', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'Já viste no termómetro', html: '<p>No inverno o termómetro marca <b>−3°C</b> (3 graus <b>abaixo de zero</b>). Esse «menos» é um número <b>negativo</b>.</p><p>Também os vês nas contas bancárias (saldo negativo) ou no fundo do mar (abaixo do nível da água).</p>' },
      { tipo: 'interativo', titulo: 'Anda na reta 🌡️', render: retaInterativa },
      { tipo: 'texto', titulo: 'Distância ao zero', html: '<p>O <b>−5</b> e o <b>5</b> estão à mesma distância do zero — 5 passos. Essa distância chama-se <b>valor absoluto</b> e é sempre positiva: |−5| = 5.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «3 graus abaixo de zero» escreve-se…', opcoes: ['−3', '3', '+3', '0'], correta: 0, feedback: 'Abaixo de zero → <b>−3</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Na reta, os negativos ficam…', opcoes: ['à esquerda do zero', 'à direita do zero', 'em cima', 'no zero'], correta: 0, feedback: 'Negativos ficam à <b>esquerda</b> do zero. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quanto é |−7| (distância ao zero)?', opcoes: ['7', '−7', '0', '14'], correta: 0, feedback: 'A distância do −7 ao zero é <b>7</b>. 👍' }
    ],
    fecho: 'Negativos à esquerda do zero. O valor absoluto é a distância ao zero (sempre positiva).'
  });

  /* ── CAP 4 · PERÍMETROS E ÁREAS — a horta ── */
  function areaInterativa(host) {
    var L = 4, A = 3;
    function pinta() {
      var px = 26, W = 180, H = 130, w = L * px, h = A * px;
      if (w > W - 20) w = W - 20; if (h > H - 30) h = H - 30;
      var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:200px">';
      s += '<rect x="10" y="10" width="' + w + '" height="' + h + '" fill="#dff0e6" stroke="#4a9e6e" stroke-width="2"/>';
      s += '<text x="' + (10 + w / 2) + '" y="' + (10 + h / 2 + 4) + '" font-size="13" font-weight="800" text-anchor="middle" fill="#2e6e4a">' + (L * A) + '</text></svg>';
      host.querySelector('#apr-area').innerHTML = s;
      host.querySelector('#apr-area-info').innerHTML = '<b>Área</b> = ' + L + ' × ' + A + ' = <b>' + (L * A) + '</b> quadradinhos. <b>Perímetro</b> = ' + (2 * (L + A)) + ' (a volta toda).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Muda os lados do terreno e vê a área (o «recheio») mudar. 🟩</p>'
      + '<div id="apr-area" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>comprimento = <b id="apr-area-l">4</b></span><input type="range" min="1" max="6" value="4" class="apr-slider" id="apr-area-sl"></div>'
      + '<div class="apr-slider-row"><span>largura = <b id="apr-area-a">3</b></span><input type="range" min="1" max="4" value="3" class="apr-slider" id="apr-area-sa"></div>'
      + '<p class="apr-prose" id="apr-area-info" style="text-align:center"></p>';
    host.querySelector('#apr-area-sl').addEventListener('input', function () { L = +this.value; host.querySelector('#apr-area-l').textContent = L; pinta(); });
    host.querySelector('#apr-area-sa').addEventListener('input', function () { A = +this.value; host.querySelector('#apr-area-a').textContent = A; pinta(); });
    pinta();
  }
  APRENDER.registar('mat6-areas', {
    curso: CURSO, titulo: 'Perímetro e área', subtitulo: 'Perímetros e áreas',
    icone: 'ph-bounding-box', cor: '#8a9e4a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'A vedação e a relva', html: '<p>Imagina um jardim retangular. O <b>perímetro</b> é a <b>vedação à volta</b> (a soma de todos os lados). A <b>área</b> é a <b>relva lá dentro</b> (o espaço todo).</p>' },
      { tipo: 'interativo', titulo: 'Muda o terreno 🟩', render: areaInterativa },
      { tipo: 'texto', titulo: 'As contas', html: '<p>Num retângulo: <b>perímetro = soma dos 4 lados</b>. <b>área = comprimento × largura</b>. A área conta quantos «quadradinhos» cabem dentro.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A «vedação à volta» é o…', opcoes: ['perímetro', 'área', 'volume', 'lado'], correta: 0, feedback: 'A volta = <b>perímetro</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Retângulo 5 × 3. A área é…', opcoes: ['15', '8', '16', '30'], correta: 0, feedback: 'Área = 5 × 3 = <b>15</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quadrado de lado 4. O perímetro é…', opcoes: ['16', '8', '12', '4'], correta: 0, feedback: '4 lados de 4: 4+4+4+4 = <b>16</b>. 👍' }
    ],
    fecho: 'Perímetro = a volta (somar lados). Área = o recheio (comprimento × largura).'
  });

  /* ── CAP 5 · VOLUMES — encher caixas ── */
  APRENDER.registar('mat6-volumes', {
    curso: CURSO, titulo: 'Volume: o que cabe dentro', subtitulo: 'Volumes',
    icone: 'ph-cube', cor: '#4a9e88', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Quantos cubinhos cabem?', html: '<p>O <b>volume</b> é o espaço <b>dentro</b> de um objeto — quanto «cabe» lá. Pensa em encher uma caixa com cubinhos de açúcar: quantos é que lá cabem?</p>' },
      { tipo: 'texto', titulo: 'A conta do paralelepípedo', html: '<p>Numa caixa (paralelepípedo): <b>volume = comprimento × largura × altura</b>. É como contar quantos cubinhos cabem em cada camada e depois multiplicar pelas camadas.</p><p>Ex.: caixa 3 × 2 × 4 → 24 cubinhos.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O volume mede…', opcoes: ['o que cabe dentro', 'a volta', 'o peso', 'a altura só'], correta: 0, feedback: 'Volume = o espaço <b>dentro</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Caixa 2 × 2 × 2. O volume é…', opcoes: ['8', '6', '4', '12'], correta: 0, feedback: '2 × 2 × 2 = <b>8</b> cubinhos. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Caixa 3 × 1 × 4. O volume é…', opcoes: ['12', '8', '7', '24'], correta: 0, feedback: '3 × 1 × 4 = <b>12</b>. 👍' }
    ],
    fecho: 'Volume = o que cabe dentro = comprimento × largura × altura.'
  });

  /* ── CAP 6 · PROPORCIONALIDADE — receitas e preços ── */
  function proporcaoInterativa(host) {
    var pessoas = 2;
    function pinta() {
      var ovos = pessoas * 2, farinha = pessoas * 100;
      host.querySelector('#apr-prop').innerHTML =
        '<div style="text-align:center;font-size:1.05rem">Para <b>' + pessoas + '</b> ' + (pessoas === 1 ? 'pessoa' : 'pessoas') + ':<br>'
        + '<span style="font-size:1.6rem">🥚</span> <b>' + ovos + '</b> ovos &nbsp;·&nbsp; <span style="font-size:1.6rem">🌾</span> <b>' + farinha + '</b> g de farinha</div>';
      host.querySelector('#apr-prop-info').innerHTML = 'O dobro das pessoas → o <b>dobro</b> de tudo. É proporcionalidade direta.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Uma receita para 1 pessoa leva 2 ovos e 100g. Muda o nº de pessoas! 🍰</p>'
      + '<div id="apr-prop"></div>'
      + '<div class="apr-slider-row"><span>pessoas = <b id="apr-prop-p">2</b></span><input type="range" min="1" max="8" value="2" class="apr-slider" id="apr-prop-s"></div>'
      + '<p class="apr-prose" id="apr-prop-info" style="text-align:center"></p>';
    host.querySelector('#apr-prop-s').addEventListener('input', function () { pessoas = +this.value; host.querySelector('#apr-prop-p').textContent = pessoas; pinta(); });
    pinta();
  }
  APRENDER.registar('mat6-proporcionalidade', {
    curso: CURSO, titulo: 'Proporcionalidade direta', subtitulo: 'Proporcionalidade',
    icone: 'ph-scales', cor: '#7a9e4a', praticar: pratLink(6),
    blocos: [
      { tipo: 'texto', titulo: 'A receita do bolo', html: '<p>Uma receita para <b>2 pessoas</b> leva 4 ovos. Para <b>4 pessoas</b> (o dobro) precisas de 8 ovos (o dobro). É <b>proporcionalidade direta</b>: aumenta um, aumenta o outro na mesma medida.</p>' },
      { tipo: 'interativo', titulo: 'Muda as pessoas 🍰', render: proporcaoInterativa },
      { tipo: 'texto', titulo: 'A regra de três simples', html: '<p>Quando 3 valores são conhecidos e falta um, usas a <b>regra de três</b>: «se 2 custam 6€, quanto custam 5?». Multiplicas em cruz e divides.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Receita p/ 2 leva 4 ovos. Para 4 pessoas precisas de…', opcoes: ['8 ovos', '4 ovos', '6 ovos', '2 ovos'], correta: 0, feedback: 'O dobro de pessoas → o dobro de ovos = <b>8</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · 1 caderno custa 2€. Quanto custam 3?', opcoes: ['6€', '5€', '3€', '2€'], correta: 0, feedback: '3 × 2€ = <b>6€</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Na proporcionalidade direta, se um dobra…', opcoes: ['o outro dobra', 'o outro fica igual', 'o outro reduz a metade', 'nada muda'], correta: 0, feedback: 'Direta: dobra um → <b>dobra o outro</b>. 👍' }
    ],
    fecho: 'Proporcionalidade direta: aumenta um, aumenta o outro na mesma medida (o dobro → o dobro).'
  });

  /* ── CAP 7 · DADOS — média simples ── */
  APRENDER.registar('mat6-dados', {
    curso: CURSO, titulo: 'A média', subtitulo: 'Organização de dados',
    icone: 'ph-chart-bar', cor: '#4a9e72', praticar: pratLink(7),
    blocos: [
      { tipo: 'texto', titulo: 'Repartir por igual', html: '<p>Três amigos têm 2€, 4€ e 6€. Se juntarem tudo (12€) e repartirem por igual, ficam com <b>4€ cada</b>. Esse «valor justo» é a <b>média</b>.</p>' },
      { tipo: 'texto', titulo: 'Como se calcula', html: '<p><b>Média = somar tudo ÷ quantidade.</b> No exemplo: (2+4+6) ÷ 3 = 12 ÷ 3 = 4.</p><p>É o número que cada um teria se tudo fosse igual.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Para calcular a média, primeiro…', opcoes: ['somas tudo', 'multiplicas', 'escolhes a maior', 'ordenas'], correta: 0, feedback: 'Somas tudo e depois divides pela quantidade. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Notas 4 e 8. A média é…', opcoes: ['6', '12', '4', '8'], correta: 0, feedback: '(4+8) ÷ 2 = 12 ÷ 2 = <b>6</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · 3, 3 e 6. A média é…', opcoes: ['4', '3', '6', '12'], correta: 0, feedback: '(3+3+6) ÷ 3 = 12 ÷ 3 = <b>4</b>. 👍' }
    ],
    fecho: 'Média = somar tudo ÷ quantidade (o valor justo se tudo fosse igual).'
  });

})();
