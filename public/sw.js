self.addEventListener("install", function (event) {
    console.log("Hello world from the Service Worker 🤙");
});

self.addEventListener('push', function (event) {
    console.log(event.data);
});
