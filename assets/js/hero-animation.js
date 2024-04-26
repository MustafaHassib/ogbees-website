document.addEventListener('DOMContentLoaded', function () {
  let mm = gsap.matchMedia();
  mm.add('(max-width: 799px)', () => {
    gsap.set('.video-1', { opacity: 0, scale: 1, xPercent: 0, y: 150 });
    gsap.set('.video-2', { opacity: 0, scale: 3, xPercent: 0 });
    gsap.set('.video-3', { opacity: 0, scale: 1, xPercent: 0, y: 150 });
    gsap
      .timeline({
        // duration: 1,
        toggleActions: 'play none play reverse',
      })
      // .to('.video-1', { yPercent: -50, xPercent: 80 })
      .to('.video-2', {
        opacity: 1,
        duration: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
      })
      .to('.video-2', { scale: 1, yPercent: -20 }, '>')
      .to('.video-2', { scale: 1.2 }, '<')
      .to('.video-1', { opacity: 1, yPercent: -80, xPercent: 20 }, '<')
      .to('.video-3', { opacity: 1, yPercent: -80, xPercent: -20 }, '<');
  });

  mm.add('(min-width: 800px)', () => {
    gsap.set('.video-1', {
      width: '47vw',
      opacity: 0,
      scale: 0.6,
      yPercent: 100,
    });
    gsap.set('.video-2', { width: '47vw', opacity: 0, scale: 5, yPercent: 0 });
    gsap.set('.video-3', {
      width: '40vw',
      opacity: 0,
      scale: 0.6,
      yPercent: 100,
    });
    gsap
      .timeline({
        // duration: 1,
        toggleActions: 'play none play reverse',
      })
      // .to('.video-1', { yPercent: -50, xPercent: 80 })
      .to('.video-2', {
        opacity: 1,
        duration: 1,
        scale: 1,
      })
      .to('.video-2', { scale: 0.75, yPercent: 18 }, '>')
      .to('.video-2', { scale: 0.9 }, '>')
      .to(
        '.video-1',
        { opacity: 1, scale: 0.75, yPercent: 20, xPercent: 35 },
        '<'
      )
      .to(
        '.video-3',
        { opacity: 1, scale: 0.8, yPercent: 20, xPercent: -35 },
        '<'
      );

    gsap.set('.pink_bg', { opacity: 0, yPercent: -100, xPercent: 100 });
    gsap.set('.purple_bg', { opacity: 0, yPercent: -100, xPercent: 100 });

    gsap
      .timeline({
        duration: 0.1,
        scrollTrigger: {
          trigger: '#statistics',
          start: '-30%',
          toggleActions: 'play none play reverse',
        },
      })
      .from('.fucshia_bg', { opacity: 0, yPercent: -100, xPercent: -100 }, '<')
      .from(
        '.light_blue_bg',
        { opacity: 0, yPercent: 100, xPercent: -100 },
        '<'
      )
      .to('.pink_bg', { opacity: 1, yPercent: 10, xPercent: 0 }, '<')
      .to('.purple_bg', { opacity: 1, yPercent: 10, xPercent: 0 }, '<');
  });
});
