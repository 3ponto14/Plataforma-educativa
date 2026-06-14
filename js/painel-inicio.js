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

  /* ── Momento do Professor: 3 cartões por dia (1 de cada categoria),
     para revelar. Ao revelar os 3, ganha XP e mantém ofensiva própria.
     Conteúdo determinístico por dia. Sem travessões. ── */
  var DICAS = [
    'Ao explicar frações, parte de algo concreto (uma pizza, uma barra de chocolate) antes de passar aos números. O significado vem primeiro, o símbolo depois.',
    'Erro comum nas equações: trocar o sinal ao passar termos para o outro lado. Peça aos alunos para confirmarem a solução, substituindo o valor encontrado.',
    'Na interpretação de textos, ensine a sublinhar as palavras-chave da pergunta antes de procurar a resposta. Metade dos erros é ler mal o que se pede.',
    'Comece a aula com uma pergunta, não com uma definição. A curiosidade prende mais do que a regra; a regra explica-se melhor quando já há vontade de saber.',
    'Nos problemas com enunciado, peça para escreverem primeiro "o que sei" e "o que quero descobrir". Organiza o pensamento antes das contas.',
    'Elogie o esforço, não só o resultado. "Trabalhaste bem este problema" motiva mais, a longo prazo, do que "és muito inteligente".',
    'Dê tempo de espera depois de fazer uma pergunta. Cinco segundos de silêncio fazem mais alunos pensar do que uma resposta rápida de um só.',
    'Erros são informação, não fracasso. Mostrar um erro comum no quadro e corrigi-lo em conjunto ensina mais do que evitar falar deles.'
  ];
  var CURIOSIDADES = [
    'O número π já foi calculado com mais de 60 biliões de casas decimais, mas para os cálculos do 3.º ciclo bastam 3,14. Boa para partilhar com a turma!',
    '"Os Lusíadas" têm 1102 estrofes e 8816 versos. Camões terá levado mais de 20 anos a escrevê-los. Um bom mote para falar de persistência.',
    'A palavra "álgebra" vem do árabe "al-jabr", que significa "reunião de partes partidas". Matemática e história de mãos dadas.',
    'O sinal de igual (=) foi inventado em 1557 por Robert Recorde, que escolheu duas linhas paralelas porque "nada é mais igual do que duas retas gémeas".',
    'O zero demorou séculos a ser aceite na Europa. Sem ele não haveria sistema decimal, nem informática. Uma boa conversa sobre o poder de uma ideia simples.',
    'A palavra "saudade" é muitas vezes dita como intraduzível, mas existe em galego e tem primas noutras línguas. Ótimo ponto de partida para falar de vocabulário.'
  ];
  var IDEIAS = [
    'Peça aos alunos que expliquem um conceito a um colega "como se ele tivesse faltado". Ensinar é a melhor forma de perceber se aprenderam.',
    'Faça um "erro de propósito" no quadro e desafie a turma a apanhá-lo. Atenção total garantida.',
    'Termine a aula com um "bilhete de saída": cada aluno escreve numa frase o que aprendeu. Em 2 minutos vê quem precisa de reforço.',
    'Use exemplos do dia a dia deles (jogos, redes, desporto) para introduzir percentagens, proporções e estatística. O abstrato torna-se próximo.',
    'Divida um problema difícil em três mais pequenos e resolva o primeiro em conjunto. A confiança ganha-se por etapas.',
    'Comece com um desafio de 2 minutos no quadro enquanto chegam. Foca a turma e ganha tempo de aula.'
  ];

  function _hojeISO() { return new Date().toISOString().slice(0, 10); }
  function _seedDoDia() {
    var d = _hojeISO(); var s = 0;
    for (var i = 0; i < d.length; i++) s = (s * 31 + d.charCodeAt(i)) % 100000;
    return s;
  }
  /* Os 3 cartões de hoje: uma dica, uma curiosidade, uma ideia. */
  function _cartoesDeHoje() {
    var s = _seedDoDia();
    return [
      { tipo: 'Dica de ensino', icon: '💡', txt: DICAS[s % DICAS.length] },
      { tipo: 'Curiosidade', icon: '✨', txt: CURIOSIDADES[s % CURIOSIDADES.length] },
      { tipo: 'Ideia para a aula', icon: '🎓', txt: IDEIAS[s % IDEIAS.length] }
    ];
  }

  /* ── Gamificação própria do professor (separada dos alunos) ── */
  var PROF_KEY = 'edupt_prof';
  function _profLoad() { try { return JSON.parse(localStorage.getItem(PROF_KEY)) || {}; } catch (e) { return {}; } }
  function _profSave(o) { try { localStorage.setItem(PROF_KEY, JSON.stringify(o)); } catch (e) {} }
  function _profFeitoHoje() { return _profLoad().dia === _hojeISO(); }
  /* Marca o momento de hoje como concluído: +XP e atualiza ofensiva. */
  function _profConcluir() {
    var o = _profLoad();
    if (o.dia === _hojeISO()) return o;            // já contou hoje
    var ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    o.streak = (o.dia === ontem ? (o.streak || 0) : 0) + 1;
    o.dia = _hojeISO();
    o.xp = (o.xp || 0) + 15;
    o.maxStreak = Math.max(o.maxStreak || 0, o.streak);
    _profSave(o);
    return o;
  }

  /* HTML do Momento do Professor: 3 cartões para revelar + barra de XP/🔥. */
  function _profMomentoHTML() {
    var cartoes = _cartoesDeHoje();
    var feito = _profFeitoHoje();
    var o = _profLoad();
    var h = '<div class="pi-prof-wrap" id="pi-prof-wrap">'
      + '<div class="pi-prof-head">'
      + '<span class="pi-prof-titulo">🎓 Momento do Professor</span>'
      + '<span class="pi-prof-pts">🔥 ' + (o.streak || 0) + ' · ⭐ ' + (o.xp || 0) + '</span>'
      + '</div>'
      + '<div class="pi-prof-grid" id="pi-prof-grid">';
    for (var i = 0; i < cartoes.length; i++) {
      var c = cartoes[i];
      // se já feito hoje, mostra logo revelado
      h += '<button class="pi-flip' + (feito ? ' aberto' : '') + '" id="pi-flip-' + i + '" onclick="profRevelar(' + i + ')">'
        + '<div class="pi-flip-frente"><span class="pi-flip-ic">' + c.icon + '</span><span class="pi-flip-lbl">' + _esc(c.tipo) + '</span><span class="pi-flip-hint">tocar para ver</span></div>'
        + '<div class="pi-flip-verso"><span class="pi-flip-tag">' + c.icon + ' ' + _esc(c.tipo) + '</span><span class="pi-flip-txt">' + _esc(c.txt) + '</span></div>'
        + '</button>';
    }
    h += '</div>'
      + '<div class="pi-prof-foot" id="pi-prof-foot">'
      + (feito ? '✅ Momento de hoje concluído! Volta amanhã para manteres a tua ofensiva 🔥'
               : 'Revela os 3 cartões para ganhares XP e manteres a tua ofensiva.')
      + '</div></div>';
    return h;
  }

  /* Revela um cartão; quando os 3 estão abertos, conclui (XP + ofensiva). */
  window.profRevelar = function (i) {
    var b = document.getElementById('pi-flip-' + i);
    if (b) b.classList.add('aberto');
    var grid = document.getElementById('pi-prof-grid');
    var todos = grid ? grid.querySelectorAll('.pi-flip') : [];
    var abertos = 0, total = 0;
    for (var k = 0; k < todos.length; k++) { total++; if (todos[k].classList.contains('aberto')) abertos++; }
    if (total > 0 && abertos >= total && !_profFeitoHoje()) {
      var o = _profConcluir();
      var foot = document.getElementById('pi-prof-foot');
      if (foot) foot.innerHTML = '✅ Momento de hoje concluído! +15 XP · ofensiva de <strong>' + o.streak + ' dia' + (o.streak === 1 ? '' : 's') + '</strong> 🔥';
      var head = document.querySelector('.pi-prof-pts');
      if (head) head.innerHTML = '🔥 ' + o.streak + ' · ⭐ ' + o.xp;
      if (typeof eduToast === 'function') eduToast('Momento do Professor concluído! +15 XP ⭐', 'success');
    }
  };

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
          ? 'O teu momento de hoje. As tuas turmas estão na barra Turmas.'
          : 'Pronto para estudar? Começa pelo desafio de hoje.') + '</div>'
      + '</div>';

    if (prof) {
      h += _profMomentoHTML();
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
