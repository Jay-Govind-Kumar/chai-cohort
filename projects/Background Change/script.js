const changeColorButton = document.getElementById("changeColorButton");
const changeImageButton = document.getElementById("changeImageButton");
const heading = document.getElementById("h1");

function changeColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const rgb = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundImage = `url('')`;
  document.body.style.backgroundColor = rgb;

  heading.style.color = rgb;
  heading.textContent = `You clicked "Change Background Color Button"`;
}

function changeImage() {
  const images = [
    "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=2100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  document.body.style.backgroundImage = `url('${randomImage}')`;
  document.body.style.backgroundPosition = "center";

  heading.textContent = `You clicked "Change Background Image Button"`;
}

changeColorButton.addEventListener("click", changeColor);
changeImageButton.addEventListener("click", changeImage);
