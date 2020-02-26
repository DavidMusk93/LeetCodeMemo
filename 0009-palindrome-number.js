let reverse_integer_ = function (x) {
  if (x < 10)
    return x;
  let i, y;
  for (y = 0; x; x = (x / 10 | 0)) {
    i = x % 10;
    y *= 10;
    y += i
  }
  return y
};

let isPalindrome = function (x) {
  if (x < 0)
    return false;
  else if (x < 10)
    return true;
  return x === reverse_integer_(x)
};

console.log(isPalindrome(1001));