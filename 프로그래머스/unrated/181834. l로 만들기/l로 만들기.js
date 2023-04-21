const solution = (myString) => {
    const result = [];
    for(let i=0; i<myString.length; i++){
        if(/[a-k]/.test(myString[i])) result.push('l');
        else result.push(myString[i])
    }
    return result.join('')
}