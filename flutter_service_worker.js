'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "ae20c10c1ad3cb3f921f6a54fd5ea4d9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0fb794387e649d7502f85d07ac20e8f6",
"/": "0fb794387e649d7502f85d07ac20e8f6",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"main.dart.js": "cd5c5f0bdde6b39509a491b33e8899a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "0a85a3fbd2bc99f296b82e2f4d8c73a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "863d71e3f1943d30c6e7bea219629098",
"assets/AssetManifest.json": "24ee8469d23671b74cd0414bbb6248ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/639f139e-8587-4892-bed1-9cf258b457c0.jpeg": "eac0cb1fd584c2647d584cc943654dd1",
"assets/assets/images/image4.jpg": "287e755d9a7ae5313190cacc3527de47",
"assets/assets/images/image2.jpeg": "4e95c9179ec03e673c0fb2f28928125d",
"assets/assets/images/0cb6acb6-c8be-40a2-8e65-ef6e4d0bfdaa.jpeg": "3d69c316f3e488d170ff25d95da42021",
"assets/assets/images/e74c1916-733f-429d-8695-a4f7801c5a8c.jpeg": "83e0430c3b3a4b73bb229f9382b423d5",
"assets/assets/images/image1.jpeg": "7bd8e94a9f9454110d75a1d9e8f4aa6c",
"assets/assets/images/image3.jpeg": "f1ee302ef0c1d6229ecc33ab088260c2",
"assets/assets/images/redHacker.jpeg": "2328ec73190f9150329dc02fc23cf11a",
"assets/assets/images/941dafb9-f6f2-4dd0-a6f4-94f686bb8970.jpeg": "cca61d7993844b1a3efb894109051105",
"assets/assets/images/image5.jpg": "d25458706ddd61e4378ff57df497b003",
"assets/assets/images/88ef3989-b79e-4f1b-8613-11ee2bb1ecc5.jpeg": "51daa8644bc48a2cf7b237a57b14badd",
"assets/assets/images/d085de3e-382a-447c-949b-0c3311bd2779.jpeg": "4ecd28806642129e50b15ff8bb42153f",
"assets/assets/images/image6.jpeg": "669142e6f1090c4fe93489e749927da3",
"assets/AssetManifest.bin.json": "897ba487a5dfdd51d2a58648ecd3368a",
"assets/AssetManifest.bin": "daa8903f8232304a7117f3207dee51d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "bf2d38a3430fc3a5cd59455bf31751db",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "fac6fc38191e5bd94d4fd297b4eb53fa",
".git/refs/heads/main": "5a6e18a73de6ab2c25ab1ac18205ac05",
".git/COMMIT_EDITMSG": "aa0d4932b53f99e3c7046e6ed8bd46cb",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/objects/84/ed1e0ce0f7e67f266d9a908197847888073a9d": "910404a772a4d644d2182777783b95ef",
".git/objects/cd/7e3a5408dd58c0b2500fe3df14b1afb8499cb9": "c5830747e149649cb4561ac5d82fc801",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/41/8a9f044354a23369cc0a0fbead86e7ee886768": "16bfa7f462c5c00e17d1dda940593513",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/01/8e223da0fb24011ea416b49926b7a8ccab683b": "36acc6cea8086706367abfd68b7306a7",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/04/e5b45989ded13856bcc07c7d5ac973456afcbd": "81418a6c0bc59c1bf570822b844669f0",
".git/objects/63/5dc25304c47b62ff08fa553835bf7d61b6b87e": "427902bd2c6a9b7e729aa27e3de028fd",
".git/objects/66/1d4e8d0eadeab6cba8962c15f2410bc14b0909": "3dad7788973c15065e02aacbbe652270",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/5b/7e4396b14a55c03e2ac86c763f909f86ab0408": "52f2e5ec1bca16d0c6485552fef6664c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/9d/d33e3e4309ce264ffc7005dff255a1ec1e3ea1": "ee09cd9f559928bf724489b22662dd0e",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/97/51dd364f974a62722f746a50004d856f276347": "7a9737627648e56174cda1204d6f60a8",
".git/objects/3c/1d4fcbee71ff1fce00889a380cf7f0cb1d5b93": "2fc9b03b2c74b73d7ace84982d1eaee5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e9/f44381418b5f0e3cf9f1b6c5aebe2e22bae337": "e617d97177f2caa5f9304083289c0733",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/10/b738f2c31d8a591bdc838589cc1be6189243a7": "5a18516d1abc019a93390fdef92627c6",
".git/objects/e7/072be276eec407eee1da8d684be6bcf8901150": "521ff35c3b6212855cf3c2b2121239cb",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/a0/740cd107b74ec472ecfc6f6900daaf6b1605ed": "c3554b7a07a78b42758e96bf80caeb0e",
".git/objects/6d/2240a2905aa1f9f35262f3601795c46139dd7d": "aef1906cdb7e4854f1a0bc51d6e248d0",
".git/objects/e1/a5955f40e22e67f4e673fa0170b0de51e267fe": "67f7d2f10c5f438d5d376ad934073a4a",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/c5/8a140e1c403bdf23a58c5da678d6569f97c4e8": "7d47f1b420f79875a49cb9f484a07f4a",
".git/objects/ba/85025a49b2078cdba9cd4ec9fa673e5a1f15a9": "c194a88ff4404ee68e36ab89590dda91",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/b8/bdf205258fa63a06918c1e25e61d247405be27": "daff6f051962fd26ebdb9d7bcf10fb7c",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/f4/c3a39b0f49f95f418fa6ab640fc4c5db743509": "b64d0a1baba253cae66499ef6bbec698",
".git/objects/4a/e008764c749046f82804d4e77da5a4a8d113ef": "35dc8b0100a22fb2849dd98a070e1208",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/f8/11802bd1f22108c14c6a837da78f3b9456a256": "642fe5ed27698fdf455504065316aa92",
".git/objects/2c/2c3ab684c09ea689f193a36bea956c291b978f": "daf60989d5f3221d5f4e98290dd45254",
".git/objects/57/ee41576aa6906b3a982510be557236eae0e91d": "e99d2de1c7199f8d026effa46887f8bf",
".git/objects/0d/9c19eb0e399ec05264dd03925964848afa3de9": "cb79cdd191047cc7115f3675a9212f9d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ec/8d25e83aba60b90b8e80589f2e4eeb993f775c": "be843afe66a8532a4b956e9e631fa1e7",
".git/objects/89/22e00107011c782016ef8a33fc7695342b8eb7": "0aa3c123a15f2a4f7759e81178938b10",
".git/objects/f3/62c601edbdad805a4655b153f4fdfe9ce38b45": "55ff6978a004d6ec9cc5d62954614899",
".git/objects/31/d4abb35b470ebe3837b3b358e3eb06c5ff274c": "8d6f5776cfcf44672066ba5e8dd7dd38",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/48/3a943f6c4e1c448e5c81c8fd26a41ff98c40b7": "b176a5b497943fcd0d241892b9d5d8ff",
".git/logs/HEAD": "4ccb03c44ca06caf35b72ded15344a82",
".git/logs/refs/heads/main": "fc0a69d691bbe5587e65b428132febff",
"version.json": "472c6d89785d1c028328d262b6659af3",
"manifest.json": "0bcc4b19d30e30f8cc1bacc2fcb05951",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
