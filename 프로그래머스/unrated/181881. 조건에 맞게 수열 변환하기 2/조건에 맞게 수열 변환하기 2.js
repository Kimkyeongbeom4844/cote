const solution = (arr) => {
    const 함수 = (num) => {
        // if(num>=50 && num%2 === 0)
        // if(num<50 && num%2 === 1)
        let count = 0
        while(num>=50 && num%2 === 0 || num<50 && num%2 === 1){
            count++;
            if(num>=50){
                num /= 2;
            }
            if(num<50){
                num *=2;
                num +=1;
            }
        }
        return count
    }
    return arr.map(v=>함수(v)).sort((a,b)=>b-a)[0]
}