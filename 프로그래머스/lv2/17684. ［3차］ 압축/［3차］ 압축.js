const solution = (msg) => {
    const map = new Map();
    map.set('A',1);
    map.set('B',2);
    map.set('C',3);
    map.set('D',4);
    map.set('E',5);
    map.set('F',6);
    map.set('G',7);
    map.set('H',8);
    map.set('I',9);
    map.set('J',10);
    map.set('K',11);
    map.set('L',12);
    map.set('M',13);
    map.set('N',14);
    map.set('O',15);
    map.set('P',16);
    map.set('Q',17);
    map.set('R',18);
    map.set('S',19);
    map.set('T',20);
    map.set('U',21);
    map.set('V',22);
    map.set('W',23);
    map.set('X',24);
    map.set('Y',25);
    map.set('Z',26);
    
    let index = 27;
    const result = [];
    const arr = Array.from(msg)
    let start = 0;
    let end = 1;
    while(end <= arr.length){
        let word = arr[start];
        let newWord = word;
        while(map.has(newWord)){
            word = newWord;
            newWord += arr[end];
            // console.log(newWord);
            end++;
        }
        result.push(word);
        if(!map.has(newWord)){
            map.set(newWord,index);
            index++;
        }
        start = end-1;
        end = start+1;
    }
    console.log(map)
    return result.reduce((a,c)=>{
       return [...a,map.get(c)]; 
    },[])
}