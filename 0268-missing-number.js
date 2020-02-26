let swap = function (a, i, j) {
  if (i !== j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t
  }
};

let missingNumber = function (nums) {
  let i;
  for (i = 0; i < nums.length;) {
    if (i + 1 === nums[i] || nums[i] === 0) {
      ++i
    } else {
      swap(nums, i, nums[i] - 1)
    }
  }
  for (i = 0; i < nums.length; ++i) {
    if (nums[i] === 0)
      return i + 1
  }
  return 0
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));