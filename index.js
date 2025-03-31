document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    "h1, h2, h3, p, img, .image-container, .text-container, .about-text, .measurements, .contact-info"
  ); // Select all key elements

  function revealElements() {
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); // Trigger animation on page load if elements are already in view
});
// animatin trigger process
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("[data-animate]"); // Select elements with custom attribute

  function revealElements() {
    const windowHeight = window.innerHeight;

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        const animation = el.dataset.animate; // Get animation name
        el.classList.add("animate__animated", animation, "animate__slow"); // Add animation
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); // Trigger on load if elements are already visible
});
