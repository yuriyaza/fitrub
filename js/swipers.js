import Swiper from './swiper-bundle.esm.browser.min.js';

const swiperFeatures = new Swiper('.swiper-features', {
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

const swiperProducts = new Swiper('.swiper-products', {
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

const productsListEl = document.querySelector('.products-list');
productsListEl.addEventListener('click', setProductsSlideNumber);

function setProductsSlideNumber(event) {
  if (event.target.nodeName === 'IMG') {
    const slideNumber = Number(event.target.dataset.slide) - 1;
    swiperProducts.slideToLoop(slideNumber, 0);
  }
}
