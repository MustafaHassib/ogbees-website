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
      640: { perPage: 2.5, gap: '7rem' },
      1300: { perPage: 3.5 },
      1600: { perPage: 5, gap: '14rem' },
      1900: { perPage: 6, gap: '7rem' },
      2600: { perPage: 6.5, gap: '7rem' },
    },
  });

  var elms = [splide1, splide2, splide3];

  for (var i = 0; i < elms.length; i++) {
    elms[i].mount(window.splide.Extensions);
  }
});
