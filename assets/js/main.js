const faqs = [
  {
    question: '1- Lorem ipsum dolor sit amet, Lorem ipsum?',
    answer:
      '1- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur ',
  },
  {
    question: '2- Lorem ipsum dolor sit amet, Lorem ipsum?',
    answer:
      '2- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur ',
  },
  {
    question: '3- Lorem ipsum dolor sit amet, Lorem ipsum?',
    answer:
      '3- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur ',
  },
  {
    question: '4- Lorem ipsum dolor sit amet, Lorem ipsum?',
    answer:
      '4- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur ',
  },
  {
    question: '5- Lorem ipsum dolor sit amet, Lorem ipsum?',
    answer:
      '5- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur ',
  },
];

const isMobile = window.innerWidth < 576;
const tabs = document.querySelector('.faq-container .tabs');
const answersBody = document.querySelector('.faq-container .body');
faqs.forEach((faq, index) => {
  tabs.innerHTML += `
    <li class="tab"> 
    ${faq.question}
    </li>
  `;

  if (isMobile) {
    tabs.innerHTML += `
    <div id='tab${index + 1}' class="content">
    <span>
    ${faq.answer}
    </span>
    </div>
    `;
  } else {
    answersBody.innerHTML += `
    <div id='tab${index + 1}' class="content">
    <span>
    ${faq.answer}
    </span>
    </div>
    `;
  }
});

const answers = document.querySelectorAll('.faq-container .content');
const tabButton = document.querySelectorAll('.faq-container .tabs .tab');
tabButton[0].classList.add('active');
answers.length !== 0 && answers[0].classList.add('active-tab');
tabButton.forEach((button, index) => {
  button.addEventListener('click', () => toggleTab(button, index + 1));
});

function toggleTab(selectedTabId, tabIndex) {
  tabButton.forEach((button) => {
    button.classList.remove('active');
  });
  const selectedTab = selectedTabId;
  selectedTab.classList.add('active');

  answers.forEach((answer) => {
    answer.classList.remove('active-tab');
  });

  const activeTab = document.querySelector(`#tab${tabIndex}`);
  activeTab.classList.add('active-tab');
}

const navbarToggler = document.querySelector('#navbar-toggle');
const navbarList = document.querySelector('.navbar');
const body = document.body;
navbarToggler.addEventListener('click', () => {
  if (navbarList.classList.contains('active-nav')) {
    navbarList.classList.remove('active-nav');
    body.style.overflow = 'auto';
  } else {
    navbarList.classList.add('active-nav');
    body.style.overflow = 'hidden';
  }
});

// Init Gsap and Lenis

window.onbeforeunload = function () {
  window.scrollTo({ top: 0 });
};

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

function toggleContent(clickedButton) {
  clickedButton.classList.toggle('rotate');

  const allButtons = document.querySelectorAll('.toggle-section');
  const allContents = document.querySelectorAll('.whats-included__body');
  console.log(allButtons);
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
