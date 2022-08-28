$('.list').on('click', function(e) {
    console.log(e.target.dataset.id);
    탭열기(parseInt(e.target.dataset.id));
})
function 탭열기(구멍) {
    $('.tab-button').removeClass('orange');
        $('.tab-button').eq(구멍).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(구멍).addClass('show');
}