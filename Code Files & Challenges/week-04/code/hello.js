// console.log("Hello from Jay Govind!");

// alert("Hello from Jay Govind!"); // works only in browser

function printWelcomeMessage() {
  console.log("Welcome to my website!");
}

printWelcomeMessage();

function printBrush(itne) {
  // itne (num) => Parameter
  console.log(`Hanji, le aaya ${itne} brush`); // String Interpolation
}

printBrush(5); // kitne (num) => Argument
printWelcomeMessage();
printBrush(10);

function add(a, b) {
  return a + b;
}

add(2, 3);  // nothing will print
console.log(add(5, 6));