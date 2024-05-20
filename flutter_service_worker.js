'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "7c8d00a65104ef0f6c584718ca57c7c2",
"splash/img/light-2x.png": "31f30f021a31e4ce2fc38b7dc139a16f",
"splash/img/dark-4x.png": "cf547873bd2a45dbc1148e321d25d206",
"splash/img/light-3x.png": "d5f7b53d2f9f72deddb89c61fb26df19",
"splash/img/dark-3x.png": "d5f7b53d2f9f72deddb89c61fb26df19",
"splash/img/light-4x.png": "cf547873bd2a45dbc1148e321d25d206",
"splash/img/dark-2x.png": "31f30f021a31e4ce2fc38b7dc139a16f",
"splash/img/dark-1x.png": "3732dbdeec1afe7868b3e9449ac23785",
"splash/img/light-1x.png": "3732dbdeec1afe7868b3e9449ac23785",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "267cdd29a34f47008305ea0a8cdae41a",
"index.html": "8e3de5fadceb3b0f6c1313b8b7b370ff",
"/": "8e3de5fadceb3b0f6c1313b8b7b370ff",
"main.dart.js": "2f1652fd7419a89a1209debf1b2b0275",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d53148fd1a02fa4288e1dcfa92ee2686",
".git/ORIG_HEAD": "b0b03f4032484353676fb561a184e82a",
".git/config": "f00323ff77bdeeab8ba74045ce86a6dc",
".git/objects/0c/789fe61f20e0d058515e3ec5c373fe021f33bb": "69e3667b895a828d75e3785224769979",
".git/objects/50/d2d36090973655c2ed7a0524010f11ce2c0d27": "32388e89cef892511ec61c952e466c32",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/03/6a90344a0ca865a1ab5ca519a45aa8d381ce89": "bb2ce78444f1d397003cc777795058d4",
".git/objects/9b/aaec38515796189d9bac9c70291495a6596ca3": "512ba1c0fcbe5e08cd3a75012be031dc",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/32/26101b4f62f0d2a5e1b2fd2cd935ce42d8db81": "f8c7e563b2799e6919e59c8bcadc94e4",
".git/objects/56/d7eced3d67fef7291a2314d31505fd912c6b2d": "a4e8a55072a1d988b3efd358070bf09c",
".git/objects/0b/90138005f9174a2048e3085df14cdf963b9428": "81d94e65251eea09c872b1227b40b55f",
".git/objects/0b/51ae864e67e73719455784e5b0f3e9e55c0773": "51c3e49ee310412d2d83588bd907a878",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/4f05952cc16a78eea6e9430a9386da2c2f12b8": "945227c50fbecbf426fe2bc49c50f726",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/05/c1c113bfd3310f8a0cc3b82b8b626d70ab1dff": "2eab19b2a3b59585311f3ae8d6ac0e8a",
".git/objects/9c/9c6be61900e67ab0ffeb30aa7af93ea0b8627e": "0a066f67efc6a12ceecfec11448eab9b",
".git/objects/b5/354b51d3326d1dac9f10b2cdde0ae45102da5c": "72b2c084f03710993ae653ff82e379a0",
".git/objects/ac/7500a418ad23ab82e8b32d16aa4b7b5b91a729": "3d81e3ec58d6763d9ae2fa667083ca93",
".git/objects/ad/692087b9d2965ab695fe6a328e87599b7995e0": "722a12a7dbe79ad4fb9c753951e1a8a2",
".git/objects/ad/8f27ac060b561801f42e17258f59807c45e40c": "f67e7566399cc2deee228f1dd25a2828",
".git/objects/ad/b6ae75252a87fbfd658f7d9d3bd0a15987b3c5": "aea2242dc525da3f2dc2e455b523b963",
".git/objects/bb/0e32282632d4f554d03208386c8a5ea83a0fa8": "d627f296f307fc88c40a1d6544467701",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bb/8bade9f016ab7d9ba022da3fa3e6e8ed685ee8": "3796fe671d90e830aba36246c2f54c21",
".git/objects/d7/736b85515ca7dad92c49e61c1f1498cb1edded": "8905218dcca23f6bd38ecc0577c0ad42",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/77564af93d9c10043bebd854abbec574096336": "33c874dc397c85145939d0754b47659c",
".git/objects/be/72a26af1f9109e692303b060b29386d50296e1": "173ccd43ffa44a873bfd7bd5339d5b24",
".git/objects/b4/771907b38b927132617f3f082de8acc08e2e86": "e72028252b1fa095988128e7046c900a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/3cde3cad814d6ffefd7a940e362c777fc81a37": "4b52ffd55a09cc674159880be26447bb",
".git/objects/f4/e681807725ab3c732646f6689f8da35f2861ab": "3d81a001ba9fba2ebbcd19c9b859a73a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b528aed9bc6fcc5be51711f4a33b6edbe59006": "799a23cce8699b743c4bb32cd5e428ac",
".git/objects/c9/890c14a89c7efc9dddaf2b31a5beb67f70e70c": "6e2c272b14e5815f2e3df619840e51ca",
".git/objects/fd/177d24b447d59f17ec15b0f80e4a9cbdf53b9a": "934270b3d490ba4426462f4b1181ed12",
".git/objects/e3/9b5b7dde8562e76890f4bd9235091dcc1dfdbe": "45d53a187efdef97b0cb5a58f12f51bf",
".git/objects/e4/c3f5b2e400fcf70410dcac105303fa3316613c": "a0c6e7bc1defe76489525a183fe45a90",
".git/objects/c8/3933aed514391e6c9ab2597b12ff958148dfaf": "6c69ab6b4fb2962690e3be7c606254b2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/af5744ebf1a5726fa118653ac57cc1bd4a54e8": "3bf899d6f6155499cef3ec043b9fba8d",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/11/f12abd53ef516c74f9811d8a61218e0612211f": "13ebbf71f9475af90f16d5add8297684",
".git/objects/16/652226e818f4155a8fe00aeb4c66a07364fe3f": "007e7ceaf34f4b436f05f9923da39022",
".git/objects/42/0452000d2140f17ead79e65f16f5aed83a339f": "f760ed63b1881b15ce637383c03c26a5",
".git/objects/74/d99d9f927f0d180d2bd003a142fc413bf9e4d9": "9fa5a3eca468b67540bb3c94385eb0e0",
".git/objects/17/d39f27727c2a852461391eb71209913508f314": "a8494767d229fe34494bb3661c7c219e",
".git/objects/8f/1b485b047898208d08d2f2ae3cdb1a5790e612": "0584c995210c7fc0cb1c76d36f07da8c",
".git/objects/8a/b2c562f5cecbbc5f213d403610e9852a8b508d": "7f9307198dcf4b53bd42e13e83db637b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/c1d793bb9a33ea9239e6219da1fe8dd50ee2dc": "914ac7e43521ab585b290c5158434cd6",
".git/objects/86/94c8146ce5b40b0284b4f8d8005ad7142d822c": "376b19a5cd375bc83dc3fc01c4263e7a",
".git/objects/2f/0246071e3311d53d804be776af02f2cdd9b2e1": "2a0c6c2e528451a9fb51d3c0463b70cf",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/9c083d19fba1a6b0e95a0807724aa2694a72eb": "273dd84d7663db90fb24dddbd2a9103e",
".git/objects/88/50bd54e92b5c66a89bebbca559d440a7ec72a1": "a738b8f243f8fff5729bf7511555e10f",
".git/objects/38/b65af280e8d8cdfb98a6b632f0ba5ae4edb71b": "79918a90ec26818af592292547da631a",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/5c/1bfb27d53f1c72ac1fd1ccc51b6855e85d1769": "76b1c34a83cffda0f3681ad4b8e0dbf8",
".git/objects/09/c1a8119fc36989691f977e797031020f991f38": "16ef13c9d883afcf41da718c3dabd2d4",
".git/objects/5d/15672c94d052a73b76f679931d48a500ba7c7e": "f5f01d11ea277f6e147ede3404bdef3d",
".git/objects/65/a9df12f00081c400732d62c113aa0954bf396a": "275d637bffa61e65dd9820679a86c878",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/98/cc6a7164c3b6818cc14ff8fa99db8f5f542a6c": "df6fd22b9b903e550028e7c6182cd8aa",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6d/09c1da595f7bc9b39302e2fad60188082dc8b1": "8a1859e61a0945d81168ca0b87e0ee58",
".git/objects/6c/5d84b0e0a690fae984b7ac4211103e6fff67e1": "fa142664393d1570012c10c0094b61e9",
".git/objects/39/2ceddee808a9159e651f290ead1e0f88668677": "b5cb75fb52b3ef9cee92186e71d0f9a3",
".git/objects/0f/14cb2a0ecde8270cae5f3cd0340024f68b0486": "dbbf56f47d0868ad61d530e673a16928",
".git/objects/0a/ab6413861e22fd4773d99059580cced55b5c47": "9e7b598f485aaf5c39359649447e8ea5",
".git/objects/64/4b47496e5c4111dcfd00ba7177256008eb4c5d": "8437ba19c0cca9f63a39c892d79ffdbc",
".git/objects/d4/22bd94ba65ebed542afe5e51f6a5dc918c4fc1": "ca784a3789386ef739c5d4a7d51ee054",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/28c11329098f46cb8db6d0b3b0baf9b135ac2b": "a3ddd44050af1ad672f0a95d2998dfec",
".git/objects/b8/5abe6ccf311b8aca3dd89d4897d959a8fcd8dc": "3155dbc49fbf48f7a9977245ac543204",
".git/objects/dd/090e33e3349435342aecae3befa84abd76c023": "56f4a2448936c7fa11d31c9afd50ee5e",
".git/objects/dc/11a1fa1f0b47dc9992beb3fa7109981f4061f1": "32f7450ba73ffcc60abdf0770f8fc0d2",
".git/objects/d5/6c1fa38da5033397d45993053bc401769c1561": "717c9373804654d744b1501fb94b0d89",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/dd50e7daaaccd90c49985349c02ddca746a006": "d48cb804a57e05ef05f80c17049d96d4",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/62503b4ddc734061cc79734ceca42bea6caef0": "5bf0f4bac537f43d0d2bce63fce2125e",
".git/objects/e8/9fa5cb865cfb16760ccc1c881da87665fe9946": "45d6e556324172af949899d432371630",
".git/objects/fa/fc6a90d8af1d2483be15594258324e85970f3b": "65ea98852112babfeaafe39e65b6df4e",
".git/objects/ff/ab914586696309e89ca79d2b81aec00827dd6c": "1c97ccd055a2ff259e815f23d01e2b43",
".git/objects/c5/ff7615080cfe31b531f9089776899098be0a78": "8273963242707e2692c8e849af6a3a21",
".git/objects/e9/308dd1b78185846b42bc03b4b5a9252ed3f131": "c5e810b0aca9c067c20ac288789ecabc",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f1/d16d9e110780a98203eff751b0d17d6dd29eea": "2f6a0b4c97166ec0c7c6f4a61d07bf04",
".git/objects/ce/01815938ca8444329e04472614e66b1f712c00": "bb7d1994c9c553f1fbd8254bbd600283",
".git/objects/ce/091d602d8c403fc929973dc376da6334bbf013": "0f33bb405c828a946f699d3eaea605d6",
".git/objects/83/b105ba19fe7a3bedb90bd2503ae0c04eb14eab": "225b080687ca37fa7937708935b1dc98",
".git/objects/77/d1833aa10ddb0f0bee4971c94e682d90d6b92b": "d67484efa1695d76643a563020ae53b9",
".git/objects/77/71d75b5db8150d481364e6d5a32cfaee5d1207": "d49ca9bd980dc82d2a1098d290fc660f",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4a/24482761dec797c8c1b249fb212740b7cb53da": "915b7b6e0751c654e8f0b8dfd0f91ddf",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/12/f4c37d69b9fbd1d70c43f6db77288bfa1e76a6": "6d2eb5cda7e69ed0113eaa80f8fba760",
".git/objects/1d/1153cf1cb1e317a06aa6938725b40a7310c10e": "6df9bdbc52c661cfa46cad644066c251",
".git/objects/1c/82f2fe977e62d88f2ce84ae818fcff682d387e": "6c75d165b0c8a3d5e1e8b66b0c8b26c9",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2b/3bf0541b5cf9843a957fbbfb92d44eb4f53da4": "6107fc3c733cae861ed8d84b2bd14d33",
".git/objects/47/0cfb5b1dd04b6955ed2b8f930ad2efef2c7b97": "113c7e716fd752a405cb889725565c7b",
".git/objects/78/6f9b59da9c197bd7064014a92852a3ec72693b": "643bcda61029e0806dbbad995cb9c894",
".git/objects/78/cd218562b6290ff32ff583663f781c48a6b74f": "0188668bad381ac9d7a6e9760bbcbbaf",
".git/objects/13/5f05cd576ec5ccf016571c93aa1ad4cb205691": "453cfed8dd834cd4f57126f0ee2400fe",
".git/objects/8e/8c25bc937b1cdd0edeaf47d7eff5f46fe83ce5": "e33c0d4918126281a32ecef1eddd32c5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8ecad5faafd4c745f4cbf0ee2864fd71",
".git/logs/refs/heads/main": "5461104efd6c48d0e8a670118875aa20",
".git/logs/refs/remotes/origin/main": "bf648e8d033852544f80a9e0a3d905b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "62337c41cecc55e7ee4cdbdccdbb2d5a",
".git/refs/remotes/origin/main": "62337c41cecc55e7ee4cdbdccdbb2d5a",
".git/index": "5adbc1fa38b1d28ee7b7914971ea3006",
".git/COMMIT_EDITMSG": "45a644440a23e1a0ed288fcec8223000",
".git/FETCH_HEAD": "a13b28b4dc9b27b8b1ad7d1d07ac042c",
"assets/AssetManifest.json": "4cc7f85e4d9146d3b04907b3d05106b8",
"assets/NOTICES": "c61a6ddc7bc6c75405d70215dcc7bc42",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "2817f3274b40346da90939f05c446e31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "021e9ab65fd1557fbef28c75a3fed9e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "cfb17224f6a89ea2fced51055d6ca1d9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "4e6900305c8f79248a82307cb91f54e1",
"assets/fonts/MaterialIcons-Regular.otf": "b21f217faaba46c34a2ba4609fdbcc54",
"assets/assets/inventory_app.riv": "f6c0b4ca5afc4023de6c8b55b30deae1",
"assets/assets/Nexus.svg": "610961fce2bb7da2497b389dce9752c2",
"assets/assets/error.mp3": "a34682d82148683ae1baf4d1c95d0c34",
"assets/assets/NexusIcon.png": "162448d1b466685ce74a3472673f4967",
"assets/assets/beep.mp3": "b76b0645d3ba50d44def821b619ab0b6",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
