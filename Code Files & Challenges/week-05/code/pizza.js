let numberOfGuest = 0;

let pizzaSize;
// small <= 2
// medium <= 5
// large

if (numberOfGuest > 0) {
  if (numberOfGuest <= 2) {
    pizzaSize = "small";
  } else if (numberOfGuest <= 5) {
    pizzaSize = "medium";
  } else {
    pizzaSize = "large";
  }
} else {
  pizzaSize = "no pizza";
}

if (pizzaSize === "no pizza") {
  console.log("Pizza se pahle guest bhula lo bhai");
} else {
  console.log(
    `The size of the pizza for ${numberOfGuest} guests is ${pizzaSize}`
  );
}

// ternary operator
// pizzaSize =
//   numberOfGuest < 2 ? "small" : numberOfGuest <= 5 ? "medium" : "large";

// console.log(
//   `The size of the pizza for ${numberOfGuest} guests is ${pizzaSize}`
// );
