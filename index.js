const slidesContainer = document.getElementById("carouselContainer");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("arrowBefore");
const nextButton = document.getElementById("arrowAfter");

nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector('#hamburger');
    const menuCloseButton = document.querySelector('#menuClose')
    const menu = document.querySelector('.slideOutNav');

    hamburgerButton.addEventListener('click', (e) => {
        menu.classList.add('open');
    });
    menuCloseButton.addEventListener('click', (e) => {
        menu.classList.remove('open');
    });
})