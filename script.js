const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
submit.addEventListener("click", () => {
  if (password.value != cPassword.value) {
    alert("Password doesn't match");
    password.value = "";
    cPassword.value = "";
    form.setAttribute(action, "");
  } else {
    form.setAttribute(action, "https://www.instagram.com/");
  }
});
