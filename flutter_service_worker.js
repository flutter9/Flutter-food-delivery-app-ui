'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/images/three.jpg": "6deb6c5899a1b141d17fb97ac420f1b3",
"/assets/assets/images/starter-image.jpg": "4b2e6bc2b06e967c2a46f3c352f2092b",
"/assets/assets/images/two.jpg": "4ddd49c90ced89af0493d35e252cdc12",
"/assets/assets/images/one.jpg": "58311d73e6605821d0cd314be1840cbe",
"/assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"/assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"/assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"/assets/FontManifest.json": "613bbce4dcf6a07c1f610c927f715078",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "00afecf57688aa420cd63571784e1394",
"/assets/LICENSE": "e2ed5d66bd4acc287a932aa286ea2c64",
"/main.dart.js": "2ce8c0f90903a1553e1c323ca21b1b81"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
