const solution = (myString) => {
    return [...myString.replace(/a/g,'A')].map(v=>{
        if(/[B-Z]/.test(v)) return v.toLowerCase();
        return v;
    }).join('')
}