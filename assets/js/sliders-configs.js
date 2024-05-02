const options = {
  type: 'loop',
  arrows: false,
  pagination: false,
  perPage: 8,
  perMove: 1,
  breakpoints: {
    640: {
      perPage: 4,
    },
  },
  autoScroll: {
    speed: 1,
  },
};
document.addEventListener('DOMContentLoaded', function () {
  const splide1 = new Splide('.brands-slides__top__slider', options);
  const splide2 = new Splide('.brands-slides__bottom__slider', {
    ...options,
    autoScroll: { speed: -1 },
  });
  const splide3 = new Splide('.latest-projects', {
    ...options,
    perPage: 4.5,
    gap: '9rem',
    snap: true,
    interval: 1000,
    autoScroll: {},
    lazyLoad: 'sequential',
    breakpoints: {
      640: { perPage: 3.5 },
      1200: { perPage: 3 },
      1600: { perPage: 5, gap: '14rem' },
    },
  });

  var elms = [splide1, splide2, splide3];

  for (var i = 0; i < elms.length; i++) {
    elms[i].mount(window.splide.Extensions);
  }
});
