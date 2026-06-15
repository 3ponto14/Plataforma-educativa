/* ════════════════════════════════════════════════════════════════
   turmas-ui.js — Apoio ao Estudo no portal (#portal-turmas)
   Só com sessão iniciada.
     • Professor: lista única e pesquisável de TODOS os alunos, com
       resumo por disciplina ao clicar, + gerir recursos (fichas/links).
     • Aluno: vê os recursos partilhados pelos professores.
   ════════════════════════════════════════════════════════════════ */

var _turmasAlunosCache = null; // alunos carregados (para a pesquisa filtrar)

function turmasRender() {
  var wrap = document.getElementById('portal-turmas');
  if (!wrap) return;
  if (typeof Cloud === 'undefined' || !Cloud.disponivel() || !Cloud.utilizador()) {
    wrap.innerHTML = ''; return; // sem sessão, não mostra nada
  }
  if (Cloud.ehProfessor()) _turmasRenderProfessor(wrap);
  else _turmasRenderAluno(wrap);
}

/* ════════════════════ PROFESSOR ════════════════════ */
/* Secção colapsável (accordion). Fechada por defeito. `extra` = HTML de
   um botão de ação à direita do título (opcional). */
function _acc(key, icon, cor, titulo, extra, conteudo) {
  return '<div class="acc">'
    + '<button class="acc-head" onclick="accToggle(\'' + key + '\')">'
    + '<span class="acc-tit"><i class="ph ph-caret-right acc-caret" id="acc-cx-' + key + '"></i> <i class="ph ' + icon + '" style="color:' + cor + '"></i> ' + titulo + '</span>'
    + (extra ? '<span class="acc-extra" onclick="event.stopPropagation()">' + extra + '</span>' : '')
    + '</button>'
    + '<div class="acc-body" id="acc-body-' + key + '" style="display:none">' + conteudo + '</div>'
    + '</div>';
}

function accToggle(key) {
  var b = document.getElementById('acc-body-' + key);
  var cx = document.getElementById('acc-cx-' + key);
  if (!b) return;
  var abrir = b.style.display === 'none';
  b.style.display = abrir ? 'block' : 'none';
  if (cx) cx.style.transform = abrir ? 'rotate(90deg)' : '';
}

/* Nome de um aluno a partir do id (usa a cache já carregada). */
function _nomeDoAluno(id) {
  var a = (_turmasAlunosCache || []).filter(function (x) { return x.aluno === id; })[0];
  return a ? a.nome : null;
}

/* Há mais do que um aluno com este nome na cache? (desambiguação) */
function _nomeRepetido(nome) {
  if (!nome) return false;
  var n = 0, alvo = ('' + nome).trim().toLowerCase();
  (_turmasAlunosCache || []).forEach(function (a) {
    if (('' + (a.nome || '')).trim().toLowerCase() === alvo) n++;
  });
  return n > 1;
}

/* Rótulo de um aluno: só o nome quando é único; nome + email quando há
   outro aluno com o mesmo nome (para os distinguir). `obj` pode ser o id
   ou um objeto {nome,email}. */
function _rotuloDoAluno(obj) {
  var a = (typeof obj === 'string')
    ? (_turmasAlunosCache || []).filter(function (x) { return x.aluno === obj; })[0]
    : obj;
  if (!a) return null;
  var nome = a.nome || 'aluno';
  if (a.email && _nomeRepetido(nome)) return nome + ' · ' + a.email;
  return nome;
}

/* Abre a secção «Todos os alunos», expande o aluno e faz scroll até ele.
   Usado nos cartões de trabalho/fichas dirigidos a um aluno. */
function irParaAluno(id) {
  var body = document.getElementById('acc-body-alunos');
  var cx = document.getElementById('acc-cx-alunos');
  if (body && body.style.display === 'none') {
    body.style.display = 'block';
    if (cx) cx.style.transform = 'rotate(90deg)';
  }
  // limpa qualquer filtro de pesquisa para garantir que o aluno está na lista
  var pesq = document.getElementById('turmas-pesquisa');
  if (pesq && pesq.value) { pesq.value = ''; turmasFiltrar(); }
  var det = document.getElementById('det-' + id);
  if (det && det.style.display === 'none') turmasToggleAluno(id);
  var alvo = document.getElementById('det-' + id) || document.getElementById('cx-' + id);
  if (alvo && alvo.scrollIntoView) alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function _turmasRenderProfessor(wrap) {
  var btnGrupos = '<button onclick="grupoEntrarComoProf()" style="background:var(--white);color:#2e7d52;border:1.5px solid #bfe3c9;border-radius:999px;padding:5px 11px;font-size:.74rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif">+ código</button>'
    + ' <button onclick="grupoCriarPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:5px 12px;font-size:.74rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">+ grupo</button>';
  var btnAviso = '<button onclick="avisoNovoPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:5px 12px;font-size:.74rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">+ aviso</button>';

  var alunosBody = '<input id="turmas-pesquisa" oninput="turmasFiltrar()" placeholder="🔎 Procurar aluno…" style="width:100%;box-sizing:border-box;border:1.5px solid var(--border);border-radius:999px;padding:6px 14px;font-size:.82rem;font-family:Montserrat,sans-serif;outline:none;margin-bottom:.6rem">'
    + '<div id="turmas-lista"><div style="color:var(--ink4);font-size:.85rem">A carregar alunos…</div></div>';
  // Avisos enviados vivem no sino 🔔 (notificações). Aqui só se gerem as
  // dúvidas/respostas dos alunos. O botão «+ aviso» continua no cabeçalho.
  var avisosBody = '<div style="font-size:.78rem;color:var(--ink4);margin-bottom:.6rem">Os avisos que envias aparecem no sino 🔔 dos alunos (no topo). Aqui vês e respondes às dúvidas deles.</div>'
    + '<div id="turmas-duvidas"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>';

  wrap.innerHTML =
    // Vista normal das Turmas — estrutura simples: onde trabalhas (Grupos,
    // Alunos) + responder a dúvidas. O trabalho/fichas vê-se DENTRO de cada
    // grupo e aluno (não há listas globais a duplicar).
    '<div id="turmas-home" style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.25rem 1.4rem">'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.45rem;font-weight:700;color:var(--ink1);margin-bottom:.15rem"><i class="ph ph-chalkboard-teacher" style="color:#2e7d52"></i> Turmas</div>'
    + '<div style="font-size:.82rem;color:var(--ink4);margin-bottom:1rem">Abre um grupo ou um aluno para ver e atribuir trabalho, fichas e mensagens.</div>'
    // barra de «dúvidas por responder» (só aparece se houver)
    + '<div id="turmas-alerta-duvidas"></div>'
    + _acc('grupos', 'ph-users-four', '#2e7d52', 'Grupos', btnGrupos, '<div id="turmas-grupos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>')
    + _acc('alunos', 'ph-users-three', '#2e7d52', 'Todos os alunos', '', alunosBody)
    + _acc('avisos', 'ph-chats-circle', '#4a3f7a', 'Dúvidas dos alunos', btnAviso, avisosBody)
    + '</div>'
    // Página dedicada de UM grupo (escondida até se clicar num grupo)
    + '<div id="turmas-grupo-pagina" style="display:none"></div>'
    // Página dedicada de UM aluno
    + '<div id="turmas-aluno-pagina" style="display:none"></div>';

  Turmas.todosOsAlunos().then(function (alunos) {
    _turmasAlunosCache = alunos;
    _turmasPintaAlunos(alunos);
  });
  _turmasPintaGrupos();
  _turmasPintaDuvidas();
  _turmasPintaRecursos(true);
}

/* ── Dúvidas e respostas dos alunos (vista do professor) ── */
function _turmasPintaDuvidas() {
  var el = document.getElementById('turmas-duvidas');
  if (!el || !Turmas.respostasDeAlunos) return;
  Turmas.respostasDeAlunos().then(function (ms) {
    if (!el) return;
    // barra de alerta no topo: nº de dúvidas por responder
    var porResp = ms.filter(function (m) { return m.alcance === 'duvida' && !m.respondido; }).length;
    var alerta = document.getElementById('turmas-alerta-duvidas');
    if (alerta) {
      alerta.innerHTML = porResp
        ? '<button onclick="(function(){var b=document.getElementById(\'acc-body-avisos\');if(b&&b.style.display===\'none\')accToggle(\'avisos\');var a=document.getElementById(\'acc-cx-avisos\');if(a)a.scrollIntoView({behavior:\'smooth\',block:\'center\'});})()" '
          + 'style="width:100%;text-align:left;display:flex;align-items:center;gap:.6rem;background:#fdf3e7;border:1.5px solid #f0d2a6;border-radius:12px;padding:.7rem 1rem;margin-bottom:.8rem;cursor:pointer;font-family:Montserrat,sans-serif">'
          + '<span style="font-size:1.2rem">⚠️</span>'
          + '<span style="font-weight:800;color:#9a6a1a;font-size:.88rem">' + porResp + (porResp === 1 ? ' dúvida por responder' : ' dúvidas por responder') + '</span>'
          + '<i class="ph ph-arrow-right" style="margin-left:auto;color:#9a6a1a"></i></button>'
        : '';
    }
    if (!ms.length) {
      el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.3rem 0">Sem dúvidas nem respostas dos alunos por agora.</div>';
      return;
    }
    // por responder primeiro (ordena: respondidas para o fim)
    ms.sort(function (a, b) { return (a.respondido ? 1 : 0) - (b.respondido ? 1 : 0); });
    el.innerHTML = ms.map(function (m) {
      var tipo = m.alcance === 'duvida' ? '❓ Dúvida' : '↩ Resposta';
      var feito = !!m.respondido;
      return '<div style="border:1.5px solid ' + (feito ? '#bfe3c9' : 'var(--border)') + ';border-radius:12px;padding:.7rem 1rem;margin-bottom:.5rem;background:' + (feito ? '#eef7f0' : '#f4f2fa') + '">'
        + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem">'
        + '<div style="min-width:0"><span style="font-size:.7rem;font-weight:800;color:#4a3f7a">' + tipo + ' · ' + _esc(m.de_nome || 'aluno') + '</span>'
        + (feito ? ' <span style="font-size:.68rem;font-weight:800;color:#2e7d52;background:#dff0e6;border:1px solid #bfe3c9;border-radius:6px;padding:1px 7px">✓ Respondido</span>' : '')
        + '<div style="font-size:.86rem;color:var(--ink2);line-height:1.5;margin-top:.3rem' + (feito ? ';opacity:.7' : '') + '">' + _esc(m.texto) + '</div></div>'
        + (feito
            ? '<button onclick="duvidaResponder(\'' + m.id + '\',\'' + (m.de_aluno || '') + '\',\'' + _escAttr(m.de_nome || 'aluno') + '\')" style="font-size:.72rem;font-weight:700;color:#2e7d52;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:4px 11px;cursor:pointer;font-family:Montserrat,sans-serif;flex-shrink:0">Responder de novo</button>'
            : '<button onclick="duvidaResponder(\'' + m.id + '\',\'' + (m.de_aluno || '') + '\',\'' + _escAttr(m.de_nome || 'aluno') + '\')" style="font-size:.74rem;font-weight:700;color:#fff;background:#4a3f7a;border:none;border-radius:999px;padding:4px 12px;cursor:pointer;font-family:Montserrat,sans-serif;flex-shrink:0">Responder</button>')
        + '</div></div>';
    }).join('');
  });
}

function duvidaResponder(msgId, alunoId, nome) {
  eduFormModal('Responder a ' + nome, [
    { id: 'texto', label: 'Resposta', tipo: 'textarea', obrig: true }
  ], function (v) {
    return Turmas.enviarMensagem({ texto: v.texto, alcance: 'aluno', paraAluno: alunoId, respostaA: msgId }).then(function () {
      if (typeof eduToast === 'function') eduToast('Resposta enviada a ' + nome + '! 💬', 'success');
      _turmasPintaDuvidas();
      if (typeof notificacoesRender === 'function') notificacoesRender();
    });
  }, { botao: 'Responder' });
}

/* (Os avisos enviados aparecem no sino 🔔 — ver notificacoes.js. A gestão
   aqui é só das dúvidas dos alunos.) */

/* Escolhe o destinatário (grupo OU aluno) por prompt numerado. Chama
   cb({grupoId, paraAluno, label}) ou nada se cancelar. Se `prefere` for
   {grupoId} ou {paraAluno}, salta a pergunta e usa esse destino. */
function _escolherDestino(prefere, cb) {
  if (prefere && (prefere.grupoId || prefere.paraAluno)) { cb(prefere); return; }
  Turmas.todosOsGrupos().then(function (gs) {
    var alunos = _turmasAlunosCache || [];
    var idx = [];
    gs.forEach(function (g) { idx.push({ grupoId: g.id, label: 'Grupo: ' + g.nome }); });
    alunos.forEach(function (a) { idx.push({ paraAluno: a.aluno, label: 'Aluno: ' + _rotuloDoAluno(a) }); });
    if (!idx.length) { alert('Cria primeiro um grupo ou espera que alunos se registem.'); return; }

    // Poucas opções: lista numerada simples (rápido).
    if (idx.length <= 12) {
      var opc = 'Para quem?\n';
      idx.forEach(function (o, i) { opc += (i + 1) + ' = ' + o.label + '\n'; });
      var esc = prompt(opc, '1');
      if (esc === null) return;
      var n = parseInt(esc, 10);
      if (!(n >= 1 && n <= idx.length)) { alert('Opção inválida.'); return; }
      cb(idx[n - 1]);
      return;
    }

    // Muitas opções: pesquisar por nome/email (ou nome do grupo).
    var termo = prompt('Para quem? Escreve parte do nome do aluno (ou do grupo), ou o email:\n(' + idx.length + ' destinos disponíveis)');
    if (termo === null) return;
    termo = termo.trim().toLowerCase();
    if (!termo) { alert('Escreve algo para procurar.'); return; }
    var hits = idx.filter(function (o) { return o.label.toLowerCase().indexOf(termo) !== -1; });
    if (!hits.length) { alert('Ninguém corresponde a «' + termo + '». Tenta outra vez.'); _escolherDestino(prefere, cb); return; }
    if (hits.length === 1) { cb(hits[0]); return; }
    if (hits.length > 20) { alert(hits.length + ' correspondem a «' + termo + '». Escreve mais letras para afinar.'); _escolherDestino(prefere, cb); return; }
    var opc2 = hits.length + ' correspondem. Escolhe o número:\n';
    hits.forEach(function (o, i) { opc2 += (i + 1) + ' = ' + o.label + '\n'; });
    var esc2 = prompt(opc2, '1');
    if (esc2 === null) return;
    var m = parseInt(esc2, 10);
    if (!(m >= 1 && m <= hits.length)) { alert('Opção inválida.'); return; }
    cb(hits[m - 1]);
  });
}

function avisoNovoPrompt(prefere) {
  eduFormModal('Novo aviso', [
    { id: 'texto', label: 'Aviso', tipo: 'textarea', placeholder: 'ex.: Teste de Matemática na próxima 6.ª feira', obrig: true }
  ], function (v) {
    return new Promise(function (resolve, reject) {
      _escolherDestino(prefere, function (dest) {
        var opts = dest.paraAluno
          ? { texto: v.texto, alcance: 'aluno', paraAluno: dest.paraAluno }
          : { texto: v.texto, alcance: 'grupo', grupoId: dest.grupoId };
        Turmas.enviarMensagem(opts).then(function () {
          if (typeof eduToast === 'function') eduToast('Aviso enviado! Aparece no sino 🔔 de ' + (dest.label || 'destinatário') + '.', 'success');
          if (typeof notificacoesRender === 'function') notificacoesRender();
          _grupoRepinta(dest.grupoId);
          resolve();
        }).catch(reject);
      });
    });
  }, { botao: 'Enviar aviso' });
}

/* Atalho «enviar» a um destino (aluno ou grupo): escolhe o quê num painel. */
function _enviarMenu(dest, titulo) {
  eduFormModal(titulo, [
    { id: 'o', label: 'O que queres enviar?', tipo: 'select', valor: 'trabalho', opcoes: [
      { value: 'trabalho', label: '📋 Trabalho' },
      { value: 'ficha', label: '📄 Ficha / recurso' },
      { value: 'aviso', label: '📣 Aviso' }
    ] }
  ], function (v) {
    // fecha este e abre o painel certo
    if (v.o === 'ficha') recursosAdicionarPrompt(dest);
    else if (v.o === 'aviso') avisoNovoPrompt(dest);
    else tarefaAtribuirPrompt(dest);
  }, { botao: 'Continuar' });
}
function alunoEnviarPrompt(alunoId, nome) { _enviarMenu({ paraAluno: alunoId, label: 'aluno ' + nome }, 'Enviar a ' + nome); }
function grupoEnviarPrompt(grupoId, nome) { _enviarMenu({ grupoId: grupoId, label: 'grupo ' + nome }, 'Enviar ao grupo ' + nome); }

/* Feedback a um aluno (chamado do detalhe do aluno). */
function alunoFeedbackPrompt(alunoId, nome) {
  eduFormModal('Feedback para ' + nome, [
    { id: 'texto', label: 'Mensagem', tipo: 'textarea', placeholder: 'só este aluno vê', obrig: true }
  ], function (v) {
    return Turmas.enviarMensagem({ texto: v.texto, alcance: 'aluno', paraAluno: alunoId }).then(function () {
      if (typeof eduToast === 'function') eduToast('Feedback enviado a ' + nome + '! 💬', 'success');
      if (typeof notificacoesRender === 'function') notificacoesRender();
    });
  }, { botao: 'Enviar' });
}

/* ── Grupos (vista do professor) ── */
var _turmasGruposCache = [];
function _turmasPintaGrupos() {
  var el = document.getElementById('turmas-grupos');
  if (!el) return;
  Turmas.todosOsGrupos().then(function (gs) {
    if (!el) return;
    _turmasGruposCache = gs;
    if (!gs.length) {
      el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.3rem 0">Ainda não há grupos. Cria um (ex.: «9.º A» ou «Apoio Mat») e adiciona alunos ou partilha o código para entrarem.</div>';
      return;
    }
    el.innerHTML = (gs.length > 1 ? '<div style="font-size:.74rem;color:var(--ink4);margin-bottom:.5rem">' + gs.length + ' grupos</div>' : '')
      + gs.map(function (g) {
      return '<div class="grp">'
        + '<div class="grp-head">'
        + '<div class="grp-head-main" onclick="grupoToggle(\'' + g.id + '\',\'' + _escAttr(g.nome) + '\')" style="cursor:pointer">'
        + '<i class="ph ph-users-three grp-caret" style="color:#2e7d52"></i>'
        + '<span class="grp-nome">' + _esc(g.nome) + '</span>'
        + '<span class="grp-count" id="grupo-n-' + g.id + '"></span>'
        + '<i class="ph ph-caret-right" style="color:var(--ink4);margin-left:auto"></i>'
        + '</div>'
        + '<button class="grp-x" onclick="grupoApagar(\'' + g.id + '\',\'' + _escAttr(g.nome) + '\')" title="Apagar grupo" style="margin-left:.4rem">✕</button>'
        + '</div>'
        + '</div>';
    }).join('');
    // contagem de alunos em cada cartão (pedidos leves, em paralelo)
    gs.forEach(function (g) {
      if (!Turmas.alunosDoGrupo) return;
      Turmas.alunosDoGrupo(g.id).then(function (ms) {
        var el = document.getElementById('grupo-n-' + g.id);
        if (el) el.textContent = '· ' + ms.length + (ms.length === 1 ? ' aluno' : ' alunos');
      });
    });
  });
}

/* Clicar num grupo abre uma PÁGINA dedicada só desse grupo (em vez de
   expandir no meio dos outros). Esconde a vista normal das Turmas. */
function grupoToggle(id, nome) {
  var home = document.getElementById('turmas-home');
  var pag = document.getElementById('turmas-grupo-pagina');
  if (!pag) return;
  var g = (_turmasGruposCache || []).filter(function (x) { return x.id === id; })[0];
  var codigo = (g && g.codigo) || '';
  pag.innerHTML =
    '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.1rem 1.4rem 1.4rem">'
    + '<button onclick="grupoVoltar()" style="display:inline-flex;align-items:center;gap:.4rem;background:none;border:none;color:#2e7d52;font-weight:700;font-size:.85rem;cursor:pointer;font-family:Montserrat,sans-serif;padding:0;margin-bottom:.8rem"><i class="ph ph-arrow-left"></i> Voltar aos grupos</button>'
    + '<div style="display:flex;align-items:center;justify-content:space-between;gap:.6rem;flex-wrap:wrap;margin-bottom:.2rem">'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.5rem;font-weight:700;color:var(--ink1);min-width:0"><i class="ph ph-users-four" style="color:#2e7d52"></i> ' + _esc(nome) + '</div>'
    + '<button class="grp-x" onclick="grupoApagar(\'' + id + '\',\'' + _escAttr(nome) + '\')" title="Apagar grupo">✕</button>'
    + '</div>'
    + '<div id="grupo-det-' + id + '"></div>'
    + '</div>';
  if (home) home.style.display = 'none';
  pag.style.display = 'block';
  try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
  _grupoPintaDet(id, nome);
}

/* Volta da página do grupo à lista de grupos. */
function grupoVoltar() {
  var home = document.getElementById('turmas-home');
  var pag = document.getElementById('turmas-grupo-pagina');
  if (pag) { pag.style.display = 'none'; pag.innerHTML = ''; }
  if (home) home.style.display = '';
  // garante a secção Grupos aberta ao voltar
  var b = document.getElementById('acc-body-grupos');
  if (b && b.style.display === 'none') accToggle('grupos');
  _turmasPintaGrupos();
}

/* (Re)desenha o detalhe de um grupo aberto. */
function _grupoPintaDet(id, nome) {
  var det = document.getElementById('grupo-det-' + id);
  if (!det) return;
  // garante que sou professor deste grupo (auto-corrige grupos antigos)
  if (Turmas.garantirProfDoGrupo) {
    var g = (_turmasGruposCache || []).filter(function (x) { return x.id === id; })[0];
    if (g) Turmas.garantirProfDoGrupo(g);
  }
  det.innerHTML = '<div style="color:var(--ink4);font-size:.8rem;padding:.4rem 0">A carregar…</div>';
  Turmas.alunosDoGrupo(id).then(function (membros) {
    var codigo = (_turmasGruposCache.filter(function (x) { return x.id === id; })[0] || {}).codigo || '';
    // atualiza a contagem no cabeçalho
    var nEl = document.getElementById('grupo-n-' + id);
    if (nEl) nEl.textContent = '· ' + membros.length + (membros.length === 1 ? ' aluno' : ' alunos');

    // linha de meta: nº alunos · código · enviar a todos
    var h = '<div class="grp-meta">'
      + '<span>' + membros.length + (membros.length === 1 ? ' aluno' : ' alunos') + '</span>'
      + '<span>código <span class="grp-code">' + _esc(codigo) + '</span></span>'
      + '<button class="grp-send" onclick="grupoEnviarPrompt(\'' + id + '\',\'' + _escAttr(nome) + '\')"><i class="ph ph-paper-plane-tilt"></i> enviar a todos</button>'
      + '</div>';

    if (!membros.length) {
      h += '<div style="color:var(--ink4);font-size:.8rem;margin-bottom:.5rem">Ainda sem alunos. Adiciona abaixo ou partilha o código.</div>';
    } else {
      // guarda os membros deste grupo para a pesquisa/paginação (aguenta 300+)
      _grupoMembrosCache[id] = membros;
      _grupoLimite[id] = _GRUPO_PASSO;
      // pesquisa por nome (sempre que vale a pena)
      if (membros.length > 3) {
        h += '<input type="search" id="grupo-procura-' + id + '" oninput="grupoFiltrarAlunos(\'' + id + '\')" placeholder="🔍 Procurar aluno pelo nome…" class="grp-procura">';
      }
      h += '<div id="grupo-lista-' + id + '"></div>'; // preenchido por _grupoPintaLista
      h += '<div id="grupo-procura-vazio-' + id + '" style="display:none;color:var(--ink4);font-size:.8rem;padding:.4rem 0">Nenhum aluno corresponde à pesquisa.</div>';
    }
    // seletor para adicionar alunos da lista geral que ainda não estão no grupo
    var jaIds = {}; membros.forEach(function (m) { jaIds[m.aluno] = 1; });
    var disp = (_turmasAlunosCache || []).filter(function (a) { return !jaIds[a.aluno]; });
    if (disp.length) {
      h += '<div style="margin-top:.6rem;display:flex;gap:.4rem;flex-wrap:wrap;align-items:center">'
        + '<select id="grupo-add-' + id + '" style="border:1.5px solid var(--border);border-radius:8px;padding:5px 10px;font-size:.82rem;font-family:Montserrat,sans-serif;max-width:200px">'
        + '<option value="">+ Adicionar aluno…</option>'
        + disp.map(function (a) { return '<option value="' + a.aluno + '|' + _escAttr(a.nome) + '">' + _esc(_rotuloDoAluno(a) || a.nome) + '</option>'; }).join('')
        + '</select>'
        + '<button onclick="grupoAdicionar(\'' + id + '\',\'' + _escAttr(nome) + '\')" style="font-size:.78rem;font-weight:700;color:#2e7d52;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:5px 12px;cursor:pointer;font-family:Montserrat,sans-serif">Adicionar</button>'
        + '</div>';
    }
    // ── Trabalho · Avisos · Fichas deste grupo (com histórico do que já foi enviado) ──
    h += '<div id="grupo-conteudo-' + id + '" style="margin-top:.8rem"><div style="color:var(--ink4);font-size:.8rem">A carregar…</div></div>';
    det.innerHTML = h;
    if (membros.length) _grupoPintaLista(id, nome);
    _grupoPintaConteudo(id, nome);
  });
}

/* ── Lista de alunos do grupo: paginada (aguenta 300+) + pesquisa ──
   Mostra _GRUPO_PASSO de cada vez com «mostrar mais»; a pesquisa filtra
   sobre TODOS os membros e mostra os resultados todos. */
var _grupoMembrosCache = {};   // grupoId -> [membros]
var _grupoLimite = {};         // grupoId -> quantos mostrar
var _GRUPO_PASSO = 10;

function _grupoMembroRowHTML(id, nome, m) {
  var sid = id + '_' + m.aluno;
  var nm = m.nome_aluno || 'aluno';
  var temMail = _nomeRepetido(nm);
  var a = (_turmasAlunosCache || []).filter(function (x) { return x.aluno === m.aluno; })[0];
  var mail = (temMail && a && a.email) ? a.email : '';
  return '<div class="grupo-aluno-row grp-aluno" data-nome="' + _escAttr((nm || '').toLowerCase()) + '">'
    + '<span class="grp-aluno-nome" onclick="abrirPaginaAluno(\'' + m.aluno + '\',\'' + id + '\')" style="cursor:pointer">' + _esc(nm)
    + (mail ? ' <span class="grp-aluno-mail">· ' + _esc(mail) + '</span>' : '')
    + '</span>'
    + '<span class="grp-acts">'
    + '<button class="grp-ic is-reg" title="Registo de sessões" data-tip="Registo de sessões" onclick="sessaoToggle(\'' + id + '\',\'' + m.aluno + '\',\'' + _escAttr(nm) + '\')">📓</button>'
    + '<button class="grp-ic is-msg" title="Mensagens" data-tip="Mensagens" onclick="conversaToggle(\'' + id + '\',\'' + m.aluno + '\',\'' + _escAttr(nm) + '\')">💬</button>'
    + '<button class="grp-ic is-rem tip-end" title="Remover do grupo" data-tip="Remover do grupo" onclick="grupoRemover(\'' + id + '\',\'' + m.aluno + '\',\'' + _escAttr(nome) + '\')">✕</button>'
    + '</span>'
    + '<div id="sessao-' + sid + '" style="display:none;flex-basis:100%"></div>'
    + '<div id="conversa-' + sid + '" style="display:none;flex-basis:100%"></div>'
    + '</div>';
}

function _grupoPintaLista(id, nome, termo) {
  var lista = document.getElementById('grupo-lista-' + id);
  if (!lista) return;
  var todos = _grupoMembrosCache[id] || [];
  termo = (termo || '').trim().toLowerCase();
  var filtrados = !termo ? todos : todos.filter(function (m) {
    return ((m.nome_aluno || '').toLowerCase().indexOf(termo) !== -1);
  });
  var vazio = document.getElementById('grupo-procura-vazio-' + id);
  if (vazio) vazio.style.display = filtrados.length ? 'none' : 'block';
  // com pesquisa: mostra todos os resultados; sem pesquisa: respeita o limite
  var lim = termo ? filtrados.length : (_grupoLimite[id] || _GRUPO_PASSO);
  var mostra = filtrados.slice(0, lim);
  var h = mostra.map(function (m) { return _grupoMembroRowHTML(id, nome, m); }).join('');
  if (!termo && filtrados.length > lim) {
    h += '<div style="text-align:center;margin-top:.4rem">'
      + '<button onclick="grupoMostrarMais(\'' + id + '\',\'' + _escAttr(nome) + '\')" style="background:var(--white);color:#2e7d52;border:1.5px solid #bfe3c9;border-radius:999px;padding:5px 14px;font-size:.78rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif">Mostrar mais (' + (filtrados.length - lim) + ')</button>'
      + '<div style="font-size:.72rem;color:var(--ink4);margin-top:.3rem">A mostrar ' + lim + ' de ' + filtrados.length + ' · usa a pesquisa para encontrar</div></div>';
  }
  lista.innerHTML = h;
}

function grupoMostrarMais(id, nome) {
  _grupoLimite[id] = (_grupoLimite[id] || _GRUPO_PASSO) + _GRUPO_PASSO;
  _grupoPintaLista(id, nome);
}

/* Mostra, dentro da página do grupo, o que já foi enviado a este grupo:
   trabalho atribuído, avisos enviados e fichas — cada um com "+ novo".
   Resolve o «enviei um aviso e não vejo nada no grupo». */
function _grupoPintaConteudo(id, nome) {
  var box = document.getElementById('grupo-conteudo-' + id);
  if (!box || !Turmas.resumoDoGrupo) return;
  Turmas.resumoDoGrupo(id).then(function (r) {
    if (!box) return;
    function bloco(titulo, icon, lista, vazio, btnLabel, btnFn, render) {
      var h = '<div class="grp-bloco">'
        + '<div class="grp-bloco-h"><span><i class="ph ' + icon + '"></i> ' + titulo + ' <span class="grp-bloco-n">' + lista.length + '</span></span>'
        + '<button class="grp-bloco-add" onclick="' + btnFn + '">＋ ' + btnLabel + '</button></div>';
      if (!lista.length) h += '<div class="grp-bloco-vazio">' + vazio + '</div>';
      else h += lista.map(render).join('');
      return h + '</div>';
    }
    var destFn = "{grupoId:'" + id + "',label:'grupo " + _escAttr(nome) + "'}";
    var h = '';
    // Trabalho (com «Ver quem fez»: notas + onde errou/acertou)
    var nMembros = (r.alunos || []).length;
    h += bloco('Trabalho atribuído', 'ph-clipboard-text', r.tarefas,
      'Ainda não atribuíste trabalho a este grupo.', 'trabalho', 'tarefaAtribuirPrompt(' + destFn + ')',
      function (t) {
        var total = t.para_aluno ? 1 : nMembros;
        return '<div class="grp-item-wrap">'
          + '<div class="grp-item"><span class="grp-item-tit">' + _esc(t.titulo)
          + (t.curso_nome ? ' <span class="grp-item-tag">' + _esc(t.curso_nome) + '</span>' : '') + '</span>'
          + '<button class="grp-item-x" title="Apagar" onclick="tarefaApagar(\'' + t.id + '\',\'' + _escAttr(t.titulo) + '\')">✕</button></div>'
          + '<div id="tarefa-fez-' + t.id + '" style="font-size:.76rem;margin:.1rem 0 .3rem"><a href="#" onclick="tarefaVerQuemFez(\'' + t.id + '\',' + total + ');return false" style="color:#2e7d52;font-weight:700">Ver quem fez ›</a></div>'
          + '</div>';
      });
    // Avisos enviados (o que faltava!)
    h += bloco('Avisos enviados', 'ph-megaphone', r.avisos,
      'Ainda não enviaste avisos a este grupo.', 'aviso', 'avisoNovoPrompt({grupoId:\'' + id + '\',label:\'grupo ' + _escAttr(nome) + '\'})',
      function (a) {
        var d = (a.criado || '').slice(0, 10);
        return '<div class="grp-item"><span class="grp-item-tit">📣 ' + _esc(a.texto) + '</span>'
          + '<span class="grp-item-data">' + _esc(d) + '</span></div>';
      });
    // Fichas
    h += bloco('Fichas e recursos', 'ph-link-simple', r.recursos,
      'Ainda não partilhaste fichas com este grupo.', 'ficha', 'recursosAdicionarPrompt({grupoId:\'' + id + '\',label:\'grupo ' + _escAttr(nome) + '\'})',
      function (rc) {
        return '<div class="grp-item"><a class="grp-item-tit" href="' + _escAttr(rc.url) + '" target="_blank" rel="noopener">📄 ' + _esc(rc.titulo) + '</a>'
          + '<button class="grp-item-x" title="Remover" onclick="recursosApagar(\'' + rc.id + '\',\'' + _escAttr(rc.titulo) + '\')">✕</button></div>';
      });
    box.innerHTML = h;
  });
}

/* Repinta o conteúdo (trabalho/avisos/fichas) de um grupo, se estiver
   aberto. Chamado após enviar algo, para o item aparecer logo. */
function _grupoRepinta(grupoId) {
  if (!grupoId) return;
  var det = document.getElementById('grupo-det-' + grupoId);
  if (!det || det.style.display === 'none') return;
  var g = (_turmasGruposCache || []).filter(function (x) { return x.id === grupoId; })[0];
  _grupoPintaConteudo(grupoId, (g && g.nome) || '');
}

/* Filtra os alunos de um grupo pelo nome, à medida que se escreve. */
function grupoFiltrarAlunos(id) {
  var inp = document.getElementById('grupo-procura-' + id);
  if (!inp) return;
  var g = (_turmasGruposCache || []).filter(function (x) { return x.id === id; })[0];
  // re-renderiza a lista a partir de TODOS os membros (não só os visíveis),
  // para a pesquisa encontrar mesmo quando há centenas paginadas.
  _grupoPintaLista(id, (g && g.nome) || '', inp.value);
}

function grupoCriarPrompt() {
  eduFormModal('Novo grupo', [
    { id: 'nome', label: 'Nome do grupo', placeholder: 'ex.: 9.º A — Matemática, ou Apoio ao Estudo', obrig: true }
  ], function (v) {
    return Turmas.criarGrupo(v.nome).then(function (g) {
      if (typeof eduToast === 'function') eduToast('Grupo criado! Código: ' + g.codigo, 'success');
      _turmasPintaGrupos();
    });
  }, { botao: 'Criar grupo' });
}

function grupoApagar(id, nome) {
  if (!confirm('Apagar o grupo «' + nome + '»? Os alunos deixam de estar nele.')) return;
  Turmas.apagarGrupo(id).then(function () { _turmasPintaGrupos(); });
}

/* Professor entra num grupo de outro professor (pelo código) para ajudar. */
function grupoEntrarComoProf() {
  eduFormModal('Entrar num grupo (professor)', [
    { id: 'cod', label: 'Código do grupo', placeholder: 'dado pelo professor que criou o grupo', obrig: true }
  ], function (v) {
    return Turmas.entrarComoProf(v.cod).then(function (g) {
      if (typeof eduToast === 'function') eduToast('Entraste no grupo «' + g.nome + '» como professor.', 'success');
      _turmasPintaGrupos();
    });
  }, { botao: 'Entrar' });
}

function grupoAdicionar(grupoId, nome) {
  var sel = document.getElementById('grupo-add-' + grupoId);
  if (!sel || !sel.value) return;
  var parts = sel.value.split('|');
  Turmas.adicionarAoGrupo(grupoId, parts[0], parts[1] || '').then(function () {
    _grupoPintaDet(grupoId, nome);
    if (typeof eduToast === 'function') eduToast('Aluno adicionado ao grupo.', 'success');
  });
}

function grupoRemover(grupoId, alunoId, nome) {
  Turmas.removerDoGrupo(grupoId, alunoId).then(function () { _grupoPintaDet(grupoId, nome); });
}

/* ── Registo de sessões com um aluno (dentro de um grupo) ── */
function sessaoToggle(grupoId, alunoId, nome) {
  var box = document.getElementById('sessao-' + grupoId + '_' + alunoId);
  if (!box) return;
  if (box.style.display !== 'none') { box.style.display = 'none'; return; }
  box.style.display = 'block';
  _sessaoPinta(grupoId, alunoId, nome);
}

function _sessaoPinta(grupoId, alunoId, nome) {
  var box = document.getElementById('sessao-' + grupoId + '_' + alunoId);
  if (!box) return;
  box.innerHTML = '<div style="color:var(--ink4);font-size:.78rem;padding:.4rem 0">A carregar registo…</div>';
  Turmas.sessoesDoAluno(alunoId, grupoId).then(function (ss) {
    var h = '<div style="background:var(--cream);border-radius:10px;padding:.7rem .8rem;margin:.4rem 0 .2rem">'
      + '<div style="font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--ink4);margin-bottom:.5rem">📓 Registo de ' + _esc(nome) + '</div>';
    // formulário rápido de nova sessão
    h += '<div style="display:flex;flex-direction:column;gap:.35rem;margin-bottom:.6rem">'
      + '<input id="ses-disc-' + alunoId + '" placeholder="Disciplina / tema (ex.: Matemática — Frações)" style="border:1.5px solid var(--border);border-radius:8px;padding:6px 10px;font-size:.8rem;font-family:Montserrat,sans-serif">'
      + '<input id="ses-mat-' + alunoId + '" placeholder="Ficha / material usado (texto ou link)" style="border:1.5px solid var(--border);border-radius:8px;padding:6px 10px;font-size:.8rem;font-family:Montserrat,sans-serif">'
      + '<textarea id="ses-not-' + alunoId + '" placeholder="Notas para o próximo professor (o que fez, o que falta…)" rows="2" style="border:1.5px solid var(--border);border-radius:8px;padding:6px 10px;font-size:.8rem;font-family:Montserrat,sans-serif;resize:vertical"></textarea>'
      + '<button onclick="sessaoGuardar(\'' + grupoId + '\',\'' + alunoId + '\',\'' + _escAttr(nome) + '\')" style="align-self:flex-start;background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:999px;padding:6px 16px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">Guardar sessão de hoje</button>'
      + '</div>';
    // histórico
    if (!ss.length) {
      h += '<div style="font-size:.78rem;color:var(--ink4)">Sem sessões registadas ainda.</div>';
    } else {
      ss.forEach(function (s) {
        var d = (s.quando || '').slice(0, 16).replace('T', ' ');
        h += '<div style="background:var(--white);border:1px solid var(--border);border-radius:8px;padding:.5rem .7rem;margin-bottom:.4rem">'
          + '<div style="display:flex;justify-content:space-between;gap:.5rem"><span style="font-size:.74rem;font-weight:800;color:#4a3f7a">' + _esc(d) + (s.disciplina ? ' · ' + _esc(s.disciplina) : '') + '</span>'
          + '<button onclick="sessaoApagar(\'' + s.id + '\',\'' + grupoId + '\',\'' + alunoId + '\',\'' + _escAttr(nome) + '\')" title="Apagar" style="color:#c0392b;background:none;border:none;font-size:.72rem;cursor:pointer">✕</button></div>'
          + (s.material ? '<div style="font-size:.78rem;color:var(--ink2);margin-top:.2rem">📄 ' + _esc(s.material) + '</div>' : '')
          + (s.notas ? '<div style="font-size:.78rem;color:var(--ink3);margin-top:.2rem">' + _esc(s.notas) + '</div>' : '')
          + '<div style="font-size:.7rem;color:var(--ink4);margin-top:.2rem">por ' + _esc(s.prof_nome || 'professor') + '</div>'
          + '</div>';
      });
    }
    h += '</div>';
    box.innerHTML = h;
  });
}

function sessaoGuardar(grupoId, alunoId, nome) {
  var disc = (document.getElementById('ses-disc-' + alunoId) || {}).value || '';
  var mat = (document.getElementById('ses-mat-' + alunoId) || {}).value || '';
  var not = (document.getElementById('ses-not-' + alunoId) || {}).value || '';
  Turmas.criarSessao({ grupoId: grupoId, aluno: alunoId, disciplina: disc, material: mat, notas: not }).then(function () {
    if (typeof eduToast === 'function') eduToast('Sessão registada! 📓', 'success');
    _sessaoPinta(grupoId, alunoId, nome);
  }).catch(function (e) { alert(e.message || 'Não foi possível guardar.'); });
}

function sessaoApagar(id, grupoId, alunoId, nome) {
  if (!confirm('Apagar este registo de sessão?')) return;
  Turmas.apagarSessao(id).then(function () { _sessaoPinta(grupoId, alunoId, nome); });
}

/* ── Conversa com um aluno (dentro do detalhe do aluno, no grupo) ── */
function conversaToggle(grupoId, alunoId, nome) {
  var box = document.getElementById('conversa-' + grupoId + '_' + alunoId);
  if (!box) return;
  if (box.style.display !== 'none') { box.style.display = 'none'; return; }
  box.style.display = 'block';
  _conversaPinta(grupoId, alunoId, nome);
}

function _conversaPinta(grupoId, alunoId, nome) {
  var box = document.getElementById('conversa-' + grupoId + '_' + alunoId);
  if (!box) return;
  box.innerHTML = '<div style="color:var(--ink4);font-size:.78rem;padding:.4rem 0">A carregar conversa…</div>';
  Turmas.conversaComAluno(alunoId).then(function (ms) {
    var h = '<div style="background:#f3faf5;border-radius:10px;padding:.7rem .8rem;margin:.4rem 0 .2rem">'
      + '<div style="font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--ink4);margin-bottom:.5rem">💬 Conversa com ' + _esc(nome) + '</div>';
    if (!ms.length) {
      h += '<div style="font-size:.78rem;color:var(--ink4);margin-bottom:.5rem">Ainda sem mensagens. Escreve abaixo um feedback ou recado para ' + _esc(nome) + '.</div>';
    } else {
      ms.forEach(function (m) {
        var doAluno = m.autor_tipo === 'aluno';
        h += '<div style="display:flex;justify-content:' + (doAluno ? 'flex-start' : 'flex-end') + ';margin-bottom:.35rem">'
          + '<div style="max-width:85%;background:' + (doAluno ? 'var(--white)' : '#e8f5ee') + ';border:1px solid ' + (doAluno ? 'var(--border)' : '#bfe3c9') + ';border-radius:10px;padding:.4rem .6rem">'
          + '<div style="font-size:.8rem;color:var(--ink1)">' + _esc(m.texto) + '</div>'
          + '<div style="font-size:.66rem;color:var(--ink4);margin-top:.15rem">' + _esc(doAluno ? (m.de_nome || nome) : (m.prof_nome || 'eu')) + '</div>'
          + '</div></div>';
      });
    }
    h += '<div style="display:flex;gap:.4rem;margin-top:.5rem">'
      + '<input id="conv-txt-' + alunoId + '" placeholder="Escrever para ' + _esc(nome) + '…" style="flex:1;border:1.5px solid var(--border);border-radius:999px;padding:6px 12px;font-size:.8rem;font-family:Montserrat,sans-serif" onkeydown="if(event.key===\'Enter\')conversaEnviar(\'' + grupoId + '\',\'' + alunoId + '\',\'' + _escAttr(nome) + '\')">'
      + '<button onclick="conversaEnviar(\'' + grupoId + '\',\'' + alunoId + '\',\'' + _escAttr(nome) + '\')" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:6px 14px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">Enviar</button>'
      + '</div></div>';
    box.innerHTML = h;
  });
}

function conversaEnviar(grupoId, alunoId, nome) {
  var inp = document.getElementById('conv-txt-' + alunoId);
  var texto = inp ? inp.value : '';
  if (!texto || !texto.trim()) return;
  Turmas.enviarMensagem({ texto: texto, alcance: 'aluno', paraAluno: alunoId }).then(function () {
    _conversaPinta(grupoId, alunoId, nome);
  }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
}

/* ── Trabalho atribuído (vista do professor) ── */
function _turmasPintaTarefas() {
  var el = document.getElementById('turmas-tarefas');
  if (!el) return;
  Turmas.tarefasDoProf().then(function (ts) {
    if (!el) return;
    if (!ts.length) {
      el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.3rem 0">Ainda não atribuíste trabalho. Carrega em «Atribuir trabalho» para mandares uma ficha ou um tópico para praticar, com prazo.</div>';
      return;
    }
    var nAlunos = (_turmasAlunosCache || []).length;
    el.innerHTML = ts.map(function (t) {
      var prazo = t.prazo ? _tarefaPrazoTxt(t.prazo) : '';
      var alvo;
      if (t.para_aluno) {
        var nm = _rotuloDoAluno(t.para_aluno) || 'aluno';
        alvo = '<a href="#" onclick="irParaAluno(\'' + t.para_aluno + '\');return false" style="color:#2e7d52;font-weight:700;text-decoration:none">' + _esc(nm) + ' ↗</a>';
      } else {
        alvo = 'à turma';
      }
      return '<div style="border:1.5px solid var(--border);border-radius:12px;padding:.7rem 1rem;margin-bottom:.5rem">'
        + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem">'
        + '<div style="min-width:0">'
        + '<span style="font-weight:800;color:var(--ink1)">' + _esc(t.titulo) + '</span>'
        + (t.curso_nome ? ' <span style="font-size:.72rem;color:#2e7d52;background:#e8f5ee;border:1px solid #bfe3c9;border-radius:6px;padding:1px 7px">' + _esc(t.curso_nome) + '</span>' : '')
        + '<div style="font-size:.74rem;color:var(--ink4);margin-top:.15rem">Para ' + alvo + (prazo ? ' · ' + prazo : '') + '</div>'
        + '</div>'
        + '<button onclick="tarefaApagar(\'' + t.id + '\',\'' + _escAttr(t.titulo) + '\')" title="Apagar" style="color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:3px 9px;font-size:.72rem;cursor:pointer;font-family:Montserrat,sans-serif;flex-shrink:0">✕</button>'
        + '</div>'
        + '<div id="tarefa-fez-' + t.id + '" style="font-size:.76rem;color:var(--ink3);margin-top:.45rem"><a href="#" onclick="tarefaVerQuemFez(\'' + t.id + '\',' + (t.para_aluno ? 1 : nAlunos) + ');return false" style="color:#2e7d52;font-weight:700">Ver quem fez</a></div>'
        + '</div>';
    }).join('');
  });
}

function _tarefaPrazoTxt(prazo) {
  var hoje = new Date().toISOString().slice(0, 10);
  if (prazo < hoje) return 'prazo passou (' + prazo + ')';
  if (prazo === hoje) return 'entrega hoje';
  return 'até ' + prazo;
}

function tarefaVerQuemFez(id, total) {
  var box = document.getElementById('tarefa-fez-' + id);
  if (!box) return;
  box.innerHTML = 'A carregar…';
  // Resultados (nota + detalhe) de quem entregou
  Turmas.resultadosDaTarefa(id).then(function (res) {
    Turmas.quemFez(id).then(function (feitos) {
      var comNota = {}; res.forEach(function (r) { comNota[r.aluno] = true; });
      var h = '<div style="font-weight:700;color:' + (feitos.length ? '#2e7d52' : 'var(--ink4)') + ';margin-bottom:.3rem">✅ ' + feitos.length + (total ? ' de ' + total : '') + ' já fizeram</div>';
      if (res.length) {
        res.forEach(function (r) {
          var pct = r.total ? Math.round(r.certas / r.total * 100) : 0;
          var cor = pct >= 70 ? '#2e7d52' : (pct >= 50 ? '#b8860b' : '#c0392b');
          h += '<div style="border-top:1px dashed var(--border);padding:.35rem 0">'
            + '<div style="display:flex;justify-content:space-between;font-size:.8rem">'
            + '<span style="font-weight:700;color:var(--ink1)">' + _esc(r.aluno_nome || 'aluno') + '</span>'
            + '<span style="font-weight:800;color:' + cor + '">' + r.certas + '/' + r.total + ' · ' + pct + '%</span></div>';
          // detalhe: onde errou/acertou
          if (r.detalhe && r.detalhe.length) {
            h += '<div style="margin-top:.2rem">';
            r.detalhe.forEach(function (d) {
              h += '<div style="font-size:.74rem;color:var(--ink3);line-height:1.4">' + (d.certo ? '✅' : '❌') + ' ' + _esc((d.q || '').slice(0, 80)) + '</div>';
            });
            h += '</div>';
          }
          h += '</div>';
        });
      } else if (feitos.length) {
        h += '<div style="font-size:.76rem;color:var(--ink4)">Marcaram como feito, mas sem pontuação registada (trabalho sem quiz).</div>';
      }
      box.innerHTML = h;
    });
  });
}

function tarefaAtribuirPrompt(prefere) {
  // um painel só, em vez de 5 popups seguidos
  eduFormModal('Atribuir trabalho', [
    { id: 'titulo', label: 'Título do trabalho', placeholder: 'ex.: Ficha de revisões de Frações', obrig: true },
    { id: 'instrucoes', label: 'Instruções', tipo: 'textarea', placeholder: 'opcional — o que o aluno deve fazer' },
    { id: 'url', label: 'Link de uma ficha', placeholder: 'opcional — Google Drive, etc.' },
    { id: 'cursoNome', label: 'Tópico da plataforma a praticar', placeholder: 'opcional — ex.: Matemática 7.º' },
    { id: 'prazo', label: 'Prazo', tipo: 'date', dica: 'opcional' }
  ], function (v) {
    return new Promise(function (resolve, reject) {
      _escolherDestino(prefere, function (dest) {
        Turmas.criarTarefa({ titulo: v.titulo, instrucoes: v.instrucoes, url: v.url, cursoNome: v.cursoNome, prazo: v.prazo || null, grupoId: dest.grupoId, paraAluno: dest.paraAluno })
          .then(function () {
            if (typeof eduToast === 'function') eduToast('Trabalho atribuído a ' + (dest.label || 'destinatário') + '! 📋', 'success');
            _turmasPintaTarefas();
            _grupoRepinta(dest.grupoId);
            resolve();
          }).catch(reject);
      });
    });
  }, { botao: 'Atribuir' });
}

function tarefaApagar(id, titulo) {
  if (!confirm('Apagar o trabalho «' + titulo + '»?')) return;
  Turmas.apagarTarefa(id).then(function () { _turmasPintaTarefas(); });
}

var _TURMAS_LISTA_PASSO = 50; // quantos alunos mostrar de cada vez
var _turmasListaLimite = _TURMAS_LISTA_PASSO;

function _turmasPintaAlunos(alunos, limite) {
  var el = document.getElementById('turmas-lista');
  if (!el) return;
  if (!alunos.length) {
    el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.4rem 0">Ainda nenhum aluno com conta. Assim que se registarem, aparecem aqui.</div>';
    return;
  }
  var lim = limite || _turmasListaLimite;
  var totalN = alunos.length;
  var mostrados = alunos.slice(0, lim);
  el.innerHTML = mostrados.map(function (a) {
    return '<div style="border:1.5px solid var(--border);border-radius:12px;margin-bottom:.5rem;overflow:hidden">'
      + '<div onclick="abrirPaginaAluno(\'' + a.aluno + '\')" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.4rem;padding:.7rem 1rem;cursor:pointer">'
      + '<div style="font-weight:800;color:var(--ink1)"><i class="ph ph-user-circle" style="color:#2e7d52"></i> ' + _esc(a.nome)
      + (a.email && _nomeRepetido(a.nome) ? ' <span style="font-weight:600;font-size:.74rem;color:var(--ink4)">· ' + _esc(a.email) + '</span>' : '')
      + '</div>'
      + '<div style="display:flex;gap:.7rem;font-size:.8rem;color:var(--ink3);align-items:center">'
      + '<span>⭐ ' + a.xp + '</span>'
      + '<span>' + (a.streak > 0 ? '🔥 ' + a.streak : '<span style="color:var(--ink4)">🔥 0</span>') + '</span>'
      + '<span title="Desafios feitos">🎯 ' + a.desafios + '</span>'
      + '<i class="ph ph-caret-right" style="color:var(--ink4)"></i>'
      + '</div></div>'
      + '</div>';
  }).join('');
  // rodapé: contagem + «mostrar mais» quando há mais do que o limite
  if (totalN > lim) {
    el.innerHTML += '<div style="text-align:center;margin-top:.3rem">'
      + '<button onclick="turmasMostrarMais()" style="background:var(--white);color:#2e7d52;border:1.5px solid #bfe3c9;border-radius:999px;padding:6px 16px;font-size:.8rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif">Mostrar mais (' + (totalN - lim) + ' por ver)</button>'
      + '<div style="font-size:.72rem;color:var(--ink4);margin-top:.35rem">A mostrar ' + lim + ' de ' + totalN + ' · usa a pesquisa para encontrar um aluno</div>'
      + '</div>';
  } else if (totalN > _TURMAS_LISTA_PASSO) {
    el.innerHTML += '<div style="font-size:.72rem;color:var(--ink4);text-align:center;margin-top:.35rem">' + totalN + ' alunos</div>';
  }
}

/* Filtra a lista de alunos por nome/email. O limite só se aplica sem
   pesquisa (com pesquisa os resultados costumam ser poucos). */
function turmasFiltrar() {
  var q = (document.getElementById('turmas-pesquisa') || {}).value || '';
  q = q.trim().toLowerCase();
  if (!_turmasAlunosCache) return;
  if (!q) { _turmasListaLimite = _TURMAS_LISTA_PASSO; _turmasPintaAlunos(_turmasAlunosCache); return; }
  var fil = _turmasAlunosCache.filter(function (a) {
    return (a.nome || '').toLowerCase().indexOf(q) !== -1 || (a.email || '').toLowerCase().indexOf(q) !== -1;
  });
  _turmasPintaAlunos(fil, fil.length); // mostra todos os resultados da pesquisa
}

function turmasMostrarMais() {
  _turmasListaLimite += _TURMAS_LISTA_PASSO;
  _turmasPintaAlunos(_turmasAlunosCache);
}

/* Clicar num aluno abre uma PÁGINA dedicada só dele (como a do grupo).
   Funciona a partir da lista «Todos os alunos». */
function turmasToggleAluno(id) { abrirPaginaAluno(id); }

/* Constrói o corpo do detalhe do aluno (reutilizado na página). */
function _alunoDetalheHTML(a) {
  var id = a.aluno;
  var h = '';
  h += '<div class="al-linha">' + _esc(_alunoAtividade(a)) + '</div>';
  h += '<button onclick="alunoFeedbackPrompt(\'' + id + '\',\'' + _escAttr(a.nome) + '\')" style="font-size:.78rem;font-weight:700;color:#4a3f7a;background:var(--white);border:1.5px solid #ddd8f5;border-radius:999px;padding:5px 13px;cursor:pointer;font-family:Montserrat,sans-serif;margin-bottom:.5rem"><i class="ph ph-chat-circle-text"></i> Deixar feedback</button>';

  h += '<div class="al-sec">Trabalho atribuído</div>'
    + '<div id="al-tarefas-' + id + '" class="al-tarefas">a carregar…</div>';

  if (a.disciplinas.length) {
    var maxXp = a.disciplinas[0].xp || 1;
    h += '<div class="al-sec">Progresso por disciplina</div>';
    a.disciplinas.forEach(function (d) {
      var pct = Math.round((d.xp / maxXp) * 100);
      h += '<div style="margin-bottom:.45rem">'
        + '<div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--ink2);margin-bottom:.15rem">'
        + '<span style="font-weight:700">' + _esc(d.disciplina) + '</span>'
        + '<span style="color:var(--ink4)">⭐ ' + d.xp + ' · ' + d.topicos + ' tópico' + (d.topicos === 1 ? '' : 's') + '</span></div>'
        + '<div style="height:6px;background:var(--cream);border-radius:6px;overflow:hidden"><div style="height:100%;width:' + Math.max(pct, 6) + '%;background:linear-gradient(90deg,#2e7d52,#5cb085)"></div></div>'
        + '</div>';
    });
  } else {
    h += '<div class="al-sec">Progresso por disciplina</div><div style="font-size:.8rem;color:var(--ink4)">Ainda não praticou nada na plataforma.</div>';
  }

  h += '<div class="al-sec">Onde erra mais</div>';
  if (a.dificuldades && a.dificuldades.length) {
    a.dificuldades.forEach(function (f) {
      h += '<div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--ink2);padding:.2rem 0">'
        + '<span>' + _esc(_capLabel(f.cap, f.disciplina)) + '</span>'
        + '<span style="font-weight:800;color:' + (f.pct < 50 ? '#c0392b' : '#b8860b') + '">' + f.pct + '%</span></div>';
    });
  } else {
    h += '<div style="font-size:.8rem;color:var(--ink4)">Sem pontos fracos detetados nos quizzes (ou ainda não fez quizzes).</div>';
  }
  return h;
}

/* Carrega o resumo de tarefas (feitas/por fazer) no slot do aluno. */
function _alunoCarregaTarefas(id) {
  var box = document.getElementById('al-tarefas-' + id);
  if (!box) return;
  var fn = Turmas.tarefasComResultadoDoAluno || null;
  if (!fn) { if (Turmas.resumoTarefasAluno) Turmas.resumoTarefasAluno(id).then(function (r) { if (box) box.textContent = r.feitas + ' de ' + r.total + ' feitas'; }); return; }
  fn(id).then(function (ts) {
    if (!box) return;
    if (!ts.length) { box.innerHTML = '<span style="color:var(--ink4)">Sem trabalho atribuído.</span>'; return; }
    var feitas = ts.filter(function (t) { return t.feito; }).length;
    var h = '<div style="font-size:.8rem;color:var(--ink4);margin-bottom:.4rem">' + feitas + ' de ' + ts.length + ' feitas</div>';
    ts.forEach(function (t) {
      var r = t.resultado;
      var d = t.feito_em ? (t.feito_em.slice(0, 10)) : '';
      // cabeçalho da tarefa: título + nota (se houver) ou estado
      var notaTxt;
      if (r && r.total) {
        var pct = Math.round(r.certas / r.total * 100);
        var cor = pct >= 70 ? '#2e7d52' : (pct >= 50 ? '#b8860b' : '#c0392b');
        notaTxt = '<span style="font-weight:800;color:' + cor + '">' + r.certas + '/' + r.total + ' · ' + pct + '%</span>';
      } else if (t.feito) { notaTxt = '<span style="font-weight:700;color:#2e7d52">✓ feito</span>'; }
      else { notaTxt = '<span style="color:var(--ink4)">por fazer</span>'; }
      h += '<div style="border:1.5px solid var(--border);border-radius:10px;padding:.5rem .7rem;margin-bottom:.4rem">'
        + '<div style="display:flex;justify-content:space-between;gap:.5rem;align-items:baseline">'
        + '<span style="font-weight:700;color:var(--ink1);font-size:.84rem;min-width:0">' + _esc(t.titulo) + '</span>' + notaTxt + '</div>'
        + (d ? '<div style="font-size:.7rem;color:var(--ink4)">entregue ' + _esc(d) + '</div>' : '');
      // detalhe: onde errou/acertou
      if (r && r.detalhe && r.detalhe.length) {
        h += '<div style="margin-top:.3rem">' + r.detalhe.map(function (q) {
          return '<div style="font-size:.74rem;color:var(--ink3);line-height:1.4">' + (q.certo ? '✅' : '❌') + ' ' + _esc((q.q || '').slice(0, 90)) + '</div>';
        }).join('') + '</div>';
      }
      h += '</div>';
    });
    box.innerHTML = h;
  });
}

/* Página dedicada de UM aluno: progresso, pontos fracos, trabalho,
   mensagens e registo de sessões. `grupoId` opcional (de onde veio, para
   o botão Voltar regressar ao grupo). */
function abrirPaginaAluno(id, grupoId) {
  var a = (_turmasAlunosCache || []).filter(function (x) { return x.aluno === id; })[0];
  if (!a) return;
  var home = document.getElementById('turmas-home');
  var pagG = document.getElementById('turmas-grupo-pagina');
  var pag = document.getElementById('turmas-aluno-pagina');
  if (!pag) return;
  var voltarFn = grupoId ? ('grupoToggle(\'' + grupoId + '\',\'' + _escAttr((((_turmasGruposCache || []).filter(function (x) { return x.id === grupoId; })[0]) || {}).nome || '') + '\')') : 'alunoVoltar()';
  var voltarTxt = grupoId ? 'Voltar ao grupo' : 'Voltar aos alunos';
  pag.innerHTML =
    '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.1rem 1.4rem 1.4rem">'
    + '<button onclick="' + voltarFn + '" style="display:inline-flex;align-items:center;gap:.4rem;background:none;border:none;color:#2e7d52;font-weight:700;font-size:.85rem;cursor:pointer;font-family:Montserrat,sans-serif;padding:0;margin-bottom:.8rem"><i class="ph ph-arrow-left"></i> ' + voltarTxt + '</button>'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.5rem;font-weight:700;color:var(--ink1);line-height:1.15"><i class="ph ph-user-circle" style="color:#2e7d52"></i> ' + _esc(a.nome) + '</div>'
    + (a.email ? '<div style="font-size:.76rem;color:var(--ink4);margin-bottom:.4rem">' + _esc(a.email) + '</div>' : '')
    + '<div style="display:flex;gap:.6rem;font-size:.82rem;color:var(--ink3);margin:.3rem 0 .8rem"><span>⭐ ' + a.xp + '</span><span>' + (a.streak > 0 ? '🔥 ' + a.streak : '🔥 0') + '</span><span title="Desafios">🎯 ' + a.desafios + '</span></div>'
    + '<div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.6rem">'
    + '<button onclick="alunoEnviarPrompt(\'' + id + '\',\'' + _escAttr(a.nome) + '\')" style="font-size:.78rem;font-weight:700;color:#1a4a2e;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:5px 13px;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-paper-plane-tilt"></i> Enviar (ficha/trabalho/aviso)</button>'
    + '</div>'
    + '<div id="aluno-pag-det">' + _alunoDetalheHTML(a) + '</div>'
    // Mensagens
    + '<div class="al-sec">Mensagens</div><div id="aluno-pag-msg"></div>'
    + '<div style="display:flex;gap:.4rem;margin-top:.4rem"><input id="aluno-pag-txt" placeholder="Escrever a ' + _escAttr(a.nome) + '…" style="flex:1;border:1.5px solid var(--border);border-radius:999px;padding:6px 12px;font-size:.82rem;font-family:Montserrat,sans-serif" onkeydown="if(event.key===\'Enter\')alunoPagEnviarMsg(\'' + id + '\',\'' + _escAttr(a.nome) + '\')"><button onclick="alunoPagEnviarMsg(\'' + id + '\',\'' + _escAttr(a.nome) + '\')" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:6px 14px;font-size:.8rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">Enviar</button></div>'
    // Registo de sessões
    + '<div class="al-sec">Registo de sessões</div><div id="aluno-pag-reg"></div>'
    + '</div>';
  if (home) home.style.display = 'none';
  if (pagG) pagG.style.display = 'none';
  pag.style.display = 'block';
  try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
  _alunoCarregaTarefas(id);
  _alunoPagPintaMsg(id, a.nome);
  _alunoPagPintaReg(id, a.nome, grupoId);
}

function alunoVoltar() {
  var home = document.getElementById('turmas-home');
  var pag = document.getElementById('turmas-aluno-pagina');
  if (pag) { pag.style.display = 'none'; pag.innerHTML = ''; }
  if (home) home.style.display = '';
  var b = document.getElementById('acc-body-alunos');
  if (b && b.style.display === 'none') accToggle('alunos');
}

/* Mensagens do aluno (conversa prof↔aluno) na página. */
function _alunoPagPintaMsg(id, nome) {
  var box = document.getElementById('aluno-pag-msg');
  if (!box || !Turmas.conversaComAluno) return;
  Turmas.conversaComAluno(id).then(function (ms) {
    if (!box) return;
    if (!ms.length) { box.innerHTML = '<div style="font-size:.8rem;color:var(--ink4)">Sem mensagens. Escreve a primeira abaixo.</div>'; return; }
    box.innerHTML = ms.map(function (m) {
      var meu = m.autor_tipo !== 'aluno';
      return '<div style="display:flex;justify-content:' + (meu ? 'flex-end' : 'flex-start') + ';margin:.2rem 0">'
        + '<div style="max-width:80%;background:' + (meu ? '#e8f5ee' : 'var(--cream)') + ';border-radius:12px;padding:.4rem .7rem;font-size:.82rem;color:var(--ink1)">' + _esc(m.texto)
        + '<div style="font-size:.66rem;color:var(--ink4);margin-top:.15rem">' + _esc(meu ? (m.prof_nome || 'eu') : nome) + '</div></div></div>';
    }).join('');
  });
}

function alunoPagEnviarMsg(id, nome) {
  var inp = document.getElementById('aluno-pag-txt');
  if (!inp || !inp.value.trim()) return;
  var txt = inp.value.trim(); inp.value = '';
  Turmas.enviarMensagem({ texto: txt, alcance: 'aluno', paraAluno: id }).then(function () {
    _alunoPagPintaMsg(id, nome);
    if (typeof notificacoesRender === 'function') notificacoesRender();
  }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
}

/* Registo de sessões do aluno na página (lê de todos os grupos). */
function _alunoPagPintaReg(id, nome, grupoId) {
  var box = document.getElementById('aluno-pag-reg');
  if (!box || !Turmas.sessoesDoAluno) return;
  var pSess = Turmas.sessoesDoAluno(id, grupoId || null);
  // trabalhos entregues entram no registo automaticamente (sem duplicar dados)
  var pTar = Turmas.tarefasComResultadoDoAluno ? Turmas.tarefasComResultadoDoAluno(id) : Promise.resolve([]);
  Promise.all([pSess, pTar]).then(function (r) {
    if (!box) return;
    var itens = [];
    // sessões 1-a-1 escritas pelo professor
    r[0].forEach(function (s) {
      itens.push({ tipo: 'sessao', quando: s.quando || '', html:
        '<div style="font-size:.74rem;font-weight:800;color:#4a3f7a">' + _esc((s.quando || '').slice(0, 10)) + ' · 📓 Sessão' + (s.disciplina ? ' · ' + _esc(s.disciplina) : '') + '</div>'
        + (s.material ? '<div style="font-size:.8rem;color:var(--ink2);margin-top:.15rem">📄 ' + _esc(s.material) + '</div>' : '')
        + (s.notas ? '<div style="font-size:.8rem;color:var(--ink3);margin-top:.15rem">' + _esc(s.notas) + '</div>' : '')
        + '<div style="font-size:.7rem;color:var(--ink4);margin-top:.15rem">por ' + _esc(s.prof_nome || 'professor') + '</div>' });
    });
    // trabalhos entregues (feito) — aparecem como registo automático
    r[1].filter(function (t) { return t.feito; }).forEach(function (t) {
      var res = t.resultado, nota = '';
      if (res && res.total) {
        var pct = Math.round(res.certas / res.total * 100);
        var cor = pct >= 70 ? '#2e7d52' : (pct >= 50 ? '#b8860b' : '#c0392b');
        nota = ' · <span style="font-weight:800;color:' + cor + '">' + res.certas + '/' + res.total + ' (' + pct + '%)</span>';
      }
      itens.push({ tipo: 'trabalho', quando: t.feito_em || '', html:
        '<div style="font-size:.74rem;font-weight:800;color:#2e7d52">' + _esc((t.feito_em || '').slice(0, 10)) + ' · ✅ Trabalho entregue</div>'
        + '<div style="font-size:.8rem;color:var(--ink2);margin-top:.15rem">' + _esc(t.titulo) + nota + '</div>' });
    });
    if (!itens.length) { box.innerHTML = '<div style="font-size:.8rem;color:var(--ink4)">Ainda sem sessões nem trabalhos entregues.</div>'; return; }
    // ordena por data (mais recente primeiro)
    itens.sort(function (a, b) { return (a.quando || '') < (b.quando || '') ? 1 : -1; });
    box.innerHTML = itens.map(function (it) {
      return '<div style="border:1.5px solid var(--border);border-radius:10px;padding:.5rem .8rem;margin-bottom:.4rem">' + it.html + '</div>';
    }).join('');
  });
}

/* Texto de atividade recente a partir do lastDay. */
function _alunoAtividade(a) {
  var pre = 'Ofensiva ' + (a.streak > 0 ? '🔥 ' + a.streak + ' dias' : '—') + ' · 🎯 ' + (a.desafios || 0) + ' desafios';
  if (!a.lastDay) return pre + ' · nunca praticou';
  var hoje = new Date(); var ld = new Date(a.lastDay + 'T00:00:00');
  var dias = Math.round((hoje - ld) / 86400000);
  var quando;
  if (dias <= 0) quando = 'ativo hoje';
  else if (dias === 1) quando = 'ativo ontem';
  else if (dias <= 7) quando = 'ativo há ' + dias + ' dias';
  else quando = '⚠️ não aparece há ' + dias + ' dias';
  return pre + ' · ' + quando;
}

/* Rótulo legível de um capId (usa a disciplina + o número do cap). */
function _capLabel(capId, disciplina) {
  var m = String(capId).match(/cap(\d+)/i) || String(capId).match(/(\d+)$/);
  var n = m ? m[1] : '';
  if (/^cap\d|mat|m\d/i.test(capId) && n) return disciplina + ' · cap. ' + n;
  return disciplina + (n ? ' · ' + n : '');
}

/* ── Recursos (visíveis a profs e alunos) ── */
function _turmasPintaRecursos(podeGerir) {
  var el = document.getElementById('turmas-recursos');
  if (!el) return;
  Turmas.recursos().then(function (rs) {
    if (!el) return;
    if (!rs.length) {
      el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.3rem 0">' + (podeGerir ? 'Ainda não há fichas. Adiciona o link de uma (Google Drive, etc.) para os alunos descarregarem.' : 'O teu professor ainda não partilhou fichas.') + '</div>';
      return;
    }
    el.innerHTML = rs.map(function (r) {
      // destino legível: grupo (nome), aluno (nome clicável) ou turma
      var destinoTxt = '';      // texto simples para a linha de metadados
      var alunoLink = '';       // linha clicável quando é dirigido a um aluno
      if (r.grupo_id) {
        destinoTxt = 'grupo ' + ((r.grupos && r.grupos.nome) || '');
      } else if (r.para_aluno) {
        var nm = _rotuloDoAluno(r.para_aluno) || 'aluno';
        destinoTxt = nm;
        if (podeGerir) {
          alunoLink = '<div style="font-size:.72rem;margin-top:.15rem"><a href="#" onclick="irParaAluno(\'' + r.para_aluno + '\');return false" style="color:#2e7d52;font-weight:700;text-decoration:none">👤 ' + _esc(nm) + ' ↗</a></div>';
        }
      }
      return '<div style="border:1.5px solid var(--border);border-radius:12px;padding:.6rem .9rem;margin-bottom:.45rem">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;gap:.6rem">'
        + '<a href="' + _escAttr(r.url) + '" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:.6rem;text-decoration:none;flex:1;min-width:0">'
        + '<span style="font-size:1.1rem">📄</span>'
        + '<span style="min-width:0"><span style="font-weight:700;color:var(--ink1);display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + _esc(r.titulo) + '</span>'
        + '<span style="font-size:.72rem;color:var(--ink4)">' + (r.disciplina ? _esc(r.disciplina) + ' · ' : '') + (podeGerir && destinoTxt ? 'para ' + _esc(destinoTxt) + ' · ' : '') + 'por ' + _esc(r.autor_nome || 'professor') + '</span></span></a>'
        + (podeGerir ? '<button onclick="recursosApagar(\'' + r.id + '\',\'' + _escAttr(r.titulo) + '\')" title="Remover" style="color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:3px 9px;font-size:.72rem;cursor:pointer;font-family:Montserrat,sans-serif;flex-shrink:0">✕</button>' : '')
        + '</div>'
        + alunoLink
        + '</div>';
    }).join('');
  });
}

function recursosAdicionarPrompt(prefere) {
  eduFormModal('Partilhar ficha / recurso', [
    { id: 'titulo', label: 'Nome da ficha', placeholder: 'ex.: Ficha de revisões de Frações', obrig: true },
    { id: 'url', label: 'Link', placeholder: 'cola o link (Google Drive, etc.)', obrig: true },
    { id: 'disc', label: 'Disciplina', placeholder: 'opcional — ex.: Matemática 7.º' }
  ], function (v) {
    return new Promise(function (resolve, reject) {
      _escolherDestino(prefere, function (dest) {
        Turmas.adicionarRecurso(v.titulo, v.url, v.disc, { grupoId: dest.grupoId, paraAluno: dest.paraAluno }).then(function () {
          if (typeof eduToast === 'function') eduToast('Ficha partilhada com ' + (dest.label || 'destinatário') + '! 📄', 'success');
          _turmasPintaRecursos(true);
          _grupoRepinta(dest.grupoId);
          resolve();
        }).catch(reject);
      });
    });
  }, { botao: 'Partilhar' });
}

function recursosApagar(id, titulo) {
  if (!confirm('Remover «' + titulo + '» da lista? (O ficheiro no Drive não é apagado.)')) return;
  Turmas.apagarRecurso(id).then(function () { _turmasPintaRecursos(true); });
}

/* ════════════════════ ALUNO ════════════════════ */
function _turmasRenderAluno(wrap) {
  wrap.innerHTML =
    '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.25rem 1.4rem">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.15rem">'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.45rem;font-weight:700;color:var(--ink1)"><i class="ph ph-users-three" style="color:#4a3f7a"></i> As minhas turmas</div>'
    + '<button onclick="grupoEntrarPrompt()" style="background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:999px;padding:6px 15px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-sign-in"></i> Entrar num grupo</button>'
    + '</div>'
    + '<div style="font-size:.82rem;color:var(--ink4);margin-bottom:1rem">Os grupos a que pertences. Pede o código ao teu professor para entrares.</div>'
    + '<div id="turmas-meus-grupos" style="margin-bottom:1.2rem"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    // conversa com o professor (mensagens + dúvidas = a mesma conversa)
    + '<div style="border-top:1px solid var(--border);padding-top:1rem;margin-bottom:1.2rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem;margin-bottom:.6rem"><i class="ph ph-chats-circle" style="color:#2e7d52"></i> Conversa com o professor</div>'
    + '<div id="turmas-mensagens-aluno"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '<div style="display:flex;gap:.4rem;margin-top:.6rem">'
    + '<input id="aluno-conv-txt" placeholder="Escrever ao professor…" style="flex:1;border:1.5px solid var(--border);border-radius:999px;padding:8px 14px;font-size:.84rem;font-family:Montserrat,sans-serif" onkeydown="if(event.key===\'Enter\')alunoConvEnviar()">'
    + '<button onclick="alunoConvEnviar()" style="background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:999px;padding:8px 16px;font-size:.84rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">Enviar</button>'
    + '</div>'
    + '</div>'
    // o meu registo de sessões
    + '<div style="border-top:1px solid var(--border);padding-top:1rem;margin-bottom:1.2rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem;margin-bottom:.6rem"><i class="ph ph-notebook" style="color:#4a3f7a"></i> O meu registo de sessões</div>'
    + '<div id="turmas-meu-registo"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>'
    // fichas
    + '<div style="border-top:1px solid var(--border);padding-top:1rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem;margin-bottom:.6rem"><i class="ph ph-folder-open" style="color:#4a3f7a"></i> Fichas e materiais</div>'
    + '<div id="turmas-recursos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>'
    + '</div>';
  _alunoPintaGrupos();
  _alunoPintaMensagens();
  _alunoPintaRegisto();
  _turmasPintaRecursos(false);
}

/* Aluno escreve na conversa única (mensagem livre = dúvida). */
function alunoConvEnviar() {
  var inp = document.getElementById('aluno-conv-txt');
  if (!inp || !inp.value.trim()) return;
  var txt = inp.value.trim(); inp.value = '';
  Turmas.criarDuvida(txt).then(function () {
    _alunoPintaMensagens();
    if (typeof notificacoesRender === 'function') notificacoesRender();
  }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
}

/* O aluno vê as mensagens do professor (avisos gerais/grupo + feedback a
   si) e pode responder / mandar dúvida. (Veio do Início p/ as Turmas.) */
function _alunoPintaMensagens() {
  var el = document.getElementById('turmas-mensagens-aluno');
  if (!el || !Turmas.muralDoAluno) return;
  Turmas.muralDoAluno().then(function (ms) {
    if (!el) return;
    // conversa única, por ordem cronológica (mais antiga em cima)
    ms.sort(function (a, b) { return (a.criado || '') < (b.criado || '') ? -1 : 1; });
    if (!ms.length) {
      el.innerHTML = '<div style="font-size:.85rem;color:var(--ink4)">Ainda sem conversa. Escreve a primeira mensagem ou dúvida ao teu professor abaixo.</div>';
      return;
    }
    el.innerHTML = '<div style="max-height:340px;overflow-y:auto;display:flex;flex-direction:column;gap:.35rem;padding:.2rem">'
      + ms.map(_alunoMsgHTML).join('') + '</div>';
    // faz scroll para o fim (mensagem mais recente)
    var box = el.firstChild; if (box) box.scrollTop = box.scrollHeight;
  });
}

/* Um balão de conversa: do aluno → direita (verde-claro); do professor →
   esquerda (lilás). Para avisos a grupo/turma mostra um rótulo discreto. */
function _alunoMsgHTML(m) {
  var doAluno = m.autor_tipo === 'aluno';
  var rotulo = '';
  if (!doAluno && m.alcance === 'grupo') rotulo = '👥 ' + ((m.grupos && m.grupos.nome) || 'Grupo') + ' · ';
  else if (!doAluno && m.alcance === 'geral') rotulo = '📣 Aviso · ';
  var quem = doAluno ? 'tu' : (rotulo + (m.prof_nome || 'professor'));
  var fundo = doAluno ? '#e8f5ee' : '#f0edf7';
  return '<div style="display:flex;justify-content:' + (doAluno ? 'flex-end' : 'flex-start') + '">'
    + '<div style="max-width:82%;background:' + fundo + ';border-radius:14px;padding:.5rem .8rem">'
    + '<div style="font-size:.86rem;color:var(--ink1);line-height:1.45">' + _esc(m.texto) + '</div>'
    + '<div style="font-size:.66rem;color:var(--ink4);margin-top:.2rem">' + _esc(quem) + '</div>'
    + '</div></div>';
}

/* Aluno responde a uma mensagem do professor (a partir das Turmas). */
function alunoResponderTurmas(msgId) {
  Turmas.muralDoAluno().then(function (ms) {
    var m = ms.filter(function (x) { return x.id === msgId; })[0];
    if (!m) return;
    var txt = prompt('Responder a esta mensagem:');
    if (txt === null || !txt.trim()) return;
    Turmas.responder(m, txt).then(function () {
      if (typeof eduToast === 'function') eduToast('Resposta enviada! 💬', 'success');
      _alunoPintaMensagens();
      if (typeof notificacoesRender === 'function') notificacoesRender();
    }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
  });
}

/* O aluno vê o seu próprio registo de sessões (só leitura). */
function _alunoPintaRegisto() {
  var el = document.getElementById('turmas-meu-registo');
  if (!el || !Turmas.minhasSessoes) return;
  Turmas.minhasSessoes().then(function (ss) {
    if (!el) return;
    if (!ss.length) {
      el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.3rem 0">Ainda não há sessões registadas. Quando trabalhares com um professor, fica aqui o resumo do que fizeram.</div>';
      return;
    }
    el.innerHTML = ss.map(function (s) {
      var d = (s.quando || '').slice(0, 16).replace('T', ' ');
      var grupo = (s.grupos && s.grupos.nome) || '';
      return '<div style="border:1.5px solid var(--border);border-radius:12px;padding:.6rem .9rem;margin-bottom:.45rem">'
        + '<div style="font-size:.76rem;font-weight:800;color:#4a3f7a">' + _esc(d) + (s.disciplina ? ' · ' + _esc(s.disciplina) : '') + (grupo ? ' · ' + _esc(grupo) : '') + '</div>'
        + (s.material ? '<div style="font-size:.8rem;color:var(--ink2);margin-top:.2rem">📄 ' + _esc(s.material) + '</div>' : '')
        + (s.notas ? '<div style="font-size:.8rem;color:var(--ink3);margin-top:.2rem">' + _esc(s.notas) + '</div>' : '')
        + '<div style="font-size:.72rem;color:var(--ink4);margin-top:.2rem">por ' + _esc(s.prof_nome || 'professor') + '</div>'
        + '</div>';
    }).join('');
  });
}

/* Mandar dúvida a partir da secção Turmas. */
function alunoTirarDuvida() {
  eduFormModal('Mandar dúvida ao professor', [
    { id: 'txt', label: 'A tua dúvida', tipo: 'textarea', placeholder: 'Escreve aqui a tua pergunta', obrig: true }
  ], function (v) {
    return Turmas.criarDuvida(v.txt).then(function () {
      if (typeof eduToast === 'function') eduToast('Dúvida enviada ao professor! ❓', 'success');
      if (typeof _alunoPintaMensagens === 'function') _alunoPintaMensagens();
      if (typeof notificacoesRender === 'function') notificacoesRender();
    });
  }, { botao: 'Enviar' });
}

/* ── Os meus grupos (vista do aluno) ── */
function _alunoPintaGrupos() {
  var el = document.getElementById('turmas-meus-grupos');
  if (!el) return;
  Turmas.gruposDoAluno().then(function (gs) {
    if (!el) return;
    if (!gs.length) {
      el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.3rem 0">Ainda não estás em nenhum grupo. Pede o código ao teu professor e clica em «Entrar num grupo».</div>';
      return;
    }
    el.innerHTML = gs.map(function (i) {
      var nome = (i.grupos && i.grupos.nome) || 'Grupo';
      var prof = (i.grupos && i.grupos.prof_nome) || '';
      return '<div style="display:flex;align-items:center;justify-content:space-between;border:1.5px solid var(--border);border-radius:12px;padding:.65rem 1rem;margin-bottom:.45rem">'
        + '<div><span style="font-weight:800;color:var(--ink1)">' + _esc(nome) + '</span>'
        + (prof ? '<span style="font-size:.74rem;color:var(--ink4);margin-left:.4rem">prof. ' + _esc(prof) + '</span>' : '') + '</div>'
        + '<button onclick="grupoSair(\'' + i.grupo_id + '\',\'' + _escAttr(nome) + '\')" style="font-size:.72rem;color:var(--ink4);background:none;border:1px solid var(--border);border-radius:999px;padding:3px 10px;cursor:pointer;font-family:Montserrat,sans-serif">sair</button>'
        + '</div>';
    }).join('');
  });
}

function grupoEntrarPrompt() {
  eduFormModal('Entrar num grupo', [
    { id: 'codigo', label: 'Código do grupo', placeholder: 'dado pelo teu professor', obrig: true }
  ], function (v) {
    return Turmas.entrarPorCodigo(v.codigo).then(function (g) {
      if (typeof eduToast === 'function') eduToast('Entraste no grupo «' + g.nome + '»! 🎉', 'success');
      _alunoPintaGrupos();
    });
  }, { botao: 'Entrar' });
}

function grupoSair(grupoId, nome) {
  if (!confirm('Sair do grupo «' + nome + '»?')) return;
  Turmas.sairDoGrupo(grupoId).then(function () { _alunoPintaGrupos(); });
}

/* ── utilitários ── */
function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
function _escAttr(s) { return _esc(s); }

/* Render quando a sessão muda (login/logout) e ao carregar. */
document.addEventListener('cloud:auth', function () { turmasRender(); });
document.addEventListener('DOMContentLoaded', function () { setTimeout(turmasRender, 400); });
