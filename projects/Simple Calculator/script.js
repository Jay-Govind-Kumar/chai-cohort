function reset() {
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

function calculate(operator) {
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);
  const resultElement = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers.");
    return;
  } else {
    resultElement.textContent = "Result: " + calculator(num1, num2, operator);
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
  }
}

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  }
}
