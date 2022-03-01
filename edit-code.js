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
var result = 0;
function FindPath(root, sum) {
  // write code here
  if (!root) return 0;
  path(root, sum);
  FindPath(root.left, sum);
  FindPath(root.right, sum);
  return result;
}

function path(node, sum) {
  sum -= node.val;

  if (sum === 0) {
    result++;
  }

  if (node.left) {
    path(node.left, sum);
  }

  if (node.right) {
    path(node.right, sum);
  }
}

module.exports = {
  FindPath: FindPath,
};
