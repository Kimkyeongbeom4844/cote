const solution = (my_string) => {
    const map = new Map();
    for(let i=65; i<=90; i++){
        map.set(String.fromCharCode(i),0);
    }
    for(let i=97; i<=122; i++){
        map.set(String.fromCharCode(i),0);
    }
    for(let i=0; i<my_string.length; i++){
        map.set(my_string[i],map.get(my_string[i])+1);
    }
    const result = [];
    for(let [key,value] of map){
        result.push(value)
    }
    return result
}