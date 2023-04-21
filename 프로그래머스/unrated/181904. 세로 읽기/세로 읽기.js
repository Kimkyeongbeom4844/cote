const solution = (my_string, m, c) => {
    const arr = Array.from(Array(m),()=>[]);
    for(let i=0; i<my_string.length; i++){
        arr[i%m].push(my_string[i])
    }
    return arr[c-1].join('')
}