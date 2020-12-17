let fs = require('fs');
let inputFile = fs.readFileSync('./test1.txt', 'utf-8');
let adaptersArray = inputFile.split('\n').map(Number);

adaptersArray.push(0);
adaptersArray = adaptersArray.sort((a, b) => a - b);

let count1 = 0;
let count3 = 1;

for (let i = 1; i < adaptersArray.length; i++) {
    if (adaptersArray[i] - adaptersArray[i-1] === 1) {
        count1 = count1 + 1;
    } else if (adaptersArray[i] - adaptersArray[i-1] === 3) {
        count3 = count3 + 1;
    };
};

console.log(count1 * count3);