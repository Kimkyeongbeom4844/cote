const solution = (num_list) => {
    const add = [];
    const even = [];
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2) add.push(num_list[i]);
        else even.push(num_list[i]);
    }
    return Number(add.join('')) + Number(even.join(''));
}