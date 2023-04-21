const solution = (n) => {
    let sum = 0;
    if(n%2 === 1){
        for(let i=1; i<=n; i+=2){
            // console.log(i)
            sum += i;
        }
    } else {
        for(let i=2; i<=n; i+=2){
            // console.log(i)
            sum += i**2
        }
    }
    return sum;
}