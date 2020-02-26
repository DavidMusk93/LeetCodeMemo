let gcd = function (a, b) {
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
    a -= b;
    if (!a) {
      break
    }
    while (!(a & 1)) {
      a >>= 1
    }
  }
  return b << (k1 < k2 ? k1 : k2)
};

let cacl2_ = function (a, b) {
  let d;
  d = a * b / gcd(a, b);
  return function (k) {
    return (k / a | 0) + (k / b | 0) - (k / d | 0)
  }
};

let calc3_ = function (a, b, c) {
  let d1, d2, d3, d4;
  d1 = a * b / gcd(a, b);
  d2 = a * c / gcd(a, c);
  d3 = b * c / gcd(b, c);
  d4 = a * b * c / gcd(a * b, c);
  return function (k) {
    return (k / a | 0) + (k / b | 0) + (k / c | 0) - (k / d1 | 0) - (k / d2 | 0) - (k / d3 | 0) + (k / d4 | 0)
  }
};

let calc_ = function () {
  if (arguments.length === 2)
    return cacl2_(...arguments);
  else
    return calc3_(...arguments)
};

let is_ugly_ = function (n, a) {
  return a.some(i => n % i === 0)
};

let nthUglyNumber = function (n, a, b, c) {
  let x, y, k, calc;
  let _a = [a, b, c];
  _a.sort((a, b) => a - b);
  a = _a[0], b = _a[1], c = _a[2];
  if (c % a === 0 && b % a === 0) {
    return a * n
  } else if (b % a === 0) {
    x = a + c - 1;
    y = a * c;
    _a = [a, c]
  } else if (c % a === 0 || c % b === 0) {
    x = a + b - 1;
    y = a * b;
    _a = [a, b]
  } else {
    x = a * b + a * c + b * c - a - b - c + 1;
    y = a * b * c
  }
  k = n * y / x | 0;
  calc = calc_(..._a);
  while (calc(k) < n) {
    k += a
  }
  while (calc(k) > n) {
    --k
  }
  while (!is_ugly_(k, _a)) {
    --k
  }
  return k
};

console.log(nthUglyNumber(12, 10, 3, 5)); // 25
console.log(nthUglyNumber(10, 7, 6, 8)); // 28
console.log(nthUglyNumber(5, 2, 3, 3)); // 8
console.log(nthUglyNumber(3, 2, 3, 5)); // 4
console.log(nthUglyNumber(4, 2, 3, 4)); // 6
console.log(nthUglyNumber(5, 2, 11, 13)); // 10
console.log(nthUglyNumber(10, 2, 3, 5)); // 14
console.log(nthUglyNumber(1000000000, 2, 217983653, 336916467)); // 1999999984