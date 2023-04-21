const solution = (a, b) => {
    const arr = [Number(a.toString().concat(b.toString())),Number(b.toString().concat(a.toString()))]
    return Math.max(...arr);
}