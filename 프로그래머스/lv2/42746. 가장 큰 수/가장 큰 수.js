// const solution = (numbers) => {
//     const arr = Array.from(numbers.length).fill(null);
//     const set = new Set();
//     const reqFuc = (ARR) => {
//         if(ARR.length === numbers.length){
//             let word = '';
//             for(let i=0; i<ARR.length; i++){
//                 word = word.concat(numbers[ARR[i]].toString())
//             }
//             return set.add(Number(word));
//         }
//         for(let i=0; i<numbers.length; i++){
//             if(ARR.includes(i)) continue;
//             reqFuc([...ARR,i]);
//         }
//     }
//     for(let i=0; i<numbers.length; i++){
//         reqFuc([i])
//     }
//     return Math.max(...set).toString()
// }
const solution = (numbers) => {
  const answer = numbers
    .map((num) => num.toString())
    .sort((a, b) => (b + a) - (a + b))
    .join('');

  return /^0/.test(answer) ? '0' : answer;
};