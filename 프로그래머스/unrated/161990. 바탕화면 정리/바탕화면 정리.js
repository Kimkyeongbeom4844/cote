const solution = (wallpaper) => {
    const arr = [];
    for(let i =0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[i].length; j++){
            if(wallpaper[i][j] === `#`) arr.push([i,j])
        }
    }
    // console.log(arr);
    const result = Array(4).fill(null);
    result[0] = arr[0][0];
    result[1] = [...arr].sort((a,b)=>b[1]-a[1])[arr.length-1][1];
    result[2] = arr[arr.length-1][0]+1;
    result[3] = [...arr].sort((a,b)=>b[1]-a[1])[0][1]+1;
    return result;
}