const solution = (n, left, right) => {
    const startX = Math.floor(left/n);
    const startY = left%n
    const endX = Math.floor(right/n);
    const endY = right%n
    // console.log(startX,startY,endX,endY);
    const result = [];
    for(let i=startX; i<=endX; i++){
        if(startX !== endX){
            if(i===startX){
                for(let j=startY; j<n; j++){
                    // console.log(i,j);
                    if(j<=i) result.push(i+1)
                    else result.push(j+1)
                }
            }
            else if(i===endX){
                for(let j=0; j<=endY; j++){
                    // console.log(i,j);
                    if(j<=i) result.push(i+1);
                    else result.push(j+1);
                }
            }
            else {
                for(let j=0; j<n; j++){
                    // console.log(i,j);
                    if(j<=i) result.push(i+1);
                    else result.push(j+1)
                }
            }
        } 
        else {
            for(let j=startY; j<=endY; j++){
                if(j<=i) result.push(i+1);
                else result.push(j+1)
            }
        }
    }
    return result;
}