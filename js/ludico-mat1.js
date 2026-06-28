/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   ludico-mat1.js — Atividades lúdicas do 1.º ano de Matemática.
   Usa o motor LUDICO (ludico.js): contar e somar com bonecos.
   Cada "mundo" = um conjunto de atividades para uma criança jogar.
   ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof window === 'undefined') return;

  var EMOJIS = ['🍎', '🐟', '⭐', '🐱', '🌸', '🍪', '🎈', '🦋', '🚗', '🐤'];
  function _e() { return EMOJIS[Math.floor(Math.random() * EMOJIS.length)]; }
  function _rnd(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }

  // Mundos: cada um gera uma lista de 5 atividades à medida.
  var MUNDOS = {
    contar: {
      titulo: 'Contar até 10', emoji: '🔢', cor: '#4a9e6e',
      desc: 'Clica nos bonecos e conta quantos há!',
      gerar: function () {
        var ats = [];
        for (var i = 0; i < 5; i++) {
          var e = _e(), n = _rnd(2, 10);
          ats.push({ tipo: 'contar', emoji: e, total: n, nome: '', pergunta: 'Quantos ' + e + ' vês?' });
        }
        return ats;
      }
    },
    somar: {
      titulo: 'Somar a brincar', emoji: '➕', cor: '#6a9e4a',
      desc: 'Junta os bonecos e descobre o total!',
      gerar: function () {
        var ats = [];
        for (var i = 0; i < 5; i++) {
          var e = _e(), a = _rnd(1, 5), b = _rnd(1, 5);
          ats.push({ tipo: 'somar', emoji: e, a: a, b: b, pergunta: 'Quantos ' + e + ' há ao todo?' });
        }
        return ats;
      }
    },
    misto: {
      titulo: 'Tudo misturado', emoji: '🎲', cor: '#4a8e9e',
      desc: 'Contar e somar — um desafio de cada vez!',
      gerar: function () {
        var ats = [];
        for (var i = 0; i < 6; i++) {
          var e = _e();
          if (i % 2 === 0) ats.push({ tipo: 'contar', emoji: e, total: _rnd(2, 10), pergunta: 'Quantos ' + e + ' vês?' });
          else ats.push({ tipo: 'somar', emoji: e, a: _rnd(1, 5), b: _rnd(1, 4), pergunta: 'Quantos ' + e + ' há ao todo?' });
        }
        return ats;
      }
    }
  };

  // Renderiza o menu de mundos (cartões grandes e coloridos).
  function _menu(hostId) {
    var host = document.getElementById(hostId);
    if (!host) return;
    var html = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-top:.5rem">';
    var keys = ['contar', 'somar', 'misto'];
    for (var i = 0; i < keys.length; i++) {
      var m = MUNDOS[keys[i]];
      html += '<button onclick="LudicoMat1.abrir(\'' + keys[i] + '\')" '
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
    if (menu) menu.innerHTML = '<button onclick="LudicoMat1.voltar()" style="background:none;border:none;color:#6a5a8a;font-weight:800;cursor:pointer;font-size:1rem;font-family:Montserrat,sans-serif;margin-bottom:.4rem"><i class="ph ph-arrow-left"></i> Escolher outro jogo</button>';
    if (jogo) { jogo.style.display = 'block'; LUDICO.jogar(_jogoId, m.gerar()); }
  }
  function voltar() {
    var jogo = document.getElementById(_jogoId);
    if (jogo) { jogo.innerHTML = ''; jogo.style.display = 'none'; }
    _menu(_hostId);
  }

  window.LudicoMat1 = { init: init, abrir: abrir, voltar: voltar };
})();
