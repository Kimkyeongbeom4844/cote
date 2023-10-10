const solution = (n) => {
    const arr = Array.from(Array(n),()=>Array.from(Array(n),()=>null));
    let row = 0;
    let col = 0;
    let num = 1;
    let direction = 'E';
    while(num <= n**2){
        if(arr[row]?.[col] !== undefined && arr[row]?.[col] == null){
            switch(direction){
                case 'E':
                    arr[row][col] = num;
                    col++;
                    break;
                case 'W':
                    arr[row][col] = num;
                    col--;
                    break;
                case 'S':
                    arr[row][col] = num;
                    row--;
                    break;
                case 'N':
                    arr[row][col] = num;
                    row++;
                    break;
            }
            num++;
        } else {
            switch(direction){
                case 'E':
                    col--;
                    row++;
                    direction = 'N';
                    break;
                case 'W':
                    col++;
                    row--;
                    direction = 'S';
                    break;
                case 'S':
                    row++;
                    col++;
                    direction = 'E'
                    break;
                case 'N':
                    row--;
                    col--;
                    direction = 'W';
                    break;
            }
        }
    }
    return arr;
}