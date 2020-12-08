let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let bagArray = inputText.split('\n');

// function takes array of bags to analyse, paired array of values reulting
// of the multiplication of the current amount found by the previous multiplications
// also takes in the current count for recursion
let analyseBags = function (bagTypeUnderAnalysis, bagIndex, count) {
    // zero-ing values
    let bagsToBeAnalysed = [];
    let bagsValues = [];
    let mult = 0;
    
    // for Each bag type on the list
    bagTypeUnderAnalysis.forEach(function (bags, index) {
        // run through the whole input
        bagArray.forEach(function (bagRule) {
            // split the rule in 2 pieces: container and content
            bagRule = bagRule.split('contain');
            // make the container singular (bag)
            bagRule[0] = bagRule[0].replace('bags ', 'bag');
            // check which conatiner has the bag you're analysing
            if (bagRule[0].includes(bags)) {
                // excludes bags that do not contain anything
                // probably a logic flaw here, if this was the case in the very first pass
                if (!bagRule[1].includes('other')) {
                    let bagsInside = bagRule[1].split(',')
                    bagsInside.forEach(function (splitBagsInside) {
                        // for each bag in the container trim, make sigular and remove period
                        splitBagsInside = splitBagsInside.trim();
                        splitBagsInside = splitBagsInside.replace('bags.', 'bag');
                        splitBagsInside = splitBagsInside.replace('bags', 'bag');
                        splitBagsInside = splitBagsInside.replace('bag.', 'bag');
                        // multiply number found by the previous multiplication
                        mult = splitBagsInside[0] * bagIndex[index];
                        // push multiplication to new array
                        bagsValues.push(mult);
                        // increase count
                        count = count + mult;
                        // remove the number and trims bag name before pushing to new array
                        splitBagsInside = splitBagsInside.replace(/\d/, '')
                        splitBagsInside = splitBagsInside.trim();
                        bagsToBeAnalysed.push(splitBagsInside);
                    });
                };
            };
        });   
    });
    // recursion if array not empty
    if (bagsToBeAnalysed.length > 0) {
        analyseBags(bagsToBeAnalysed, bagsValues, count);
    } else {
        console.log(count);
    };
};

const initialBag = ['shiny gold bag'];
const initialValue = ['1'];
// analyseBags must take in arrays, initialised above
analyseBags(initialBag, initialValue, 0);