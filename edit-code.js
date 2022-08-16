// 求路径总和

// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，
// 判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

// 叶子节点 是指没有子节点的节点。

/**
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var node2 = {
  val: 3,
  left: null,
  right: null,
};

var node3 = {
  val: 4,
  left: null,
  right: null,
};

var node1 = {
  val: 2,
  left: node2,
  right: node3,
};

var root1 = {
  val: 1,
  left: node1,
  right: null,
};

var hasPathSum = function (root, targetSum) {
  var sum = 0;
  // var result = false;
  var result = [];
  if (!root) return false;
  main(root, result, sum, targetSum);
  return result;
};

function main(root, result, sum, targetSum) {
  sum += root.val;
  if (!root.left && !root.right && sum === targetSum) {
    result.push(sum);
  }

  if (!!root.left) {
    main(root.left, result, sum, targetSum);
  }

  if (!!root.right) {
    main(root.right, result, sum, targetSum);
  }
}

console.log(hasPathSum(root1, 6));
