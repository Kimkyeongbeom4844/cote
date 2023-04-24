const solution = (arr) => {
    const stk = [];
    let i = 0;
    while(arr.length > i){
        if(stk.length === 0) stk.push(arr[i]);
        else {
            if(stk[stk.length-1] === arr[i]) stk.pop();
            else stk.push(arr[i]);
        }
        i++
        // console.log(stk)
    }
    if(stk.length) return stk;
    return [-1]
}