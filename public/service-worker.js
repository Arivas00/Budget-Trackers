const CACHE_NAME = "website-cache-v1";
const DATA_CACHE_ = "data-cache-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.js",
    "/manifest.json",
    "/styles.css",
    "/db.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
            .then(self.skipWaiting())
    );
});

