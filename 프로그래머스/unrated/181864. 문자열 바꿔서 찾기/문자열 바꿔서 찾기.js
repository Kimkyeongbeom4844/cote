const solution = (myString, pat) => {
    const wordArr = [];
    for(let i=0; i<myString.length; i++){
        switch(myString[i]){
            case 'A':
                wordArr.push('B');
                break;
            case 'B':
                wordArr.push('A');
                break;
        }
    }
    if(wordArr.join('').includes(pat)) return 1;
    return 0;
}