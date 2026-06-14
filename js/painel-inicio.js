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

  /* ── Momento do Professor: JOGO de 3 perguntas por dia. O professor
     RESPONDE (V/F ou escolha múltipla), vê se acertou e a explicação, e
     ganha XP/ofensiva próprios. Conteúdo determinístico por dia.
     Cada item: { tipo:'vf'|'mc', q, opcoes[], resp, expl }. Sem travessões. ── */
  var MOMENTO_BANCO = [
    // ── Verdadeiro / Falso (pedagogia) ──
    { tipo: 'vf', q: 'Começar a aula com uma pergunta prende mais a atenção do que começar com uma definição.', resp: 'Verdadeiro', expl: 'A curiosidade abre a porta à regra: a definição faz mais sentido depois de existir vontade de saber.' },
    { tipo: 'vf', q: 'Elogiar a inteligência ("és muito inteligente") motiva mais, a longo prazo, do que elogiar o esforço.', resp: 'Falso', expl: 'Elogiar o esforço ("trabalhaste bem isto") cria mentalidade de crescimento; elogiar só o talento pode gerar medo de falhar.' },
    { tipo: 'vf', q: 'Dar 5 segundos de silêncio depois de uma pergunta faz mais alunos pensar do que aceitar logo a 1.ª resposta.', resp: 'Verdadeiro', expl: 'O "tempo de espera" aumenta a participação e a qualidade das respostas. O silêncio trabalha a favor.' },
    { tipo: 'vf', q: 'Mostrar e corrigir um erro comum no quadro é menos eficaz do que evitar falar de erros.', resp: 'Falso', expl: 'Os erros são informação. Analisá-los em conjunto ensina mais do que escondê-los.' },
    { tipo: 'vf', q: 'Pedir a um aluno que explique a matéria a um colega ajuda a consolidar o que ele próprio aprendeu.', resp: 'Verdadeiro', expl: 'Ensinar é a melhor forma de aprender: obriga a organizar e a clarificar as ideias.' },
    { tipo: 'vf', q: 'Nos problemas com enunciado, ir direto às contas costuma dar melhores resultados do que organizar os dados primeiro.', resp: 'Falso', expl: 'Escrever "o que sei" e "o que quero descobrir" antes das contas reduz erros e organiza o raciocínio.' },
    // ── Escolha múltipla (cultura geral para partilhar) ──
    { tipo: 'mc', q: 'Quantas estrofes têm, aproximadamente, "Os Lusíadas" de Camões?', opcoes: ['1102', '500', '3000', '250'], resp: '1102', expl: '1102 estrofes e 8816 versos. Um bom mote para falar de persistência com a turma!' },
    { tipo: 'mc', q: 'De que língua vem a palavra "álgebra"?', opcoes: ['Árabe', 'Latim', 'Grego', 'Francês'], resp: 'Árabe', expl: 'Vem do árabe "al-jabr", "reunião de partes partidas". Matemática e história de mãos dadas.' },
    { tipo: 'mc', q: 'Que valor de π chega para os cálculos do 3.º ciclo?', opcoes: ['3,14', '3,0', '4,0', '2,72'], resp: '3,14', expl: 'π já foi calculado com mais de 60 biliões de casas, mas 3,14 basta nestes anos.' },
    { tipo: 'mc', q: 'Em que século foi inventado o sinal de igual (=)?', opcoes: ['Século XVI', 'Século XIX', 'Século XX', 'Antiguidade'], resp: 'Século XVI', expl: 'Em 1557, por Robert Recorde, com duas linhas paralelas porque "nada é mais igual do que duas retas gémeas".' },
    { tipo: 'mc', q: 'Qual destas é a melhor forma de terminar uma aula para perceber quem precisa de reforço?', opcoes: ['Bilhete de saída (1 frase do que aprenderam)', 'Marcar muitos trabalhos de casa', 'Repetir a matéria toda', 'Acabar mais cedo'], resp: 'Bilhete de saída (1 frase do que aprenderam)', expl: 'Em 2 minutos, o "bilhete de saída" mostra logo quem percebeu e quem precisa de apoio.' },
    { tipo: 'mc', q: 'Para introduzir percentagens e estatística de forma próxima dos alunos, o que funciona melhor?', opcoes: ['Exemplos do dia a dia deles (jogos, desporto)', 'Só fórmulas no quadro', 'Decorar definições', 'Saltar os exemplos'], resp: 'Exemplos do dia a dia deles (jogos, desporto)', expl: 'Partir do que lhes é familiar torna o abstrato concreto e aumenta o interesse.' }
  ];

  function _hojeISO() { return new Date().toISOString().slice(0, 10); }
  function _seedDoDia() {
    var d = _hojeISO(); var s = 0;
    for (var i = 0; i < d.length; i++) s = (s * 31 + d.charCodeAt(i)) % 100000;
    return s;
  }
  /* As 3 perguntas de hoje (determinísticas, sem repetir). */
  function _perguntasDeHoje() {
    var s = _seedDoDia(), n = MOMENTO_BANCO.length, out = [], usados = {};
    for (var i = 0; i < 3 && out.length < n; i++) {
      var idx = (s + i * 37) % n;
      while (usados[idx]) idx = (idx + 1) % n;
      usados[idx] = 1; out.push(MOMENTO_BANCO[idx]);
    }
    return out;
  }

  /* ── Gamificação própria do professor (separada dos alunos) ── */
  var PROF_KEY = 'edupt_prof';
  function _profLoad() { try { return JSON.parse(localStorage.getItem(PROF_KEY)) || {}; } catch (e) { return {}; } }
  function _profSave(o) { try { localStorage.setItem(PROF_KEY, JSON.stringify(o)); } catch (e) {} }
  function _profFeitoHoje() { return _profLoad().dia === _hojeISO(); }
  /* Marca o momento de hoje como concluído: +XP (conforme acertos) e
     atualiza a ofensiva. certas = nº de respostas certas (0..3). */
  function _profConcluir(certas) {
    var o = _profLoad();
    if (o.dia === _hojeISO()) return o;            // já contou hoje
    var ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    o.streak = (o.dia === ontem ? (o.streak || 0) : 0) + 1;
    o.dia = _hojeISO();
    o.xp = (o.xp || 0) + 10 + (certas || 0) * 5;    // 10 base + 5 por acerto (máx 25)
    o.maxStreak = Math.max(o.maxStreak || 0, o.streak);
    _profSave(o);
    return o;
  }

  /* Estado do jogo do dia (em memória, durante a sessão). */
  var _pjEstado = { idx: 0, certas: 0, qs: [], respondido: false };

  /* HTML do Momento do Professor (jogo de 3 perguntas) + barra de XP/🔥. */
  function _profMomentoHTML() {
    var o = _profLoad();
    var cab = '<div class="pi-prof-wrap" id="pi-prof-wrap">'
      + '<div class="pi-prof-head">'
      + '<span class="pi-prof-titulo">🎓 Momento do Professor</span>'
      + '<span class="pi-prof-pts">🔥 ' + (o.streak || 0) + ' · ⭐ ' + (o.xp || 0) + '</span>'
      + '</div>'
      + '<div id="pi-prof-jogo"></div></div>';
    return cab;
  }

  /* Desenha o estado atual do jogo dentro de #pi-prof-jogo. */
  function _pjRender() {
    var box = document.getElementById('pi-prof-jogo');
    if (!box) return;
    if (_profFeitoHoje()) {
      var o = _profLoad();
      box.innerHTML = '<div class="pj-fim"><div class="pj-fim-ic">✅</div>'
        + '<div class="pj-fim-h">Momento de hoje concluído!</div>'
        + '<div class="pj-fim-sub">Ofensiva de <strong>' + (o.streak || 1) + ' dia' + ((o.streak || 1) === 1 ? '' : 's') + '</strong> 🔥 · ⭐ ' + (o.xp || 0) + '</div>'
        + '<div class="pj-fim-foot">Volta amanhã para um novo desafio.</div></div>';
      return;
    }
    if (!_pjEstado.qs.length) { _pjEstado = { idx: 0, certas: 0, qs: _perguntasDeHoje(), respondido: false }; }
    var i = _pjEstado.idx, q = _pjEstado.qs[i];
    var opcoes = q.tipo === 'vf' ? ['Verdadeiro', 'Falso'] : q.opcoes;
    var h = '<div class="pj-prog">Pergunta ' + (i + 1) + ' de ' + _pjEstado.qs.length + '</div>'
      + '<div class="pj-q">' + _esc(q.q) + '</div>'
      + '<div class="pj-opts" id="pj-opts">';
    for (var k = 0; k < opcoes.length; k++) {
      h += '<button class="pj-opt" onclick="profResponder(' + k + ')">' + _esc(opcoes[k]) + '</button>';
    }
    h += '</div><div class="pj-fb" id="pj-fb"></div>';
    box.innerHTML = h;
  }

  /* Responde à pergunta atual: mostra acerto + explicação, depois avança. */
  window.profResponder = function (k) {
    if (_pjEstado.respondido) return;
    _pjEstado.respondido = true;
    var q = _pjEstado.qs[_pjEstado.idx];
    var opcoes = q.tipo === 'vf' ? ['Verdadeiro', 'Falso'] : q.opcoes;
    var escolha = opcoes[k];
    var certo = (escolha === q.resp);
    if (certo) _pjEstado.certas++;
    // pinta os botões
    var opts = document.getElementById('pj-opts');
    if (opts) {
      var bs = opts.querySelectorAll('.pj-opt');
      for (var j = 0; j < bs.length; j++) {
        bs[j].disabled = true;
        if (opcoes[j] === q.resp) bs[j].classList.add('certa');
        else if (j === k) bs[j].classList.add('errada');
      }
    }
    var fb = document.getElementById('pj-fb');
    if (fb) {
      fb.innerHTML = '<div class="pj-fb-in ' + (certo ? 'ok' : 'no') + '">'
        + '<strong>' + (certo ? 'Certo! 🎉' : 'Quase!') + '</strong> ' + _esc(q.expl) + '</div>'
        + '<button class="pj-next" onclick="profAvancar()">' + (_pjEstado.idx + 1 < _pjEstado.qs.length ? 'Próxima →' : 'Concluir') + '</button>';
    }
  };

  /* Avança para a próxima pergunta ou conclui o momento. */
  window.profAvancar = function () {
    if (_pjEstado.idx + 1 < _pjEstado.qs.length) {
      _pjEstado.idx++; _pjEstado.respondido = false; _pjRender();
      return;
    }
    // concluir: XP conforme acertos + ofensiva
    var o = _profConcluir(_pjEstado.certas);
    var head = document.querySelector('.pi-prof-pts');
    if (head) head.innerHTML = '🔥 ' + o.streak + ' · ⭐ ' + o.xp;
    var box = document.getElementById('pi-prof-jogo');
    if (box) {
      box.innerHTML = '<div class="pj-fim"><div class="pj-fim-ic">' + (_pjEstado.certas === _pjEstado.qs.length ? '🏆' : '✅') + '</div>'
        + '<div class="pj-fim-h">Acertaste ' + _pjEstado.certas + ' de ' + _pjEstado.qs.length + '!</div>'
        + '<div class="pj-fim-sub">+' + (10 + _pjEstado.certas * 5) + ' XP · ofensiva de <strong>' + o.streak + ' dia' + (o.streak === 1 ? '' : 's') + '</strong> 🔥</div>'
        + '<div class="pj-fim-foot">Volta amanhã para um novo desafio.</div></div>';
    }
    if (typeof eduToast === 'function') eduToast('Momento do Professor concluído! +' + (10 + _pjEstado.certas * 5) + ' XP ⭐', 'success');
    if (typeof pmUpdateTopbar === 'function') pmUpdateTopbar();
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

    var nome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
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
      // Mural (avisos/feedback) + "O que tenho para fazer" + Desafio
      h += '<div id="pi-mural" class="pi-mural-slot"></div>';
      h += '<div id="pi-tarefas" class="pi-tarefas-slot"></div>';
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
      _pjRender(); // desenha o jogo do dia dentro do painel
      // o Desafio (dos alunos) não faz parte do painel do professor
      var des = document.getElementById('portal-desafio');
      if (des) des.style.display = 'none';
    } else {
      var des2 = document.getElementById('portal-desafio');
      if (des2) des2.style.display = '';
      _moverDesafio();
      _pintarMuralAluno();
      _pintarTarefasAluno();
    }
  }

  /* Aluno: mural de avisos do professor + feedback dirigido a si. */
  function _pintarMuralAluno() {
    var box = document.getElementById('pi-mural');
    if (!box || typeof Turmas === 'undefined' || !Turmas.muralDoAluno) return;
    Turmas.muralDoAluno().then(function (ms) {
      if (!box) return;
      if (!ms.length) { box.innerHTML = ''; return; } // sem mensagens: não ocupa espaço
      var h = '<div class="pi-mural-card">'
        + '<div class="pi-mural-h"><i class="ph ph-megaphone"></i> Avisos e mensagens</div>';
      ms.slice(0, 5).forEach(function (m) {
        var feedback = m.alcance === 'aluno';
        var etiqueta = feedback ? '💬 Para ti' : (m.alcance === 'grupo' ? '👥 ' + ((m.grupos && m.grupos.nome) || 'Grupo') : '📣 Aviso');
        h += '<div class="pi-mural-msg' + (feedback ? ' fb' : '') + '">'
          + '<div class="pi-mural-tag">' + _esc(etiqueta) + '</div>'
          + '<div class="pi-mural-txt">' + _esc(m.texto) + '</div>'
          + '<div class="pi-mural-de">' + _esc(m.prof_nome || 'professor') + '</div>'
          + '</div>';
      });
      h += '</div>';
      box.innerHTML = h;
    });
  }

  /* Aluno: "O que tenho para fazer" (tarefas do professor). */
  function _pintarTarefasAluno() {
    var box = document.getElementById('pi-tarefas');
    if (!box || typeof Turmas === 'undefined' || !Turmas.tarefasDoAluno) return;
    Turmas.tarefasDoAluno().then(function (ts) {
      if (!box) return;
      var pend = ts.filter(function (t) { return !t.feito; });
      if (!ts.length) { box.innerHTML = ''; return; } // sem tarefas: não ocupa espaço
      var h = '<div class="pi-tar-card">'
        + '<div class="pi-tar-h"><span><i class="ph ph-clipboard-text"></i> O que tenho para fazer</span>'
        + '<span class="pi-tar-num">' + (pend.length ? pend.length + ' por fazer' : 'tudo feito ✅') + '</span></div>';
      ts.forEach(function (t) {
        var prazo = t.prazo ? _esc(_tarPrazo(t.prazo)) : '';
        h += '<div class="pi-tar-row' + (t.feito ? ' feita' : '') + '">'
          + '<button class="pi-tar-chk" onclick="alunoMarcarTarefa(\'' + t.id + '\',' + (t.feito ? 'false' : 'true') + ')" title="' + (t.feito ? 'Marcar por fazer' : 'Marcar como feito') + '">' + (t.feito ? '✅' : '⬜') + '</button>'
          + '<div class="pi-tar-info">'
          + '<div class="pi-tar-tit">' + _esc(t.titulo) + (t.curso_nome ? ' <span class="pi-tar-tag">' + _esc(t.curso_nome) + '</span>' : '') + '</div>'
          + (t.instrucoes ? '<div class="pi-tar-desc">' + _esc(t.instrucoes) + '</div>' : '')
          + '<div class="pi-tar-meta">' + (prazo ? prazo + ' · ' : '') + 'por ' + _esc(t.prof_nome || 'professor')
          + (t.url ? ' · <a href="' + _escAttr(t.url) + '" target="_blank" rel="noopener">abrir ficha</a>' : '') + '</div>'
          + '</div></div>';
      });
      h += '</div>';
      box.innerHTML = h;
    });
  }
  function _tarPrazo(p) {
    var hoje = new Date().toISOString().slice(0, 10);
    if (p < hoje) return '⚠️ prazo passou';
    if (p === hoje) return '⏰ entrega hoje';
    return 'até ' + p;
  }
  function _escAttr(s) { return _esc(s).replace(/"/g, '&quot;'); }

  /* Aluno marca/desmarca uma tarefa e repinta. */
  window.alunoMarcarTarefa = function (id, feita) {
    if (typeof Turmas === 'undefined' || !Turmas.marcarTarefa) return;
    Turmas.marcarTarefa(id, feita).then(function () {
      _pintarTarefasAluno();
      if (feita && typeof eduToast === 'function') eduToast('Trabalho marcado como feito! ✅', 'success');
    });
  };

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
