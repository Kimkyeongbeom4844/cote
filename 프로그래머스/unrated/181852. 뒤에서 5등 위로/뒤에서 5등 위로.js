const solution = (num_list) => {
    return num_list.sort((a,b)=>a-b).filter((v,i)=>i>=5);
}