//SCRIPT FOR SCROLL EFFECT
/* ================= SCROLL EFFECT ================= */
const navbar = document.querySelector(".navbar");
const hero = document.querySelector("#hero");

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 100);
  });
}

/* ================= SERVICES MENU ================= */
const servicesBtn = document.querySelector(".navbar-menu-btn");
const bg = document.querySelector(".services-bg");
const menu = document.querySelector(".services-menu");
const closeBtn = document.querySelector(".services-menu .close-btn");

if (servicesBtn && bg && menu && closeBtn) {
  servicesBtn.onclick = () => {
    bg.style.display = "block";
    menu.classList.add("active");
  };

  closeBtn.onclick = () => {
    bg.style.display = "none";
    menu.classList.remove("active");
  };
}

/* ================= HERO SLIDER ================= */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length) {
  function showSlide(i) {
    slides.forEach((s, index) => s.classList.toggle("active", index === i));
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  let auto = setInterval(nextSlide, 5000);

  document.getElementById("nextBtn")?.addEventListener("click", () => {
    clearInterval(auto);
    nextSlide();
    auto = setInterval(nextSlide, 5000);
  });

  document.getElementById("prevBtn")?.addEventListener("click", () => {
    clearInterval(auto);
    prevSlide();
    auto = setInterval(nextSlide, 5000);
  });
}

/* ================= SERVICE CARD SLIDER ================= */
const cardsWrap = document.querySelector(".service-overview .cards");
const prev = document.querySelector(".service-overview .prev");
const next = document.querySelector(".service-overview .next");
const dots = document.querySelectorAll(".service-overview .dot");

if (cardsWrap && prev && next) {
  let index = 0;

  function visible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateCards() {
    const card = cardsWrap.children[0];
    if (!card) return;

    const gap = 25;
    const max = cardsWrap.children.length - visible();

    index = Math.max(0, Math.min(index, max));

    const offset = index * (card.offsetWidth + gap);
    cardsWrap.style.transform = `translateX(-${offset}px)`;

    if (dots.length) {
      dots.forEach((d) => d.classList.remove("active"));
      const dotIndex = Math.round((index / max) * (dots.length - 1)) || 0;
      dots[dotIndex]?.classList.add("active");
    }
  }

  next.onclick = () => {
    index++;
    updateCards();
  };

  prev.onclick = () => {
    index--;
    updateCards();
  };

  dots.forEach((dot, i) => {
    dot.onclick = () => {
      index = Math.round(
        (i / (dots.length - 1)) * (cardsWrap.children.length - visible()),
      );
      updateCards();
    };
  });

  setInterval(() => {
    index++;
    updateCards();
  }, 3000);

  window.addEventListener("resize", updateCards);
  updateCards();
}

//testimonial sliders
const testimonialSlides = document.querySelectorAll(".quote-mark");
const avatarIndicators = document.querySelectorAll(".slide-img");
const sliderArrows = document.querySelectorAll(
  ".testimonial-arrows .arrow-btn",
);

let activeTestimonialIndex = 0;

function showTestimonial(index) {
  testimonialSlides.forEach((slide) => slide.classList.remove("active"));
  avatarIndicators.forEach((avatar) => avatar.classList.remove("active"));

  testimonialSlides[index].classList.add("active");
  avatarIndicators[index].classList.add("active");

  activeTestimonialIndex = index;
}

function nextTestimonial() {
  activeTestimonialIndex =
    (activeTestimonialIndex + 1) % testimonialSlides.length;
  showTestimonial(activeTestimonialIndex);
}

function previousTestimonial() {
  activeTestimonialIndex =
    (activeTestimonialIndex - 1 + testimonialSlides.length) %
    testimonialSlides.length;
  showTestimonial(activeTestimonialIndex);
}

sliderArrows[1].addEventListener("click", nextTestimonial);
sliderArrows[0].addEventListener("click", previousTestimonial);

avatarIndicators.forEach((avatar, index) => {
  avatar.addEventListener("click", () => showTestimonial(index));
});

showTestimonial(0);
