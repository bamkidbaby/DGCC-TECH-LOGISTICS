// === Mobile menu ===
const menuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeBtni = document.getElementById("closeMobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
});

function closeMenu() {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
}

closeBtni.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);

// Mobile dropdown toggle
document.querySelectorAll(".mobile-dropdown .drop-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = btn.parentElement;
    parent.classList.toggle("active");
  });
});
