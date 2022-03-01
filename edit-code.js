/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
  // write code here
  if (!pNode) return null;

  if (pNode.right) {
    pNode = pNode.right;
    while (pNode.left) {
      pNode = pNode.left;
    }
    return pNode;
  } else {
    while (pNode) {
      if (!pNode.next) {
      } else if (pNode == pNode.next.left) {
        return pNode.next;  // 当前节点是父节点左孩子，那么当前节点的父节点就是下一个节点
      }
      pNode = pNode.next;
    }
  }
}
module.exports = {
  GetNext: GetNext,
};
