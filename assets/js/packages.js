document.addEventListener('DOMContentLoaded', function () {
  let mm = gsap.matchMedia();
  gsap.set('.video-1', { opacity: 0, scale: 1, xPercent: 0, y: 150 });
  gsap.set('.video-2', { opacity: 0, scale: 3, xPercent: 0 });
  gsap.set('.video-3', { opacity: 0, scale: 1, xPercent: 0, y: 150 });
  gsap
    .timeline({
      toggleActions: 'play none play reverse',
    })
    .to('.video-2', {
      opacity: 1,
      duration: 1,
      scale: 1,
      yPercent: 0,
      xPercent: 0,
    })
    .to('.video-2', { scale: 1.1, yPercent: -10, xPercent: -115 }, '>')
    .to(
      '.video-1',
      { scale: 1.1, opacity: 1, yPercent: 5, xPercent: -100 },
      '<'
    )
    .to(
      '.video-3',
      { scale: 1.1, opacity: 1, yPercent: -50, xPercent: -140 },
      '<'
    );
});
