function Data() {
  this.i = 0
  this.j = 0
}

Data.prototype.update = function (i, j) {
  if (this.j - this.i < j - i) {
    this.i = i, this.j = j
  }
}

var longestPalindrome = function (s) {
  if (s.length < 2)
    return s;
  let i, j, k1, k2, max = new Data()
  for (i = 0, j = 1; j < s.length;) {
    while (s[i] === s[j]) {
      ++j
    }
    if (j === s.length) {
      max.update(i, j)
      break
    }
    k1 = i - 1, k2 = j
    while (k1 >= 0 && k2 < s.length && s[k1] === s[k2]) {
      --k1, ++k2
    }
    max.update(k1 + 1, k2)
    if (k2 === s.length)
      break
    i = j++
  }
  return s.slice(max.i, max.j)
};

console.log(longestPalindrome("babad"))
console.log(longestPalindrome("cbbd"))