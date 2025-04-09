// Function that encapsulates the logic for creating a new button
function createButton() {
  const container = document.getElementById("buttons-container");
  const hexInput = document.getElementById("hexcolor-input");

  return function () {
    const hexValue = hexInput.value;
    if (!hexValue) return; // Prevent creating a button with an empty hex value

    // Create a new button element
    let newBtn = document.createElement("button");
    newBtn.className = "btn";
    newBtn.style.backgroundColor = "#" + hexValue;

    newBtn.addEventListener("click", function () {
      document.body.style.backgroundColor = newBtn.style.backgroundColor;
    });

    // Append the new button to the container
    container.appendChild(newBtn);

    // Reset the input field
    hexInput.value = "";
  };
}

document
  .getElementById("create-button")
  .addEventListener("click", createButton());
