const solution = (l, r) => {
    const result = [];
    for(let i=l; i<=r; i++){
        const regExp = /^[05]+$/
        if(regExp.test(i)){
            // console.log(i);
            result.push(i)
        } 
    }
    if(result.length) return result;
    return [-1];
}