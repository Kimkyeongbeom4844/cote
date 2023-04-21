const solution = (my_string) => {
    const result = [];
    for(let i=my_string.length-1; i>=0; i--){
        result.push(my_string.slice(i,my_string.length));
    }
    return result.sort()
}