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

  /* ── Momento do Professor: cartão rotativo (1 por dia), mistura dica de
     ensino, destaque da turma e curiosidade. Determinístico por dia. ── */
  var MOMENTOS_PROF = [
    { tipo: 'Dica de ensino', icon: '💡', txt: 'Ao explicar frações, parte de algo concreto (uma pizza, uma barra de chocolate) antes de passar aos números. O significado vem primeiro, o símbolo depois.' },
    { tipo: 'Dica de ensino', icon: '💡', txt: 'Erros mais comuns nas equações: trocar o sinal ao passar termos para o outro lado. Peça aos alunos para verificarem a solução substituindo o valor encontrado.' },
    { tipo: 'Curiosidade', icon: '✨', txt: 'O número π já foi calculado com mais de 60 biliões de casas decimais — mas para a maioria dos cálculos do 3.º ciclo bastam 3,14. Boa para partilhar com a turma!' },
    { tipo: 'Dica de ensino', icon: '💡', txt: 'Na interpretação de textos, ensine os alunos a sublinhar as palavras-chave da pergunta antes de procurarem a resposta. Metade dos erros é ler mal o que se pede.' },
    { tipo: 'Curiosidade', icon: '✨', txt: '«Os Lusíadas» têm 1102 estrofes e 8816 versos. Camões terá levado mais de 20 anos a escrevê-los. Um bom mote para falar de persistência.' },
    { tipo: 'Dica de ensino', icon: '💡', txt: 'Comece a aula com uma pergunta em vez de uma definição. A curiosidade prende mais do que a regra — a regra explica-se melhor quando já há vontade de saber.' },
    { tipo: 'Curiosidade', icon: '✨', txt: 'A palavra «álgebra» vem do árabe «al-jabr», que significa «reunião de partes partidas». Matemática e história de mãos dadas.' },
    { tipo: 'Dica de ensino', icon: '💡', txt: 'Nos problemas com enunciado, peça aos alunos para escreverem primeiro «o que sei» e «o que quero descobrir». Organiza o pensamento antes das contas.' },
    { tipo: 'Curiosidade', icon: '✨', txt: 'O sinal de igual (=) foi inventado em 1557 por Robert Recorde, que escolheu duas linhas paralelas «porque nada é mais igual do que duas retas gémeas».' },
    { tipo: 'Dica de ensino', icon: '💡', txt: 'Elogie o esforço, não só o resultado. «Trabalhaste bem este problema» motiva mais a longo prazo do que «és muito inteligente».' }
  ];

  function _hojeISO() { return new Date().toISOString().slice(0, 10); }
  function _seedDoDia() {
    var d = _hojeISO(); var s = 0;
    for (var i = 0; i < d.length; i++) s = (s * 31 + d.charCodeAt(i)) % 100000;
    return s;
  }
  function _momentoDeHoje() { return MOMENTOS_PROF[_seedDoDia() % MOMENTOS_PROF.length]; }

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
          ? 'O teu momento de hoje. Os alunos estão na barra Apoio ao Estudo.'
          : 'Pronto para estudar? Começa pelo desafio de hoje.') + '</div>'
      + '</div>';

    if (prof) {
      var m = _momentoDeHoje();
      h += '<div class="pi-prof-card">'
        + '<div class="pi-prof-tag"><span class="pi-prof-icon">' + m.icon + '</span> Momento do Professor · ' + _esc(m.tipo) + '</div>'
        + '<div class="pi-prof-txt">' + _esc(m.txt) + '</div>'
        + '<div class="pi-prof-foot">Volta amanhã para um novo. Para veres os alunos, abre <strong>Apoio ao Estudo</strong> na barra.</div>'
        + '</div>';
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
      // o Desafio (dos alunos) não faz parte do painel do professor
      var des = document.getElementById('portal-desafio');
      if (des) des.style.display = 'none';
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

  window.painelInicioRender = render;
  document.addEventListener('cloud:auth', render);
  document.addEventListener('DOMContentLoaded', function () { setTimeout(render, 550); });
})();
