import Swiper from './swiper-bundle.esm.browser.min.js';

const swiperFeaturesSettings = {
  loop: true,
  effect: 'coverflow',
  coverflowEffect: {
    depth: 500,
    scale: 0.8,
    slideShadows: false,
  },
  speed: 3000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
};

const swiperFeatures = new Swiper('.swiper-features', swiperFeaturesSettings);
