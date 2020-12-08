let fs = require("fs");
let inputText = fs.readFileSync("./test.txt", "utf-8");
let mapArray = inputText.split("\n");

let total = 0;
let index = 0;
for (i=0; i < mapArray.length - 1; i++) {
    index = (index + 3) % mapArray[i].length;
    if (mapArray[i+1][index] === "#") {
        total += 1;
    };
};

console.log(total);