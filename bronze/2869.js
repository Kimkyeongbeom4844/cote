const [up, down, goal] = require("fs")
  .readFileSync("../input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

let position = 0;
let day = 1;
while (position + up < goal) {
  position += up;
  if (position < goal) {
    position -= down;
  } else {
    break;
  }
  day++;
}
console.log(day);
