function TreeNode(val) {
  this.val = val;
  this.left = this.right = null
}

let maxDepth = function (root) {
  if (!root) {
    return 0
  }
  let a, b;
  a = maxDepth(root.left);
  b = maxDepth(root.right);
  return 1 + (a > b ? a : b)
};