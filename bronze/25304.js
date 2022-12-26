const input = require("fs").readFileSync("./input.txt").toString().trim();

const price = parseInt(input.split("\n")[0]);
const count = parseInt(input.split("\n")[1]);

let sum = 0;
for (let i = 2; i < 2 + count; i++) {
  sum += input
    .split("\n")
    [i].split(" ")
    .reduce((a, b) => {
      return a * b;
    });
}
sum === price ? console.log("Yes") : console.log("No");
