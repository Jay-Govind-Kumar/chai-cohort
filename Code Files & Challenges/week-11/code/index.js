const fs = require("fs");

fs.writeFile("./text.txt", "Hello World, i am jay govind", () => {});

console.log("Completed");

fs.readFile("./text.txt", (data) => {
    console.log(data);
    
})