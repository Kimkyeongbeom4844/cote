const solution = (intStrs, k, s, l) => {
    const result = [];
    for(let i=0; i<intStrs.length; i++){
        const curNum = Number([...intStrs[i]].splice(s,l).join(''));
        if(curNum > k) result.push(curNum);
    }
    return result;
}