let reverse_ = function (x, s) {
  if (!x)
    return s
  let i = x % 10
  x -= i
  s *= 10
  s += i
  return reverse_(x / 10, s)
}

var reverse = function (x) {
  let b = x < 0
  x = reverse_(b ? -x : x, 0)
  return b ? -x : x
}

let reverse2 = function (x) {
  if (x > -10 && x < 10)
    return x
  const MAX = 2 ** 31 - 1
  let b = x < 0, i, s
  x = b ? -x : x;
  s = 0
  while (x) {
    i = x % 10
    s *= 10
    s += i
    if (s > MAX + b)
      return 0
    x -= i
    x /= 10
  }
  return b ? -s : s
}

console.log(reverse2(-120))
console.log(reverse2(1534236469))

