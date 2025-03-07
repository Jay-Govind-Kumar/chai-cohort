const body = document.getElementById("body");
const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const status = document.getElementById("status");

function bulbOn() {
  body.classList.add("dark-mode");
  bulb.classList.remove("off");
  toggleButton.textContent = "Turn Off";
  status.textContent = "Status: On";
}

function bulbOff() {
  body.classList.remove("dark-mode");
  bulb.classList.add("off");
  toggleButton.textContent = "Turn On";
  status.textContent = "Status: Off";
}

toggleButton.addEventListener("click", () => {
  bulb.classList.contains("off") ? bulbOn() : bulbOff();
});
