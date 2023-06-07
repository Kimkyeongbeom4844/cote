const solution = (A, B) => {
    const sortA = [...A].sort((a,b)=>a-b);
    const sortB = [...B].sort((a,b)=>a-b);
    let count = 0;
    while(sortA.length){
        if(sortB[sortB.length-1] > sortA[sortA.length-1]){
            count++;
            sortB.pop();
        } 
        else {
            sortB.shift();
        } 
        sortA.pop();
    }
    return count;
}