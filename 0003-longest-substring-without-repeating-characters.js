var lengthOfLongestSubstring1 = function (s) {
  let i, max, count, c, cache = {}
  for (i = max = count = 0; i < s.length; ++i) {
    c = s[i]
    if (!cache.hasOwnProperty(c)) {
      if (!cache['start_tag'])
        cache['start_tag'] = c
      cache[c] = i
      ++count
    } else {
      if (max < count)
        max = count
      count = 0
      i = cache[cache['start_tag']]
      cache = {}
    }
  }
  return max > count ? max : count
}

let lengthOfLongestSubstring = function (s) {
  if (s.length < 2)
    return s.length
  let i, j, k, max
  for (i = 0, j = max = 1; j < s.length; ++j) {
    for (k = i; s[k] !== s[j] && k < j; ++k) {
    }
    if (k === j) {
      k = j - i + 1
      if (max < k)
        max = k
    } else {
      i = k + 1
    }
  }
  k = j - i
  return max > k ? max : k
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))