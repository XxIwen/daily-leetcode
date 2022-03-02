function Permutation(str) {
  // write code here
  var result = [];
  if (str) {
    var queue = str.split("");
    core(queue, result);
  }
  result.sort();
  return [...new Set(result)];
}

function core(queue, result, temp = "", current = "") {
  current += temp;
  if (queue.length == 0) {
    result.push(current);
    return;
  }

  for (var i = 0; i < queue.length; i++) {
    temp = queue.shift();
    core(queue, result, temp, current);
    queue.push(temp);
  }
}
module.exports = {
  Permutation: Permutation,
};
