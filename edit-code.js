/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var profit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
    if (prices[i+1] > prices[i]) {
      profit += prices[i+1] - prices[i];
    }
    // profit += Math.max(0, prices[i+1] - prices[i]);
  }
  return profit;
};
