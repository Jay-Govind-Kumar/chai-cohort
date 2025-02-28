/* ------------------------------ variables and datatypes ---------------------------- */
var user = "jay govind";
// don't use var keyword to declare variable
// use let or const

let name = "jay govind"; // variable
const pi = 3.14; // constant value

let number = 16; // number
let isTrue = true; // boolean
let text = "hello world"; // string
let nothing = null; // null or object
let empty = undefined; // undefined
let sochenge; // undefined
let symbol = Symbol(); // symbol

/* use typeof keyword to check datatype */

// console.log(typeof number)
// console.log(typeof isTrue)
// console.log(typeof text)
// console.log(typeof nothing)
// console.log(typeof empty)
// console.log(typeof sochenge)
// console.log(typeof symbol)

let coder = {
  name: "jay govind",
  age: 21,
  isCoder: true,
  "programming language": ["javascript", "python", "java"],
};

// console.log(typeof coder) // object
// console.log(typeof coder["programming language"])   // object
// console.log(typeof coder["programming language"][0])    // string
// console.log(typeof coder["age"])   // string;

/* ------------------------------ conversion ---------------------------- */

let num = "16";
let convertedNum = Number(num);
let convertedNum2 = parseInt(num);
let convertedNum3 = +num;

// console.log(typeof convertedNum); // number
// console.log(typeof convertedNum2); // number
// console.log(typeof convertedNum3); // number

let num2 = "16a";
let convertedNum4 = Number(num2);

// console.log(convertedNum4); // NaN
// console.log(typeof convertedNum4); // number

let isCoder = true;
let convertedBool = Number(isCoder);

// console.log(convertedBool); // 1
// console.log(typeof convertedBool); // number

let convertedBool2 = String(isCoder);

// console.log(convertedBool2); // true
// console.log(typeof convertedBool2); // string

let coder2 = Array(coder);
// console.log(coder2); 
// console.log(typeof coder2); // object
// console.log(coder2[0][1]);
