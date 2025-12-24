const viewport = document.querySelector('.reviews-viewport');
const items = document.querySelectorAll('.reviews-item');
const dotsContainer = document.querySelector('.reviews-dots');

let currentIndex = 0;
let visibleCount = 1;
let totalDots = 0;

const updateVisibleCount = () => {
  if (window.innerWidth >= 1280) visibleCount = 3;
  else if (window.innerWidth >= 768) visibleCount = 2;
  else visibleCount = 1;
};

const createDots = () => {
  updateVisibleCount();
  dotsContainer.innerHTML = '';
  totalDots = Math.ceil(items.length / visibleCount);
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  }
};

const updateDots = (index) => {
  if (window.innerWidth >= 1280) return;
  const dots = document.querySelectorAll('.reviews-dots .dot');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
};

const scrollToIndex = (index) => {
  const gap = window.innerWidth >= 1280 ? 20 : 16;
  const width = items[0].offsetWidth + gap;
  viewport.scrollTo({
    left: width * index,
    behavior: 'smooth'
  });
  updateDots(index);
};

// Swipe / scroll
viewport.addEventListener('scroll', () => {
  const gap = window.innerWidth >= 1280 ? 20 : 16;
  const width = items[0].offsetWidth + gap;
  const scrollLeft = viewport.scrollLeft;

  // розрахунок групи
  let groupIndex = Math.round(scrollLeft / (width * visibleCount));
  if (groupIndex >= totalDots) groupIndex = totalDots - 1;

  currentIndex = groupIndex;
  updateDots(currentIndex);
});

// Автоплей
let autoplayId = setInterval(() => {
  currentIndex = (currentIndex + 1) % totalDots;
  scrollToIndex(currentIndex * visibleCount);
}, 4500);

// Зупинка автоплею при взаємодії
viewport.addEventListener('touchstart', () => clearInterval(autoplayId));
viewport.addEventListener('mousedown', () => clearInterval(autoplayId));

// Ресайз
window.addEventListener('resize', () => {
  createDots();
  scrollToIndex(currentIndex * visibleCount);
});

// Початкове створення dots
createDots();
