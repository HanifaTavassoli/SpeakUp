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

///////////////////////////////////////////////////////////
// Sign-Up Form Handler
function signupFormHandler() {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const passwordField = document.getElementById("password");

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    [nameField, emailField, passwordField].forEach((field) =>
      field.classList.remove("border-danger")
    );

    let valid = true;

    if (name === "") {
      showError(nameField, "Please Enter a Name.");
      valid = false;
    }
    if (email === "") {
      showError(emailField, "Please Enter an Email.");
      valid = false;
    }
    if (password === "" || password.length < 6) {
      showError(passwordField, "Password must be at least 6 characters long.");
      valid = false;
    }

    if (valid) {
      // showSuccessModal(); // Show success modal
      setTimeout(() => {
        window.location.href = "login.html";
        alert("Your account has been created successfully!");
      }, 3000);

      loginFormHandler();
    }
  });
}

///////////////////////////////////////////////////////////
// Login Form Handler

function loginFormHandler() {
  const usernameField = document.getElementById("email1");
  const passwordField = document.getElementById("password1");

  const username = usernameField.value.trim();
  const password = passwordField.value.trim();

  console.log("username:", username);
  console.log("password:", password);
  // Basic validation
  // if (username === "" || password === "") {
  //   alert("Please fill in both fields!");
  //   return;
  // }

  // Store username in sessionStorage (for demonstration purposes)
  if (username !== "" && password !== "") {
    sessionStorage.setItem("username", username);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 500);
    console.log("you login truely");
  }
  // Redirect or show username in navbar
}
