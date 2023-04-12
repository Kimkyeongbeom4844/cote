const solution = (elements) => {
    const set = new Set();
    for(let i=0; i<elements.length; i++){
        let sum = 0;
        for(let j=i; j<i+(elements.length-1); j++){
            if(elements[j]) sum += elements[j];
            else sum += elements[j-elements.length]
            set.add(sum);
        }
    }
    return set.size+1;
}