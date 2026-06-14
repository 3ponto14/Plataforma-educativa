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
function _turmasRenderProfessor(wrap) {
  wrap.innerHTML =
    '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.25rem 1.4rem">'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.45rem;font-weight:700;color:var(--ink1);margin-bottom:.15rem"><i class="ph ph-chalkboard-teacher" style="color:#2e7d52"></i> Turmas</div>'
    + '<div style="font-size:.82rem;color:var(--ink4);margin-bottom:1rem">Todos os alunos com conta aparecem aqui. Organiza-os em grupos, atribui trabalho e partilha fichas.</div>'
    // grupos
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem"><i class="ph ph-users-four" style="color:#2e7d52"></i> Grupos</div>'
    + '<button onclick="grupoCriarPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:6px 15px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-plus"></i> Novo grupo</button>'
    + '</div>'
    + '<div id="turmas-grupos" style="margin-bottom:1.2rem"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    // alunos
    + '<div style="border-top:1px solid var(--border);padding-top:1rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem"><i class="ph ph-users-three" style="color:#2e7d52"></i> Todos os alunos</div>'
    + '<input id="turmas-pesquisa" oninput="turmasFiltrar()" placeholder="🔎 Procurar aluno…" style="border:1.5px solid var(--border);border-radius:999px;padding:5px 14px;font-size:.82rem;font-family:Montserrat,sans-serif;outline:none;min-width:180px">'
    + '</div>'
    + '<div id="turmas-lista"><div style="color:var(--ink4);font-size:.85rem">A carregar alunos…</div></div>'
    // trabalho atribuído
    + '<div style="border-top:1px solid var(--border);margin-top:1.2rem;padding-top:1rem">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem"><i class="ph ph-clipboard-text" style="color:#2e7d52"></i> Trabalho atribuído</div>'
    + '<button onclick="tarefaAtribuirPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:6px 15px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-plus"></i> Atribuir trabalho</button>'
    + '</div>'
    + '<div id="turmas-tarefas"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>'
    // avisos e mensagens
    + '<div style="border-top:1px solid var(--border);margin-top:1.2rem;padding-top:1rem">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem"><i class="ph ph-megaphone" style="color:#2e7d52"></i> Avisos</div>'
    + '<button onclick="avisoNovoPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:6px 15px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-plus"></i> Novo aviso</button>'
    + '</div>'
    + '<div id="turmas-avisos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    // dúvidas e respostas dos alunos
    + '<div style="font-weight:800;color:var(--ink1);font-size:.9rem;margin:1rem 0 .5rem"><i class="ph ph-chats-circle" style="color:#4a3f7a"></i> Dúvidas e respostas dos alunos</div>'
    + '<div id="turmas-duvidas"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>'
    // recursos
    + '<div style="border-top:1px solid var(--border);margin-top:1.2rem;padding-top:1rem">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem"><i class="ph ph-link-simple" style="color:#2e7d52"></i> Fichas e recursos</div>'
    + '<button onclick="recursosAdicionarPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:6px 15px;font-size:.78rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-plus"></i> Adicionar link</button>'
    + '</div>'
    + '<div id="turmas-recursos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>'
    + '</div>';

  Turmas.todosOsAlunos().then(function (alunos) {
    _turmasAlunosCache = alunos;
    _turmasPintaAlunos(alunos);
  });
  _turmasPintaGrupos();
  _turmasPintaTarefas();
  _turmasPintaAvisos();
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
    el.innerHTML = ms.map(function (m) {
      var tipo = m.alcance === 'duvida' ? '❓ Dúvida' : '↩ Resposta';
      return '<div style="border:1.5px solid var(--border);border-radius:12px;padding:.7rem 1rem;margin-bottom:.5rem;background:#f4f2fa">'
        + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem">'
        + '<div style="min-width:0"><span style="font-size:.7rem;font-weight:800;color:#4a3f7a">' + tipo + ' · ' + _esc(m.de_nome || 'aluno') + '</span>'
        + '<div style="font-size:.86rem;color:var(--ink2);line-height:1.5;margin-top:.3rem">' + _esc(m.texto) + '</div></div>'
        + '<button onclick="duvidaResponder(\'' + m.id + '\',\'' + (m.de_aluno || '') + '\',\'' + _escAttr(m.de_nome || 'aluno') + '\')" style="font-size:.74rem;font-weight:700;color:#fff;background:#4a3f7a;border:none;border-radius:999px;padding:4px 12px;cursor:pointer;font-family:Montserrat,sans-serif;flex-shrink:0">Responder</button>'
        + '</div></div>';
    }).join('');
  });
}

function duvidaResponder(msgId, alunoId, nome) {
  var texto = prompt('Responder a ' + nome + ':');
  if (texto === null || !texto.trim()) return;
  Turmas.enviarMensagem({ texto: texto, alcance: 'aluno', paraAluno: alunoId, respostaA: msgId }).then(function () {
    if (typeof eduToast === 'function') eduToast('Resposta enviada a ' + nome + '! 💬', 'success');
  }).catch(function (e) { alert(e.message || 'Não foi possível responder.'); });
}

/* ── Avisos e mensagens (vista do professor) ── */
function _turmasPintaAvisos() {
  var el = document.getElementById('turmas-avisos');
  if (!el) return;
  Turmas.mensagensDoProf().then(function (ms) {
    if (!el) return;
    if (!ms.length) {
      el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.3rem 0">Sem avisos. Carrega em «Novo aviso» para mandares um recado a todos ou a um grupo. (Para feedback a um aluno, abre o aluno acima e usa «Deixar feedback».)</div>';
      return;
    }
    el.innerHTML = ms.map(function (m) {
      var alvo = m.alcance === 'geral' ? 'Todos' : (m.alcance === 'grupo' ? ((m.grupos && m.grupos.nome) || 'Grupo') : 'Feedback privado');
      var cor = m.alcance === 'aluno' ? '#4a3f7a' : '#2e7d52';
      var fundo = m.alcance === 'aluno' ? '#f0edf7' : '#e8f5ee';
      var borda = m.alcance === 'aluno' ? '#ddd8f5' : '#bfe3c9';
      return '<div style="border:1.5px solid var(--border);border-radius:12px;padding:.7rem 1rem;margin-bottom:.5rem">'
        + '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:.5rem">'
        + '<div style="min-width:0"><span style="font-size:.7rem;font-weight:800;color:' + cor + ';background:' + fundo + ';border:1px solid ' + borda + ';border-radius:6px;padding:1px 8px">' + _esc(alvo) + '</span>'
        + '<div style="font-size:.86rem;color:var(--ink2);line-height:1.5;margin-top:.35rem">' + _esc(m.texto) + '</div></div>'
        + '<button onclick="avisoApagar(\'' + m.id + '\')" title="Apagar" style="color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:3px 9px;font-size:.72rem;cursor:pointer;font-family:Montserrat,sans-serif;flex-shrink:0">✕</button>'
        + '</div></div>';
    }).join('');
  });
}

function avisoNovoPrompt() {
  var texto = prompt('Escreve o aviso (ex.: Teste de Matemática na próxima 6.ª feira):');
  if (texto === null || !texto.trim()) return;
  // alcance: todos ou um grupo
  Turmas.todosOsGrupos().then(function (gs) {
    var alcance = 'geral', grupoId = null;
    if (gs.length) {
      var opc = 'Para quem é o aviso?\n0 = Todos os alunos';
      gs.forEach(function (g, i) { opc += '\n' + (i + 1) + ' = ' + g.nome; });
      var esc = prompt(opc, '0');
      if (esc === null) return;
      var n = parseInt(esc, 10);
      if (n >= 1 && n <= gs.length) { alcance = 'grupo'; grupoId = gs[n - 1].id; }
    }
    Turmas.enviarMensagem({ texto: texto, alcance: alcance, grupoId: grupoId }).then(function () {
      if (typeof eduToast === 'function') eduToast('Aviso enviado! 📣', 'success');
      _turmasPintaAvisos();
    }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
  });
}

function avisoApagar(id) {
  if (!confirm('Apagar este aviso?')) return;
  Turmas.apagarMensagem(id).then(function () { _turmasPintaAvisos(); });
}

/* Feedback a um aluno (chamado do detalhe do aluno). */
function alunoFeedbackPrompt(alunoId, nome) {
  var texto = prompt('Feedback para ' + nome + ' (só este aluno vê):');
  if (texto === null || !texto.trim()) return;
  Turmas.enviarMensagem({ texto: texto, alcance: 'aluno', paraAluno: alunoId }).then(function () {
    if (typeof eduToast === 'function') eduToast('Feedback enviado a ' + nome + '! 💬', 'success');
    _turmasPintaAvisos();
  }).catch(function (e) { alert(e.message || 'Não foi possível enviar.'); });
}

/* ── Grupos (vista do professor) ── */
function _turmasPintaGrupos() {
  var el = document.getElementById('turmas-grupos');
  if (!el) return;
  Turmas.todosOsGrupos().then(function (gs) {
    if (!el) return;
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
        + '<button onclick="grupoApagar(\'' + g.id + '\',\'' + _escAttr(g.nome) + '\')" title="Apagar grupo" style="color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:3px 9px;font-size:.72rem;cursor:pointer;font-family:Montserrat,sans-serif;flex-shrink:0">✕</button>'
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
  det.innerHTML = '<div style="color:var(--ink4);font-size:.8rem;padding:.4rem 0">A carregar…</div>';
  Turmas.alunosDoGrupo(id).then(function (membros) {
    var h = '<div style="border-top:1px dashed var(--border);padding-top:.6rem">';
    if (!membros.length) {
      h += '<div style="color:var(--ink4);font-size:.8rem;margin-bottom:.5rem">Ainda sem alunos. Adiciona abaixo ou partilha o código.</div>';
    } else {
      membros.forEach(function (m) {
        h += '<div style="display:flex;align-items:center;justify-content:space-between;font-size:.84rem;padding:.3rem 0;border-bottom:1px dashed var(--border)">'
          + '<span style="font-weight:700;color:var(--ink1)">' + _esc(m.nome_aluno || '(aluno)') + '</span>'
          + '<button onclick="grupoRemover(\'' + id + '\',\'' + m.aluno + '\',\'' + _escAttr(nome) + '\')" style="font-size:.72rem;color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:2px 9px;cursor:pointer;font-family:Montserrat,sans-serif">remover</button>'
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

function tarefaAtribuirPrompt() {
  var titulo = prompt('Título do trabalho (ex.: Ficha de revisões de Frações):');
  if (titulo === null || !titulo.trim()) return;
  var instrucoes = prompt('Instruções (opcional):') || '';
  var url = prompt('Link de uma ficha (opcional, Google Drive, etc.):') || '';
  var cursoNome = prompt('Tópico/curso da plataforma a praticar (opcional, ex.: Matemática 7.º):') || '';
  var prazo = prompt('Prazo (opcional, no formato AAAA-MM-DD, ex.: 2026-06-20):') || '';
  Turmas.criarTarefa({ titulo: titulo, instrucoes: instrucoes, url: url, cursoNome: cursoNome, prazo: prazo.trim() || null })
    .then(function () {
      if (typeof eduToast === 'function') eduToast('Trabalho atribuído à turma! 📋', 'success');
      _turmasPintaTarefas();
    }).catch(function (e) { alert(e.message || 'Não foi possível atribuir.'); });
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
      return '<div style="display:flex;align-items:center;justify-content:space-between;gap:.6rem;border:1.5px solid var(--border);border-radius:12px;padding:.6rem .9rem;margin-bottom:.45rem">'
        + '<a href="' + _escAttr(r.url) + '" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:.6rem;text-decoration:none;flex:1;min-width:0">'
        + '<span style="font-size:1.1rem">📄</span>'
        + '<span style="min-width:0"><span style="font-weight:700;color:var(--ink1);display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + _esc(r.titulo) + '</span>'
        + '<span style="font-size:.72rem;color:var(--ink4)">' + (r.disciplina ? _esc(r.disciplina) + ' · ' : '') + 'por ' + _esc(r.autor_nome || 'professor') + '</span></span></a>'
        + (podeGerir ? '<button onclick="recursosApagar(\'' + r.id + '\',\'' + _escAttr(r.titulo) + '\')" title="Remover" style="color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:3px 9px;font-size:.72rem;cursor:pointer;font-family:Montserrat,sans-serif">✕</button>' : '')
        + '</div>';
    }).join('');
  });
}

function recursosAdicionarPrompt() {
  var titulo = prompt('Nome da ficha/recurso (ex.: Ficha de revisões de Frações):');
  if (titulo === null) return;
  var url = prompt('Cola o link (Google Drive, etc.):');
  if (url === null) return;
  var disc = prompt('Disciplina (opcional, ex.: Matemática 7.º):') || '';
  Turmas.adicionarRecurso(titulo, url, disc).then(function () {
    if (typeof eduToast === 'function') eduToast('Ficha partilhada com a turma! 📄', 'success');
    _turmasPintaRecursos(true);
  }).catch(function (e) { alert(e.message || 'Não foi possível adicionar.'); });
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
    // fichas
    + '<div style="border-top:1px solid var(--border);padding-top:1rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem;margin-bottom:.6rem"><i class="ph ph-folder-open" style="color:#4a3f7a"></i> Fichas e materiais</div>'
    + '<div id="turmas-recursos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>'
    + '</div>';
  _alunoPintaGrupos();
  _turmasPintaRecursos(false);
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
