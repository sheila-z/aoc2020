let fs = require("fs");
let inputText = fs.readFileSync("./test.txt", "utf-8");
// Each line will be an item in the array
let policyPassArray = inputText.split("\n");

let total = 0;

for (i=0; i < policyPassArray.length; i++) {
    // Build a new array with index1, index2, letter and password
    let item = policyPassArray[i];
    let splitPolicy = item.split(" ");
    let numbers = splitPolicy[0].split("-");
    let policy = [];
    policy.push(numbers[0], numbers[1], splitPolicy[1].slice(0,1), splitPolicy[2]);

    //XOR for letter at index 1 or index 2
    if (policy[3][policy[0]-1] === policy[2] ^ policy[3][policy[1]-1] === policy[2]) {
        total += 1;
    };
};

console.log(total);