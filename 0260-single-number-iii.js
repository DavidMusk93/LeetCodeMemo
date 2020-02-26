let singleNumber = function (nums) {
  let i, k, a = [], b = [];
  k = nums.reduce((r, i) => r ^ i);
  for (i = 0; !(k & 1); ++i, k >>= 1) {
  }
  k = 1 << i;
  for (i of nums) {
    if (i & k)
      a.push(i);
    else
      b.push(i)
  }
  return [a.reduce((r, i) => r ^ i), b.reduce((r, i) => r ^ i)]
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));