const solution = (operations) => {
    const arr = [];
    for(let i=0; i<operations.length; i++){
        const [명령어,숫자] = operations[i].split(' ');
        switch(명령어){
            case 'I':
                arr.push(Number(숫자));
                break;
            case 'D':
                if(숫자 === '-1') arr.shift();
                else arr.pop();
                break;
        }
        arr.sort((a,b)=>a-b);
    }
    const result = [];
    result.push(arr[arr.length-1]??0);
    result.push(arr[0]??0);
    return result;
}