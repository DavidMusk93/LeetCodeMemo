let common_prefix_ = function (s1, s2) {
  let i, n;
  for (i = 0, n = s1.length < s2.length ? s1.length : s2.length; i < n; ++i) {
    if (s1[i] !== s2[i])
      break
  }
  return s1.slice(0, i)
};

class StringView {
  constructor(s, n1, n2) {
    this.s = s;
    this.n1 = n1;
    this.n2 = n2
  }

  compare(s) {
    let i;
    for (i = this.n1; i < this.n2; ++i) {
      if (this.s[i] !== s[i])
        break
    }
    this.n2 = i
  }

  str() {
    return this.s.slice(this.n1, this.n2)
  }
}

var longestCommonPrefix = function (strs) {
  if (!strs.length)
    return "";
  let i, sv = new StringView(strs[0], 0, strs[0].length);
  for (i = 1; i < strs.length; ++i) {
    if (!sv.n2)
      break;
    sv.compare(strs[i])
  }
  return sv.str()
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));