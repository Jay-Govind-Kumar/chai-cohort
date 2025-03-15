/* ---------------- Challenge 6 ---------------- */
// You need to determine what action to take based on traffic light colors:

// red: stop
// yellow: slow down
// green: go
// blue: invalid color

// Problem Statement: Ride of function that uses switch case to return the correct action.

function trafficLightAction(color) {
  switch (color.toLowerCase()) {
    case "red":
      return "Stop";
    case "yellow":
      return "Slow Down";
    case "green":
      return "Go";
    default:
      return "Invalid Color";
  }
}
