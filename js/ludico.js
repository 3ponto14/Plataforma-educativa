/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados.
 * Código e conteúdo protegidos por direitos de autor. Proibida a cópia,
 * reprodução ou clonagem sem autorização escrita. https://plataformaeducativa.pages.dev */

/* ════════════════════════════════════════════════════════════════
   ludico.js — Motor de atividades LÚDICAS do 1.º ciclo
   --------------------------------------------------------------------
   Para crianças de 6-8 anos. Tudo visual, colorido, com imagens/emojis,
   sons alegres, recompensas (estrelas) e mascote. Duas interações:
     • CONTAR  → clicar nos objetos para contar, depois escolher o número
     • ARRASTAR → arrastar objetos para uma caixa, total ao vivo
   Filosofia da casa: UM motor genérico + DADOS por atividade. ES5 only.
   ════════════════════════════════════════════════════════════════ */
var LUDICO = (function () {
  'use strict';

  // ── Sons curtos gerados por WebAudio (sem ficheiros externos) ──
  var _ac = null;
  function _beep(freq, dur, tipo) {
    try {
      if (!_ac) _ac = new (window.AudioContext || window.webkitAudioContext)();
      var o = _ac.createOscillator(), g = _ac.createGain();
      o.type = tipo || 'sine'; o.frequency.value = freq;
      o.connect(g); g.connect(_ac.destination);
      g.gain.setValueAtTime(0.001, _ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.18, _ac.currentTime + 0.01);
      g.gain.exponentialRampToValueAtTime(0.001, _ac.currentTime + (dur || 0.15));
      o.start(); o.stop(_ac.currentTime + (dur || 0.15));
    } catch (e) {}
  }
  function somClique() { _beep(620, 0.08, 'triangle'); }
  function somAcerto() { _beep(660, 0.12); setTimeout(function(){_beep(880,0.18);}, 110); setTimeout(function(){_beep(1180,0.22);}, 240); }
  function somErro()   { _beep(300, 0.18, 'sawtooth'); }

  // ── Confetti simples (estrelas a cair) ──
  function festa(host) {
    var emos = ['⭐','🌟','✨','🎉','💛'];
    for (var i = 0; i < 16; i++) {
      (function (i) {
        var s = document.createElement('div');
        s.textContent = emos[Math.floor(Math.random() * emos.length)];
        s.style.cssText = 'position:absolute;left:' + (8 + Math.random() * 84) + '%;top:-10%;font-size:' + (18 + Math.random() * 18) + 'px;pointer-events:none;z-index:50;transition:transform 1.1s ease-in,opacity 1.1s';
        host.appendChild(s);
        setTimeout(function () { s.style.transform = 'translateY(' + (160 + Math.random() * 120) + 'px) rotate(' + (Math.random() * 360) + 'deg)'; s.style.opacity = '0'; }, 20 + i * 18);
        setTimeout(function () { if (s.parentNode) s.parentNode.removeChild(s); }, 1300);
      })(i);
    }
  }

  // ── Mascote: fala consoante o momento ──
  function mascote(estado, msg) {
    var cara = estado === 'feliz' ? '🦊' : estado === 'pensa' ? '🦊' : '🦊';
    var bolha = estado === 'feliz' ? '#e8f5ee' : estado === 'erro' ? '#fdeceb' : '#fff6e5';
    return '<div style="display:flex;align-items:center;gap:.6rem;margin:.2rem 0 1rem">'
      + '<div style="font-size:2.4rem;line-height:1">' + cara + '</div>'
      + '<div style="background:' + bolha + ';border-radius:14px;padding:.6rem 1rem;font-size:1.05rem;font-weight:700;color:#3a3a3a;font-family:Montserrat,sans-serif;flex:1">' + msg + '</div>'
      + '</div>';
  }

  // estrelas ganhas na sessão
  var _estrelas = 0;
  function barraEstrelas() {
    return '<div id="lud-estrelas" style="font-size:1.3rem;letter-spacing:2px;text-align:center;margin:.3rem 0 .6rem;min-height:1.6rem">' + ('⭐'.repeat(_estrelas) || '<span style="font-size:.85rem;color:#999;font-weight:600">Ganha estrelas a acertar! ⭐</span>') + '</div>';
  }

  /* ── Atividade de CONTAR ──
     dados = { tipo:'contar', emoji:'🍎', total:5, pergunta:'Quantas maçãs há?' }
     A criança clica em cada objeto (conta em voz/anima) e depois escolhe o número. */
  function _renderContar(host, at, aoTerminar) {
    var contados = 0;
    var errou = false;
    var objetosHTML = '';
    for (var i = 0; i < at.total; i++) {
      objetosHTML += '<button class="lud-obj" data-i="' + i + '" style="font-size:2.6rem;background:none;border:none;cursor:pointer;transition:transform .15s;padding:.2rem;line-height:1">' + at.emoji + '</button>';
    }
    // opções de número (resposta + 2 distratores próximos)
    var ops = _opcoesNum(at.total, 3);
    var opsHTML = ops.map(function (n) {
      return '<button class="lud-num" data-n="' + n + '" style="font-size:1.8rem;font-weight:900;width:70px;height:70px;border-radius:18px;border:3px solid #d8d8d8;background:#fff;color:#3a3a3a;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s">' + n + '</button>';
    }).join('');

    host.innerHTML = barraEstrelas()
      + mascote('pensa', at.pergunta)
      + '<div style="background:#fffdf7;border:2px dashed #f0d98a;border-radius:20px;padding:1.4rem;display:flex;flex-wrap:wrap;gap:.4rem;justify-content:center;margin-bottom:.4rem">' + objetosHTML + '</div>'
      + '<div id="lud-contador" style="text-align:center;font-size:1.1rem;font-weight:800;color:#b06a1e;min-height:1.6rem;margin-bottom:.8rem">Clica ' + (at.nome ? 'nas ' + at.nome : 'nos desenhos') + ' para contar 👆</div>'
      + '<div style="display:flex;gap:.8rem;justify-content:center;flex-wrap:wrap">' + opsHTML + '</div>';

    // contar ao clicar
    host.querySelectorAll('.lud-obj').forEach(function (o) {
      o.addEventListener('click', function () {
        if (o.getAttribute('data-contado')) return;
        o.setAttribute('data-contado', '1');
        o.style.transform = 'scale(1.35)';
        o.style.filter = 'drop-shadow(0 0 6px gold)';
        setTimeout(function(){ o.style.transform = 'scale(1.1)'; }, 150);
        contados++;
        somClique();
        var c = document.getElementById('lud-contador');
        if (c) c.textContent = contados + (contados === 1 ? ' contado!' : ' contados!');
      });
    });
    // escolher número
    host.querySelectorAll('.lud-num').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = parseInt(b.getAttribute('data-n'), 10);
        if (n === at.total) {
          b.style.background = '#3ec78a'; b.style.borderColor = '#2e9e6a'; b.style.color = '#fff';
          somAcerto(); festa(host);
          if (!errou) { _estrelas++; var es = document.getElementById('lud-estrelas'); if (es) es.textContent = '⭐'.repeat(_estrelas); }
          host.querySelectorAll('.lud-num').forEach(function(x){ x.disabled = true; });
          var c = document.getElementById('lud-contador');
          if (c) { c.innerHTML = '🎉 Boa! São mesmo <b>' + at.total + '</b>!'; c.style.color = '#2e9e6a'; }
          setTimeout(function () { if (aoTerminar) aoTerminar(true); }, 1500);
        } else {
          errou = true;
          b.style.background = '#fdeceb'; b.style.borderColor = '#e07a6e';
          somErro();
          b.animate ? b.animate([{transform:'translateX(-4px)'},{transform:'translateX(4px)'},{transform:'translateX(0)'}],{duration:200}) : 0;
          var c2 = document.getElementById('lud-contador');
          if (c2) { c2.textContent = 'Quase! Conta outra vez devagar 🙂'; c2.style.color = '#c4796e'; }
        }
      });
    });
  }

  /* ── Atividade de SOMAR ARRASTANDO ──
     dados = { tipo:'somar', emoji:'🐟', a:3, b:2, pergunta:'Junta os peixes na rede!' }
     A criança arrasta os objetos dos dois grupos para uma caixa; o total conta ao vivo;
     no fim escolhe (ou confirma) o resultado. */
  function _renderSomar(host, at, aoTerminar) {
    var total = at.a + at.b;
    var naCaixa = 0;
    function grupo(qt, cor) {
      var h = '';
      for (var i = 0; i < qt; i++) h += '<div class="lud-drag" draggable="true" style="font-size:2.2rem;cursor:grab;line-height:1;user-select:none">' + at.emoji + '</div>';
      return '<div style="background:' + cor + ';border-radius:16px;padding:.7rem;display:flex;flex-wrap:wrap;gap:.3rem;justify-content:center;min-width:90px">' + h + '</div>';
    }
    host.innerHTML = barraEstrelas()
      + mascote('pensa', at.pergunta)
      + '<div style="display:flex;align-items:center;justify-content:center;gap:.6rem;flex-wrap:wrap;margin-bottom:1rem">'
      +   grupo(at.a, '#eaf3ff') + '<div style="font-size:2rem;font-weight:900;color:#888">+</div>' + grupo(at.b, '#fdeef0')
      + '</div>'
      + '<div style="text-align:center;font-size:1rem;font-weight:800;color:#b06a1e;margin-bottom:.4rem">Arrasta tudo para a caixa 👇 (ou clica)</div>'
      + '<div id="lud-caixa" style="background:#fffdf7;border:3px dashed #f0d98a;border-radius:20px;min-height:90px;padding:1rem;display:flex;flex-wrap:wrap;gap:.35rem;justify-content:center;align-items:center;margin-bottom:.4rem"><span id="lud-caixa-vazia" style="color:#bbb;font-weight:700">caixa vazia</span></div>'
      + '<div id="lud-total" style="text-align:center;font-size:1.3rem;font-weight:900;color:#4a3f7a;min-height:1.8rem">Total: 0</div>';

    var caixa = document.getElementById('lud-caixa');
    function meter(el) {
      if (el.getAttribute('data-na-caixa')) return;
      el.setAttribute('data-na-caixa', '1');
      el.setAttribute('draggable', 'false');
      el.style.cursor = 'default';
      var vazia = document.getElementById('lud-caixa-vazia'); if (vazia) vazia.style.display = 'none';
      caixa.appendChild(el);
      naCaixa++;
      somClique();
      var t = document.getElementById('lud-total');
      if (t) t.textContent = 'Total: ' + naCaixa;
      if (naCaixa === total) {
        somAcerto(); festa(host); _estrelas++;
        if (t) { t.innerHTML = '🎉 ' + at.a + ' + ' + at.b + ' = <b>' + total + '</b>!'; t.style.color = '#2e9e6a'; }
        var es = document.getElementById('lud-estrelas'); if (es) es.textContent = '⭐'.repeat(_estrelas);
        setTimeout(function () { if (aoTerminar) aoTerminar(true); }, 1600);
      }
    }
    // arrastar
    host.querySelectorAll('.lud-drag').forEach(function (d) {
      d.addEventListener('dragstart', function (e) { try { e.dataTransfer.setData('text', '1'); } catch (x) {} });
      d.addEventListener('click', function () { meter(d); });        // clicar também mete (telemóvel)
      d.addEventListener('dragend', function () { meter(d); });
    });
    caixa.addEventListener('dragover', function (e) { e.preventDefault(); });
    caixa.addEventListener('drop', function (e) { e.preventDefault(); });
  }

  /* ── Atividade de ESCOLHER ──
     dados = { tipo:'escolher', pergunta:'...', figura:'🐶'?, opcoes:[{t:'🍎',ok:true},{t:'🐶'},...] }
     A criança vê a pergunta (e talvez uma figura grande) e clica na opção certa. */
  function _renderEscolher(host, at, aoTerminar) {
    var resolvido = false;
    var figuraHTML = at.figura ? '<div style="font-size:4rem;text-align:center;line-height:1;margin:.4rem 0">' + at.figura + '</div>' : '';
    var opsHTML = '';
    for (var i = 0; i < at.opcoes.length; i++) {
      var o = at.opcoes[i];
      opsHTML += '<button class="lud-esc" data-ok="' + (o.ok ? '1' : '0') + '" '
        + 'style="font-size:1.5rem;font-weight:800;min-width:84px;min-height:84px;border-radius:20px;border:3px solid #d8d8d8;background:#fff;color:#3a3a3a;cursor:pointer;font-family:Montserrat,sans-serif;transition:all .15s;padding:.6rem 1rem">'
        + o.t + '</button>';
    }
    host.innerHTML = barraEstrelas()
      + mascote('pensa', at.pergunta)
      + figuraHTML
      + '<div style="display:flex;flex-wrap:wrap;gap:.7rem;justify-content:center;margin-top:.6rem">' + opsHTML + '</div>'
      + '<div id="lud-esc-fb" style="text-align:center;font-size:1.1rem;font-weight:800;min-height:1.8rem;margin-top:.7rem"></div>';
    host.querySelectorAll('.lud-esc').forEach(function (b) {
      b.addEventListener('click', function () {
        if (resolvido) return;
        var fb = document.getElementById('lud-esc-fb');
        if (b.getAttribute('data-ok') === '1') {
          resolvido = true;
          b.style.borderColor = '#2e9e6a'; b.style.background = '#e8f5ee';
          somAcerto(); festa(host); _estrelas++;
          var es = document.getElementById('lud-estrelas'); if (es) es.textContent = '⭐'.repeat(_estrelas);
          if (fb) { fb.textContent = at.feedback || 'Boa! Acertaste! 🎉'; fb.style.color = '#2e9e6a'; }
          setTimeout(function () { if (aoTerminar) aoTerminar(true); }, 1500);
        } else {
          b.style.borderColor = '#c4796e'; b.style.background = '#fdeceb';
          somErro();
          if (fb) { fb.textContent = 'Quase! Tenta outra. 🤔'; fb.style.color = '#c4796e'; }
        }
      });
    });
  }

  // opções de número: resposta + (qt-1) distratores próximos, baralhadas
  function _opcoesNum(correto, qt) {
    var set = {}; set[correto] = 1;
    var tent = 0;
    while (Object.keys(set).length < qt && tent < 40) {
      var d = correto + (Math.floor(Math.random() * 5) - 2);
      if (d >= 0 && d !== correto) set[d] = 1;
      tent++;
    }
    var arr = Object.keys(set).map(Number);
    for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
    return arr;
  }

  // ── API pública: corre uma sequência de atividades num host ──
  function jogar(hostId, atividades) {
    var host = document.getElementById(hostId);
    if (!host) return;
    host.style.position = 'relative';
    var idx = 0;
    function proxima() {
      if (idx >= atividades.length) {
        host.innerHTML = '<div style="text-align:center;padding:2rem">'
          + '<div style="font-size:3.5rem">🏆</div>'
          + '<div style="font-size:1.4rem;font-weight:900;color:#2e9e6a;font-family:Montserrat,sans-serif;margin:.5rem 0">Parabéns! Terminaste!</div>'
          + '<div style="font-size:1.6rem">' + ('⭐'.repeat(_estrelas)) + '</div>'
          + '<button onclick="LUDICO.recomecar(\'' + hostId + '\')" style="margin-top:1rem;font-size:1.05rem;font-weight:800;background:#4a3f7a;color:#fff;border:none;border-radius:999px;padding:.7rem 1.6rem;cursor:pointer;font-family:Montserrat,sans-serif">Jogar outra vez 🔁</button>'
          + '</div>';
        festa(host);
        return;
      }
      var at = atividades[idx];
      if (at.tipo === 'somar') _renderSomar(host, at, function () { idx++; proxima(); });
      else if (at.tipo === 'escolher') _renderEscolher(host, at, function () { idx++; proxima(); });
      else _renderContar(host, at, function () { idx++; proxima(); });
    }
    _ultimas = { hostId: hostId, atividades: atividades };
    proxima();
  }
  var _ultimas = null;
  function recomecar(hostId) { _estrelas = 0; if (_ultimas) jogar(_ultimas.hostId, _ultimas.atividades); }

  return { jogar: jogar, recomecar: recomecar };
})();
