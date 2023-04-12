const solution = (str1, str2) => {
    const reqExp = /[^A-Za-z]/;
    const 쌍분리 = (str) => {
        const arr = [];
        let start = 0; 
        let end = 1;
        do {
            const word = str[start].concat(str[end]);
            if(!reqExp.test(word)){
                arr.push(word)
            } 
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
    let sum = 0;
    let 교집합 = 0;
    const filterArr = [...new Set([...map1.keys(),...map2.keys()])]
    for(let i=0; i<filterArr.length; i++){
        // console.log(map1.get(filterArr[i])??0,map2.get(filterArr[i])??0)
        const min = Math.min(...[map1.get(filterArr[i])??0,map2.get(filterArr[i])??0])
        const max = Math.max(...[map1.get(filterArr[i])??0,map2.get(filterArr[i])??0])
        if(min === 0) sum += max;
        else {
            교집합 += min;
            sum+=max;
        }
    }
    // console.log(교집합,sum)
    if(교집합 === 0 && sum === 0) return 65536;
    else return parseInt(교집합/sum * 65536);
}