const solution = (arr) => {
    let 행수 = arr[0].length;
    let 열수 = arr.length;
    if(열수 > 행수){
        const 차이 = 열수 - 행수
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<차이; j++){
                arr[i].push(0)
            }
        }
    }
    if(행수 > 열수) {
        const 차이 = 행수 - 열수
        for(let i=0; i<차이; i++){
            arr.push(Array(행수).fill(0))
        }
    }
    return arr;
}