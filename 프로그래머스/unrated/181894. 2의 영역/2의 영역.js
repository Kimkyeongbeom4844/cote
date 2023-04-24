const solution = (arr) => {
    if(!arr.includes(2)) return [-1];
    const start = arr.indexOf(2);
    const end = arr.lastIndexOf(2);
    return arr.slice(start,end+1)
}