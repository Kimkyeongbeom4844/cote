const solution = (cacheSize, cities) => {
    const arr = [];
    let time = 0;
    for(let i=0; i<cities.length; i++){
        if(arr.includes(cities[i].toUpperCase())){
            time += 1;
            arr.push(...arr.splice(arr.indexOf(cities[i].toUpperCase()),1))
        } else {
            time += 5;
            arr.push(cities[i].toUpperCase());
            if(arr.length > cacheSize) arr.shift();
        }
    }
    return time;
}