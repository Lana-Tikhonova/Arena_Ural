$(document).ready(function () {

    var scene = document.querySelectorAll('.parallax');
    if (scene) {
        scene.forEach(element => {
            var parallaxInstance = new Parallax(element)
        });
    }

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
            1101: {
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
        loop: true,
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
            1101: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
        },
    });

    const swiperPartners = new Swiper(".partners_slider", {
        slidesPerView: 'auto',
        spaceBetween: 52,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            577: {
                loop: false,
                centeredSlides: false,
                slidesPerView: 4,
                spaceBetween: 24,
            },
            993: {
                loop: false,
                centeredSlides: false,
                slidesPerView: 5,
                spaceBetween: 32,
            },
        },
    });

    let offset
    if ($(window).width() > 576) {
        offset = 100;
    } else {
        offset = 0;
    }
    AOS.init({
        easing: 'ease-in-out',
        delay: 100,
        once: true,
        duration: 700,
        offset: offset,
    });
    $('.select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto',
    });

    $('.mobile_menu_btn').on('click', function () {
        $('.header').toggleClass('active');
        $(this).toggleClass('active');
    })

    // function scaleBlock(container, block, event) {
    //     const block_width1 = container.offsetWidth + 1000;
    //     const rect = container.getBoundingClientRect();
    //     const centerX = rect.left + rect.width / 2;
    //     const centerY = rect.top + rect.height / 2;
    //     const deltaX = event.clientX - centerX;
    //     const deltaY = event.clientY - centerY;
    //     const scale = 1 + Math.abs(deltaX + deltaY) / block_width1;

    //     block.style.transform = `scale(${scale})`;
    // }


    // const blockList = document.querySelectorAll('.scale_block');
    // const blocksItem = document.querySelectorAll('.home_image img');


    // blockList.forEach((item, index) => {
    //     console.log(item, blocksItem[index]);
    //     item.addEventListener('mousemove', (event) => {
    //         scaleBlock(item, blocksItem[index], event);
    //     })
    // })

});