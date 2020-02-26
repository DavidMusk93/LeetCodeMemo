let swap = function (a, i, j) {
  if (i !== j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t
  }
};

let sqrt = function (min_diff) {
  let fn = function (x, n) {
    return x / 2 + n / (2 * x)
  };
  return function (n) {
    let x = 1;
    while (Math.abs(x * x - n) > min_diff) {
      x = fn(x, n)
    }
    return x
  }
};

let squareful_ = function () {
  let data = new Set();
  let fn = sqrt(0.01);
  return function (n) {
    if (data.has(n))
      return true;
    let i = fn(n) | 0;
    if (i * i === n) {
      data.add(n);
      return true
    }
    return false
  }
}();

let permute_ = function (a, i, r) {
  if (a[i - 2] !== undefined && !squareful_(a[i - 1] + a[i - 2]))
    return;
  if (i === a.length - 1 && squareful_(a[i - 1] + a[i])) {
    r.count++;
    return
  }
  let j, unique = new Set();
  for (j = i; j < a.length; ++j) {
    if (unique.has(a[j]))
      continue;
    unique.add(a[j]);
    swap(a, i, j);
    permute_(a, i + 1, r);
    swap(a, j, i)
  }
};

function Data(count) {
  this.count = count
}

let numSquarefulPerms = function (A) {
  let i, k, r = new Data(0);
  permute_(A, 0, r);
  return r.count
};

console.log(numSquarefulPerms([1, 17, 8]));
console.log(numSquarefulPerms([2, 2, 2]));
console.log(numSquarefulPerms([1, 1]));


