// The following variables will be used to control the modal
var image = document.querySelector('.hero-image');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalActionNegative = document.querySelector('.modal-action-negative');

// The following variables will be used to turn the hamburger menu on/off 
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// The following variables refer to the links in the mobile menu
var mobileNavItemLink = document.querySelector('.mobile-nav-item-link');

// console.dir(backdrop);

function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

function displayMobileMenu() {
  mobileNav.style.display = 'block';
}

// image.onclick = openModal;
// backdrop.onclick = closeModal;
// modalActionNegative.onclick = closeModal;

image.addEventListener('click', openModal);

backdrop.addEventListener('click', function() {
  mobileNav.style.display = 'none';
  closeModal();
});

mobileNavItemLink.addEventListener('click', function() {
  mobileNav.style.display = 'none';
  closeModal();
});

modalActionNegative.addEventListener('click', closeModal);

toggleButton.addEventListener('click', function() {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
