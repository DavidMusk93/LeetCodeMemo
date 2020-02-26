function swap(a, i, j) {
  if (i !== j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t
  }
}

function Heap(cmp) {
  this.a = [];
  this.cmp = cmp
}

Heap.prototype.shift_down_ = function (hole, e) {
  let i, n;
  i = (hole + 1) << 1;
  n = this.a.length;
  while (i <= n) {
    i -= i === n || this.cmp(this.a[i], this.a[i - 1]);
    if (!this.cmp(e, this.a[i]))
      break;
    this.a[hole] = this.a[i];
    hole = i;
    i = (i + 1) << 1
  }
  this.a[hole] = e
};

Heap.prototype.shift_up_unconditional_ = function (hole, e) {
  let i = (hole - 1) / 2 | 0;
  do {
    this.a[hole] = this.a[i];
    hole = i;
    if (hole)
      i = (i - 1) >> 1
  } while (hole && this.cmp(this.a[i], e));
  this.a[hole] = e
};

Heap.prototype.shift_up_ = function (hole, e) {
  let i = (hole - 1) / 2 | 0;
  while (hole && this.cmp(this.a[i], e)) {
    this.a[hole] = this.a[i];
    hole = i;
    if (hole)
      i = (i - 1) >> 1
  }
  this.a[hole] = e
};

Heap.prototype.push = function (e) {
  this.a.push(e);
  if (this.a.length > 1)
    this.shift_up_(this.a.length - 1, e)
};

Heap.prototype.pop = function () {
  if (!this.a.length) {
    return null
  }
  if (this.a.length < 3) {
    return this.a.shift()
  }
  let r, e;
  r = this.a[0];
  e = this.a.pop();
  this.shift_down_(0, e);
  return r
};

Heap.prototype.top = function () {
  return this.a[0]
};

Heap.prototype.size = function () {
  return this.a.length
};

Heap.prototype.adjust = function (hole, e) {
  let i = (hole - 1) / 2 | 0;
  if (i > 0 && this.cmp(this.a[i], e))
    this.shift_up_unconditional_(hole, e);
  else
    this.shift_down_(hole, e)
};

function Node(i, v, base) {
  this.i = i;
  this.v = v;
  this.base = base
}

Node.prototype.advance = function (a) {
  let r = false;
  if (this.v !== a[a.length - 1]) {
    a.push(this.v);
    r = true
  }
  this.v = a[++this.i] * this.base;
  return r
};

function greater(a, b) {
  return a.v === b.v ? a.base > b.base : a.v > b.v
}

let nthSuperUglyNumber = function (n, primes) {
  if (n-- === 1)
    return 1;
  let minHeap = new Heap(greater);
  let min, a = [1];
  primes.forEach(prime => minHeap.push(new Node(0, prime, prime)));
  while (n) {
    min = minHeap.top();
    min.advance(a) && --n;
    minHeap.adjust(0, min)
  }
  return a[a.length - 1]
};

let nthUglyNumber = function (n) {
  return nthSuperUglyNumber(n, [2, 3, 5])
};

// console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]))
// console.log(nthSuperUglyNumber(2, [2, 3, 5]))

module.exports = (
  Heap
);