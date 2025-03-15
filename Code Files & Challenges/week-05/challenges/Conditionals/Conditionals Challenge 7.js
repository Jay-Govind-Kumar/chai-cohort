/* ---------------- Challenge 7 ---------------- */
// Given a number(1-7), return the corresponding day of the week.

// Problem Statement: write a function that uses switch case to return the day name fro valid inputs otherwise "Invalid Day".

function getDayOfWeek(day) {
    switch (day) {
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      case 7:
        return "Sunday";
      default:
        return "Invalid Day";
    }
  }