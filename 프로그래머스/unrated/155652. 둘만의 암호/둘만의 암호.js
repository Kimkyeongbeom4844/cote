const solution = (s, skip, index) => {
    const sArr = [...s].map(v=>v.charCodeAt())
    const skipArr = [...skip].map(v=>v.charCodeAt())
    const numList = Array.from(Array(26),(v,i)=>i+97).filter(v=>!skipArr.includes(v));
    console.log(sArr,skipArr,numList)
    return sArr.reduce((a,c,i)=>{
        console.log(numList.indexOf(c)+index, numList.length-1)
        if(numList.indexOf(c)+index > numList.length-1){
            return [...a,String.fromCharCode(numList[(numList.indexOf(c)+index)%numList.length])]
        }
        return [...a,String.fromCharCode(numList[numList.indexOf(c)+index])]
    },[]).join('')
}
