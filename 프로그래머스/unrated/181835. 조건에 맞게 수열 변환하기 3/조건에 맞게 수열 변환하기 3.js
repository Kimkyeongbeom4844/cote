const solution = (arr, k) => {
    if(k%2) return arr.map((v,i)=>v*k);
    return arr.map((v,i)=>v+k);
}