const util = require('util')

let fs = require("fs");
let inputText = fs.readFileSync("./input.txt", "utf-8");
let seatsArray = inputText.split("\n");

let rowSearch = function (seatID) {
    let min = 0;
    let max = 127;
    for (j=0; j<7; j++) {
        if (seatID[j] === 'F') {
            if (j === 6) {
                return min;
            };
            max = Math.floor((max - min) / 2 + min);
        } else {
            if (j === 6) {
                return max;
            };
            min = Math.floor(((max - min) / 2) + min + 1);
        };
    };
};

let columnSearch = function (seatID) {
    let min = 0;
    let max = 7;
    for (j=7; j<10; j++) {
        if (seatID[j] === 'L') {
            if (j === 9) {
                return min;
            };
            max = Math.floor((max - min) / 2 + min);
        } else {
            if (j === 9) {
                return max;
            };
            min = Math.floor(((max - min) / 2) + min + 1);
        };
    };
};

let seatMath = [];

for (i=0; i<seatsArray.length; i++) {
    let row = rowSearch(seatsArray[i]);
    let column = columnSearch(seatsArray[i]);
    seatMath.push(parseInt(row * 8 + column));
};

let sortSeatID = function (array) {
    array.sort(function(a, b) {
        return a - b;
    });
};

sortSeatID(seatMath);

for (x=0; x<(seatMath.length - 1); x++) {
    if (seatMath[x] + 2 === seatMath[x+1]) {
        console.log(seatMath[x]+1);
    };
};