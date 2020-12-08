let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let questionsArray = inputText.replace(/\n/g, ' ').split('  ');

let sum = 0;

for (i=0; i<questionsArray.length; i++) {
    let stringNoSpace = questionsArray[i].replace(/\s/g, '');
    stringNoSpace = Array.from(new Set(stringNoSpace.split(''))).toString();
    stringNoSpace = stringNoSpace.replace(/,/g, '');
    sum = sum + stringNoSpace.length;
};
console.log(sum);