/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   ludico-mat2.js — Atividades lúdicas do 2.º ano de Matemática.
   Usa o motor LUDICO (ludico.js): contar, somar e escolher (tabuada/dobro).
   ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof window === 'undefined') return;

  var EMOJIS = ['🍎', '🐟', '⭐', '🐱', '🌸', '🍪', '🎈', '🦋', '🚗', '🐤'];
  function _e() { return EMOJIS[Math.floor(Math.random() * EMOJIS.length)]; }
  function _rnd(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }
  function _baralha(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }

  var MUNDOS = {
    somar: {
      titulo: 'Somar bonecos', emoji: '➕', cor: '#6a9e4a',
      desc: 'Junta os grupos e descobre o total!',
      gerar: function () {
        var ats = [];
        for (var i = 0; i < 5; i++) { var e = _e(); ats.push({ tipo: 'somar', emoji: e, a: _rnd(2, 6), b: _rnd(2, 6), pergunta: 'Quantos ' + e + ' há ao todo?' }); }
        return ats;
      }
    },
    tabuada: {
      titulo: 'Tabuada a brincar', emoji: '✖️', cor: '#4a8e9e',
      desc: 'Quanto é? Clica na resposta certa.',
      gerar: function () {
        var ats = [];
        for (var i = 0; i < 5; i++) {
          var t = [2, 3, 4, 5, 10][_rnd(0, 4)], k = _rnd(1, 10), r = t * k;
          var ops = _baralha([{ t: String(r), ok: true }, { t: String(r + t) }, { t: String(Math.max(0, r - t)) }]);
          ats.push({ tipo: 'escolher', pergunta: 'Quanto é ' + t + ' × ' + k + '?', opcoes: ops, feedback: t + ' × ' + k + ' = ' + r + '! 🎉' });
        }
        return ats;
      }
    },
    dobro: {
      titulo: 'Dobro e metade', emoji: '🪞', cor: '#7a9e4a',
      desc: 'Descobre o dobro ou a metade.',
      gerar: function () {
        var ats = [];
        for (var i = 0; i < 5; i++) {
          if (i % 2 === 0) {
            var n = _rnd(2, 12), r = n * 2;
            var ops = _baralha([{ t: String(r), ok: true }, { t: String(n) }, { t: String(r + 2) }]);
            ats.push({ tipo: 'escolher', pergunta: 'Qual é o dobro de ' + n + '?', opcoes: ops, feedback: 'O dobro de ' + n + ' é ' + r + '! 🎉' });
          } else {
            var par = _rnd(2, 10) * 2, m = par / 2;
            var ops2 = _baralha([{ t: String(m), ok: true }, { t: String(par) }, { t: String(m + 1) }]);
            ats.push({ tipo: 'escolher', pergunta: 'Qual é a metade de ' + par + '?', opcoes: ops2, feedback: 'A metade de ' + par + ' é ' + m + '! 🎉' });
          }
        }
        return ats;
      }
    }
  };

  function _menu(hostId) {
    var host = document.getElementById(hostId);
    if (!host) return;
    var html = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-top:.5rem">';
    var keys = ['somar', 'tabuada', 'dobro'];
    for (var i = 0; i < keys.length; i++) {
      var m = MUNDOS[keys[i]];
      html += '<button onclick="LudicoMat2.abrir(\'' + keys[i] + '\')" '
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
    if (menu) menu.innerHTML = '<button onclick="LudicoMat2.voltar()" style="background:none;border:none;color:#6a5a8a;font-weight:800;cursor:pointer;font-size:1rem;font-family:Montserrat,sans-serif;margin-bottom:.4rem"><i class="ph ph-arrow-left"></i> Escolher outro jogo</button>';
    if (jogo) { jogo.style.display = 'block'; LUDICO.jogar(_jogoId, m.gerar()); }
  }
  function voltar() {
    var jogo = document.getElementById(_jogoId);
    if (jogo) { jogo.innerHTML = ''; jogo.style.display = 'none'; }
    _menu(_hostId);
  }

  window.LudicoMat2 = { init: init, abrir: abrir, voltar: voltar };
})();
