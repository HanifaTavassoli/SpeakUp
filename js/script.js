document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("layout/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      // Toggle theme and handle signup form

      document
        .getElementById("toggleThemeBtn")
        .addEventListener("click", toggleTheme);
      signupFormHandler();
    });

  // Load footer
  fetch("layout/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
      setCurrentYear();
    });
});

///////////////////////////////////////////////////////////
// Set current year
function setCurrentYear() {
  const yearEl = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
}

///////////////////////////////////////////////////////////
// Color theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  let icon = document.getElementById("theme-icon");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("bi-moon-stars-fill");
    icon.classList.add("bi-sun");
  } else {
    icon.classList.remove("bi-sun");
    icon.classList.add("bi-moon-stars-fill");
  }
}
