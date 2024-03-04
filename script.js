const navToggle = document.querySelector('#nav-toggle-icon');
const header = document.querySelector('.header');

navToggle.addEventListener('click', () => {
  const visibility = header.getAttribute('data-mobile-visibility');

  if (visibility === 'false') {
    header.setAttribute('data-mobile-visibility', 'true');
    navToggle.src = 'images/icon-close.svg';
  } else {
    header.setAttribute('data-mobile-visibility', 'false');
    navToggle.src = 'images/icon-hamburger.svg';
  }
});
