/* ---------------- Challenge 8 ---------------- */
// You're sopping for groceries and want to know the total cost of all the items in your card you have an array of items prices.

// Problem Statement: Create a function that takes an array of item prices and returns the total cost.

function totalPrice(prices) {
  let totalCost = 0;
  for (let i = 0; i < prices.length; i++) {
    totalCost += prices[i];
  }
  return totalCost;
}
