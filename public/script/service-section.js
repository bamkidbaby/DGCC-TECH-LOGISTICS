const servicesTrack = document.getElementById("servicesGrid");
const slidePrevBtn = document.getElementById("prevButton");
const slideNextBtn = document.getElementById("nextButton");

let currentServiceOffset = 0;
let serviceCardWidth = 0;
let visibleServiceCards = 1;

function calculateServiceMetrics() {
  const firstServiceCard = servicesTrack.querySelector(".service-card");

  if (!firstServiceCard) return;

  const cardStyles = window.getComputedStyle(firstServiceCard);
  const cardMarginRight = parseFloat(cardStyles.marginRight);

  serviceCardWidth = firstServiceCard.offsetWidth + cardMarginRight;

  const sliderViewportWidth = servicesTrack.parentElement.offsetWidth;
  visibleServiceCards = Math.floor(sliderViewportWidth / serviceCardWidth);
}

function slideServicesForward() {
  const totalServiceCards = servicesTrack.children.length;
  const maxOffset = totalServiceCards - visibleServiceCards;

  if (currentServiceOffset < maxOffset) {
    currentServiceOffset++;
    updateServiceSliderPosition();
  }
}

function slideServicesBackward() {
  if (currentServiceOffset > 0) {
    currentServiceOffset--;
    updateServiceSliderPosition();
  }
}

function updateServiceSliderPosition() {
  const translateDistance = currentServiceOffset * serviceCardWidth;
  servicesTrack.style.transform = `translateX(-${translateDistance}px)`;
  servicesTrack.style.transition = "transform 0.5s ease";
}

function initializeServicesSlider() {
  calculateServiceMetrics();
  updateServiceSliderPosition();
}

slideNextBtn.addEventListener("click", slideServicesForward);
slidePrevBtn.addEventListener("click", slideServicesBackward);

window.addEventListener("resize", () => {
  initializeServicesSlider();
});

initializeServicesSlider();
