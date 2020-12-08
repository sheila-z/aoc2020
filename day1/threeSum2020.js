let fs = require("fs");
const { Module } = require("module");
let expenseReport = fs.readFileSync("./test.txt", "utf-8");
let expenseArray = expenseReport.split("\n").map(Number);

let findSum = function(expArray, totalSum) {
    for (i = 0; i < (expArray.length - 1); i++) {
        for (j = 1; j < expArray.length; j++) {
            let sum = expArray[i] + expArray[j];
            if (sum === totalSum) {
                return expArray[i] * expArray[j];
            };
        };
    };
};

for (x = 0; x < (expenseArray.length); x++) {
    let modArray = [...expenseArray];
    modArray.splice(x, 1);
    let result = findSum(modArray, (2020 - expenseArray[x]));
    if (result !== undefined) {
        console.log(expenseArray[x] * result);
        break
    }
};