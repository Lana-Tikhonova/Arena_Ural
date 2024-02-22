$(document).ready(function () {
    const swiperEvents = new Swiper(".events_slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    });

    const swiperAdvantages = new Swiper(".advantages_slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const swiperNews = new Swiper(".news_slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            577: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            993: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
        },
    });

    const swiperPartners = new Swiper(".partners_slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            577: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            993: {
                slidesPerView: 5,
                spaceBetween: 32,
            },
        },
    });


    $('.select').select2({
        minimumResultsForSearch: Infinity,
        // dropdownAutoWidth: true,
        width: 'auto',
    });


    $('.mobile_menu_btn').on('click', function () {
        $('.mobile_menu').toggleClass('active');
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest(".pay_item_select").length) {
            $('.pay_item_select').removeClass('open');
        }
    });
});