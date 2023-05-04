const solution = (land) => {
    // let set = new Set();
    // const reqFuc = (n,exc,sum) => {
    //    if(n === land.length) return set.add(sum);
    //    const next = n+1;
    //     for(let i=0; i<4; i++){
    //         if(i === exc) continue;
    //         reqFuc(next,i,sum+land[n][i])
    //     }
    // }
    // for(let i=0; i<4; i++){
    //     reqFuc(1,i,land[0][i]);
    // }
    // return Math.max(...set)
    
    const dpArr = Array.from(Array(land.length),()=>Array(4).fill(0));
    // console.log(dpArr);
    for(let i=0; i<land.length; i++){
        if(i === 0){
            for(let j=0; j<4; j++){
                dpArr[i][j] = land[i][j];
            }
            continue;
        }
        for(let j=0; j<4; j++){
            for(let k=0; k<4; k++){
                if(j === k) continue;
                dpArr[i][j] = Math.max(dpArr[i][j],dpArr[i-1][k]+land[i][j]);
            }
        }
    }
    // console.log(dpArr);
    return Math.max(...dpArr[dpArr.length-1])
}
