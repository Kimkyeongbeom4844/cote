const fs = require("fs");
const input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .replace(/\r/g, "")
  .split("\n");
let count = parseInt(input[0]);
for (let i = 1; i < 1 + parseInt(input[0]); i++) {
  const set = new Set();
  isNotGroup = false;
  input[i].split("").map((v, inx) => {
    if (set.has(v)) {
      if (input[i].split("")[inx - 1] !== v) {
        isNotGroup = true;
      }
    }
    set.add(v);
  });
  isNotGroup && count--;
}
console.log(count);
