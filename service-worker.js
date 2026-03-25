const CACHE_NAME = "quickkaam-v2";

const urlsToCache = [
  "/QuickKaam-app/",
  "/QuickKaam-app/index.html",
  "/QuickKaam-app/manifest.json",
  "/QuickKaam-app/icon-192.jpg",
  "/QuickKaam-app/icon-512.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );
});
