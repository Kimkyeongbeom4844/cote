const solution = (arr, delete_list) => {
    const result = [];
    for(let i=0; i<arr.length; i++){
        if(delete_list.includes(arr[i])) continue;
        result.push(arr[i])
    }
    return result;
}