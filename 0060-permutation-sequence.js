let factorial_ = function () {
  let a = [1, 1, 2, 6, 24, 120];
  return function (n) {
    if (!a[n])
      a[n] = n * arguments.callee(n - 1);
    return a[n]
  }
}();

function range(size, start = 0) {
  return [...Array(size).keys()].map(i => i + start)
}

function Data(s) {
  this.s = s
}

let swap = function (a, i, j) {
  if (i !== j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t
  }
};

let get_permutation_ = function (a, k, data) {
  let i, factor;
  if (a.length === 1) {
    data.s += a[0];
    return
  }
  factor = factorial_(a.length - 1);
  i = (k / factor | 0);
  data.s += a.splice(i, 1)[0];
  k -= i * factor;
  get_permutation_(a, k, data)
};

let get_permutaion2_ = function (a, k, i) {
  if (i < a.length) {
    let factor = factorial_(a.length - i - 1);
    let j = k / factor | 0;
    k -= j * factor;
    j += i;
    swap(a, i, j);
    ++i;
    if (i < j) {
      let t = a[j];
      while (i < j) {
        a[j--] = a[j]
      }
      a[j] = t
    }
    arguments.callee(a, k, i)
  }
};

var getPermutation = function (n, k) {
  // let data = new Data("")
  // get_permutation_(range(n, 1), k - 1, data)
  // return data.s
  let r = range(n, 1);
  get_permutaion2_(r, k - 1, 0);
  return r.reduce((s, i) => s += i, "")
};

console.log(getPermutation(3, 3));
console.log(getPermutation(4, 9));
console.log(getPermutation(1, 1));
console.log(getPermutation(2, 2));