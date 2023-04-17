const solution = (n, s) => {
    const arr = [];
    let num = s;
    let count = n;
    while(arr.length !== n){
        arr.push(parseInt(num/count));
        num -= parseInt(num/count);
        count--;
    }
    if(arr.includes(0)) return [-1];
    else return arr.sort((a,b)=>a-b);
}