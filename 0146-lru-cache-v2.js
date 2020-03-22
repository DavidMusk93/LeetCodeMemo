function LRUNode(k, v) {
  this.k = k
  this.v = v
  /* this.timestamp is initialized to undefined */
}

LRUNode.prototype.update = function (ts, a) {
  a[this.timestamp] = undefined /* a[undefined] is valid */
  this.timestamp = ts
  a[ts] = this
}

let LRUCache = function (capacity) {
  this.left = capacity
  this.data = {}
  this.least = []
  this.timestamp = 0
  this.offset = 0
}

LRUCache.prototype.get = function (key) {
  let node = this.data[key]
  if (node !== undefined) {
    node.update(this.timestamp++, this.least)
    return node.v
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  let node = this.data[key]
  if (node !== undefined) {
    node.v = value
  } else {
    if (this.left) {
      this.left--
      node = new LRUNode(key, value)
    } else {
      while ((node = this.least[this.offset++]) === undefined) {
      }
      delete this.data[node.k]
      node.k = key
      node.v = value
    }
    this.data[key] = node
  }
  node.update(this.timestamp++, this.least)
  if (this.offset > 1024) {
    let i, j, a = []
    for (i = 0, j = this.offset; j < this.least.length; ++j) {
      node = this.least[j]
      if (node !== undefined) {
        node.timestamp = i++
        a.push(node)
      }
    }
    this.timestamp = i
    this.offset = 0
    this.least = a
  }
}