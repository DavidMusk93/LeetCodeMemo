let singleNumber = function (nums) {
  return nums.reduce((r, i) => r ^ i)
};