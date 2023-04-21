const solution = (arr, queries) => {
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        map.set(i,arr[i]);
    }
    for(let i=0; i<queries.length; i++){
        for(let j=queries[i][0]; j<=queries[i][1]; j++){
            map.set(j,map.get(j)+1);
        }
    }
    const result = [];
    for(let [key,value] of map){
        result.push(value)
    }
    return result;
}