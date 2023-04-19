const solution = (record) => {
    const result = [];
    const map = new Map();
    for(let i=0; i<record.length; i++){
        const [type,uid,name] = record[i].split(' ');
        switch(type){
            case 'Enter':
                map.set(uid,name);
                result.push({type, uid});
                break;
            case 'Leave':
                result.push({type , uid});
                break;
            case 'Change':
                map.set(uid,name);
                break;
        }
    }
    // console.log(result,map)
    return result.map((v,i)=>{
        switch(v.type){
            case 'Enter':
                return `${map.get(v.uid)}님이 들어왔습니다.`;
            case 'Leave':
                return `${map.get(v.uid)}님이 나갔습니다.`;
        }
    })
}
