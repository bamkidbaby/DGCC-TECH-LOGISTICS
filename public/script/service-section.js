//What to expect slider functionality
const grid = document.getElementById("servicesGrid");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const card = document.querySelectorAll(".service-card");

let currentI = 0;
let cardPerView = 3;

function updatecardPerView() {
  const width = window.innerWidth;
  if (width <= 768) {
    cardPerView = 1;
  } else if (width <= 1024) {
    cardPerView = 2;
  } else {
    cardPerView = 3;
  }
  updateSlider();
}

function updateSlider() {
  const maxIndex = card.length - cardPerView;
  currentI = Math.max(0, Math.min(currentIndex, maxIndex));

  const cardWidth = card[0].offsetWidth;
  const gap = 30;
  const offset = -(currentI * (cardWidth + gap));

  grid.style.transform = `translateX(${offset}px)`;

  prevButton.disabled = currentI === 0;
  nextButton.disabled = currentI >= maxIndex;
}

prevButton.addEventListener("click", () => {
  if (currentI > 0) {
    currentI--;
    updateSlider();
  }
});

nextButton.addEventListener("click", () => {
  const maxIndex = card.length - cardPerView;
  if (currentI < maxIndex) {
    currentI++;
    updateSlider();
  }
});

window.addEventListener("resize", updatecardPerView);
updatecardPerView();
