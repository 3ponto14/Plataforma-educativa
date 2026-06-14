/* ════════════════════════════════════════════════════════════════
   painel-inicio.js — Painel de boas-vindas (só COM sessão)
   Substitui o hero genérico por uma saudação personalizada:
     • Olá, [Nome] + o dia de hoje (por extenso).
     • Aluno:     mensagem + o Desafio do Dia (movido para o centro).
     • Professor: mensagem + resumo dos alunos do Apoio ao Estudo.
   A barra lateral continua com Apoio ao Estudo / Cursos (menu-lateral.js).
   ════════════════════════════════════════════════════════════════ */

(function () {
  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira',
    'quinta-feira', 'sexta-feira', 'sábado'];

  function _temSessao() {
    return typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel() && Cloud.utilizador && Cloud.utilizador();
  }
  function _dataExtenso() {
    var d = new Date();
    return DIAS[d.getDay()] + ', ' + d.getDate() + ' de ' + MESES[d.getMonth()];
  }
  function _saudacaoHora() {
    var h = new Date().getHours();
    if (h < 13) return 'Bom dia';
    if (h < 20) return 'Boa tarde';
    return 'Boa noite';
  }
  function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function render() {
    var sec = document.getElementById('portal-saudacao');
    if (!sec) return;
    var u = _temSessao();
    if (!u) {
      // sem sessão: resgata o Desafio (se estava no painel) e esconde o painel
      var d0 = document.getElementById('portal-desafio');
      var cat0 = document.getElementById('portal-catalogo');
      if (d0 && sec.contains(d0) && cat0) cat0.appendChild(d0);
      sec.innerHTML = '';
      sec.style.display = 'none';
      return; // fica o hero / cartão de entrada (tratado por portalAplicarSessao)
    }

    var nome = (u.email || '').split('@')[0];
    var prof = (typeof Cloud.ehProfessor === 'function' && Cloud.ehProfessor());

    var h = '<div class="pi-wrap">'
      + '<div class="pi-cab">'
      + '<div class="pi-dia">' + _dataExtenso() + '</div>'
      + '<h1 class="pi-ola">' + _saudacaoHora() + ', ' + _esc(nome) + ' 👋</h1>'
      + '<div class="pi-sub">' + (prof
          ? 'Acompanha aqui os teus alunos do Apoio ao Estudo.'
          : 'Pronto para estudar? Começa pelo desafio de hoje.') + '</div>'
      + '</div>';

    if (prof) {
      h += '<div id="pi-prof" class="pi-card"><div class="pi-card-load">A carregar alunos…</div></div>';
    } else {
      // o Desafio do Dia é movido para aqui (ver moverDesafio())
      h += '<div id="pi-desafio-slot" class="pi-desafio-slot"></div>';
    }
    h += '</div>';

    // Antes de reconstruir o painel, resgata o #portal-desafio se já cá
    // estava (de um render anterior), senão seria destruído pelo innerHTML.
    var desafioOrf = document.getElementById('portal-desafio');
    var catalogo = document.getElementById('portal-catalogo');
    if (desafioOrf && sec.contains(desafioOrf) && catalogo) catalogo.appendChild(desafioOrf);

    sec.innerHTML = h;
    // NÃO força display: a visibilidade da secção é decidida pela
    // navegação por secções (portal-nav.js). Aqui só se preenche.

    if (prof) {
      // o Desafio não faz parte do painel do professor: esconde-o
      var des = document.getElementById('portal-desafio');
      if (des) des.style.display = 'none';
      _pintarProf();
    } else {
      var des2 = document.getElementById('portal-desafio');
      if (des2) des2.style.display = '';
      _moverDesafio();
    }
  }

  /* Aluno: traz o cartão do Desafio (#portal-desafio) para o painel. */
  function _moverDesafio() {
    var slot = document.getElementById('pi-desafio-slot');
    var des = document.getElementById('portal-desafio');
    if (slot && des && des.parentNode !== slot) {
      des.style.maxWidth = 'none'; des.style.margin = '0';
      slot.appendChild(des);
    }
    if (typeof desafioRender === 'function') desafioRender();
  }

  /* Professor: resumo rápido dos alunos (nº + top 3 por XP). */
  function _pintarProf() {
    var box = document.getElementById('pi-prof');
    if (!box || typeof Turmas === 'undefined' || !Turmas.todosOsAlunos) return;
    Turmas.todosOsAlunos().then(function (alunos) {
      if (!box) return;
      if (!alunos.length) {
        box.innerHTML = '<div class="pi-card-h">Apoio ao Estudo</div>'
          + '<div class="pi-vazio">Ainda nenhum aluno com conta. Assim que se registarem, aparecem aqui e na barra ao lado.</div>';
        return;
      }
      var ativos = alunos.filter(function (a) { return a.xp > 0; }).length;
      var top = alunos.slice(0, 3);
      var h = '<div class="pi-card-h"><span><i class="ph ph-users-three"></i> Apoio ao Estudo</span>'
        + '<span class="pi-num">' + alunos.length + ' aluno' + (alunos.length === 1 ? '' : 's') + '</span></div>'
        + '<div class="pi-stat">' + ativos + ' já praticaram na plataforma.</div>'
        + '<div class="pi-top-h">Mais ativos</div><div class="pi-top">';
      top.forEach(function (a) {
        h += '<div class="pi-top-row"><span>' + _esc(a.nome) + '</span><span class="pi-top-xp">⭐ ' + a.xp + '</span></div>';
      });
      h += '</div><div class="pi-card-foot">Vê a lista completa e o detalhe de cada aluno na barra <strong>Apoio ao Estudo</strong>.</div>';
      box.innerHTML = h;
    });
  }

  window.painelInicioRender = render;
  document.addEventListener('cloud:auth', render);
  document.addEventListener('DOMContentLoaded', function () { setTimeout(render, 550); });
})();
