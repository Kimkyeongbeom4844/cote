const input = require("fs").readFileSync("../input.txt").toString().trim();

let i = 0;
let count = 1;
while (parseInt(input) !== 1 && i < (parseInt(input) - 1) / 6) {
  i = i + count;
  count++;
}
console.log(parseInt(input) === 1 ? 1 : count);
