let find_kth_ = function (a, b, k) {
  if (a.length > b.length)
    return find_kth_(b, a, k)
  if (!a.length)
    return b[k - 1]
  if (k === 1)
    return a[0] < b[0] ? a[0] : b[0];
  let c1, c2, k1, k2
  k1 = Math.floor((a.length + 1) / 2)
  k2 = k - k1
  c1 = a[k1 - 1]
  c2 = b[k2 - 1]
  if (c1 === c2)
    return c1
  if (c1 < c2)
    return find_kth_(a.slice(k1), b.slice(0, k2), k2)
  else
    return find_kth_(a.slice(0, k1), b.slice(k2), k1)
}

var findMedianSortedArrays = function (nums1, nums2) {
  let sum = nums1.length + nums2.length
  if (sum & 1)
    return find_kth_(nums1, nums2, Math.ceil(sum / 2))
  else
    return (find_kth_(nums1, nums2, sum / 2) + find_kth_(nums1, nums2, sum / 2 + 1)) / 2
};

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))

// If c1 equals to c2, return directly
console.log(findMedianSortedArrays([0, 0], [0, 0]))

// a.length should be less than b.length for find_kth_
console.log(findMedianSortedArrays([2, 3, 4, 5, 6, 7, 8], [1]))