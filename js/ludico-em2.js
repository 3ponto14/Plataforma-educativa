/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados. */
/* ════════════════════════════════════════════════════════════════
   ludico-em2.js — Atividades lúdicas do 1.º ano de Estudo do Meio.
   Usa o motor LUDICO (ludico.js), tipo 'escolher' (clicar na certa).
   ES5 only.
   ════════════════════════════════════════════════════════════════ */
(function () {
  if (typeof window === 'undefined') return;

  function _baralha(arr) { for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; } return arr; }
  function _amostra(arr, n) { return _baralha(arr.slice()).slice(0, n); }

  var ANIMAIS = [
    { e: '🐶', n: 'cão' }, { e: '🐱', n: 'gato' }, { e: '🐮', n: 'vaca' }, { e: '🐷', n: 'porco' },
    { e: '🐔', n: 'galinha' }, { e: '🐟', n: 'peixe' }, { e: '🦁', n: 'leão' }, { e: '🐘', n: 'elefante' },
    { e: '🐸', n: 'rã' }, { e: '🐢', n: 'tartaruga' }, { e: '🦋', n: 'borboleta' }, { e: '🐝', n: 'abelha' }
  ];
  var CORPO = [
    { e: '👁️', n: 'olho', f: 'ver' }, { e: '👂', n: 'ouvido', f: 'ouvir' }, { e: '👃', n: 'nariz', f: 'cheirar' },
    { e: '👅', n: 'língua', f: 'saborear' }, { e: '✋', n: 'mão', f: 'tocar' }, { e: '🦵', n: 'perna', f: 'andar' }
  ];
  var ESTACOES = [
    { e: '🌸', n: 'Primavera' }, { e: '☀️', n: 'Verão' }, { e: '🍂', n: 'Outono' }, { e: '❄️', n: 'Inverno' }
  ];

  var MUNDOS = {
    animais: {
      titulo: 'Que animal é?', emoji: '🐾', cor: '#4a9e6e',
      desc: 'Vê o animal e escolhe o nome certo.',
      gerar: function () {
        var ats = [], usados = _amostra(ANIMAIS, 5);
        for (var i = 0; i < usados.length; i++) {
          var a = usados[i];
          var outras = _amostra(ANIMAIS.filter(function (x) { return x.n !== a.n; }), 2).map(function (x) { return x.n; });
          var ops = _baralha([{ t: a.n, ok: true }, { t: outras[0] }, { t: outras[1] }]);
          ats.push({ tipo: 'escolher', figura: a.e, pergunta: 'Que animal é este?', opcoes: ops, feedback: 'É o ' + a.n + '! 🎉' });
        }
        return ats;
      }
    },
    corpo: {
      titulo: 'Os sentidos', emoji: '🧒', cor: '#6e5a7e',
      desc: 'Com que parte do corpo fazemos cada coisa?',
      gerar: function () {
        var ats = [], usados = _amostra(CORPO, 5);
        for (var i = 0; i < usados.length; i++) {
          var c = usados[i];
          var outras = _amostra(CORPO.filter(function (x) { return x.n !== c.n; }), 2);
          var ops = _baralha([{ t: c.e, ok: true }, { t: outras[0].e }, { t: outras[1].e }]);
          ats.push({ tipo: 'escolher', pergunta: 'Com que parte do corpo podemos ' + c.f + '?', opcoes: ops, feedback: 'Com o ' + c.n + ' (' + c.e + ')! 🎉' });
        }
        return ats;
      }
    },
    estacoes: {
      titulo: 'As estações', emoji: '🍂', cor: '#4a8e9e',
      desc: 'Liga cada imagem à estação do ano.',
      gerar: function () {
        var ats = [], usados = _amostra(ESTACOES, 4);
        for (var i = 0; i < usados.length; i++) {
          var s = usados[i];
          var outras = _amostra(ESTACOES.filter(function (x) { return x.n !== s.n; }), 2).map(function (x) { return x.n; });
          var ops = _baralha([{ t: s.n, ok: true }, { t: outras[0] }, { t: outras[1] }]);
          ats.push({ tipo: 'escolher', figura: s.e, pergunta: 'Que estação do ano é esta?', opcoes: ops, feedback: 'É a/o ' + s.n + '! 🎉' });
        }
        return ats;
      }
    }
  };

  function _menu(hostId) {
    var host = document.getElementById(hostId);
    if (!host) return;
    var html = '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin-top:.5rem">';
    var keys = ['animais', 'corpo', 'estacoes'];
    for (var i = 0; i < keys.length; i++) {
      var m = MUNDOS[keys[i]];
      html += '<button onclick="LudicoEm2.abrir(\'' + keys[i] + '\')" '
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
    if (menu) menu.innerHTML = '<button onclick="LudicoEm2.voltar()" style="background:none;border:none;color:#6a5a8a;font-weight:800;cursor:pointer;font-size:1rem;font-family:Montserrat,sans-serif;margin-bottom:.4rem"><i class="ph ph-arrow-left"></i> Escolher outro jogo</button>';
    if (jogo) { jogo.style.display = 'block'; LUDICO.jogar(_jogoId, m.gerar()); }
  }
  function voltar() {
    var jogo = document.getElementById(_jogoId);
    if (jogo) { jogo.innerHTML = ''; jogo.style.display = 'none'; }
    _menu(_hostId);
  }

  window.LudicoEm2 = { init: init, abrir: abrir, voltar: voltar };
})();
