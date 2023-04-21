const solution = (my_string, s, e) => {
    const arr = [...my_string]
    const splitArr = arr.splice(s,e-s+1);
    arr.splice(s,0,...splitArr.reverse())
    // console.log(arr)
    return arr.join('')
}