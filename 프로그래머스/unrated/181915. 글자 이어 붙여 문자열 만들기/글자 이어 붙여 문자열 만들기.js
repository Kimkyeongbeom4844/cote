const solution = (my_string, index_list) => {
    const result = [];
    for(let i=0; i<index_list.length; i++){
        result.push(my_string[index_list[i]]);
    }
    return result.join('');
}