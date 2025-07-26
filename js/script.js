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
