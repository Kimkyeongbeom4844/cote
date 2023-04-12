const solution = (str1, str2) => {
    const reqExp = /[^A-Z]/i;
    const 쌍분리 = (str) => {
        const arr = [];
        let start = 0; 
        let end = 1;
        do {
            const word = str[start].concat(str[end]);
            if(!reqExp.test(word)) arr.push(word);
            start++;
            end++;
        } while(end !== str.length);
        const map = new Map();
        for(let i=0; i<arr.length; i++){
            if(map.has(arr[i])) map.set(arr[i],map.get(arr[i])+1);
            else map.set(arr[i],1);
        }
        return map;
    }
    const map1 = 쌍분리(str1.toUpperCase());
    const map2 = 쌍분리(str2.toUpperCase());
    // console.log(map1,map2)
    let 분모 = 0;
    let 분자 = 0;
    const mapSumArr = [...new Set([...map1.keys(),...map2.keys()])]
    for(let i=0; i<mapSumArr.length; i++){
        // console.log(map1.get(mapSumArr[i])??0,map2.get(mapSumArr[i])??0)
        const min = Math.min(...[map1.get(mapSumArr[i])??0,map2.get(mapSumArr[i])??0])
        const max = Math.max(...[map1.get(mapSumArr[i])??0,map2.get(mapSumArr[i])??0])
        if(min === 0) 분모 += max;
        else {
            분자 += min;
            분모 += max;
        }
    }
    // console.log(분자,분모)
    if(분자 === 0 && 분모 === 0) return 65536;
    else return parseInt(분자/분모 * 65536);
}