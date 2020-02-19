let tree = require('./0101-symmetric-tree')

function LocalMaximum(v) {
  this.v = v
}

LocalMaximum.prototype.update = function (root) {
  this.v = root.val
}

function mostLeftNode(root) {
  while (root.left) {
    root = root.left
  }
  return root
}

let is_valid_BST_ = function (root, max) {
  if (!root) {
    return true
  }
  if (!is_valid_BST_(root.left, max)) {
    return false
  }
  if (root.val <= max.v) {
    return false
  }
  max.update(root)
  if (!is_valid_BST_(root.right, max)) {
    return false
  }
  return true
}

let isValidBST = function (root) {
  if (!root)
    return true
  let mostLeft = mostLeftNode(root)
  let max = new LocalMaximum(mostLeft.val - 1)
  return is_valid_BST_(root, max)
};

//console.log(isValidBST(tree.createTree([2, 1, 3])))
console.log(isValidBST(tree.createTree([3, 1, 5, 0, 2, 4, 6, null, null, null, 3])))