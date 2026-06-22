/* ════════════════════════════════════════════════════════════════
   pwa.js — Liga o PWA (manifest + service worker) em QUALQUER página.
   Substitui as ~14 linhas que antes só existiam no index.html, para
   que TODAS as páginas (portal, hubs matN/, exames, legais) fiquem
   instaláveis e com offline básico — de forma coerente e num só sítio.

   Auto-deteta a raiz do site: o portal e as páginas de exames/legais
   estão na raiz; os hubs de curso vivem em subpastas (matN/, portN/,
   fqN/). Assim funciona em qualquer hosting (GitHub Pages num
   subdiretório, domínio próprio, ou local) sem configuração.

   Carregar em todas as páginas (idealmente cedo no <head>, mas funciona
   em qualquer ponto). NÃO depende de mais nenhum script.
   ════════════════════════════════════════════════════════════════ */

(function () {
  // Raiz do site relativa à página atual: '' na raiz, '../' nas subpastas.
  // (Mesma regra usada em nav.js / menu-lateral.js para resolver caminhos.)
  var inSub = /\/(mat\d+|port\d+|fq\d+|em\d+)(\/|$)/.test(window.location.pathname);
  var root = inSub ? '../' : '';

  // 1) Liga o manifest (instalação) — só se ainda não existir um na página.
  if (!document.querySelector('link[rel="manifest"]')) {
    var m = document.createElement('link');
    m.rel = 'manifest';
    m.href = root + 'manifest.json';
    document.head.appendChild(m);
  }

  // 2) apple-touch-icon (ecrã inicial iOS) — só se faltar.
  if (!document.querySelector('link[rel="apple-touch-icon"]')) {
    var a = document.createElement('link');
    a.rel = 'apple-touch-icon';
    a.href = root + 'icons/apple-touch-icon.png';
    document.head.appendChild(a);
  }

  // 3) Regista o service worker. Apontar para a raiz do site faz com que
  //    o scope cubra TODAS as páginas (raiz + subpastas), não só a atual.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(root + 'service-worker.js').catch(function (err) {
        console.warn('Service worker não registado:', err);
      });
    });
  }
})();
