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
    + '<div style="font-size:.82rem;color:var(--ink4);margin-bottom:1rem">Todos os alunos com conta aparecem aqui. Vê o que cada um andou a fazer e partilha fichas com a turma toda.</div>'
    // alunos
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.6rem">'
    + '<div style="font-weight:800;color:var(--ink1);font-size:.95rem"><i class="ph ph-users-three" style="color:#2e7d52"></i> Alunos</div>'
    + '<input id="turmas-pesquisa" oninput="turmasFiltrar()" placeholder="🔎 Procurar aluno…" style="border:1.5px solid var(--border);border-radius:999px;padding:5px 14px;font-size:.82rem;font-family:Montserrat,sans-serif;outline:none;min-width:180px">'
    + '</div>'
    + '<div id="turmas-lista"><div style="color:var(--ink4);font-size:.85rem">A carregar alunos…</div></div>'
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
  _turmasPintaRecursos(true);
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
  if (!a.disciplinas.length) {
    det.innerHTML = '<div style="color:var(--ink4);font-size:.8rem;border-top:1px dashed var(--border);padding-top:.6rem">Ainda não praticou nada na plataforma.</div>';
    return;
  }
  var maxXp = a.disciplinas[0].xp || 1;
  var h = '<div style="border-top:1px dashed var(--border);padding-top:.6rem">'
    + (a.email ? '<div style="font-size:.74rem;color:var(--ink4);margin-bottom:.5rem">' + _esc(a.email) + '</div>' : '')
    + '<div style="font-size:.72rem;color:var(--ink4);text-transform:uppercase;letter-spacing:.05em;margin-bottom:.4rem">O que andou a fazer</div>';
  a.disciplinas.forEach(function (d) {
    var pct = Math.round((d.xp / maxXp) * 100);
    h += '<div style="margin-bottom:.45rem">'
      + '<div style="display:flex;justify-content:space-between;font-size:.8rem;color:var(--ink2);margin-bottom:.15rem">'
      + '<span style="font-weight:700">' + _esc(d.disciplina) + '</span>'
      + '<span style="color:var(--ink4)">⭐ ' + d.xp + ' · ' + d.topicos + ' tópico' + (d.topicos === 1 ? '' : 's') + '</span></div>'
      + '<div style="height:6px;background:var(--cream);border-radius:6px;overflow:hidden"><div style="height:100%;width:' + Math.max(pct, 6) + '%;background:linear-gradient(90deg,#2e7d52,#5cb085)"></div></div>'
      + '</div>';
  });
  h += '</div>';
  det.innerHTML = h;
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
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.45rem;font-weight:700;color:var(--ink1);margin-bottom:.15rem"><i class="ph ph-folder-open" style="color:#4a3f7a"></i> Fichas da Turma</div>'
    + '<div style="font-size:.82rem;color:var(--ink4);margin-bottom:1rem">Fichas e materiais partilhados pelos teus professores. Clica para abrir/descarregar.</div>'
    + '<div id="turmas-recursos"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>';
  _turmasPintaRecursos(false);
}

/* ── utilitários ── */
function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
function _escAttr(s) { return _esc(s); }

/* Render quando a sessão muda (login/logout) e ao carregar. */
document.addEventListener('cloud:auth', function () { turmasRender(); });
document.addEventListener('DOMContentLoaded', function () { setTimeout(turmasRender, 400); });
