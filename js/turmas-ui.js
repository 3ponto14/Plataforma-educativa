/* ════════════════════════════════════════════════════════════════
   turmas-ui.js — Interface de turmas no portal (#portal-turmas)
   Mostra-se só com sessão iniciada. Professor: criar turma + ver
   alunos/progresso. Aluno: entrar numa turma por código + ver as suas.
   ════════════════════════════════════════════════════════════════ */

function turmasRender() {
  var wrap = document.getElementById('portal-turmas');
  if (!wrap) return;
  if (typeof Cloud === 'undefined' || !Cloud.disponivel() || !Cloud.utilizador()) {
    wrap.innerHTML = ''; return; // sem sessão, não mostra nada
  }
  if (Cloud.ehProfessor()) _turmasRenderProfessor(wrap);
  else _turmasRenderAluno(wrap);
}

/* ── PROFESSOR ── */
function _turmasRenderProfessor(wrap) {
  wrap.innerHTML = '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.25rem 1.4rem">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.5rem">'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.35rem;font-weight:700;color:var(--ink1)"><i class="ph ph-chalkboard-teacher" style="color:#2e7d52"></i> As minhas turmas</div>'
    + '<button onclick="turmasCriarPrompt()" style="background:linear-gradient(135deg,#1a4a2e,#2e7d52);color:#fff;border:none;border-radius:999px;padding:6px 15px;font-size:.8rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-plus"></i> Nova turma</button>'
    + '</div>'
    + '<div id="turmas-lista" style="margin-top:.5rem"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>';
  Turmas.minhasTurmas().then(function (ts) {
    var el = document.getElementById('turmas-lista');
    if (!el) return;
    if (!ts.length) { el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.5rem 0">Ainda não tens turmas. Cria uma e partilha o código com os teus alunos.</div>'; return; }
    el.innerHTML = ts.map(function (t) {
      return '<div style="border:1.5px solid var(--border);border-radius:12px;padding:.75rem 1rem;margin-bottom:.5rem">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.4rem">'
        + '<div><span style="font-weight:800;color:var(--ink1)">' + _esc(t.nome) + '</span>'
        + ' <span style="margin-left:.4rem;font-family:JetBrains Mono,monospace;font-size:.8rem;font-weight:800;color:#2e7d52;background:#e8f5ee;border:1px solid #bfe3c9;border-radius:6px;padding:2px 8px">' + t.codigo + '</span></div>'
        + '<div style="display:flex;gap:.4rem">'
        + '<button onclick="turmasVerAlunos(\'' + t.id + '\',\'' + _esc(t.nome) + '\')" style="font-size:.74rem;font-weight:700;color:#2e7d52;background:var(--white);border:1.5px solid #bfe3c9;border-radius:999px;padding:4px 12px;cursor:pointer;font-family:Montserrat,sans-serif">Ver alunos</button>'
        + '<button onclick="turmasApagar(\'' + t.id + '\',\'' + _esc(t.nome) + '\')" title="Apagar turma" style="font-size:.74rem;color:#c0392b;background:none;border:1px solid #e8a8a0;border-radius:999px;padding:4px 10px;cursor:pointer;font-family:Montserrat,sans-serif">✕</button>'
        + '</div></div>'
        + '<div id="alunos-' + t.id + '"></div>'
        + '</div>';
    }).join('');
  });
}

function turmasCriarPrompt() {
  var nome = prompt('Nome da turma (ex.: 7.º A — Matemática):');
  if (!nome || !nome.trim()) return;
  Turmas.criar(nome.trim()).then(function (t) {
    if (typeof eduToast === 'function') eduToast('Turma criada! Código: ' + t.codigo, 'success');
    turmasRender();
  }).catch(function (e) { alert('Não foi possível criar a turma: ' + (e.message || e)); });
}

function turmasApagar(id, nome) {
  if (!confirm('Apagar a turma «' + nome + '»? Os alunos deixam de estar inscritos.')) return;
  Turmas.apagar(id).then(function () { turmasRender(); });
}

function turmasVerAlunos(id, nome) {
  var box = document.getElementById('alunos-' + id);
  if (!box) return;
  if (box.innerHTML) { box.innerHTML = ''; return; } // toggle
  box.innerHTML = '<div style="color:var(--ink4);font-size:.8rem;padding:.5rem 0">A carregar alunos…</div>';
  Turmas.alunosDaTurma(id).then(function (alunos) {
    if (!alunos.length) { box.innerHTML = '<div style="color:var(--ink4);font-size:.8rem;padding:.5rem 0 .2rem">Ainda nenhum aluno entrou. Partilha o código da turma.</div>'; return; }
    var h = '<div style="margin-top:.6rem;overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.82rem">';
    h += '<thead><tr style="text-align:left;color:var(--ink4);font-size:.7rem;text-transform:uppercase;letter-spacing:.05em">'
      + '<th style="padding:.3rem .5rem">Aluno</th><th style="padding:.3rem .5rem">XP</th><th style="padding:.3rem .5rem">Ofensiva</th><th style="padding:.3rem .5rem">Desafios</th><th style="padding:.3rem .5rem">Domínios</th></tr></thead><tbody>';
    alunos.forEach(function (a) {
      h += '<tr style="border-top:1px solid var(--border)">'
        + '<td style="padding:.4rem .5rem;font-weight:700;color:var(--ink1)">' + _esc(a.nome) + '</td>'
        + '<td style="padding:.4rem .5rem">⭐ ' + a.xp + '</td>'
        + '<td style="padding:.4rem .5rem">' + (a.streak > 0 ? '🔥 ' + a.streak : '—') + '</td>'
        + '<td style="padding:.4rem .5rem">' + a.desafios + '</td>'
        + '<td style="padding:.4rem .5rem">' + a.capsAtivos + '</td>'
        + '</tr>';
    });
    h += '</tbody></table></div>';
    box.innerHTML = h;
  });
}

/* ── ALUNO ── */
function _turmasRenderAluno(wrap) {
  wrap.innerHTML = '<div style="background:var(--white);border:1.5px solid var(--border);border-radius:18px;padding:1.25rem 1.4rem">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;margin-bottom:.5rem">'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.35rem;font-weight:700;color:var(--ink1)"><i class="ph ph-users-three" style="color:#4a3f7a"></i> As minhas turmas</div>'
    + '<button onclick="turmasEntrarPrompt()" style="background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:999px;padding:6px 15px;font-size:.8rem;font-weight:800;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-sign-in"></i> Entrar numa turma</button>'
    + '</div>'
    + '<div id="turmas-aluno-lista" style="margin-top:.5rem"><div style="color:var(--ink4);font-size:.85rem">A carregar…</div></div>'
    + '</div>';
  Turmas.minhasInscricoes().then(function (insc) {
    var el = document.getElementById('turmas-aluno-lista');
    if (!el) return;
    if (!insc.length) { el.innerHTML = '<div style="color:var(--ink4);font-size:.85rem;padding:.5rem 0">Ainda não estás em nenhuma turma. Pede o código ao teu professor e clica em «Entrar numa turma».</div>'; return; }
    el.innerHTML = insc.map(function (i) {
      var nome = (i.turmas && i.turmas.nome) || 'Turma';
      var cod = (i.turmas && i.turmas.codigo) || '';
      return '<div style="border:1.5px solid var(--border);border-radius:12px;padding:.7rem 1rem;margin-bottom:.5rem"><span style="font-weight:800;color:var(--ink1)">' + _esc(nome) + '</span> <span style="margin-left:.4rem;font-family:JetBrains Mono,monospace;font-size:.78rem;color:var(--ink4)">' + cod + '</span></div>';
    }).join('');
  });
}

function turmasEntrarPrompt() {
  var codigo = prompt('Código da turma (dado pelo teu professor):');
  if (!codigo || !codigo.trim()) return;
  Turmas.entrar(codigo.trim()).then(function (t) {
    if (typeof eduToast === 'function') eduToast('Entraste na turma «' + t.nome + '»! 🎉', 'success');
    turmasRender();
  }).catch(function (e) { alert(e.message || 'Não foi possível entrar.'); });
}

function _esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }

/* Render quando a sessão muda (login/logout) e ao carregar. */
document.addEventListener('cloud:auth', function () { turmasRender(); });
document.addEventListener('DOMContentLoaded', function () { setTimeout(turmasRender, 400); });
