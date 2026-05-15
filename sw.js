const CACHE_NAME = 'aracil-v1';
const ASSETS = [
  '/index.html',
  '/agenda.html',
  '/agenda.css',
  '/styles.css',
  '/manifest.json',
  '/imgs/favicon/favicon.png',
  '/imgs/logotipo-aracil-Transparente.png'
];

// Instalación: guarda los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activación: limpia cachés antiguas
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: sirve desde caché si no hay red, si hay red actualiza
self.addEventListener('fetch', e => {
  // Las llamadas a Supabase siempre van a la red
  if (e.request.url.includes('supabase.co')) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
