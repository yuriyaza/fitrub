import Swiper from './swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper-features', {
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    depth: 500,
    scale: 0.8,
  },
  speed: 3000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
