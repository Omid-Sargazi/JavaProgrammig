let currentSlide = 0;
const slides = document.querySelectorAll('.banner-item');
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
