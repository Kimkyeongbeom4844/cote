const solution = (arr, queries) => {
    const map = new Map();
    for(let i=0; i<arr.length; i++){
        map.set(i,arr[i]);
    }
    console.log(map)
    for(let i=0; i<queries.length; i++){
        // console.log(queries[i])
        const 앞에꺼 = map.get(queries[i][0]);
        map.set(queries[i][0],map.get(queries[i][1]));
        map.set(queries[i][1],앞에꺼);
    }
    const result = [];
    for(let [key,value] of map){
        result.push(value);
    }
    return result;
}