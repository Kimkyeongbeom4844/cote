const solution = (myStr) => {
    const result = myStr.replace(/[a-c]/g,' ').split(' ').filter(v=>v);
    if(result.length) return result;
    return ["EMPTY"];
}