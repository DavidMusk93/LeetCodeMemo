let next_larger_ = function (head, a) {
  if (head.next === null) {
    a.unshift(0);
    return head.val
  }
  let max = next_larger_(head.next, a);
  let i = head.val, j = head.next.val;
  if (i < j) {
    a.unshift(j)
  } else if (i >= max) {
    a.unshift(0)
  } else {
    let t;
    for (const k of a) {
      if (k > i) {
        t = k;
        break
      }
    }
    a.unshift(t === undefined ? 0 : t)
  }
  return i > max ? i : max
};

let nextLargerNodes = function (head) {
  let a = [];
  next_larger_(head, a);
  return a
};