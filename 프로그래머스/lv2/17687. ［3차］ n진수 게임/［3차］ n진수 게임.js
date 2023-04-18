const solution = (n, t, m, p) => {
    let result = '';
    let seq = p-1;
    let num = 0;
    while(result.length < t*m){
        result += num.toString(n).toUpperCase();
        num++;
    }
    // console.log(result)
    return [...result].filter((v,i)=>{
        if(p === m) return (i+1)%m === 0
        else return (i+1)%m === p
    }).splice(0,t).join('')
}