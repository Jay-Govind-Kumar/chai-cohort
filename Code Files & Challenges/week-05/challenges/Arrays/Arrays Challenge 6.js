/* ---------------- Challenge 6 ---------------- */
// You have a list of food items, but you want to keep only the healthy ones, Remove all items that contain "burger".

// Problem Statement: Create a function that removes unhealthy food items (those containing "burger") and returns the updated list.

function filterHealthy(foodList) {
  foodList = foodList.filter((item) => item != "Burger");
  return foodList;
}
