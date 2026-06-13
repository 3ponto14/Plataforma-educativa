/* ════════════════════════════════════════════════════════════════
   menu-lateral.js — Barra lateral do Apoio ao Estudo
   Só COM sessão iniciada.
     • Computador (largo): barra FIXA sempre visível à esquerda (ícone +
       nome). O conteúdo do portal encolhe para o lado (padding no body).
     • Telemóvel (estreito): vira gaveta que abre com ☰ e fecha ao
       clicar fora / ✕ / Esc.
     • O conteúdo do Apoio (#portal-turmas, escrito por turmas-ui.js) é
       MOVIDO para dentro da barra — sem duplicar lógica.
     • Atalhos: Desafio do Dia e Cursos (scroll suave).
   ════════════════════════════════════════════════════════════════ */

(function () {
  var ABERTA = false;                       // estado da gaveta (modo telemóvel)
  var MQ = window.matchMedia('(min-width: 900px)'); // largo = barra fixa

  function _temSessao() {
    return typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel() && Cloud.utilizador && Cloud.utilizador();
  }
  function _fixo() { return MQ.matches; }   // ecrã largo → barra fixa

  /* Cria (uma vez) a estrutura: botão ☰ na topbar + barra + overlay. */
  function montar() {
    if (document.getElementById('ml-drawer')) return; // já montado

    var slot = document.querySelector('.site-topbar-actions');
    if (slot && !document.getElementById('ml-burger')) {
      var b = document.createElement('button');
      b.id = 'ml-burger';
      b.setAttribute('aria-label', 'Abrir menu');
      b.style.display = 'none';              // mostrado só em telemóvel c/ sessão
      b.innerHTML = '<i class="ph ph-list"></i>';
      b.onclick = abrir;
      slot.insertBefore(b, slot.firstChild);
    }

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
      + '<button class="ml-link" onclick="menuLateralIr(\'portal-desafio\')"><i class="ph ph-target"></i> <span>Desafio do Dia</span></button>'
      + '<button class="ml-link" onclick="menuLateralIr(\'portal-grid\')"><i class="ph ph-books"></i> <span>Cursos</span></button>'
      + '</nav>'
      + '<div class="ml-body" id="ml-body"></div>'
      + '<div class="ml-foot" id="ml-foot"></div>';
    document.body.appendChild(d);

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
      '<div class="ml-user"><i class="ph ph-user-circle"></i> <span>' + _esc(nome)
      + (prof ? ' <span class="ml-tag">professor</span>' : '') + '</span></div>'
      + '<button class="ml-sair" onclick="if(typeof authSair===\'function\'){menuLateralFechar();authSair();}">Sair</button>';
  }

  /* Abrir/fechar só fazem sentido no modo gaveta (telemóvel). */
  function abrir() {
    montar();
    if (typeof turmasRender === 'function') turmasRender();
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

  function ir(id) {
    if (!_fixo()) fechar();                  // em gaveta, fecha ao navegar
    var el = document.getElementById(id);
    if (el) setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 150);
  }

  /* Decide o estado conforme sessão + tamanho de ecrã. */
  function aplicar() {
    montar();
    var sessao = _temSessao();
    var burger = document.getElementById('ml-burger');
    var drawer = document.getElementById('ml-drawer');

    if (!sessao) {
      // sem sessão: nada de barra nem ☰; limpa tudo
      document.body.classList.remove('ml-fixed-on');
      if (drawer) drawer.classList.remove('fixed');
      if (burger) burger.style.display = 'none';
      if (ABERTA) fechar();
      return;
    }

    if (_fixo()) {
      // computador: barra FIXA sempre visível; sem ☰; sem overlay
      if (ABERTA) fechar();                  // garante que não fica em modo gaveta
      if (burger) burger.style.display = 'none';
      if (drawer) drawer.classList.add('fixed');
      document.body.classList.add('ml-fixed-on');
      if (typeof turmasRender === 'function') turmasRender();
      _pintarRodape();
    } else {
      // telemóvel: gaveta com ☰
      if (drawer) drawer.classList.remove('fixed');
      document.body.classList.remove('ml-fixed-on');
      if (burger) burger.style.display = 'inline-flex';
      if (ABERTA) _pintarRodape();
    }
  }

  function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  window.menuLateralAbrir = abrir;
  window.menuLateralFechar = fechar;
  window.menuLateralIr = ir;

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ABERTA) fechar(); });
  document.addEventListener('cloud:auth', function () { aplicar(); });
  // reage a mudanças de tamanho de ecrã (rodar telemóvel, redimensionar janela)
  if (MQ.addEventListener) MQ.addEventListener('change', aplicar);
  else if (MQ.addListener) MQ.addListener(aplicar); // navegadores antigos
  document.addEventListener('DOMContentLoaded', function () { setTimeout(aplicar, 500); });
})();
