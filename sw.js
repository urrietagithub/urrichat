self.addEventListener('fetch', (event) => {
    // Esto permite que Chrome reconozca la web como instalable
    event.respondWith(fetch(event.request));
});