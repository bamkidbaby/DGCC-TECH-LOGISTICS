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
/* ================= SCROLL EFFECT ================= */
const navbar = document.querySelector(".navbar");
const hero = document.querySelector("#hero");

if (navbar && hero) {
  const heroHeight = hero.offsetHeight;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > heroHeight - 50);
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
  }, 4000);

  window.addEventListener("resize", updateCards);
  updateCards();
}
