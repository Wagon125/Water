// Smooth section slide-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

// Scroll animations for sections and hero text
const revealElements = document.querySelectorAll("section, .slide-element");

const observer2 = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach(el => observer2.observe(el));

// ✅ Hero animations
const slideElements = document.querySelectorAll(".slide-left, .slide-right");

const heroObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

slideElements.forEach(el => heroObserver.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('header nav');

  // ✅ Open/close navbar on hamburger click
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // ✅ Close menu when a nav link is clicked
  // ✅ Close menu when a nav link is clicked (fixed)
const navLinks = document.querySelectorAll('header nav a'); // ✅ Correct selector

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

});

// ✅ (Optional function, not used but valid)
function toggleMenu() {
  const nav = document.querySelector("header nav");
  nav.classList.toggle("active");
}

