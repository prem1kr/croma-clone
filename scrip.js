const carousel = document.getElementById('carousel');
const carouselInner = carousel.querySelector('.carousel-inner');
const indicators = carousel.querySelectorAll('.carousel-indicator');
let currentIndex = 0;
const totalSlides = carouselInner.children.length;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

function autoScroll() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

setInterval(autoScroll, 3000);

