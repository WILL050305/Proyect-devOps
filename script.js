const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.querySelector('.productos-carousel');

let currentScroll = 0;

next.addEventListener('click', () => {
  const cardWidth = carousel.querySelector('.producto').offsetWidth + 20;
  currentScroll += cardWidth * 4;
  carousel.scrollTo({ left: currentScroll, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  const cardWidth = carousel.querySelector('.producto').offsetWidth + 20;
  currentScroll -= cardWidth * 4;
  carousel.scrollTo({ left: currentScroll, behavior: 'smooth' });
});
