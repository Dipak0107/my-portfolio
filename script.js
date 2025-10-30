console.log("Welcome to Dipak Borkar’s Portfolio!");
// Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Small animation on scroll (fade-in effect)
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "0.8s ease";
    }
  });
});
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent =
    document.body.classList.contains('dark') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
window.scrollTo({
  top: target.offsetTop,
  behavior: "smooth"
});
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
      card.style.transition = "0.5s ease";
    }
  });
});
// 🌙 Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
