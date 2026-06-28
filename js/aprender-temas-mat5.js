/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat5.js — Explicadores lúdicos do 5.º ano (Matemática)
   Estilo: explicação muito simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 5.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat5\//.test(window.location.pathname)) ? '' : 'mat5/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · NÚMEROS NATURAIS — valor de posição ── */
  function posicaoInterativa(host) {
    var c = 3, d = 4, u = 5;
    function pinta() {
      var n = c * 100 + d * 10 + u;
      host.querySelector('#apr-pos').innerHTML =
        '<div style="display:flex;justify-content:center;gap:.5rem;font-family:JetBrains Mono,monospace">'
        + '<div style="text-align:center"><div style="background:#cfe3f0;border-radius:8px;padding:.5rem 1rem;font-size:1.6rem;font-weight:800">' + c + '</div><div style="font-size:.7rem;color:#666;margin-top:.2rem">centenas<br>(' + (c * 100) + ')</div></div>'
        + '<div style="text-align:center"><div style="background:#dff0e6;border-radius:8px;padding:.5rem 1rem;font-size:1.6rem;font-weight:800">' + d + '</div><div style="font-size:.7rem;color:#666;margin-top:.2rem">dezenas<br>(' + (d * 10) + ')</div></div>'
        + '<div style="text-align:center"><div style="background:#fdeef0;border-radius:8px;padding:.5rem 1rem;font-size:1.6rem;font-weight:800">' + u + '</div><div style="font-size:.7rem;color:#666;margin-top:.2rem">unidades<br>(' + u + ')</div></div></div>';
      host.querySelector('#apr-pos-info').innerHTML = 'O número é <b style="font-size:1.3em">' + n + '</b> = ' + (c * 100) + ' + ' + (d * 10) + ' + ' + u + '.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Mexe nos algarismos e vê quanto vale cada um conforme o lugar onde está. 🔢</p>'
      + '<div id="apr-pos"></div>'
      + '<div class="apr-slider-row"><span>centenas <b id="apr-pos-c">3</b></span><input type="range" min="0" max="9" value="3" class="apr-slider" id="apr-pos-sc"></div>'
      + '<div class="apr-slider-row"><span>dezenas <b id="apr-pos-d">4</b></span><input type="range" min="0" max="9" value="4" class="apr-slider" id="apr-pos-sd"></div>'
      + '<div class="apr-slider-row"><span>unidades <b id="apr-pos-u">5</b></span><input type="range" min="0" max="9" value="5" class="apr-slider" id="apr-pos-su"></div>'
      + '<p class="apr-prose" id="apr-pos-info" style="text-align:center"></p>';
    host.querySelector('#apr-pos-sc').addEventListener('input', function () { c = +this.value; host.querySelector('#apr-pos-c').textContent = c; pinta(); });
    host.querySelector('#apr-pos-sd').addEventListener('input', function () { d = +this.value; host.querySelector('#apr-pos-d').textContent = d; pinta(); });
    host.querySelector('#apr-pos-su').addEventListener('input', function () { u = +this.value; host.querySelector('#apr-pos-u').textContent = u; pinta(); });
    pinta();
  }
  APRENDER.registar('mat5-naturais', {
    curso: CURSO, titulo: 'O valor de cada algarismo', subtitulo: 'Números naturais',
    icone: 'ph-list-numbers', cor: '#4a9e6e', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'O lugar muda tudo', html: '<p>Imagina o teu lugar numa fila. Se estás à frente ou atrás, muda tudo!</p><p>Com os algarismos é igual: no número <b>345</b>, o <b>3</b> não vale 3 — está no lugar das centenas, por isso vale <b>300</b>.</p>' },
      { tipo: 'interativo', titulo: 'Constrói o número 🔢', render: posicaoInterativa },
      { tipo: 'texto', titulo: 'Ler números grandes', html: '<p>Para ler números grandes, agrupam-se os algarismos de <b>3 em 3</b>, da direita para a esquerda: <b>1 234</b> = «mil duzentos e trinta e quatro».</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · No número 345, quanto vale o 3?', opcoes: ['300', '3', '30', '345'], correta: 0, feedback: 'O 3 está nas <b>centenas</b> → vale <b>300</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · No número 72, quanto vale o 7?', opcoes: ['70', '7', '700', '72'], correta: 0, feedback: 'O 7 está nas <b>dezenas</b> → vale <b>70</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Que número é «4 centenas + 2 unidades»?', opcoes: ['402', '420', '42', '4002'], correta: 0, feedback: '4 centenas (400) + 0 dezenas + 2 unidades = <b>402</b>. 👍' }
    ],
    fecho: 'O valor de um algarismo depende do lugar: unidades, dezenas, centenas…'
  });

  /* ── CAP 2 · FRAÇÕES — a pizza ── */
  function fracaoBarra(host) {
    var p = 1, t = 4;
    function pinta() {
      var W = 280, h = 46, gap = 3, w = (W - (t - 1) * gap) / t, s = '<svg viewBox="0 0 ' + W + ' ' + h + '" style="width:100%;max-width:280px">';
      for (var i = 0; i < t; i++) s += '<rect x="' + (i * (w + gap)) + '" y="0" width="' + w + '" height="' + h + '" rx="5" fill="' + (i < p ? '#a06535' : '#f0e6dc') + '" stroke="#7a4a22" stroke-width="1.2"/>';
      s += '</svg>';
      host.querySelector('#apr-fr').innerHTML = s;
      host.querySelector('#apr-fr-info').innerHTML = 'Comeste <b style="font-size:1.3em">' + p + '/' + t + '</b> (' + Math.round(p / t * 100) + '%).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Escolhe quantos pedaços comes e em quantos a barra está dividida. 🍫</p>'
      + '<div id="apr-fr" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>comes <b id="apr-fr-p">1</b></span><input type="range" min="0" max="8" value="1" class="apr-slider" id="apr-fr-sp"></div>'
      + '<div class="apr-slider-row"><span>barra com <b id="apr-fr-t">4</b></span><input type="range" min="2" max="8" value="4" class="apr-slider" id="apr-fr-st"></div>'
      + '<p class="apr-prose" id="apr-fr-info" style="text-align:center"></p>';
    var sp = host.querySelector('#apr-fr-sp'), st = host.querySelector('#apr-fr-st');
    sp.addEventListener('input', function () { p = +sp.value; if (p > t) { p = t; sp.value = t; } host.querySelector('#apr-fr-p').textContent = p; pinta(); });
    st.addEventListener('input', function () { t = +st.value; if (p > t) p = t; sp.max = t; host.querySelector('#apr-fr-t').textContent = t; host.querySelector('#apr-fr-p').textContent = p; pinta(); });
    pinta();
  }
  APRENDER.registar('mat5-fracoes', {
    curso: CURSO, titulo: 'Frações são pedaços', subtitulo: 'Frações',
    icone: 'ph-chart-pie-slice', cor: '#6a9e4a', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Pensa numa pizza', html: '<p>Cortas uma pizza em <b>4 fatias iguais</b> e comes <b>1</b>. Comeste <b>1/4</b> (uma fatia de quatro).</p><p>É isso uma fração: uma <b>parte de um todo</b>.</p>' },
      { tipo: 'texto', titulo: 'Cima e baixo', html: '<p>O número de <b>baixo</b> (denominador) diz em quantas fatias <b>iguais</b> cortaste. O de <b>cima</b> (numerador) diz quantas comeste.</p>' },
      { tipo: 'interativo', titulo: 'A barra de chocolate 🍫', render: fracaoBarra },
      { tipo: 'texto', titulo: 'O mesmo bocado, outro nome', html: '<p><b>1/2</b> da pizza é o mesmo que <b>2/4</b> ou <b>4/8</b> — são o mesmo bocado, escrito de formas diferentes. Chamam-se <b>equivalentes</b>.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Cortaste a pizza em 4 e comeste 3. Comeste…', opcoes: ['3/4', '4/3', '1/4', '3/3'], correta: 0, feedback: '3 fatias de 4 = <b>3/4</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Na fração 2/5, o «em quantas fatias» é…', opcoes: ['5', '2', '7', '10'], correta: 0, feedback: 'O número de baixo (5) diz em quantas fatias está cortado. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Qual destas é o mesmo bocado que 1/2?', opcoes: ['2/4', '1/4', '2/3', '3/4'], correta: 0, feedback: '2/4 = 1/2 (metade). São equivalentes. 👍' }
    ],
    fecho: 'Baixo = em quantas fatias; cima = quantas tens. 1/2 = 2/4 (o mesmo bocado).'
  });

  /* ── CAP 3 · DECIMAIS E PERCENTAGENS — o dinheiro / saldos ── */
  function percentInterativa(host) {
    var pc = 50;
    function pinta() {
      host.querySelector('#apr-pc').innerHTML =
        '<div style="width:100%;max-width:260px;height:34px;background:#eee;border-radius:8px;overflow:hidden;margin:0 auto"><div style="width:' + pc + '%;height:100%;background:#4a8e9e;transition:width .15s"></div></div>';
      host.querySelector('#apr-pc-info').innerHTML = '<b>' + pc + '%</b> = ' + pc + ' em cada 100 = <b>' + (pc / 100).toString().replace('.', ',') + '</b> (decimal).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Arrasta e vê a barra encher. % é «por cada 100». 📊</p>'
      + '<div id="apr-pc"></div>'
      + '<div class="apr-slider-row"><span><b id="apr-pc-v">50</b>%</span><input type="range" min="0" max="100" value="50" class="apr-slider" id="apr-pc-s"></div>'
      + '<p class="apr-prose" id="apr-pc-info" style="text-align:center"></p>';
    host.querySelector('#apr-pc-s').addEventListener('input', function () { pc = +this.value; host.querySelector('#apr-pc-v').textContent = pc; pinta(); });
    pinta();
  }
  APRENDER.registar('mat5-decimais', {
    curso: CURSO, titulo: 'Decimais e percentagens', subtitulo: 'Decimais e percentagens',
    icone: 'ph-percent', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'O dinheiro tem vírgula', html: '<p>Um gelado custa <b>1,50 €</b>. A vírgula separa os euros (1) dos cêntimos (50). Isso é um <b>número decimal</b>.</p>' },
      { tipo: 'texto', titulo: 'As percentagens das lojas', html: '<p>Numa loja vês «<b>50% de desconto</b>». Quer dizer que pagas <b>metade</b>. Percentagem é «por cada 100»: 50% = 50 em cada 100.</p>' },
      { tipo: 'interativo', titulo: 'Percentagem é por 100 📊', render: percentInterativa },
      { tipo: 'texto', titulo: 'Três roupas do mesmo número', html: '<p>Fração, decimal e percentagem dizem o mesmo: <b>1/2 = 0,5 = 50%</b>. Para passar de % a decimal, divides por 100.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · «50% de desconto» quer dizer pagar…', opcoes: ['metade', 'o dobro', 'tudo', 'nada'], correta: 0, feedback: '50% = metade. Pagas <b>metade</b> do preço. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Em 3,75 €, o que está antes da vírgula são…', opcoes: ['os euros', 'os cêntimos', 'a percentagem', 'nada'], correta: 0, feedback: 'Antes da vírgula = os <b>euros</b> (3); depois = cêntimos (75). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quanto é 25% em decimal?', opcoes: ['0,25', '2,5', '25', '0,025'], correta: 0, feedback: '25 ÷ 100 = <b>0,25</b>. 👍' }
    ],
    fecho: 'Fração, decimal e percentagem dizem o mesmo. 50% = metade = 0,5.'
  });

  /* ── CAP 4 · FIGURAS — os ângulos do relógio ── */
  function anguloInterativa(host) {
    var a = 60;
    function pinta() {
      var cx = 70, cy = 90, r = 60, rad = a * Math.PI / 180;
      var x2 = cx + r * Math.cos(-rad), y2 = cy + r * Math.sin(-rad);
      var s = '<svg viewBox="0 0 150 110" style="width:100%;max-width:160px">';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + (cx + r) + '" y2="' + cy + '" stroke="#666" stroke-width="2"/>';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" stroke="#8a9e4a" stroke-width="2.5"/>';
      s += '<text x="' + (cx + 22) + '" y="' + (cy - 8) + '" font-size="11" fill="#56602c">' + a + '°</text></svg>';
      host.querySelector('#apr-ang').innerHTML = s;
      var tipo = a < 90 ? 'agudo (menor que o cantinho)' : a === 90 ? 'reto (o cantinho certo)' : a < 180 ? 'obtuso (maior que o cantinho)' : 'raso (uma linha reta)';
      host.querySelector('#apr-ang-info').innerHTML = 'Abertura de <b>' + a + '°</b> → é <b>' + tipo + '</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Abre e fecha o ângulo, como os ponteiros de um relógio. 🕐</p>'
      + '<div id="apr-ang" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>abertura <b id="apr-ang-v">60</b>°</span><input type="range" min="10" max="180" value="60" class="apr-slider" id="apr-ang-s"></div>'
      + '<p class="apr-prose" id="apr-ang-info" style="text-align:center"></p>';
    host.querySelector('#apr-ang-s').addEventListener('input', function () { a = +this.value; host.querySelector('#apr-ang-v').textContent = a; pinta(); });
    pinta();
  }
  APRENDER.registar('mat5-figuras', {
    curso: CURSO, titulo: 'Ângulos e figuras', subtitulo: 'Figuras geométricas',
    icone: 'ph-triangle', cor: '#8a9e4a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'Os ponteiros do relógio', html: '<p>Olha para um relógio: os dois ponteiros formam uma <b>abertura</b> entre eles. Essa abertura é um <b>ângulo</b>.</p><p>Mede-se em <b>graus (°)</b>. Uma volta completa tem 360°.</p>' },
      { tipo: 'interativo', titulo: 'Abre o ângulo 🕐', render: anguloInterativa },
      { tipo: 'texto', titulo: 'Os tipos de ângulo', html: '<p>O <b>canto de uma folha</b> é o ângulo <b>reto</b> (90°). Mais fechado que isso é <b>agudo</b>; mais aberto é <b>obtuso</b>; e quando fica uma linha direita é <b>raso</b> (180°).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O canto de uma folha de papel é um ângulo…', opcoes: ['reto', 'agudo', 'obtuso', 'raso'], correta: 0, feedback: 'O cantinho certo = ângulo <b>reto</b> (90°). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um ângulo de 120° é…', opcoes: ['obtuso', 'agudo', 'reto', 'raso'], correta: 0, feedback: 'Maior que 90° (e menor que 180°) → <b>obtuso</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Um ângulo de 40° é…', opcoes: ['agudo', 'obtuso', 'reto', 'raso'], correta: 0, feedback: 'Menos de 90° → <b>agudo</b>. 👍' }
    ],
    fecho: 'Reto = 90° (cantinho); agudo é mais fechado; obtuso é mais aberto.'
  });

  /* ── CAP 5 · SÓLIDOS — as coisas à tua volta ── */
  APRENDER.registar('mat5-solidos', {
    curso: CURSO, titulo: 'Sólidos geométricos', subtitulo: 'Faces, arestas e vértices',
    icone: 'ph-cube', cor: '#4a9e88', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'Olha à tua volta', html: '<p>Um <b>dado</b> é um cubo. Uma <b>caixa de cereais</b> é um paralelepípedo. Uma <b>bola</b> é uma esfera. Uma <b>lata</b> é um cilindro. Um <b>gelado de cone</b> é… um cone! 🍦</p><p>São todos <b>sólidos</b>: ocupam espaço.</p>' },
      { tipo: 'texto', titulo: 'Faces, arestas e vértices', html: '<p>Pega num dado: cada <b>lado plano</b> é uma <b>face</b>; cada <b>linha</b> onde dois lados se encontram é uma <b>aresta</b>; cada <b>bico</b> é um <b>vértice</b>.</p><p>O cubo tem <b>6 faces</b>, <b>12 arestas</b> e <b>8 vértices</b>.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Um dado tem a forma de um…', opcoes: ['cubo', 'cilindro', 'esfera', 'cone'], correta: 0, feedback: 'O dado é um <b>cubo</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O «bico» de um sólido chama-se…', opcoes: ['vértice', 'face', 'aresta', 'lado'], correta: 0, feedback: 'O bico = <b>vértice</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quantas faces tem um cubo?', opcoes: ['6', '8', '12', '4'], correta: 0, feedback: 'Um cubo tem <b>6 faces</b>. 👍' }
    ],
    fecho: 'Face = lado plano; aresta = linha; vértice = bico. Cubo: 6, 12 e 8.'
  });

  /* ── CAP 6 · SEQUÊNCIAS — o padrão ── */
  function sequenciaInterativa(host) {
    var passo = 3, ini = 2;
    function pinta() {
      var termos = [];
      for (var i = 0; i < 5; i++) termos.push(ini + i * passo);
      host.querySelector('#apr-seq').innerHTML =
        '<div style="display:flex;justify-content:center;gap:.4rem;flex-wrap:wrap">'
        + termos.map(function (t, i) { return '<div style="background:' + (i === 4 ? '#7a9e4a' : '#eaf3d8') + ';color:' + (i === 4 ? '#fff' : '#4e602c') + ';border-radius:10px;padding:.5rem .8rem;font-weight:800;font-size:1.1rem">' + t + '</div>'; }).join('<span style="align-self:center">→</span>')
        + '</div>';
      host.querySelector('#apr-seq-info').innerHTML = 'Começa em <b>' + ini + '</b> e soma <b>' + passo + '</b> de cada vez.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Muda o início e o salto e vê o padrão crescer. 🔢</p>'
      + '<div id="apr-seq"></div>'
      + '<div class="apr-slider-row"><span>começa em <b id="apr-seq-i">2</b></span><input type="range" min="0" max="9" value="2" class="apr-slider" id="apr-seq-si"></div>'
      + '<div class="apr-slider-row"><span>salta de <b id="apr-seq-p">3</b></span><input type="range" min="1" max="9" value="3" class="apr-slider" id="apr-seq-sp"></div>'
      + '<p class="apr-prose" id="apr-seq-info" style="text-align:center"></p>';
    host.querySelector('#apr-seq-si').addEventListener('input', function () { ini = +this.value; host.querySelector('#apr-seq-i').textContent = ini; pinta(); });
    host.querySelector('#apr-seq-sp').addEventListener('input', function () { passo = +this.value; host.querySelector('#apr-seq-p').textContent = passo; pinta(); });
    pinta();
  }
  APRENDER.registar('mat5-sequencias', {
    curso: CURSO, titulo: 'Sequências e padrões', subtitulo: 'Sequências',
    icone: 'ph-dots-three-outline', cor: '#7a9e4a', praticar: pratLink(6),
    blocos: [
      { tipo: 'texto', titulo: 'Contar de 2 em 2', html: '<p>Quando contas <b>2, 4, 6, 8…</b> estás a fazer uma <b>sequência</b>: vais somando sempre o mesmo (aqui, 2).</p><p>Descobrir essa regra deixa-te adivinhar o que vem a seguir!</p>' },
      { tipo: 'interativo', titulo: 'Constrói o padrão 🔢', render: sequenciaInterativa },
      { tipo: 'texto', titulo: 'Qual é o salto?', html: '<p>Para descobrir a regra, vê quanto <b>salta</b> de um número para o seguinte. Em 5, 8, 11, 14… o salto é sempre <b>+3</b>.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · 2, 4, 6, 8… qual é o salto?', opcoes: ['+2', '+1', '+4', '×2'], correta: 0, feedback: 'Somas sempre 2 → salto <b>+2</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · 4, 7, 10, 13… qual vem a seguir?', opcoes: ['16', '15', '17', '14'], correta: 0, feedback: 'Salto +3: 13 + 3 = <b>16</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · 10, 20, 30… qual vem a seguir?', opcoes: ['40', '35', '50', '31'], correta: 0, feedback: 'Salto +10: 30 + 10 = <b>40</b>. 👍' }
    ],
    fecho: 'Descobre o salto entre os números — essa é a regra do padrão.'
  });

  /* ── CAP 7 · DADOS — a fruta preferida ── */
  APRENDER.registar('mat5-dados', {
    curso: CURSO, titulo: 'Ler gráficos e tabelas', subtitulo: 'Organização de dados',
    icone: 'ph-chart-bar', cor: '#4a9e72', praticar: pratLink(7),
    blocos: [
      { tipo: 'texto', titulo: 'A fruta preferida da turma', html: '<p>Perguntas a toda a turma a fruta preferida. Para perceber os resultados sem confusão, fazes uma <b>tabela</b> (com os totais) e um <b>gráfico de barras</b> (a barra mais alta vê-se logo!).</p>' },
      { tipo: 'texto', titulo: 'Frequência e moda', html: '<p>A <b>frequência</b> é quantas vezes cada coisa apareceu. A <b>moda</b> é a mais escolhida — a <b>barra mais alta</b> do gráfico.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A barra mais alta do gráfico mostra…', opcoes: ['a mais escolhida (moda)', 'a menos escolhida', 'o total', 'nada'], correta: 0, feedback: 'A barra mais alta = a mais escolhida = a <b>moda</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Maçã: 5, Banana: 8, Uva: 3. A moda é…', opcoes: ['Banana', 'Maçã', 'Uva', 'não há'], correta: 0, feedback: 'A mais escolhida foi Banana (8) → é a <b>moda</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · «Frequência» de uma opção é…', opcoes: ['quantas vezes apareceu', 'a maior', 'a menor', 'a soma de todas'], correta: 0, feedback: 'Frequência = <b>quantas vezes</b> essa opção apareceu. 👍' }
    ],
    fecho: 'Tabela e gráfico organizam os dados; a moda é a barra mais alta (a mais escolhida).'
  });

})();
