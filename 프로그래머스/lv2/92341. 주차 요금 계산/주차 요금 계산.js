const solution = (fees, records) => {
    const map = new Map();
    const result = new Map();
    for(let i=0; i<records.length; i++){
        const [time,num,type] = records[i].split(' ');
        const 차량번호 = Number(num);
        const 시 = Number(time.split(':')[0]);
        const 분 = Number(time.split(':')[1]);
        const 분화 = 시*60 + 분;
        switch(type){
            case 'IN':
                map.set(차량번호,분화);
                break;
            case 'OUT':
                if(result.has(차량번호)) result.set(차량번호,result.get(차량번호)+분화-map.get(차량번호));
                else result.set(차량번호,분화-map.get(차량번호));
                map.delete(차량번호);
                break;
        }
    }
    if(map.size){
        for(let [key,value] of map){
            const 강제퇴출 = ((60*23)+59)-value;
            if(result.has(key)) result.set(key,result.get(key)+강제퇴출);
            else result.set(key,강제퇴출);
        }
    }
    // console.log(map);
    // console.log(result)
    return [...result].sort((a,b)=>a[0]-b[0]).reduce((a,c)=>{
        if(c[1] <= fees[0]) return [...a,fees[1]];
        else {
            const 배수 = Math.ceil((c[1]-fees[0])/fees[2]);
            return [...a,fees[1]+(배수*fees[3])];
        }
    },[])
}