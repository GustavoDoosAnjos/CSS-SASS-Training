function showModal() {
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');

  modal.style.display = 'block';
  backdrop.style.display = 'block';
}

function hideModal() {
  const modal = document.querySelector('.modal');
  const backdrop = document.querySelector('.backdrop');

  modal.style.display = 'none';
  backdrop.style.display = 'none';
}

const planButtons = document.querySelectorAll('.plan button');
const negativeModalButton = document.querySelector('.modal__action--negative');

planButtons.forEach((e) => e.addEventListener('click', showModal));
negativeModalButton.addEventListener('click', hideModal);
