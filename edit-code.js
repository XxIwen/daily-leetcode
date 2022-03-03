function movingCount(threshold, rows, cols) {
  // write code here
  var result = 0;
  var flags = new Array(rows * cols).fill(false);
  result = movingCore(0, 0, rows, cols, threshold, flags);
  return result;
}

function movingCore(i, j, rows, cols, threshold, flags) {
  var index = i * cols + j;
  if (i < 0 || j < 0 || i >= rows || j >= cols) {
    return 0;
  }
  if (flags[index] || condition(i, j, threshold)) {
    flags[index] = true;
    return 0;
  }
  flags[index] = true;
  return (
    movingCore(i + 1, j, rows, cols, threshold, flags) +
    movingCore(i - 1, j, rows, cols, threshold, flags) +
    movingCore(i, j + 1, rows, cols, threshold, flags) +
    movingCore(i, j - 1, rows, cols, threshold, flags) +
    1
  );
}

function condition(i, j, threshold) {
  var str = i + "" + j;
  var sum = 0;
  for (var k = 0; k < str.length; k++) {
    sum += str.charAt(k) / 1;
  }

  return sum > threshold;
}
module.exports = {
  movingCount: movingCount,
};
