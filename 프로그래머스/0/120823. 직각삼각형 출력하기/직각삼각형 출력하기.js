const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // console.log(line)
    for(let i=0; i<line; i++){
        console.log('*'.repeat(i+1))
    }
})