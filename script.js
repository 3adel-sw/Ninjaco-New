// Mode
const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") root.classList.add("dark");

toggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    root.classList.contains("dark") ? "dark" : "light"
  );
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
