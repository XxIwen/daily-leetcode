/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
  var current = 1;
  var result = -1;
  while(current <= n) {
      var believed = [];
      var isUnbelieve = true;
      trust.forEach(t => {
          if (t[0] === current) {
              isUnbelieve = false;
          }
          if (t[1] === current) {
              believed.push(current);
          }
      });
      if (believed.length === n - 1 && isUnbelieve) {
          result = current;
      }
      current++;
  }
  return result;
};
