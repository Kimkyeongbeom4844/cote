const solution = (l, r) => {
    const result = [];
    for(let i=l; i<=r; i++){
        const regExp = /0|5/
        const word = i.toString();
        let isPass = true;
        for(let j=0; j<word.length; j++){
            if(!regExp.test(word[j])) isPass = false;
        }
        if(isPass) result.push(i);
    }
    if(result.length) return result;
    return [-1];
}