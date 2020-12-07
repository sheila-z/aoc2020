const { constants } = require("buffer");
const { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } = require("constants");
let fs = require('fs');
let inputText = fs.readFileSync('./input.txt', 'utf-8');
let passportArray = inputText.replace(/\n/g, ' ').split('  ');

const items = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

let testItems = function () {
    let totalCount = 0;
    for (i=0; i < passportArray.length; i++) {
        let count = 0;
        for (j=0; j < items.length; j++) {
            if (passportArray[i].includes(items[j])) {
                count = count + 1;
            };
        };
        if (count === items.length) {
            totalCount = totalCount + 1;
        };
    };
    return totalCount;
};

console.log(testItems());