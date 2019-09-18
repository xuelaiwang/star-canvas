require('../css/index.less');
$(function () {
    
    //加载svga动画
    var player4 = new SVGA.Player('#svg_one');
    var parser4 = new SVGA.Parser('#svg_one'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    parser4.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/svg_one.svga', function (videoItem) {
        player4.setVideoItem(videoItem);
        player4.startAnimation();
    })
    // 版块4
    var player = new SVGA.Player('#svg_left');
    var parser = new SVGA.Parser('#svg_left'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    parser.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/four_left.svga', function (videoItem) {
        player.setVideoItem(videoItem);
        player.startAnimation();
    })
    var player1 = new SVGA.Player('#svg_right');
    var parser1 = new SVGA.Parser('#svg_right'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    parser1.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/four_right.svga', function (videoItem) {
        player1.setVideoItem(videoItem);
        player1.startAnimation();
    })
    //了解轻校
    var player6 = new SVGA.Player('#know_svg1');
    var parser6 = new SVGA.Parser('#know_svg1'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    parser6.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/know_1.svga', function (videoItem) {
        player6.setVideoItem(videoItem);
        player6.startAnimation();
    })
    var player7 = new SVGA.Player('#know_svg2');
    var parser7 = new SVGA.Parser('#know_svg2'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    parser7.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/know_2.svga', function (videoItem) {
        player7.setVideoItem(videoItem);
        player7.startAnimation();
    })
    var player8 = new SVGA.Player('#know_svg3');
    var parser8 = new SVGA.Parser('#know_svg3'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
    parser8.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/know_3.svga', function (videoItem) {
        player8.setVideoItem(videoItem);
        player8.startAnimation();
    })
    $('.three-tab .tab-item').click(function () {
        var index =  $('.three-tab .tab-item').index(this);
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        $('.three-content-right .themedesc').eq(index).removeClass('hide').addClass('show').siblings('.themedesc').removeClass('show').addClass('hide');
        $('.three-content-left img').eq(index).removeClass('hide').addClass('show').siblings('img').removeClass('show').addClass('hide');
    })
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
        on:{
            slideChange: function(){
                console.log('改变了');
            },
        },
    });
    if (swiper) {
        swiper.autoplay.stop();
    }
    $('#dowebok').fullpage({
        navigation: true,
        scrollBar: false,
        recordHistory:false,
        lockAnchors:true,
        css3: true,
        // scrollOverflow: true,
        afterRender: function () {
            $('.header').addClass("head_fixed");
        },
        onLeave: function(index, nextIndex, direction){
            switch(nextIndex) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    swiper.autoplay.stop();
                    swiper.slideTo(0);
                    break;
                case 6:
                    var player2 = new SVGA.Player('#svg_six');
                    var parser2 = new SVGA.Parser('#svg_six'); // 如果你需要支持 IE6+，那么必须把同样的选择器传给 Parser。
                    parser2.load('https://cdn.img.shangjiadao.cn/qingxiao/webindex/image/logo.svga', function (videoItem) {
                        player2.loops = 1;
                        player2.clearsAfterStop = false;
                        player2.setVideoItem(videoItem);
                        player2.startAnimation(1);
                        player2.onFrame((i) => {
                        if (i >= 78) {
                            player2.stopAnimation();
                        }
                        });
                    })
                    break;
                case 7:
                    break;
                default:
                    break;
            }
        },
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            // $('.section').eq(index - 1).addClass('selected').siblings('.section').removeClass('selected');
            switch(index) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    swiper.autoplay.start();
                    break;
                case 6:
                    var arr = [];
                    (function(){
                        $('#productNumber .count-item').each(function(i, dom) {
                        var iDom = $(dom).find('b'),
                            decimals = 0,
                            sum = iDom.data('sum');
                        //初始化传参，参数为上面注释中的参数
                        arr.push(new CountUp(iDom.attr('id'), 0, sum, decimals, 4, {
                            useEasing: true,//效果
                            separator: ','//数字分隔符
                        }));
                        arr[i].start();
                        });
                    })()
                    
                    break;
                case 7:
                    
                    break;
                default:
                    break;
            }
        }
    });

    $('#about').click(function () {
        $.fn.fullpage.moveTo(7);
    })
    // $('#price').click(function () {
    //     $.fn.fullpage.moveTo(7);
    // })
    function getRequest(){
        var url=location.search;
        var jsonList={};
        if(url.indexOf("?")!=-1){
            var str=url.slice(url.indexOf("?")+1);
            var strs=str.split("&");
            for(var i=0;i<strs.length;i++){
                jsonList[strs[i].split("=")[0]]=strs[i].split("=")[1];
            }
        }
        return jsonList;
    }
    var locationSearch = getRequest();
    if (locationSearch.page) {
        $.fn.fullpage.moveTo(Number(locationSearch.page));
    }
});