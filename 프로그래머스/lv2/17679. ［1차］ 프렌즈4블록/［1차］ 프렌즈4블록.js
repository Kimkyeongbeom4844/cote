const solution = (m, n, board) => {
    const arr = [];
    for(let i=0; i<m; i++){
        const tempArr = [];
        for(let j=0; j<n; j++){
            tempArr.push(board[i][j]);
        }
        arr.push(tempArr);
    }
    while(true){
        const tempArr = Array.from(Array(m),()=>Array(n).fill(false));
        const beforeArr = JSON.stringify(arr);
        for(let i=0; i<m; i++){
            for(let j=0; j<n-1; j++){
                if(arr[i][j] === arr[i][j+1]){
                    if(arr[i+1]?.[j] === arr[i][j] && arr[i+1]?.[j+1] === arr[i][j]){
                        tempArr[i][j] = true;
                        tempArr[i][j+1] = true;
                        tempArr[i+1][j] = true;
                        tempArr[i+1][j+1] = true;
                    }
                }
            }
        }
        // console.log(tempArr)
        for(let i=0; i<m; i++){
            for(let j=0; j<n; j++){
                if(tempArr[i][j]) arr[i][j] = null;
            }
        }
        if(beforeArr === JSON.stringify(arr)) break;
        // console.log(arr);
        for(let i=m-1; i>=0; i--){
            for(let j=n-1; j>=0; j--){
                if(arr[i][j] === null){
                    let I = i;
                    while(true){
                        I--;
                        if(arr[I]?.[j] === undefined) break;
                        if(arr[I]?.[j]){
                            arr[i][j] = arr[I][j];
                            arr[I][j] = null;
                            break;
                        }
                    }
                    // console.log(arr)
                }
            }
        }
    }
    let result = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(arr[i][j] === null) result++;
        }
    }
    return result;
}