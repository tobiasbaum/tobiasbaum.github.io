self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Wenn die Anfrage erfolgreich war, cachen wir die Antwort
        return caches.open('my-cache-v1').then((cache) => {
          console.log('request successful, caching: ' + event.request.url);
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        // Falls die Anfrage fehlschlägt, liefern wir sie aus dem Cache
        console.log('request failed, trying cache for: ' + event.request.url);
        return caches.match(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['my-cache-v1'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});