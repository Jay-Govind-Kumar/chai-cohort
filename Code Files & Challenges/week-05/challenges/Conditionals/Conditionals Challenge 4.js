/* ---------------- Challenge 4 ---------------- */
// given a student's marks, determine their grade based on this scale:

// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0-59: Fail

// Problem Statement: write a function that returns the corresponding grade using if-else.

function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else if (marks >= 60) {
    return "D";
  } else {
    return "Fail";
  }
}
