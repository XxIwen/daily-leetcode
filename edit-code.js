/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
  // write code here
  var result = false;
  if (!!pRoot1 && !!pRoot2) {
    if (pRoot1.val === pRoot2.val) {
      result = compare(pRoot1, pRoot2);
    }

    if (!result) {
      result = HasSubtree(pRoot1.left, pRoot2);
    }

    if (!result) {
      result = HasSubtree(pRoot1.right, pRoot2);
    }
  }

  return result;
}

function compare(root1, root2) {
  if (root2 === null) {
    return true;
  }

  if (root1 === null) {
    return false;
  }

  if (root1.val !== root2.val) {
    return false;
  }

  return compare(root1.left, root2.left) && compare(root1.right, root2.right);
}
module.exports = {
  HasSubtree: HasSubtree,
};
