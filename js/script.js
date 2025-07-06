const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  // Toggle class 'show' saat menuToggle diklik
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  const elements = document.querySelectorAll(
  '.fade-in-scroll, .slide-in-top, .slide-in-left, .slide-in-right'
);

// Example JS: Add simple alert on button clicks
document.querySelector('.btn-menu').addEventListener('click', () => {
  alert('Menu button clicked!');
});
document.querySelector('.btn-maps').addEventListener('click', () => {
  alert('Maps button clicked!');
});
