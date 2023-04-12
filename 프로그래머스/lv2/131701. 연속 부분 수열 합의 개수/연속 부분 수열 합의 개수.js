const solution = (elements) => {
    const set = new Set();
    for(let i=0; i<elements.length; i++){
        let sum = 0;
        for(let j=i; j<i+(elements.length-1); j++){
            if(elements[j]){
                // console.log(j);
                sum += elements[j];
            } 
            else{
                // console.log(j-elements.length);
                sum += elements[j-elements.length]
            }
            set.add(sum);
        }
    }
    return set.size+1
}