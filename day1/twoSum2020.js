let fs = require("fs");
let expenseReport = fs.readFileSync("./test.txt", "utf-8");
let expenseArray = expenseReport.split("\n").map(Number);

let findSum = function(expArray) {
    for (i = 0; i < (expArray.length - 1); i++) {
        for (j = 1; j < expArray.length; j++) {
            let sum = expArray[i] + expArray[j];
            if (sum === 2020) {
            return expArray[i] * expArray[j];
            };
        };
    };
};

console.log(findSum(expenseArray));