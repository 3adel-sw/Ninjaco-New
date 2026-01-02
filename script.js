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
