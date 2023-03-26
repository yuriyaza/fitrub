import Swiper from './swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper-products', {
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
  },

  mousewheel: {
    eventsTarget: 'body',
  },

  keyboard: {
    enabled: true,
  },
});
