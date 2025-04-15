/* ---------------- Challenge 10 ---------------- */
// You're o a camping trip with our friends, and you all want to set up a starry mountain as a symbol of your adventure. To make things more fun, you decide to use stars to draw a inverted mountain pattern. The challenge: print it so everyone can admire the majestic mountain shape! ⛰️⭐

// Problem Statement: Create a function invvertedMountainn(n) that prints an inverted mountain made of stars. The number n represents the number of stars at the top, and the pattern should reduce by one start each line until only one star is left at the bottom.

// Example: For n  = 4, the output should be:
// ****
// ***
// **
// *

function invvertedMountain(n) {
    let mountain = ""
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            mountain += "*"
        }
        mountain += "\n"
    }
    return mountain;
}