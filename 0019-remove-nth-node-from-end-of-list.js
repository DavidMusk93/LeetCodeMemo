let list = require('./0002-add-two-numbers')

var removeNthFromEnd = function (head, n) {
  let p0, p1, p2
  p1 = p2 = head
  while (--n) {
    p2 = p2.next
  }
  while (p2.next) {
    p0 = p1
    p1 = p1.next
    p2 = p2.next
  }
  if (p1 === head) {
    return p1.next
  } else if (!p1.next) {
    p0.next = null
  } else {
    p1.val = p1.next.val
    p1.next = p1.next.next
  }
  return head
}

console.log(removeNthFromEnd(list.createList([1, 2]), 1))