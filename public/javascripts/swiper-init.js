$(document).ready(function() {
    var swiperH = new Swiper('.swiper-container-h', {
        pagination: '.swiper-pagination-h',
        paginationClickable: true,
        spaceBetween: 50
    });
    var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        direction: 'vertical',
        spaceBetween: 50
    });
    var mySwiper = new Swiper('.swiper-container', {
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
    })
});