/* =========================================
   NAV: SCROLL SHADOW + MOBILE TOGGLE
========================================= */
const navEl = document.querySelector("nav");
window.addEventListener("scroll", () => {
navEl.classList.toggle("scrolled", window.scrollY > 10);
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
const isOpen = navLinks.classList.toggle("open");
navToggle.setAttribute("aria-expanded", isOpen);
});
navLinks.querySelectorAll("a").forEach(link => {
link.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* =========================================
   SCROLL REVEAL
========================================= */
const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("in-view");
revealObserver.unobserve(entry.target);
}
});
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
