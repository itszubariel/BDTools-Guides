// Theme toggling
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.contains("dark");

  if (isDark) {
    html.classList.remove("dark");
    html.classList.add("light");
    localStorage.setItem("darkMode", "disabled");
    document.getElementById("themeToggle").classList.remove("on");
    document.getElementById("themeLabel").textContent = "Light Mode";
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
    document.getElementById("themeToggle").classList.add("on");
    document.getElementById("themeLabel").textContent = "Dark Mode";
  }
}

// Initialize theme label
document.addEventListener("DOMContentLoaded", () => {
  const isDark = document.documentElement.classList.contains("dark");
  const label = document.getElementById("themeLabel");
  if (label) {
    label.textContent = isDark ? "Dark Mode" : "Light Mode";
  }

  // Hide loader
  setTimeout(() => {
    const loader = document.getElementById("ldr");
    if (loader) {
      loader.classList.add("out");
    }
  }, 300);
});
