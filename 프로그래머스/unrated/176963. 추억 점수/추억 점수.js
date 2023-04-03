const solution = (name, yearning, photo) => {
    const map = new Map();
    for(let i=0; i<name.length; i++){
        map.set(name[i],yearning[i])
    }
    return photo.reduce((a,c)=>{
        let sum = 0;
        for(let i=0; i<c.length; i++){
            sum += map.get(c[i])??0
        }
        return [...a,sum]
    },[])
}