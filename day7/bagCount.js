let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let bagArray = inputText.split('\n');

let finalBagArray = [];

let analyseBags = function (bagTypeUnderAnalysis) {
    let bagsToBeAnalysed = [];
    
    // for each bag on the array
    bagTypeUnderAnalysis.forEach(function (bags) {
        // run through the rules list
        bagArray.forEach(function (bagRule) {
            // split between container and content
            bagRule = bagRule.split('contain');
            // for the container, trim and make it singular
            bagRule[0] = bagRule[0].replace('bags ', 'bag');
            // check if the content has the bag under analysis and if the new array doesn't contain the container
            if (bagRule[1].includes(bags) && !bagsToBeAnalysed.includes(bagRule[0])) {
                // check if the container is not in the final array already
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