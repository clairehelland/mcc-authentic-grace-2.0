var image = document.querySelector('.hero-image');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalActionNegative = document.querySelector('.modal-action-negative');

// console.dir(backdrop);

function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

// image.onclick = openModal;
// backdrop.onclick = closeModal;
// modalActionNegative.onclick = closeModal;

image.addEventListener('click', openModal);
backdrop.addEventListener('click', closeModal);
modalActionNegative.addEventListener('click', closeModal);


