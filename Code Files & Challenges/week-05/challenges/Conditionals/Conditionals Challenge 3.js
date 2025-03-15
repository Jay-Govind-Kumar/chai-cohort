/* ---------------- Challenge 3 ---------------- */
// You need to determine if a person is wligible to vote (age 18 or above)

// Problem Statement: Write a function that checks if a person is eligible to vote and returns "eligible" or 'not eligible'.

function checkVotingEligibility(age) {
  if (age >= 18) {
    return "eligible";
  } else {
    return "not eligible";
  }
}
