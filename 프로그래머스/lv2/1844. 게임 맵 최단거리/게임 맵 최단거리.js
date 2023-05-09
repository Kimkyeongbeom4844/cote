const solution = (maps) => {  
    // BFS -> 최단경로
    let queue = [[0,0]];
    let count = 1;
    const [goalLat,goalLon] = [maps.length-1,maps[0].length-1];
    const n = maps.length;
    const m = maps[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
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
    while (queue.length > 0) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
          const [x, y] = queue.shift();
          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
              continue;
            }
            if (maps[nx][ny] === 0) {
              continue;
            }
            if (nx === n - 1 && ny === m - 1) {
              return count + 1;
            }
            maps[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
        count++;
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