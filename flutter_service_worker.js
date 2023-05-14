'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3b4e03d1c40ccc98a26479614159ef42",
"index.html": "d6c6cff140a336f79fe7a70fbc45d8f8",
"/": "d6c6cff140a336f79fe7a70fbc45d8f8",
"main.dart.js": "5fb01ebfb7ade8c70ea36f095f9a5ad2",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
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
".git/objects/0d/72b8d700fb07a946ba177fb6567c53732048a6": "c121f1fe4b6684520a6c8ef6684fb386",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/5c17c62899c6c0343f094f8053c124dc52f71c": "12894ab73289c4bd6b33ac3227eab041",
".git/objects/92/b7e3830bf121b69cfd345468338064bf68fd03": "0e1e9602013a427ccf3a7024e22d109a",
".git/objects/0c/55a9e16f695ad9a5059b7513bd3000302eea02": "1eb9a1066193289d4b910999046abc55",
".git/objects/3e/0db66bb3cb39dc6dfb596843736de5a7764ef2": "9934bd8db6a10d4a094edc829b0fea1e",
".git/objects/3e/031f98992e9764c2e40b9b023f9418c6282298": "635fcdb16d3b73f22a509fcf2691af55",
".git/objects/3e/3d56e93fd20dfd7664fa81ebd906614e0e23a4": "8144af9630579dd959b1ff99d37ac0e0",
".git/objects/50/dba328ee06c88a7d0d8e2f80dcd1c22b8443be": "f5c4b330476ea0470439f7136791fbf9",
".git/objects/57/8f03fd855d605999de55363ba9b7dacbcf6706": "49a361e7b95812283b1e12714962cc6a",
".git/objects/57/34af6b305401b7f4a11389a60a8897dabaac9f": "ba07502cd9d8c816950a6a58cbaae3cf",
".git/objects/3b/2169c93b921f23c65f05b693dfa1f123923e15": "bf38f800f9d3a8f4d2de00b44191b1c2",
".git/objects/03/a8ca342b4d79cf6de8436071012619fd74f16e": "1b8a53d0a7dc3dbbe4e6687513420c38",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/7ecf5c183846cd7525eb058eb25aaeee05d517": "473746f88b03a635a1d8e3a9adc0316b",
".git/objects/9b/183f6084049e0e67740434b05290839d63bf38": "c24828c7bbec03bef39ca2eac4d798d5",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/69/3c4ede02784eb55822825cb4075e5ca2aadcfb": "fbeabcc2218073effb37df455f8297ae",
".git/objects/3c/8cc629ad532057cd9155427c2ac73c32266b8f": "26a561da96c7afac68c143c601a05c74",
".git/objects/56/f86ff63a461e0010658cee061157c0a3fd324f": "29935f9f644bd8babe6790623d1f3d01",
".git/objects/51/0776fa3c91765fa78a9cc10041033cc3444bfb": "442bb9415e68e0a76ea98c8e1816c56b",
".git/objects/3d/f7e652e313e96994ca6697baafc69ab93e5431": "9fddf5afd6085b8a0ae1a65e63edd639",
".git/objects/58/65c9f48742d00a3c4a43c0f07b19b9ca35eb34": "100912d78aff551ecddd6f3207ad4d88",
".git/objects/67/088da0d2a78ddaaf860d7869d770e36666e106": "8749fd3eeb74beb5f99d1a192afa5a27",
".git/objects/94/b79546864ffa1761bff0e333d01801df5ec4d1": "c4b3b29176a193583b18442eb021e6c9",
".git/objects/34/389ed8f5877bbf077ad6623779a38a66a1768f": "5374488c5cd7edb602d4f268f9fc5f46",
".git/objects/05/f919df1a2c2b2bcbbe29d541a40048129c0a28": "067580643e795c9ed73174751bcdfbda",
".git/objects/05/726ff2dfe4c1e4b8f111ff81faf57309bddfd0": "372643d94988dfe7543661dff3e6c57a",
".git/objects/9c/031b37c9f379e3ddac8e78f5d78c059b09894a": "63d1615cbd26709b462ced4df5d56e7e",
".git/objects/9c/cb3dab62e8b290f2956aa5c94d3e7bde52c1a0": "f8b3e9b848e2de0bb54399a6aa14ba8b",
".git/objects/9c/ce8e9044effa70bdcf5828dae924168262bb8c": "04c3051c2fc1338baa4348e3949e32f1",
".git/objects/9c/c785672ab1e15e9e758d611793c4a3e8a33a8f": "fc0b04e16e43981f388cbd7dc37d2521",
".git/objects/b5/36c9dda80b8d3452672b2c259d5d28895a915a": "dd487a28119edd4fe4f7f8e031a8d1cd",
".git/objects/b2/12dbc0e9d0e454b2fb5cc8bf958ec2afb96abb": "b97294ed29581857ba0ca7cf1137fda4",
".git/objects/ad/e35e562109b84536abe7daa5fe3668e84d1e67": "7611fcd584515932ea3e6c95040d07b9",
".git/objects/bb/2d91df9f6ec69ab55b837bc662d5f3ca0ddff3": "4ba0aede86138de06a53155d0433e9f9",
".git/objects/bb/311fb325519402af39694b7261646fcc0f2355": "00da4cd5fab980bd2f23cecbaf83e236",
".git/objects/be/00ca05bcf41307d351d6c62dd50136bca893b0": "d2ae6a6505e11cefaaeb8d55a752371b",
".git/objects/be/b3abb246399c1188da7a76db68191ecef59270": "2a78c7ee09748ccb04f67faf42c4aa03",
".git/objects/be/c56dfc6edc2f0780f0a0a7770410e05519e11a": "1b3f97162ef124e9029df49f261de246",
".git/objects/b3/e669f3fb04ae4ac4d9606a12adf4cf175c7130": "84c108a099c3aded875257fb9ba436bb",
".git/objects/df/86e9dd3eb937658c45e6786d4304e1a445faff": "2de237fd4f0e16b46ab473617ce9492a",
".git/objects/b4/ddb48aadf3c21a4742d6a6f6594612837bc844": "d75491ba0cd3a23bdbaf5bf0f5c98387",
".git/objects/b4/15a6f612c8075f7bfc43bfc256fdb7fd0c6f77": "7b2b97e358750fc6dd6158b2ad5c0e37",
".git/objects/a2/7b817a1eb3a163b421bc6e958ddfedd2d1a554": "56abd75024ae67c9555ec87575bd4d00",
".git/objects/a2/a93d2a6c202132c6a474e7efd60288d221750e": "711edb0c021a2d75cd2c80e7d065134c",
".git/objects/bd/d033f3ab2477593e4a3b92dd2d2b9c7b8e6f79": "c11d6e792200a0763b0cd8e62cd4ce3e",
".git/objects/bd/474f9b34dc31d7a18f5a4c2fac47cdb781ea68": "2d7f6a8001e0070e74e7ee49498038dc",
".git/objects/d1/0b7d59599abf005c27c8ca8c1689652df90c3b": "28d56dbc2414064c9c818607cd6a29ab",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/365f16e817f2b5dc87436f076d356467c127b3": "1eade6ad71fe3f543a8a298f0a22483f",
".git/objects/e2/729dc89147786742824cd653a2ce6d8eca19a6": "caff077c7d31fd73b90f9a8d72fcc61a",
".git/objects/f4/4ebcca8b0d9a0d62ef673535bb78fbe2871b4f": "87020623cfc409641c4eab25a229f726",
".git/objects/f3/d0a43cd066584014343264b5114beaace33084": "ebcfd316617f8c89807310d5d62075a1",
".git/objects/f3/c6828fd32e2b77d56c0b51b349d348d89e272f": "f77f9ac03d9c4c8572e18eddaee2e059",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/389d0a7cd8bc966cf6c63b056d932fa7e83c55": "b5af40d102478758fa94efb0efbbbf07",
".git/objects/c9/68f8689f916110cc20832c3d8b3bbc722522e0": "3159cfaa2b9e83304b9a452b9cc37fe5",
".git/objects/fc/6f9e71dfa25177ff68be373dd1d136d5f684d0": "2fbb7f09560a07ce9cdbc59090506506",
".git/objects/f2/40c683366c3b852129fb98ed35018beec06498": "fa292454b6c7f0382daa4c0355e27867",
".git/objects/f5/4e2e5db5cf94fdffaa5e9b78d7f5d8fb174c14": "07dd0ff46ebb7eda2bdc11bc61073533",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/e4/3cd959e13a31e1a4ff4d2911ee8daed065511d": "2759ce94133ffa72d808e9aa137a876f",
".git/objects/fe/f887f1dfc2a6dde671c4d04d80579e3cb4554b": "ce333cb18df624b16473ced91b037e4d",
".git/objects/c8/ddc032f6176c5d7950ee34ca152c9fc35b1eed": "6ff11792cc7871a57598d84f1658cc3b",
".git/objects/c8/d8166408266ce3d43cdf3be05e30560905e0be": "103fd9bad35c5e4371f078f62cada4d6",
".git/objects/ed/1e34b6462c1e9616a00eed2f1582f7e247a104": "fb560b23f52537b95362052ee0c35be5",
".git/objects/c6/e9a6d5fbdc65c0ef1a64a9e184822c66b7696a": "65fc9f5eaf3aed7c0af852962f311b70",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/5b20ac9ecff09f58fdee50c13b894dabc33973": "d0d07127b2cafab58ecab3e2c00275dc",
".git/objects/20/702afe703a9937cc6553a6fc201505a86561f6": "a50234e96f12d255b62ff46dc4dfa660",
".git/objects/18/b1a75bfbef4c58d49305a90e2dd265b50b9cbd": "5b8904d0ace1784bc1caf89f4e594141",
".git/objects/27/348aa73ab0289fe0df7e7dfb80ae608aabfcc7": "c844438b679970f0b47dba600959c6f1",
".git/objects/29/be6b01447a9b99a442a7d72f4c035d62258053": "aac40316b617c224bc11f4cdf143067a",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/f85156b22c506dc3d3428604dfae68e15e91b9": "095e4f630b68db4da9cbb46bdf0f28c8",
".git/objects/89/24a3a10e01c25b13ea918bc01ab3589008172f": "0fefe507bb977a872e07b613d57749a9",
".git/objects/1f/33368c82c4f3007a160508e2f2e8805706d298": "b5593b861fd6180f9f1488797006b5bf",
".git/objects/73/b35f72126879a757f057b1b76ff026232982d6": "70dc8c534e4c9ef5b9888af44a1802ef",
".git/objects/80/9c9b2f07ade91fb7081f4b28058306d7ff8dbe": "5846d8e37d5315a3ec39a4ef1cb1c74a",
".git/objects/80/602eb22c4c5a9780f2c353b59fc00a4cb31509": "b14ce903b695c2a7bb05f0adb210e665",
".git/objects/74/3f5422f402129f11b153cefaafbe15661e1132": "2fef3e6388fa7669709ef4e2a43bdcb8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/63e153b6f24f136d4d5567320e74f68b248b87": "3c120e06a805f50856e2d4abd1fcc145",
".git/objects/8f/cdf7fe22551eb482ca8b704852121f0061463d": "2da10c9b581628df94501d127ffc1c7e",
".git/objects/8a/3767118092add6045ca41a156ff9c24c13911b": "d23789f0d016bba9656f49f5b4450193",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/f38db375597e0cca9fd5081f104420b713d8c5": "5d6b53ab5a06f470dcd2a61cce4868e1",
".git/objects/4c/2b56757ddcf4506cf81bbbcf477fd73c90fbce": "a42df1962ff5ad63942e5d1763c2ff94",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/75/3c8c95ed9df82b59ed1e6b0c9d59d5e467e6d1": "3276c42401bf0d400edea431fa7e31c2",
".git/objects/81/004de707df232255a2fb815d4ec0e6c779d187": "b6e6a8166001f891f0a4e7befaa57ca0",
".git/objects/72/8e9b87fe0a66724bb7c8c8c5edc4c901b775c5": "1a6be9d95256c7994a02ffac8976e0d2",
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
".git/objects/65/e6bcf190641b3b0e86adc362f0078c587215b4": "08af2673c4e90f06c5b420190bb970fc",
".git/objects/3a/14ddd720bd3ee041e028cee15b914afe600ee2": "e0f775524a749bb3d5a8e92eb55d35f1",
".git/objects/98/759f574018bc94f27617f052394c31ad6d68b8": "0856fc421f5ef124d1e1071eb25f51aa",
".git/objects/3f/35c7e73fdecdcbd178dab32f1c1daddb532549": "35c7233cc0ad61837ca010fae34f5a21",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/30/f6dbde3168d00f17d51b2cf2a079f324a639de": "05d6eb7b2f7345bc45e833c5cdbd1635",
".git/objects/5b/5651372e11788a060e6352ab2ee80398ab881d": "88aaa8e52f63218ff362c1578e3688b9",
".git/objects/37/1a1fdd9df7c3a1c0ccb00760cfa528f3b9d650": "d4181fe35e2a7d59dd41c077d200049f",
".git/objects/6d/b9b5199acd9c5f113a3c796689765f2ce4f5f6": "adbc770cc0ee805b1536017088366885",
".git/objects/01/eca16b0839e526f2d3f486bc5be58f7fbe8b95": "9e575f2c53f89c6ac789598b9c12284b",
".git/objects/99/f8d4976d4a349f6d424a5d05e3df0deb4e2597": "afcda61208c67c8aec73cc6ee1a2d298",
".git/objects/99/c35f92487064d4ca42d66fc0c03b516b9cd882": "ed395246908717ecd89c6831cc3fde38",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/e96cb0aec7a426dce1e85aab4731eb445d20ec": "18fd48847a8d8f76bfa168bc0bebfdd1",
".git/objects/d4/99f65994c7b96cd869b7b190527d1214754c1e": "1fb70fbb73cb30d7665f2bff6aaa3b8b",
".git/objects/ba/4698405ddd8a41179f7bf5955ac22770a83ad9": "e38411cef171cec69b888b3f296453ff",
".git/objects/b8/c3f09263e0497bd949700d084965c33e0a0f37": "399d6938c92816408f7477fd82e0e6d0",
".git/objects/b8/7108c40d834aa69dc4500457d48f476646f18e": "985f1793e8235049ba9ecf3e1f85a036",
".git/objects/dc/99f5f2b0a83d420925a20dc54918be11a54e73": "a925bccd115988821a6d32709f9c28e1",
".git/objects/a9/e60cb277dd29ffc5c9067c8cd306bebdd7054b": "616a1c0cb409ba47eeacf683a5a0e9d7",
".git/objects/d2/6f55852cd206a0cc9f0831e8667745be8f84ee": "bc8fa48f761ad3427ab141f43d64b6ee",
".git/objects/d2/80c226be61a81ca9c2f9d442c27d4175336297": "b7794dcfed07e0a471f838e579d059eb",
".git/objects/af/f29406cf7975c0376c61ef94bb52931084f530": "0f575bc028e8431aa955716699fa6967",
".git/objects/af/88474c8b07e6912f3127e5ff9e05ac7c26ba0e": "73220b25af3bb68407accba0b5434882",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/d299f416fd82aba299482ecead313d0d5e49f9": "f01b1aeb747206b6dd56f2d5915e32b3",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/d6e69bd09d0f9566e5b2f09b6621080c9efc13": "ad12f82cacc12b4ab30990f3ef3e0bc4",
".git/objects/de/536036b7d604ee6f6507c0bcd4b8337e9b9b42": "e69732b7d0e58966b0f5870d3189da68",
".git/objects/a6/7528c1ccd4865c8cb58099ed9412bb9096e162": "2c103affe22e9171598b1412a4c79551",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7971729b6f6c74a9641da7a76826013dde1ecb": "256948edd01929b4feacb35c2054e82c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/02c5e169a95d5fdd109eaa2b474aa91551e07a": "8d5b4514aa2b5eb06d55d72990bbad50",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/dc0ec1afe49b399728bfac6b6c218e71814001": "d4eb891eccb8bfa5526b6f95c6f89e36",
".git/objects/e1/00117b016ac81d7d5f0a5509952d7dcebac651": "0b13e9ad10e101dcd9ea9a371bc2ef2d",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/0d19d45a01dfe26637282a95d920a686718154": "4c15acc1f06f1491f9e931774efa3ae9",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/3e0a19df8e8dda387fcfbde2431a3cca45a5ca": "9f698ddf3b03f198277aa8aff6258f1d",
".git/objects/f0/8bfc8ee2da6f08ab5db4909dc96434513cb9eb": "d78c6441f50cf379cec0d2e3dd79bb41",
".git/objects/f0/b0908d4b0e080b287ed0e73d960408fe55419e": "064477627009ee3eb341ac65f579e77b",
".git/objects/f7/01fea817eb64719fee1f1d45091591bd2a4672": "4ab7f63b2a93b8127ebe385dc7412faa",
".git/objects/e8/7e5d6623ffc93aaf547c44534fd82bad4b750f": "28b055ee51efa8c89896cff245d8024a",
".git/objects/e8/f39c9cc2f09da94c0d2d4e86414e0ef99a341d": "07bf5e22137d7d312195ca49d0e09425",
".git/objects/fa/04162c67de343e6ccc78b38c4897550d468a9f": "a79c553f8d582192be40df67cc9b878b",
".git/objects/ff/fc686c1a270531efc087b111c6e78c9f3543a3": "9f767a2b5020a28a030a0fdfe5a423dd",
".git/objects/ff/f1f0e63ee87107468b5cc6e014059a8208ffab": "41597a04b9caeb093df1598126b41654",
".git/objects/ff/d4a86b20e8e826dc179dd3a49af7e358829ea1": "0d3936abd901a71bf1bdee65a1d1ae35",
".git/objects/ff/ef4f96ea4b172ea500e56757a1e906e25239aa": "efc25d0fbe9a4cfadd876086aebe9bfd",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/291363ac6e69fa8e0924d502f117ff85235321": "37283d688895dc21e17f840b681483ec",
".git/objects/f1/1977847542c67ddd4dd3496396908d79d26d4a": "0757d6e7150adbcfff9acb28b9fc74aa",
".git/objects/f1/e94d61dec9636f01c543154f1974eb92f5b94f": "df0d9d60e54c8cdf02a3a9d165f949d2",
".git/objects/ce/6a059e764aaa282b7eec8abcdea8772f16ba0f": "46961412ea622251bb0cc181afe21a87",
".git/objects/ce/bf57c8af8a65b54b904fca4a7283dffb2980de": "398b78e9f8ae4b72ff127738092c98fd",
".git/objects/ce/c82d2b8453faf022d60d77a49b1178408cbf2d": "b25e2c377afc6e0dc9bd4ba79dbe98cb",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/0e082d0d1637cca14c0879974cf12fc1d07ba8": "dc46530747265a8a61fc2412f78e791c",
".git/objects/2c/969fa17083682f768df4de5d5349c42685636a": "f5483f188ec0a3c00fd161e388fe481a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/3248f3877f0d055e592156f1f5caf426a80fa5": "f8688fbc6940b9f0a2c8ed9ff470f865",
".git/objects/1b/5e6b7266056d3d50ba0e8749b6e43526219f39": "fdefdb14bc118e5ec69dfa4e65a002b0",
".git/objects/1b/bb3ce426a6803e065881d72b90bd1beec0fe48": "991124be4db36d556d1f6798d47de010",
".git/objects/48/40ec9940b53ee7dc57015b81f95e8b8f217313": "56d6aa1a996c77bd11a8774213efecfa",
".git/objects/48/a9fe87539831a001eb86dff908ccd29c161c7a": "176c08c14c6418932bb7829584446048",
".git/objects/70/839f0c13023f361ff0ba2a0f0f539ec6fa3b10": "cb2f228ed172e9c523fda7dbc24c6116",
".git/objects/1e/085878d654a5e0e335a49754f93df2750b7980": "68d5ed507abb08971c87fe1a97a23bae",
".git/objects/1e/ba218daa1c16e8f8ba01eb0c43124c296fcca3": "fcd8c49e18f388c347d03672cb764aa3",
".git/objects/24/e032f2786158fec24501108aadfc1db9bec801": "3b9e6465ca9ee8ae1d6f054d19d7a60f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/332318681bbe3220e3627610e815d9d17bbd4f": "331350b369f56e361cf27c1f96cb8f75",
".git/objects/23/3a7b6b873b0418c8464a7f7838ecbcff43ac36": "cd02eaf4807300baa39e11488ace5cb5",
".git/objects/8c/28ff74f76e49fa90aa61cbc164131694056f7d": "475ae3c9b9d5f05f811fcac7987eaad9",
".git/objects/8c/c10a9c1799cf49c469d3e0d347ba7db46a4ee8": "c27c302ecf28d2361a69cea98104bd8a",
".git/objects/1d/20d1314468e76896ffcdf087ac6835da213959": "f6c6c300135bc27191beb0ade630f960",
".git/objects/71/81d7b96372d63e28d2964af5dee9ae5114488e": "1721971e30e942d1afee176adf07a891",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/441a38baeb467c444ca1c6b379f8481330cbc9": "d78d53556323b91e8412adac6239c7f1",
".git/objects/1c/9383643fa9ab1f0ac26917a3c43a4e1d477786": "1b8bbdb070bb5b4deb326b03663ea8c9",
".git/objects/82/46c892ddd9f64db1bf93a6ce57afd1458abe5d": "64f065354d0d4c967f641935a9a15744",
".git/objects/49/73ef9dffa020303d78fbfbbc89be98081fa7e2": "595a23867c09ab95d04398b79eb14d1d",
".git/objects/49/3b562903726f0a79d41f99853607e02c98e79f": "70b16584ff878f5dcc168907ff892657",
".git/objects/2e/c48f96c5f6672337ee22836d1b300f3428676f": "11066ab4ed09ee13e42512e800d5412a",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/8b/25551a97921681334176ee143b41510a117d86": "0fff8d9af2a8616c080c072abc98d2dc",
".git/objects/8b/c2d53ce28288d1004a2ea9670fa4571b0343dc": "96cc8c1bdfea4a759dffd59bfb526f8b",
".git/objects/8b/3cc7103f787af00f2a797335f39d62f676cf59": "d1206bd2d4057f5c5546e3189083fba2",
".git/objects/14/f42a9df74f939f3dfd2ef13e37f54fd59dfb1f": "ff42b9a30b756df4f88f670752959cde",
".git/objects/14/9dc6ee028f59132f85ce83894e6bb1ed0674ad": "f927baab5d338513a03de6305f705b8a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "aa465ca0baa00c45a4909d6db46ac7c5",
".git/logs/refs/heads/master": "aeda795f053866df78c8ea2d9e00b397",
".git/logs/refs/remotes/origin/master": "f8008a4220b96ff68c1cc852b482fcb5",
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
".git/refs/heads/master": "2334673bc218048a1782d573378ea297",
".git/refs/remotes/origin/master": "2334673bc218048a1782d573378ea297",
".git/index": "392c257b3e54601006b76663fe576409",
".git/COMMIT_EDITMSG": "74dba8ca3b7fefd6cda02e7541b77ea5",
".git/FETCH_HEAD": "f144c09d5a80fa2b0f9eaff958672678",
"assets/AssetManifest.json": "fa418374a4c3139d499012c087d07f52",
"assets/NOTICES": "edee1772c808ec49e54d192276a8920f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f1051f5f7b943bd885241da89731c054",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/flutter.png": "157df2c79292d1f009343b4669211d87",
"assets/assets/projects/p5.ss5.png": "6a5dfb3f5f2f1e48871466427d32d132",
"assets/assets/projects/p4.ss1.png": "c48ae9a341ac6778028ce69990210ffc",
"assets/assets/projects/p5.ss4.png": "9062426545d9805a3b4e91276712a703",
"assets/assets/projects/p4.ss3.png": "fbd0f17f0c295c2c8ba42aa36b680855",
"assets/assets/projects/p4.ss2.png": "b295e5f29b228cceca20f333d188ac24",
"assets/assets/projects/p5.ss3.png": "60a14b251028b641ede53e2ada6ec992",
"assets/assets/projects/p5.ss2.png": "0beeab4d3bada1785738a157b02e140b",
"assets/assets/projects/p4.ss5.png": "6c28c1a4790446bbe8d12d8d08b75881",
"assets/assets/projects/p4.ss4.png": "fda37d996f06e338f78f1a3d67650a7f",
"assets/assets/projects/p5.ss1.png": "4807f25c42562aa42591e63981822496",
"assets/assets/projects/p7.ss3.png": "3795ed2628c0110063e8eda497725986",
"assets/assets/projects/p7.ss2.png": "8e85da9f456fd11a9d53d2e3d056af4b",
"assets/assets/projects/p6.ss5.png": "1a17a81900d88e7750f107497088c636",
"assets/assets/projects/p6.ss4.png": "0369d3f294419fabf5086c46f15a681a",
"assets/assets/projects/p7.ss1.png": "704488bd787ccd6cad72371a9029604a",
"assets/assets/projects/p3.ss1": "6b6883fc8cc3a6ab3d95a7399c8c1872",
"assets/assets/projects/p2.ss1": "cda7fa4ca412c41f3b1aec3be2163bca",
"assets/assets/projects/p6.ss1.png": "7b0748744514cdcc334ee86a98b57de0",
"assets/assets/projects/p7.ss4.png": "d4a74ac2f870ed897606e50607497222",
"assets/assets/projects/p6.ss3.png": "467e28eeb9a40d1607f5f91be2913674",
"assets/assets/projects/P1.SS1": "5b590a1ec93a13b070f72884bd5c8381",
"assets/assets/projects/p6.ss2.png": "0e3c0ea5175167d75fa1cba95403ffa3",
"assets/assets/github.png": "f87561b8bb354ef83b09a66e54f70e08",
"assets/assets/java.png": "1b75595146819d5108d883df1080516a",
"assets/assets/medium.png": "37bcdd2919be7fcbdf493eb95c5e0656",
"assets/assets/avatar.png": "41079d2ec7e972beece05f89f7cb9c1c",
"assets/assets/linkedin.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"assets/assets/androidstudio.png": "d57ee5cb73b27b6a85d757e5b928f63f",
"assets/assets/kotlin.png": "4a0ce1c572c04ffa9a4f32b319ef59a6",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "e4281b7c83bd5915051047f98e8f69c8",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/shelf/Uncommitted_changes_before_Update_at_23_2_22,_12_44_PM_%5BDefault_Changelist%5D/shelved.patch": "cfad3bc1e7f7f7b4d73f0e014419e316",
".idea/shelf/Uncommitted_changes_before_Update_at_23_2_22__12_44_PM__Default_Changelist_.xml": "51e930db66ca013959d941ca7a07d5de",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "60bceb5690317356c64298ecd86ca10c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
