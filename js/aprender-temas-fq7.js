/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   aprender-temas-fq7.js — Explicadores lúdicos de Físico-Química 7.º ano
   Estilo: explicação simples ligada à vida real + mini-quiz no fim.
   Depende de APRENDER (aprender.js). ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof APRENDER === 'undefined') return;
  var CURSO = 'Físico-Química · 7.º ano';
  function pratLink(cap) {
    var p = (typeof window !== 'undefined' && /\/fq7\//.test(window.location.pathname)) ? '' : 'fq7/';
    return p + 'index.html?abrir=praticar&cap=' + cap;
  }

  /* ── CAP 1 · UNIVERSO — as distâncias gigantes ── */
  function escalaInterativa(host) {
    var nivel = 1;
    var coisas = [
      { n: 'Lua', d: '384 mil km', e: '🌙' },
      { n: 'Sol', d: '150 milhões km', e: '☀️' },
      { n: 'Sistema Solar', d: 'horas-luz', e: '🪐' },
      { n: 'Via Láctea', d: '100 mil anos-luz', e: '🌌' },
      { n: 'Universo', d: 'milhões de galáxias', e: '✨' }
    ];
    function pinta() {
      var c = coisas[nivel - 1];
      host.querySelector('#apr-esc').innerHTML =
        '<div style="text-align:center"><div style="font-size:3rem">' + c.e + '</div>'
        + '<div style="font-size:1.2rem;font-weight:800">' + c.n + '</div>'
        + '<div style="color:#666">distância/tamanho: <b>' + c.d + '</b></div></div>';
      host.querySelector('#apr-esc-info').innerHTML = 'Quanto mais para a direita, <b>maior</b> a escala. O Universo é tão grande que medimos em <b>anos-luz</b> (a distância que a luz faz num ano!).';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Arrasta do mais perto (Lua) ao maior de tudo (Universo). 🌌</p>'
      + '<div id="apr-esc"></div>'
      + '<div class="apr-slider-row"><span>nível = <b id="apr-esc-v">1</b></span><input type="range" min="1" max="5" value="1" class="apr-slider" id="apr-esc-s"></div>'
      + '<p class="apr-prose" id="apr-esc-info" style="text-align:center"></p>';
    host.querySelector('#apr-esc-s').addEventListener('input', function () { nivel = +this.value; host.querySelector('#apr-esc-v').textContent = nivel; pinta(); });
    pinta();
  }
  APRENDER.registar('fq7-universo', {
    curso: CURSO, titulo: 'O Universo é enorme', subtitulo: 'Universo',
    icone: 'ph-planet', cor: '#5a7fa8', praticar: pratLink(1),
    blocos: [
      { tipo: 'texto', titulo: 'A luz das estrelas é antiga', html: '<p>Quando olhas para uma estrela, vês luz que saiu de lá há <b>milhares de anos</b>. A estrela pode até já nem existir! A luz demora tanto a chegar porque o Universo é <b>gigantesco</b>.</p>' },
      { tipo: 'interativo', titulo: 'Sobe a escala 🌌', render: escalaInterativa },
      { tipo: 'texto', titulo: 'Anos-luz', html: '<p>As distâncias no espaço são tão grandes que não dá para usar km. Usa-se o <b>ano-luz</b>: a distância que a luz percorre <b>num ano</b> (quase 10 milhões de milhões de km!).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · Um ano-luz mede…', opcoes: ['uma distância', 'um tempo', 'uma estrela', 'uma temperatura'], correta: 0, feedback: 'Apesar do nome, ano-luz é uma <b>distância</b> (o que a luz percorre num ano). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A nossa galáxia chama-se…', opcoes: ['Via Láctea', 'Sistema Solar', 'Andrómeda', 'Universo'], correta: 0, feedback: 'A nossa galáxia é a <b>Via Láctea</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · Vemos uma estrela como ela era…', opcoes: ['há muito tempo', 'agora mesmo', 'no futuro', 'nunca'], correta: 0, feedback: 'A luz demora a chegar → vemo-la como era <b>há muito tempo</b>. 👍' }
    ],
    fecho: 'O Universo é enorme. Mede-se em anos-luz (distância). A luz das estrelas é do passado.'
  });

  /* ── CAP 2 · TERRA, LUA E FORÇAS — o peso ── */
  function pesoInterativa(host) {
    var local = 0;
    var sitios = [
      { n: 'Terra', g: 1, e: '🌍' },
      { n: 'Lua', g: 0.17, e: '🌙' },
      { n: 'Júpiter', g: 2.5, e: '🪐' }
    ];
    function pinta() {
      var s = sitios[local], peso = Math.round(60 * s.g);
      host.querySelector('#apr-peso').innerHTML =
        '<div style="text-align:center"><div style="font-size:2.5rem">' + s.e + '</div>'
        + '<div style="font-size:1.1rem">Na <b>' + s.n + '</b>, um corpo de 60 kg «pesa» como <b style="color:#5e9676">' + peso + '</b> kg na Terra.</div></div>';
      host.querySelector('#apr-peso-info').innerHTML = 'A <b>massa</b> é sempre 60 kg (a quantidade de matéria). Mas o <b>peso</b> muda com a gravidade do sítio!';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">O mesmo corpo, em sítios diferentes. Vê o peso mudar. ⚖️</p>'
      + '<div id="apr-peso"></div>'
      + '<div class="apr-slider-row"><span>sítio = <b id="apr-peso-v">Terra</b></span><input type="range" min="0" max="2" value="0" class="apr-slider" id="apr-peso-s"></div>'
      + '<p class="apr-prose" id="apr-peso-info" style="text-align:center"></p>';
    host.querySelector('#apr-peso-s').addEventListener('input', function () { local = +this.value; host.querySelector('#apr-peso-v').textContent = sitios[local].n; pinta(); });
    pinta();
  }
  APRENDER.registar('fq7-forcas', {
    curso: CURSO, titulo: 'Massa vs peso', subtitulo: 'Terra, Lua e forças',
    icone: 'ph-scales', cor: '#6e5a7e', praticar: pratLink(2),
    blocos: [
      { tipo: 'texto', titulo: 'Os astronautas saltam alto', html: '<p>Já viste astronautas a saltar na Lua como se voassem? É porque a Lua <b>puxa menos</b> — tem menos gravidade. O corpo deles é o mesmo, mas <b>pesa menos</b> lá.</p>' },
      { tipo: 'interativo', titulo: 'Muda de planeta ⚖️', render: pesoInterativa },
      { tipo: 'texto', titulo: 'Não confundas', html: '<p>A <b>massa</b> é a quantidade de matéria — não muda (mede-se em kg). O <b>peso</b> é a <b>força</b> com que a gravidade te puxa — muda de sítio para sítio (mede-se em newton, N).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A quantidade de matéria de um corpo é a…', opcoes: ['massa', 'peso', 'força', 'gravidade'], correta: 0, feedback: 'Quantidade de matéria = <b>massa</b> (em kg). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Na Lua, comparado com a Terra, o teu peso…', opcoes: ['é menor', 'é maior', 'é igual', 'é zero'], correta: 0, feedback: 'A Lua puxa menos → pesas <b>menos</b> (mas a massa é igual). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · O peso é uma…', opcoes: ['força', 'massa', 'distância', 'energia'], correta: 0, feedback: 'Peso = <b>força</b> da gravidade (em newton). 👍' }
    ],
    fecho: 'Massa = matéria (kg, não muda). Peso = força da gravidade (N, muda de sítio).'
  });

  /* ── CAP 3 · MATERIAIS — estados da matéria ── */
  function estadosInterativa(host) {
    var temp = 20;
    function pinta() {
      var estado, emoji, cor;
      if (temp < 0) { estado = 'sólido (gelo)'; emoji = '🧊'; cor = '#5a9ec4'; }
      else if (temp < 100) { estado = 'líquido (água)'; emoji = '💧'; cor = '#4a8e9e'; }
      else { estado = 'gasoso (vapor)'; emoji = '☁️'; cor = '#aab5bd'; }
      host.querySelector('#apr-est').innerHTML =
        '<div style="text-align:center"><div style="font-size:3rem">' + emoji + '</div>'
        + '<div style="font-size:1.2rem;font-weight:800;color:' + cor + '">' + estado + '</div></div>';
      host.querySelector('#apr-est-info').innerHTML = 'A <b>' + temp + ' °C</b>, a água está no estado <b>' + estado.split(' ')[0] + '</b>. Aquece para mudar de estado!';
    }
    host.innerHTML =
      '<p class="apr-prose apr-maq-hint">Aquece e arrefece a água. Vê-a passar de gelo a vapor. 🌡️</p>'
      + '<div id="apr-est"></div>'
      + '<div class="apr-slider-row"><span>temperatura = <b id="apr-est-v">20</b> °C</span><input type="range" min="-20" max="120" value="20" class="apr-slider" id="apr-est-s"></div>'
      + '<p class="apr-prose" id="apr-est-info" style="text-align:center"></p>';
    host.querySelector('#apr-est-s').addEventListener('input', function () { temp = +this.value; host.querySelector('#apr-est-v').textContent = temp; pinta(); });
    pinta();
  }
  APRENDER.registar('fq7-materiais', {
    curso: CURSO, titulo: 'Sólido, líquido, gasoso', subtitulo: 'Materiais',
    icone: 'ph-drop', cor: '#4a8e9e', praticar: pratLink(3),
    blocos: [
      { tipo: 'texto', titulo: 'A água faz os três', html: '<p>A água é o exemplo perfeito: no congelador é <b>gelo</b> (sólido), no copo é <b>líquida</b>, e a ferver vira <b>vapor</b> (gás). É a <b>mesma substância</b>, só muda de estado!</p>' },
      { tipo: 'interativo', titulo: 'Aquece a água 🌡️', render: estadosInterativa },
      { tipo: 'texto', titulo: 'O que distingue cada estado', html: '<p><b>Sólido</b>: forma fixa (as partículas estão presas). <b>Líquido</b>: toma a forma do copo (partículas escorregam). <b>Gás</b>: espalha-se por todo o lado (partículas voam livres).</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · O gelo é água no estado…', opcoes: ['sólido', 'líquido', 'gasoso', 'nenhum'], correta: 0, feedback: 'Gelo = água <b>sólida</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · Um líquido…', opcoes: ['toma a forma do recipiente', 'tem forma fixa', 'espalha-se por tudo', 'não existe'], correta: 0, feedback: 'O líquido <b>toma a forma</b> do copo. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A água ferve (vira vapor) a cerca de…', opcoes: ['100 °C', '0 °C', '50 °C', '−10 °C'], correta: 0, feedback: 'A água ferve a <b>100 °C</b> (e congela a 0 °C). 👍' }
    ],
    fecho: 'Mesma substância, 3 estados: sólido (forma fixa), líquido (toma a forma), gás (espalha-se).'
  });

  /* ── CAP 4 · ENERGIA — transformações ── */
  APRENDER.registar('fq7-energia', {
    curso: CURSO, titulo: 'A energia transforma-se', subtitulo: 'Energia',
    icone: 'ph-lightning', cor: '#7a5a8a', praticar: pratLink(4),
    blocos: [
      { tipo: 'texto', titulo: 'A energia nunca desaparece', html: '<p>Quando comes, a energia da comida vira <b>movimento</b> (corres) e <b>calor</b> (aqueces). A energia não se cria nem se gasta — só <b>se transforma</b> de uma forma noutra.</p>' },
      { tipo: 'texto', titulo: 'Tipos de energia', html: '<p>Há muitas: <b>cinética</b> (movimento), <b>potencial</b> (guardada, ex.: uma pedra no alto), <b>térmica</b> (calor), <b>elétrica</b>, <b>luminosa</b>… Um candeeiro transforma elétrica em luminosa + térmica.</p>' },
      { tipo: 'texto', titulo: 'O Sol é a fonte', html: '<p>Quase toda a energia da Terra vem do <b>Sol</b>: aquece, faz crescer as plantas (que comemos), evapora a água (que faz a chuva)… É a grande central de energia!</p>' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (1/3) · A energia, quando a usamos,…', opcoes: ['transforma-se', 'desaparece', 'cria-se do nada', 'fica igual'], correta: 0, feedback: 'A energia só se <b>transforma</b> (não se cria nem destrói). 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (2/3) · A energia do movimento chama-se…', opcoes: ['cinética', 'térmica', 'elétrica', 'potencial'], correta: 0, feedback: 'Movimento = energia <b>cinética</b>. 👍' },
      { tipo: 'confirma', pergunta: 'Mini-quiz (3/3) · A principal fonte de energia da Terra é…', opcoes: ['o Sol', 'a Lua', 'o vento só', 'o petróleo'], correta: 0, feedback: 'O <b>Sol</b> é a grande fonte de energia. 👍' }
    ],
    fecho: 'A energia transforma-se (nunca se perde). Há vários tipos. O Sol é a fonte principal.'
  });

})();
