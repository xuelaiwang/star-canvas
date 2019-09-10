$(function () {
    $('.three-tab .tab-item').click(function () {
        var index =  $('.three-tab .tab-item').index(this);
        $(this).addClass('tab-active').siblings().removeClass('tab-active');
        $('.three-content').eq(index).addClass('show').siblings('.three-content').removeClass('show');
    })
});