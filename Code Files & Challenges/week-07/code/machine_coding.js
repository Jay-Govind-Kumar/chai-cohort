// Function.prototype.describe = function (description) {
//   this.description = description;
//   return this;
// };

Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};
// This will print the name of the function

function greet(name) {
  return `Hello ${name}`;
}

// greet("Jay"); // Hello Jay
// greet.describe(); // Function name is greet

/* -------------------------------------------------------------------------- */

// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const sum = function (a, b) {
  return a + b;
};

// Arrow Function
// const add = (a, b) => a + b;

/* -------------------------------------------------------------------------- */

// First Class Functions
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result = applyOperation(3, 2, (x, y) => x - y);
console.log(result); // 1

/* -------------------------------------------------------------------------- */

// IIFE - Immediately Invoked Function Expression
(function () {
  console.log("IIFE");
})();
