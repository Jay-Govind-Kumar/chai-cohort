function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preapring regular chai");
  }
}

// prepareChai("Masala Chai");
// prepareChai("Regular Chai");

/*
Ek online store mein, agar customer ka bill 1000 se zyada hua toh 10% discount milta hai. Nahi toh, full amount pay karna padega.
*/

function billAmount(amount) {
  // convert to number
  amount = Number(amount);
  if (amount > 1000) {
    console.log(
      `You got a 10% discount. Your bill amount is "${amount}" but you have to pay only "${
        amount - amount * 0.1
      }"`
    );
  } else {
    console.log(`Your final bill amount is "${amount}"`);
  }
}

// billAmount(1200);
// billAmount(900);

/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karna hai. Agar "yellow" hai, toh "Slow down" print karna hai. Agar "green" hai, toh "Go" print karna hai.
*/

function trafficLight(color) {
  color = color.toLowerCase();

  switch (color) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow down";
    case "green":
      return "Go";
    default:
      return console.log("Invalid color"); // print directly
  }
}

// console.log(trafficLight("red"));   // Stop
// console.log(trafficLight("yellow")); // Slow down
// console.log(trafficLight("green"));  // Go
// trafficLight("blue"); // Invalid color

function checkTruthyValue(value) {
  if (value) {
    console.log ("Truthy Value");
  } else {
    console.log ("Falsy Value");
  }
}

// checkTruthyValue(0); // Falsy Value
// checkTruthyValue(1); // Truthy 
// checkTruthyValue(""); // Falsy Value
// checkTruthyValue("hello"); // Truthy Value
// checkTruthyValue(null); // Falsy Value
// checkTruthyValue(undefined); // Falsy Value
// checkTruthyValue(true); // Truthy Value
// checkTruthyValue(false); // Falsy Value
// checkTruthyValue([]); // Truthy Value
// checkTruthyValue({}); // Truthy Value
// checkTruthyValue(NaN); // Falsy Value
// checkTruthyValue(-1); // Truthy Value
// checkTruthyValue("0"); // Truthy Value

