let single_number_ = function () {
  let mask = [];
  for (let i = 0; i < 32; ++i) {
    mask.push(1 << i)
  }
  return function (nums) {
    let k, r = 0;
    for (const i of mask) {
      k = 0;
      for (const j of nums) {
        if (j & i)
          ++k
      }
      if (k % 3)
        r |= i
    }
    return r
  }
}();

let singleNumber = function (nums) {
  // let s1, s2, p, q
  // s1 = new Set(), s2 = new Set()
  // for (const i of nums) {
  //   if (s1.has(i)) {
  //     s2.add(i)
  //   } else {
  //     s1.add(i)
  //   }
  // }
  // for (const i of s1) {
  //   if (!s2.has(i)) {
  //     return i
  //   }
  // }
  // return undefined
  return single_number_(nums)
};

console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
console.log(singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]));