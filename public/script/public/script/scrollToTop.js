//to work with
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

let carouselPosition = 0;

function moveCarousel(direction) {
  const track = document.getElementById("carouselTrack");
  const cards = track.children;
  const cardWidth = cards[0].offsetWidth + 32;

  carouselPosition += direction;
  if (carouselPosition < 0) carouselPosition = 0;
  if (carouselPosition > cards.length - 3) carouselPosition = cards.length - 3;

  track.style.transform = `translateX(-${carouselPosition * cardWidth}px)`;
}

window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("click", function (event) {
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.querySelector(".menu-toggle");

  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});
