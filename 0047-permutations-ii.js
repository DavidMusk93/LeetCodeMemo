let swap = function (a, i, j) {
  if (i !== j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t
  }
};

let permute_unique_ = function (a, i, r) {
  if (i === a.length - 1) {
    r.push(a.concat([]));
    return
  }
  let j, unique = new Set();
  for (j = i; j < a.length; ++j) {
    if (unique.has(a[j]))
      continue;
    unique.add(a[j]);
    swap(a, i, j);
    permute_unique_(a, i + 1, r);
    swap(a, j, i)
  }
};

var permuteUnique = function (nums) {
  let r = [];
  permute_unique_(nums, 0, r);
  return r
};

console.log(permuteUnique([1, 2, 3, 4]));