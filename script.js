const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const signupLink = document.getElementById("redirect");
submit.addEventListener("click", () => {
  if (password.value != cPassword.value) {
    alert("Password doesn't match");
    password.value = "";
    cPassword.value = "";
    signupLink.setAttribute(href, "");
  } else {
    signupLink.setAttribute(href, "https://www.instagram.com/");
  }
});
