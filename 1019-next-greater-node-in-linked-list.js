let next_larger_ = function (head, a) {
  if (head.next === null) {
    a.push(0);
    return head.val
  }
  let max = next_larger_(head.next, a);
  let i = head.val, j = head.next.val;
  if (i < j) {
    a.push(j)
  } else if (i >= max) {
    a.push(0)
  } else {
    let t;
    for (let k = a.length - 1; k > -1; --k) {
      if (a[k] > i) {
        t = a[k];
        break
      }
    }
    a.push(t === undefined ? 0 : t)
  }
  return i > max ? i : max
};

let nextLargerNodes = function (head) {
  let a = [];
  next_larger_(head, a);
  return a.reverse()
};