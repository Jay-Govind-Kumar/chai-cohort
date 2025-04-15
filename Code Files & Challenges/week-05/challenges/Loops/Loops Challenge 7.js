/* ---------------- Challenge 7 ---------------- */
// You have multiple levels of stars to count. Each level contains a certain number of stars. How many total stars are there?

// Problem Statement: Create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number of stars

function totalStars(starLevels) {
  const starsArray = starLevels.flat(Infinity);
  let totalStar = 0;
  for (let i = 0; i < starsArray.length; i++) {
    totalStar++;
  }
  return totalStar;
}
