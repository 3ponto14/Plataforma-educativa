/* ════════════════════════════════════════════════════════════════
   aprender.js — Motor "Aprender" (explicadores lúdicos)
   --------------------------------------------------------------------
   Objetivo: explicar matéria difícil de forma VISUAL e LÚDICA, passo a
   passo, para o aluno que não percebe — quase "o manual a brincar".

   Filosofia (igual ao resto da plataforma): UM motor genérico + DADOS
   por tema. Cada tema é um objeto com uma lista de "blocos". O motor
   mostra um bloco de cada vez (o aluno carrega "Continuar"), e no fim
   há uma pequena confirmação. Onde a matéria é visual, um bloco pode
   ser INTERATIVO (o aluno mexe e vê o efeito ao vivo).

   Tipos de bloco:
     { tipo:'texto',      titulo, html, visual? }        → explicação revelada
     { tipo:'interativo', titulo, render(fn) }            → widget "mexe e vê"
     { tipo:'confirma',   pergunta, opcoes:[...], correta, feedback }

   Cada tema regista-se em APRENDER.temas[id] = {...}.
   ES5 only. Sem frameworks.
   ════════════════════════════════════════════════════════════════ */
var APRENDER = (function () {
  var temas = {};
  function registar(id, tema) { temas[id] = tema; }

  // Estado da sessão atual
  var S = { tema: null, idx: 0, host: null };

  function abrir(id, hostId) {
    var t = temas[id];
    S.host = document.getElementById(hostId || 'aprender-host');
    if (!t || !S.host) return;
    S.tema = t; S.idx = 0;
    render();
  }

  // Barra de progresso (bolinhas) + cabeçalho do tema
  function _topo() {
    var n = S.tema.blocos.length;
    var dots = '';
    for (var i = 0; i < n; i++) {
      dots += '<span class="apr-dot' + (i < S.idx ? ' done' : (i === S.idx ? ' now' : '')) + '"></span>';
    }
    var voltarCat = (typeof window !== 'undefined' && typeof window.aprenderVoltarCatalogo === 'function')
      ? '<button class="apr-back-cat" onclick="aprenderVoltarCatalogo()"><i class="ph ph-arrow-left"></i> Temas</button>' : '';
    return '<div class="apr-head">' + voltarCat +
      '<div class="apr-head-top"><span class="apr-eyebrow">' + (S.tema.curso || '') + '</span>' +
      '<h2 class="apr-title">' + S.tema.titulo + '</h2></div>' +
      '<div class="apr-progress">' + dots + '<span class="apr-step">' + (S.idx + 1) + ' / ' + n + '</span></div>' +
      '</div>';
  }

  function render() {
    var b = S.tema.blocos[S.idx];
    if (!b) return _fim();
    var body = '';
    if (b.tipo === 'texto') {
      body = '<div class="apr-card apr-anim">' +
        (b.titulo ? '<h3 class="apr-bloco-title">' + b.titulo + '</h3>' : '') +
        '<div class="apr-prose">' + (b.html || '') + '</div>' +
        (b.visual ? '<div class="apr-visual">' + b.visual + '</div>' : '') +
        '</div>';
    } else if (b.tipo === 'interativo') {
      body = '<div class="apr-card apr-anim">' +
        (b.titulo ? '<h3 class="apr-bloco-title">' + b.titulo + '</h3>' : '') +
        '<div class="apr-interativo" id="apr-int"></div>' +
        '</div>';
    } else if (b.tipo === 'confirma') {
      var opts = b.opcoes.map(function (o, i) {
        return '<button class="apr-opt" onclick="APRENDER.responder(' + i + ',this)">' + o + '</button>';
      }).join('');
      body = '<div class="apr-card apr-anim">' +
        '<div class="apr-confirma-q">' + b.pergunta + '</div>' +
        '<div class="apr-opts">' + opts + '</div>' +
        '<div class="apr-fb" id="apr-fb"></div>' +
        '</div>';
    }
    // botão avançar (escondido nos confirma até acertar)
    var nav = '<div class="apr-nav">';
    if (S.idx > 0) nav += '<button class="apr-btn apr-btn-ghost" onclick="APRENDER.voltar()"><i class="ph ph-arrow-left"></i> Voltar</button>';
    if (b.tipo !== 'confirma') {
      var ultimo = (S.idx === S.tema.blocos.length - 1);
      nav += '<button class="apr-btn apr-btn-primary" onclick="APRENDER.avancar()">' +
        (ultimo ? 'Terminar <i class="ph ph-check"></i>' : 'Continuar <i class="ph ph-arrow-right"></i>') + '</button>';
    }
    nav += '</div>';

    S.host.innerHTML = _topo() + body + nav;
    // monta o widget interativo depois de o DOM existir
    if (b.tipo === 'interativo' && typeof b.render === 'function') {
      b.render(document.getElementById('apr-int'));
    }
  }

  function avancar() { S.idx++; if (S.idx >= S.tema.blocos.length) _fim(); else render(); }
  function voltar() { if (S.idx > 0) { S.idx--; render(); } }

  function responder(i, btn) {
    var b = S.tema.blocos[S.idx];
    var ok = (i === b.correta);
    var wrap = btn.parentNode;
    wrap.querySelectorAll('.apr-opt').forEach(function (o, k) {
      o.disabled = true;
      if (k === b.correta) o.classList.add('apr-opt-ok');
    });
    if (!ok) btn.classList.add('apr-opt-no');
    var fb = document.getElementById('apr-fb');
    if (fb) {
      fb.innerHTML = (ok ? '<span class="apr-fb-ok"><i class="ph ph-check-circle"></i> Boa!</span> ' : '<span class="apr-fb-no"><i class="ph ph-info"></i> Quase!</span> ') + (b.feedback || '');
      fb.style.display = 'block';
    }
    // mostra o botão de avançar (mesmo que tenha errado, para não bloquear)
    var nav = S.host.querySelector('.apr-nav');
    if (nav && !nav.querySelector('.apr-btn-primary')) {
      var ultimo = (S.idx === S.tema.blocos.length - 1);
      var bt = document.createElement('button');
      bt.className = 'apr-btn apr-btn-primary';
      bt.innerHTML = (ultimo ? 'Terminar <i class="ph ph-check"></i>' : 'Continuar <i class="ph ph-arrow-right"></i>');
      bt.onclick = avancar;
      nav.appendChild(bt);
    }
  }

  function _fim() {
    S.host.innerHTML = _topo() +
      '<div class="apr-card apr-fim apr-anim">' +
      '<div class="apr-fim-emoji">🎉</div>' +
      '<h3>Já percebeste!</h3>' +
      '<p class="apr-prose">' + (S.tema.fecho || 'Agora que viste como funciona, experimenta nos exercícios — vais ver que faz sentido.') + '</p>' +
      '<div class="apr-nav" style="justify-content:center">' +
      '<button class="apr-btn apr-btn-ghost" onclick="APRENDER.reabrir()"><i class="ph ph-arrow-clockwise"></i> Ver outra vez</button>' +
      (S.tema.praticar ? '<a class="apr-btn apr-btn-primary" href="' + S.tema.praticar + '">Praticar agora <i class="ph ph-arrow-right"></i></a>' : '') +
      '</div></div>';
  }
  function reabrir() { S.idx = 0; render(); }

  // ── Catálogo: cartões dos temas disponíveis (para a página índice) ──
  function catalogo(hostId) {
    var host = document.getElementById(hostId);
    if (!host) return;
    var byCurso = {};
    Object.keys(temas).forEach(function (id) {
      var t = temas[id];
      (byCurso[t.curso] = byCurso[t.curso] || []).push({ id: id, t: t });
    });
    var html = '';
    Object.keys(byCurso).forEach(function (curso) {
      html += '<div class="apr-cat-group"><h3 class="apr-cat-curso">' + curso + '</h3><div class="apr-cat-grid">';
      byCurso[curso].forEach(function (e) {
        html += '<button class="apr-cat-card" style="--ac:' + (e.t.cor || '#516860') + '" onclick="APRENDER.abrir(\'' + e.id + '\')">' +
          '<div class="apr-cat-icon"><i class="ph ' + (e.t.icone || 'ph-lightbulb') + '"></i></div>' +
          '<div class="apr-cat-txt"><b>' + e.t.titulo + '</b><span>' + (e.t.subtitulo || '') + '</span></div>' +
          '<i class="ph ph-play-circle apr-cat-play"></i></button>';
      });
      html += '</div></div>';
    });
    host.innerHTML = html || '<p style="color:var(--ink4);text-align:center;padding:2rem">Ainda sem temas. Em breve!</p>';
  }

  return {
    registar: registar, abrir: abrir, avancar: avancar, voltar: voltar,
    responder: responder, reabrir: reabrir, catalogo: catalogo, _temas: temas
  };
})();
