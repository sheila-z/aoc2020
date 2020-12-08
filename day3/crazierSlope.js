let fs = require("fs");
let inputText = fs.readFileSync("./test.txt", "utf-8");
let mapArray = inputText.split("\n");

let slopeTracker = function(right, down) {
    let total = 0;
    let index = 0;
    for (i=0; i < mapArray.length - down; i=i+down) {
        index = (index + right) % mapArray[i].length;
        if (mapArray[i+down][index] === "#") {
            total += 1;
        };
    };
    return total;
};

console.log(slopeTracker(1,1) * slopeTracker(3,1) * slopeTracker(5,1) * slopeTracker(7,1) * slopeTracker(1,2));