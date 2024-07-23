function solution(my_string, n) {
    const stringToArr = my_string.split('');
    console.log(stringToArr)
    const result = [];
    for(let i=0; i<stringToArr.length; i++){
        for(let j=0; j<n; j++){
            result.push(stringToArr[i])
        }
    };
    console.log(result.join(''))
    return result.join('');
}