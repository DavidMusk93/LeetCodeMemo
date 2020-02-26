function ListNode(val) {
  this.val = val;
  this.next = null
}

let createList = function (a) {
  if (!a)
    return null;
  let h = new ListNode(a[0]);
  a.slice(1).reduce((r, v) => {
    r.next = new ListNode(v);
    r = r.next;
    return r
  }, h);
  return h
};

let add_two_node_ = function (a, b, carry) {
  let sum = carry, h;
  if (!a && !b) {
    return carry ? new ListNode(carry) : null
  }
  if (a)
    sum += a.val;
  if (b)
    sum += b.val;
  carry = sum > 9;
  if (carry) {
    sum -= 10;
  }
  h = new ListNode(sum);
  h.next = add_two_node_(a ? a.next : null, b ? b.next : null, carry);
  return h
};

let addTwoNumbers = function (l1, l2) {
  return add_two_node_(l1, l2, 0)
};

let addTwoNumbers2 = function (l1, l2) {
  let c = 0, sum, r, tail, b;
  if (!l1 && !l2)
    return null;
  r = tail = new ListNode(0);
  b = true;
  while (b) {
    sum = c;
    if (l1) {
      sum += l1.val;
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next
    }
    c = sum > 9;
    if (c) {
      sum -= 10
    }
    tail.val = sum;
    if ((b = l1 || l2)) {
      tail.next = new ListNode(0);
      tail = tail.next
    }
  }
  if (c)
    tail.next = new ListNode(c);
  return r
};

// l1 = createList([2, 4, 3])
// l2 = createList([5, 6, 4])
//
// console.log(addTwoNumbers(l1, l2))

module.exports = {
  ListNode,
  createList
};