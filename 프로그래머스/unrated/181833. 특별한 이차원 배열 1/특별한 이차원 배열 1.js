const solution = (n) => {
    const arr = Array.from(Array(n),(v,i)=>Array.from(Array(n),(_,j)=>{
        if(i === j) return 1;
        return 0;
    }))
    // console.log(arr)
    return arr;
}