const solution = (num_list) => {
    const 곱 = num_list.reduce((a,c)=>a*c,1);
    const 합제곱 = num_list.reduce((a,c)=>a+c,0)**2;
    if(곱 > 합제곱) return 0;
    return 1;
}