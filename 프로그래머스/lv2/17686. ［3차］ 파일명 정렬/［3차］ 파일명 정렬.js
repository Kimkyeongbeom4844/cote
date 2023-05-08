const solution = (files) => {
    const headArr = [];
    const arr = [];
    for(let i=0; i<files.length; i++){
        const NUMBER = files[i].match(/[0-9]+/)[0]
        const word = files[i].split(NUMBER)
        const HEAD = word[0];
        const TAIL = word[1];
        headArr.push([HEAD.toUpperCase(),i]);
        arr.push([HEAD.toUpperCase(),Number(NUMBER),TAIL,i])
    }
    const result = arr.sort((a,b)=>{
        if(a[0].localeCompare(b[0]) === 0){
            return a[1]-b[1]
        }
        return a[0].localeCompare(b[0]);
    })
    // console.log(result)
    const res = [];
    for(let i=0; i<result.length; i++){
        res.push(files[result[i][3]])  
    }
    // console.log(res)
    return res;
}