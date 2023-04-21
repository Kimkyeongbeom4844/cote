const solution = (myString, pat) => {
    const patLength = pat.length;
    let result = 0;
    for(let i=0; i<myString.length; i++){
        if(myString[i] !== pat[0]) continue;
        // console.log(myString.slice(i,i+patLength))
        if(myString.slice(i,i+patLength) === pat) result++;
    }
    return result;
}