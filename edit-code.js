/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @param sum int整型
 * @return int整型
 */
function FindPath(root, sum) {
  // write code here
  var result = [];
  if (root) {
    calculatePath(root, sum, result);
  }
  return result.length;
}

function calculatePath(node, sum, result) {
  path(node, 0, sum, result);
  if (node.left) {
    calculatePath(node.left, sum, result);
  }
  if (node.right) {
    calculatePath(node.right, sum, result);
  }
}

function path(node, total, sum, result) {
  total += node.val;

  if (total === sum) {
    result.push(total);
  }

  if (node.left) {
    path(node.left, total, sum, result);
  }

  if (node.right) {
    path(node.right, total, sum, result);
  }
}

module.exports = {
  FindPath: FindPath,
};
