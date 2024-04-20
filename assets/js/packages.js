let loading = true;
gsap.set('.video-1', { opacity: 0, scale: 1, xPercent: 0, y: 150 });
gsap.set('.video-2', { opacity: 0, scale: 1, xPercent: 0 });
gsap.set('.video-3', { opacity: 0, scale: 1, xPercent: 0, y: 150 });
gsap.set('.packages-wrapper__bg', { opacity: 0, yPercent: -100 });
gsap.set('.hero__body__title', { opacity: 0 });
document.addEventListener('DOMContentLoaded', function () {
  loading = false;
});

if (loading) {
  gsap
    .timeline()
    .to('.packages-wrapper__bg', {
      duration: 1,
      opacity: 1,
      yPercent: 0,
    })
    .to('.hero__body__title', {
      opacity: 1,
      duration: 0.5,
      xPercent: 0,
    });
  gsap
    .timeline({
      duration: 0.5,

      toggleActions: 'play none play reverse',
    })
    .to('.video-2', {
      scale: 1,
      yPercent: 0,
      xPercent: 0,
    })
    .to(
      '.video-2',
      { scale: 1.1, opacity: 1, yPercent: -10, xPercent: -115 },
      '>'
    )
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
}
