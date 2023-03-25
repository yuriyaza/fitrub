(() => {
  const htmlElement = document.querySelector('html');
  const bodyElement = document.querySelector('body');
  const backdropElement = document.querySelector('.backdrop');
  const modalWindow = document.querySelector('[data-modal]');
  const openModalElements = document.querySelectorAll('[data-modal-open]');

  openModalElements.forEach((element) => {
    element.addEventListener('click', openModal);
  });

  function openModal(event) {
    event.preventDefault();
    disableScroll();
    modalWindow.classList.add('is-visible');
    window.addEventListener('keydown', onKeyPress);
    backdropElement.addEventListener('click', onBackdropClick);
  }

  function closeModal() {
    window.removeEventListener('keydown', onKeyPress);
    modalWindow.classList.remove('is-visible');
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
    let pageWidth = bodyElement.clientWidth;

    bodyElement.classList.add('disable-scroll');
    bodyElement.dataset.position = pagePosition;
    bodyElement.style.top = -pagePosition + 'px';

    pageWidth = bodyElement.clientWidth - pageWidth;
    bodyElement.style.paddingRight = pageWidth + 'px';

    htmlElement.style.scrollBehavior = 'auto';
  }

  function enableScroll() {
    let pagePosition = parseInt(bodyElement.dataset.position, 10);

    bodyElement.style.top = 'auto';
    bodyElement.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    bodyElement.removeAttribute('data-position');

    bodyElement.style.paddingRight = '';

    htmlElement.style.scrollBehavior = 'auto';
  }
})();
