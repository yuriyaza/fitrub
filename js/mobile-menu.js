const mobileMenuContainer = document.querySelector('[data-menu-container]');
const mobileMenu = document.querySelector('[data-menu]');
const openMenuButton = document.querySelector('[data-menu-open]');
// const closeMenuButton = document.querySelector('[data-menu-close');

mobileMenu.addEventListener('click', clickOnMenu);
openMenuButton.addEventListener('click', toggleMenu);
// closeMenuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  const isMenuOpen = openMenuButton.getAttribute('aria-expanded') === 'true' || false;
  openMenuButton.setAttribute('aria-expanded', !isMenuOpen);

  mobileMenuContainer.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  openMenuButton.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen ? 'disablePageScroll' : 'enablePageScroll';
  scrollLock[scrollLockMethod](document.body);
}

// Close mobile menu on clicking at the link
function clickOnMenu(event) {
  if (event.target.nodeName === 'A') {
    toggleMenu();
  }
}

// Close mobile menu on wider screens if device orientation changes
window.matchMedia('(min-width: 768px)').addEventListener('change', onChangeOrientation);

function onChangeOrientation(event) {
  if (!event.matches) return;

  mobileMenuContainer.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
  openMenuButton.classList.remove('is-open');

  openMenuButton.setAttribute('aria-expanded', false);
  scrollLock.enablePageScroll(document.body);
}
