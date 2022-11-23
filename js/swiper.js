const swiper = document.querySelector(".swiper");
const swiperItems = Array.from(swiper.children);

swiperItems.forEach(function (swiper__slide) {
  console.log(swiper__slide);
  swiper__slide.classlist.add("hidden");

  // Uncaught TypeError: Cannot read properties of undefined (reading 'add')
});
