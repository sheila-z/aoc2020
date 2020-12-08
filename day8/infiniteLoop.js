const { exec } = require('child_process');
let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let instructionsArray = inputText.split('\n');

let index = 0;
let accumulator = 0;
let executedIntructions = [];

// Run the instructions while keeping an array with the indexes already executed
// If a certain index is already in the array, break the loop
while (true) {
    currentInstruction = instructionsArray[index].split(' ');
    if (currentInstruction[0] === 'acc') {
        if (currentInstruction[1][0] === '+') {
            currentInstruction[1] = currentInstruction[1].replace('+', '');
            accumulator = accumulator + Number(currentInstruction[1]);
        } else {
            currentInstruction[1] = currentInstruction[1].replace('-', '');
            accumulator = accumulator - Number(currentInstruction[1]);
        };
        executedIntructions.push(index);
        index = index + 1;
        if (executedIntructions.includes(index)) {
            console.log(accumulator);
            break;
        };
    } else if (currentInstruction[0] === 'jmp') {
        if (currentInstruction[1][0] === '+') {
            currentInstruction[1] = currentInstruction[1].replace('+', '');
            executedIntructions.push(index);
            index = index + Number(currentInstruction[1]);
            if (executedIntructions.includes(index)) {
                console.log(accumulator);
                break;
            };
        } else {
            currentInstruction[1] = currentInstruction[1].replace('-', '');
            executedIntructions.push(index);
            index = index - Number(currentInstruction[1]);
            if (executedIntructions.includes(index)) {
                console.log(accumulator);
                break;
            };
        };
    } else {
        executedIntructions.push(index);
        index = index + 1;
        if (executedIntructions.includes(index)) {
            console.log(accumulator);
            break;
        };
    };
};