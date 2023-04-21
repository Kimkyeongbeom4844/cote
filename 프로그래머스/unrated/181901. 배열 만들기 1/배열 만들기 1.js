const solution = (n, k) => {
    const result = [0];
    while(Math.max(...result) <= n){
        result.push(Math.max(...result)+k);
    }
    // console.log(result)
    result.pop();
    result.shift();
    return result;
}