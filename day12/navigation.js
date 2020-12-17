let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let navArray = inputText.split('\n');

let horizontalTrack = 0;
let verticalTrack = 0;
let direction = 'E';

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
        navigate(direction, value);
    } else if (dir === 'R') {
        if (value === '90') {
            if (direction === 'E') {
                direction = 'S';
            } else if (direction === 'S') {
                direction = 'W';
            } else if (direction === 'W') {
                direction = 'N';
            } else if (direction === 'N') {
                direction = 'E';
            };
        } else if (value === '180') {
            if (direction === 'E') {
                direction = 'W';
            } else if (direction === 'W') {
                direction = 'E';
            } else if (direction === 'N') {
                direction = 'S';
            } else if (direction === 'S') {
                direction = 'N';
            };
        } else if (value === '270') {
            if (direction === 'E') {
                direction = 'N';
            } else if (direction === 'N') {
                direction = 'W';
            } else if (direction === 'W') {
                direction = 'S';
            } else if (direction === 'S') {
                direction = 'E';
            };
        };
    } else if (dir === 'L') {
        if (value === '90') {
            if (direction === 'E') {
                direction = 'N';
            } else if (direction === 'N') {
                direction = 'W';
            } else if (direction === 'W') {
                direction = 'S';
            } else if (direction === 'S') {
                direction = 'E';
            };
        } else if (value === '180') {
            if (direction === 'E') {
                direction = 'W';
            } else if (direction === 'W') {
                direction = 'E';
            } else if (direction === 'N') {
                direction = 'S';
            } else if (direction === 'S') {
                direction = 'N';
            };
        } else if (value === '270') {
            if (direction === 'E') {
                direction = 'S';
            } else if (direction === 'S') {
                direction = 'W';
            } else if (direction === 'W') {
                direction = 'N';
            } else if (direction === 'N') {
                direction = 'E';
            };
        };
    };
};

navArray.forEach(item => {
    let directionValue = item[0];
    let incrementValue = item.substring(1);
    navigate(directionValue, incrementValue);
});

console.log(Math.abs(horizontalTrack) + Math.abs(verticalTrack));