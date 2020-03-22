function Node(k, v) {
  this.k = k
  this.v = v
  this.count = 1
}

// Node.prototype.reset = function (k, v) {
//   this.k = k
//   this.v = v
//   return this
// }

/**
 * @param {number} capacity
 */
let LRUCache = function (capacity) {
  this.capacity = capacity
  this.data = {} // Object is better than Array
  this.least_queue = []
  // this.offset = 0
  // this.cache = null
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.data[key]
  if (node !== undefined) {
    node.count++
    this.least_queue.push(node)
    return node.v
  }
  return -1
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let node = this.data[key]
  if (node !== undefined) {
    node.v = value
    node.count++
  } else {
    if (this.capacity && this.capacity--) {
    } else {
      while ((node = this.least_queue.shift())) {
        if (node.count === 1) {
          break
        } else {
          node.count--
        }
      }
      this.data[node.k] = undefined
      // for (const k in this.data) {
      //   if (this.data[k] === node) {
      //     this.data[k] = undefined
      //     break
      //   }
      // }
    }
    // node = this.data[key] = this.cache !== null ? this.cache.reset(key, value) : new Node(key, value)
    node = this.data[key] = new Node(key, value)
  }
  this.least_queue.push(node)
  // if (this.offset > 128) {
  //   this.least_queue = this.least_queue.slice(this.offset)
  //   this.offset = 0
  // }
};