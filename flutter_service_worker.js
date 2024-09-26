'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5edff7dbc28954f4c40e5bfc503e2317",
"assets/AssetManifest.bin.json": "feaf47d0e9e0b1d4db22067a009d1e22",
"assets/AssetManifest.json": "d9f43a7e887fff1afceadc3eb0ed9520",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/fonts/MaterialIcons-Regular.otf": "33a289cda26f5fa98b3fd6d10d2ceb9c",
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
"assets/lib/assets/products/axialfan24inch.jpg": "c4a51d4be81d5cdb1ec4078a337283ce",
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
"assets/lib/assets/products/cerealdispensers.jpg": "b55223eb650e1a11c1dd49bb21f81c01",
"assets/lib/assets/products/chickenrotisserie.jpg": "b50b71ff99d6bedb97f420faca6a8bb4",
"assets/lib/assets/products/chimpsdump.jpg": "90615dd8eb171c067507e3b7df7faaa5",
"assets/lib/assets/products/chineseburner.jpg": "aed9a024e00cbd28a12c381876bcbaaa",
"assets/lib/assets/products/chipsflyer.jpg": "f2b7f3f746ccb9d4a723736088034ce5",
"assets/lib/assets/products/coffeegrinder.png": "06a441ca48300c9d240da725c5673cc7",
"assets/lib/assets/products/coffeemachine.png": "f4c371174f90de72cba6f932da9ac7e8",
"assets/lib/assets/products/coldroom.jpg": "b0b7bee407dec594b45320fab92fc056",
"assets/lib/assets/products/commercialjuicer.jpg": "232d9fb31a941d36c35e178522abf72b",
"assets/lib/assets/products/commercialmicrowave.jpg": "87e24903ed66d4408f104013ace75b47",
"assets/lib/assets/products/commercialtitlingpan.jpg": "4e88f9de974def65bdfa321b29bab4d0",
"assets/lib/assets/products/condimentscontainer.jpg": "88119fb1beb2477290397f5ac7c0719b",
"assets/lib/assets/products/contactgrill.jpg": "1ba3c24576733463ea27add9fd5ec629",
"assets/lib/assets/products/conventionoven.jpg": "9c6004ff30de014f31edf19b42870028",
"assets/lib/assets/products/conveyertoaster.jpg": "40a373ffc0e10efbd2a4dc4c874b4246",
"assets/lib/assets/products/deckoven.jpg": "bd25b67c2a897fdd6e51bd8ec2a81992",
"assets/lib/assets/products/directinjectionvessel150litres.jpg": "9d11b8d90392967b32293efe73205ce1",
"assets/lib/assets/products/directinjectionvessel200litres.jpg": "dfc37009c596c2bf4aeaade1dbb61a19",
"assets/lib/assets/products/doublejacketed200litres.jpg": "dfc37009c596c2bf4aeaade1dbb61a19",
"assets/lib/assets/products/doublejacketed300litres.jpg": "dfc37009c596c2bf4aeaade1dbb61a19",
"assets/lib/assets/products/doublejacketed400litres.jpg": "dfc37009c596c2bf4aeaade1dbb61a19",
"assets/lib/assets/products/doughsheeter.jpg": "b113efde9c1ae37dfc370250af141354",
"assets/lib/assets/products/electricconvectionoven.jpg": "387d0d926598c255d221637a48c02910",
"assets/lib/assets/products/electricwarmers.jpg": "24d026843072377d5714960860973ac2",
"assets/lib/assets/products/flatworkironers.jpg": "c8d27ff990d70d98e2d6a568f908487f",
"assets/lib/assets/products/floordraingulleys.jpg": "aec187eee96666529fcea08cd88f9a81",
"assets/lib/assets/products/foodproccessor.png": "c12ef8ff33622ef3c94a0e6f90a9036a",
"assets/lib/assets/products/formfinishers.jpg": "5f62114c703c5c5a6fcff28fb6eeeb1b",
"assets/lib/assets/products/fourburnergas.jpg": "677f205e4a4178a28b17a4972ff16946",
"assets/lib/assets/products/freestandingburner.jpg": "adacf46a71c3634962bd58347917ea4a",
"assets/lib/assets/products/freezer.jpg": "54ba510834b82c9acf3da981899b4be5",
"assets/lib/assets/products/freezerroom.jpg": "6eff22bc6aa23ad01a6336474f822774",
"assets/lib/assets/products/fruitvegetablerack.jpg": "26a1bef36d92bd4b60ddae1eb78fc3b4",
"assets/lib/assets/products/gasconvectionoven.jpg": "a919409d0a13d588d61b6c8e0f615785",
"assets/lib/assets/products/glasswasher.jpg": "a59c8606441b8a4add93884b9cc7058c",
"assets/lib/assets/products/gncontainers.jpg": "88e5e26ea5bf26350ce806a091b8752b",
"assets/lib/assets/products/hood.jpg": "3f0626a1e01c6909320bc34ac24779a2",
"assets/lib/assets/products/hotbanquettrolley.jpg": "31448bd80c125ba22304dd08bfbb4d96",
"assets/lib/assets/products/hotpass.jpg": "3b2e92cc3178ab69cc50f1ae484742bd",
"assets/lib/assets/products/hotplate.jpg": "38fefd8cf27f3da8e1b3fb2f897d9037",
"assets/lib/assets/products/icecrusher.jpg": "396348a90ffe15494168074afcef8d4e",
"assets/lib/assets/products/icemaker.jpg": "2afd7b64fc57b7020e3a9ef3ce8f3261",
"assets/lib/assets/products/inductionhotplate.jpg": "06ee69290845d5e392afef7aa43b4da6",
"assets/lib/assets/products/ironingboards.jpg": "074a150122e096ca430103c0a3ef62d0",
"assets/lib/assets/products/islandkitchen.jpg": "56ad7c8a8c7f66f8d049cb61d2e051b5",
"assets/lib/assets/products/juicedispensers.jpg": "630e083e4b076c96dd04461626766676",
"assets/lib/assets/products/knifesterlizer.jpg": "2cc87da7fc0a566ce56c2726ee23e1c3",
"assets/lib/assets/products/liftupsalamander.jpg": "2af84ef6d1659f30eef5b3f56559720a",
"assets/lib/assets/products/meatmincer.png": "e4b4b0caeaca540dafdf715f0fe597f5",
"assets/lib/assets/products/meatslicer.jpg": "3a5bcf8a4bf642f7852accef1e8d7082",
"assets/lib/assets/products/meattenderizer.jpg": "f871d37a9e37d9eed25ba8e5ed37c88c",
"assets/lib/assets/products/mixertap.jpg": "69ff000ea84158b2e7856862c318e024",
"assets/lib/assets/products/mobiletandooroven.jpg": "524e476c675a7a096722b32e35fd6bd7",
"assets/lib/assets/products/outdoorgrill.jpg": "09da441edcc4caa628c3444d93be7a69",
"assets/lib/assets/products/ovenconvection4trays.jpg": "4fcc250cfb833f646ca063f34e2011e6",
"assets/lib/assets/products/ovenconvection6trays.jpg": "901b6940f792ae54445fb6e23c4484c7",
"assets/lib/assets/products/pastamaker.jpg": "21ab32fa86bf20ab260c0f236b6e5a73",
"assets/lib/assets/products/pizzaoven.jpg": "1fa56b113bbbdf75eba93d3cbfe9b754",
"assets/lib/assets/products/platewarmer.jpg": "ab890aefd75ee24043fe08074af8a78d",
"assets/lib/assets/products/pneumaticpresses.jpg": "a1ce28a14e81177ef4a0b9290c9a4975",
"assets/lib/assets/products/potatochipper.png": "9f9050e6e5906d36db0ec38f6456d710",
"assets/lib/assets/products/potatopiller.jpg": "5bf0e5819be4963e140b104c0f99e9df",
"assets/lib/assets/products/propellerfan.jpg": "759e6efe91e2d39eb4fcffeab32b5252",
"assets/lib/assets/products/racks.jpg": "7f66e7b26bda916708a6a82bb03ff289",
"assets/lib/assets/products/rationalicombiclassic611electrico.jpg": "6e4d1231e6450b7bf347086ec608be53",
"assets/lib/assets/products/rationalicombiclassic621electrico.jpg": "e3e5167d3b7f887002e3032c938468e7",
"assets/lib/assets/products/rationalicombiclassic623electrico.jpg": "281a27b7a09a0d3e88f5f12b290c072e",
"assets/lib/assets/products/rectangularchaffingdish.jpg": "28c51fc9550857270b0a50c56d58138e",
"assets/lib/assets/products/rotaoven.jpg": "672dfaf63a0daa9b2d3bd5f5d83fec14",
"assets/lib/assets/products/roundchaffingdish.jpg": "eb4ddf7155346e2b7c85d3e77cd9335d",
"assets/lib/assets/products/sausagefiller.jpg": "a5e1c84b4ed373c24a750d04356f0cf1",
"assets/lib/assets/products/shawarmamachine.png": "0e3527f155eca67bc44a0823361de2a5",
"assets/lib/assets/products/sink.jpg": "ee62cd3d6545aba34e9dde169751b87d",
"assets/lib/assets/products/souptureen.jpg": "330eb87ff0b50fb100a50d52c63ddc3c",
"assets/lib/assets/products/spicegrinder.jpg": "2c9206f2a6c85f10e6b9972eec9c92d0",
"assets/lib/assets/products/spottingtables.jpg": "117f658b07578a1e1b4d9c87cdc26d33",
"assets/lib/assets/products/staircase.png": "7346910711771cd72de0575ba6e2e4f0",
"assets/lib/assets/products/staircase2.png": "1e44d5b60961519c22db8c2a63580cc0",
"assets/lib/assets/products/staircase3.png": "d604afa23a93ca565716f65a9282dfdd",
"assets/lib/assets/products/steamboilergas200kg.jpg": "dfc37009c596c2bf4aeaade1dbb61a19",
"assets/lib/assets/products/steamironers.jpg": "26d5f9dea207a61a5deb8371908d0b20",
"assets/lib/assets/products/tabletopgriddle.jpg": "c754c65a5b65d334cb3a15f28867eef9",
"assets/lib/assets/products/thermobox.jpg": "cd15a682069b8ca3b9d7c5cdaa8c8a66",
"assets/lib/assets/products/tumbledryers.jpg": "9acec5c3e74ce6ae3e240ec072a304d6",
"assets/lib/assets/products/vacuumpacker.jpg": "255c50863959b7315ec9f9c1885a8719",
"assets/lib/assets/products/vegetableprocessor.png": "45a83c9d8aabbc82fb9df9a2a1717501",
"assets/lib/assets/products/vendedlaundry.jpg": "e27324ffec620a6872474614aee94489",
"assets/lib/assets/products/wafflemachine.png": "b28ce3ae2b7e6e4ab0c36a153e6a0bd5",
"assets/lib/assets/products/washerextractors.jpg": "5b65a57ed8551d04e9a116638f1474ba",
"assets/lib/assets/products/washingmachines.jpg": "d804624732a9f39e1f25cf31db28ded8",
"assets/lib/assets/products/winechiller.png": "e6e01812441a6e3f36f77a9902e6f9ec",
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
"assets/NOTICES": "5f409dc330c0e8dccb1b0045abe72744",
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
"index.html": "c419a97e67c400ad9aea6a97468ab032",
"/": "c419a97e67c400ad9aea6a97468ab032",
"main.dart.js": "07783f6757e1f6e41fd585408b07e866",
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
