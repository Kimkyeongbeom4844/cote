const solution = (myString) => {
    const arr = myString.split('x');
    // console.log(arr)
    return arr.reduce((a,c)=>[...a,c.length],[]);
}