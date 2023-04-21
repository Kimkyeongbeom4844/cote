const solution = (my_strings, parts) => {
    return my_strings.reduce((a,c,i)=>{
        return [...a,c.slice(parts[i][0],parts[i][1]+1)]
    },[]).join('')
}