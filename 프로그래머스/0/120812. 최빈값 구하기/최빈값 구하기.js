function solution(array) {

    const obj = {};

    for(let i=0; i<array.length; i++){
        if(obj[array[i]] === undefined){
            obj[array[i]] = 1;
            continue;
        }
        obj[array[i]] += 1;
    }
    console.log(obj);
    const arr = Object.entries(obj).sort((a,b)=>{
        if(a[1]>b[1]){
            return -1;
        }
        if(a[1]<b[1]){
            return 1;
        }
        return 0;
    })
    
    console.log(arr);
    
    if(arr.length === 1) return Number(arr[0][0])
    if(arr[0][1] === arr[1][1]) return -1
    return Number(arr[0][0]);
}