const swiperGallery = new Swiper(".mySwiperGallery", {
    grid: {
        rows: 2,
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            grid: {
                rows: 2,
            },
        },

        768: {
            slidesPerView: 3,
            grid: {
                rows: 2,
            },
        },
    },
});