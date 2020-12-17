let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let seatsArray = inputText.split('\n');

// create padding of type "floor" to the right and left of the seat plan
for (let a = 0; a < seatsArray.length; a++) {
    seatsArray[a] = '.' + seatsArray[a] + '.';
};

// create padding of type "floor" to the top and bottom
let width = seatsArray[0].length;
let padding = '';
for (let b = 0; b < width; b++) {
    padding = padding + '.';
};
seatsArray.splice(0, 0, padding);
seatsArray.push(padding);

let swapSeats = function (seatPlan) {
    //create new array seat plan
    newSeatPlan = [...seatPlan];

    let seatCount = 0;
    let changeCount = 0;
    for (let i = 1; (i < seatPlan.length - 1); i++) {
        // for each row create a temporary array with those values
        let tempArray = seatPlan[i].split('');
        for (let j = 1; j < (seatPlan[i].length - 1); j++) {
            if ((seatPlan[i][j] === 'L') && (seatPlan[i-1][j-1] !== '#')
            && (seatPlan[i-1][j] !== '#') && (seatPlan[i-1][j+1] !== '#')
            && (seatPlan[i][j-1] !== '#') && (seatPlan[i][j+1] !== '#')
            && (seatPlan[i+1][j-1] !== '#') && (seatPlan[i+1][j] !== '#')
            && (seatPlan[i+1][j+1] !== '#')) {
                tempArray.splice(j, 1, '#');
                changeCount = changeCount + 1;
            } else if (seatPlan[i][j] === '#') {
                if (seatPlan[i-1][j-1] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatPlan[i-1][j] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatPlan[i-1][j+1] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatPlan[i][j-1] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatPlan[i][j+1] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatPlan[i+1][j-1] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatPlan[i+1][j] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatPlan[i+1][j+1] === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatCount > 3) {
                    tempArray.splice(j, 1, 'L');
                    changeCount = changeCount + 1;
                };
                seatCount = 0;
            };
        };
        let tempSeatPlan = ''
        tempArray.forEach(element => {
            tempSeatPlan = tempSeatPlan + element;
        });
        newSeatPlan.splice(i, 1, tempSeatPlan);
    };
    // console.log(newSeatPlan); //
    if (changeCount > 0) {
        changeCount = 0;
        return swapSeats(newSeatPlan);
    } else {
        // console.log(newSeatPlan);
        let occupiedSeats = 0;
        newSeatPlan.forEach(element => {
            for (let k = 0; k < element.length; k++) {
                if (element[k] === '#') {
                    occupiedSeats = occupiedSeats + 1;
                };
            };
        });
        console.log(occupiedSeats);
    };
};

swapSeats(seatsArray);