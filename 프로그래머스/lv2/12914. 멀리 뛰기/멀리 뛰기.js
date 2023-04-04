// 재귀
// const solution = (n) => {
//   let count = 0n;
//   const BST = (sum) => {
//     if (sum > n) return;
//     if (sum === n) {
//       count += 1n
//       return;
//     }
//     BST(sum + 1);
//     BST(sum + 2);
//   };
//   BST(0);
//   return count % 1234567n;
// };

// DP
const solution = (n) => {
  const dp = [];
  dp[0] = 1n; // 초기값 설정
  dp[1] = 1n; // 초기값 설정

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) ; // 점화식
  }

  return dp[n]%1234567n;
};
