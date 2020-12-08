const { exec } = require('child_process');
let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let instructionsArray = inputText.split('\n');

// Tests the instructions and only returns a non-zero value if broke out of a loop 
// and ended at the final instruction
let testingLoop = function(instructions) {
    let index = 0;
    let accumulator = 0;
    let executedIntructions = [];

    // runs through the whole instruction set
    while (index !== instructions.length) {
        currentInstruction = instructions[index].split(' ');
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
                break;
            };
        } else if (currentInstruction[0] === 'jmp') {
            if (currentInstruction[1][0] === '+') {
                currentInstruction[1] = currentInstruction[1].replace('+', '');
                executedIntructions.push(index);
                index = index + Number(currentInstruction[1]);
                if (executedIntructions.includes(index)) {
                    break;
                };
            } else {
                currentInstruction[1] = currentInstruction[1].replace('-', '');
                executedIntructions.push(index);
                index = index - Number(currentInstruction[1]);
                if (executedIntructions.includes(index)) {
                    break;
                };
            };
        } else {
            executedIntructions.push(index);
            index = index + 1;
            if (executedIntructions.includes(index)) {
                break;
            };
        };
    };
    if (index === instructions.length) {
        return accumulator;
    };
};

// Iterate through the whole list of instructions
// Each time you find a 'nop' or a 'jmp', swap it and call the function to test the solution
for (i=0; i < instructionsArray.length; i++) {
    newArray = [...instructionsArray];
    
    if (newArray[i].includes('nop')) {
        let stringN = newArray[i].replace('nop', 'jmp');
        newArray.splice(i, 1, stringN);
        let test = testingLoop(newArray);
        // prints result when receives an accumulator that's not zero and breaks out of the loop
        if (test > 0) {
            console.log(test);
            break;
        };
    } else if (newArray[i].includes('jmp')) {
        let stringN = newArray[i].replace('jmp', 'nop');
        newArray.splice(i, 1, stringN);
        let test = testingLoop(newArray);
        if (test > 0) {
            console.log(test);
            break;
        };
    };
};