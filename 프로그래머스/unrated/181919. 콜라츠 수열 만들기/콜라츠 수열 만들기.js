const solution = (n) => {
    const result = [];
    result.push(n);
    while(n !== 1){
        if(n%2 === 0) n /= 2;
        else n = n*3+1;
        result.push(n);
    }
    return result;
}