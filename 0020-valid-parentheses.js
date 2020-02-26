let isValid = function (s) {
  let p, top, a = [], map = new Map();
  map['('] = ')';
  map['['] = ']';
  map['{'] = '}';
  for (p of s) {
    if (p === '(' || p === '[' || p === '{') {
      a.push(p)
    } else {
      top = a.pop();
      if (p !== map[top])
        return false
    }
  }
  return a.length === 0
};

console.log(isValid("{[]}"));