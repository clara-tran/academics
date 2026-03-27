const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  root.classList.add("light-mode");
}

toggle.addEventListener("click", () => {
  root.classList.toggle("light-mode");

  if (root.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});
