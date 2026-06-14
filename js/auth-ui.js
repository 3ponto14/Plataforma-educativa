/* ════════════════════════════════════════════════════════════════
   auth-ui.js — Interface de contas no portal (botão + modal)
   Depende de cloud.js. Mostra "Entrar" quando anónimo e o email +
   "Sair" quando autenticado. Modal simples: criar conta / entrar.
   ════════════════════════════════════════════════════════════════ */

function authRenderBotao() {
  var slot = document.querySelector('.site-topbar-actions');
  if (!slot || typeof Cloud === 'undefined' || !Cloud.disponivel()) return;
  // o slot também tem os chips de streak/XP (pmUpdateTopbar); só geримos o nosso bloco
  var antigo = document.getElementById('auth-bloco');
  if (antigo) antigo.remove();

  var u = Cloud.utilizador();
  var div = document.createElement('div');
  div.id = 'auth-bloco';
  div.style.cssText = 'display:inline-flex;align-items:center;gap:.5rem;margin-left:.5rem';
  if (u) {
    var nome = (typeof Cloud.nome === 'function' ? Cloud.nome() : (u.email || '').split('@')[0]);
    div.innerHTML =
      '<span title="' + (u.email || '') + '" style="font-size:.78rem;font-weight:700;color:var(--ink3);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap"><i class="ph ph-user-circle" style="color:#4a3f7a"></i> ' + nome + '</span>'
      + '<button onclick="authSair()" style="font-size:.72rem;font-weight:700;color:var(--ink4);background:none;border:1px solid var(--border);border-radius:999px;padding:3px 11px;cursor:pointer;font-family:Montserrat,sans-serif">Sair</button>';
  } else {
    div.innerHTML =
      '<button onclick="authAbrir()" style="font-size:.78rem;font-weight:800;color:#fff;background:linear-gradient(135deg,#4a3f7a,#6b5fa0);border:none;border-radius:999px;padding:5px 15px;cursor:pointer;font-family:Montserrat,sans-serif"><i class="ph ph-user"></i> Entrar</button>';
  }
  slot.appendChild(div);
}

function authAbrir(modo) {
  modo = modo || 'entrar';
  authFechar();
  var ov = document.createElement('div');
  ov.id = 'auth-overlay';
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(20,16,40,.55);z-index:9998;display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(3px)';
  ov.onclick = function (e) { if (e.target === ov) authFechar(); };

  var entrar = modo === 'entrar';
  ov.innerHTML =
    '<div style="background:var(--white);border-radius:20px;max-width:380px;width:100%;padding:1.75rem;box-shadow:0 20px 60px rgba(0,0,0,.3)">'
    + '<div style="text-align:center;margin-bottom:1.1rem">'
    + '<div style="font-size:1.9rem">🔥</div>'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.5rem;font-weight:700;color:var(--ink1)">' + (entrar ? 'Entrar' : 'Criar conta') + '</div>'
    + '<div style="font-size:.8rem;color:var(--ink4);line-height:1.5;margin-top:.2rem">Guarda o teu progresso e a tua ofensiva 🔥 em qualquer dispositivo.</div>'
    + '</div>'
    + '<div id="auth-erro" style="display:none;background:#fdecea;color:#922b21;border:1px solid #f0b8b0;border-radius:10px;padding:.6rem .8rem;font-size:.8rem;margin-bottom:.75rem"></div>'
    + (entrar ? '' :
        '<div style="display:flex;gap:.5rem;margin-bottom:.75rem">'
        + '<button type="button" id="auth-tipo-aluno" onclick="authSetTipo(\'aluno\')" style="flex:1;border:1.5px solid #4a3f7a;background:#f0edf7;color:#4a3f7a;border-radius:12px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.85rem;font-weight:800;cursor:pointer"><i class="ph ph-student"></i> Sou aluno</button>'
        + '<button type="button" id="auth-tipo-prof" onclick="authSetTipo(\'professor\')" style="flex:1;border:1.5px solid var(--border);background:var(--white);color:var(--ink3);border-radius:12px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.85rem;font-weight:700;cursor:pointer"><i class="ph ph-chalkboard-teacher"></i> Sou professor</button>'
        + '</div>')
    + (entrar ? '' : '<input id="auth-nome" type="text" placeholder="O teu primeiro nome" autocomplete="given-name" style="width:100%;box-sizing:border-box;border:1.5px solid var(--border);border-radius:12px;padding:.75rem 1rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin-bottom:.6rem;outline:none">')
    + '<input id="auth-email" type="email" placeholder="O teu email" autocomplete="email" style="width:100%;box-sizing:border-box;border:1.5px solid var(--border);border-radius:12px;padding:.75rem 1rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin-bottom:.6rem;outline:none">'
    + '<input id="auth-pass" type="password" placeholder="Palavra-passe (mín. 6 letras)" autocomplete="' + (entrar ? 'current-password' : 'new-password') + '" style="width:100%;box-sizing:border-box;border:1.5px solid var(--border);border-radius:12px;padding:.75rem 1rem;font-family:Montserrat,sans-serif;font-size:.9rem;margin-bottom:.9rem;outline:none" onkeydown="if(event.key===\'Enter\')authSubmeter(' + (entrar ? 'true' : 'false') + ')">'
    + (entrar ? '' :
        '<label style="display:flex;gap:.55rem;align-items:flex-start;font-size:.8rem;color:var(--ink3);line-height:1.45;margin-bottom:.6rem;cursor:pointer">'
        + '<input type="checkbox" id="auth-termos" style="margin-top:.15rem;flex-shrink:0;width:16px;height:16px;cursor:pointer">'
        + '<span>Li e aceito os <a href="termos.html" target="_blank" style="color:#4a3f7a;font-weight:700">Termos de Utilização</a> e a <a href="privacidade.html" target="_blank" style="color:#4a3f7a;font-weight:700">Política de Privacidade</a>.</span></label>'
        + '<label style="display:flex;gap:.55rem;align-items:flex-start;font-size:.8rem;color:var(--ink3);line-height:1.45;margin-bottom:.9rem;cursor:pointer">'
        + '<input type="checkbox" id="auth-marketing" style="margin-top:.15rem;flex-shrink:0;width:16px;height:16px;cursor:pointer">'
        + '<span>Aceito receber novidades e dicas de estudo por email. <span style="color:var(--ink4)">(opcional)</span></span></label>')
    + '<button id="auth-btn" onclick="authSubmeter(' + (entrar ? 'true' : 'false') + ')" style="width:100%;background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:12px;padding:.8rem;font-family:Montserrat,sans-serif;font-size:.9rem;font-weight:800;cursor:pointer">' + (entrar ? 'Entrar' : 'Criar conta e entrar') + '</button>'
    + '<div style="text-align:center;margin-top:.9rem;font-size:.8rem;color:var(--ink4)">'
    + (entrar ? 'Ainda não tens conta? <a href="#" onclick="authAbrir(\'criar\');return false" style="color:#4a3f7a;font-weight:700">Cria uma</a>'
              : 'Já tens conta? <a href="#" onclick="authAbrir(\'entrar\');return false" style="color:#4a3f7a;font-weight:700">Entra</a>')
    + '</div>'
    + '<div style="text-align:center;margin-top:.5rem"><a href="#" onclick="authFechar();return false" style="font-size:.74rem;color:var(--ink4)">Continuar sem conta</a></div>'
    + '</div>';
  document.body.appendChild(ov);
  var inp = document.getElementById('auth-email');
  if (inp) inp.focus();
}

function authFechar() {
  var ov = document.getElementById('auth-overlay');
  if (ov) ov.remove();
}

/* Tipo escolhido no registo (aluno por defeito). */
var _authTipo = 'aluno';
function authSetTipo(t) {
  _authTipo = t;
  var bA = document.getElementById('auth-tipo-aluno');
  var bP = document.getElementById('auth-tipo-prof');
  if (!bA || !bP) return;
  var on = 'border:1.5px solid #4a3f7a;background:#f0edf7;color:#4a3f7a;border-radius:12px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.85rem;font-weight:800;cursor:pointer;flex:1';
  var off = 'border:1.5px solid var(--border);background:var(--white);color:var(--ink3);border-radius:12px;padding:.6rem;font-family:Montserrat,sans-serif;font-size:.85rem;font-weight:700;cursor:pointer;flex:1';
  bA.style.cssText = t === 'aluno' ? on : off;
  bP.style.cssText = t === 'professor' ? on.replace('#4a3f7a', '#2e7d52').replace('#f0edf7', '#e8f5ee') : off;
}

function _authErro(msg) {
  var el = document.getElementById('auth-erro');
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function authSubmeter(entrar) {
  var email = (document.getElementById('auth-email') || {}).value || '';
  var pass = (document.getElementById('auth-pass') || {}).value || '';
  email = email.trim();
  if (!email || email.indexOf('@') === -1) { _authErro('Escreve um email válido.'); return; }
  if (pass.length < 6) { _authErro('A palavra-passe precisa de pelo menos 6 letras.'); return; }
  // no registo, é obrigatório o nome e aceitar os termos
  var marketing = false, nome = '';
  if (!entrar) {
    nome = ((document.getElementById('auth-nome') || {}).value || '').trim();
    if (nome.length < 2) { _authErro('Escreve o teu primeiro nome.'); return; }
    var cT = document.getElementById('auth-termos');
    if (!cT || !cT.checked) { _authErro('Para criar conta, tens de aceitar os Termos e a Política de Privacidade.'); return; }
    var cM = document.getElementById('auth-marketing');
    marketing = !!(cM && cM.checked);
  }
  var btn = document.getElementById('auth-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'A entrar…'; }

  var promessa = entrar ? Cloud.entrar(email, pass) : Cloud.registar(email, pass, _authTipo, marketing, nome);
  promessa.then(function () {
    authFechar();
    var prof = (typeof Cloud.ehProfessor === 'function' && Cloud.ehProfessor());
    if (typeof eduToast === 'function') eduToast(prof ? 'Bem-vindo, professor! ☁️' : 'Sessão iniciada! O teu progresso está guardado na nuvem ☁️', 'success');
    authRenderBotao();
    if (typeof pmUpdateTopbar === 'function') pmUpdateTopbar();
    // se ficou pendente abrir um curso após login, abre-o agora
    if (window._authAposLogin) { var fn = window._authAposLogin; window._authAposLogin = null; try { fn(); } catch (e) {} }
  }).catch(function (e) {
    var msg = (e && e.message) || 'Não foi possível entrar.';
    if (/Invalid login/i.test(msg)) msg = 'Email ou palavra-passe errados.';
    else if (/already registered|already exists/i.test(msg)) msg = 'Este email já tem conta. Tenta entrar.';
    else if (/rate limit/i.test(msg)) msg = 'Demasiadas tentativas. Espera um pouco.';
    _authErro(msg);
    if (btn) { btn.disabled = false; btn.textContent = entrar ? 'Entrar' : 'Criar conta e entrar'; }
  });
}

function authSair() {
  Cloud.sair().then(function () {
    authRenderBotao();
    if (typeof eduToast === 'function') eduToast('Sessão terminada. O progresso fica guardado neste dispositivo.', 'info');
  });
}

/* ── Muro de login dos CURSOS ──────────────────────────────────────
   Decisão de produto: o portal e o Desafio do Dia são LIVRES (vitrina);
   entrar num curso para praticar exige conta. Envolvemos as funções
   showMatNView/showPortNView: sem sessão, mostram um convite amigável
   (e abrem o curso automaticamente após o login). Se o Cloud estiver
   indisponível (offline), NÃO bloqueia — deixa entrar como antes. */
function _authMuroCursos() {
  if (typeof Cloud === 'undefined') return;
  var nomes = ['showMat5View', 'showMat6View', 'showMat7View', 'showMat8View', 'showMat9View',
               'showMat10View', 'showMat11View', 'showPort7View', 'showPort8View', 'showPort9View'];
  nomes.forEach(function (nome) {
    var orig = window[nome];
    if (typeof orig !== 'function' || orig._comMuro) return;
    var guardada = function () {
      // sem cloud (offline) ou com sessão → segue direto
      if (!Cloud.disponivel() || Cloud.utilizador()) return orig.apply(this, arguments);
      // sem sessão → convite, e abre o curso após login
      window._authAposLogin = function () { orig(); };
      authConvidarParaCurso();
    };
    guardada._comMuro = true;
    window[nome] = guardada;
  });
}

/* Convite (não bloqueante) a criar conta antes de entrar num curso. */
function authConvidarParaCurso() {
  authFechar();
  var ov = document.createElement('div');
  ov.id = 'auth-overlay';
  ov.style.cssText = 'position:fixed;inset:0;background:rgba(20,16,40,.55);z-index:9998;display:flex;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(3px)';
  ov.onclick = function (e) { if (e.target === ov) authFechar(); };
  ov.innerHTML =
    '<div style="background:var(--white);border-radius:20px;max-width:380px;width:100%;padding:1.75rem;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.3)">'
    + '<div style="font-size:2rem">📚</div>'
    + '<div style="font-family:\'Cormorant Garamond\',serif;font-size:1.5rem;font-weight:700;color:var(--ink1);margin-top:.2rem">Entra para estudar</div>'
    + '<div style="font-size:.85rem;color:var(--ink3);line-height:1.6;margin-top:.4rem">Para praticar e guardares o teu progresso, cria uma conta (é rápido e grátis). O <strong>Desafio do Dia</strong> aqui no portal continua livre!</div>'
    + '<button onclick="authAbrir(\'criar\')" style="width:100%;margin-top:1.1rem;background:linear-gradient(135deg,#4a3f7a,#6b5fa0);color:#fff;border:none;border-radius:12px;padding:.8rem;font-family:Montserrat,sans-serif;font-size:.9rem;font-weight:800;cursor:pointer">Criar conta e entrar</button>'
    + '<div style="margin-top:.7rem;font-size:.8rem;color:var(--ink4)">Já tens conta? <a href="#" onclick="authAbrir(\'entrar\');return false" style="color:#4a3f7a;font-weight:700">Entra</a></div>'
    + '<div style="margin-top:.5rem"><a href="#" onclick="authFechar();return false" style="font-size:.74rem;color:var(--ink4)">Agora não</a></div>'
    + '</div>';
  document.body.appendChild(ov);
}

/* Arranque: liga o Cloud, desenha o botão e arma o muro dos cursos.
   O muro é (re)aplicado algumas vezes porque o nav.js (que define os
   showXxxView) carrega depois — garante que as funções já existem. */
document.addEventListener('DOMContentLoaded', function () {
  if (typeof Cloud === 'undefined') return;
  Cloud.init(function () { authRenderBotao(); });
  var tentativas = 0;
  var arma = setInterval(function () {
    _authMuroCursos();
    if (++tentativas >= 10 || (typeof showPort9View === 'function' && showPort9View._comMuro)) clearInterval(arma);
  }, 150);
});
document.addEventListener('cloud:auth', function () { authRenderBotao(); });
