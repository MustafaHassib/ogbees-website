gsap.set('.video-1', { scale: 1.5, xPercent: 50, y: 150 });
gsap.set('.video-2', { scale: 5, xPercent: 100, y: -100 });
gsap.set('.video-3', { scale: 1.5, xPercent: 170, y: 150 });

gsap
  .timeline({
    // duration: 1,
    toggleActions: 'play none play reverse',
  })
  // .to('.video-1', { yPercent: -50, xPercent: 80 })
  .to('.video-2', { duration: 1, scale: 1, yPercent: -120, xPercent: 110 })
  .to('.video-2', { scale: 1, yPercent: -60 }, '>')
  .to('.video-2', { scale: 2 }, '>')
  .to('.video-1', { yPercent: -80 }, '<')
  .to('.video-3', { yPercent: -80 }, '<');

gsap
  .timeline({
    duration: 0.1,
    scrollTrigger: {
      trigger: '#statistics',
      start: '-10%',
      toggleActions: 'play none play reverse',
    },
  })
  .from('.fucshia_bg', { opacity: 0, yPercent: -100, xPercent: -100 }, '<')
  .from('.light_blue_bg', { opacity: 0, yPercent: 100, xPercent: -100 }, '<')
  .from('.pink_bg', { opacity: 0, yPercent: -100, xPercent: 100 }, '<')
  .from('.purple_bg', { opacity: 0, yPercent: 100, xPercent: 100 }, '<');
