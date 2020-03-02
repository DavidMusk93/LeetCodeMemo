let swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  let r = head.next;
  let rest = swapPairs(r.next);
  r.next = head;
  head.next = rest;
  return r
};