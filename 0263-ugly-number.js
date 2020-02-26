let is_ugly_ = function () {
  let ugly = new Set([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18]);
  return function (num) {
    if (ugly.has(num))
      return true;
    if (num & 1) {
      if (!(num % 3))
        return arguments.callee(num / 3 | 0);
      if (!(num % 5))
        return arguments.callee(num / 5 | 0);
      return false
    }
    return arguments.callee(num >> 1)
  }
}();

let isUgly = function (num) {
  if (num < 1)
    return false;
  return is_ugly_(num)
};