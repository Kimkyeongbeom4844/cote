const solution = (id_list, report, k) => {
    const map = new Map();
    const ban = new Map();
    for(let i=0; i<id_list.length; i++){
        map.set(id_list[i],new Set);
        ban.set(id_list[i],0)
    }
    
    for(let i=0; i<report.length; i++){
        const [이용자,신고자] = report[i].split(` `);
        if(!map.get(이용자).has(신고자)) ban.set(신고자,ban.get(신고자)+1);
        map.set(이용자,map.get(이용자).add(신고자));
    }
    // console.log(map,ban)
    const filter = [...ban].filter(v=>v[1] >= k).map(v=>v[0]);
    // console.log(filter)
    return [...map.values()].reduce((a,c)=>{
        let count = 0;
        for(let i=0; i<filter.length; i++){
            if(c.has(filter[i])) count++;
        }
        return [...a,count];
    },[])
}