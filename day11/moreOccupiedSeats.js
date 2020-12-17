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

let findNextSeatHorizontal = function (row, column, signColumn, plan) {
    // let coordinate = {};
    for (let c = (column + signColumn); c < (plan[0].length) && c >= 0; c = c + signColumn) {
        if (c === (plan[0].length - 1) || c === 0) {
            return plan[row][c];
        } else if (plan[row][c] !== '.') {
            // coordinate.column = c;
            // coordinate.row = row;
            // return coordinate;
            return plan[row][c];
        };
    };
};

let findNextSeatVertical = function (row, column, signRow, plan) {
    // let coordinate = {};
    for (let r = (row + signRow); r < (plan.length) && r >= 0; r = r + signRow) {
        if (r === (plan.length - 1) || r === 0) {
            return plan[r][column];
        } else if (plan[r][column] !== '.') {
            return plan[r][column];
            // coordinate.column = column;
            // coordinate.row = r;
            // return coordinate;
        };
    };
};

let findNextSeatDiagonal = function (row, column, signRow, signColumn, plan) {
    // let coordinate = {};
    r = row;
    for (let c = (column + signColumn); c < (plan[0].length) && c >= 0; c = c + signColumn) {
        r = r + signRow;
        if (c === (plan[0].length - 1) || c === 0 || r === (plan.length - 1) || r === 0) {
            return plan[r][c];
        } else if (plan[r][c] !== '.') {
            // coordinate.column = c;
            // coordinate.row = r;
            // return coordinate;
            return plan[r][c];
        };
    };
};

let swapSeats = function (seatPlan) {
    //create new array seat plan
    newSeatPlan = [...seatPlan];

    let seatCount = 0;
    let changeCount = 0;
    for (let i = 1; (i < seatPlan.length - 1); i++) {
        // for each row create a temporary array with those values
        let tempArray = seatPlan[i].split('');
        for (let j = 1; j < (seatPlan[i].length - 1); j++) {
            let up = findNextSeatVertical(i, j, -1, seatPlan);
            let down = findNextSeatVertical(i, j, 1, seatPlan);
            let right = findNextSeatHorizontal(i, j, 1, seatPlan);
            let left = findNextSeatHorizontal(i, j, -1, seatPlan);
            let upRight = findNextSeatDiagonal(i, j, -1, 1, seatPlan);
            let upLeft = findNextSeatDiagonal(i, j, -1, -1, seatPlan);
            let downRight = findNextSeatDiagonal(i, j, 1, 1, seatPlan);
            let downLeft = findNextSeatDiagonal(i, j, 1, -1, seatPlan);
            if ((seatPlan[i][j] === 'L') && (up !== '#')
            && (down !== '#') && (right !== '#')
            && (left !== '#') && (upRight !== '#')
            && (upLeft !== '#') && (downRight !== '#')
            && (downLeft !== '#')) {
                tempArray.splice(j, 1, '#');
                changeCount = changeCount + 1;
            } else if (seatPlan[i][j] === '#') {
                if (up === '#') {
                    seatCount = seatCount + 1;
                };
                if (down === '#') {
                    seatCount = seatCount + 1;
                };
                if (right === '#') {
                    seatCount = seatCount + 1;
                };
                if (left === '#') {
                    seatCount = seatCount + 1;
                };
                if (upRight === '#') {
                    seatCount = seatCount + 1;
                };
                if (upLeft === '#') {
                    seatCount = seatCount + 1;
                };
                if (downRight === '#') {
                    seatCount = seatCount + 1;
                };
                if (downLeft === '#') {
                    seatCount = seatCount + 1;
                };
                if (seatCount > 4) {
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
    if (changeCount > 0) {
        changeCount = 0;
        return swapSeats(newSeatPlan);
    } else {
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