const solution = (k, tangerine) => {
    const map = new Map();
    for(let i=0; i<tangerine.length; i++){
        if(map.has(tangerine[i])) map.set(tangerine[i],map.get(tangerine[i])+1);
        else map.set(tangerine[i],1);     
    }
    // console.log(map);
    const arr = [...map].sort((a,b)=>b[1]-a[1]);
    // console.log(arr);
    let sum = 0;
    let kind = 0;
    for(let i=0; i<arr.length; i++){
        if(sum+arr[i][1] < k){
            sum += arr[i][1];
            kind++;
            continue;
        }
        return ++kind;
    }
}