const solution = (a, b, c) => {
    if(a === b || b === c || c === a){
        if(a===b && b===c) return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
        return (a+b+c)*(a**2+b**2+c**2);
    }
    return a+b+c;
}