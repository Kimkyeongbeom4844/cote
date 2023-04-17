const solution = (k, dungeons) => {
    const arr = Array.from(Array(dungeons.length),(v,i)=>i);
    const result = new Set();
    const reqFuc = (left,sum) => {
        if(sum.length === dungeons.length){
            // console.log(left,sum);
            let life = k;
            let count = 0;
            for(let i=0; i<sum.length; i++){
                if(dungeons[sum[i]][0] > life) break;
                else {
                    life -= dungeons[sum[i]][1];
                    count++;
                }
            }
            return result.add(count);
        }
        for(let i=0; i<left.length; i++){
            const arr = [...left];
            const res = [...sum];
            res.push(...arr.splice(i,1))
            reqFuc(arr,res);
        }
    }
    reqFuc(arr,[]);
    return [...result].sort((a,b)=>b-a)[0];
}