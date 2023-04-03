const solution = (park, routes) => {
    const arr = Array.from(Array(park.length),(v,i)=>park[i].split(''));
    // console.log(arr);
    let start = null;
    for(let i=0; i<arr.length; i++){
        if(arr[i].includes('S')){
            start = [i,arr[i].indexOf('S')];
            break;
        }
    };
    for(let i=0; i<routes.length; i++){
        const [방향, 무빙] = routes[i].split(' ');
        const [좌,우] = start;
        switch(방향){
            case 'E' :
                for(let j=1; j<=Number(무빙); j++){
                    if(arr[좌][우+j] === 'X' || arr[좌]?.[우+j] === undefined) break;
                    else if(j === Number(무빙)) start[1] += Number(무빙);
                }
                break;
            case 'W' :
                for(let j=1; j<=Number(무빙); j++){
                    if(arr[좌][우-j] === 'X' || arr[좌]?.[우-j] === undefined) break;
                    else if(j === Number(무빙)) start[1] -= Number(무빙);
                }
                break;
            case 'S' :
                for(let j=1; j<=Number(무빙); j++){
                    if(arr[좌+j]?.[우] === 'X' || arr[좌+j]?.[우] === undefined) break;
                    else if(j === Number(무빙)) start[0] += Number(무빙);
                }
                break;
            case 'N' :
                for(let j=1; j<=Number(무빙); j++){
                    if(arr[좌-j]?.[우] === 'X' || arr[좌-j]?.[우] === undefined) break;
                    else if(j === Number(무빙)) start[0] -= Number(무빙);
                }
                break;
        }
        // console.log(start);
    }
    return start;
}
