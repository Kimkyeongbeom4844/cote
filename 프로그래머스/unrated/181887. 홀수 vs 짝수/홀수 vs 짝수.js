const solution = (num_list) => {
    let addSum = 0;
    let evenSum = 0;
    for(let i=0; i<num_list.length; i++){
        if(i%2) addSum += num_list[i];
        else evenSum += num_list[i];
    }
    const arr = [addSum,evenSum];
    return Math.max(...arr);
}