const startBtn = document.getElementById("startButton");
const timeInput = document.getElementById("timeInput");
const countdownDisplay = document.getElementById("countdownDisplay");

function startTimer() {
  let valueInSeconds = parseInt(timeInput.value);
  if (isNaN(valueInSeconds) || valueInSeconds <= 0) {
    countdownDisplay.textContent = "Please enter a valid time in seconds.";
    return;
  }

  setInterval(function () {
    valueInSeconds--;
    countdownDisplay.textContent = "Time left: " + valueInSeconds + " seconds";

    if (valueInSeconds <= 0) {
      clearInterval(this);
      countdownDisplay.textContent = "Time's up! ⏰";
    }
  }, 1 * 1000);
}

startBtn.addEventListener("click", startTimer);
