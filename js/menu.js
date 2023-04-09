const mobileMenuContainerEl = document.querySelector('[data-menu-container]');
const mobileMenuEl = document.querySelector('[data-menu]');
const menuButtonEl = document.querySelector('[data-menu-button]');

mobileMenuEl.addEventListener('click', clickOnMenu);
menuButtonEl.addEventListener('click', toggleMenu);

function toggleMenu() {
  const isMenuOpen = menuButtonEl.getAttribute('aria-expanded') === 'true' || false;
  menuButtonEl.setAttribute('aria-expanded', !isMenuOpen);

  mobileMenuContainerEl.classList.toggle('is-open');
  mobileMenuEl.classList.toggle('is-open');
  menuButtonEl.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen ? 'disablePageScroll' : 'enablePageScroll';
  scrollLock[scrollLockMethod](document.body);
}

// Close mobile menu on click at the link
function clickOnMenu(event) {
  if (event.target.nodeName === 'A') {
    toggleMenu();
  }
}

// Close mobile menu on device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', onChangeOrientation);

function onChangeOrientation(event) {
  if (!event.matches) return;

  mobileMenuContainerEl.classList.remove('is-open');
  mobileMenuEl.classList.remove('is-open');
  menuButtonEl.classList.remove('is-open');

  menuButtonEl.setAttribute('aria-expanded', false);
  scrollLock.enablePageScroll(document.body);
}
