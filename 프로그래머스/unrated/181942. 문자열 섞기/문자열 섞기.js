const solution = (str1, str2) => {
    let toggle = true;
    const result = [];
    const length = str1.length;
    const arr1 = [...str1];
    const arr2 = [...str2];
    for(let i=0; i<length; i++){
        result.push(arr1.shift());
        result.push(arr2.shift());
    }
    return result.join('');
}