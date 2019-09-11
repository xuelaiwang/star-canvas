$(function () {
    $('.three-tab .tab-item').click(function () {
        var index =  $('.three-tab .tab-item').index(this);
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        $('.three-content-right .themedesc').eq(index).removeClass('hide').addClass('show').siblings('.themedesc').removeClass('show').addClass('hide');
        $('.three-content-left img').eq(index).removeClass('hide').addClass('show').siblings('img').removeClass('show').addClass('hide');
    })
});