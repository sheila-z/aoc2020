let fs = require('fs');
let inputFile = fs.readFileSync('./test1.txt', 'utf-8');
let adaptersArray = inputFile.split('\n').map(Number);

// add first and last values
adaptersArray.push(0);
adaptersArray = adaptersArray.sort((a, b) => a - b);
adaptersArray.push(adaptersArray[adaptersArray.length-1] + 3);

// check each interval and create an array with that value
intervalsArray = [];
for (let i = 1; i < adaptersArray.length; i++) {
    if (adaptersArray[i] - adaptersArray[i-1] === 1) {
        intervalsArray.push(1)
    } else {
        intervalsArray.push(3)
    };
};

let totalPermutations = 1;
let count = 0;

// count consecutive 1s
for (let j = 0; j < (intervalsArray.length - 1); j++) {
    // if it's the last consecutive 1
    if (intervalsArray[j] === 1 && intervalsArray[j+1] === 3) {
        // count the amount of permutations for that number of consecutive 1s
        permutations = 1 + ((count * (count + 1)) / 2);
        // multiply by the cumulative permutation
        totalPermutations = totalPermutations * permutations;
        // reset count to zero
        count = 0;
    // if it's a 1, keep count of it
    } else if (intervalsArray[j] === 1) {
        count = count + 1;
    };
};

console.log(totalPermutations);