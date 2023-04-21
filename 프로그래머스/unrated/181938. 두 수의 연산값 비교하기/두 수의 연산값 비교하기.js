const solution = (a, b) => {
    const num1 = Number(String(a).concat(String(b)));
    const num2 = 2*a*b;
    return Math.max(num1,num2)
}