const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();
const chess = [1, 1, 2, 2, 2, 8];
const result = [];
for (let i in input.split(" ")) {
  result.push(chess[i] - input.split(" ")[i]);
}
console.log(result.join(" "));
