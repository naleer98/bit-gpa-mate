"use strict";

const CACHE_NAME = "bit-gpa-mate-v5-premium-ui";
const BASE_URL = new URL("./", self.location.href);
const APP_FILES = [
  "",
  "index.html",
  "styles.css?v=5.0.0",
  "app.js?v=5.0.0",
  "manifest.json",
  "assets/uom-crest.png",
  "assets/bit-uom-logo.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-maskable-512.png",
  "assets/icons/apple-touch-icon.png"
].map((path) => new URL(path, BASE_URL).href);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

async function networkFirst(request, fallbackUrl) {
  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response && response.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return (await caches.match(request, { ignoreSearch: false }))
      || (fallbackUrl ? await caches.match(fallbackUrl, { ignoreSearch: true }) : undefined)
      || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, new URL("index.html", BASE_URL).href));
    return;
  }

  if (["style", "script"].includes(request.destination)) {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(
    caches.match(request, { ignoreSearch: false }).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === "opaque") return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
