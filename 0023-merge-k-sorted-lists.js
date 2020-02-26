let Heap = require('./0313-super-ugly-number');
let List = require('./0002-add-two-numbers');

function greater(e1, e2) {
  return e1.val > e2.val
}

let mergeKLists = function (lists) {
  if (lists.length === 0)
    return null;
  lists = lists.filter(v => v !== null);
  if (lists.length === 0)
    return null;
  else if (lists.length === 1)
    return lists[0];
  let head, t, minHeap = new Heap(greater);
  lists.forEach(v => minHeap.push(v));
  head = t = minHeap.pop();
  do {
    if (t.next) {
      minHeap.push(t.next)
    }
    t.next = minHeap.pop();
    t = t.next
  } while (minHeap.size() > 0);
  return head
};

console.log(mergeKLists([List.createList([1, 4, 5]), List.createList([1, 3, 4]), List.createList([2, 6])]));