let removeDuplicates = function (nums) {
  let i, j;
  for (i = nums.length - 1; i > 0; --i) {
    if (nums[i] === nums[i - 1]) {
      nums[i] = undefined;
      j = i
    }
  }
  for (i = j + 1; i < nums.length; ++i) {
    if (nums[i] !== undefined) {
      nums[j++] = nums[i]
    }
  }
  return j
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4],));