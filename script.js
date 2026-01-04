// mode
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  root.classList.add("dark");
  toggle.textContent = "☀️";
} else {
  toggle.textContent = "🌙";
}

// Toggle theme
toggle.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggle.textContent = isDark ? "☀️" : "🌙";
});

// Splide

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide", {
    type: "loop",
    autoWidth: true,
    gap: "1rem",
    direction: "rtl",
    pagination: false,
    arrows: false,

    breakpoints: {
      768: {
        gap: "0.75rem",
      },
      480: {
        gap: "0.5rem",
      },
    },
  }).mount();
});

// Splide Mobile Feedback
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splideFeedback", {
    type: "loop",
    autoWidth: true,
    gap: "1rem",
    direction: "rtl",
    pagination: false,
    arrows: false,

    breakpoints: {
      768: {
        gap: "0.75rem",
      },
      480: {
        gap: "0.5rem",
      },
    },
  }).mount();
});
