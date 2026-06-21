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
      + '<button class="ml-close" aria-label="Fechar" onclick="menuLateralFechar()"><i class="ph ph-x"></i></button>'
      + '</div>'
      + '<nav class="ml-nav" id="ml-nav">'
      + '<button class="ml-toggle" id="ml-toggle" type="button" aria-label="Recolher menu" title="Recolher menu" onclick="menuLateralRecolher()"><i class="ph ph-caret-double-left"></i></button>'
      + '<button class="ml-link" data-sec="inicio" onclick="menuLateralIr(\'inicio\')" title="Início"><i class="ph ph-house"></i> <span>Início</span></button>'
      + '<button class="ml-link" data-sec="cursos" onclick="menuLateralIr(\'cursos\')" title="Cursos"><i class="ph ph-books"></i> <span>Cursos</span></button>'
      + '<button class="ml-link" data-sec="apoio" onclick="menuLateralIr(\'apoio\')" title="Turmas"><i class="ph ph-users-three"></i> <span>Turmas</span></button>'
      + '</nav>'
      + '<div class="ml-foot" id="ml-foot"></div>';
    document.body.appendChild(d);

    // Barra de navegação INFERIOR (telemóvel): Início · Cursos · Turmas
    // sempre visíveis, em vez do ☰. Estilo app móvel.
    if (!document.getElementById('ml-bottombar')) {
      var bb = document.createElement('nav');
      bb.id = 'ml-bottombar';
      bb.setAttribute('role', 'navigation');
      bb.setAttribute('aria-label', 'Navegação');
      bb.innerHTML =
        '<button class="mlb-link" data-sec="inicio" onclick="menuLateralIr(\'inicio\')"><i class="ph ph-house"></i><span>Início</span></button>'
        + '<button class="mlb-link" data-sec="cursos" onclick="menuLateralIr(\'cursos\')"><i class="ph ph-books"></i><span>Cursos</span></button>'
        + '<button class="mlb-link" data-sec="apoio" onclick="menuLateralIr(\'apoio\')"><i class="ph ph-users-three"></i><span>Turmas</span></button>';
      document.body.appendChild(bb);
    }
  }

  function _pintarRodape() {
    var foot = document.getElementById('ml-foot');
    if (!foot) return;
    var u = _temSessao();
    if (!u) { foot.innerHTML = ''; return; }
    var nome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    var prof = (typeof Cloud.ehProfessor === 'function' && Cloud.ehProfessor());
    foot.innerHTML =
      '<div class="ml-user"><i class="ph ph-user-circle"></i> <span>' + _esc(nome)
      + (prof ? ' <span class="ml-tag">professor</span>' : '') + '</span></div>'
      + '<button class="ml-perfil" type="button" aria-expanded="false" aria-controls="ml-perfil-menu" onclick="menuLateralPerfil()"><i class="ph ph-pencil-simple"></i> Editar perfil <i class="ph ph-caret-down ml-perfil-caret"></i></button>'
      + '<button class="ml-sair" onclick="if(typeof authSair===\'function\'){menuLateralFechar();authSair();}">Sair</button>'
      + '<div class="ml-perfil-menu" id="ml-perfil-menu" hidden>'
      +   (prof ? '<button class="ml-perfil-item" title="Editar as disciplinas e anos que lecionas" onclick="if(typeof profEditarDisciplinas===\'function\')profEditarDisciplinas()"><i class="ph ph-sliders-horizontal"></i> Editar disciplinas</button>' : '')
      +   '<button class="ml-perfil-item" onclick="if(typeof authAlterarPassword===\'function\')authAlterarPassword()"><i class="ph ph-key"></i> Alterar palavra-passe</button>'
      +   '<button class="ml-perfil-item ml-perfil-danger" onclick="if(typeof authApagarConta===\'function\')authApagarConta()"><i class="ph ph-trash"></i> Apagar conta</button>'
      + '</div>';
  }

  /* Fecha o sub-painel "Editar perfil" (se estiver aberto). */
  function fecharPerfil() {
    var menu = document.getElementById('ml-perfil-menu');
    var btn = document.querySelector('.ml-perfil');
    if (menu && !menu.hasAttribute('hidden')) menu.setAttribute('hidden', '');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }

  /* Abre/fecha o sub-painel "Editar perfil" no rodapé. */
  function alternarPerfil() {
    var menu = document.getElementById('ml-perfil-menu');
    var btn = document.querySelector('.ml-perfil');
    if (!menu) return;
    var aberto = !menu.hasAttribute('hidden');
    if (aberto) { menu.setAttribute('hidden', ''); }
    else { menu.removeAttribute('hidden'); }
    if (btn) btn.setAttribute('aria-expanded', aberto ? 'false' : 'true');
  }
  window.menuLateralPerfil = alternarPerfil;

  /* Fecha o sub-painel ao clicar fora dele (comportamento de dropdown). */
  document.addEventListener('click', function (e) {
    var menu = document.getElementById('ml-perfil-menu');
    if (!menu || menu.hasAttribute('hidden')) return;
    var foot = document.getElementById('ml-foot');
    if (foot && !foot.contains(e.target)) fecharPerfil();
  });

  /* ── Modo recolhido (só ícones), apenas na barra fixa do computador ──
     A preferência fica guardada em localStorage para persistir entre páginas. */
  var COLAPSADA_KEY = 'ml_colapsada';
  function _colapsada() {
    try { return localStorage.getItem(COLAPSADA_KEY) === '1'; } catch (e) { return false; }
  }
  function _aplicarColapso() {
    // só faz sentido com a barra fixa (computador) e sessão iniciada
    var ligar = _fixo() && _temSessao() && _colapsada();
    document.body.classList.toggle('ml-collapsed', ligar);
    var tgl = document.getElementById('ml-toggle');
    if (tgl) {
      var rec = _colapsada();
      tgl.setAttribute('aria-label', rec ? 'Expandir menu' : 'Recolher menu');
      tgl.setAttribute('title', rec ? 'Expandir menu' : 'Recolher menu');
    }
  }
  function recolher() {
    try { localStorage.setItem(COLAPSADA_KEY, _colapsada() ? '0' : '1'); } catch (e) {}
    _aplicarColapso();
  }
  window.menuLateralRecolher = recolher;

  /* Abrir/fechar só fazem sentido no modo gaveta (telemóvel). */
  function abrir() {
    montar();
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

  /* Navega para uma SECÇÃO (inicio | cursos | apoio): troca o que está no
     centro (não faz scroll). A gaveta fecha-se ao navegar em telemóvel. */
  function ir(sec) {
    if (!_fixo()) fechar();
    // Dentro do portal: troca a secção sem recarregar.
    // Dentro de um hub de curso (mat5, port7, …): portalIrPara não existe,
    // por isso navegamos de volta ao portal, pedindo a secção pelo hash.
    if (typeof portalIrPara === 'function') {
      portalIrPara(sec);
      marcarAtivo(sec);
    } else {
      var base = _rootPathML();
      window.location.href = base + 'index.html#' + sec;
    }
  }

  /* Caminho para a raiz do site a partir da página atual (hubs vivem em matN/). */
  function _rootPathML() {
    return (typeof eduRootPath === 'function') ? eduRootPath()
      : (/\/(mat\d+|port\d+|fq\d+)(\/|$)/.test(window.location.pathname) ? '../' : '');
  }

  /* Realça o link ativo na barra lateral E na barra inferior. */
  function marcarAtivo(sec) {
    var grupos = [document.getElementById('ml-nav'), document.getElementById('ml-bottombar')];
    grupos.forEach(function (nav) {
      if (!nav) return;
      var bs = nav.querySelectorAll('.ml-link, .mlb-link');
      for (var i = 0; i < bs.length; i++) {
        if (bs[i].getAttribute('data-sec') === sec) bs[i].classList.add('ativo');
        else bs[i].classList.remove('ativo');
      }
    });
  }
  window.menuLateralMarcar = marcarAtivo;

  /* Decide o estado conforme sessão + tamanho de ecrã. */
  function aplicar() {
    montar();
    var sessao = _temSessao();
    var burger = document.getElementById('ml-burger');
    var drawer = document.getElementById('ml-drawer');
    var bottom = document.getElementById('ml-bottombar');

    if (!sessao) {
      // sem sessão: nada de barra, ☰ nem barra inferior; limpa tudo
      document.body.classList.remove('ml-fixed-on');
      document.body.classList.remove('ml-bottom-on');
      document.body.classList.remove('ml-collapsed');
      if (drawer) drawer.classList.remove('fixed');
      if (burger) burger.style.display = 'none';
      if (bottom) bottom.style.display = 'none';
      if (ABERTA) fechar();
      return;
    }

    if (_fixo()) {
      // computador: barra lateral FIXA; sem ☰; sem barra inferior
      if (ABERTA) fechar();                  // garante que não fica em modo gaveta
      if (burger) burger.style.display = 'none';
      if (bottom) bottom.style.display = 'none';
      document.body.classList.remove('ml-bottom-on');
      if (drawer) drawer.classList.add('fixed');
      document.body.classList.add('ml-fixed-on');
      _pintarRodape();
      _aplicarColapso();                     // aplica preferência "só ícones"
    } else {
      // telemóvel: barra de navegação INFERIOR sempre visível (sem ☰)
      if (ABERTA) fechar();
      if (drawer) drawer.classList.remove('fixed');
      document.body.classList.remove('ml-fixed-on');
      document.body.classList.remove('ml-collapsed'); // "só ícones" é só do modo fixo
      if (burger) burger.style.display = 'none';
      if (bottom) bottom.style.display = 'flex';
      document.body.classList.add('ml-bottom-on');
      marcarAtivo(window._portalSec || 'inicio');
    }
  }

  function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  window.menuLateralAbrir = abrir;
  window.menuLateralFechar = fechar;
  window.menuLateralIr = ir;

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { fecharPerfil(); if (ABERTA) fechar(); } });
  document.addEventListener('cloud:auth', function () { aplicar(); });
  // reage a mudanças de tamanho de ecrã (rodar telemóvel, redimensionar janela)
  if (MQ.addEventListener) MQ.addEventListener('change', aplicar);
  else if (MQ.addListener) MQ.addListener(aplicar); // navegadores antigos
  document.addEventListener('DOMContentLoaded', function () { setTimeout(aplicar, 500); });
})();
