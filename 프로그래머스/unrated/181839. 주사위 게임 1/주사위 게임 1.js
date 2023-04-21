const solution = (a, b) => {
    const arr = [];
    arr.push(a%2);
    arr.push(b%2);
    const 홀짝 = arr.reduce((a,c)=>a+c,0);
    switch(홀짝){
        case 2 :
            return a**2+b**2;
        case 1 :
            return 2*(a+b);
        case 0 :
            return Math.abs((a-b));
    }
}