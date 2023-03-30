const solution = (keymap, targets) => {
    const map = new Map();
    for(let i=0; i<keymap.length; i++){
        for(let j=0; j<keymap[i].length; j++){
            if(map.has(keymap[i][j])){
                if(map.get(keymap[i][j])>j+1) map.set(keymap[i][j],j+1);
            } else map.set(keymap[i][j],j+1)
        }
    }
    // console.log(map);
    return targets.reduce((a,c)=>{
        let sum = 0;
        for(let i=0; i<c.length; i++){
            if(map.get(c[i])) sum+=map.get(c[i]);
            else return [...a,-1];
        }
        return [...a,sum]
    },[])
}