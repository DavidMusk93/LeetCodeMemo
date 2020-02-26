let round_ = function (a, i1, j1, i2, j2, r) {
  if (i1 === i2) {
    while (j1 <= j2) {
      r.push(a[i1][j1++])
    }
  } else if (j1 === j2) {
    while (i1 <= i2) {
      r.push(a[i1++][j2])
    }
  } else {
    let t;
    t = j1;
    while (t <= j2) { // [j1,j2]
      r.push(a[i1][t++])
    }
    t = i1 + 1;
    while (t < i2) { // (i1, i2)
      r.push(a[t++][j2])
    }
    t = j2;
    while (t >= j1) { // [j2, j1]
      r.push(a[i2][t--])
    }
    t = i2 - 1;
    while (t > i1) { // (i2, i1)
      r.push(a[t--][j1])
    }
  }
};

var spiralOrder = function (matrix) {
  let i1, i2, j1, j2, r = [];
  i1 = j1 = -1;
  i2 = matrix.length;
  if (!i2)
    return r;
  j2 = matrix[0].length;
  while (++i1 <= --i2 && ++j1 <= --j2) {
    round_(matrix, i1, j1, i2, j2, r)
  }
  return r
};

console.log(spiralOrder([[1]]));
console.log(spiralOrder([[1, 2], [3, 4]]));
console.log(spiralOrder([[1, 2, 3]]));
console.log(spiralOrder([[1], [2], [3]]));
console.log(spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));