/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix char字符型二维数组
 * @param word string字符串
 * @return bool布尔型
 */
function hasPath(matrix, word) {
  // write code here
  if (matrix.length == 0 || matrix[0].length == 0) return false;
  var rows = matrix.length;
  var cols = matrix[0].length;
  var path = word.split("");
  if (rows * cols < path.length) return false;
  var flags = new Array(rows * cols).fill(false);
  for (var i = 0; i < rows; i++) {
    for (var j = i; j < cols; j++) {
      if (core(matrix, i, j, rows, cols, path, flags, 0)) {
        return true;
      }
    }
  }

  return false;
}

function core(matrix, i, j, rows, cols, path, falgs, k) {
  var index = i * cols + j;
  if (
    i < 0 ||
    j < 0 ||
    i >= rows ||
    j >= cols ||
    matrix[i][j] !== path[k] ||
    falgs[index]
  ) {
    return false;
  }

  if (k === path.length - 1) {
    return true;
  }

  falgs[index] = true;
  if (
    core(matrix, i + 1, j, rows, cols, path, falgs, k + 1) ||
    core(matrix, i - 1, j, rows, cols, path, falgs, k + 1) ||
    core(matrix, i, j + 1, rows, cols, path, falgs, k + 1) ||
    core(matrix, i, j - 1, rows, cols, path, falgs, k + 1)
  ) {
    return true;
  }

  falgs[index] = false; // 取消以走过的路径标识，向上回溯
  return false;
}
module.exports = {
  hasPath: hasPath,
};
