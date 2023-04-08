const backdropEl = document.querySelector('.backdrop');
const modalWindowEl = document.querySelector('[data-modal]');
const sourceElementEl = document.querySelector('[data-modal-open]');
const closeButtonEl = document.querySelector('[data-modal-close]');

sourceElementEl.addEventListener('click', openModal);
closeButtonEl.addEventListener('click', closeModal);

function openModal(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
  scrollLock.disablePageScroll(document.body);
  modalWindowEl.classList.add('is-visible');
  window.addEventListener('keydown', onKeyPress);
  backdropEl.addEventListener('mousedown', onBackdropClick);
}

function closeModal() {
  scrollLock.enablePageScroll(document.body);
  modalWindowEl.classList.remove('is-visible');
  window.removeEventListener('keydown', onKeyPress);
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
