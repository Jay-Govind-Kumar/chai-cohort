/* ---------------- Challenge 2 ---------------- */
// You are given three numbers. Determine the largest among them.

// Problem Statement: Write a function that takes three numbers as arguments and returns the largest of them using if-else.

function findLargest(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
