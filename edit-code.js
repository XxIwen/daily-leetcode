/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  var g = g.sort((a, b) => a - b);
  var s = s.sort((a, b) => a - b);
  var sum = 0;
  var cookie = 0;
  var child = 0;
  while (cookie < s.length && child < g.length) {
    if (s[cookie] >= g[child]) {
      sum++;
      child++;
    }
    cookie++;
  }

  return sum;
};
