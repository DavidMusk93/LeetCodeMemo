class ArrayView {
  constructor(a, from, to) {
    this.a = a;
    this.from = from;
    this.to = to
  }

  findTarget(target, r) {
    let i, j, a, b, sum;
    for (i = this.from, j = this.to; i < j;) {
      a = this.a[i];
      b = this.a[j];
      sum = a + b;
      if (sum < target)
        ++i;
      else if (sum > target)
        --j;
      else {
        r.push([a, b, -target]);
        while (i < j && a === this.a[++i]) {
        }
        while (i < j && b === this.a[--j]) {
        }
      }
    }
  }
}

var threeSum = function (nums) {
  if (nums.length < 3)
    return [];
  nums.sort((i, j) => i - j);
  if (nums[0] > 0)
    return [];
  let i, n, r = [], av = new ArrayView(nums, 0, 0);
  for (n = nums.length, i = n - 1; i > 1 && nums[i] >= 0; --i) {
    if (nums[i] === nums[i + 1])
      continue;
    av.to = i - 1;
    av.findTarget(-nums[i], r)
  }
  // r.sort((a, b) => (a[0] - b[0]) * 100 + (a[1] - b[1]))
  // let del = []
  // for (i = r.length - 1; i > 0; --i) {
  //   if (r[i][0] === r[i - 1][0] && r[i][1] === r[i - 1][1]) {
  //     del.push(i)
  //   }
  // }
  // del.forEach(i => r.splice(i, 1))
  return r
};

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
// console.log(threeSum([0, 0, 0, 0]))
// console.log(threeSum([-2, 0, 0, 2, 2]))
// console.log(threeSum([1, 1, -2]))
// console.log(threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]))
// console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]))
console.log(threeSum([-3, -4, -2, 0, 2, 2, -2, 1, -1, 2, 3, -1, -5, -4, -5, 1]));