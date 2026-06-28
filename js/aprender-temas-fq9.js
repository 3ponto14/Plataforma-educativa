/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-fq9.js — Explicadores lúdicos de Físico-Química 9.º ano
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Físico-Química · 9.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/fq9\//.test(window.location.pathname)) ? '' : 'fq9/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · MOVIMENTO E FORÇAS — velocidade ── */
  function velInterativa(host) {
    var v = 60;
    function pinta() {
      var t = 2, d = v * t / 60; // km em 2 min
      host.querySelector('#apr-vel').innerHTML =
        '<div style="text-align:center"><div style="font-size:2.5rem">🚗</div>'
        + '<div style="font-size:1.1rem">A <b>' + v + ' km/h</b>, em 2 minutos andas <b style="color:#5e9676">' + d.toFixed(1) + ' km</b>.</div></div>';
      host.querySelector('#apr-vel-info').innerHTML = 'Velocidade = <b>distância ÷ tempo</b>. Mais velocidade → mais distância no mesmo tempo.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Acelera o carro e vê quanto ele anda em 2 minutos. 🚗</p>'
      + '<div id="apr-vel"></div>'
      + '<div class="apr-slider-row"><span>velocidade = <b id="apr-vel-v">60</b> km/h</span><input type="range" min="0" max="120" step="10" value="60" class="apr-slider" id="apr-vel-s"></div>'
      + '<p class="apr-prose" id="apr-vel-info" style="text-align:center"></p>';
    host.querySelector('#apr-vel-s').addEventListener('input', function () { v = +this.value; host.querySelector('#apr-vel-v').textContent = v; pinta(); });
    pinta();
  }
  APRENDER.registar('fq9-movimento', {
    curso: CURSO, titulo: 'Movimento e velocidade', subtitulo: 'Movimento e forças',
    icone: 'ph-car', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'O velocímetro do carro', html: '<p>O velocímetro marca <b>km/h</b>: quantos km farias <b>se andasses uma hora</b> àquela velocidade. 100 km/h = 100 km em cada hora.</p>' },
      { tipo: 'interativo', titulo: 'Acelera 🚗', render: velInterativa },
      { tipo: 'texto', titulo: 'A conta da velocidade', html: '<p><b>Velocidade = distância ÷ tempo.</b> Se fazes 120 km em 2 horas, a tua velocidade média é 120 ÷ 2 = <b>60 km/h</b>.</p>' },
      { tipo: 'texto', titulo: 'Força muda o movimento', html: '<p>Uma <b>força</b> é um empurrão ou puxão. É o que faz um corpo <b>arrancar, parar ou mudar de direção</b>. Sem força, o que está parado fica parado.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Velocidade calcula-se…', opcoes: ['distância ÷ tempo', 'distância × tempo', 'tempo ÷ distância', 'distância + tempo'], correta: 0, feedback: 'Velocidade = <b>distância ÷ tempo</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · 100 km em 2 horas = … km/h', opcoes: ['50', '200', '100', '2'], correta: 0, feedback: '100 ÷ 2 = <b>50 km/h</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Uma força serve para…', opcoes: ['mudar o movimento', 'fazer luz', 'aquecer só', 'nada'], correta: 0, feedback: 'Força → <b>muda o movimento</b> (arrancar, parar, virar). 👍' }
    ],
    fecho: 'Velocidade = distância ÷ tempo. A força é o que muda o movimento.'
  });

  /* ── CAP 2 · ELETRICIDADE — o circuito ── */
  function circuitoInterativa(host) {
    var fechado = true;
    function pinta() {
      host.querySelector('#apr-cir').innerHTML =
        '<div style="text-align:center"><div style="font-size:3rem">' + (fechado ? '💡' : '🌑') + '</div>'
        + '<div style="font-size:1.1rem;font-weight:800">Circuito ' + (fechado ? '<span style="color:#5e9676">FECHADO</span>' : '<span style="color:#c4796e">ABERTO</span>') + '</div></div>';
      host.querySelector('#apr-cir-info').innerHTML = fechado
        ? 'O interruptor está ligado → a corrente passa → a lâmpada <b>acende</b>. 💡'
        : 'O interruptor está desligado → a corrente não passa → a lâmpada <b>apaga</b>. 🌑';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Liga e desliga o interruptor. A lâmpada só acende com o circuito fechado. 💡</p>'
      + '<div id="apr-cir"></div>'
      + '<div style="text-align:center;margin:.8rem 0"><button class="apr-btn apr-btn-primary" id="apr-cir-btn">Ligar / Desligar</button></div>'
      + '<p class="apr-prose" id="apr-cir-info" style="text-align:center"></p>';
    host.querySelector('#apr-cir-btn').onclick = function () { fechado = !fechado; pinta(); };
    pinta();
  }
  APRENDER.registar('fq9-eletricidade', {
    curso: CURSO, titulo: 'Circuitos elétricos', subtitulo: 'Eletricidade',
    icone: 'ph-lightning', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'A corrente é como água num tubo', html: '<p>A <b>corrente elétrica</b> é o movimento de cargas por um fio — imagina <b>água a correr num tubo</b>. A <b>pilha</b> é a bomba que empurra a água.</p>' },
      { tipo: 'interativo', titulo: 'Liga a lâmpada 💡', render: circuitoInterativa },
      { tipo: 'texto', titulo: 'O circuito tem de estar fechado', html: '<p>Para a corrente passar, o caminho tem de estar <b>completo</b> (circuito <b>fechado</b>). O <b>interruptor</b> abre e fecha esse caminho — é por isso que a luz acende e apaga.</p>' },
      { tipo: 'texto', titulo: 'Tensão e corrente', html: '<p>A <b>tensão</b> (volt, V) é a «força» da pilha que empurra. A <b>corrente</b> (ampere, A) é a quantidade de carga que passa. Mais tensão → mais corrente.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Para a lâmpada acender, o circuito tem de estar…', opcoes: ['fechado', 'aberto', 'quente', 'molhado'], correta: 0, feedback: 'Caminho completo = circuito <b>fechado</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O que empurra a corrente é a…', opcoes: ['pilha (tensão)', 'lâmpada', 'fio', 'interruptor'], correta: 0, feedback: 'A <b>pilha</b> dá a tensão que empurra. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A tensão mede-se em…', opcoes: ['volt (V)', 'metro (m)', 'grau (°)', 'quilo (kg)'], correta: 0, feedback: 'Tensão → <b>volt (V)</b>. 👍' }
    ],
    fecho: 'Corrente = cargas a correr (precisa de circuito fechado). Pilha = a bomba; tensão em volt.'
  });

  /* ── CAP 3 · TABELA PERIÓDICA — organizar os elementos ── */
  APRENDER.registar('fq9-tabela', {
    curso: CURSO, titulo: 'A Tabela Periódica', subtitulo: 'Materiais e Tabela Periódica',
    icone: 'ph-table', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'O armário arrumado dos elementos', html: '<p>Tudo o que existe é feito de uns 100 «ingredientes» básicos: os <b>elementos químicos</b> (oxigénio, ferro, ouro…). A <b>Tabela Periódica</b> é o armário onde estão todos <b>arrumados por ordem</b>.</p>' },
      { tipo: 'texto', titulo: 'Cada um tem um símbolo', html: '<p>Cada elemento tem um <b>símbolo</b> de 1-2 letras: <b>O</b> = oxigénio, <b>H</b> = hidrogénio, <b>Fe</b> = ferro, <b>Au</b> = ouro. É uma abreviatura internacional — funciona em qualquer país!</p>' },
      { tipo: 'texto', titulo: 'Famílias parecidas', html: '<p>Os elementos da <b>mesma coluna</b> (família) têm <b>comportamentos parecidos</b>. Por isso a tabela é tão útil: sabendo a posição, já adivinhas como o elemento se vai comportar.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A Tabela Periódica organiza…', opcoes: ['os elementos químicos', 'os planetas', 'os animais', 'as cores'], correta: 0, feedback: 'Organiza os <b>elementos químicos</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O símbolo do oxigénio é…', opcoes: ['O', 'Ox', 'Og', 'Oo'], correta: 0, feedback: 'Oxigénio = <b>O</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Elementos da mesma coluna…', opcoes: ['comportam-se de forma parecida', 'são todos iguais', 'não têm relação', 'são metais sempre'], correta: 0, feedback: 'Mesma coluna (família) → comportamento <b>parecido</b>. 👍' }
    ],
    fecho: 'Tabela Periódica = armário dos elementos, arrumados. Cada um tem símbolo; colunas = famílias parecidas.'
  });

  /* ── CAP 4 · LIGAÇÃO QUÍMICA — átomos que se juntam ── */
  APRENDER.registar('fq9-ligacao', {
    curso: CURSO, titulo: 'Ligação química', subtitulo: 'Ligação química',
    icone: 'ph-atom', cor: '#7a5a8a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'Os átomos dão as mãos', html: '<p>Os <b>átomos</b> juntam-se uns aos outros para formar tudo o que existe — é como darem as mãos. A essa união chama-se <b>ligação química</b>.</p><p>Ex.: 2 átomos de hidrogénio + 1 de oxigénio dão as mãos e formam <b>água (H₂O)</b>.</p>' },
      { tipo: 'texto', titulo: 'Moléculas', html: '<p>Quando alguns átomos se ligam, formam uma <b>molécula</b>. A água é uma molécula (H₂O); o oxigénio que respiras também (O₂). A fórmula diz <b>quantos átomos de cada</b> tem.</p>' },
      { tipo: 'texto', titulo: 'Porque se ligam', html: '<p>Os átomos ligam-se para ficarem mais <b>estáveis</b> (mais «satisfeitos»). Alguns <b>partilham</b> eletrões; outros <b>trocam-nos</b>. É essa partilha/troca que mantém tudo unido.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Quando átomos se unem, faz-se uma…', opcoes: ['ligação química', 'sombra', 'corrente', 'sucessão'], correta: 0, feedback: 'União de átomos = <b>ligação química</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A água (H₂O) tem… átomos de hidrogénio', opcoes: ['2', '1', '3', '0'], correta: 0, feedback: 'H₂O → o «2» diz <b>2</b> de hidrogénio (e 1 de oxigénio). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Um grupo de átomos ligados forma uma…', opcoes: ['molécula', 'galáxia', 'célula', 'força'], correta: 0, feedback: 'Átomos ligados = <b>molécula</b>. 👍' }
    ],
    fecho: 'Átomos ligam-se (ligação química) para ficar estáveis e formam moléculas (ex.: H₂O).'
  });

})();
