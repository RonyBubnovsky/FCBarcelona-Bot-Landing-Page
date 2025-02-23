document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for scroll-triggered elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animation = entry.target.getAttribute("data-animation") || "animate__fadeInUp";
          const delay = entry.target.getAttribute("data-delay") || "0s";
          entry.target.style.animationDelay = delay;
          entry.target.classList.add("animate__animated", animation);
          // Make the element visible
          entry.target.style.opacity = "1";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
  );
  
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
  
  // Ensure the hero-subtitle becomes visible after 0.8 seconds (for its animation)
  setTimeout(() => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
      heroSubtitle.style.opacity = "1";
    }
  }, 800);
});
