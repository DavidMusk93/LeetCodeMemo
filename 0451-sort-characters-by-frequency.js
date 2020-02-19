var frequencySort = function (s) {
  if (s.length < 2)
    return s
  let i, a = [], map = {}
  for (i of s) {
    if (map[i] === undefined)
      map[i] = 0
    map[i]++
  }
  for (i in map) {
    a.push([map[i], i])
  }
  a.sort((a, b) => b[0] - a[0])
  return a.map(i => i[1].repeat(i[0])).reduce((s, i) => s += i)
};

console.log(frequencySort("tree"))