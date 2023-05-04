const solution = (dirs) => {
    const position = [0,0];
    const set = new Set();
    for(let i=0; i<dirs.length; i++){
        const before = [...position];
        switch(dirs[i]){
            case 'U':
                if(position[1]+1 <= 5){
                    position[1]++;
                    const tempArr = [before.join(''),position.join('')].sort();
                    set.add(tempArr.join(''));
                }
                break;
            case 'D':
                if(position[1]-1 >= -5){
                    position[1]--;
                    const tempArr = [before.join(''),position.join('')].sort();
                    set.add(tempArr.join(''));
                }
                break;
            case 'R':
                if(position[0]+1 <= 5){
                    position[0]++;
                    const tempArr = [before.join(''),position.join('')].sort();
                    set.add(tempArr.join(''));
                }
                break;
            case 'L':
                if(position[0]-1 >= -5){
                    position[0]--;
                    const tempArr = [before.join(''),position.join('')].sort();
                    set.add(tempArr.join(''));
                }
                break;
        }
    }
    return set.size
}