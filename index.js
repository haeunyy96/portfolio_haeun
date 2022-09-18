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