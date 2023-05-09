const solution = (maps) => {  
    // BFS -> 최단경로
    let queue = [[0,0]];
    let count = 1;
    const [goalLat,goalLon] = [maps.length-1,maps[0].length-1];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    while (queue.length) {
        count++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
          const [lat,lon] = queue.shift();
          maps[lat][lon] = 0;
          for (const [x, y] of directions) {
                const nextX = lat+x;
                const nextY = lon+y;
                if(maps[nextX]?.[nextY]){
                    if(nextX === goalLat && nextY === goalLon) return count;
                    maps[nextX][nextY] = 0;
                    queue.push([nextX,nextY]);
                }
          }
        }
    }
    return -1;
}

    // dfs -> 모든 경우의 수 탐색
    // const set = new Set();
    // const reqFuc = ([lat,lon],move,array) => {
    //     const arr = [];
    //     for(let i=0; i<array.length; i++){
    //         arr.push([...array[i]]);
    //     }
    //     arr[lat][lon] = 0;
    //     let overCount = 0;
    //     if(lat === arr.length-1 && lon === arr[0].length-1) return set.add(move);
    //     if(arr[lat]?.[lon+1] === 1) reqFuc([lat,lon+1],move+1,arr);
    //     else overCount++;
    //     if(arr[lat+1]?.[lon] === 1) reqFuc([lat+1,lon],move+1,arr);
    //     else overCount++;
    //     if(arr[lat]?.[lon-1] === 1) reqFuc([lat,lon-1],move+1,arr);
    //     else overCount++;
    //     if(arr[lat-1]?.[lon] === 1) reqFuc([lat-1,lon],move+1,arr);
    //     else overCount++;
    //     if(overCount === 4) return set.add(-1);
    // }
    // reqFuc([0,0],1,maps);
    // set.delete(-1);
    // if(set.size === 0) return -1;
    // return Math.min(...set);


    // while(queue.length){
    //     count++;
    //     const len = queue.length;
    //     for(let i=0; i<len; i++){
    //         const [lat,lon] = queue.shift();
    //         maps[lat][lon] = 0;
    //         if(maps[lat+1]?.[lon]){
    //             if(lat+1 === goalLat && lon === goalLon) return count;
    //             queue.push([lat+1,lon]);
    //         }
    //         if(maps[lat]?.[lon+1]){
    //             if(lat === goalLat && lon+1 === goalLon) return count;
    //             queue.push([lat,lon+1]);
    //         }
    //         if(maps[lat-1]?.[lon]){
    //             if(lat-1 === goalLat && lon === goalLon) return count;
    //             queue.push([lat-1,lon]);
    //         }
    //         if(maps[lat]?.[lon-1]){
    //             if(lat === goalLat && lon-1 === goalLon) return count;
    //             queue.push([lat,lon-1]);
    //         }
    //     }
    // }