const solution = (n, k) => {
    const arr = n.toString(k).replace(/0+/i,'0').split('0').filter(v=>v.length !== 0);
    // console.log(arr)
    return arr.reduce((a,c)=>{
        const C = Number(c)
        if(C === 1) return a;
        if(C === 2) return ++a;
        for(let i=2; i<=parseInt(Math.sqrt(C)); i++){
            if(C%i === 0) return a;
        }
        return ++a;
    },0)
}