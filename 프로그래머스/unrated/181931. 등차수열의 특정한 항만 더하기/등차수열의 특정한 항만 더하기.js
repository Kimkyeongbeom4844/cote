const solution = (a, d, included) => {
    let sum = 0;
    let result = 0;
    for(let i=0; i<included.length; i++){
        if(i===0) sum += a;
        else sum += d;
        if(included[i]) result+=sum;
    }
    return result;
}