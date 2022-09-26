/** Initialize Swiper **/
/** kv_pc */
var swiper = new Swiper("#swiper_kv_pc", {
  centeredSlides: true,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

/** kv_mobile */
var swiper = new Swiper("#swiper_kv_mobile", {
  centeredSlides: true,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

/** VENUS STAR */
var swiper = new Swiper("#swiper_star", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

/** 周年慶特惠組 */
var swiper = new Swiper("#swiper_exclusive_mobile", {
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  speed: 1500,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});

/** YOUR FIRST VENUS */
var swiper = new Swiper("#swiper_venus", {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 20,
  slideToClickedSlide: true,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});