const dice = document.getElementById("dice");
const rollButton = document.getElementById("rollButton");
const resultMessage = document.getElementById("resultMessage");

const diceFaces = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
function rollDice() {
  const randomNuber = Math.floor(Math.random() * 6);

  dice.textContent = diceFaces[randomNuber];
  resultMessage.textContent = `You rolled a ${randomNuber + 1}`;
}

rollButton.addEventListener("click", rollDice);
