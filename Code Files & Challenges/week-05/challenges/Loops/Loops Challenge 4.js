/* ---------------- Challenge 4 ---------------- */
// You are preparing for a picnic and need to fill several water bottles. Each bottle requires a different amount of water, but you are going to fill them 1 by 1. How do you track the amount of water you are adding to each bottle ?

// Problem Statement: Create a function that takes an array of water amounts(in liters) for each bottle and adds them up. The function should return the total amount of water you have filled in all the bottles

function totalWater(waterAmounts) {
  let totalAmount = 0;
  for (let i = 0; i < waterAmounts.length; i++) {
    totalAmount += waterAmounts[i];
  }
  return totalAmount;
}
