'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "00eaee430440d19ea348482fc5d47b30",
"assets/AssetManifest.bin.json": "f7b7f53dcaa9be4759e1c8f5b7a9d6ca",
"assets/AssetManifest.json": "1a02ac7e03013df7827f3f11af1829ab",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "97c990ab46c2a032ec2ae913cff6f659",
"assets/lib/assets/aboutus/commercialkitchen.jpg": "caef2d73fc044d66b96b52086bf783f1",
"assets/lib/assets/aboutus/experts.jpg": "76038ef8bff3766e437bec6e14ad2e28",
"assets/lib/assets/aboutus/guarantee.jpg": "6e5054f854004fb4b6630856338e5389",
"assets/lib/assets/aboutus/kitchen.jpg": "7bd32c9589ae5852b4ddea00cdbfa20e",
"assets/lib/assets/aboutus/promisetodeliver.jpg": "99a494d33858eeb38c46562a7d3c370e",
"assets/lib/assets/clients/burgerking.jpg": "c669adcbe2bc1a6ffc0bdc2d6a03c98a",
"assets/lib/assets/clients/crowne.jpg": "ca5e80b3bb1d4a26b938424ac7a8ebf0",
"assets/lib/assets/clients/eka.jpg": "4383cadc2874843fd4e18825cf217edd",
"assets/lib/assets/clients/hillcrest.jpg": "163e78ecd781b570a0b89f120f4018fd",
"assets/lib/assets/clients/hilton.jpg": "eb3b6ca75b3d150d985e5237597218eb",
"assets/lib/assets/clients/ibis.jpg": "3299c21cb57532e6e1e532e39f007377",
"assets/lib/assets/clients/java.jpg": "ddb43fdffe71bcd90cd8284278efefef",
"assets/lib/assets/clients/nairobihospital.jpg": "071e33e9a5d543e2b2093147e00cd97c",
"assets/lib/assets/clients/radisson.jpg": "c1186a7e2aed34e9c1ddca0153888dcc",
"assets/lib/assets/clients/strathmore.jpg": "e19701ab806b5eb6b8042b2876378e58",
"assets/lib/assets/icons/90690-shopping.json": "402ec3380515631c80034167d991f6b9",
"assets/lib/assets/icons/logo.png": "c56a19d09fe64df7a59a0656a53b199a",
"assets/lib/assets/products/axialfan16inch.jpg": "cf533b8527879bf492ffa4dcec198e13",
"assets/lib/assets/products/bainemarie.jpg": "ded5a3b318e3031e58ffab5cd29a0649",
"assets/lib/assets/products/barblender.jpg": "8a785add81eb72861df456d5a7482841",
"assets/lib/assets/products/blender.jpg": "c7649e996c0e84a5650b2e396a1faadd",
"assets/lib/assets/products/boilingpan.jpg": "6914da5bad32902a24eb52c8444876bc",
"assets/lib/assets/products/bonesaw.png": "7f825b64e2f8c3a744931a3b627eb3c3",
"assets/lib/assets/products/bottlechiller.jpg": "49bd60e3ae8b1e98e653c20b177b0104",
"assets/lib/assets/products/bottleholder.jpg": "df971e3c2bdaadae1b36bb6a136fe412",
"assets/lib/assets/products/bratpan.jpg": "35e58dcb246e5327cdc38d9ea9434008",
"assets/lib/assets/products/breadprrofer.jpg": "70c84c367c0cb0d9860df9e4b70ea9dc",
"assets/lib/assets/products/breadslicer.png": "270b58b177bbb09f830d9e5e6efa9647",
"assets/lib/assets/products/burgerpress.jpg": "0d3c5334b67d457878400a8dbf3ce228",
"assets/lib/assets/products/cakedisplay.jpg": "1c74ad70a60de43c497a0916349d2107",
"assets/lib/assets/products/cakemixer.jpg": "8d388fa247f2270a2cbc639148b63820",
"assets/lib/assets/products/centrifugalfan.jpg": "21fc9375f2369a4456b899a79a5b3e95",
"assets/lib/assets/products/coldroom.jpg": "b0b7bee407dec594b45320fab92fc056",
"assets/lib/assets/products/conventionoven.jpg": "9c6004ff30de014f31edf19b42870028",
"assets/lib/assets/products/conveyertoaster.jpg": "40a373ffc0e10efbd2a4dc4c874b4246",
"assets/lib/assets/products/deckoven.jpg": "bd25b67c2a897fdd6e51bd8ec2a81992",
"assets/lib/assets/products/doughsheeter.jpg": "b113efde9c1ae37dfc370250af141354",
"assets/lib/assets/products/electricconvectionoven.jpg": "387d0d926598c255d221637a48c02910",
"assets/lib/assets/products/flatworkironers.jpg": "c8d27ff990d70d98e2d6a568f908487f",
"assets/lib/assets/products/floordraingulleys.jpg": "aec187eee96666529fcea08cd88f9a81",
"assets/lib/assets/products/formfinishers.jpg": "5f62114c703c5c5a6fcff28fb6eeeb1b",
"assets/lib/assets/products/fourburnergas.jpg": "677f205e4a4178a28b17a4972ff16946",
"assets/lib/assets/products/freezer.jpg": "54ba510834b82c9acf3da981899b4be5",
"assets/lib/assets/products/freezerroom.jpg": "6eff22bc6aa23ad01a6336474f822774",
"assets/lib/assets/products/gasconvectionoven.jpg": "a919409d0a13d588d61b6c8e0f615785",
"assets/lib/assets/products/ironingboards.jpg": "074a150122e096ca430103c0a3ef62d0",
"assets/lib/assets/products/mixertap.jpg": "69ff000ea84158b2e7856862c318e024",
"assets/lib/assets/products/ovenconvection4trays.jpg": "4fcc250cfb833f646ca063f34e2011e6",
"assets/lib/assets/products/ovenconvection6trays.jpg": "901b6940f792ae54445fb6e23c4484c7",
"assets/lib/assets/products/pizzaoven.jpg": "1fa56b113bbbdf75eba93d3cbfe9b754",
"assets/lib/assets/products/pneumaticpresses.jpg": "a1ce28a14e81177ef4a0b9290c9a4975",
"assets/lib/assets/products/propellerfan.jpg": "759e6efe91e2d39eb4fcffeab32b5252",
"assets/lib/assets/products/rotaoven.jpg": "672dfaf63a0daa9b2d3bd5f5d83fec14",
"assets/lib/assets/products/sink.jpg": "ee62cd3d6545aba34e9dde169751b87d",
"assets/lib/assets/products/spottingtables.jpg": "117f658b07578a1e1b4d9c87cdc26d33",
"assets/lib/assets/products/staircase.png": "7346910711771cd72de0575ba6e2e4f0",
"assets/lib/assets/products/steamironers.jpg": "26d5f9dea207a61a5deb8371908d0b20",
"assets/lib/assets/products/tumbledryers.jpg": "9acec5c3e74ce6ae3e240ec072a304d6",
"assets/lib/assets/products/vendedlaundry.jpg": "e27324ffec620a6872474614aee94489",
"assets/lib/assets/products/washerextractors.jpg": "5b65a57ed8551d04e9a116638f1474ba",
"assets/lib/assets/products/washingmachines.jpg": "d804624732a9f39e1f25cf31db28ded8",
"assets/lib/assets/services/coldrooms.jpg": "9da116081f9c4fe6ed479c76eae9921f",
"assets/lib/assets/services/fabrications.png": "55ca662f5e245c7fbb9587ae06e324a6",
"assets/lib/assets/services/hvac.jpg": "3cbbf89172cbb38c763d2d0beea34310",
"assets/lib/assets/services/kitchensolutions.jpg": "e44c2c65e64760a9d6b9d087d4bed1b0",
"assets/lib/assets/services/laundry.jpg": "12e01a0e2589bb7c7202dbd80a4c7937",
"assets/lib/images/aov.jpg": "faf603d967d3c141be9b97e336057210",
"assets/lib/images/clv.png": "560d71178c76f52ea4b0d1fc6f2c1abd",
"assets/lib/images/cr.png": "361ef26e954215501bdb9680b67aa12e",
"assets/lib/images/ia.jpg": "5163c4e001a555550cb942a5db4e0784",
"assets/lib/images/rp.jpg": "a37045dc987340f3a31782b6b86fff5a",
"assets/lib/images/sbc.jpg": "76b15ce9eb142031007af693fa2a38c1",
"assets/lib/images/tp.jpg": "8988bd9c6cee3c2720ad04c160563f34",
"assets/lib/images/visitors.png": "97805ea70321e4568ad2b659d59ed57a",
"assets/NOTICES": "839bbd24369e0253ed9b8387b3c5214b",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "163aa35364e3d1858201386f1b669f49",
"/": "163aa35364e3d1858201386f1b669f49",
"main.dart.js": "cfc2198b7e32728e4299464fe7f3e4d1",
"manifest.json": "f4102875571996aecdaea19f72e39bf3",
"version.json": "6027d308bdb30a836eb5c7afe365592f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
