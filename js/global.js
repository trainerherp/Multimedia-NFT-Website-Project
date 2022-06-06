// show/hide login button auth
let navbarButtonLogin = document.getElementById("navbar-button-login");
let navbarProfile = document.getElementById("navbar-profile");
let navbarLogoutButton = document.getElementById("navbar-logout-button");

const currentUser = JSON.parse(localStorage.getItem("auth"));
if (currentUser) {
  navbarButtonLogin.style.display = "none";
  navbarProfile.style.display = "block";

  let navbarProfileName = document.querySelector("#navbar-profile-name");
  username = currentUser.username;
  navbarProfileName.innerHTML =
    username.charAt(0).toUpperCase() + username.slice(1);
} else {
  navbarButtonLogin.style.display = "block";
  navbarProfile.style.display = "none";
}

navbarLogoutButton.addEventListener("click", logout);
