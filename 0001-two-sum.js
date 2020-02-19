let twoSum = function (nums, target) {
  let a = nums.map((v, i) => {
    return {v: v, i: i}
  })
  a.sort((a, b) => a.v - b.v)
  let i, j, diff
  for (i = 0, j = a.length - 1; i !== j;) {
    diff = a[i].v + a[j].v - target
    if (diff < 0)
      ++i
    else if (diff > 0)
      --j
    else
      return [a[i].i, a[j].i]
  }
}

console.log(twoSum([2, 7, 11, 15], 9))