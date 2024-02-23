'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b8bc37ab88b6df79f240c3658d3834c1",
"assets/AssetManifest.bin.json": "61af694a3e28d79c6ce02cc70af54d2b",
"assets/AssetManifest.json": "36440e72cdd84ea76453266cee27109e",
"assets/assets/icons/affirmation_icon.svg": "3c23a3dfde914b02dd0ad05c3988a8b5",
"assets/assets/icons/avatar_logo.svg": "f1120205c3936327fbc19b830dc92e70",
"assets/assets/icons/camera_icon.svg": "9f5e2c82282d327e8c4e40abcd701f26",
"assets/assets/icons/career.png": "86845e9d524cb77ba44f954614ca582e",
"assets/assets/icons/chat_icon.svg": "9649e0dec2266bfec9c22e7b69fdaf57",
"assets/assets/icons/close_icon.svg": "4845dca2299d3284111456828c742002",
"assets/assets/icons/icon_1.svg": "35eabaed146d8ebc25b05f312b3a2cc8",
"assets/assets/icons/icon_2.svg": "5be125faa149908171689c23b2883c20",
"assets/assets/icons/icon_3.svg": "2295831866254c259275e4c908fe4e17",
"assets/assets/icons/icon_4.svg": "00ea3ee8e8dfe407737ec6e434e15450",
"assets/assets/icons/ic_down_arrow.svg": "ace4ddf7d5be1aa90f3bfb881496a57d",
"assets/assets/icons/india_flag.svg": "20a8017b9b34490df892f0aa08da8d47",
"assets/assets/icons/menu_chatbot_icon.svg": "557513b683785b4367022937289079a5",
"assets/assets/icons/menu_lead_management_system_icon.svg": "98422403d9f0c6c5db1b54904ae30f0d",
"assets/assets/icons/menu_overview_icon.svg": "b25e5565315ffe174a5f720f689c10f3",
"assets/assets/icons/mic.svg": "dde2146483b8a169009260fbca6ba607",
"assets/assets/icons/negation_icon.svg": "e474e468e9bcf6366ca30e5f56627d21",
"assets/assets/icons/notify_logo.svg": "73e81224e60cc1824da881343e39b575",
"assets/assets/icons/search_icon.svg": "773ef5b54979311bba107dc0cf086082",
"assets/assets/icons/send.svg": "7f77f70c315619aac8b87efc5e45fb67",
"assets/assets/icons/user_grp.svg": "0a992cb1fb3e1384dbd6909128183c9c",
"assets/assets/images/down_arrow.svg": "7697b86a04e56f707a1651d4dcfb6c64",
"assets/assets/images/google_logo.svg": "0a8dc59ff0b0dd9d544baee0515e2a2a",
"assets/assets/images/login_bottomsheet_foreground.svg": "8e45086231172d33a80c1cbe77c3103c",
"assets/assets/images/mail_logo.svg": "49c59886ffe969e407a9a2d253938e2f",
"assets/assets/images/prog_lang.svg": "9926458bb6c5d928d52a7cf9bad01ec5",
"assets/assets/images/pursue_logo.svg": "1327aa4b20fe317d1e4c1918b8d9f453",
"assets/assets/images/screen_10_slide_arrow.svg": "9864c7bef3cef70d7988f44ccf42980f",
"assets/assets/images/screen_10_top_college.svg": "68847ddc7363cea6d30339c64f43d4b3",
"assets/assets/images/screen_2_person.svg": "e05b149c595a4dd7587e1a6ff42affe3",
"assets/assets/images/screen_3_person.svg": "f227fe6efcee59167ba36b5254e01a6c",
"assets/assets/images/share_card_foreground.svg": "6fa1d611709559b2b5d09a4284fe8ea3",
"assets/assets/images/share_card_people_grp.svg": "d41d65e0f68707087b496bfab35c7f4f",
"assets/assets/images/success_person.svg": "81c617dd9f2aa1924df649b33d14a3d8",
"assets/assets/images/whatsapp.svg": "97d48de40edcc6bfc392332b876b57de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d578951fb9dd6e14865a404d1c68202e",
"assets/NOTICES": "2990da48ff3590b859c9cbf6d6fbb149",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"index.html": "37396644252c821fb018e1b6973e8b98",
"/": "37396644252c821fb018e1b6973e8b98",
"main.dart.js": "8542f0ab3e247be36b1450626de020de",
"pursue_logo.svg": "1327aa4b20fe317d1e4c1918b8d9f453",
"version.json": "4426b66cd92bb9c38e1ff492219245d9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
