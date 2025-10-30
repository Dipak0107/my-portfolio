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
