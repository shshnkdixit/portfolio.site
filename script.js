// tiny mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
});