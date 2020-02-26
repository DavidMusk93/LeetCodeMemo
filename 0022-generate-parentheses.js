let generate_ = function (a, i, k, r, depth) {
  if (!depth) {
    while (k--) {
      a[i++] = ')'
    }
    r.push(a.join(''));
    return
  }
  a[i++] = '(';
  generate_(a, i, ++k, r, --depth);
  while (depth && k--) {
    a[i++] = ')';
    generate_(a, i, k, r, depth)
  }
};

var generateParenthesis = function (n) {
  let a = new Array(n << 1), r = [];
  generate_(a, 0, 0, r, n);
  return r
};

console.log(generateParenthesis(3));