import $ from 'jquery'; window.jQuery = $; window.$ = $
import Swiper from 'swiper/bundle';
require('./custom-nav.js');
require('./vendors/select2.full.min.js');

document.addEventListener('DOMContentLoaded', () => {

    var galleryThumbs = new Swiper('.thumbs-1', {
        spaceBetween: 5,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-1', {
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });

    $('select').select2({
        placeholder: "Select a state",
        minimumResultsForSearch: -1,
    });
})