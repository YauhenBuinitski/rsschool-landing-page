document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("slider-track");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");
  const dots = document.querySelectorAll(".slider__dot");
  const totalSlides = 3;
  let currentIndex = 0;

  function updateSlider() {
    track.style.transform = "translateX(-" + currentIndex * 100 + "%)";
    dots.forEach(function (dot, index) {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});
