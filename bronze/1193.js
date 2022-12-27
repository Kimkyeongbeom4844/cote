const input = parseInt(
  require("fs").readFileSync("../input.txt").toString().trim()
);
let i = 1;
let count = 1;
let isStartLeft = true;
while (i < input) {
  count++;
  isStartLeft = !isStartLeft;
  i += count;
}
isStartLeft
  ? console.log(`${1 + (i - input)}/${count - (i - input)}`)
  : console.log(`${count - (i - input)}/${1 + (i - input)}`);
