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

function _turmasRenderProfessor(wrap) {
  var btnGrupos = '<button onclick="grupoEntrarComoProf()" style="background:var(--white);color:#2e7d52;border:1.5px solid #bfe3c9;border-radius:999px;padding:5px 11px;font-size:.74rem;font-weight:700;cursor:pointer;font-family:Montserrat,sans-serif">+ código</button>'
    + ' <button onclick="grupoCriarPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:5px 12px;font-size:.74rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">+ grupo</button>';
  var btnTarefa = '<button onclick="tarefaAtribuirPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:5px 12px;font-size:.74rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">+ trabalho</button>';
  var btnAviso = '<button onclick="avisoNovoPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:5px 12px;font-size:.74rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">+ aviso</button>';
  var btnFicha = '<button onclick="recursosAdicionarPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:5px 12px;font-size:.74rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif">+ ficha</button>';

  var alunosBody = '<input id="turmas-pesquisa" oninput="turmasFiltrar()" placeholder="🔎 Procurar aluno…" style="width:100%;box-sizing:border-box;border:1.5px solid var(--border);border-radius:999px;padding:6px 14px;font-size:.82rem;font-family:Montserrat,sans-serif;outline:none;margin-bottom:.6rem">'
    + '<div id="turmas-lista"><div style="color:var(--ink4);font-size:.85rem">A carregar alunos…</div></div>';
  // Avisos enviados vivem no sino 🔔 (notificações). Aqui só se gerem as
  // dúvidas/respostas dos alunos. O botão «+ aviso» continua no cabeçalho.
  var avisosBody = '<div style="font-size:.78rem;color:var(--ink4);margin-bottom:.6rem">Os avisos que envias aparecem no sino 🔔 dos alunos (no topo). Aqui vês e respondes às dúvidas deles.</div>'
    + '<div id="turmas-duvidas"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>';

  wrap.innerHTML =
    '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.25rem 1.4rem">'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.45rem;font-weight:700;color:var(--ink1);margin-bottom:.15rem"><i class="ph ph-chalkboard-teacher" style="color:#2e7d52"></i> Turmas</div>'
    + '<div style="font-size:.82rem;color:var(--ink4);margin-bottom:1rem">Toca em cada secção para abrir. Organiza alunos em grupos, atribui trabalho e comunica.</div>'
    + _acc('grupos', 'ph-users-four', '#2e7d52', 'Grupos', btnGrupos, '<div id="turmas-grupos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>')
    + _acc('alunos', 'ph-users-three', '#2e7d52', 'Todos os alunos', '', alunosBody)
    + _acc('tarefas', 'ph-clipboard-text', '#2e7d52', 'Trabalho atribuído', btnTarefa, '<div id="turmas-tarefas"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>')
    + _acc('avisos', 'ph-chats-circle', '#4a3f7a', 'Dúvidas dos alunos', btnAviso, avisosBody)
    + _acc('fichas', 'ph-link-simple', '#2e7d52', 'Fichas e recursos', btnFicha, '<div id="turmas-recursos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>')
    + '</div>';

  Turmas.todosOsAlunos().then(function (alunos) {
    _turmasAlunosCache = alunos;
    _turmasPintaAlunos(alunos);
  });
  _turmasPintaGrupos();
  _turmasPintaTarefas();
  _turmasPintaDuvidas();
  _turmasPintaRecursos(true);
}

/* ── Dúvidas e respostas dos alunos (vista do professor) ── */
function _turmasPintaDuvidas() {
  var el = document.getElementById('turmas-duvidas');
  if (!el || !Turmas.respostasDeAlunos) return;
  Turmas.respostasDeAlunos().then(function (ms) {
    if (!el) return;
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
  var texto = prompt('Responder a ' + nome + ':');
  if (texto === null || !texto.trim()) return;
  Turmas.enviarMensagem({ texto: texto, alcance: 'aluno', paraAluno: alunoId, respostaA: msgId }).then(function () {
    if (typeof eduToast === 'function') eduToast('Resposta enviada a ' + nome + '! 💬', 'success');
    _turmasPintaDuvidas();
    if (typeof notificacoesRender === 'function') notificacoesRender(); // repinta para mostrar "✓ Respondido"
  }).catch(function (e) { alert(e.message || 'Não foi possível responder.'); });
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
    var opc = 'Para quem?\n';
    var idx = [];
    gs.forEach(function (g) { idx.push({ grupoId: g.id, label: 'Grupo: ' + g.nome }); });
    alunos.forEach(function (a) { idx.push({ paraAluno: a.aluno, label: 'Aluno: ' + a.nome }); });
    if (!idx.length) { alert('Cria primeiro um grupo ou espera que alunos se registem.'); return; }
    idx.forEach(function (o, i) { opc += (i + 1) + ' = ' + o.label + '\n'; });
    var esc = prompt(opc, '1');
    if (esc === null) return;
    var n = parseInt(esc, 10);
    if (!(n >= 1 && n <= idx.length)) { alert('Opção inválida.'); return; }
    cb(idx[n - 1]);
  });
}

function avisoNovoPrompt(prefere) {
  var texto = prompt('Escreve o aviso (ex.: Teste de Matemática na próxima 6.ª feira):');
  if (texto === null || !texto.trim()) return;
  _escolherDestino(prefere, function (dest) {
    var opts = dest.paraAluno
      ? { texto: texto, alcance: 'aluno', paraAluno: dest.paraAluno }
      : { texto: texto, alcance: 'grupo', grupoId: dest.grupoId };
    Turmas.enviarMensagem(opts).then(function () {
      if (typeof eduToast === 'function') eduToast('Aviso enviado! Aparece no sino 🔔 de ' + (dest.label || 'destinatário') + '.', 'success');
      if (typeof notificacoesRender === 'function') notificacoesRender();
    }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
  });
}

/* Atalho «enviar» a um ALUNO específico: escolhe o quê e já vai com o
   destino preenchido. */
function alunoEnviarPrompt(alunoId, nome) {
  var o = prompt('Enviar a ' + nome + ':\n1 = Ficha/recurso\n2 = Trabalho\n3 = Aviso', '1');
  if (o === null) return;
  var dest = { paraAluno: alunoId, label: 'aluno ' + nome };
  if (o.trim() === '1') recursosAdicionarPrompt(dest);
  else if (o.trim() === '2') tarefaAtribuirPrompt(dest);
  else if (o.trim() === '3') avisoNovoPrompt(dest);
}

/* Atalho «enviar» a um GRUPO específico. */
function grupoEnviarPrompt(grupoId, nome) {
  var o = prompt('Enviar ao grupo ' + nome + ':\n1 = Ficha/recurso\n2 = Trabalho\n3 = Aviso', '1');
  if (o === null) return;
  var dest = { grupoId: grupoId, label: 'grupo ' + nome };
  if (o.trim() === '1') recursosAdicionarPrompt(dest);
  else if (o.trim() === '2') tarefaAtribuirPrompt(dest);
  else if (o.trim() === '3') avisoNovoPrompt(dest);
}

/* Feedback a um aluno (chamado do detalhe do aluno). */
function alunoFeedbackPrompt(alunoId, nome) {
  var texto = prompt('Feedback para ' + nome + ' (só este aluno vê):');
  if (texto === null || !texto.trim()) return;
  Turmas.enviarMensagem({ texto: texto, alcance: 'aluno', paraAluno: alunoId }).then(function () {
    if (typeof eduToast === 'function') eduToast('Feedback enviado a ' + nome + '! 💬', 'success');
    if (typeof notificacoesRender === 'function') notificacoesRender();
  }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
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
    el.innerHTML = gs.map(function (g) {
      return '<div style="border:1.5px solid var(--border);border-radius:12px;margin-bottom:.5rem;overflow:hidden">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.4rem;padding:.7rem 1rem">'
        + '<div onclick="grupoToggle(\'' + g.id + '\',\'' + _escAttr(g.nome) + '\')" style="cursor:pointer;min-width:0">'
        + '<span style="font-weight:800;color:var(--ink1)"><i class="ph ph-caret-right" id="gx-' + g.id + '" style="color:var(--ink4);transition:transform .15s"></i> ' + _esc(g.nome) + '</span>'
        + ' <span style="margin-left:.3rem;font-family:JetBrains Mono,monospace;font-size:.76rem;font-weight:800;color:#2e7d52;background:#e8f5ee;border:1px solid #bfe3c9;border-radius:6px;padding:1px 7px">' + _esc(g.codigo) + '</span></div>'
        + '<span style="display:flex;gap:.35rem;flex-shrink:0">'
        + '<button onclick="grupoEnviarPrompt(\'' + g.id + '\',\'' + _escAttr(g.nome) + '\')" title="Enviar ao grupo" style="font-size:.72rem;font-weight:700;color:#1a4a2e;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:3px 10px;cursor:pointer;font-family:Montserrat,sans-serif">＋ enviar</button>'
        + '<button onclick="grupoApagar(\'' + g.id + '\',\'' + _escAttr(g.nome) + '\')" title="Apagar grupo" style="color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:3px 9px;font-size:.72rem;cursor:pointer;font-family:Montserrat,sans-serif">✕</button>'
        + '</span>'
        + '</div>'
        + '<div id="grupo-det-' + g.id + '" style="display:none;padding:0 1rem .8rem 1rem"></div>'
        + '</div>';
    }).join('');
  });
}

function grupoToggle(id, nome) {
  var det = document.getElementById('grupo-det-' + id);
  var gx = document.getElementById('gx-' + id);
  if (!det) return;
  if (det.style.display !== 'none') { det.style.display = 'none'; if (gx) gx.style.transform = ''; return; }
  det.style.display = 'block';
  if (gx) gx.style.transform = 'rotate(90deg)';
  _grupoPintaDet(id, nome);
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
    var h = '<div style="border-top:1px dashed var(--border);padding-top:.6rem">';
    // convidar outro professor
    h += '<div style="font-size:.74rem;color:var(--ink4);margin-bottom:.5rem">Outros professores entram com o código <strong>' + _esc((_turmasGruposCache.filter(function(x){return x.id===id;})[0]||{}).codigo || '') + '</strong> (botão «Sou professor, entrar em grupo» no topo).</div>';
    if (!membros.length) {
      h += '<div style="color:var(--ink4);font-size:.8rem;margin-bottom:.5rem">Ainda sem alunos. Adiciona abaixo ou partilha o código.</div>';
    } else {
      membros.forEach(function (m) {
        var sid = id + '_' + m.aluno;
        h += '<div style="border-bottom:1px dashed var(--border);padding:.4rem 0">'
          + '<div style="display:flex;align-items:center;justify-content:space-between;font-size:.84rem">'
          + '<span style="font-weight:700;color:var(--ink1)">' + _esc(m.nome_aluno || '(aluno)') + '</span>'
          + '<span style="display:flex;gap:.35rem">'
          + '<button onclick="sessaoToggle(\'' + id + '\',\'' + m.aluno + '\',\'' + _escAttr(m.nome_aluno || 'aluno') + '\')" style="font-size:.72rem;font-weight:700;color:#4a3f7a;background:var(--white);border:1.5px solid #ddd8f5;border-radius:999px;padding:2px 10px;cursor:pointer;font-family:Montserrat,sans-serif">📓 Registo</button>'
          + '<button onclick="conversaToggle(\'' + id + '\',\'' + m.aluno + '\',\'' + _escAttr(m.nome_aluno || 'aluno') + '\')" style="font-size:.72rem;font-weight:700;color:#2e7d52;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:2px 10px;cursor:pointer;font-family:Montserrat,sans-serif">💬 Mensagens</button>'
          + '<button onclick="alunoEnviarPrompt(\'' + m.aluno + '\',\'' + _escAttr(m.nome_aluno || 'aluno') + '\')" title="Enviar a este aluno" style="font-size:.72rem;font-weight:700;color:#1a4a2e;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:2px 10px;cursor:pointer;font-family:Montserrat,sans-serif">＋ enviar</button>'
          + '<button onclick="grupoRemover(\'' + id + '\',\'' + m.aluno + '\',\'' + _escAttr(nome) + '\')" style="font-size:.72rem;color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:2px 9px;cursor:pointer;font-family:Montserrat,sans-serif">remover</button>'
          + '</span></div>'
          + '<div id="sessao-' + sid + '" style="display:none"></div>'
          + '<div id="conversa-' + sid + '" style="display:none"></div>'
          + '</div>';
      });
    }
    // seletor para adicionar alunos da lista geral que ainda não estão no grupo
    var jaIds = {}; membros.forEach(function (m) { jaIds[m.aluno] = 1; });
    var disp = (_turmasAlunosCache || []).filter(function (a) { return !jaIds[a.aluno]; });
    if (disp.length) {
      h += '<div style="margin-top:.6rem;display:flex;gap:.4rem;flex-wrap:wrap;align-items:center">'
        + '<select id="grupo-add-' + id + '" style="border:1.5px solid var(--border);border-radius:8px;padding:5px 10px;font-size:.82rem;font-family:Montserrat,sans-serif;max-width:200px">'
        + '<option value="">+ Adicionar aluno…</option>'
        + disp.map(function (a) { return '<option value="' + a.aluno + '|' + _escAttr(a.nome) + '">' + _esc(a.nome) + '</option>'; }).join('')
        + '</select>'
        + '<button onclick="grupoAdicionar(\'' + id + '\',\'' + _escAttr(nome) + '\')" style="font-size:.78rem;font-weight:700;color:#2e7d52;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:5px 12px;cursor:pointer;font-family:Montserrat,sans-serif">Adicionar</button>'
        + '</div>';
    }
    h += '</div>';
    det.innerHTML = h;
  });
}

function grupoCriarPrompt() {
  var nome = prompt('Nome do grupo (ex.: 9.º A — Matemática, ou Apoio ao Estudo):');
  if (nome === null || !nome.trim()) return;
  Turmas.criarGrupo(nome.trim()).then(function (g) {
    if (typeof eduToast === 'function') eduToast('Grupo criado! Código: ' + g.codigo, 'success');
    _turmasPintaGrupos();
  }).catch(function (e) { alert(e.message || 'Não foi possível criar o grupo.'); });
}

function grupoApagar(id, nome) {
  if (!confirm('Apagar o grupo «' + nome + '»? Os alunos deixam de estar nele.')) return;
  Turmas.apagarGrupo(id).then(function () { _turmasPintaGrupos(); });
}

/* Professor entra num grupo de outro professor (pelo código) para ajudar. */
function grupoEntrarComoProf() {
  var cod = prompt('Código do grupo a que queres juntar-te como professor:');
  if (cod === null || !cod.trim()) return;
  Turmas.entrarComoProf(cod.trim()).then(function (g) {
    if (typeof eduToast === 'function') eduToast('Entraste no grupo «' + g.nome + '» como professor.', 'success');
    _turmasPintaGrupos();
  }).catch(function (e) { alert(e.message || 'Não foi possível entrar.'); });
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
      var alvo = t.para_aluno ? 'a 1 aluno' : 'à turma';
      var prazo = t.prazo ? _tarefaPrazoTxt(t.prazo) : '';
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
  Turmas.quemFez(id).then(function (lista) {
    var n = lista.length;
    box.innerHTML = '<span style="font-weight:700;color:' + (n > 0 ? '#2e7d52' : 'var(--ink4)') + '">✅ ' + n + (total ? ' de ' + total : '') + ' já fizeram</span>';
  });
}

function tarefaAtribuirPrompt(prefere) {
  var titulo = prompt('Título do trabalho (ex.: Ficha de revisões de Frações):');
  if (titulo === null || !titulo.trim()) return;
  var instrucoes = prompt('Instruções (opcional):') || '';
  var url = prompt('Link de uma ficha (opcional, Google Drive, etc.):') || '';
  var cursoNome = prompt('Tópico/curso da plataforma a praticar (opcional, ex.: Matemática 7.º):') || '';
  var prazo = prompt('Prazo (opcional, no formato AAAA-MM-DD, ex.: 2026-06-20):') || '';
  _escolherDestino(prefere, function (dest) {
    Turmas.criarTarefa({ titulo: titulo, instrucoes: instrucoes, url: url, cursoNome: cursoNome, prazo: prazo.trim() || null, grupoId: dest.grupoId, paraAluno: dest.paraAluno })
      .then(function () {
        if (typeof eduToast === 'function') eduToast('Trabalho atribuído a ' + (dest.label || 'destinatário') + '! 📋', 'success');
        _turmasPintaTarefas();
      }).catch(function (e) { alert(e.message || 'Não foi possível atribuir.'); });
  });
}

function tarefaApagar(id, titulo) {
  if (!confirm('Apagar o trabalho «' + titulo + '»?')) return;
  Turmas.apagarTarefa(id).then(function () { _turmasPintaTarefas(); });
}

function _turmasPintaAlunos(alunos) {
  var el = document.getElementById('turmas-lista');
  if (!el) return;
  if (!alunos.length) {
    el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.4rem 0">Ainda nenhum aluno com conta. Assim que se registarem, aparecem aqui.</div>';
    return;
  }
  el.innerHTML = alunos.map(function (a) {
    return '<div style="border:1.5px solid var(--border);border-radius:12px;margin-bottom:.5rem;overflow:hidden">'
      + '<div onclick="turmasToggleAluno(\'' + a.aluno + '\')" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.4rem;padding:.7rem 1rem;cursor:pointer">'
      + '<div style="font-weight:800;color:var(--ink1)"><i class="ph ph-caret-right" id="cx-' + a.aluno + '" style="color:var(--ink4);transition:transform .15s"></i> ' + _esc(a.nome) + '</div>'
      + '<div style="display:flex;gap:.7rem;font-size:.8rem;color:var(--ink3);align-items:center">'
      + '<span>⭐ ' + a.xp + '</span>'
      + '<span>' + (a.streak > 0 ? '🔥 ' + a.streak : '<span style="color:var(--ink4)">🔥 0</span>') + '</span>'
      + '<span title="Desafios feitos">🎯 ' + a.desafios + '</span>'
      + '</div></div>'
      + '<div id="det-' + a.aluno + '" style="display:none;padding:0 1rem .8rem 1rem"></div>'
      + '</div>';
  }).join('');
}

function turmasFiltrar() {
  var q = (document.getElementById('turmas-pesquisa') || {}).value || '';
  q = q.trim().toLowerCase();
  if (!_turmasAlunosCache) return;
  var fil = !q ? _turmasAlunosCache : _turmasAlunosCache.filter(function (a) {
    return (a.nome || '').toLowerCase().indexOf(q) !== -1 || (a.email || '').toLowerCase().indexOf(q) !== -1;
  });
  _turmasPintaAlunos(fil);
}

function turmasToggleAluno(id) {
  var det = document.getElementById('det-' + id);
  var cx = document.getElementById('cx-' + id);
  if (!det) return;
  var aberto = det.style.display !== 'none';
  if (aberto) { det.style.display = 'none'; if (cx) cx.style.transform = ''; return; }
  det.style.display = 'block';
  if (cx) cx.style.transform = 'rotate(90deg)';
  var a = (_turmasAlunosCache || []).filter(function (x) { return x.aluno === id; })[0];
  if (!a) { det.innerHTML = ''; return; }

  var h = '<div style="border-top:1px dashed var(--border);padding-top:.6rem">'
    + (a.email ? '<div style="font-size:.74rem;color:var(--ink4);margin-bottom:.5rem">' + _esc(a.email) + '</div>' : '');

  // ── Atividade recente + ação de feedback ──
  h += '<div class="al-linha">' + _esc(_alunoAtividade(a)) + '</div>';
  h += '<button onclick="alunoFeedbackPrompt(\'' + id + '\',\'' + _escAttr(a.nome) + '\')" style="font-size:.76rem;font-weight:700;color:#4a3f7a;background:var(--white);border:1.5px solid #ddd8f5;border-radius:999px;padding:4px 12px;cursor:pointer;font-family:Montserrat,sans-serif;margin-bottom:.5rem"><i class="ph ph-chat-circle-text"></i> Deixar feedback</button>';

  // ── Trabalho atribuído (carregado a seguir) ──
  h += '<div class="al-sec">Trabalho atribuído</div>'
    + '<div id="al-tarefas-' + id + '" class="al-tarefas">a carregar…</div>';

  // ── Progresso por disciplina ──
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

  // ── Onde erra mais ──
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

  h += '</div>';
  det.innerHTML = h;

  // carrega o resumo de tarefas deste aluno
  if (Turmas.resumoTarefasAluno) {
    Turmas.resumoTarefasAluno(id).then(function (r) {
      var box = document.getElementById('al-tarefas-' + id);
      if (!box) return;
      if (!r.total) { box.innerHTML = '<span style="color:var(--ink4)">Sem trabalho atribuído.</span>'; return; }
      var falta = r.total - r.feitas;
      box.innerHTML = '<span style="font-weight:800;color:' + (falta === 0 ? '#2e7d52' : (falta > 0 ? '#b8860b' : 'var(--ink2)')) + '">'
        + r.feitas + ' de ' + r.total + ' feitas</span>'
        + (falta > 0 ? ' <span style="color:var(--ink4)">· ' + falta + ' por fazer</span>' : ' ✅');
    });
  }
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
      var destino = r.grupo_id ? ('grupo ' + ((r.grupos && r.grupos.nome) || '')) : (r.para_aluno ? '1 aluno' : '');
      return '<div style="display:flex;align-items:center;justify-content:space-between;gap:.6rem;border:1.5px solid var(--border);border-radius:12px;padding:.6rem .9rem;margin-bottom:.45rem">'
        + '<a href="' + _escAttr(r.url) + '" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:.6rem;text-decoration:none;flex:1;min-width:0">'
        + '<span style="font-size:1.1rem">📄</span>'
        + '<span style="min-width:0"><span style="font-weight:700;color:var(--ink1);display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + _esc(r.titulo) + '</span>'
        + '<span style="font-size:.72rem;color:var(--ink4)">' + (r.disciplina ? _esc(r.disciplina) + ' · ' : '') + (podeGerir && destino ? 'para ' + _esc(destino) + ' · ' : '') + 'por ' + _esc(r.autor_nome || 'professor') + '</span></span></a>'
        + (podeGerir ? '<button onclick="recursosApagar(\'' + r.id + '\',\'' + _escAttr(r.titulo) + '\')" title="Remover" style="color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:3px 9px;font-size:.72rem;cursor:pointer;font-family:Montserrat,sans-serif">✕</button>' : '')
        + '</div>';
    }).join('');
  });
}

function recursosAdicionarPrompt(prefere) {
  var titulo = prompt('Nome da ficha/recurso (ex.: Ficha de revisões de Frações):');
  if (titulo === null) return;
  var url = prompt('Cola o link (Google Drive, etc.):');
  if (url === null) return;
  var disc = prompt('Disciplina (opcional, ex.: Matemática 7.º):') || '';
  _escolherDestino(prefere, function (dest) {
    Turmas.adicionarRecurso(titulo, url, disc, { grupoId: dest.grupoId, paraAluno: dest.paraAluno }).then(function () {
      if (typeof eduToast === 'function') eduToast('Ficha partilhada com ' + (dest.label || 'destinatário') + '! 📄', 'success');
      _turmasPintaRecursos(true);
    }).catch(function (e) { alert(e.message || 'Não foi possível adicionar.'); });
  });
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
    // mensagens do professor
    + '<div style="border-top:1px solid var(--border);padding-top:1rem;margin-bottom:1.2rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem;margin-bottom:.6rem"><i class="ph ph-chats-circle" style="color:#2e7d52"></i> Mensagens do professor</div>'
    + '<div id="turmas-mensagens-aluno"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
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
    // tirar dúvidas
    + '<div style="border-top:1px solid var(--border);padding-top:1rem;margin-top:1.2rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem;margin-bottom:.4rem"><i class="ph ph-question" style="color:#4a3f7a"></i> Tirar dúvidas</div>'
    + '<div style="font-size:.82rem;color:var(--ink4);margin-bottom:.7rem">Tens uma dúvida? Manda-a ao teu professor. A resposta aparece no teu <strong>Início</strong>, em «Avisos e mensagens».</div>'
    + '<button onclick="alunoTirarDuvida()" style="background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:999px;padding:8px 18px;font-size:.84rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-paper-plane-tilt"></i> Mandar dúvida ao professor</button>'
    + '</div>'
    + '</div>';
  _alunoPintaGrupos();
  _alunoPintaMensagens();
  _alunoPintaRegisto();
  _turmasPintaRecursos(false);
}

/* O aluno vê as mensagens do professor (avisos gerais/grupo + feedback a
   si) e pode responder / mandar dúvida. (Veio do Início p/ as Turmas.) */
function _alunoPintaMensagens() {
  var el = document.getElementById('turmas-mensagens-aluno');
  if (!el || !Turmas.muralDoAluno) return;
  Turmas.muralDoAluno().then(function (ms) {
    if (!el) return;
    var respostas = {}, topo = [];
    ms.forEach(function (m) {
      if (m.resposta_a) { (respostas[m.resposta_a] = respostas[m.resposta_a] || []).push(m); }
      else topo.push(m);
    });
    var h = '';
    if (!topo.length) {
      h += '<div style="font-size:.85rem;color:var(--ink4);margin-bottom:.6rem">Sem mensagens por agora. Tens uma dúvida? Manda-a ao teu professor.</div>';
    } else {
      topo.forEach(function (m) {
        h += _alunoMsgHTML(m, false);
        (respostas[m.id] || []).forEach(function (r) { h += _alunoMsgHTML(r, true); });
        if (m.autor_tipo !== 'aluno') {
          h += '<div style="margin:-.2rem 0 .6rem 0"><a href="#" onclick="alunoResponderTurmas(\'' + m.id + '\');return false" style="font-size:.76rem;font-weight:700;color:#4a3f7a;text-decoration:none">↩ Responder</a></div>';
        }
      });
    }
    h += '<button onclick="alunoTirarDuvida()" style="width:100%;margin-top:.3rem;background:var(--white);border:1.5px dashed #b9b1d6;color:#4a3f7a;border-radius:12px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.84rem;font-weight:800;cursor:pointer"><i class="ph ph-question"></i> Mandar dúvida ao professor</button>';
    el.innerHTML = h;
  });
}

function _alunoMsgHTML(m, ehResp) {
  var doAluno = m.autor_tipo === 'aluno';
  var et;
  if (doAluno) et = m.alcance === 'duvida' ? '❓ A tua dúvida' : '↩ A tua resposta';
  else if (m.alcance === 'aluno') et = '💬 Para ti';
  else if (m.alcance === 'grupo') et = '👥 ' + ((m.grupos && m.grupos.nome) || 'Grupo');
  else et = '📣 Aviso';
  var cor = doAluno ? '#a8854d' : (m.alcance === 'aluno' ? '#4a3f7a' : '#2e7d52');
  var fundo = doAluno ? '#faf6ee' : (m.alcance === 'aluno' ? '#f4f2fa' : 'var(--cream)');
  return '<div style="border-left:3px solid ' + cor + ';background:' + fundo + ';border-radius:0 10px 10px 0;padding:.5rem .8rem;margin-bottom:.45rem' + (ehResp ? ';margin-left:1.2rem' : '') + '">'
    + '<div style="font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--ink4);margin-bottom:.15rem">' + _esc(et) + '</div>'
    + '<div style="font-size:.86rem;color:var(--ink1);line-height:1.5">' + _esc(m.texto) + '</div>'
    + '<div style="font-size:.7rem;color:var(--ink4);margin-top:.2rem">' + _esc(doAluno ? 'tu' : (m.prof_nome || 'professor')) + '</div>'
    + '</div>';
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
  var txt = prompt('Escreve a tua dúvida para o professor:');
  if (txt === null || !txt.trim()) return;
  Turmas.criarDuvida(txt).then(function () {
    if (typeof eduToast === 'function') eduToast('Dúvida enviada ao professor! ❓', 'success');
    if (typeof _alunoPintaMensagens === 'function') _alunoPintaMensagens();
    if (typeof notificacoesRender === 'function') notificacoesRender();
  }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
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
  var codigo = prompt('Código do grupo (dado pelo teu professor):');
  if (codigo === null || !codigo.trim()) return;
  Turmas.entrarPorCodigo(codigo.trim()).then(function (g) {
    if (typeof eduToast === 'function') eduToast('Entraste no grupo «' + g.nome + '»! 🎉', 'success');
    _alunoPintaGrupos();
  }).catch(function (e) { alert(e.message || 'Não foi possível entrar.'); });
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
