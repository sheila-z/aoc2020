let fs = require('fs');
let inputText = fs.readFileSync('./input.txt', 'utf-8');
let bagArray = inputText.split('\n');

let finalBagArray = [];

let analyseBags = function (bagTypes) {
    let bagTypeUnderAnalysis = bagTypes;
    console.log(bagTypeUnderAnalysis)
    let bagsToBeAnalysed = [];
    
    bagTypeUnderAnalysis.forEach(function (bags) {
        bagArray.forEach(function (bagRule, index) {
            bagRule = bagRule.split('contain');
            // console.log(bags)
            // console.log(bagRule[0])
            // console.log(bagRule[1])
            // console.log(index)
            // console.log(bagRule[1].includes(bags))
            bagRule[0] = bagRule[0].replace('bags ', 'bag');
            if (bagRule[1].includes(bags) && !bagsToBeAnalysed.includes(bagRule[0])) {
                if (!finalBagArray.includes(bagRule[0])) {
                    finalBagArray.push(bagRule[0]);
                };
                bagsToBeAnalysed.push(bagRule[0]);
            };
        });   
    });
    if (bagsToBeAnalysed.length > 0) {
        analyseBags(bagsToBeAnalysed);
    } else {
        let countBags = finalBagArray.length;
        console.log(countBags)
    };
};

const initialBag = ['shiny gold bag'];
analyseBags(initialBag);