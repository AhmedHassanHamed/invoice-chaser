const V = "ic-v5",
  FILES = [
    "./",
    "index.html",
    "style.css",
    "app.js",
    "qr.js",
    "icon.svg",
    "manifest.webmanifest",
  ];
self.addEventListener("install", (e) =>
  e.waitUntil(
    caches
      .open(V)
      .then((c) => Promise.allSettled(FILES.map((f) => c.add(f))))
      .then(() => self.skipWaiting()),
  ),
);
self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((k) =>
        Promise.all(k.filter((n) => n !== V).map((n) => caches.delete(n))),
      )
      .then(() => self.clients.claim()),
  ),
);
self.addEventListener("fetch", (e) => {
  if (
    e.request.method !== "GET" ||
    new URL(e.request.url).origin !== location.origin
  )
    return;
  e.respondWith(
    fetch(e.request)
      .then((r) => {
        const c = r.clone();
        caches.open(V).then((x) => x.put(e.request, c));
        return r;
      })
      .catch(() => caches.match(e.request)),
  );
});
