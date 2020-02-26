let find_single_ = function (num, i, j) {
  if (j - i === 1)
    return num[i];
  let k = (i + j) / 2 | 0;
  let odd = ((k - i) & 1) === 0;
  if (num[k] !== num[k - 1] && num[k] !== num[k + 1])
    return num[k];
  if (num[k] === num[k - 1]) {
    if (odd)
      return find_single_(num, i, k + 1);
    return find_single_(num, k + 1, j)
  }
  if (odd)
    return find_single_(num, k, j);
  return find_single_(num, i, k)
};

let singleNonDuplicate = function (nums) {
  return find_single_(nums, 0, nums.length)
};