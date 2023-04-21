const solution = (ineq, eq, n, m) => {
    const operation = ineq.concat(eq);
    switch(operation){
        case '>=':
            return n>=m ? 1 : 0;
        case '<=':
            return n<=m ? 1 : 0;
        case '>!':
            return n>m ? 1 : 0;
        case '<!':
            return n<m ? 1 : 0;
    }
}