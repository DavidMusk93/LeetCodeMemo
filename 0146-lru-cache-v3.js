function CoreData(k, v) {
  this.k = k
  this.v = v
}

function LRUNode(k, v) {
  this.core = new CoreData(k, v)
  this.next = null
}

let LRUCache = function (capacity) {
  this.left = capacity
  this.data = {}
  this.head = null
  this.tail = null
}

LRUCache.prototype.exchange = function (a) {
  let t, b = a.next
  if (b !== null) {
    this.tail.next = b
    t = a.core
    a.core = b.core
    b.core = t
    a.next = b.next
    b.next = null
    this.data[a.core.k] = a
    this.data[b.core.k] = b
    this.tail = b
  }
}

LRUCache.prototype.get = function (key) {
  let node = this.data[key]
  if (node !== undefined) {
    this.exchange(node)
    return this.tail.core.v
  }
  return -1
}

LRUCache.prototype.put = function (key, value) {
  let node = this.data[key]
  if (node !== undefined) {
    node.core.v = value
    this.exchange(node)
  } else {
    if (this.left) {
      this.left--
      if (this.tail === null) {
        this.head = this.tail = new LRUNode(key, value)
      } else {
        this.tail.next = new LRUNode(key, value)
        this.tail = this.tail.next
      }
    } else {
      delete this.data[this.head.core.k]
      let t = this.head.next
      this.tail.next = this.head
      this.head.core.k = key
      this.head.core.v = value
      this.head.next = null
      this.tail = this.head
      this.head = t
    }
    this.data[key] = this.tail
  }
}

let cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
cache.get(1)
cache.put(3, 3)
cache.get(2)
cache.put(4, 4)
cache.get(1)
cache.get(3)
cache.get(4)