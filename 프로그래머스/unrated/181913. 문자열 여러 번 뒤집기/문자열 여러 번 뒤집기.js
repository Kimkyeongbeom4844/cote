const solution = (my_string, queries) => {
    const arr =[...my_string]
    for(let i=0; i<queries.length; i++){
        const spliceArr = arr.splice(queries[i][0],queries[i][1]-queries[i][0]+1);
        // console.log(spliceArr)
        arr.splice(queries[i][0],0,...spliceArr.reverse())
        // console.log(arr)
    }
    return arr.join('')
}