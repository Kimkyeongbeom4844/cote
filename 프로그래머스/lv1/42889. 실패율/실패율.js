const solution = (N, stages) => {
  const arr = [...stages].sort((a, b) => a - b);
  const result = Array.from(Array(N), (v, i) => [i + 1, 0]);
  let remainPeople;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]){
        if(result[arr[i-1] - 1]?.[1] !== undefined){
            result[arr[i-1] - 1][1] = result[arr[i-1] - 1][1]/remainPeople
        }
        remainPeople = arr.length - i;
    }
    if (result[arr[i] - 1]?.[1] !== undefined){
        result[arr[i] - 1][1] += 1;
    } 
  }
  console.log(result);
  return result.sort((a, b) =>{
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
  }).map((v) => v[0]);
};
// function solution(N, stages) {
//   const failRates = Array.from(Array(N), (v, i) => {
//     const 분모 = stages.filter((stage) => stage >= i + 1).length;
//     const 분자 = stages.filter((stage) => stage === i + 1).length;
//     return { stage: i + 1, failRate: 분자 / 분모 || 0 };
//   });
//   console.log(failRates)
//   failRates.sort((a, b) => b.failRate - a.failRate || a.stage - b.stage);
  
//   return failRates.map((failRate) => failRate.stage);
// }



