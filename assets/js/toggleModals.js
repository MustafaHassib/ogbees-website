const toggleBookAMeeting = document.getElementById('toggleBookAMeeting');
const close = document.getElementById('close');
const modal = document.querySelector('.modal');
const dimmer = document.querySelector('.dimmer');
const modalWindow = document.querySelector('.modal__window');

gsap.set(modalWindow, { y: -100 });

const modalTl = gsap
  .timeline({ paused: true })
  .to(modal, { autoAlpha: 1, duration: 0.05 })
  .to(dimmer, { opacity: 1, duration: 0.15 })
  .to(modalWindow, { opacity: 1, y: 0, duration: 0.3 }, '<')
  .reverse();

const toggleModal = (e) => {
  e.stopPropagation();
  modalTl.reversed(!modalTl.reversed());
};

toggleBookAMeeting.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
dimmer.addEventListener('click', toggleModal);
