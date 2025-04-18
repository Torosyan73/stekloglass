const aboutBtn = document.querySelector('.button--more');
const aboutMore = document.querySelector('.about__more-wrapper');

aboutBtn.addEventListener('click', function() {
    aboutMore.classList.toggle('about__more-wrapper--show')
});