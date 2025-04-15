/* ---------------- Challenge 2 ---------------- */
// You Half of jar full of candies but your little sibling keeps eating the last one! Your job is to remove the last candy from the jar.

// Problem Statement: create a function that removes the last candy from the jar and returns the updated jar.

function eatCandy(candyJar) {
  candyJar.pop();
  return candyJar;
}
