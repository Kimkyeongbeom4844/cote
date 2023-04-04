const solution = (citations) => {
    for(let i=citations.length; i>=0; i--){
        // console.log(i)
        // console.log(citations.filter(v=>v>=i),i)
        if(citations.filter(v=>v>=i).length >= i){
            return i
        }
    }
}