const planButtons = document.querySelectorAll('.plan button');
const negativeModalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const mobileNav = document.querySelector('.mobile-nav');

function showModal() {
  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

function showSidebar() {
  backdrop.style.display = 'block';
  mobileNav.style.display = 'block';
}

function hideSidebar() {
  mobileNav.style.display = 'none';
  backdrop.style.display = 'none';
}

if (negativeModalButton) {
  negativeModalButton.addEventListener('click', hideModal);
}

planButtons.forEach((e) => e.addEventListener('click', showModal));
toggleButton.addEventListener('click', showSidebar);
backdrop.addEventListener('click', hideSidebar);
