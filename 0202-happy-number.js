const cacl_ = function (n) {
  return ('' + n)
    .split('')
    .map(s => +s)
    .filter(i => i !== 0)
    .reduce((sum, i) => sum + i * i, 0)
}

const cacl2_ = function (n) {
  let sum = 0, i
  while (n) {
    i = Math.floor(n) % 10
    if (i !== 0)
      sum += i * i
    n /= 10
  }
  return sum
}

let isHappy = function (n) {
  while (n !== 1 && n !== 7) {
    if (n < 10 || n === 29 || n === 37)
      return false
    n = cacl_(n)
  }
  return true
}
