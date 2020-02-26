let max_depth_ = function (root) {
  if (!root) {
    return 0
  }
  let a, b;
  a = max_depth_(root.left);
  b = max_depth_(root.right);
  if (Math.abs(a - b) > 1) {
    throw "gotcha"
  }
  return 1 + (a > b ? a : b)
};

var isBalanced = function (root) {
  try {
    max_depth_(root)
  } catch (e) {
    return false
  }
  return true
};