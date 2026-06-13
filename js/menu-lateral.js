/* ════════════════════════════════════════════════════════════════
   menu-lateral.js — Gaveta lateral do portal (☰)
   Arruma o "Apoio ao Estudo" numa gaveta deslizante, para o portal não
   ficar confuso com blocos empilhados. Só aparece COM sessão iniciada.
     • Botão ☰ na topbar (à esquerda dos chips/Entrar).
     • Gaveta desliza da esquerda; overlay escurece o resto; fecha ao
       clicar fora, no ✕, ou com Esc.
     • O conteúdo do Apoio ao Estudo (#portal-turmas, escrito por
       turmas-ui.js) é MOVIDO para dentro da gaveta — sem duplicar lógica.
     • Atalhos: Desafio do Dia e Cursos fazem scroll suave no portal.
   Funciona em computador e telemóvel (mesma gaveta).
   ════════════════════════════════════════════════════════════════ */

(function () {
  var ABERTA = false;

  function _temSessao() {
    return typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel() && Cloud.utilizador && Cloud.utilizador();
  }

  /* Cria (uma vez) a estrutura: botão na topbar + gaveta + overlay. */
  function montar() {
    if (document.getElementById('ml-drawer')) return; // já montado

    // ── botão ☰ na topbar (inserido à esquerda das ações) ──
    var slot = document.querySelector('.site-topbar-actions');
    if (slot && !document.getElementById('ml-burger')) {
      var b = document.createElement('button');
      b.id = 'ml-burger';
      b.setAttribute('aria-label', 'Abrir menu');
      b.style.display = 'none'; // só aparece com sessão
      b.innerHTML = '<i class="ph ph-list"></i>';
      b.onclick = abrir;
      slot.insertBefore(b, slot.firstChild);
    }

    // ── overlay + gaveta ──
    var ov = document.createElement('div');
    ov.id = 'ml-overlay';
    ov.onclick = fechar;
    document.body.appendChild(ov);

    var d = document.createElement('aside');
    d.id = 'ml-drawer';
    d.setAttribute('role', 'navigation');
    d.innerHTML =
      '<div class="ml-head">'
      + '<span class="ml-title"><i class="ph ph-graduation-cap"></i> Apoio ao Estudo</span>'
      + '<button class="ml-close" aria-label="Fechar" onclick="menuLateralFechar()"><i class="ph ph-x"></i></button>'
      + '</div>'
      + '<nav class="ml-nav">'
      + '<button class="ml-link" onclick="menuLateralIr(\'portal-desafio\')"><i class="ph ph-target"></i> Desafio do Dia</button>'
      + '<button class="ml-link" onclick="menuLateralIr(\'portal-grid\')"><i class="ph ph-books"></i> Cursos</button>'
      + '</nav>'
      + '<div class="ml-body" id="ml-body"></div>'
      + '<div class="ml-foot" id="ml-foot"></div>';
    document.body.appendChild(d);

    // move o painel do Apoio para dentro da gaveta
    var apoio = document.getElementById('portal-turmas');
    var body = document.getElementById('ml-body');
    if (apoio && body) { apoio.style.display = ''; body.appendChild(apoio); }
  }

  function _pintarRodape() {
    var foot = document.getElementById('ml-foot');
    if (!foot) return;
    var u = _temSessao();
    if (!u) { foot.innerHTML = ''; return; }
    var nome = (u.email || '').split('@')[0];
    var prof = (typeof Cloud.ehProfessor === 'function' && Cloud.ehProfessor());
    foot.innerHTML =
      '<div class="ml-user"><i class="ph ph-user-circle"></i> ' + _esc(nome)
      + (prof ? ' <span class="ml-tag">professor</span>' : '') + '</div>'
      + '<button class="ml-sair" onclick="if(typeof authSair===\'function\'){menuLateralFechar();authSair();}">Sair</button>';
  }

  function abrir() {
    montar();
    if (typeof turmasRender === 'function') turmasRender(); // refresca o Apoio
    _pintarRodape();
    document.getElementById('ml-overlay').classList.add('on');
    document.getElementById('ml-drawer').classList.add('on');
    document.body.style.overflow = 'hidden';
    ABERTA = true;
  }

  function fechar() {
    var ov = document.getElementById('ml-overlay'), d = document.getElementById('ml-drawer');
    if (ov) ov.classList.remove('on');
    if (d) d.classList.remove('on');
    document.body.style.overflow = '';
    ABERTA = false;
  }

  /* Atalho: fecha a gaveta e faz scroll suave até uma secção do portal. */
  function ir(id) {
    fechar();
    var el = document.getElementById(id);
    if (el) setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 150);
  }

  /* Mostra/esconde o botão ☰ conforme a sessão. */
  function atualizarBotao() {
    montar();
    var b = document.getElementById('ml-burger');
    if (b) b.style.display = _temSessao() ? 'inline-flex' : 'none';
    if (!_temSessao() && ABERTA) fechar();
    if (ABERTA) { _pintarRodape(); }
  }

  function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  // expõe o necessário para os onclick inline
  window.menuLateralAbrir = abrir;
  window.menuLateralFechar = fechar;
  window.menuLateralIr = ir;

  // Esc fecha
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ABERTA) fechar(); });
  // reage a login/logout (mostra/esconde o ☰)
  document.addEventListener('cloud:auth', function () { atualizarBotao(); });
  // arranque (depois de auth-ui desenhar a topbar)
  document.addEventListener('DOMContentLoaded', function () { setTimeout(atualizarBotao, 500); });
})();
