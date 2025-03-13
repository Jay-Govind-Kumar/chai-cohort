const quotes = [
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
];

const generateButton = document.getElementById("btn");
const quoteDisplay = document.getElementById("quote");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerText = quote;
}

generateButton.addEventListener("click", generateQuote);
