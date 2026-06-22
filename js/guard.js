/* ════════════════════════════════════════════════════════════════
   guard.js — Muro de acesso das páginas protegidas (cursos + exames)
   ----------------------------------------------------------------
   O portal já tem o "muro dos cursos" (auth-ui.js) que intercepta os
   cliques de navegação. MAS isso não cobre o acesso DIRETO por URL
   (ex.: alguém abre /mat6/ ou /exames.html no browser): aí a página
   carrega sem nunca passar pelo portal. Este ficheiro fecha esse buraco.

   Decisão de produto (igual ao muro do portal):
   - Sem sessão  → reencaminha para o portal.
   - Com sessão  → deixa entrar normalmente.
   - Cloud indisponível (offline / CDN do Supabase em baixo) → NÃO
     bloqueia: deixa usar como antes (a plataforma funciona offline).

   Timing: o Cloud.init é assíncrono (recupera a sessão do Supabase),
   por isso a decisão só é tomada no callback de onReady — caso
   contrário expulsaríamos utilizadores já autenticados. Enquanto não
   se sabe, o conteúdo fica escondido para não haver "flash" do curso.

   Path-aware: funciona tanto na raiz (exames.html → 'index.html')
   como em subpasta (matN/index.html, mat7/capN.html → '../index.html').

   bfcache: ao voltar com o botão "atrás", o browser pode mostrar a
   página a partir da cache SEM re-executar o script. O evento 'pageshow'
   com persisted=true apanha esse caso e revalida.

   Tem de carregar LOGO a seguir ao cloud.js (que define Cloud).
   ════════════════════════════════════════════════════════════════ */
(function () {
  // Sem o Cloud carregado não há como validar — não arrisca esconder a
  // página para sempre; deixa entrar (modo offline / falha de CDN).
  if (typeof Cloud === 'undefined' || !Cloud.init) return;

  // Esconde o conteúdo enquanto verificamos a sessão (evita o flash da
  // página antes do redirect). Reposto se o acesso for permitido.
  var html = document.documentElement;
  var prevVis = html.style.visibility;
  html.style.visibility = 'hidden';

  function libertar() { html.style.visibility = prevVis || ''; }

  // Caminho do portal relativo à página atual. Páginas em subpasta
  // (qualquer /algo/ no caminho com pelo menos um nível) sobem com '../';
  // páginas na raiz usam 'index.html'. Detetamos por /matN/ /portN/ /fqN/.
  function caminhoPortal() {
    // Fonte única em shared.js (eduRootPath); fallback à regex se faltar.
    if (typeof eduRootPath === 'function') return eduRootPath() + 'index.html';
    var p = window.location.pathname || '';
    return /\/(mat\d+|port\d+|fq\d+|em\d+)(\/|$)/.test(p) ? '../index.html' : 'index.html';
  }

  function irParaPortal() {
    var destino = caminhoPortal();
    // replace() para o "atrás" não voltar à página protegida.
    try { window.location.replace(destino); }
    catch (e) { window.location.href = destino; }
  }

  function decidir() {
    // Cloud não disponível (offline / Supabase em baixo): não bloqueia.
    if (!Cloud.disponivel()) { libertar(); return; }
    // Com sessão → segue; sem sessão → fora.
    if (Cloud.utilizador()) { libertar(); }
    else { irParaPortal(); }
  }

  function arrancar() { Cloud.init(decidir); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', arrancar);
  } else {
    arrancar();
  }

  // bfcache: página restaurada da cache (botão atrás/frente) não re-corre
  // o script de raiz; revalida aqui. Esconde primeiro, decide a seguir.
  window.addEventListener('pageshow', function (ev) {
    if (!ev.persisted) return;          // carregamento normal já tratado acima
    html.style.visibility = 'hidden';
    // a sessão já foi recuperada antes (init idempotente devolve logo);
    // mesmo assim passamos pelo init para garantir o estado mais recente.
    Cloud.init(decidir);
  });
})();
