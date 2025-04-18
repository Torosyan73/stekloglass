let popupSwiper;

document.querySelectorAll('.swiper-slide__img').forEach((img, index) => {
    img.addEventListener('click', () => {
        document.getElementById('popup').style.display = 'block';
        document.body.classList.add('popup-open');

        if (!popupSwiper) {
            popupSwiper = new Swiper('.popup-swiper', {
                loop: true,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                speed: 300,
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
            });
        }
        popupSwiper.slideToLoop(index, 0);
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove('popup-open');
});

document.getElementById('popup').addEventListener('click', (e) => {
    if (e.target.id === 'popup') {
        document.getElementById('popup').style.display = 'none';
        document.body.classList.remove('popup-open');
    }
});




