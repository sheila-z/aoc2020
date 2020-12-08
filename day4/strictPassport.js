const { constants } = require("buffer");
let fs = require('fs');
let inputText = fs.readFileSync('./test.txt', 'utf-8');
let passportArray = inputText.replace(/\n/g, ' ').split('  ');

let objBuilder = function (object) {
    let properties = object.split(' ');
    let passObj = {};
    properties.forEach(function(property) {
        let item = property.split(':');
        passObj[item[0]] = item[1];
    });
    return passObj;
};

const items = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

let testItems = function () {
    let totalCount = 0;
    for (i=0; i < passportArray.length; i++) {
        let count = 0;
        for (j=0; j < items.length; j++) {
            if (passportArray[i].includes(items[j])) {
                count = count + 1;
            };
        };
        if (count === items.length) {
            currentObj = objBuilder(passportArray[i]);

            if (currentObj.byr >= 1920 && currentObj.byr <= 2002 && 
                currentObj.iyr >= 2010 && currentObj.iyr <= 2020 &&
                currentObj.eyr >= 2020 && currentObj.eyr <= 2030 &&
                currentObj.hcl.match(/\#[a-f0-9]{6}/) &&
                (currentObj.ecl === 'amb' || currentObj.ecl === 'blu' ||
                    currentObj.ecl === 'brn' || currentObj.ecl === 'gry' ||
                    currentObj.ecl === 'grn' || currentObj.ecl === 'hzl' ||
                    currentObj.ecl === 'oth') &&
                currentObj.pid.match(/^[0-9]{9}$/) &&
                (currentObj.hgt.match(/1[5-8]\dcm/) || currentObj.hgt.match(/19[0-3]cm/) ||
                currentObj.hgt.match(/59in/) || currentObj.hgt.match(/[6-7]\din/) ||
                currentObj.hgt.match(/7[1-6]in/))
                ) {
                    totalCount = totalCount + 1;
            };
        };
    };
    return totalCount;
};

console.log(testItems());