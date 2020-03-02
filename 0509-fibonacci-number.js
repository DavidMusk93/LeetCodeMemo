let fib = function () {
  let data = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
  return function (N) {
    if (data[N] !== undefined) {
      return data[N]
    }
    data[N] = arguments.callee(N - 2) + arguments.callee(N - 1);
    return data[N]
  }
}();