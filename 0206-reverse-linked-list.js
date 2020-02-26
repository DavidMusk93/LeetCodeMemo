var reverseList = function (head) {
  if (!head)
    return null;
  if (!head.next)
    return head;
  let t = head.next;
  let r = reverseList(t);
  t.next = head;
  head.next = null;
  return r;
};

let reverse_list_ = function (head) {
  if (!head.next)
    return head;
  reverse_list_(head.next).next = head;
  return head
};

let reverse_list = function (head) {
  let r = head;
  if (!r || !r.next)
    return r;
  while (r.next)
    r = r.next;
  reverse_list_(head).next = null;
  return r
};