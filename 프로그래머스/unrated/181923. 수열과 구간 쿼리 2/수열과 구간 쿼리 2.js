const solution = (arr, queries) => {
    const result = [];
    for(let i=0; i<queries.length; i++){
        const filter = arr.filter((v,index)=>index>=queries[i][0] && index<=queries[i][1] && v>queries[i][2]);
        const min = Math.min(...filter) === Infinity ? -1 : Math.min(...filter)
        result.push(min)
    }
    return result
}