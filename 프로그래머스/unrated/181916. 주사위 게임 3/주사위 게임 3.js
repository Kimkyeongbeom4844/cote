const solution = (a, b, c, d) => {
    const map = new Map();
    const arr = [a,b,c,d];
    for(let i of arr){
        if(map.has(i)) map.set(i,map.get(i)+1);
        else map.set(i,1);
    }
    const sortArr = [...map].sort((a,b)=>b[1]-a[1]);
    // console.log(map,sortArr)
    switch(sortArr[0][1]){
        case 4 :
            return sortArr[0][0]*1111;
        case 3 :
            return (10*sortArr[0][0]+sortArr[1][0])**2;
        case 2 :
            if(map.size === 2) return (sortArr[0][0]+sortArr[1][0]) * Math.abs(sortArr[0][0]-sortArr[1][0]);
            return sortArr[1][0] * sortArr[2][0];
        case 1 :
            return [...map].sort((a,b)=>a[0]-b[0])[0][0]
    }
}