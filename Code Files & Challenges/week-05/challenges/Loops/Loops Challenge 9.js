/* ---------------- Challenge 9 ---------------- */
// You have been tasked with designing the perfect shiny diamond rug crush's room. They love stars, and you have decided to make a sparkling pattern using them. You need to help them create this rug, where the stars are arranged in the shape of a diamond. 🌠✨

// Problem Statement: Create a function shinyDiamondRug(n) that prints a shiny diamond shape made of stars. The number n represents the size of the diamond with the middle of diamond having 2n - 1 stars.

// Important Rules:
// - Each line must not have trailing spaces.
// - The output must not have an extra newline at the end.

// Example: shinyDiamondRug(3) should print the following pattern:
//    *
//   ***
//  *****
// *******
//  *****
//  ***
//   *

function shinyDiamondRug(n) {
  let diamond = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      diamond += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      diamond += "*";
    }
    diamond += "\n";
  }

  return diamond;
}