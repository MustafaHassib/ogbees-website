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
answers.length !== 0 && answers[0].classList.add('active-tab');
tabButton[0].classList.add('active');

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
