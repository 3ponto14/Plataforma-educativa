/* 3ponto14 — Service Worker
 * Torna o site instalável (PWA) e permite uso offline básico.
 * Estratégia: network-first com fallback para cache.
 *   - Com internet: vai sempre buscar a versão mais recente (e guarda em cache).
 *   - Sem internet: serve a última versão guardada em cache.
 * Para forçar atualização do cache, mudar CACHE_VERSION.
 */
var CACHE_VERSION = 'v20260621b';
var CACHE_NAME = 'ep3ponto14-' + CACHE_VERSION;

// Páginas/ficheiros base a tentar pré-cachear na instalação (best-effort).
var PRECACHE = [
  './',
  './index.html',
  './css/styles.css',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './manifest.json'
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // addAll falha tudo se um pedido falhar; fazemos um a um, tolerante a erros.
      return Promise.all(
        PRECACHE.map(function (url) {
          return cache.add(url).catch(function () { return null; });
        })
      );
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.map(function (key) {
          if (key !== CACHE_NAME) { return caches.delete(key); }
          return null;
        })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;

  // Só tratamos GET de navegação/recursos do próprio site.
  if (req.method !== 'GET') { return; }

  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;

  // Pedidos externos (CDNs de fontes/ícones): tenta rede, cai para cache se houver.
  if (!sameOrigin) {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
        return res;
      }).catch(function () {
        return caches.match(req);
      })
    );
    return;
  }

  // Mesma origem: network-first, fallback para cache, fallback para index.
  event.respondWith(
    fetch(req).then(function (res) {
      var copy = res.clone();
      caches.open(CACHE_NAME).then(function (c) { c.put(req, copy); });
      return res;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        if (cached) { return cached; }
        // Para navegações sem cache, devolve a página inicial.
        if (req.mode === 'navigate') { return caches.match('./index.html'); }
        return new Response('', { status: 504, statusText: 'Offline' });
      });
    })
  );
});
