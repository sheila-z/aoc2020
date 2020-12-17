let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let navArray = inputText.split('\n');

let horizontalTrack = 10;
let verticalTrack = 1;
let shipHorizontalTrack = 0;
let shipVerticalTrack = 0;

let navigate = function (dir, value) {
    if (dir === 'N') {
        verticalTrack = verticalTrack + Number(value);
    } else if (dir === 'S') {
        verticalTrack = verticalTrack - Number(value);
    } else if (dir === 'E') {
        horizontalTrack = horizontalTrack + Number(value);
    } else if (dir === 'W') {
        horizontalTrack = horizontalTrack - Number(value);
    } else if (dir === 'F') {
        shipHorizontalTrack = shipHorizontalTrack + (value * horizontalTrack);
        shipVerticalTrack = shipVerticalTrack + (value * verticalTrack);
    } else if (dir === 'R') {
        if (value === '90') {
            let temp = horizontalTrack * (-1);
            horizontalTrack = verticalTrack;
            verticalTrack = temp;
        } else if (value === '180') {
            horizontalTrack = horizontalTrack * (-1);
            verticalTrack = verticalTrack * (-1);
        } else if (value === '270') {
            let temp = verticalTrack * (-1);
            verticalTrack = horizontalTrack;
            horizontalTrack = temp;
        };
    } else if (dir === 'L') {
        if (value === '90') {
            let temp = verticalTrack * (-1);
            verticalTrack = horizontalTrack;
            horizontalTrack = temp;
        } else if (value === '180') {
            horizontalTrack = horizontalTrack * (-1);
            verticalTrack = verticalTrack * (-1);
        } else if (value === '270') {
            let temp = horizontalTrack * (-1);
            horizontalTrack = verticalTrack;
            verticalTrack = temp;
        };
    };
};

navArray.forEach(item => {
    let directionValue = item[0];
    let incrementValue = item.substring(1);
    navigate(directionValue, incrementValue);
});

console.log(Math.abs(shipHorizontalTrack) + Math.abs(shipVerticalTrack));