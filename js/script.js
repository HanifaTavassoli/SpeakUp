document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("layout/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });
});
