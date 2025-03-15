// Problem: Create an array containing different types of teas.
const teas = new Array(
  "Green tea",
  "Black tea",
  "oolong tea",
  "White tea",
  "Herbal Tea"
);

// Problem: Add "Chamomile Tea" to the existing list of teas.
teas.push("Chamomile Tea");

// Problem: Remove "oolong tea" from the list of teas.
let index = teas.indexOf("oolong tea");
if (index > -1) {
  teas.splice(index, 1);
}

// Problem: Filter the list to only include teas that are caffeinated.
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

// Problem: Sort the list of teas in alphabetical order.
teas.sort();

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}
// or
teas.forEach((tea) => {
  console.log(tea);
});

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea").
let caffeinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedMyTeas++;
  }
}
// or
teas.map((tea) => {
  if (tea !== "Herbal Tea") {
    caffeinatedMyTeas++;
  }
});

// Problem: Use a for loop to create a new array with all teas names in Uppercase.
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase);
}

// Problem: Use a for loop to find the tea name with the most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}

// Problem: Use a for loop to reverse the order of teas in the array.
const reversedTeas = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedTeas.push(teas[i]);
}
