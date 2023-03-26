(() => {
  const htmlEl = document.querySelector('html');
  const bodyEl = document.querySelector('body');
  const backdropEl = document.querySelector('.backdrop');
  const modalWindowEl = document.querySelector('[data-modal]');
  const openModalWindowEl = document.querySelectorAll('[data-modal-open]');

  openModalWindowEl.forEach((element) => {
    element.addEventListener('click', openModal);
  });

  function openModal(event) {
    event.preventDefault();
    disableScroll();
    modalWindowEl.classList.add('is-visible');
    window.addEventListener('keydown', onKeyPress);
    backdropEl.addEventListener('mousedown', onBackdropClick);
  }

  function closeModal() {
    window.removeEventListener('keydown', onKeyPress);
    modalWindowEl.classList.remove('is-visible');
    enableScroll();
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

  function disableScroll() {
    let pagePosition = window.scrollY;
    let pageWidth = bodyEl.clientWidth;

    bodyEl.classList.add('disable-scroll');
    bodyEl.dataset.position = pagePosition;
    bodyEl.style.top = -pagePosition + 'px';

    pageWidth = bodyEl.clientWidth - pageWidth;
    bodyEl.style.paddingRight = pageWidth + 'px';
    htmlEl.style.scrollBehavior = 'auto';
  }

  function enableScroll() {
    let pagePosition = parseInt(bodyEl.dataset.position, 10);

    bodyEl.style.top = 'auto';
    bodyEl.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    bodyEl.removeAttribute('data-position');

    bodyEl.style.paddingRight = '';
    htmlEl.style.scrollBehavior = 'smooth';
  }
})();
