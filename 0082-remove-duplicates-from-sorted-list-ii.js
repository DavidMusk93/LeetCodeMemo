let deleteDuplicates = function (head) {
  if (!head)
    return null;
  let dup = false;
  while (head.next && head.val === head.next.val) {
    head = head.next;
    dup = true
  }
  if (dup)
    return deleteDuplicates(head.next);
  head.next = deleteDuplicates(head.next);
  return head
};