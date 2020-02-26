let gcd = function () {
  let prime = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
  return function (a, b) {
    let k1, k2, t;
    for (k1 = 0; !(a & 1); a >>= 1, ++k1) {
    }
    for (k2 = 0; !(b & 1); b >>= 1, ++k2) {
    }
    if (a === 1 || b === 1)
      a = b = 1;
    while (a ^ b) {
      if (a < b) {
        t = a;
        a = b;
        b = t
      }
      if (a % b === 0) {
        break
      }
      if (prime.has(b)) {
        b = 1;
        break
      }
      a -= b;
      if (!a) {
        break
      }
      while (!(a & 1)) {
        a >>= 1
      }
    }
    return b << (k1 < k2 ? k1 : k2)
  }
}();

let cacl2_ = function (a, b) {
  let d;
  d = a * b / gcd(a, b);
  return function (k) {
    return (k / a | 0) + (k / b | 0) - (k / d | 0)
  }
};

let nthMagicalNumber = function (N, A, B) {
  let x, y, fn, k;
  x = A < B ? A : B;
  B = A + B - x;
  A = x;
  if (B % A === 0) {
    return N * A % (10 ** 9 + 7)
  }
  x = A + B - 1;
  y = A * B;
  // k = N * (y / x) | 0
  k = Math.floor(N * (y / x));
  fn = cacl2_(A, B);
  while (fn(k) < N) {
    k += A
  }
  while (fn(k) > N) {
    --k
  }
  while (k % B && k % A) {
    --k
  }
  return k % (10 ** 9 + 7)
};

console.log(nthMagicalNumber(887859796, 29911, 37516)); // 257511204
console.log(nthMagicalNumber(859, 759, 30)); // 24900