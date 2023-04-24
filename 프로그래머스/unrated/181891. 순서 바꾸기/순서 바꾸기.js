const solution = (num_list, n) => {
    const map = new Map();
    for(let i=0; i<num_list.length; i++){
        map.set(i,num_list[i]);
    }
    let newIndex = map.size;
    for(let i=0; i<n; i++){
        map.set(newIndex,map.get(i));
        map.delete(i);
        newIndex++;
    }
    const result = [];
    for(let [key,value] of map){
        result.push(value)
    }
    return result;
}