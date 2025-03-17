const limit = 200;

const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const warningMessage = document.getElementById("warningMessage");

function updateCharCount() {
  const charCountValue = textInput.value.length;
  charCount.textContent = `${charCountValue} / ${limit} characters`;
  warningMessage.textContent = "";

  if (charCountValue < limit) {
    charCount.style.color = "green";
    textInput.style.backgroundColor = "#f8f8f8";
  } else if (charCountValue === limit) {
    charCount.style.color = "orange";
    textInput.style.backgroundColor = "#ffa500";
  } else {
    warningMessage.textContent =
      "Warning: You have exceeded the character limit.";
    charCount.style.color = "red";
    textInput.style.backgroundColor = "#ff0000";
    warningMessage.style.color = "#ff0000";
  }
}

textInput.addEventListener("input", updateCharCount);
