/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/index.less":
/*!************************!*\
  !*** ./css/index.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./css/index.less?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../css/index.less */ \"./css/index.less\");\r\n$(function () {\r\n    \r\n    //加载svga动画\r\n    var player4 = new SVGA.Player('#svg_one');\r\n    var parser4 = new SVGA.Parser('#svg_one'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。\r\n    parser4.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/svg_one.svga', function (videoItem) {\r\n        player4.setVideoItem(videoItem);\r\n        player4.startAnimation();\r\n    })\r\n    // 版块4\r\n    var player = new SVGA.Player('#svg_left');\r\n    var parser = new SVGA.Parser('#svg_left'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。\r\n    parser.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/four_left.svga', function (videoItem) {\r\n        player.setVideoItem(videoItem);\r\n        player.startAnimation();\r\n    })\r\n    var player1 = new SVGA.Player('#svg_right');\r\n    var parser1 = new SVGA.Parser('#svg_right'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。\r\n    parser1.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/four_right.svga', function (videoItem) {\r\n        player1.setVideoItem(videoItem);\r\n        player1.startAnimation();\r\n    })\r\n    //了解轻校\r\n    var player6 = new SVGA.Player('#know_svg1');\r\n    var parser6 = new SVGA.Parser('#know_svg1'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。\r\n    parser6.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/know_1.svga', function (videoItem) {\r\n        player6.setVideoItem(videoItem);\r\n        player6.startAnimation();\r\n    })\r\n    var player7 = new SVGA.Player('#know_svg2');\r\n    var parser7 = new SVGA.Parser('#know_svg2'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。\r\n    parser7.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/know_2.svga', function (videoItem) {\r\n        player7.setVideoItem(videoItem);\r\n        player7.startAnimation();\r\n    })\r\n    var player8 = new SVGA.Player('#know_svg3');\r\n    var parser8 = new SVGA.Parser('#know_svg3'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。\r\n    parser8.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/know_3.svga', function (videoItem) {\r\n        player8.setVideoItem(videoItem);\r\n        player8.startAnimation();\r\n    })\r\n    $('.three-tab .tab-item').click(function () {\r\n        var index =  $('.three-tab .tab-item').index(this);\r\n        $(this).addClass('tab-active').siblings().removeClass('tab-active');\r\n        $('.three-content-right .themedesc').eq(index).removeClass('hide').addClass('show').siblings('.themedesc').removeClass('show').addClass('hide');\r\n        $('.three-content-left img').eq(index).removeClass('hide').addClass('show').siblings('img').removeClass('show').addClass('hide');\r\n    })\r\n    var swiper = new Swiper('.swiper-container', {\r\n        spaceBetween: 30,\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            clickable: true,\r\n        },\r\n        autoplay: {\r\n            delay: 5000,\r\n        },\r\n        on:{\r\n            slideChange: function(){\r\n                console.log('改变了');\r\n            },\r\n        },\r\n    });\r\n    if (swiper) {\r\n        swiper.autoplay.stop();\r\n    }\r\n    $('#dowebok').fullpage({\r\n        navigation: true,\r\n        scrollBar: false,\r\n        recordHistory:false,\r\n        lockAnchors:true,\r\n        css3: true,\r\n        // scrollOverflow: true,\r\n        afterRender: function () {\r\n            $('.header').addClass(\"head_fixed\");\r\n        },\r\n        onLeave: function(index, nextIndex, direction){\r\n            switch(nextIndex) {\r\n                case 1:\r\n                    break;\r\n                case 2:\r\n                    break;\r\n                case 3:\r\n                    break;\r\n                case 4:\r\n                    break;\r\n                case 5:\r\n                    swiper.autoplay.stop();\r\n                    swiper.slideTo(0);\r\n                    break;\r\n                case 6:\r\n                    var player2 = new SVGA.Player('#svg_six');\r\n                    var parser2 = new SVGA.Parser('#svg_six'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。\r\n                    parser2.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/logo.svga', function (videoItem) {\r\n                        player2.loops = 1;\r\n                        player2.clearsAfterStop = false;\r\n                        player2.setVideoItem(videoItem);\r\n                        player2.startAnimation(1);\r\n                        player2.onFrame((i) => {\r\n                        if (i >= 78) {\r\n                            player2.stopAnimation();\r\n                        }\r\n                        });\r\n                    })\r\n                    break;\r\n                case 7:\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        },\r\n        afterLoad: function(anchorLink, index){\r\n            var loadedSection = $(this);\r\n            // $('.section').eq(index - 1).addClass('selected').siblings('.section').removeClass('selected');\r\n            switch(index) {\r\n                case 1:\r\n                    break;\r\n                case 2:\r\n                    break;\r\n                case 3:\r\n                    break;\r\n                case 4:\r\n                    break;\r\n                case 5:\r\n                    swiper.autoplay.start();\r\n                    break;\r\n                case 6:\r\n                    var arr = [];\r\n                    (function(){\r\n                        $('#productNumber .count-item').each(function(i, dom) {\r\n                        var iDom = $(dom).find('b'),\r\n                            decimals = 0,\r\n                            sum = iDom.data('sum');\r\n                        //初始化传参，参数为上面注释中的参数\r\n                        arr.push(new CountUp(iDom.attr('id'), 0, sum, decimals, 4, {\r\n                            useEasing: true,//效果\r\n                            separator: ','//数字分隔符\r\n                        }));\r\n                        arr[i].start();\r\n                        });\r\n                    })()\r\n                    \r\n                    break;\r\n                case 7:\r\n                    \r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        }\r\n    });\r\n\r\n    $('#about').click(function () {\r\n        $.fn.fullpage.moveTo(7);\r\n    })\r\n    // $('#price').click(function () {\r\n    //     $.fn.fullpage.moveTo(7);\r\n    // })\r\n    function getRequest(){\r\n        var url=location.search;\r\n        var jsonList={};\r\n        if(url.indexOf(\"?\")!=-1){\r\n            var str=url.slice(url.indexOf(\"?\")+1);\r\n            var strs=str.split(\"&\");\r\n            for(var i=0;i<strs.length;i++){\r\n                jsonList[strs[i].split(\"=\")[0]]=strs[i].split(\"=\")[1];\r\n            }\r\n        }\r\n        return jsonList;\r\n    }\r\n    var locationSearch = getRequest();\r\n    if (locationSearch.page) {\r\n        $.fn.fullpage.moveTo(Number(locationSearch.page));\r\n    }\r\n});\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });