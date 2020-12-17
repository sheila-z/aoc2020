let fs = require('fs');
let inputFile = fs.readFileSync('./test.txt', 'utf-8');
let numbersArray = inputFile.split('\n').map(Number);

// receives an index, a preambule size and a list
let sumFinder = function (index, preambule, numbersList) {
    // iterates over the previous number of items equal to the preambule size
    for (let j = (index - preambule); j < (index - 1); j++) {
        // tries sum combinations
        for (let k = (j + 1); k < index; k++) {
            // returns -1 if it finds a valid one
            if (numbersList[j] + numbersList[k] === numbersList[index]) {
                return -1;
            // else it verifies if it was the last combination to try and if yes returns that number
            } else {
                if (j === (index - 2) && k === (index - 1)) {
                    return numbersList[index];
                };
            };
        };
    };
};

// iterates over the list, starting from the first item after the preambule
let iterator = function (preambule, numbersList) {
    for (let i = preambule; i < numbersList.length; i++) {
        // for each item it calls the sumFinder
        let iteratorResult = sumFinder(i, preambule, numbersList);
        if (iteratorResult !== -1) {
            return iteratorResult;
        }
    };
};

// this defines the result of the first problem
let invalidNumber = iterator(5, numbersArray);

// recursive function that starts on a index and sums the next numbers until it's equal or greater than the invalid number
let sumChecker = function (indexA, array, sum) {
    if (sum < invalidNumber) {
        sum = sum + array[indexA];
        return sumChecker((indexA+1), array, sum);
    } else {
        if (sum === invalidNumber) {
            return (indexA - 1);
        } else {
            return -1;
        };
    };
};

// iterates over the list of numbers until the second last and calls the sumChecker function to test from that index
let test = -1;
for (let a = 0; a < (numbersArray.length - 1); a++) {
    test = sumChecker(a, numbersArray, 0);
    if (test !== -1) {
        results = [];
        for (let b = a; b < (test+1); b++) {
            results.push(numbersArray[b]);
        };
        break;
    };
};

// sort ascending
results = results.sort((a, b) => a - b);
// sums min and max
console.log(results[0] + results[results.length-1]);