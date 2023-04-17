const solution = (n, works) => {
    const arr = [...works].sort((a,b)=>b-a);
    console.log(arr);
    while(n > 0){
        let index = 0;
        let count = 0;
        while(arr[index] === arr[index+1]){
            count++;
            index++;
        }
        // console.log(count,++index);
        for(let i=0; i<=count; i++){
            arr[i]--;
            if(arr[i] === -1) return 0;
            n--;
            if(n === 0){
                return arr.reduce((a,c)=>a+c**2,0);
            }
        }
        // console.log(arr);
    }
}
