/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-mat11.js — Explicadores lúdicos do 11.º ano (Matemática A)
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Matemática · 11.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/mat11\//.test(window.location.pathname)) ? '' : 'mat11/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · TRIGONOMETRIA — a roda gigante ── */
  function rodaInterativa(host) {
    var ang = 45;
    function pinta() {
      var r = ang * Math.PI / 180, cx = 75, cy = 75, R = 55;
      var x = cx + R * Math.cos(r), y = cy - R * Math.sin(r);
      var s = '<svg viewBox="0 0 150 150" style="width:100%;max-width:160px">';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#ddd" stroke-width="2"/>';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#5a7fa8" stroke-width="2"/>';
      s += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="6" fill="#c4796e"/></svg>';
      host.querySelector('#apr-roda').innerHTML = s;
      host.querySelector('#apr-roda-info').innerHTML = 'Posição a <b>' + ang + '°</b>: altura (seno) ≈ <b>' + Math.sin(r).toFixed(2) + '</b>, lado (cosseno) ≈ <b>' + Math.cos(r).toFixed(2) + '</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Roda a cadeira da roda gigante e vê a altura (seno) variar. 🎡</p>'
      + '<div id="apr-roda" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>ângulo = <b id="apr-roda-v">45</b>°</span><input type="range" min="0" max="360" value="45" class="apr-slider" id="apr-roda-s"></div>'
      + '<p class="apr-prose" id="apr-roda-info" style="text-align:center"></p>';
    host.querySelector('#apr-roda-s').addEventListener('input', function () { ang = +this.value; host.querySelector('#apr-roda-v').textContent = ang; pinta(); });
    pinta();
  }
  APRENDER.registar('mat11-trigonometria', {
    curso: CURSO, titulo: 'Trigonometria na roda gigante', subtitulo: 'Funções trigonométricas',
    icone: 'ph-circle-dashed', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Pensa numa roda gigante', html: '<p>Estás numa cadeira da roda gigante. À medida que ela <b>roda</b>, a tua <b>altura</b> sobe e desce, sobe e desce… sempre a repetir. Isso é uma função <b>periódica</b>.</p><p>O seno faz exatamente isto.</p>' },
      { tipo: 'interativo', titulo: 'Roda a cadeira 🎡', render: rodaInterativa },
      { tipo: 'texto', titulo: 'Seno e cosseno no círculo', html: '<p>Num círculo de raio 1: o <b>seno</b> do ângulo é a <b>altura</b> do ponto, e o <b>cosseno</b> é o quanto andou para o <b>lado</b>. Por isso variam entre −1 e 1.</p>' },
      { tipo: 'texto', titulo: 'Radianos', html: '<p>Em vez de graus, usa-se muitas vezes <b>radianos</b>. Uma volta completa (360°) são <b>2π radianos</b>. É só outra unidade para medir o mesmo ângulo.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Uma função que repete sempre o mesmo padrão é…', opcoes: ['periódica', 'linear', 'constante', 'crescente'], correta: 0, feedback: 'Repete-se → <b>periódica</b> (como a roda gigante). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O seno varia entre…', opcoes: ['−1 e 1', '0 e 100', '−∞ e ∞', '0 e 360'], correta: 0, feedback: 'No círculo de raio 1, a altura vai de <b>−1 a 1</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Uma volta completa são…', opcoes: ['2π radianos', 'π radianos', '90 radianos', '1 radiano'], correta: 0, feedback: '360° = <b>2π radianos</b>. 👍' }
    ],
    fecho: 'Seno = altura no círculo; varia entre −1 e 1 e repete-se (periódica). Volta = 2π rad.'
  });

  /* ── CAP 2 · GEOMETRIA NO ESPAÇO — coordenadas 3D ── */
  APRENDER.registar('mat11-espaco', {
    curso: CURSO, titulo: 'Geometria no espaço', subtitulo: 'Planos, retas e vetores 3D',
    icone: 'ph-cube', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Encontrar um sítio na sala', html: '<p>Para marcar um ponto no chão, precisas de 2 números (lado e fundo). Mas para apontar uma <b>lâmpada no teto</b>, precisas de um 3.º: a <b>altura</b>. No espaço, cada ponto tem <b>3 coordenadas (x, y, z)</b>.</p>' },
      { tipo: 'texto', titulo: 'Vetores: setas com direção', html: '<p>Um <b>vetor</b> é uma seta: tem <b>tamanho</b> e <b>direção</b>. Serve para descrever um movimento — «anda 3 para a frente, 2 para o lado, 1 para cima».</p>' },
      { tipo: 'texto', titulo: 'Planos e retas', html: '<p>Uma <b>reta</b> é uma direção infinita (como um fio esticado). Um <b>plano</b> é uma superfície infinita e lisa (como uma parede sem fim). No espaço, descrevem-se com equações usando vetores.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · No espaço, cada ponto precisa de…', opcoes: ['3 coordenadas (x,y,z)', '2 coordenadas', '1 número', '4 números'], correta: 0, feedback: 'Espaço = 3D → <b>(x, y, z)</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A 3.ª coordenada (z) costuma ser a…', opcoes: ['altura', 'largura', 'cor', 'velocidade'], correta: 0, feedback: 'O z é a <b>altura</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Um vetor tem…', opcoes: ['tamanho e direção', 'só um número', 'só cor', 'só posição'], correta: 0, feedback: 'Vetor = seta com <b>tamanho e direção</b>. 👍' }
    ],
    fecho: 'No espaço cada ponto tem (x, y, z). Vetor = seta com tamanho e direção.'
  });

  /* ── CAP 3 · SUCESSÕES — juros e poupança ── */
  function sucessaoInterativa(host) {
    var passo = 50;
    function pinta() {
      var termos = [];
      for (var i = 0; i < 5; i++) termos.push(100 + i * passo);
      host.querySelector('#apr-suc').innerHTML =
        '<div style="display:flex;justify-content:center;gap:.4rem;flex-wrap:wrap;align-items:center">'
        + termos.map(function (t, i) { return '<div style="background:' + (i === 4 ? '#5e9676' : '#eaf3d8') + ';color:' + (i === 4 ? '#fff' : '#4e602c') + ';border-radius:8px;padding:.4rem .6rem;font-weight:800">' + t + '€</div>'; }).join('<span>→</span>')
        + '</div>';
      host.querySelector('#apr-suc-info').innerHTML = 'Começas com 100€ e juntas <b>' + passo + '€</b> por mês. No 5.º mês tens <b>' + termos[4] + '€</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Poupas todos os meses. Muda quanto juntas e vê crescer. 💰</p>'
      + '<div id="apr-suc"></div>'
      + '<div class="apr-slider-row"><span>poupas por mês = <b id="apr-suc-v">50</b>€</span><input type="range" min="10" max="100" step="10" value="50" class="apr-slider" id="apr-suc-s"></div>'
      + '<p class="apr-prose" id="apr-suc-info" style="text-align:center"></p>';
    host.querySelector('#apr-suc-s').addEventListener('input', function () { passo = +this.value; host.querySelector('#apr-suc-v').textContent = passo; pinta(); });
    pinta();
  }
  APRENDER.registar('mat11-sucessoes', {
    curso: CURSO, titulo: 'Sucessões: poupar mês a mês', subtitulo: 'Sucessões',
    icone: 'ph-list-numbers', cor: '#4d8f87', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'O mealheiro', html: '<p>Pões 50€ no mealheiro todos os meses. Mês 1: 50€, mês 2: 100€, mês 3: 150€… Esta lista ordenada de valores é uma <b>sucessão</b>.</p>' },
      { tipo: 'interativo', titulo: 'Vê a poupança crescer 💰', render: sucessaoInterativa },
      { tipo: 'texto', titulo: 'Aritmética vs geométrica', html: '<p>Se <b>somas sempre o mesmo</b> (50€/mês) → sucessão <b>aritmética</b>. Se <b>multiplicas sempre pelo mesmo</b> (ex.: o dinheiro rende 2% e é multiplicado) → <b>geométrica</b>.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Uma sucessão é…', opcoes: ['uma lista ordenada de números', 'um só número', 'um gráfico', 'uma equação'], correta: 0, feedback: 'Sucessão = lista <b>ordenada</b> de números (termo 1, termo 2…). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Somar sempre o mesmo torna a sucessão…', opcoes: ['aritmética', 'geométrica', 'aleatória', 'constante'], correta: 0, feedback: 'Somar o mesmo → <b>aritmética</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · 100, 150, 200… o próximo termo é…', opcoes: ['250', '300', '200', '350'], correta: 0, feedback: 'Soma +50: 200 + 50 = <b>250</b>. 👍' }
    ],
    fecho: 'Sucessão = lista ordenada. Somar sempre o mesmo = aritmética; multiplicar = geométrica.'
  });

  /* ── CAP 4 · LIMITES — aproximar-se sem chegar ── */
  function limiteInterativa(host) {
    var passo = 1;
    function pinta() {
      var valor = 2 - 1 / Math.pow(2, passo);
      host.querySelector('#apr-lim').innerHTML =
        '<div style="text-align:center;font-size:1.4rem;font-weight:800;color:#5e9676">' + valor.toFixed(4) + '</div>'
        + '<div style="width:100%;max-width:240px;height:24px;background:#eee;border-radius:6px;overflow:hidden;margin:.5rem auto"><div style="width:' + (valor / 2 * 100) + '%;height:100%;background:#5e9676;transition:width .2s"></div></div>';
      host.querySelector('#apr-lim-info').innerHTML = 'Passo ' + passo + ': está a <b>' + (2 - valor).toFixed(4) + '</b> de chegar a 2 — cada vez mais perto, mas <b>nunca chega</b>.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Anda metade do caminho até 2, depois metade do que falta… 🐢</p>'
      + '<div id="apr-lim"></div>'
      + '<div class="apr-slider-row"><span>passo = <b id="apr-lim-v">1</b></span><input type="range" min="1" max="12" value="1" class="apr-slider" id="apr-lim-s"></div>'
      + '<p class="apr-prose" id="apr-lim-info" style="text-align:center"></p>';
    host.querySelector('#apr-lim-s').addEventListener('input', function () { passo = +this.value; host.querySelector('#apr-lim-v').textContent = passo; pinta(); });
    pinta();
  }
  APRENDER.registar('mat11-limites', {
    curso: CURSO, titulo: 'Limites: chegar perto', subtitulo: 'Limites e continuidade',
    icone: 'ph-arrow-line-right', cor: '#4a8e9e', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'A tartaruga que nunca chega', html: '<p>Andas metade do caminho até à parede. Depois metade do que falta. Depois metade outra vez… Aproximas-te <b>cada vez mais</b>, mas tecnicamente <b>nunca tocas</b> a parede.</p><p>O valor a que te aproximas é o <b>limite</b>.</p>' },
      { tipo: 'interativo', titulo: 'Aproxima-te 🐢', render: limiteInterativa },
      { tipo: 'texto', titulo: 'Para que serve', html: '<p>O limite diz para onde uma função <b>tende</b> quando o x se aproxima de um valor — mesmo que ela não esteja definida nesse ponto exato. É a base de tudo o que vem a seguir (derivadas).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O limite é o valor a que algo…', opcoes: ['se aproxima', 'foge', 'salta', 'multiplica'], correta: 0, feedback: 'Limite = o valor a que se <b>aproxima</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · «Metade, metade, metade…» até 2 aproxima-se de…', opcoes: ['2', '1', '0', 'infinito'], correta: 0, feedback: 'Aproxima-se de <b>2</b> (sem nunca passar). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · O limite serve de base para…', opcoes: ['as derivadas', 'as frações', 'os primos', 'os ângulos'], correta: 0, feedback: 'As <b>derivadas</b> definem-se com limites. 👍' }
    ],
    fecho: 'Limite = o valor a que uma função se aproxima (mesmo sem chegar). Base das derivadas.'
  });

  /* ── CAP 5 · DERIVADAS — velocidade num instante ── */
  function derivadaInterativa(host) {
    var t = 2;
    function pinta() {
      var vel = 2 * t; // posição = t², velocidade = 2t
      host.querySelector('#apr-der').innerHTML =
        '<div style="text-align:center;font-size:1.05rem">No instante <b>' + t + 's</b>:<br>'
        + '<span style="font-size:1.5rem">🚗</span> velocidade = <b style="color:#5e9676">' + vel + ' m/s</b></div>';
      host.querySelector('#apr-der-info').innerHTML = 'A derivada de t² é 2t. Quanto mais tempo passa, <b>mais rápido</b> o carro vai.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Um carro acelera. Vê a velocidade exata em cada instante. 🚗</p>'
      + '<div id="apr-der"></div>'
      + '<div class="apr-slider-row"><span>instante = <b id="apr-der-v">2</b>s</span><input type="range" min="0" max="8" value="2" class="apr-slider" id="apr-der-s"></div>'
      + '<p class="apr-prose" id="apr-der-info" style="text-align:center"></p>';
    host.querySelector('#apr-der-s').addEventListener('input', function () { t = +this.value; host.querySelector('#apr-der-v').textContent = t; pinta(); });
    pinta();
  }
  APRENDER.registar('mat11-derivadas', {
    curso: CURSO, titulo: 'Derivadas: a velocidade', subtitulo: 'Derivadas',
    icone: 'ph-speedometer', cor: '#7a5a8a', praticar: pratLink(5),
    blocos: [
      { tipo: 'texto', titulo: 'O velocímetro do carro', html: '<p>O velocímetro mostra a tua velocidade <b>neste exato instante</b> — não a média da viagem, mas <b>agora</b>. A <b>derivada</b> é precisamente isso: a taxa de variação <b>num instante</b>.</p>' },
      { tipo: 'interativo', titulo: 'Vê a velocidade 🚗', render: derivadaInterativa },
      { tipo: 'texto', titulo: 'Inclinação da curva', html: '<p>No gráfico, a derivada é a <b>inclinação</b> da curva naquele ponto. Curva a subir a pique → derivada grande. Curva plana → derivada zero (parado, ou no topo).</p>' },
      { tipo: 'texto', titulo: 'Máximos e mínimos', html: '<p>Onde a derivada é <b>zero</b>, a função está «plana»: é um <b>máximo</b> (topo) ou <b>mínimo</b> (fundo). Por isso as derivadas servem para <b>otimizar</b> — achar o melhor valor.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A derivada é como o…', opcoes: ['velocímetro (taxa num instante)', 'mapa', 'travão', 'depósito'], correta: 0, feedback: 'Derivada = taxa de variação <b>num instante</b> (velocímetro). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · No gráfico, a derivada é a…', opcoes: ['inclinação da curva', 'altura', 'cor', 'largura'], correta: 0, feedback: 'Derivada = <b>inclinação</b> da curva nesse ponto. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Onde a derivada é zero, há um…', opcoes: ['máximo ou mínimo', 'salto', 'erro', 'infinito'], correta: 0, feedback: 'Derivada zero → ponto «plano» → <b>máximo ou mínimo</b>. 👍' }
    ],
    fecho: 'Derivada = velocidade num instante = inclinação da curva. Zero → máximo ou mínimo.'
  });

  /* ── CAP 6 · PROBABILIDADES E COMBINATÓRIA — contar hipóteses ── */
  APRENDER.registar('mat11-combinatoria', {
    curso: CURSO, titulo: 'Contar hipóteses', subtitulo: 'Probabilidades e combinatória',
    icone: 'ph-shuffle', cor: '#4a9e72', praticar: pratLink(6),
    blocos: [
      { tipo: 'texto', titulo: 'Quantos conjuntos podes fazer?', html: '<p>Tens 3 t-shirts e 2 calças. Quantos conjuntos diferentes? Para <b>cada</b> t-shirt podes escolher <b>cada</b> calça: 3 × 2 = <b>6 conjuntos</b>. Isto é o <b>princípio da multiplicação</b>.</p>' },
      { tipo: 'texto', titulo: 'Ordem importa? (arranjos vs combinações)', html: '<p>Num <b>pódio</b> (1.º, 2.º, 3.º) a ordem <b>importa</b> → arranjos. Numa <b>equipa</b> de 3 pessoas, a ordem <b>não importa</b> (são os mesmos 3) → combinações.</p>' },
      { tipo: 'texto', titulo: 'Fatorial', html: '<p>De quantas formas podes pôr 3 livros em fila? 3 × 2 × 1 = 6. Isto chama-se <b>3 fatorial (3!)</b>. É contar todas as ordens possíveis.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · 3 t-shirts × 2 calças = … conjuntos', opcoes: ['6', '5', '3', '2'], correta: 0, feedback: '3 × 2 = <b>6</b> (princípio da multiplicação). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Num pódio (1.º, 2.º, 3.º), a ordem…', opcoes: ['importa', 'não importa', 'é igual', 'desaparece'], correta: 0, feedback: 'No pódio a ordem <b>importa</b> (são arranjos). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Quanto é 3! (3 fatorial)?', opcoes: ['6', '3', '9', '1'], correta: 0, feedback: '3! = 3 × 2 × 1 = <b>6</b>. 👍' }
    ],
    fecho: 'Multiplica as escolhas. Ordem importa = arranjos; não importa = combinações. n! = todas as ordens.'
  });

})();
