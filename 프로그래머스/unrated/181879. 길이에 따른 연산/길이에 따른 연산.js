const solution = (num_list) => {
    if(num_list.length >= 11) return num_list.reduce((a,c)=>a+c,0);
    return num_list.reduce((a,c)=>a*c,1);
}