const isMobile = window.innerWidth < 576;

const navbarToggler = document.querySelector('#navbar-toggle');
const navbarList = document.querySelector('.navbar');
const navbarItem = document.querySelectorAll('.navbar__wrapper__list__item a');
const body = document.body;
navbarToggler.addEventListener('click', () => {
  console.log('clicked');
  if (navbarList.classList.contains('active-nav')) {
    navbarList.classList.remove('active-nav');
    body.style.overflow = 'auto';
  } else {
    navbarList.classList.add('active-nav');
    body.style.overflow = 'hidden';
  }
});
navbarItem.forEach((btn) => {
  btn.addEventListener('click', () => {
    navbarList.classList.remove('active-nav');
  });
});

window.onbeforeunload = function () {
  window.scrollTo({ top: 0 });
};

gsap.registerPlugin(ScrollTrigger);

function toggleContent(clickedButton) {
  clickedButton.classList.toggle('rotate');

  const allContents = document.querySelectorAll('.whats-included__body');
  allContents.forEach((content) => {
    if (clickedButton.dataset.target === `#${content.id}`) {
      content.style.display =
        content.style.display === 'block' ? 'none' : 'block';
    } else {
      content.style.display = 'none';
    }
  });
}

// Add click event listeners to all toggle buttons
document.querySelectorAll('.toggle-collapse').forEach((button) => {
  button.addEventListener('click', function () {
    toggleContent(this);
  });
});

var macy = Macy({
  container: '.testimonials__list',
  trueOrder: false,
  waitForImages: false,
  margin: 24,
  columns: 3,
  gap: 24,
  breakAt: {
    520: 1,
  },
});
