setTimeout(function () {
  openModal();
}, 3000);

// Variable declarations

// The following variables will be used to control the modal
const heroOverlay = document.querySelector('.hero-overlay');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalActionNegative = document.querySelector('.modal-action-negative');

// The following variables will be used to turn the hamburger menu on/off 
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavItemLinkList = document.querySelectorAll('.mobile-nav-item-link');

//Function declarations

function openModal() {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

function displayMobileNav() {
  mobileNav.style.display = 'block';
}

function hideMobileNav() {
  mobileNav.style.display = 'none';
}

// heroOverlay.addEventListener('click', openModal);

modalActionNegative.addEventListener('click', closeModal);

toggleButton.addEventListener('click', function() {
  backdrop.style.display = 'block';
  displayMobileNav();
});

mobileNavItemLinkList.forEach(function(a){
  a.addEventListener('click', function () {
    //  mobileNav.style.display = 'none';
    hideMobileNav();
    closeModal();
  })
});

backdrop.addEventListener('click', function() {
  // mobileNav.style.display = 'none';
  hideMobileNav();
  closeModal();
});

mobileNav.addEventListener('click', function() {
  mobileNavItemLinks.addClassName('hide-nav');
});






//Global Event Handlers
// image.onclick = openModal;
// backdrop.onclick = closeModal;
// modalActionNegative.onclick = closeModal;
