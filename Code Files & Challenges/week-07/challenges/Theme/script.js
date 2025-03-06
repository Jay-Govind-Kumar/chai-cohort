function changeTheme(color) {
  document.body.style.backgroundColor = color;
}

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor === "white") {
    changeTheme("black");
    themeButton.innerText = "Light Mode";
  } else {
    changeTheme("white");
    themeButton.innerText = "Dark Mode";
  }
});
