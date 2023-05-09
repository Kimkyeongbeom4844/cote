const solution = (begin, target, words) => {
    const set = new Set();
    const reqFuc = (ARR) => {
        const curWord = ARR[ARR.length-1];
        const remainArr = words.filter(v=>!ARR.includes(v));
        let deathCount = 0;
        for(let i=0; i<remainArr.length; i++){
            let count = 0;
            for(let j=0; j<remainArr[i].length; j++){
                if(remainArr[i][j] !== curWord[j]) count++;
            }
            if(count === 1){
                if(remainArr[i] === target) set.add(ARR.length);
                else reqFuc([...ARR,remainArr[i]]);
            } 
            else deathCount++;
        }
        if(deathCount === remainArr.length) set.add(-1);
    }
    reqFuc([begin]);
    // console.log(set)
    set.delete(-1);
    if(set.size) return Math.min(...set);
    return 0;
}