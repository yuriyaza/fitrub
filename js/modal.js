import Swiper from './swiper-bundle.esm.browser.min.js';

const modalWindowEl = document.querySelector('[data-modal]');
const openElementEl = document.querySelector('[data-modal-open]');
const closeButtonEl = document.querySelector('[data-modal-close]');

openElementEl.addEventListener('click', openModal);
closeButtonEl.addEventListener('click', closeModal);

const swiperProductsSettings = {
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
};

const swiperProducts = new Swiper('.swiper-products', swiperProductsSettings);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  scrollLock.disablePageScroll(document.body);
  modalWindowEl.classList.add('is-visible');

  const slideNumber = Number(event.target.dataset.slide) - 1;
  swiperProducts.slideToLoop(slideNumber, 0);

  window.addEventListener('keydown', onKeyPress);
  modalWindowEl.addEventListener('mousedown', onBackdropClick);
}

function closeModal() {
  scrollLock.enablePageScroll(document.body);
  modalWindowEl.classList.remove('is-visible');
  window.removeEventListener('keydown', onKeyPress);
  modalWindowEl.removeEventListener('mousedown', onBackdropClick);
}

function onKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
