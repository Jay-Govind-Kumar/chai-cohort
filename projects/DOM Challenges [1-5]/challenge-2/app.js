const heading = document.getElementById("mainHeading");

const buttons = {
  redButton: "red",
  blueButton: "blue",
  greenButton: "green",
  purpleButton: "purple",
  resetButton: "black",
};

Object.keys(buttons).forEach((button) => {
  const buttonId = document.getElementById(button);
  buttonId.addEventListener("click", () => {
    heading.style.color = buttons[button];
  });
});
