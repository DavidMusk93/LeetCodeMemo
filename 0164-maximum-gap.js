let maximum_gap_ = function () {
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);
  return function (a) {
    if (a.length < 2) {
      return 0
    }
    let t, t1, t2;
    if (a.length === 2) {
      t = a[0] - a[1];
      return t < 0 ? -t : t
    }
    let a1 = [], a2 = [];
    let i, v, min = MAX, max = MIN;
    v = a[0];
    for (i = 1; i < a.length; ++i) {
      t = a[i];
      if (t < v) {
        a1.push(t);
        if (t > max)
          max = t
      } else {
        a2.push(t);
        if (t < min) {
          min = t
        }
      }
    }
    t = 0;
    if (a1.length) {
      t = v - max
    }
    if (a2.length) {
      v = min - v;
      if (t < v) {
        t = v
      }
    }
    t1 = maximum_gap_(a1);
    t2 = maximum_gap_(a2);
    return t > t1 ? (t > t2 ? t : t2) : (t1 > t2 ? t1 : t2)
  }
}();

var maximumGap = function (nums) {
  let set = new Set(nums);
  nums = [...set];
  if (nums.length < 2) {
    return 0
  }
  return maximum_gap_(nums)
};

console.log(maximumGap([1, 3, 100]));