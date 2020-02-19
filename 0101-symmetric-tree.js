function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

TreeNode.prototype.create = function (a, i) {
  i = (i << 1) + 1
  if (i < a.length) {
    this.left = a[i] === null ? null : new TreeNode(a[i])
    if (this.left)
      this.left.create(a, i)
  }
  if (++i < a.length) {
    this.right = a[i] === null ? null : new TreeNode(a[i])
    if (this.right)
      this.right.create(a, i)
  }
}

function createTree(a) {
  if (!a.length)
    return null
  let root = new TreeNode(a[0])
  root.create(a, 0)
  return root
}

let is_symmetric_ = function (r1, r2) {
  if (!r1 || !r2) {
    return r1 === r2
  } else if (r1.val !== r2.val) {
    return false
  }
  return is_symmetric_(r1.left, r2.right) && is_symmetric_(r1.right, r2.left)
}

var isSymmetric = function (root) {
  if (!root)
    return true
  return is_symmetric_(root.left, root.right)
};

// console.log(isSymmetric(createTree([1, 2, 2, 3, 4, 4, 3])))
// console.log(isSymmetric(createTree([1, 2, 2, null, 3, null, 3])))

module.exports = {
  TreeNode,
  createTree
}