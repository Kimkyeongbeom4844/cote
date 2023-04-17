const solution = (want, number, discount) => {
    const map = new Map();
    for(let i=0; i<want.length; i++){
        map.set(want[i],number[i]);
    }
    // console.log(map)
    let result = 0;
    for(let i=0; i<discount.length; i++){
        if(i+10 > discount.length) break;
        const subMap = new Map();
        for(let j=i; j<i+10; j++){
            if(subMap.has(discount[j])) subMap.set(discount[j],subMap.get(discount[j])+1);
            else subMap.set(discount[j],1);
        }
        // console.log(subMap)
        let count = 0;
        for(let [key,value] of map){
            if(subMap.get(key) === value) count++; 
        }
        if(count === map.size) result++;
    }
    return result;
}