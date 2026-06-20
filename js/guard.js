/* ════════════════════════════════════════════════════════════════
   guard.js — Muro de acesso das páginas de CURSO (matN/portN/fqN)
   ----------------------------------------------------------------
   O portal já tem o "muro dos cursos" (auth-ui.js) que intercepta os
   cliques de navegação. MAS isso não cobre o acesso DIRETO por URL
   (ex.: alguém abre /mat6/ no browser): aí a página carrega sem nunca
   passar pelo portal. Este ficheiro fecha esse buraco.

   Decisão de produto (igual ao muro do portal):
   - Sem sessão  → reencaminha para o portal (index.html).
   - Com sessão  → deixa entrar normalmente.
   - Cloud indisponível (offline / CDN do Supabase em baixo) → NÃO
     bloqueia: deixa usar como antes (a plataforma funciona offline).

   Timing: o Cloud.init é assíncrono (recupera a sessão do Supabase),
   por isso a decisão só é tomada no callback de onReady — caso
   contrário expulsaríamos utilizadores já autenticados. Enquanto não
   se sabe, o conteúdo fica escondido para não haver "flash" do curso.

   Tem de carregar LOGO a seguir ao cloud.js (que define Cloud).
   ════════════════════════════════════════════════════════════════ */
(function () {
  // Sem o Cloud carregado não há como validar — não arrisca esconder a
  // página para sempre; deixa entrar (modo offline / falha de CDN).
  if (typeof Cloud === 'undefined' || !Cloud.init) return;

  // Esconde o conteúdo enquanto verificamos a sessão (evita o flash do
  // curso antes do redirect). Reposto se o acesso for permitido.
  var html = document.documentElement;
  var prevVis = html.style.visibility;
  html.style.visibility = 'hidden';

  function libertar() { html.style.visibility = prevVis || ''; }

  // Caminho do portal a partir de uma página de curso (matN/index.html).
  // Todas vivem um nível abaixo da raiz, por isso '../index.html'.
  function irParaPortal() {
    try { window.location.replace('../index.html'); }
    catch (e) { window.location.href = '../index.html'; }
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
})();
