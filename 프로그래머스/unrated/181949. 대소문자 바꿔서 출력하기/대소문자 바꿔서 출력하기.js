const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const 소문자냐 = /[a-z]/;
    console.log([...str].map(v=>{
        if(소문자냐.test(v)) return v.toUpperCase();
        return v.toLowerCase();
    }).join(''))
});