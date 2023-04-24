const solution = (arr, queries) => {
    for(let i=0; i<queries.length; i++){
        for(let j=queries[i][0]; j<=queries[i][1]; j++){
            if(j%queries[i][2]===0) arr[j]++
        }
        // console.log(arr)
    }
    return arr;
}