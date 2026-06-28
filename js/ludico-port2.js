/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   ludico-port2.js — Atividades lúdicas do 1.º ano de Português.
   Usa o motor LUDICO (ludico.js), tipo 'escolher' (clicar na certa).
   ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof window === 'undefined') return;

  function _baralha(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
  function _amostra(arr, n) { return _baralha(arr.slice()).slice(0, n); }

  // Pares emoji ↔ palavra (com letra inicial), para vários jogos.
  var PALAVRAS = [
    { e: '🍎', p: 'maçã', l: 'M' }, { e: '🐶', p: 'cão', l: 'C' }, { e: '🌳', p: 'árvore', l: 'A' },
    { e: '🐱', p: 'gato', l: 'G' }, { e: '🐟', p: 'peixe', l: 'P' }, { e: '🌸', p: 'flor', l: 'F' },
    { e: '🚗', p: 'carro', l: 'C' }, { e: '☀️', p: 'sol', l: 'S' }, { e: '🌙', p: 'lua', l: 'L' },
    { e: '🏠', p: 'casa', l: 'C' }, { e: '🐰', p: 'rato', l: 'R' }, { e: '🐝', p: 'abelha', l: 'A' },
    { e: '🍌', p: 'banana', l: 'B' }, { e: '🐘', p: 'elefante', l: 'E' }, { e: '🦊', p: 'raposa', l: 'R' },
    { e: '🌧️', p: 'chuva', l: 'C' }, { e: '🥚', p: 'ovo', l: 'O' }, { e: '🧀', p: 'queijo', l: 'Q' }
  ];

  var MUNDOS = {
    letra: {
      titulo: 'Que letra é?', emoji: '🔤', cor: '#5a7fa8',
      desc: 'Descobre por que letra começa a palavra.',
      gerar: function () {
        var ats = [], usados = _amostra(PALAVRAS, 5);
        for (var i = 0; i < usados.length; i++) {
          var w = usados[i];
          var outras = _amostra(PALAVRAS.filter(function (x) { return x.l !== w.l; }), 2).map(function (x) { return x.l; });
          var ops = _baralha([{ t: w.l, ok: true }, { t: outras[0] }, { t: outras[1] }]);
          ats.push({ tipo: 'escolher', figura: w.e, pergunta: 'Por que letra começa «' + w.p + '»?', opcoes: ops, feedback: '«' + w.p + '» começa por ' + w.l + '! 🎉' });
        }
        return ats;
      }
    },
    palavra: {
      titulo: 'Qual é a palavra?', emoji: '🖼️', cor: '#6e5a7e',
      desc: 'Vê a imagem e escolhe a palavra certa.',
      gerar: function () {
        var ats = [], usados = _amostra(PALAVRAS, 5);
        for (var i = 0; i < usados.length; i++) {
          var w = usados[i];
          var outras = _amostra(PALAVRAS.filter(function (x) { return x.p !== w.p; }), 2).map(function (x) { return x.p; });
          var ops = _baralha([{ t: w.p, ok: true }, { t: outras[0] }, { t: outras[1] }]);
          ats.push({ tipo: 'escolher', figura: w.e, pergunta: 'Que palavra é esta imagem?', opcoes: ops, feedback: 'É «' + w.p + '»! 🎉' });
        }
        return ats;
      }
    },
    comeca: {
      titulo: 'Começa com…', emoji: '🅰️', cor: '#4a8e9e',
      desc: 'Encontra a imagem que começa pela letra.',
      gerar: function () {
        var ats = [];
        for (var i = 0; i < 5; i++) {
          var w = _amostra(PALAVRAS, 1)[0];
          var outras = _amostra(PALAVRAS.filter(function (x) { return x.l !== w.l; }), 2);
          var ops = _baralha([{ t: w.e, ok: true }, { t: outras[0].e }, { t: outras[1].e }]);
          ats.push({ tipo: 'escolher', pergunta: 'Qual começa pela letra ' + w.l + '?', opcoes: ops, feedback: '«' + w.p + '» começa por ' + w.l + '! 🎉' });
        }
        return ats;
      }
    }
  };

  function _menu(hostId) {
    var host = document.getElementById(hostId);
    if (!host) return;
    var html = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-top:.5rem">';
    var keys = ['letra', 'palavra', 'comeca'];
    for (var i = 0; i < keys.length; i++) {
      var m = MUNDOS[keys[i]];
      html += '<button onclick="LudicoPort2.abrir(\'' + keys[i] + '\')" '
        + 'style="background:' + m.cor + ';color:#fff;border:none;border-radius:22px;padding:1.4rem 1rem;cursor:pointer;font-family:Montserrat,sans-serif;text-align:center;box-shadow:0 6px 16px rgba(0,0,0,.12);transition:transform .12s" '
        + 'onmouseover="this.style.transform=\'translateY(-3px)\'" onmouseout="this.style.transform=\'\'">'
        + '<div style="font-size:2.6rem;line-height:1">' + m.emoji + '</div>'
        + '<div style="font-size:1.15rem;font-weight:900;margin-top:.4rem">' + m.titulo + '</div>'
        + '<div style="font-size:.85rem;opacity:.92;margin-top:.2rem;font-weight:600">' + m.desc + '</div>'
        + '</button>';
    }
    html += '</div>';
    host.innerHTML = html;
  }

  var _hostId = null, _jogoId = null;
  function init(hostId, jogoId) {
    _hostId = hostId; _jogoId = jogoId;
    var jh = document.getElementById(jogoId);
    if (jh) jh.innerHTML = '';
    _menu(hostId);
  }
  function abrir(chave) {
    var m = MUNDOS[chave];
    if (!m || typeof LUDICO === 'undefined') return;
    var menu = document.getElementById(_hostId);
    var jogo = document.getElementById(_jogoId);
    if (menu) menu.innerHTML = '<button onclick="LudicoPort2.voltar()" style="background:none;border:none;color:#6a5a8a;font-weight:800;cursor:pointer;font-size:1rem;font-family:Montserrat,sans-serif;margin-bottom:.4rem"><i class="ph ph-arrow-left"></i> Escolher outro jogo</button>';
    if (jogo) { jogo.style.display = 'block'; LUDICO.jogar(_jogoId, m.gerar()); }
  }
  function voltar() {
    var jogo = document.getElementById(_jogoId);
    if (jogo) { jogo.innerHTML = ''; jogo.style.display = 'none'; }
    _menu(_hostId);
  }

  window.LudicoPort2 = { init: init, abrir: abrir, voltar: voltar };
})();
