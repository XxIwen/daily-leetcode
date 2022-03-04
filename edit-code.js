/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount) return 0;
  var dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;
  for (var j = 0; j <= amount; j++) {
    for (var i = 0; i < coins.length; i++) {
      if (j >= coins[i]) {
        dp[j] = Math.min(dp[j], dp[j-coins[i]] + 1);
      }
    }
  }

  return dp[amount] == Infinity ? -1 : dp[amount];
};
