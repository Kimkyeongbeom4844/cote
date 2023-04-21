const solution = (binomial) => {
    const [num1,op,num2] = binomial.split(' ');
    switch(op){
        case '+':
            return Number(num1)+Number(num2);
        case '-':
            return Number(num1)-Number(num2);
        case '*':
            return Number(num1)*Number(num2);
    }
}