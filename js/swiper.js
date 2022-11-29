const swiper = document.querySelector(".swiper");
const swiperItems = Array.from(swiper.children);
const btnNext = document.querySelector("#slider__next");

swiperItems.forEach(function (swiper__slide, index) {
  if (index !== 0) {
    swiper__slide.classList.add("hidden");
  }

  swiper__slide.dataset.index = index;

  swiperItems[0].setAttribute("data-active", "");

  // click

  swiper__slide.addEventListener("click", function () {
    swiper__slide.classList.add("hidden");
    swiper__slide.removeAttribute("data-active");

    let nextSlideIndex;
    if (index + 1 === swiperItems.length) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = index + 1;
    }

    const nextSlide = swiper.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});

btnNext.onclick = function () {
  const currentSlide = swiper.querySelector("[data-active]");
  console.log(currentSlide);
};
