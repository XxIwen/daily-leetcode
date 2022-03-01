/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Serialize(pRoot, arr = []) {
  // write code here
  if (!pRoot) {
    arr.push("#");
  } else {
    arr.push(pRoot.val);
    Serialize(pRoot.left, arr);
    Serialize(pRoot.right, arr);
  }

  return arr.join(",");
}
function Deserialize(s) {
  // write code here
  if (!s) return "";
  return deserialize(s.split(","));
}

function deserialize(arr) {
  var node = null;
  var val = arr.shift();
  if (val !== "#") {
    node = { val: val };
    node.left = deserialize(arr);
    node.right = deserialize(arr);
  }

  return node;
}
module.exports = {
  Serialize: Serialize,
  Deserialize: Deserialize,
};
