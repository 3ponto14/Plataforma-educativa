/*! 3ponto14 — Plataforma educativa. © 2026 3ponto14. Todos os direitos reservados.
 * Código e conteúdo protegidos por direitos de autor. Proibida a cópia,
 * reprodução ou clonagem sem autorização escrita. https://plataformaeducativa.pages.dev */

/* ── Multi-page navigation ────────────────────────────────────────
   Canonical navigation functions for the multi-page app.
   nav.js is loaded last on every page so these definitions win
   over any same-named functions in page-specific scripts.
─────────────────────────────────────────────────────────────────── */

/* ── Path helpers ─────────────────────────────────────────────────
   Detect whether we are inside the mat7/ subdirectory so that all
   navigation functions resolve paths correctly regardless of the
   current page location.
─────────────────────────────────────────────────────────────────── */
// Deteção genérica: estamos dentro de um diretório de curso (matN/ portN/ fqN/)?
// Fonte única em shared.js (eduIsCourseHub); fallback à regex se faltar.
var _inSub = (typeof eduIsCourseHub === 'function') ? eduIsCourseHub()
  : /\/(mat\d+|port\d+|fq\d+|em\d+)(\/|$)/.test(window.location.pathname);
function _inMat(n) { return window.location.pathname.indexOf('/mat' + n + '/') !== -1 || window.location.pathname.endsWith('/mat' + n); }
function _inPort(n) { return window.location.pathname.indexOf('/port' + n + '/') !== -1 || window.location.pathname.endsWith('/port' + n); }
function _inEm(n) { return window.location.pathname.indexOf('/em' + n + '/') !== -1 || window.location.pathname.endsWith('/em' + n); }
var _inMat7 = _inMat(7), _inMat8 = _inMat(8), _inMat9 = _inMat(9);
var _rootPath = _inSub ? '../' : '';
// Caminho para cada curso, relativo à página atual (raiz ou dentro de matN/).
function _coursePath(name) { return _inSub ? '../' + name + '/' : name + '/'; }
var _mat1Path = _inMat(1) ? '' : _coursePath('mat1');
var _mat2Path = _inMat(2) ? '' : _coursePath('mat2');
var _mat3Path = _inMat(3) ? '' : _coursePath('mat3');
var _mat4Path = _inMat(4) ? '' : _coursePath('mat4');
var _mat5Path = _inMat(5) ? '' : _coursePath('mat5');
var _mat6Path = _inMat(6) ? '' : _coursePath('mat6');
var _mat7Path = _inMat7 ? '' : _coursePath('mat7');
var _mat8Path = _inMat8 ? '' : _coursePath('mat8');
var _mat9Path = _inMat9 ? '' : _coursePath('mat9');
var _mat10Path = _inMat(10) ? '' : _coursePath('mat10');
var _mat11Path = _inMat(11) ? '' : _coursePath('mat11');
var _mat12Path = _inMat(12) ? '' : _coursePath('mat12');
var _port9Path = _inPort(9) ? '' : _coursePath('port9');
var _port1Path = _inPort(1) ? '' : _coursePath('port1');
var _em1Path = _inEm(1) ? '' : _coursePath('em1');
var _port2Path = _inPort(2) ? '' : _coursePath('port2');
var _em2Path = _inEm(2) ? '' : _coursePath('em2');
var _port3Path = _inPort(3) ? '' : _coursePath('port3');
var _em3Path = _inEm(3) ? '' : _coursePath('em3');
var _port4Path = _inPort(4) ? '' : _coursePath('port4');
var _em4Path = _inEm(4) ? '' : _coursePath('em4');
var _port7Path = _inPort(7) ? '' : _coursePath('port7');
var _port8Path = _inPort(8) ? '' : _coursePath('port8');
var _inFq7 = window.location.pathname.indexOf('/fq7/') !== -1 || window.location.pathname.endsWith('/fq7');
var _fq7Path = _inFq7 ? '' : _coursePath('fq7');
var _inFq8 = window.location.pathname.indexOf('/fq8/') !== -1 || window.location.pathname.endsWith('/fq8');
var _fq8Path = _inFq8 ? '' : _coursePath('fq8');
var _inFq9 = window.location.pathname.indexOf('/fq9/') !== -1 || window.location.pathname.endsWith('/fq9');
var _fq9Path = _inFq9 ? '' : _coursePath('fq9');

/* ── Portal (index.html at root) ── */
function showPortalView() { window.location.href = _rootPath + 'index.html'; }
// Backward-compat aliases (all do the same thing)
var showPortalView2    = showPortalView;
var showPortalFromMat7 = showPortalView;

/* ── Mat7 hub ── */
function showMat7View() { window.location.href = _mat7Path + 'index.html'; }

/* ── Mat8 hub (único, sem páginas por capítulo) ── */
function showMat8View()  { window.location.href = _mat8Path + 'index.html'; }
function showPortalFromMat8() { showPortalView(); }

/* ── Mat9 hub (único, sem páginas por capítulo) ── */
function showMat9View()  { window.location.href = _mat9Path + 'index.html'; }
function showPortalFromMat9() { showPortalView(); }

/* ── Port9 hub · Português 9.º (mesmo modelo de hub) ── */
function showPort9View() { window.location.href = _port9Path + 'index.html'; }
function showPortalFromPort9() { showPortalView(); }
function showPort1View() { window.location.href = _port1Path + 'index.html'; }
function showPortalFromPort1() { showPortalView(); }
function showEm1View() { window.location.href = _em1Path + 'index.html'; }
function showPortalFromEm1() { showPortalView(); }
function showPort2View() { window.location.href = _port2Path + 'index.html'; }
function showPortalFromPort2() { showPortalView(); }
function showEm2View() { window.location.href = _em2Path + 'index.html'; }
function showPortalFromEm2() { showPortalView(); }
function showPort3View() { window.location.href = _port3Path + 'index.html'; }
function showPortalFromPort3() { showPortalView(); }
function showEm3View() { window.location.href = _em3Path + 'index.html'; }
function showPortalFromEm3() { showPortalView(); }
function showPort4View() { window.location.href = _port4Path + 'index.html'; }
function showPortalFromPort4() { showPortalView(); }
function showEm4View() { window.location.href = _em4Path + 'index.html'; }
function showPortalFromEm4() { showPortalView(); }
function showPort7View() { window.location.href = _port7Path + 'index.html'; }
function showPortalFromPort7() { showPortalView(); }
function showPort8View() { window.location.href = _port8Path + 'index.html'; }
function showPortalFromPort8() { showPortalView(); }

/* ── FQ7 hub · Físico-Química 7.º (mesmo modelo de hub) ── */
function showFq7View() { window.location.href = _fq7Path + 'index.html'; }
function showPortalFromFq7() { showPortalView(); }

/* ── FQ9 hub · Físico-Química 9.º ── */
function showFq8View() { window.location.href = _fq8Path + 'index.html'; }
function showPortalFromFq8() { showPortalView(); }
function showFq9View() { window.location.href = _fq9Path + 'index.html'; }
function showPortalFromFq9() { showPortalView(); }

/* ── Mat5 e Mat6 hubs (2.º ciclo) ── */
function showMat1View()  { window.location.href = _mat1Path + 'index.html'; }
function showPortalFromMat1() { showPortalView(); }
function showMat2View()  { window.location.href = _mat2Path + 'index.html'; }
function showPortalFromMat2() { showPortalView(); }
function showMat3View()  { window.location.href = _mat3Path + 'index.html'; }
function showPortalFromMat3() { showPortalView(); }
function showMat4View()  { window.location.href = _mat4Path + 'index.html'; }
function showPortalFromMat4() { showPortalView(); }
function showMat5View()  { window.location.href = _mat5Path + 'index.html'; }
function showPortalFromMat5() { showPortalView(); }
function showMat6View()  { window.location.href = _mat6Path + 'index.html'; }
function showPortalFromMat6() { showPortalView(); }

/* ── Mat10 e Mat11 hubs (secundário) ── */
function showMat10View() { window.location.href = _mat10Path + 'index.html'; }
function showPortalFromMat10() { showPortalView(); }
function showMat11View() { window.location.href = _mat11Path + 'index.html'; }
function showPortalFromMat11() { showPortalView(); }
function showMat12View() { window.location.href = _mat12Path + 'index.html'; }
function showPortalFromMat12() { showPortalView(); }

/* ── Chapter pages ── */
function showMathView()  { window.location.href = _mat7Path + 'cap1.html'; }
function showMathView2() { window.location.href = _mat7Path + 'cap2.html'; }
function showMathView3() { window.location.href = _mat7Path + 'cap3.html'; }
function showMathView4() { window.location.href = _mat7Path + 'cap4.html'; }
function showMathView5() { window.location.href = _mat7Path + 'cap5.html'; }
function showMathView6() { window.location.href = _mat7Path + 'cap6.html'; }
function showMathView7() { window.location.href = _mat7Path + 'cap7.html'; }
function showMathView8() { window.location.href = _mat7Path + 'cap8.html'; }

function goToChapter(n) {
  window.location.href = _mat7Path + 'cap' + n + '.html';
}

function handleSubj(e, action) {
  var map = {
    math7: _mat7Path + 'index.html',
    math:  _mat7Path + 'cap1.html',
    math2: _mat7Path + 'cap2.html',
    math3: _mat7Path + 'cap3.html',
    math4: _mat7Path + 'cap4.html',
    math5: _mat7Path + 'cap5.html',
    math6: _mat7Path + 'cap6.html',
    math8: _mat7Path + 'cap8.html'
  };
  if (map[action]) window.location.href = map[action];
}

// showGeradorFichas go to mat7 fichas tab
function showGeradorFichas(capNum) {
  try { localStorage.setItem('mat7OpenTab', 'fichas'); } catch(e) {}
  try { if (capNum) localStorage.setItem('mat7GeradorCap', capNum); } catch(e) {}
  window.location.href = _mat7Path + 'index.html';
}

// On mat7 hub page: restore requested tab on load (localStorage OR URL hash)
var _isMat7Hub = window.location.pathname.endsWith('/mat7/index.html') ||
                 window.location.pathname.endsWith('/mat7/') ||
                 window.location.pathname === '/';
if (_isMat7Hub) {
  document.addEventListener('DOMContentLoaded', function() {
    // 1. URL hash takes priority: mat7/index.html#fichas or #resumo etc.
    var hash = window.location.hash.replace('#', '');
    var validTabs = ['fichas','resumo','exercicios','jogos','quiz','flashcards','exame','progresso'];
    if (hash && validTabs.indexOf(hash) !== -1) {
      var btn = document.querySelector('.mat7-hub-tab[data-tab="' + hash + '"]');
      if (btn && typeof mat7SwitchTab === 'function') mat7SwitchTab(hash, btn);
      return;
    }
    // 2. Fallback: localStorage (used by showGeradorFichas)
    try {
      var tab = localStorage.getItem('mat7OpenTab');
      if (tab) {
        localStorage.removeItem('mat7OpenTab');
        var btn2 = document.querySelector('.mat7-hub-tab[data-tab="' + tab + '"]');
        if (btn2 && typeof mat7SwitchTab === 'function') mat7SwitchTab(tab, btn2);
      }
    } catch(e) {}
  });
}

// Deep link helper usado em comunicações aos alunos/professores
// Exemplos: navToTab('fichas'), navToTab('exercicios')
function navToTab(tab) {
  if (_isMat7Hub) {
    var btn = document.querySelector('.mat7-hub-tab[data-tab="' + tab + '"]');
    if (btn && typeof mat7SwitchTab === 'function') mat7SwitchTab(tab, btn);
    window.location.hash = tab;
  } else {
    try { localStorage.setItem('mat7OpenTab', tab); } catch(e) {}
    window.location.href = _mat7Path + 'index.html#' + tab;
  }
}

// Deep link para páginas de capítulo: cap2.html#exercicios → vai para exercícios
// Suporta secções: temas, teoria, questoes/exercicios, minitestes, teste, gerador, jogos, quiz, flashcards, exame, progresso, professor
(function() {
  // Só actua em páginas de capítulo (capN.html)
  var capMatch = window.location.pathname.match(/cap(\d+)\.html/);
  if (!capMatch) return;
  var n = capMatch[1];

  document.addEventListener('DOMContentLoaded', function() {
    var hash = window.location.hash.replace('#','').toLowerCase();
    if (!hash) return;

    // Normalizar alias comuns
    var aliasMap = {
      'exercicios': 'questoes' + n,
      'exercícios': 'questoes' + n,
      'questoes':   'questoes' + n,
      'teoria':     'teoria' + n,
      'temas':      'temas' + n,
      'minitestes': 'minitestes' + n,
      'teste':      'teste' + n,
      'exame':      'exame' + n,
      'gerador':    'gerador' + n,
      'jogos':      'jogos' + n,
      'quiz':       'quiz-game' + n,
      'flashcards': 'flashcards' + n,
      'progresso':  'progresso' + n,
      'professor':  'professor'  // abre a secção teacher-strip
    };

    var secId = aliasMap[hash] || hash;

    if (secId === 'professor') {
      // Abrir teacher-strip automaticamente
      var strip = document.querySelector('.teacher-strip');
      if (strip && !strip.classList.contains('open')) {
        strip.classList.add('open');
        strip.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // Tentar navegar para a secção via showSectionN
    var fn = window['showSection' + n] || window['showSection'];
    if (typeof fn === 'function') {
      // Encontrar o botão correspondente
      var btn = document.querySelector('[onclick*="' + secId + '"]');
      fn(secId, btn || null);
      // Scroll suave para o topo do conteúdo
      setTimeout(function() {
        var el = document.getElementById(secId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  });
})();