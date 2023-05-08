const solution = (files) => {
    const arr = [];
    for(let i=0; i<files.length; i++){
        const NUMBER = files[i].match(/[0-9]+/)[0]
        const word = files[i].split(NUMBER)
        const HEAD = word[0];
        const TAIL = word[1];
        arr.push([HEAD.toUpperCase(),Number(NUMBER),TAIL,i])
    }
    const sortArr = arr.sort((a,b)=>{
        if(a[0].localeCompare(b[0]) === 0) return a[1]-b[1]
        return a[0].localeCompare(b[0]);
    })
    const result = [];
    for(let i=0; i<sortArr.length; i++){
        result.push(files[sortArr[i][3]])  
    }
    return result;
}