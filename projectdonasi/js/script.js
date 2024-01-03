// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
});

window.addEventListener('DOMContentLoaded', (event) => {
    const menuCardDonasiEls = document.querySelectorAll('.menu-card-total-donasi');
    const maxWords = 20;
  
    menuCardDonasiEls.forEach((el) => {
      const originalText = el.textContent.trim();
  
      if (originalText.split(' ').length > maxWords) {
        const words = originalText.split(' ').slice(0, maxWords);
        const truncatedText = words.join(' ') + '...';
        el.textContent = truncatedText;
      }
    });
  });