const swiperReview = new Swiper(".mySwiperReview", {
    spaceBetween: 40,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        dinamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    keyboard: {
        enabled: true,
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        },
    },
});