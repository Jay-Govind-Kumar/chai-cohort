/* ------------------------------ array ---------------------------- */
let chaiTypes = [
  "masala chai",
  "ginger chai",
  "cardamom chai",
  "lemon chai",
  "green chai",
];

// console.log(chaiTypes[0]);

// console.log(`There are ${chaiTypes.length} types of chai`);

chaiTypes.push("black chai"); // add to end
let data = chaiTypes.pop(); // remove from end and return
// console.log(data);

chaiTypes.unshift("white chai"); // add to beginning
chaiTypes.shift(); // remove from beginning and return

let index = chaiTypes.indexOf("ginger chai");

if (index !== -1) {
  chaiTypes.splice(index, 1); // remove from index and return array
}

// console.log(chaiTypes);

chaiTypes.forEach((chai, index) => {
  //   console.log(`${index + 1}. ${chai}`);
});

let moreChaiTypes = [
  "peppermint chai",
  "cinnamon chai",
  "honey chai",
  "vanilla chai",
];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);
// console.log(allChaiTypes);

let newChaiTypes = [...chaiTypes, "rose chai"]; // spread operator
// console.log(newChaiTypes);

/* ------------------------------ object ---------------------------- */

let chaiRecipe = {
  name: "Masaala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream milk",
    sugar: "Brown sugar",
    spices: ["cardamom", "cinnamon", "ginger", "pepper"],
  },
  instructions:
    "Boil water, add tea leaves, spices, sugar, milk and let it simmer for 5 minutes",
};

// console.log(chaiRecipe.name);
// console.log(chaiRecipe.ingredients.spices[0]);

let updatedChaiRecipe = {
  ...chaiRecipe,
  instructions:
    "Boil water, add tea leaves, spices, sugar, milk and let it simmer for 5 minutes. Strain and serve hot", // update instructions
};

// console.log(updatedChaiRecipe);

// destructuring
let { name, myingredients } = chaiRecipe;
let [firstChai, secondChai] = chaiTypes;

// console.log(name);
// console.log(myingredients); // undefined
// console.log(firstChai);
// console.log(secondChai);
