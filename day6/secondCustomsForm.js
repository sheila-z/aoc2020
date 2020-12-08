let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let questionsArray = inputText.replace(/\n/g, ' ').split('  ');

let questions = 0;

for (i=0; i<questionsArray.length; i++) {
    let newArray = questionsArray[i].replace(/\s/g, ',');
    newArray = newArray.split(',');

    newArray.sort(function(a, b){
        return a.length - b.length;
    });

    // if only 1 person in the group
    if (newArray.length === 1) {
        questions = questions + newArray[0].length;
        // console.log(newArray)
        // console.log(questions)
    } else {
        // if more than 1 person in the group
        
        for (k=0; k < (newArray[0].length); k++) {
            let count = 0;
            for (j=1; j<newArray.length; j++) {
                if (newArray[j].includes(newArray[0][k])) {
                    count = count + 1;
                    // console.log(newArray[j].includes(newArray[0][k]))
                    // console.log(count)
                };
            };
            if (count === (newArray.length - 1)) {
                questions = questions + 1;
            };
        };
    };
};
console.log(questions);