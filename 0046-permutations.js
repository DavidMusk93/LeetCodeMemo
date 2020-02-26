let swap = function (a, i, j) {
  if (i !== j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t
  }
};

let permute_ = function (a, i, r) {
  if (i === a.length - 1) {
    r.push(a.concat([]));
    return
  }
  let j;
  for (j = i; j < a.length; ++j) {
    swap(a, i, j);
    permute_(a, i + 1, r);
    swap(a, j, i)
  }
};

var permute = function (nums) {
  let r = [];
  permute_(nums, 0, r);
  return r
};

console.log(permute([1, 2, 3]));
