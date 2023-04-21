const solution = (arr) => {
    const result = [];
    let num = 0;
    while(num < arr.length){
        if(result.length === 0){
            result.push(arr[num]);
            num += 1;
            continue;
        }
        if(arr[num]>result[result.length-1]){
            result.push(arr[num]);
            num += 1;
        } else {
            result.pop();
        }
    }
    return result;
}