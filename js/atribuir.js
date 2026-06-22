/* ════════════════════════════════════════════════════════════════
   atribuir.js — Atribuir trabalho a partir dos cursos (gerador, quiz,
   jogos). Mostra um botão «Atribuir» que captura curso+tema+subtema+tipo
   e cria uma TAREFA dirigida a um aluno ou grupo, com um deep-link que
   abre o hub no sítio certo. Carregado nos hubs de curso (não no portal).

   Depende de cloud.js + turmas.js. Só funciona com sessão de PROFESSOR.
   ════════════════════════════════════════════════════════════════ */

var Atribuir = (function () {
  function _prof() {
    return typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel()
      && Cloud.utilizador && Cloud.utilizador()
      && Cloud.ehProfessor && Cloud.ehProfessor();
  }
  function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* Botão pequeno «Atribuir». ctx = {curso, cursoNome, tema, temaNome,
     sub, subNome, tipo:'ficha'|'quiz'|'jogo', nivel}. Devolve HTML; só
     aparece a professores (senão devolve ''). */
  function botaoHTML(ctx) {
    if (!_prof()) return '';
    var enc = encodeURIComponent(JSON.stringify(ctx || {}));
    return '<button type="button" class="atr-btn" onclick="Atribuir.abrir(\'' + enc + '\')">'
      + '<i class="ph ph-paper-plane-tilt"></i> Atribuir a aluno/grupo</button>';
  }

  /* Botão FIXO: visível sempre (a professores). `fnNome` é o nome de uma
     função global que devolve o ctx no momento do clique (ou null/'' para
     abortar com uma mensagem). Reaparece no login. */
  function fixo(slotId, fnNome) {
    function pinta() {
      var el = document.getElementById(slotId);
      if (!el) return;
      el.innerHTML = _prof()
        ? '<button type="button" class="atr-btn" onclick="Atribuir.abrirFn(\'' + fnNome + '\')"><i class="ph ph-paper-plane-tilt"></i> Atribuir a aluno/grupo</button>'
        : '';
    }
    pinta();
    document.addEventListener('cloud:auth', pinta);
  }

  /* Abre a partir de uma função que devolve o contexto agora. */
  function abrirFn(fnNome) {
    var fn = window[fnNome];
    if (typeof fn !== 'function') return;
    var ctx = fn();
    if (!ctx) return; // a função já avisou o utilizador (ex.: sem temas)
    _overlayCarregar(ctx);
  }

  /* Constrói o deep-link para o hub abrir no sítio certo. Para fichas,
     usa os MESMOS parâmetros que o gerador já sabe restaurar
     (gfRestaurarDeURL): ?caps=..&dif=..&tipos=.. + abrir=fichas. */
  function _deepLink(ctx) {
    var origin = window.location.origin + window.location.pathname;
    if (ctx.tipo === 'ficha') {
      var caps = (ctx.tema || '').split('.').filter(Boolean).join(',');
      var p = [];
      if (caps) p.push('caps=' + encodeURIComponent(caps));
      if (ctx.nivel) p.push('dif=' + encodeURIComponent(ctx.nivel));
      p.push('tipos=exercicios');
      p.push('abrir=fichas');
      return origin + '?' + p.join('&');
    }
    // quiz/exercícios: abre a tab Praticar no cap/subtema/nível.
    if (ctx.tipo === 'quiz' || ctx.tipo === 'exercicios') {
      var q = ['abrir=praticar'];
      if (ctx.tema) q.push('cap=' + encodeURIComponent(ctx.tema));
      if (ctx.sub) q.push('st=' + encodeURIComponent(ctx.sub));
      if (ctx.nivel) q.push('nivel=' + encodeURIComponent(ctx.nivel));
      return origin + '?' + q.join('&');
    }
    // jogos: abre a tab Jogos do curso, no tema E no jogo escolhidos.
    if (ctx.tipo === 'jogo') return origin + '?abrir=jogos'
      + (ctx.tema ? '&cap=' + encodeURIComponent(ctx.tema) : '')
      + (ctx.jogo ? '&jogo=' + encodeURIComponent(ctx.jogo) : '');
    // outros: hash genérico
    return origin + '#abrir=' + encodeURIComponent([ctx.tipo || '', ctx.tema || '', ctx.sub || '', ctx.nivel || ''].join(':'));
  }

  /* Lista de jogos disponíveis no curso (id + label), conforme o ciclo.
     Usa o catálogo do systems.js se carregado; senão, um conjunto base. */
  function _jogosDoCurso(curso) {
    // Português tem jogos próprios (pt-jogos.js), diferentes da Matemática.
    if (/^port/.test(curso || '')) {
      return [
        { id: 'barca', label: 'A Barca' }, { id: 'quiz', label: 'Quiz Contra o Tempo' },
        { id: 'sopa', label: 'Sopa de Letras' }, { id: 'forca', label: 'Forca' },
        { id: 'corresp', label: 'Correspondência' }
      ];
    }
    var cat = (typeof _gCatalogo !== 'undefined') ? _gCatalogo : {
      j24: { label: '24' }, c4: { label: '4 em Linha' }, mine: { label: 'Campo Minado' },
      sdk: { label: 'Sudoku' }, hanoi: { label: 'Hanói' }, escape: { label: 'Escape Room' },
      corrida: { label: 'Corrida de Cálculo' }, pares: { label: 'Caça ao Par' }, vfrelampago: { label: 'V/F Relâmpago' }
    };
    var ids;
    if (typeof _gSetFor === 'function') { try { ids = _gSetFor(curso || ''); } catch (e) {} }
    if (!ids) {
      if (/mat5|mat6/.test(curso || '')) ids = ['j24', 'corrida', 'pares', 'c4', 'mine', 'escape'];
      else if (/mat10|mat11/.test(curso || '')) ids = ['vfrelampago', 'pares', 'c4', 'mine', 'corrida', 'escape'];
      else ids = ['j24', 'pares', 'c4', 'mine', 'vfrelampago', 'escape'];
    }
    return ids.map(function (id) { return { id: id, label: (cat[id] && cat[id].label) || id }; });
  }

  function _label(ctx) {
    var p = [];
    if (ctx.cursoNome) p.push(ctx.cursoNome);
    if (ctx.temaNome) p.push(ctx.temaNome);
    if (ctx.subNome) p.push(ctx.subNome);
    return p.join(' · ');
  }
  function _tituloTipo(ctx) {
    if (ctx.tipo === 'quiz' || ctx.tipo === 'exercicios') return 'Praticar: ';
    if (ctx.tipo === 'jogo') return 'Jogos: ';
    return 'Ficha: ';
  }

  /* Abre o seletor de destinatário (alunos + grupos) e cria a tarefa. */
  function abrir(enc) {
    if (!_prof()) { alert('Inicia sessão como professor para atribuir trabalho.'); return; }
    var ctx; try { ctx = JSON.parse(decodeURIComponent(enc)); } catch (e) { ctx = {}; }
    _overlayCarregar(ctx);
  }

  function _overlayCarregar(ctx) {
    // junta grupos + alunos para o seletor
    Promise.all([
      Turmas.todosOsGrupos ? Turmas.todosOsGrupos() : Promise.resolve([]),
      Turmas.todosOsAlunos ? Turmas.todosOsAlunos() : Promise.resolve([])
    ]).then(function (r) {
      _overlay(ctx, r[0] || [], r[1] || []);
    });
  }

  function _overlay(ctx, grupos, alunos) {
    _fechar();
    var ov = document.createElement('div');
    ov.id = 'atr-overlay';
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(20,16,40,.5);z-index:9998;display:flex;align-items:center;justify-content:center;padding:1rem';
    ov.onclick = function (e) { if (e.target === ov) _fechar(); };

    var opc = '';
    if (grupos.length) {
      opc += '<optgroup label="Grupos">';
      grupos.forEach(function (g) { opc += '<option value="g:' + g.id + '">' + _esc(g.nome) + '</option>'; });
      opc += '</optgroup>';
    }
    if (alunos.length) {
      opc += '<optgroup label="Alunos">';
      alunos.forEach(function (a) { opc += '<option value="a:' + a.aluno + '">' + _esc(a.nome) + '</option>'; });
      opc += '</optgroup>';
    }
    var semDestinos = !grupos.length && !alunos.length;

    // Seletor de capítulo/tema — só para JOGOS (escolhido no momento).
    var temaSel = '';
    var precisaTema = ctx.tipo === 'jogo' && ctx.caps && ctx.caps.length && !ctx.tema;
    if (precisaTema) {
      temaSel = '<label style="font-size:.78rem;font-weight:700;color:#6b6560">Tema dos jogos</label>'
        + '<select id="atr-tema" style="width:100%;box-sizing:border-box;border:1.5px solid #ddd8d2;border-radius:10px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin:.3rem 0 .8rem">'
        + ctx.caps.map(function (cp) { return '<option value="' + cp.n + '|' + _esc(cp.label) + '">' + _esc(cp.label) + '</option>'; }).join('')
        + '</select>';
    }
    // Seletor de QUAL jogo — só para JOGOS (respeitar o jogo que o prof escolhe).
    var jogoSel = '';
    if (ctx.tipo === 'jogo') {
      var jogos = _jogosDoCurso(ctx.curso);
      jogoSel = '<label style="font-size:.78rem;font-weight:700;color:#6b6560">Qual jogo</label>'
        + '<select id="atr-jogo" style="width:100%;box-sizing:border-box;border:1.5px solid #ddd8d2;border-radius:10px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin:.3rem 0 .8rem">'
        + jogos.map(function (j) { return '<option value="' + j.id + '|' + _esc(j.label) + '">' + _esc(j.label) + '</option>'; }).join('')
        + '</select>';
    }

    ov.innerHTML =
      '<div style="background:var(--white,#fff);border-radius:18px;max-width:380px;width:100%;padding:1.5rem;box-shadow:0 20px 60px rgba(0,0,0,.3);font-family:Montserrat,sans-serif">'
      + '<div style="font-weight:800;font-size:1.05rem;color:#2a2724;margin-bottom:.2rem"><i class="ph ph-paper-plane-tilt" style="color:#2e7d52"></i> Atribuir trabalho</div>'
      + '<div style="font-size:.82rem;color:#6b6560;margin-bottom:1rem">' + _esc(_tituloTipo(ctx) + (precisaTema ? ctx.cursoNome : _label(ctx))) + '</div>'
      + (semDestinos
          ? '<div style="font-size:.85rem;color:#922b21;background:#fdecea;border:1px solid #f0b8b0;border-radius:10px;padding:.7rem">Ainda não tens grupos nem alunos. Cria um grupo no portal (Turmas) primeiro.</div>'
          : temaSel + jogoSel
            + '<label style="font-size:.78rem;font-weight:700;color:#6b6560">Para quem</label>'
            + '<select id="atr-dest" style="width:100%;box-sizing:border-box;border:1.5px solid #ddd8d2;border-radius:10px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin:.3rem 0 .8rem">' + opc + '</select>'
            + '<label style="font-size:.78rem;font-weight:700;color:#6b6560">Instruções (opcional)</label>'
            + '<input id="atr-inst" placeholder="ex.: faz até 6.ª feira" style="width:100%;box-sizing:border-box;border:1.5px solid #ddd8d2;border-radius:10px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin:.3rem 0 .8rem">'
            + '<label style="font-size:.78rem;font-weight:700;color:#6b6560">Prazo (opcional)</label>'
            + '<input id="atr-prazo" type="date" style="width:100%;box-sizing:border-box;border:1.5px solid #ddd8d2;border-radius:10px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin:.3rem 0 1rem">'
            + '<button id="atr-enviar" style="width:100%;background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:12px;padding:.8rem;font-family:Montserrat,sans-serif;font-size:.92rem;font-weight:800;cursor:pointer">Atribuir</button>')
      + '<div style="text-align:center;margin-top:.7rem"><a href="#" id="atr-cancelar" style="font-size:.8rem;color:#6b6560">Cancelar</a></div>'
      + '</div>';
    document.body.appendChild(ov);
    var cancelar = document.getElementById('atr-cancelar');
    if (cancelar) cancelar.onclick = function (e) { e.preventDefault(); _fechar(); };
    var btn = document.getElementById('atr-enviar');
    if (btn) btn.onclick = function () { _enviar(ctx); };
  }

  function _enviar(ctx) {
    var sel = document.getElementById('atr-dest');
    if (!sel || !sel.value) return;
    var dest = sel.value; // "g:<id>" ou "a:<id>"
    var grupoId = dest.charAt(0) === 'g' ? dest.slice(2) : null;
    var paraAluno = dest.charAt(0) === 'a' ? dest.slice(2) : null;
    // jogo: aplica o tema escolhido no seletor
    var temaSel = document.getElementById('atr-tema');
    if (temaSel && temaSel.value) {
      var pp = temaSel.value.split('|');
      ctx.tema = pp[0]; ctx.temaNome = pp[1] || ('Cap. ' + pp[0]);
    }
    // jogo: aplica o jogo escolhido (id + nome) no rótulo e no link
    var jogoSelEl = document.getElementById('atr-jogo');
    if (jogoSelEl && jogoSelEl.value) {
      var jj = jogoSelEl.value.split('|');
      ctx.jogo = jj[0]; ctx.jogoNome = jj[1] || jj[0];
    }
    var inst = (document.getElementById('atr-inst') || {}).value || '';
    var prazo = (document.getElementById('atr-prazo') || {}).value || '';
    var btn = document.getElementById('atr-enviar');
    if (btn) { btn.disabled = true; btn.textContent = 'A atribuir…'; }

    Turmas.criarTarefa({
      titulo: _tituloTipo(ctx) + _label(ctx),
      instrucoes: inst,
      url: _deepLink(ctx),
      cursoNome: _label(ctx),
      prazo: prazo || null,
      grupoId: grupoId, paraAluno: paraAluno
    }).then(function (tarefa) {
      // acrescenta &tarefa=<id> ao link, para o aluno entrar em "modo-tarefa"
      if (tarefa && tarefa.id && tarefa.url && Turmas.atualizarUrlTarefa) {
        var sep = tarefa.url.indexOf('?') === -1 ? '?' : '&';
        Turmas.atualizarUrlTarefa(tarefa.id, tarefa.url + sep + 'tarefa=' + tarefa.id);
      }
      _fechar();
      if (typeof eduToast === 'function') eduToast('Trabalho atribuído! O aluno vê-o nas Turmas.', 'success');
      else alert('Trabalho atribuído!');
    }).catch(function (e) {
      if (btn) { btn.disabled = false; btn.textContent = 'Atribuir'; }
      alert(e.message || 'Não foi possível atribuir.');
    });
  }

  function _fechar() { var ov = document.getElementById('atr-overlay'); if (ov) ov.remove(); }

  /* Guarda o contexto do último gerador desenhado, para re-mostrar o
     botão quando a sessão do professor chegar (Cloud arranca async). */
  var _ultimoSlot = null, _ultimoCtx = null;
  /* Coloca o botão num contentor (id) com um dado contexto; memoriza para
     reavaliar quando a sessão mudar. */
  function montar(slotId, ctx) {
    _ultimoSlot = slotId; _ultimoCtx = ctx;
    var el = document.getElementById(slotId);
    if (!el) return;
    el.innerHTML = botaoHTML(ctx); // '' se não for professor
  }

  /* Liga o Cloud no arranque do hub e reavalia o botão quando a sessão
     ficar pronta (para aparecer mesmo que a ficha tenha sido gerada antes
     de o login resolver). */
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof Cloud !== 'undefined' && Cloud.init) Cloud.init(function () {});
  });
  document.addEventListener('cloud:auth', function () {
    if (_ultimoSlot && _ultimoCtx) {
      var el = document.getElementById(_ultimoSlot);
      if (el) el.innerHTML = botaoHTML(_ultimoCtx);
    }
  });

  return { botaoHTML: botaoHTML, montar: montar, fixo: fixo, abrir: abrir, abrirFn: abrirFn, ehProf: _prof };
})();
