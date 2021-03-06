'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3b4e03d1c40ccc98a26479614159ef42",
"index.html": "2e8d9f7f5182d4793b273ce20b157818",
"/": "2e8d9f7f5182d4793b273ce20b157818",
"main.dart.js": "448f9460ea875a217543e325d5578f8b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "511f9586c386a8939d5705f16301e7e1",
".git/ORIG_HEAD": "1dceb65b7aa7ff7473cce8b4f64cebdb",
".git/config": "9dd348624d6a81bfa82daff4f714aa8f",
".git/objects/0d/c46b2de026b8a80c624fdd78687ec66d6d259f": "b4d0331bcf954149d8d7f9a017f57bcb",
".git/objects/0d/c19c4fa4772e7e76e7bfb95d8a38c5e97fd9bb": "84c1c585c2b31cfd29ac5899aec4c225",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/5c17c62899c6c0343f094f8053c124dc52f71c": "12894ab73289c4bd6b33ac3227eab041",
".git/objects/92/b7e3830bf121b69cfd345468338064bf68fd03": "0e1e9602013a427ccf3a7024e22d109a",
".git/objects/0c/55a9e16f695ad9a5059b7513bd3000302eea02": "1eb9a1066193289d4b910999046abc55",
".git/objects/3e/3d56e93fd20dfd7664fa81ebd906614e0e23a4": "8144af9630579dd959b1ff99d37ac0e0",
".git/objects/50/dba328ee06c88a7d0d8e2f80dcd1c22b8443be": "f5c4b330476ea0470439f7136791fbf9",
".git/objects/57/8f03fd855d605999de55363ba9b7dacbcf6706": "49a361e7b95812283b1e12714962cc6a",
".git/objects/3b/2169c93b921f23c65f05b693dfa1f123923e15": "bf38f800f9d3a8f4d2de00b44191b1c2",
".git/objects/03/a8ca342b4d79cf6de8436071012619fd74f16e": "1b8a53d0a7dc3dbbe4e6687513420c38",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/183f6084049e0e67740434b05290839d63bf38": "c24828c7bbec03bef39ca2eac4d798d5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/56/f86ff63a461e0010658cee061157c0a3fd324f": "29935f9f644bd8babe6790623d1f3d01",
".git/objects/51/0776fa3c91765fa78a9cc10041033cc3444bfb": "442bb9415e68e0a76ea98c8e1816c56b",
".git/objects/3d/f7e652e313e96994ca6697baafc69ab93e5431": "9fddf5afd6085b8a0ae1a65e63edd639",
".git/objects/58/65c9f48742d00a3c4a43c0f07b19b9ca35eb34": "100912d78aff551ecddd6f3207ad4d88",
".git/objects/67/088da0d2a78ddaaf860d7869d770e36666e106": "8749fd3eeb74beb5f99d1a192afa5a27",
".git/objects/34/389ed8f5877bbf077ad6623779a38a66a1768f": "5374488c5cd7edb602d4f268f9fc5f46",
".git/objects/05/f919df1a2c2b2bcbbe29d541a40048129c0a28": "067580643e795c9ed73174751bcdfbda",
".git/objects/9c/ce8e9044effa70bdcf5828dae924168262bb8c": "04c3051c2fc1338baa4348e3949e32f1",
".git/objects/9c/c785672ab1e15e9e758d611793c4a3e8a33a8f": "fc0b04e16e43981f388cbd7dc37d2521",
".git/objects/b2/12dbc0e9d0e454b2fb5cc8bf958ec2afb96abb": "b97294ed29581857ba0ca7cf1137fda4",
".git/objects/ad/e35e562109b84536abe7daa5fe3668e84d1e67": "7611fcd584515932ea3e6c95040d07b9",
".git/objects/bb/2d91df9f6ec69ab55b837bc662d5f3ca0ddff3": "4ba0aede86138de06a53155d0433e9f9",
".git/objects/be/b3abb246399c1188da7a76db68191ecef59270": "2a78c7ee09748ccb04f67faf42c4aa03",
".git/objects/be/c56dfc6edc2f0780f0a0a7770410e05519e11a": "1b3f97162ef124e9029df49f261de246",
".git/objects/df/86e9dd3eb937658c45e6786d4304e1a445faff": "2de237fd4f0e16b46ab473617ce9492a",
".git/objects/b4/ddb48aadf3c21a4742d6a6f6594612837bc844": "d75491ba0cd3a23bdbaf5bf0f5c98387",
".git/objects/b4/15a6f612c8075f7bfc43bfc256fdb7fd0c6f77": "7b2b97e358750fc6dd6158b2ad5c0e37",
".git/objects/a2/7b817a1eb3a163b421bc6e958ddfedd2d1a554": "56abd75024ae67c9555ec87575bd4d00",
".git/objects/bd/d033f3ab2477593e4a3b92dd2d2b9c7b8e6f79": "c11d6e792200a0763b0cd8e62cd4ce3e",
".git/objects/bd/474f9b34dc31d7a18f5a4c2fac47cdb781ea68": "2d7f6a8001e0070e74e7ee49498038dc",
".git/objects/d1/0b7d59599abf005c27c8ca8c1689652df90c3b": "28d56dbc2414064c9c818607cd6a29ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/365f16e817f2b5dc87436f076d356467c127b3": "1eade6ad71fe3f543a8a298f0a22483f",
".git/objects/f4/4ebcca8b0d9a0d62ef673535bb78fbe2871b4f": "87020623cfc409641c4eab25a229f726",
".git/objects/f3/c6828fd32e2b77d56c0b51b349d348d89e272f": "f77f9ac03d9c4c8572e18eddaee2e059",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/389d0a7cd8bc966cf6c63b056d932fa7e83c55": "b5af40d102478758fa94efb0efbbbf07",
".git/objects/c9/68f8689f916110cc20832c3d8b3bbc722522e0": "3159cfaa2b9e83304b9a452b9cc37fe5",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/f887f1dfc2a6dde671c4d04d80579e3cb4554b": "ce333cb18df624b16473ced91b037e4d",
".git/objects/c8/d8166408266ce3d43cdf3be05e30560905e0be": "103fd9bad35c5e4371f078f62cada4d6",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/5b20ac9ecff09f58fdee50c13b894dabc33973": "d0d07127b2cafab58ecab3e2c00275dc",
".git/objects/20/702afe703a9937cc6553a6fc201505a86561f6": "a50234e96f12d255b62ff46dc4dfa660",
".git/objects/18/b1a75bfbef4c58d49305a90e2dd265b50b9cbd": "5b8904d0ace1784bc1caf89f4e594141",
".git/objects/27/348aa73ab0289fe0df7e7dfb80ae608aabfcc7": "c844438b679970f0b47dba600959c6f1",
".git/objects/29/be6b01447a9b99a442a7d72f4c035d62258053": "aac40316b617c224bc11f4cdf143067a",
".git/objects/89/24a3a10e01c25b13ea918bc01ab3589008172f": "0fefe507bb977a872e07b613d57749a9",
".git/objects/1f/33368c82c4f3007a160508e2f2e8805706d298": "b5593b861fd6180f9f1488797006b5bf",
".git/objects/73/b35f72126879a757f057b1b76ff026232982d6": "70dc8c534e4c9ef5b9888af44a1802ef",
".git/objects/80/9c9b2f07ade91fb7081f4b28058306d7ff8dbe": "5846d8e37d5315a3ec39a4ef1cb1c74a",
".git/objects/74/3f5422f402129f11b153cefaafbe15661e1132": "2fef3e6388fa7669709ef4e2a43bdcb8",
".git/objects/17/63e153b6f24f136d4d5567320e74f68b248b87": "3c120e06a805f50856e2d4abd1fcc145",
".git/objects/8f/cdf7fe22551eb482ca8b704852121f0061463d": "2da10c9b581628df94501d127ffc1c7e",
".git/objects/8a/3767118092add6045ca41a156ff9c24c13911b": "d23789f0d016bba9656f49f5b4450193",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f38db375597e0cca9fd5081f104420b713d8c5": "5d6b53ab5a06f470dcd2a61cce4868e1",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/75/3c8c95ed9df82b59ed1e6b0c9d59d5e467e6d1": "3276c42401bf0d400edea431fa7e31c2",
".git/objects/81/004de707df232255a2fb815d4ec0e6c779d187": "b6e6a8166001f891f0a4e7befaa57ca0",
".git/objects/44/2f4a25d54652cc907274f88e46b176cc571173": "333899781293e43cf5a8cd4a54a50854",
".git/objects/43/a41f2cfc0482539b085cb6c7361075471df0bb": "567084fff206385c53dbc0c3e133cce2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/43cc6077d92059f54e077db622fe152cdc53d0": "a4d748be5f24bdc0eba604074d373020",
".git/objects/6b/d8e33843beb9de792618fb48ed3b111dd5b04e": "b2016b074bcc3749a231e6162fbd8abe",
".git/objects/38/5225349f5742865a39021570ad404a165fb7cb": "2924d7ec4ea4730220007d4a327071ae",
".git/objects/36/28e6c9d91e951785f4f49dcc066777f5341a6b": "390ceb767f99f73d2c3007aab7cfa9e1",
".git/objects/09/60a0d3f52eac8e051b70674405bda1845552b5": "0935b8a495876a1f0f6f3a0e98b41984",
".git/objects/09/6e9f522729dc539d512ee10c5edb91c2c5a5c2": "9ce1b9ac6ca6b44b77dd2d2410317d12",
".git/objects/5d/c30dc6e4f44ee5f897fbb0d8d1ce1f34f9fa4d": "d9570e535e86aa6d77f78c720a33f8b2",
".git/objects/3a/14ddd720bd3ee041e028cee15b914afe600ee2": "e0f775524a749bb3d5a8e92eb55d35f1",
".git/objects/30/f6dbde3168d00f17d51b2cf2a079f324a639de": "05d6eb7b2f7345bc45e833c5cdbd1635",
".git/objects/01/eca16b0839e526f2d3f486bc5be58f7fbe8b95": "9e575f2c53f89c6ac789598b9c12284b",
".git/objects/99/f8d4976d4a349f6d424a5d05e3df0deb4e2597": "afcda61208c67c8aec73cc6ee1a2d298",
".git/objects/99/c35f92487064d4ca42d66fc0c03b516b9cd882": "ed395246908717ecd89c6831cc3fde38",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/63/e96cb0aec7a426dce1e85aab4731eb445d20ec": "18fd48847a8d8f76bfa168bc0bebfdd1",
".git/objects/d4/99f65994c7b96cd869b7b190527d1214754c1e": "1fb70fbb73cb30d7665f2bff6aaa3b8b",
".git/objects/b8/c3f09263e0497bd949700d084965c33e0a0f37": "399d6938c92816408f7477fd82e0e6d0",
".git/objects/d2/6f55852cd206a0cc9f0831e8667745be8f84ee": "bc8fa48f761ad3427ab141f43d64b6ee",
".git/objects/d2/80c226be61a81ca9c2f9d442c27d4175336297": "b7794dcfed07e0a471f838e579d059eb",
".git/objects/af/f29406cf7975c0376c61ef94bb52931084f530": "0f575bc028e8431aa955716699fa6967",
".git/objects/af/88474c8b07e6912f3127e5ff9e05ac7c26ba0e": "73220b25af3bb68407accba0b5434882",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/d6e69bd09d0f9566e5b2f09b6621080c9efc13": "ad12f82cacc12b4ab30990f3ef3e0bc4",
".git/objects/a6/7528c1ccd4865c8cb58099ed9412bb9096e162": "2c103affe22e9171598b1412a4c79551",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7971729b6f6c74a9641da7a76826013dde1ecb": "256948edd01929b4feacb35c2054e82c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/dc0ec1afe49b399728bfac6b6c218e71814001": "d4eb891eccb8bfa5526b6f95c6f89e36",
".git/objects/f9/3e0a19df8e8dda387fcfbde2431a3cca45a5ca": "9f698ddf3b03f198277aa8aff6258f1d",
".git/objects/f0/8bfc8ee2da6f08ab5db4909dc96434513cb9eb": "d78c6441f50cf379cec0d2e3dd79bb41",
".git/objects/f0/b0908d4b0e080b287ed0e73d960408fe55419e": "064477627009ee3eb341ac65f579e77b",
".git/objects/fa/04162c67de343e6ccc78b38c4897550d468a9f": "a79c553f8d582192be40df67cc9b878b",
".git/objects/ff/fc686c1a270531efc087b111c6e78c9f3543a3": "9f767a2b5020a28a030a0fdfe5a423dd",
".git/objects/ff/ef4f96ea4b172ea500e56757a1e906e25239aa": "efc25d0fbe9a4cfadd876086aebe9bfd",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/291363ac6e69fa8e0924d502f117ff85235321": "37283d688895dc21e17f840b681483ec",
".git/objects/f1/1977847542c67ddd4dd3496396908d79d26d4a": "0757d6e7150adbcfff9acb28b9fc74aa",
".git/objects/f1/e94d61dec9636f01c543154f1974eb92f5b94f": "df0d9d60e54c8cdf02a3a9d165f949d2",
".git/objects/ce/6a059e764aaa282b7eec8abcdea8772f16ba0f": "46961412ea622251bb0cc181afe21a87",
".git/objects/ce/bf57c8af8a65b54b904fca4a7283dffb2980de": "398b78e9f8ae4b72ff127738092c98fd",
".git/objects/ce/c82d2b8453faf022d60d77a49b1178408cbf2d": "b25e2c377afc6e0dc9bd4ba79dbe98cb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/0e082d0d1637cca14c0879974cf12fc1d07ba8": "dc46530747265a8a61fc2412f78e791c",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/3248f3877f0d055e592156f1f5caf426a80fa5": "f8688fbc6940b9f0a2c8ed9ff470f865",
".git/objects/48/a9fe87539831a001eb86dff908ccd29c161c7a": "176c08c14c6418932bb7829584446048",
".git/objects/1e/ba218daa1c16e8f8ba01eb0c43124c296fcca3": "fcd8c49e18f388c347d03672cb764aa3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8c/28ff74f76e49fa90aa61cbc164131694056f7d": "475ae3c9b9d5f05f811fcac7987eaad9",
".git/objects/1d/20d1314468e76896ffcdf087ac6835da213959": "f6c6c300135bc27191beb0ade630f960",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/73ef9dffa020303d78fbfbbc89be98081fa7e2": "595a23867c09ab95d04398b79eb14d1d",
".git/objects/49/3b562903726f0a79d41f99853607e02c98e79f": "70b16584ff878f5dcc168907ff892657",
".git/objects/2e/c48f96c5f6672337ee22836d1b300f3428676f": "11066ab4ed09ee13e42512e800d5412a",
".git/objects/8b/25551a97921681334176ee143b41510a117d86": "0fff8d9af2a8616c080c072abc98d2dc",
".git/objects/8b/c2d53ce28288d1004a2ea9670fa4571b0343dc": "96cc8c1bdfea4a759dffd59bfb526f8b",
".git/objects/8b/3cc7103f787af00f2a797335f39d62f676cf59": "d1206bd2d4057f5c5546e3189083fba2",
".git/objects/14/9dc6ee028f59132f85ce83894e6bb1ed0674ad": "f927baab5d338513a03de6305f705b8a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "c2e2c1e96f611f8834596fb7ce78833f",
".git/logs/refs/heads/master": "a3a821c3421584b1a549b6a0cddc7175",
".git/logs/refs/remotes/origin/master": "fa1e66fd8f2676063030e8ffce3f9e01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "32c99e587a3a14cab911dd5946826a14",
".git/refs/remotes/origin/master": "32c99e587a3a14cab911dd5946826a14",
".git/index": "fb972343e0b27c525c3e3648ea435145",
".git/COMMIT_EDITMSG": "9afb9c1e920a8e636b41f249d3ae45bf",
".git/FETCH_HEAD": "98cb46ed1380b789196dfb8b0d3cfcba",
"assets/AssetManifest.json": "cc72cc2a61a235a3cde82b08940cdbcb",
"assets/NOTICES": "80ab2710018ace1277366528bb0ec15f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/flutter.png": "157df2c79292d1f009343b4669211d87",
"assets/assets/projects/p4.ss1.png": "c48ae9a341ac6778028ce69990210ffc",
"assets/assets/projects/p4.ss3.png": "fbd0f17f0c295c2c8ba42aa36b680855",
"assets/assets/projects/p4.ss2.png": "b295e5f29b228cceca20f333d188ac24",
"assets/assets/projects/p4.ss5.png": "6c28c1a4790446bbe8d12d8d08b75881",
"assets/assets/projects/p4.ss4.png": "fda37d996f06e338f78f1a3d67650a7f",
"assets/assets/projects/p3.ss1": "6b6883fc8cc3a6ab3d95a7399c8c1872",
"assets/assets/projects/p2.ss1": "cda7fa4ca412c41f3b1aec3be2163bca",
"assets/assets/projects/P1.SS1": "5b590a1ec93a13b070f72884bd5c8381",
"assets/assets/github.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/assets/java.png": "1b75595146819d5108d883df1080516a",
"assets/assets/avatar.png": "41079d2ec7e972beece05f89f7cb9c1c",
"assets/assets/linkedin.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/androidstudio.png": "d57ee5cb73b27b6a85d757e5b928f63f",
"assets/assets/kotlin.png": "4a0ce1c572c04ffa9a4f32b319ef59a6",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "4ac2fc32a7ca913f537b910d23afeeb2",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/shelf/Uncommitted_changes_before_Update_at_23_2_22,_12_44_PM_%5BDefault_Changelist%5D/shelved.patch": "cfad3bc1e7f7f7b4d73f0e014419e316",
".idea/shelf/Uncommitted_changes_before_Update_at_23_2_22__12_44_PM__Default_Changelist_.xml": "51e930db66ca013959d941ca7a07d5de",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "60bceb5690317356c64298ecd86ca10c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
