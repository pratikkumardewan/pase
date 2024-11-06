let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const slideInterval = 3000; // 3 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function startSlideshow() {
  showSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides.length;
  setTimeout(startSlideshow, slideInterval);
}

startSlideshow();
