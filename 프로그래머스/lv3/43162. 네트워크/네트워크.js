const solution = (n, computers) => {
    const arr = Array.from(Array(n),(v,i)=>new Set());
    for(let i=0; i<computers.length; i++){
        for(let j=0; j<computers[i].length; j++){
            if(i === j){
                arr[i].add(i);
                continue;
            }
            if(computers[i][j] === 1){
                arr[i].add(j);
                // arr[j] = arr[i]
                const sumArr = [];
                for(let k=0; k<i; k++){
                    if(arr[k] === arr[j]){
                        sumArr.push(k);
                    }
                }
                for(let k of sumArr){
                    arr[k] = arr[i];
                }
            }
        }
    }
    // console.log(arr)
    const result = new Set();
    for(let i of arr.values()){
        result.add(i);
    }
    // console.log(result)
    return result.size
}
