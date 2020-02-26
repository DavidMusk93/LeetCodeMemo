let tribonacci = function () {
  let data = [0, 1, 1, 2, 4, 7, 13, 24];
  return function (n) {
    if (data[n] !== undefined)
      return data[n];
    let i, j, k;
    if ((i = data[n - 3]) === undefined) {
      data[n - 3] = i = arguments.callee(n - 3)
    }
    if ((j = data[n - 2]) === undefined) {
      data[n - 2] = j = arguments.callee(n - 2)
    }
    if ((k = data[n - 1]) === undefined) {
      data[n - 1] = k = arguments.callee(n - 1)
    }
    return i + j + k
  }
}();