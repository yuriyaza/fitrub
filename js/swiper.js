import Swiper from './swiper-bundle.esm.browser.js';

const swiper = new Swiper('.swiper', {
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
