const steps = document.querySelector('.steps');
ScrollTrigger.create({
  trigger: '.steps',
  start: 'top',
  // endTrigger: ".testimonials",
  end: `+=${steps.offsetHeight} 50%`,
  pin: true,
  toggleActions: 'play none none reverse',
  pinSpacing: false,
  scrub: 1,
  ease: 'power3.ease',
});

gsap.set('.title-1', { xPercent: -2000, y: -100 }, '<');
gsap.set('.title-2', { xPercent: 2000, y: -100 }, '<');
gsap.set('.title-3', { xPercent: -2000, y: -100 }, '<');
gsap.set('.title-4', { xPercent: 2000, y: -100 }, '<');
gsap.set('.steps__bg', { height: '40vh', yPercent: 150 }, '<');

gsap
  .timeline({
    duration: 0.1,
    scrollTrigger: {
      trigger: '.step-1',
      start: '-50%',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  })
  .to('.step-how .main_title', { color: '#ffcf01', opacity: 0 })
  .to(
    '.steps__bg',
    { height: '100vh', yPercent: 0, transformOrigin: 'bottom' },
    '<'
  )
  .to(
    '.desc-1',
    {
      textContent:
        'Choose the package that best fits your needs, or customize one to perfectly suit your business goals.',
    },
    '<'
  )
  .from('.desc-1', { xPercent: 130 }, '<')
  .to('.title-1', { xPercent: 0, y: 0 }, '<')
  .fromTo(
    '#step-video',
    { xPercent: 500, autoAlpha: 0 },
    { xPercent: 10, autoAlpha: 1 },
    '<'
  );

gsap
  .timeline({
    duration: 0.1,
    scrollTrigger: {
      trigger: '.step-2',
      start: '-50%',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  })

  .to('.steps__bg', { height: 0, transformOrigin: 'bottom' }, '<')
  .to(
    '.desc-1',
    {
      xPercent: 155,
      textContent:
        'Answer questions and share insights about your brand & products. So, we can understand what makes you stand out & create a narrative that reflects your unique selling points!',
    },
    '>'
  )
  .to(' #step-video', { xPercent: -70 }, '<')
  .to('.title-1', { x: -2000, y: -100 }, '<')
  .to(
    '.steps__bg',
    { backgroundColor: '#ff397e', xPercent: 100, duration: 0 },
    '<'
  )
  .to('.steps__bg', { height: '100vh', transformOrigin: 'bottom' }, '<')
  .to('.title-2', { right: '25%', xPercent: -25, y: 0 }, '<');
gsap
  .timeline({
    duration: 0.1,
    scrollTrigger: {
      trigger: '.step-3',
      start: '-50%',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  })
  .to('.steps__bg', { height: 0, transformOrigin: 'bottom' }, '<')

  .to(
    '.desc-1',
    {
      color: '#ff397e',
      xPercent: 0,
      textContent:
        'Our content creator will be shooting, editing, and polishing scripts into ad creatives that are primed for launch!',
    },
    '>'
  )
  .to(' #step-video', { xPercent: 10 }, '<')
  .to('.title-2', { xPercent: 2000, y: -100 }, '<')
  .to(
    '.steps__bg',
    { backgroundColor: '#F3F8FF', xPercent: 0, duration: 0 },
    '<'
  )
  .to('.steps__bg', { height: '100vh', transformOrigin: 'bottom' }, '<')
  .to('.title-3 > *', { color: '#ff397e' }, '<')
  .to('.title-3', { xPercent: 0, y: 0 }, '<');

gsap
  .timeline({
    duration: 0.1,
    scrollTrigger: {
      trigger: '.step-4',
      start: '-50%',
      end: 'bottom center',
      toggleActions: 'play none none reverse',
    },
  })
  .to('.desc-1', { color: '#ffffff' }, '>')
  .to(
    '.steps__bg',
    { xPercent: 100, height: 0, backgroundColor: '#2F9BFF', duration: 0 },
    '<'
  )
  .to(
    '.desc-1',
    {
      xPercent: 155,
      textContent:
        'Time to launch you Ad creatives, and for people to know the story!',
    },
    '<'
  )
  .to(' #step-video', { xPercent: -75 }, '<')
  .to('.title-3', { x: -2000, y: -100 }, '<')
  .to('.steps__bg', { height: '100vh', transformOrigin: 'bottom' }, '>')
  .to('.title-4', { xPercent: -50, left: '50%', y: 0 }, '<');

ScrollTrigger.clearScrollMemory('auto');
