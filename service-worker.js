// public/service-worker.js
self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    // Perform install steps
});
self.addEventListener("push", event => {
    const data = event.data.json();
    console.log(data);
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: data.icon || "/logo.png"
    });
});
