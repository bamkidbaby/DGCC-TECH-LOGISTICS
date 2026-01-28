// const hamburger = document.querySelector('.hamburger');
//   const navLinks = document.querySelector('.nav-links');
//   const links = document.querySelectorAll('.nav-links a');

//   hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     navLinks.classList.toggle('active');
//   });

//   for(let i = 0; i<links.length; i++){
//     links[i].addEventListener('click', () => {
//        navLinks.classList.remove('active');
//     });
//   }

// const form = document.getElementById('messageForm');
// form.addEventListener('submit', function(e) {
//   e.preventDefault(); // Prevent form from refreshing the page

//   // Check if fields are filled
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();

//   if (!name || !email || !message) {
//     alert('⚠️ Please fill in all fields before sending.');
//     return;
//   }

//   alert("✅ Message sent successfully! We'll get back to you shortly.");
//   form.reset();
// });

//SCRIPT FOR SCROLL EFFECT
const navbar = document.querySelector(".navbar");
const heroHeight = document.querySelector("#hero").offsetHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > heroHeight - 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//navbar services-menu
const servicesBtn = document.querySelector(".navbar-menu-btn");
const bg = document.querySelector(".services-bg");
const menu = document.querySelector(".services-menu");
const closeBtn = document.querySelector(".services-menu .close-btn");

servicesBtn.addEventListener("click", () => {
  bg.style.display = "block";
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  bg.style.display = "none";
  menu.classList.remove("active");
});

//Hero Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Auto slide every 5 seconds
let autoSlide = setInterval(nextSlide, 5000);

// Arrow button controls
document.getElementById("nextBtn").addEventListener("click", () => {
  clearInterval(autoSlide);
  nextSlide();
  autoSlide = setInterval(nextSlide, 5000);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(nextSlide, 5000);
});

//Service-overview card-slider
const cards = document.querySelector(".service-overview .cards");
const prevBtn = document.querySelector(".service-overview .prev");
const nextBtn = document.querySelector(".service-overview .next");
const dots = document.querySelectorAll(".service-overview .dot");

const totalCards = cards.children.length;
let currentIndex = 0;

// Determine how many cards are visible based on screen width
function getVisibleCards() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

// Update the slider position
function updateSlider() {
  const cardWidth = cards.children[0].offsetWidth;
  const gap = 25; // same as CSS gap
  cards.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;

  // Update dots
  const totalDots = dots.length;
  const maxIndex = totalCards - getVisibleCards();
  const dotIndex = Math.round((currentIndex / maxIndex) * (totalDots - 1));
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[dotIndex].classList.add("active");
}

// Next slide
nextBtn.addEventListener("click", () => {
  const maxIndex = totalCards - getVisibleCards();
  if (currentIndex < maxIndex) currentIndex++;
  else currentIndex = 0; // loop to start
  updateSlider();
});

// Previous slide
prevBtn.addEventListener("click", () => {
  const maxIndex = totalCards - getVisibleCards();
  if (currentIndex > 0) currentIndex--;
  else currentIndex = maxIndex; // loop to last
  updateSlider();
});

// Click dots to navigate
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    const maxIndex = totalCards - getVisibleCards();
    currentIndex = Math.round((i / (dots.length - 1)) * maxIndex);
    updateSlider();
  });
});

// Auto slide every 4 seconds
setInterval(() => {
  nextBtn.click();
}, 4000);

// Update on window resize
window.addEventListener("resize", updateSlider);

// Initialize slider
updateSlider();
