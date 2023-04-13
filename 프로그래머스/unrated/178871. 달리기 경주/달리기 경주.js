const solution = (players, callings) => {
    const map = new Map();
    const map1 = new Map();
    for(let i=0; i<players.length; i++){
        map.set(players[i],i);
        map1.set(i,players[i]);
    }
    for(let i=0; i<callings.length; i++){
        const beforeIndex = map.get(callings[i]);
        map.set(callings[i],beforeIndex-1);
        const changeTarget = map1.get(beforeIndex-1);
        map.set(changeTarget,beforeIndex)
        map1.set(beforeIndex,changeTarget);
        map1.set(beforeIndex-1,callings[i]);
    }
    // console.log(map,map1);
    return [...map].sort((a,b)=>a[1]-b[1]).map(v=>v[0]);
}

