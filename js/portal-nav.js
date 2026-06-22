/* ════════════════════════════════════════════════════════════════
   portal-nav.js — Navegação por SECÇÕES do portal (com sessão)
   A barra lateral troca o que está no centro, como uma app:
     • inicio → painel de boas-vindas (#portal-saudacao) + Desafio
     • cursos → montra de cursos (#sec-cursos: pesquisa+filtros+grid)
     • apoio  → Apoio ao Estudo (#portal-turmas movido para #sec-apoio)
   Só atua COM sessão. Sem sessão, a porta de entrada manda (portal.js).
   ════════════════════════════════════════════════════════════════ */

var _portalSec = 'inicio';

function _pnTemSessao() {
  return typeof Cloud !== 'undefined' && Cloud.disponivel && Cloud.disponivel() && Cloud.utilizador && Cloud.utilizador();
}

/* Mostra a secção pedida no centro e esconde as outras. */
function portalIrPara(sec) {
  if (!_pnTemSessao()) return;            // sem sessão: navegação desligada
  sec = sec || 'inicio';
  _portalSec = sec;

  var inicio = document.getElementById('portal-saudacao');
  var cursos = document.getElementById('sec-cursos');
  var apoio = document.getElementById('sec-apoio');

  if (inicio) inicio.style.display = (sec === 'inicio') ? '' : 'none';
  if (cursos) cursos.style.display = (sec === 'cursos') ? '' : 'none';
  if (apoio) apoio.style.display = (sec === 'apoio') ? '' : 'none';

  if (sec === 'apoio') {
    // traz o painel do Apoio (#portal-turmas) para o centro e desenha-o
    var turmas = document.getElementById('portal-turmas');
    if (turmas && apoio && turmas.parentNode !== apoio) {
      turmas.style.display = '';
      turmas.style.maxWidth = 'none';
      turmas.style.margin = '0';
      apoio.appendChild(turmas);
    }
    if (typeof turmasRender === 'function') turmasRender();
  }
  if (sec === 'inicio' && typeof painelInicioRender === 'function') painelInicioRender();

  if (typeof menuLateralMarcar === 'function') menuLateralMarcar(sec);
  try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
}

/* Ao INICIAR sessão (transição), começa no Início — mas só uma vez por
   sessão, para não saltar de volta ao Início enquanto o utilizador
   navega. Ao sair, repõe o estado para a próxima sessão. */
var _pnArrancou = false;
function _pnAoMudarSessao() {
  if (_pnTemSessao()) {
    if (!_pnArrancou) {
      _pnArrancou = true;
      // Respeita #inicio | #cursos | #apoio (ex: vir de um hub de curso pela gaveta).
      var h = (window.location.hash || '').replace('#', '');
      portalIrPara(h === 'cursos' || h === 'apoio' ? h : 'inicio');
    }
  } else {
    _pnArrancou = false;
    var apoio = document.getElementById('sec-apoio');
    if (apoio) apoio.style.display = 'none';
  }
}

document.addEventListener('cloud:auth', function () { setTimeout(_pnAoMudarSessao, 60); });
document.addEventListener('DOMContentLoaded', function () { setTimeout(_pnAoMudarSessao, 750); });
