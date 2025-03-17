const inputText = document.getElementById("inputText");
const checkButton = document.getElementById("checkButton");
const resultMessage = document.getElementById("resultMessage");

checkButton.addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const text = inputText.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedText = text.split("").reverse().join("");

  if (text === reversedText) {
    resultMessage.textContent = `${inputText.value} is a palindrome!`;
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = `${inputText.value} is not a palindrome.`;
    resultMessage.style.color = "red";
  }
}
