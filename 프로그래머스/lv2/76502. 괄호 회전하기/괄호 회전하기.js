const solution = (s) => {
    if(s.length%2 === 1) return 0;
    const arr = [...s];
    let count = arr.length;
    for(let i =0; i<s.length; i++){
        arr.push(arr.shift());
        const stack = [];
        for(let j=0; j<arr.length; j++){
            let isOkay = true;
            switch(arr[j]){
                case '(':
                    stack.push(')');
                    break;
                case '[':
                    stack.push(']');
                    break;
                case '{':
                    stack.push('}');
                    break;
                case ')':
                case ']':
                case '}':
                    if(stack.pop() !== arr[j]) isOkay = false;
                    break;
            }
            if(isOkay === false){
                count--;
                break;
            }
        }
    }
    return count;
}