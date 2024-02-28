$(document).ready(function () {

    var scene = document.querySelectorAll('.parallax');
    if (scene) {
        scene.forEach(element => {
            var parallaxInstance = new Parallax(element)
        });
    }

    // мероприятия
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

    // преимущества
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

    // новости
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
    // партнеры
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

    // анимация
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
    // select2
    $('.select').select2({
        minimumResultsForSearch: Infinity,
        width: 'auto',
    });

    // открытие моб. меню
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

    // календарь
    const datapiskers = document.querySelectorAll('.date_input_input');

    datapiskers.forEach(datapisker => {
        let datapickerGrid;
        if ($(window).width() < 700) {
            datapickerGrid = 1;
        } else {
            datapickerGrid = 2;
        }
        const picker = new easepick.create({
            element: datapisker,
            css: [
                "/vendors/easepick/easepick.css?v=1",
                "/vendors/easepick/customize_easepick.css",
            ],
            setup(picker) {
                picker.on('select', (e) => {
                    this.element.parentNode.classList.add('completed');
                    this.element.parentNode.querySelector('.date_input_clear').classList.remove('hide');
                });
                picker.on('clear', (e) => {
                    this.element.parentNode.querySelector('.date_input_clear')
                });
            },
            lang: 'ru-US',
            format: "DD MMM YYYY",
            zIndex: 100,
            grid: datapickerGrid,
            calendars: datapickerGrid,
            autoApply: false,
            RangePlugin: {
                delimiter: "-"
            },
            AmpPlugin: {
                locale: {
                    resetButton: '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z"/></svg>'
                },
                darkMode: false
            },
            locale: {
                cancel: "Отмена",
                apply: "Применить",
                previousMonth: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.5 25L17.5 20L22.5 15" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                nextMonth: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 25L22.5 20L17.5 15" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                one: 'day',
                other: 'days',

            },
            plugins: [
                "RangePlugin",
                "AmpPlugin"
            ]
        });
        $(".date_input_clear").on("click", function () {
            const pickerBtnParentInput = this.parentNode.querySelector('.date_input_input');
            if (picker.options.element == pickerBtnParentInput) {
                picker.clear();
                this.parentNode.classList.remove('completed');
                $(this).addClass('hide')
            }
        });
    });

    // маскадля телефона
    const phoneInputs = document.querySelectorAll('.form_input[name="tel"]');
    phoneInputs.forEach(input => {
        IMask(input, {
            mask: '+{7}(000)000-00-00'
        })
    });

    // открытие модаки 
    // нужно только поменять значени в data-modal и data-open-modal
    const body = document.querySelector('body');
    let getScrollWidth = () => window.innerWidth - document.documentElement.offsetWidth;
    let browserScrollWidth = getScrollWidth();

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('[data-open-modal]')) {
            e.preventDefault();
            const targetId = target.closest('[data-open-modal]').dataset.openModal;
            const selectedModal = document.querySelector(`[data-modal="${targetId}"]`);
            selectedModal.classList.add('show');
            body.classList.add('locked');
            if (getScrollWidth() == 0) {
                body.style.paddingRight = `${browserScrollWidth}px`;
            }
        }
        if (target.closest('[data-modal-close]')) {
            e.preventDefault();
            let modalOpen = document.querySelector('.modal.show');
            document.querySelector('.modal.show').classList.remove('show');
            body.classList.remove('locked');
            body.style.paddingRight = ``;
        }
        if (target.closest('.modal') && !target.closest('.modal-content')) {
            e.preventDefault();
            let modalOpen = document.querySelector('.modal.show');
            document.querySelector('.modal.show').classList.remove('show');
            body.classList.remove('locked');
            body.style.paddingRight = ``;
        }
    });

});