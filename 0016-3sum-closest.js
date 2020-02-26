class Context {
  constructor(min) {
    this.min = min
  }

  update(x) {
    if (Math.abs(this.min) > Math.abs(x))
      this.min = x
  }
}

let find_target_closest = function (a, i, j, t, ctx) {
  let sum;
  while (i < j) {
    sum = a[i] + a[j];
    if (sum < t)
      ++i;
    else if (sum > t)
      --j;
    else
      return true;
    sum -= t;
    ctx.update(sum)
  }
  return false
};

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let i, ctx = new Context(-(2 ** 31));
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2]
  }
  for (i = nums.length - 1; i > 1; --i) {
    if (nums[i] === nums[i + 1])
      continue;
    if (find_target_closest(nums, 0, i - 1, target - nums[i], ctx)) {
      return target
    }
  }
  return ctx.min + target
};

console.log(threeSumClosest(
  [6, -18, -20, -7, -15, 9, 18, 10, 1, -20, -17, -19, -3, -5, -19, 10, 6, -11, 1, -17, -15, 6, 17, -18, -3, 16, 19, -20, -3, -17, -15, -3, 12, 1, -9, 4, 1, 12, -2, 14, 4, -4, 19, -20, 6, 0, -19, 18, 14, 1, -15, -5, 14, 12, -4, 0, -10, 6, 6, -6, 20, -8, -6, 5, 0, 3, 10, 7, -2, 17, 20, 12, 19, -13, -1, 10, -1, 14, 0, 7, -3, 10, 14, 14, 11, 0, -4, -15, -8, 3, 2, -5, 9, 10, 16, -4, -3, -9, -8, -14, 10, 6, 2, -12, -7, -16, -6, 10],
  -52));