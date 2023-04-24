const solution = (code) => {
    const result = [];
    let isZeroMode = true;
    for(let i=0; i<code.length; i++){
        switch(code[i]){
            case '1':
                isZeroMode = !isZeroMode;
                break;
            default :
                if(isZeroMode){
                    if(i%2 === 0) result.push(code[i]);
                } 
                else if(i%2 === 1) result.push(code[i]);
                break;
        }
    }
    if(result.length) return result.join('');
    return 'EMPTY';
}