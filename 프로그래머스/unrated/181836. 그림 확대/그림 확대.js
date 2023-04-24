const solution = (picture, k) => {
    return picture.map(v=>{
        let word=''
        for(let i=0; i<v.length; i++){
           word += v[i].repeat(k) 
        }
        return word;
    }).reduce((a,c)=>{
        const arr = [];
        for(let i=0; i<k; i++){
            arr.push(c);
        }
       return [...a,...arr] 
    },[]);
}