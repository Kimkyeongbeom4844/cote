const solution = (myString, pat) => {
    const regExp = new RegExp(pat,'gi');
    if(regExp.test(myString)) return 1;
    return 0;
}