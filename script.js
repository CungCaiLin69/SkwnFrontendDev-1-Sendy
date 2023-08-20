$(document).ready(function () {
    const carousel = $('.carousel');
    const slides = $('.carousel-slide');
    const slideWidth = slides.outerWidth();
    let slideIndex = 0;
  
    function showSlide(index) {
      carousel.css('transform', `translateX(-${index * slideWidth}px)`);
      slideIndex = index;
    }
  
    function nextSlide() {
      if (slideIndex < slides.length - 1) {
        showSlide(slideIndex + 1);
      } else {
        showSlide(0);
      }
    }
  
    function prevSlide() {
      if (slideIndex > 0) {
        showSlide(slideIndex - 1);
      } else {
        showSlide(slides.length - 1);
      }
    }
  
    $('.next-btn').click(nextSlide);
    $('.prev-btn').click(prevSlide);
});
  