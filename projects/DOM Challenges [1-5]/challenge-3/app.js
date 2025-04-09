const inputs = ["nameInput", "jobInput", "ageInput", "bioInput"];
const previews = ["nameDisplay", "jobDisplay", "ageDisplay", "bioDisplay"];

inputs.forEach((input, index) => {
  const inputElement = document.getElementById(input);
  const previewElement = document.getElementById(previews[index]);

  inputElement.addEventListener("input", () => {
    const value = inputElement.value;
    if (value) {
      if (input === "ageInput" && (value < 18 || value > 120)) {
        previewElement.textContent = "Invalid Age";
      } else {
        previewElement.textContent = value;
      }
    } else {
      previewElement.textContent = "Not provided";
    }
  });
});
