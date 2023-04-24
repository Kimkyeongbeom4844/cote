const solution = (rank, attendance) => {
    const map = new Map();
    for(let i=0; i<rank.length; i++){
        map.set(rank[i],attendance[i])
    }
    const arr = [...map].map(v=>v[0]);
    // console.log(arr,map)
    const resultArr = [];
    let grade = 1;
    while(resultArr.length !== 3){
        if(map.get(grade)) resultArr.push(arr.indexOf(grade));
        grade++;
    }
    return resultArr.reduce((a,c,i)=>{
        switch(i){
            case 0:
                return a+(10000*c);
            case 1:
                return a+(100*c);
            case 2:
                return a+c;
        }
    },0)
}