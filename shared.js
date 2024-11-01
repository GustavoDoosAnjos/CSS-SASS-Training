const planButtons = document.querySelectorAll('.plan button');
const negativeModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const mobileNav = document.querySelector('.mobile-nav');

function showModal() {
  modal.classList.add('open');
  backdrop.style.display = 'block';
}

function hideModal() {
  modal.classList.remove('open');
  backdrop.style.display = 'none';
}

function showSidebar() {
  backdrop.style.display = 'block';
  mobileNav.classList.add('open');
}

function hideSidebar() {
  backdrop.style.display = 'none';
  mobileNav.classList.remove('open');
}

if (negativeModalButton) {
  negativeModalButton.addEventListener('click', hideModal);
}

planButtons.forEach((e) => e.addEventListener('click', showModal));
toggleButton.addEventListener('click', showSidebar);
backdrop.addEventListener('click', hideSidebar);
backdrop.addEventListener('click', hideModal);
