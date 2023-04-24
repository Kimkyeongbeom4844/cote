const solution = (strArr) => {
    const map = new Map();
    for(let i=0; i<strArr.length; i++){
        if(map.has(strArr[i].length)) map.set(strArr[i].length,map.get(strArr[i].length)+1);
        else map.set(strArr[i].length,1)
    }
    // console.log(map)
    return [...map].sort((a,b)=>{
        if(b[1] === a[1]){
            return b[0] - a[0]
        }
        return b[1] - a[1];
    })[0][1]
}