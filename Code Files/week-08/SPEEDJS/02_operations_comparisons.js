/* ------------------------------ operations and comparisons ---------------------------- */
let a = 5;
let b = 10;

let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

/* ------------------------------ comparisons ---------------------------- */

let x = 5;
let y = 10;

let isEqual = x == y; // false
let isNotEqual = x != y; // true
let isGreaterThan = x > y; // false
let isLessThan = x < y; // true
let isGreaterThanOrEqual = x >= y; // false
let isLessThanOrEqual = x <= y; // true

// "==" checks only value
// "===" checks value and datatype

/* ----------------------------- Math Functions----------------------------- */

// console.log(Math) // Math object
// console.log(Math.PI)
// console.log(Math.E);

// console.log(Math.max(5, 10));
// console.log(Math.min(5, 10));

// console.log(Math.floor(Math.random() * 10));

/*---------------------------- String ----------------------------- */

let firstName = "Jay";
let lastName = "Govind";

let fullName = firstName + " " + lastName;
let greeting = `Hello, my name is ${fullName}`;

let message = "Hello World";

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.slice(0, 5));

