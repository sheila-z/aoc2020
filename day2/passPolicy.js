let fs = require("fs");
let inputText = fs.readFileSync("./test.txt", "utf-8");
// Each line will be an item in the array
let policyPassArray = inputText.split("\n");

let total = 0;

for (i=0; i < policyPassArray.length; i++) {
    // Build a new array with min, max, letter and password
    let item = policyPassArray[i];
    let splitPolicy = item.split(" ");
    let numbers = splitPolicy[0].split("-");
    let policy = [];
    policy.push(numbers[0], numbers[1], splitPolicy[1].slice(0,1), splitPolicy[2]);
   
    // count how many times letter appears in password
    let results = [...policy[3].matchAll(policy[2])]
    let count = results.length;

    // check policy against min and max
    if (count >= policy[0] && count <= policy[1]) {
        total += 1;
    };
};

console.log(total);