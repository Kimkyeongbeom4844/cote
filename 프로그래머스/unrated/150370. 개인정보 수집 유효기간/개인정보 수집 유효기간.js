const solution = (today, terms, privacies) => {
    const map = new Map();
    for(let i=0; i<terms.length; i++){
        const [앞,뒤] = terms[i].split(' ');
        map.set(앞,Number(뒤));
    };
    // console.log(new Date(today));
    const arr = [];
    for(let i=0; i<privacies.length; i++){
        const [day,type] = privacies[i].split(` `);
        const 유통기한 = new Date(new Date(day).getFullYear(),new Date(day).getMonth()+map.get(type),new Date(day).getDate());
        // console.log(new Date(day),유통기한)
        // console.log(유통기한 <= new Date(today))
        if(유통기한 <= new Date(today)) arr.push(i+1);
    }
    return arr;
}