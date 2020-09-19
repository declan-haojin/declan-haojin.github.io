/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","fb723cd8bf47d49eaaeca67e0509b277"],["/archives/2018/12/index.html","65094e054fc7498f914abab138eb63c1"],["/archives/2018/12/page/2/index.html","32da44c39d2f06a9a6e66c561ea0c932"],["/archives/2018/index.html","529176656a3e44d2ab7b36a53f9f071b"],["/archives/2018/page/2/index.html","5d5f6727230f1bdf063ad760ada29e50"],["/archives/2019/01/index.html","7fb834837f035a1b3fbc87300e777b46"],["/archives/2019/01/page/2/index.html","6d63f0e882df323c4ce077d4dae19e5b"],["/archives/2019/02/index.html","efa60e3c5156c61114de14cc23e09eb6"],["/archives/2019/02/page/2/index.html","ffa6355808bcf642e26b3f2270cb2bd2"],["/archives/2019/03/index.html","1ec66381bccf1cf31e5791e294a0fc86"],["/archives/2019/04/index.html","3e151ad9e53493be92a835914863dc06"],["/archives/2019/04/page/2/index.html","b536b799b8670b44860bb4ba19d2385c"],["/archives/2019/05/index.html","9b1894059c7a3291c3039bc9f2d6c6d6"],["/archives/2019/06/index.html","2baf35759c4051740573d9086308b347"],["/archives/2019/07/index.html","83fa3b65a0aff1d2143bc464016f48ad"],["/archives/2019/08/index.html","1c6bf8b3690d3c5824da8b0bafe03beb"],["/archives/2019/09/index.html","ae854c741d06fba9fd93823d0799d2fa"],["/archives/2019/10/index.html","2d8ca09e4d43592baab96256b32c0543"],["/archives/2019/11/index.html","de2172f5875808d58a4b679b6936d31e"],["/archives/2019/12/index.html","93fe498d352694213158bd61bb285470"],["/archives/2019/index.html","b6367670e78bcfeaba69a6173712ad44"],["/archives/2019/page/2/index.html","f72ffe5eddeb7269888402a31f812054"],["/archives/2019/page/3/index.html","e7a5a8a7084e64f6f8b2b9707a174591"],["/archives/2019/page/4/index.html","c1406de836c374c06014c8f937e824da"],["/archives/2019/page/5/index.html","15254d2879c445a89962e45507551de7"],["/archives/2019/page/6/index.html","d4867ed563eb2b4a689193d5f65da849"],["/archives/2019/page/7/index.html","9b899418845fc626966b49d54bda967d"],["/archives/2020/01/index.html","0ce2ecd8a382cda5dfee1c6489696cbb"],["/archives/2020/02/index.html","476f0e6b12cde9b2d44b96724ec82d14"],["/archives/2020/03/index.html","f162f01269b985efeff4ca4e6365dd0e"],["/archives/2020/04/index.html","6420c8a14b98820d490d44099af6c718"],["/archives/2020/05/index.html","c18b4af418d7ba5c2e31523e056788ad"],["/archives/2020/06/index.html","3bbfaadcc178c3cd304ec4e6be525bb3"],["/archives/2020/07/index.html","65efa2b1fb8be41ff4cb53d14bf126ca"],["/archives/2020/08/index.html","80ea0586858dc179500868c35652bb59"],["/archives/2020/09/index.html","f7c16bd9eb99375e776b675f78740e0b"],["/archives/2020/index.html","d793d9903457d142125f6c4d6214a2c9"],["/archives/2020/page/2/index.html","588f6fff571ec6c4ff92a3aea0641b64"],["/archives/2020/page/3/index.html","18f3a3755a37e9d1da40c421c8ef676f"],["/archives/2020/page/4/index.html","3648c860289d58bd4760c565ceefc6d3"],["/archives/index.html","42f31f88f83cc72737580e7988c9037c"],["/archives/page/10/index.html","47bb9edda934d8cc3b576c2fcdb45b10"],["/archives/page/11/index.html","99b5b773dc3a53ebec6a971e3a6856de"],["/archives/page/12/index.html","6a3e3b4d1b10e2778370790d9d22610f"],["/archives/page/2/index.html","4997404c50a7d4c8344f234ebd126b8a"],["/archives/page/3/index.html","2843edead45e37774aa49dbd66dd23c5"],["/archives/page/4/index.html","47f23279f1f69399bcc80ad8ebfb22cf"],["/archives/page/5/index.html","c43976ee754530e7df33c337bf234114"],["/archives/page/6/index.html","012244c51cec443b8a48389ae53dc08b"],["/archives/page/7/index.html","663808ca00274e84a3f762fc3b1d5724"],["/archives/page/8/index.html","95ed42e4f84f861b5b7fa2095989bfaa"],["/archives/page/9/index.html","49616af8010293d144310cd55f3381b7"],["/categories/2019-VEX-Worlds-Kentucky/index.html","a1c2677b95e6d826809b972a7fba7a54"],["/categories/Computer-Science/index.html","93eaac05737a6da6b09172d4c3d3da66"],["/categories/Computer-Science/page/2/index.html","adecc1901ae75ffa05f27542cd147e13"],["/categories/Computer-Science/page/3/index.html","bcf911c46216e986896cbf8f8a4088f8"],["/categories/Dreaming-Colleges/index.html","97fa82c5981135d913bc9cc592aec167"],["/categories/English-Learning/index.html","674cb0b3645d38abbcfb90d99df59f5a"],["/categories/Final-Exam-July-2020/index.html","ea7facae0a82fd2976ef73ec32487697"],["/categories/Machine-Learning/index.html","9275f279672a36a418981ba67fcb35bd"],["/categories/Machine-Learning/page/2/index.html","ff5d7ef9926bdb05602fd8e7ff1e624b"],["/categories/School-Life/index.html","ed68970a799d5bd3c6596737ff8c8ba2"],["/categories/Tech-Tips/index.html","10ee40182bdd6a29bfc90222a4642137"],["/categories/This-is-life/index.html","4dd80be875ceaf17777c19e305fe08bc"],["/categories/This-is-life/page/2/index.html","d10e5ac70294fa965e7fba803fd11ca4"],["/categories/This-is-life/page/3/index.html","83beeb440abed880c5aefff9d5ccfc50"],["/categories/Tsinghua-GIX-Winter-Camp-Seattle/index.html","dfa61208d48d610c9de05b9b8c55b950"],["/categories/Tsinghua-GIX-Winter-Camp-Seattle/page/2/index.html","8e53ed34f54dc1daec36c2322a096e74"],["/categories/VEX-Robotics/index.html","6b7313e6bbcedd56bb7f7a4dacfb3ba8"],["/categories/index.html","a36567e8b5061d8655e1aded39a85e1d"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/cyberpunk.css","e754a6c5b0b6300aa051ec0dfb4a1d7d"],["/css/default.css","21b80f292d83115d6f1902c0a4e030d3"],["/css/style.css","21b80f292d83115d6f1902c0a4e030d3"],["/github-card-lib/githubcard.js","caa86aadbe330a8ee459a4ef9a1e2bcd"],["/hexo-github/badge.js","4e6e7b242c9bda1a915d03396a80bbb4"],["/hexo-github/octicons/octicons.css","6106fffe1c57ec203cd3d021ee60b2bc"],["/hexo-github/octicons/octicons.eot","9f0a2ff14cf82ade5b0d5d09fc77a484"],["/hexo-github/octicons/octicons.svg","8aa4d1a49fdf65cee44b75c58af991f4"],["/hexo-github/octicons/octicons.ttf","8cc473483ca11c160a7d021b9773e81f"],["/hexo-github/octicons/octicons.woff","5c2faa6e48106b82a0a22652110ba9d5"],["/hexo-github/style.css","b5a2d4967e975077b4f3047cdab71068"],["/images/img-0.png","24cab754fd871ba8a8ca5bbb36cbfe82"],["/images/img-1.png","c1a2c12255049aefec0c9372f9779d64"],["/images/img-2.png","7ef3039dd73871f4699fb978f9b780df"],["/img/alipay.png","54336d82b961a1d1a1e60510e2e85648"],["/img/avatar.png","c68460587f5f90f9b821c0d90db21176"],["/img/favicon.png","f0fe964982619fe9d0a78c91829657ab"],["/img/favicon.svg","efe397c6c8a1d1770fa13cbbaad6bf85"],["/img/logo.png","c1e446cdb9f3e2d3ffe3dd9156800ea1"],["/img/logo.svg","dffd6ab63cb9164ab89bc7b7ef92003c"],["/img/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["/img/razor-bottom-black.svg","3f0f5185dd8f5c8b2145e8388c86bc5c"],["/img/razor-top-black.svg","0d266d3422294d93cecc342bb3757473"],["/img/thumbnail.svg","0a116c9321a125b2cf2ae1dc4896d521"],["/img/wechat.png","c36a3fdbdfe486b56b10562ad8851177"],["/index.html","5ae35bba8e3f814dbe9825a15f3ff244"],["/js/algolia.js","9a5211b37d86edf2eb0314b5f1f64ac4"],["/js/animation.js","f7bf34f2359e9975e85782989c91455a"],["/js/back_to_top.js","93c900ce5f3dc9f28b082c80456c5520"],["/js/google_cse.js","f8df6329b2d17a7f2f6574963857c554"],["/js/insight.js","a6cc440c6d601202680a98fb095adb6b"],["/js/main.js","ca530b2ba040266166ab1e27d0d303ae"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/page/10/index.html","132aafbc451c76e5844ab9fd3437e139"],["/page/11/index.html","6b173c81d3efa33f8c391190f2f8656f"],["/page/12/index.html","13d230fd49025e50ea0a7cb64c7bc456"],["/page/2/index.html","1cddef281fc95df36467ff537a6a7481"],["/page/3/index.html","6f628862508f7783e7ffe0f8c6f3a8e9"],["/page/4/index.html","a391ec9caffeb54eef93cd75abfed10d"],["/page/5/index.html","bcaf54ed0ae180747741138a205afc7a"],["/page/6/index.html","47e9a6cd5670474f01bf46cffc5ba7cf"],["/page/7/index.html","6dfe90516b76ab96f46a232dd73c9512"],["/page/8/index.html","376d3c72a580ca6ab85e13296cac28f2"],["/page/9/index.html","952fa46e69d9adffe5b347665162874d"],["/post/117a3f75.html","fa5d8339b735a52f12302aa83f6c54ff"],["/post/11890150.html","65a0d2a116fd43ed461cb2681926187b"],["/post/13d11e6b.html","0d026fde9592f814b58d368dc939f24b"],["/post/14e886f9.html","911b8c864d15af67a96b7f7a8b839fdb"],["/post/15a24faf.html","9a7c0c7df55067dc0136e9a9c9bfe564"],["/post/1c14e05c.html","02beff3516f4cb1ae66dcf50cd2f8b94"],["/post/1d32f812.html","cf658ad432e0e8ffedbac23f35d55348"],["/post/1da38767.html","9d7ee8636f7396addbac697913e71e16"],["/post/1db3b1db.html","ceefa97beb2ff653908a650e77fb0f16"],["/post/1eb57d90.html","73bb1bfbb47e6de9a164fe10ebed5567"],["/post/257a75e9.html","e3eb366f95a6ab8e8c3924e93737f45c"],["/post/2c188c61.html","a96290f7995efa9a1df55d804efb4bc2"],["/post/2ea79495.html","7ac51f99b50a9acb90520d47090341c1"],["/post/2f73c89a.html","b6557ea79692a0e3ba07262bd54a9ee9"],["/post/2fcb99d3.html","1bc122b59add4a852f70f269939ede2a"],["/post/3006dc10.html","3d28ec2b10953a089528d6331f86cb25"],["/post/30e2219e.html","eff240b2813e900284ac11e1fa666f77"],["/post/3164c3b0.html","29af5cd8a1d22825f4c76ebe92ed5696"],["/post/321202d2.html","e9bb910979368b712fd3de0a6ab71a1e"],["/post/3563b598.html","6ec56314b4f50e9f5eaa526950d017b7"],["/post/3c2f363d.html","76f57ccff4dd4fffb004b44a09996fab"],["/post/3f0e8242.html","e15d312bb08e4c3e8acf3d89fc890e58"],["/post/4292fb6d.html","837b5e5a784bccb3703c57495e9bc6af"],["/post/45546ad6.html","0f3577a8479c98c7a1901be77d3512c3"],["/post/487732a9.html","1eb0d022e8544c455008429d0565ea32"],["/post/495bd200.html","8cbb19cbf26911939d57f6f1835540c7"],["/post/4a9dedd8.html","f105aaf8fe6e380e873a561885897040"],["/post/4b1ee2.html","b0e70e2df0f1e54cf3df5a724e92c693"],["/post/4bc067f3.html","bfa57fef63d4b37916ec02cc3a439961"],["/post/50cab45.html","b902187551d6aad274e6fb764ab82f0e"],["/post/56453a03.html","1c9e00437c2f3b7c4940911a875437cc"],["/post/59936a7a.html","53ff4011bcde8b23b68f2e1b8b766ba9"],["/post/59fe0dc2.html","773fe3db7b9dfbc4e668a77f0b01ecb8"],["/post/5b8202bf.html","b8b47b6525f19e2eed052b074ab92d3c"],["/post/5ba271eb.html","436615d90c5949bd32b0efd961f943bd"],["/post/5c4142d0.html","8fad65cf41fdceaed3903bbe1d065ebf"],["/post/5c938878.html","567b1ed9bf721a1655cea9197fdd6e91"],["/post/5e2bf92c.html","26240fa3be9850ff014385cd154e6acc"],["/post/62b1c847.html","9412aa821708c891049f3f6e2e5d4e1d"],["/post/664b0d77.html","ad5b07e3cd15d64dafdad4e276d61be4"],["/post/6bc5afa1.html","7dd6533ddc1960b5d1aeafca49c31c11"],["/post/7021ea6d.html","051a1ce6df9363a416ada31aa798bf4d"],["/post/71c3969f.html","8491e8c4483f859d1254766457bde51c"],["/post/726dafb.html","f52c3d00ce408df21aac853ecf64825b"],["/post/75ba815e.html","7ab7cd3ac945d77733b8017d8405b6e4"],["/post/773e0771.html","a332a0a954cd15fab2f447843ba37b0e"],["/post/774c2e74.html","c152f8281c89f874f527b8f27295f915"],["/post/805cd4f0.html","9861758d1df1882b78929fa1d3b69191"],["/post/81e9fa3b.html","b332f32b4c4c67b78e36646925983b8c"],["/post/86ae07fe.html","148beec7cd285c2df14132a356d63e1c"],["/post/877aec4e.html","4fe5c2e77f928a27bf80e3b93914c73e"],["/post/87bc2c2a.html","4c42552cb1552092e6f2ccb74e8ec08a"],["/post/8d6a7aaf.html","c7ccb65a53df581dec4b0c2de1012aea"],["/post/8f44d15c.html","5b8b56feb62896a8de9c48866d5ea5b8"],["/post/99424f58.html","0abb133e5d596f3d73df6b14b9270d26"],["/post/9ba26914.html","fb9c5feb71e3ff0df53c4dca84cb2b1b"],["/post/9e2f8b41.html","5bb5b1dd7451d37ebbc2969ac5638cb5"],["/post/a18f7e71.html","5f3d6ccef4d2a58930dca4dd65f86e49"],["/post/a40e06b.html","3fc679138c4dfedcb0d5520a65775fb3"],["/post/a4191e21.html","9c14ff1796cac8f73795e489baf6c250"],["/post/a87953b2.html","22bd3a59db9486fea44ac5d4435da468"],["/post/b3924c34.html","40d3205039e973dd8bb14c452d8d7e9f"],["/post/b5faa5ed.html","b59e63f41c45e03aad33a09d9475e451"],["/post/bfe2ba5b.html","b0774a5f27e45fc0dbde99645f9814ec"],["/post/c0272569.html","9c5315f2a1d91cd2d34f56b66cd9853a"],["/post/c8057ec2.html","b1f3880cce07235ded9e548d2d8b47d9"],["/post/cb744b89.html","4f68399581d2028b612b591a2f25caca"],["/post/d2aae28d.html","cc2c823c12626483a884b8e59e333ee2"],["/post/d3969ed3.html","c3daa6ae66d58e657cd5bc7cf5d7ce04"],["/post/d5664522.html","968c2698c76ff79c309117fb20667886"],["/post/d885ef0.html","8d8240296e1215b1a84dccfb8a852364"],["/post/da6dc731.html","9fd0c27836ee2a0fcbfd26285020c366"],["/post/e4d16dd.html","27c28508c72af06e191744cd771cfd87"],["/post/e577b900.html","85892abf5a237278dac43cd904a394df"],["/post/e792e754.html","ddd2a26b4ae311058d130203d44b0971"],["/post/e8c3a72d.html","4d29ddeb2810867e07c23b8f725eeedd"],["/post/e8c40a94.html","054bdef46a8e23dc635bf5ed6c514e67"],["/post/e928bbd7.html","328b13cb6f26c47482ca308a97297218"],["/post/ed905b75.html","be2db5f738f144356894b4e04c7db639"],["/post/fb1fccf6.html","632a23dd049b27d242092e453d131dd4"],["/sw-register.js","3a1f583384f1c10260e78a145511109c"],["/tags/ACSL/index.html","a73aacf46a606562e0df53fec8888017"],["/tags/AI/index.html","fd1364b04fc386beb7389b07b56bb00a"],["/tags/C/index.html","39b686ae2e0f4bb1079333e618712271"],["/tags/Chrome/index.html","2302ea4fd0d777d2c00cb18a7b614863"],["/tags/DFS/index.html","ea517c0cab6108eb0485de1ab1fb8b22"],["/tags/DP/index.html","76e972f1fe4f27c31e63410848ac8903"],["/tags/Google/index.html","4b7747a1673bd66e7a25242164e0a809"],["/tags/JAVA/index.html","0b79b1aa34bc15ac9535843ee04f326e"],["/tags/Microsoft/index.html","14b63fb21abcdf92a7c69b40639d2ea0"],["/tags/OI/index.html","2d1555a38fc909b6b1a19291b07d3e3c"],["/tags/OI/page/2/index.html","78cbed790d1158b1f3004942f9457e96"],["/tags/OI/page/3/index.html","6795c4277c0389ebdf84d9445016d048"],["/tags/STL/index.html","5ee0a50ec9b76eef01be86ce12927d77"],["/tags/VEX/index.html","be6b5524cb5da9d97ce1b9e9e7a2cba1"],["/tags/activities/index.html","b26704ec557db48788592765e51bbaa6"],["/tags/activity/index.html","227dcc918bab15c01ecaf06a999a7341"],["/tags/admission/index.html","21a77669283ee29d709baddbf7613aa9"],["/tags/ai/index.html","2199e134870fcb583398ba3ee96275d1"],["/tags/algorithm/index.html","3956bfbc1edaccbc5efc475675ef952b"],["/tags/answer/index.html","547334a3ba7b5c132ca10ef261b3bcfd"],["/tags/application/index.html","b25b315db2a42928012c97ab92eb01a4"],["/tags/binary-tree/index.html","c26dea312e291feffc41ee3a42c0e43e"],["/tags/boeing/index.html","89514aa41cbda668957c911954d0982b"],["/tags/book/index.html","e91347218dac4b6eb6493e1a6a9e19ef"],["/tags/chicago/index.html","124189243779a61fb84c2003a9adb338"],["/tags/chinese/index.html","f8352cb6dac289181f51f47f87548ebe"],["/tags/code/index.html","b5e68a18a43a7af414e2478fca2d4c38"],["/tags/code/page/2/index.html","3eabebd88d1f5474424a35d54178f116"],["/tags/college/index.html","c5655fc65a7f0526af865eb1070eafbc"],["/tags/competition/index.html","651fbe81c811b65a004f8902fec153ee"],["/tags/competition/page/2/index.html","b556c0be906193c2f55974f250031ed7"],["/tags/cpp/index.html","9ba564f409f47bf207a94f935494879c"],["/tags/daily/index.html","1b3a54996e655fa30c8e3977b38d904c"],["/tags/dairy/index.html","3ae5969ba25c663e31d07f8d32cac54f"],["/tags/data-structure/index.html","b23f8e37acb47cf5957e9b2efa9b8a1d"],["/tags/debate/index.html","e1b14fa617e8a7286f6485a2c306cf90"],["/tags/dinner/index.html","009d2a59df71ee26f9bdb32fd38ee31f"],["/tags/divide-and-conquer/index.html","dc0b1b6d79183514fa8192f95e869383"],["/tags/educated/index.html","00d47fdee2ecc1e4487308b787e2daa7"],["/tags/equation/index.html","7c535bb41b1a8f95a96e2f55f2c995ea"],["/tags/event/index.html","90acd65980806ae61f3f524ccbd88bfe"],["/tags/exam/index.html","fd7c848a621f1c8f1c47f9113d5d9119"],["/tags/exercise/index.html","9a0f130365db28e45bcac99cfa140bbf"],["/tags/explore/index.html","31b520a2c33b9ae963954fec5e76d71c"],["/tags/flight/index.html","dad53a76a089aee6bd364e2501a39fee"],["/tags/image/index.html","d874fa248e26d92020d0a72dcd3bbff9"],["/tags/images/index.html","4cb76d636d0c4de5feec44e4e5437767"],["/tags/index.html","39f4c57de49f6d2109a1228398e5c52a"],["/tags/journal/index.html","3573ba43da256522e55c7f2bcdce4a2f"],["/tags/kentucky/index.html","2d4e101733feb98b18af1c32ebe36f40"],["/tags/learning/index.html","692019333cf2cb9028bfb7aa4492ee7f"],["/tags/life/index.html","a5bd2fbc2081e981e5878a9d836fa79b"],["/tags/log/index.html","d662a1c17e7931ebd53c8e5a948f006a"],["/tags/markdown/index.html","d6fa3e925816cf83831d36f959723e6c"],["/tags/microsoft/index.html","f29f238a1a61f281a62a67cdfdf5179c"],["/tags/microsoft/page/2/index.html","ae5213e002834316908ecae53fac747f"],["/tags/movie/index.html","4ca090e2796a2213e1d8c58323de299a"],["/tags/neural-network/index.html","60e910cedb95920250a6870aec8213c4"],["/tags/news/index.html","9ba0bfc2fc2fe95eb36819e29d68d905"],["/tags/note/index.html","7de9b1e0d52c59f2406b3ec190230857"],["/tags/note/page/2/index.html","e3d1bd697236edb6f939c348e5ae1f60"],["/tags/notes/index.html","9e2729b48702da7335ce69d1a8a0b427"],["/tags/photo/index.html","0833e5b5003685b0e186aebf5fe839ba"],["/tags/ppt/index.html","d84f1c32b957faec1ac4f6cb7691602d"],["/tags/practice/index.html","294482eee91a04048ef64cc0592dfcf0"],["/tags/presentation/index.html","4b62b433271b0a3a59ae2021245e7294"],["/tags/product/index.html","5204ac6142f4463248777e157e26d9b2"],["/tags/products/index.html","4053f8494c71a2873b1ef68187359d78"],["/tags/project/index.html","4f5241b4ab5d31b2ee05fd4b6e3de5dc"],["/tags/python/index.html","b498c424bdba16e57375a121d47ef0f9"],["/tags/queue/index.html","3ff28af81058e5770d2dfe4552749934"],["/tags/recommendation/index.html","ab9f9ec8b61d72a9aeeb12c36d203457"],["/tags/recursion/index.html","99eec4d2bc363988cd43fe02f03c7218"],["/tags/review/index.html","2c416083c6f21879f4d8ae26a4ba0a39"],["/tags/review/page/2/index.html","8c5f812cafcdfaa66e2b444f3373766e"],["/tags/review/page/3/index.html","3aad327be626a45d8a0fbe3c893ae867"],["/tags/review/page/4/index.html","a377c66f2810f184753e54019786cc2c"],["/tags/robot/index.html","d85187f06dbabdbc5744cad7687d733a"],["/tags/school/index.html","05b5e4ec09bd637abb04a2390ca36e71"],["/tags/school/page/2/index.html","91c83b857a7fb6dd94870613a1c31338"],["/tags/seattle/index.html","1cf5034f8a3828861926c8a91f76cbf1"],["/tags/seattle/page/2/index.html","292d08e991491517e548ca52ec7e0559"],["/tags/software/index.html","49922af1c891dd18a33bdf25da2aed38"],["/tags/speech/index.html","f5542cf34bbaaad0f485b6ac7dac477e"],["/tags/sports/index.html","e80876bd6e49085151877c1771b2768a"],["/tags/team/index.html","bd14fabed8a594bd91d90c506bf13921"],["/tags/tech/index.html","b2d8098466d15c8bee4be4e8de2e0674"],["/tags/tips/index.html","774f6e1cdacbc23d39119afa695ebcbf"],["/tags/toefl/index.html","1b3af7b5e5faa6017a49843af707f72f"],["/tags/travel/index.html","27ba2ffd65868f72d90ea6b1c237236d"],["/tags/tutorial/index.html","2227681ab3f8c4fcb388b850b65c0350"],["/tags/update/index.html","9de46d5664a7547309ae9ff376f2e104"],["/tags/vacation/index.html","00fe20a73fb8e74df868b12ac65ffbcd"],["/tags/vex/index.html","0e9b37124a6fca9db8b4036df07b0ee4"],["/tags/video/index.html","249af79605e4846668846b38cb76aef9"],["/tags/visit/index.html","cde2eae7c57f11fe739129b2a1328266"],["/tags/website/index.html","c93c0db579eb14c8e68e30fafd9c01d5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
