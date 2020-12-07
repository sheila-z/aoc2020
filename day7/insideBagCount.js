let fs = require('fs');
let inputText = fs.readFileSync('./input.txt', 'utf-8');
let bagArray = inputText.split('\n');

let analyseBags = function (bagTypes, bagNumbers, currentCount) {
    let bagTypeUnderAnalysis = bagTypes;
    let bagIndex = bagNumbers;
    // console.log(bagIndex); //
    let count = currentCount;
    // console.log(bagTypeUnderAnalysis)
    let bagsToBeAnalysed = [];
    let bagsValues = [];
    let mult = 0;
    
    bagTypeUnderAnalysis.forEach(function (bags, index) {
        // console.log(bags) //
        bagArray.forEach(function (bagRule) {
            bagRule = bagRule.split('contain');
            // console.log(bagRule[0])
            // console.log(bagRule[1])
            // console.log(index)
            // console.log(bagRule[1].includes(bags))
            bagRule[0] = bagRule[0].replace('bags ', 'bag');
            // console.log(bagRule[0].includes(bags)); //
            if (bagRule[0].includes(bags)) {
                if (!bagRule[1].includes('other')) {
                    let bagsInside = bagRule[1].split(',')
                    bagsInside.forEach(function (splitBagsInside) {
                        splitBagsInside = splitBagsInside.trim();
                        splitBagsInside = splitBagsInside.replace('bags.', 'bag');
                        splitBagsInside = splitBagsInside.replace('bags', 'bag');
                        splitBagsInside = splitBagsInside.replace('bag.', 'bag');
                        // console.log(splitBagsInside); //
                        
                        // console.log(bagsValues); //
                        // console.log(splitBagsInside[0]); //
                        // console.log(bagIndex[index]); //
                        mult = splitBagsInside[0] * bagIndex[index];
                        bagsValues.push(mult);
                        count = count + mult;
                        // console.log(count); //
                        splitBagsInside = splitBagsInside.replace(/\d/, '')
                        splitBagsInside = splitBagsInside.trim();
                        bagsToBeAnalysed.push(splitBagsInside);
                    });
                };
            };
        });   
    });
    if (bagsToBeAnalysed.length > 0) {
        analyseBags(bagsToBeAnalysed, bagsValues, count);
    } else {
        console.log(count);
    };
};

const initialBag = ['shiny gold bag'];
const initialValue = ['1'];
analyseBags(initialBag, initialValue, 0);