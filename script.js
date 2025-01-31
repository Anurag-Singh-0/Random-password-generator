const passwordBox = document.querySelector("#password");
const btn = document.querySelector(".btn");
const copy = document.getElementById("copy");

const lengthInput = document.querySelector("#length");
const lengthValue = document.querySelector("#lengthValue");
const includeNumbers = document.querySelector("#includeNumbers");
const includeSymbols = document.querySelector("#includeSymbols");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+-={}[]|:;<>,.?/";

function createPassword() {
  let password = "";
  let allowedChars = upperCase + lowerCase;

  if (includeNumbers.checked) allowedChars += numbers;
  if (includeSymbols.checked) allowedChars += specialChars;

  if (allowedChars.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

  let passLength = parseInt(lengthInput.value);
  while (password.length < passLength) {
    password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
  }

  passwordBox.value = password.split("").sort(() => Math.random() - 0.5).join("");
}

lengthInput.addEventListener("input", () => {
  lengthValue.textContent = lengthInput.value;
});

btn.addEventListener("click", createPassword);

copy.addEventListener("click", () => {
  if (!passwordBox.value) return;

  navigator.clipboard.writeText(passwordBox.value).then(() => {
    alert("Password copied to clipboard!");
  });
});

// Popup functionality
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Show popup when the page loads
window.onload = () => {
  popup.style.display = "flex";
};

// Hide popup when the close button is clicked
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
