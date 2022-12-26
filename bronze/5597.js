const fs = require("fs");

const input = fs.readFileSync("./input.txt").toString().trim();
const submitStd = input.replace(/\r/g, "").split("\n");
let arr = [];
for (let i = 1; i <= 30; i++) {
  submitStd.includes(i.toString()) || arr.push(i);
}
console.log(arr.join("\n"));
