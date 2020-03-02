let maxSubArray = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let i, sum, max;
  for (i = 0, sum = 0, max = nums[0]; i < nums.length; ++i) {
    if (nums[i] > 0) {
      sum += nums[i];
      if (sum > max)
        max = sum
    } else {
      sum += nums[i];
      if (sum < 0)
        sum = 0
    }
    if (nums[i] <= 0 && nums[i] > max)
      max = nums[i]
  }
  return max
};