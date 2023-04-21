const solution = (order) => {
    let sum = 0;
    for(let i=0; i<order.length; i++){
        if(order[i].includes('americano')){
            sum += 4500;
            continue;
        }
        if(order[i].includes('cafelatte')){
            sum += 5000;
            continue;
        }
        sum += 4500;
    }
    return sum;
}