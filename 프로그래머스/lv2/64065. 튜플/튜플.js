const solution = (s) => {
    const arr = JSON.parse(s.replace(/{/g,'[').replace(/}/g,']'))
        .sort((a,b)=>a.length-b.length)
        .reduce((a,c,i)=>{
       return [...a,c.reduce((a,c)=>a+c,0)] 
    },[])
     return arr.reduce((a,c,i)=>{
        if(i===0) return [...a,c];
        return [...a,c-arr[i-1]]
    },[]);
    
    // let index = 0;
    // const arr = [...s]
    // .reduce((a,c,i)=>{
    //    if(c.match(/[^0-9]/g)){
    //        if(c === '}') index++;
    //        return a;
    //    }
    //    if([...s]?.[i-1].match(/[0-9]/g)){
    //        const arr = [...a];
    //        arr[arr.length-1][0] += c;
    //         return arr;
    //    }
    //     return [...a,[c,index]]
    // },[])
    // // console.log(arr);
    // const map = new Map();
    // for(let i=0; i<arr.length; i++){
    //     if(map.has(arr[i][1])) map.set(arr[i][1],map.get(arr[i][1])+Number(arr[i][0]));
    //     else map.set(arr[i][1],Number(arr[i][0]))
    // }
    // // console.log([...map.values()].sort((a,b)=>a-b))
    // const result = [...map.values()].sort((a,b)=>a-b);
    // return result.reduce((a,c,i)=>{
    //     if(i===0) return [...a,c];
    //     return [...a,c-result[i-1]]
    // },[]);
}
