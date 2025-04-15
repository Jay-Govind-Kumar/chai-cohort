/* ---------------- Challenge 4 ---------------- */
// You're tracking the number of steps you take duringg a workout. Each time you take a step, you want to count it. You keep stepping until you've reached a certain number of steps.

// Problem Statement: Create a function that uses a loop to count the number of steps during a workout. The loop should continue until you reach the target step count.

function countSteps(targetSteps) {
  let countSteps = 0;
  while (targetSteps > 0) {
    countSteps++;
    targetSteps--;
  }
  return countSteps;
}
