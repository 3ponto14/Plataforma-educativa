/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-fq8.js — Explicadores lúdicos de Físico-Química 8.º ano
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Físico-Química · 8.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/fq8\//.test(window.location.pathname)) ? '' : 'fq8/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · REAÇÕES QUÍMICAS — reagentes → produtos ── */
  APRENDER.registar('fq8-reacoes', {
    curso: CURSO, titulo: 'Reações químicas', subtitulo: 'Reações químicas',
    icone: 'ph-flask', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'Cozinhar é química', html: '<p>Quando fazes um bolo, os ingredientes (farinha, ovos…) entram no forno e saem <b>transformados</b> num bolo — já não dá para os separar! Isto é uma <b>reação química</b>: forma-se uma substância <b>nova</b>.</p>' },
      { tipo: 'texto', titulo: 'Reagentes → Produtos', html: '<p>O que <b>entra</b> chama-se <b>reagentes</b>; o que <b>sai</b> (a substância nova) chama-se <b>produtos</b>. Escreve-se com uma seta: <b>reagentes → produtos</b>.</p><p>Ex.: a vela a arder: cera + oxigénio → dióxido de carbono + água.</p>' },
      { tipo: 'texto', titulo: 'Sinais de que houve reação', html: '<p>Como saber se houve uma reação? Procura <b>pistas</b>: mudança de cor, libertação de gás (bolhas), formação de um sólido, calor ou luz. Misturar vinagre e bicarbonato faz <b>espuma</b> → houve reação!</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Numa reação química forma-se…', opcoes: ['uma substância nova', 'a mesma substância', 'só calor', 'nada'], correta: 0, feedback: 'Reação química → substância <b>nova</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · O que entra numa reação chama-se…', opcoes: ['reagentes', 'produtos', 'restos', 'átomos'], correta: 0, feedback: 'O que entra = <b>reagentes</b> (o que sai = produtos). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Vinagre + bicarbonato faz espuma. Isto é sinal de…', opcoes: ['uma reação química', 'nada', 'evaporação só', 'congelamento'], correta: 0, feedback: 'Libertou gás (bolhas) → houve <b>reação química</b>. 👍' }
    ],
    fecho: 'Reação química: reagentes → produtos (substância nova). Pistas: cor, gás, sólido, calor.'
  });

  /* ── CAP 2 · SOM — a vibração ── */
  function somInterativa(host) {
    var freq = 3;
    function pinta() {
      var W = 240, H = 80, cy = 40, s = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;max-width:260px">';
      var pts = '';
      for (var x = 0; x <= W; x += 3) { var y = cy - 26 * Math.sin(x / W * freq * 2 * Math.PI); pts += x + ',' + y.toFixed(1) + ' '; }
      s += '<polyline points="' + pts + '" fill="none" stroke="#5a7fa8" stroke-width="2.5"/></svg>';
      host.querySelector('#apr-som').innerHTML = s;
      host.querySelector('#apr-som-info').innerHTML = freq <= 2 ? 'Poucas vibrações → som <b>grave</b> (como um tambor). 🥁' : freq >= 6 ? 'Muitas vibrações → som <b>agudo</b> (como um assobio). 🎵' : 'Vibrações médias → som médio.';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">O som é uma vibração. Mais vibrações = mais agudo. 🔊</p>'
      + '<div id="apr-som" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>vibrações = <b id="apr-som-v">3</b></span><input type="range" min="1" max="8" value="3" class="apr-slider" id="apr-som-s"></div>'
      + '<p class="apr-prose" id="apr-som-info" style="text-align:center"></p>';
    host.querySelector('#apr-som-s').addEventListener('input', function () { freq = +this.value; host.querySelector('#apr-som-v').textContent = freq; pinta(); });
    pinta();
  }
  APRENDER.registar('fq8-som', {
    curso: CURSO, titulo: 'O som é vibração', subtitulo: 'Som',
    icone: 'ph-speaker-high', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Põe a mão na garganta', html: '<p>Põe a mão na garganta e fala. Sentes a <b>vibração</b>? É isso o som: alguma coisa a <b>vibrar</b>, que faz o ar tremer e chega aos teus ouvidos.</p>' },
      { tipo: 'interativo', titulo: 'Grave ou agudo? 🔊', render: somInterativa },
      { tipo: 'texto', titulo: 'O som precisa de ar', html: '<p>O som viaja pelo <b>ar</b> (ou pela água, paredes…). No <b>espaço</b> não há ar, por isso é <b>silencioso</b> — os filmes com explosões barulhentas no espaço estão errados! 🚀</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O som é causado por…', opcoes: ['uma vibração', 'luz', 'calor', 'cor'], correta: 0, feedback: 'Som = <b>vibração</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um som agudo (assobio) tem…', opcoes: ['muitas vibrações', 'poucas vibrações', 'nenhuma', 'cor'], correta: 0, feedback: 'Agudo = <b>muitas</b> vibrações por segundo. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · No espaço (sem ar), o som…', opcoes: ['não se ouve', 'ouve-se melhor', 'é mais alto', 'é igual'], correta: 0, feedback: 'Sem ar não há por onde viajar → <b>não se ouve</b>. 👍' }
    ],
    fecho: 'Som = vibração que viaja pelo ar. Mais vibrações = mais agudo. Sem ar, não há som.'
  });

  /* ── CAP 3 · LUZ — reflexão ── */
  function luzInterativa(host) {
    var ang = 30;
    function pinta() {
      var cx = 120, cy = 90, L = 70, r = ang * Math.PI / 180;
      var ix = cx - L * Math.sin(r), iy = cy - L * Math.cos(r);
      var rx = cx + L * Math.sin(r), ry = cy - L * Math.cos(r);
      var s = '<svg viewBox="0 0 240 110" style="width:100%;max-width:260px">';
      s += '<line x1="30" y1="' + cy + '" x2="210" y2="' + cy + '" stroke="#888" stroke-width="3"/>';
      s += '<line x1="' + ix.toFixed(1) + '" y1="' + iy.toFixed(1) + '" x2="' + cx + '" y2="' + cy + '" stroke="#e5a020" stroke-width="2.5"/>';
      s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + rx.toFixed(1) + '" y2="' + ry.toFixed(1) + '" stroke="#e5a020" stroke-width="2.5"/>';
      s += '<line x1="' + cx + '" y1="' + (cy - L) + '" x2="' + cx + '" y2="' + cy + '" stroke="#bbb" stroke-dasharray="3 2"/></svg>';
      host.querySelector('#apr-luz').innerHTML = s;
      host.querySelector('#apr-luz-info').innerHTML = 'A luz chega a <b>' + ang + '°</b> e ressalta a <b>' + ang + '°</b> — o ângulo de saída é <b>igual</b> ao de entrada!';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">A luz bate no espelho e ressalta. Vê o ângulo. 🪞</p>'
      + '<div id="apr-luz" style="display:flex;justify-content:center"></div>'
      + '<div class="apr-slider-row"><span>ângulo = <b id="apr-luz-v">30</b>°</span><input type="range" min="10" max="70" value="30" class="apr-slider" id="apr-luz-s"></div>'
      + '<p class="apr-prose" id="apr-luz-info" style="text-align:center"></p>';
    host.querySelector('#apr-luz-s').addEventListener('input', function () { ang = +this.value; host.querySelector('#apr-luz-v').textContent = ang; pinta(); });
    pinta();
  }
  APRENDER.registar('fq8-luz', {
    curso: CURSO, titulo: 'A luz e os espelhos', subtitulo: 'Luz',
    icone: 'ph-sun', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'Porque te vês no espelho', html: '<p>Vês-te no espelho porque a luz <b>bate</b> em ti, vai ao espelho e <b>ressalta</b> de volta aos teus olhos. A esse «ressaltar» chama-se <b>reflexão</b>.</p>' },
      { tipo: 'interativo', titulo: 'A luz ressalta 🪞', render: luzInterativa },
      { tipo: 'texto', titulo: 'A regra da reflexão', html: '<p>A luz ressalta com o <b>mesmo ângulo</b> com que chegou — como uma bola de bilhar a bater na tabela. É por isso que num espelho a tua imagem aparece direitinha.</p>' },
      { tipo: 'texto', titulo: 'A luz viaja em linha reta', html: '<p>A luz anda sempre em <b>linha reta</b> até bater em algo. Por isso há <b>sombras</b>: quando um objeto bloqueia a luz, fica uma zona escura atrás dele.</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A luz a ressaltar num espelho chama-se…', opcoes: ['reflexão', 'absorção', 'sombra', 'vibração'], correta: 0, feedback: 'Ressaltar = <b>reflexão</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A luz reflete com um ângulo…', opcoes: ['igual ao de chegada', 'maior', 'menor', 'de 90°'], correta: 0, feedback: 'O ângulo de saída é <b>igual</b> ao de chegada. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Existem sombras porque a luz…', opcoes: ['viaja em linha reta', 'curva', 'desaparece', 'aquece'], correta: 0, feedback: 'A luz vai em <b>linha reta</b> → o objeto bloqueia e faz sombra. 👍' }
    ],
    fecho: 'Luz viaja em linha reta e reflete com ângulo igual ao de chegada. Por isso há espelhos e sombras.'
  });

})();
