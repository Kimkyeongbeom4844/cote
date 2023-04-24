const solution = (arr) => {
    let num = 1;
    while (arr.length > num){
        num *= 2;
    } 
    while(arr.length !== num){
        arr.push(0)
    }
    return arr;
}