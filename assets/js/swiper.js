import Swiper, {EffectCoverflow} from 'swiper';

Swiper.use([EffectCoverflow]);
// eslint-disable-next-line no-new
new Swiper('swiper-service', {
  effect: "coverflow",
  speed: 800,
  loop: true,
  loopAdditionalSlides: 30,
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  roundLengths: true,

  coverflowEffect: {
    rotate: 0,
    depth: 122,
    slideShadows: false,
    shiftX: 166,
  },

  breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:0,
    centeredSlides: false,
    coverflowEffect: {
      depth:0,
    }
  },

    600: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    666: {
      slidesPerView: 3,
    },

    964: {
      slidesPerView: 4,
    },
    1230: {
      slidesPerView: 4.1,
      spaceBetween: 10,
    },
  },
});
