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
            //
            // console.log(min)
            // console.log(max)
        } else {
            if (j === 6) {
                return max;
            };
            min = Math.floor(((max - min) / 2) + min + 1);
            //
            // console.log(min)
            // console.log(max)
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
            //
            // console.log(min)
            // console.log(max)
        } else {
            if (j === 9) {
                return max;
            };
            min = Math.floor(((max - min) / 2) + min + 1);
            //
            // console.log(min)
            // console.log(max)
            
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
        return b - a;
    });
};

sortSeatID(seatMath);
console.log(seatMath[0]);