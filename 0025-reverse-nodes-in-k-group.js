let list = require('./0002-add-two-numbers');

function KGroupContext(k, last, remain) {
  this.k = k;
  this.last = last;
  this.remain = remain
}

let lengthOfList = function (head) {
  let i = 0;
  do {
    ++i;
    head = head.next
  } while (head);
  return i
};

let kReverseList = function (head, ctx) {
  ctx.last = head;
  ctx.remain = head.next;
  if (--ctx.k) {
    kReverseList(head.next, ctx).next = head
  }
  return head
};

let reverseKGroup = function (head, k) {
  if (k === 1) {
    return head
  }
  let r;
  let n = lengthOfList(head) / k | 0;
  let f1, f2, ctx = new KGroupContext(k, null, head);
  while (n--) {
    f1 = f2;
    f2 = kReverseList(ctx.remain, ctx);
    ctx.k = k;
    if (f1 !== undefined) {
      f1.next = ctx.last
    } else {
      r = ctx.last
    }
  }
  f2.next = ctx.remain;
  return r
};

let a = list.createList([1, 2, 3, 4, 5]);
reverseKGroup(a, 2);