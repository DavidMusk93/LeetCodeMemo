let isEmpty = function (obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
};

/**
 * Initialize your data structure here.
 */
let MapSum = function () {
  this.val = arguments[0] || 0;
  this.children = {}
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  let i, k;
  for (k in this.children) {
    for (i = 0; i < k.length; ++i) {
      if (k[i] !== key[i]) {
        break
      }
    }
    let node = this.children[k];
    if (i === 0) {
    } else if (k[i] === undefined) {
      if (key[i] === undefined) {
        node.val = val
      } else {
        node.insert(key.substring(i), val)
      }
      return
    } else {
      if (key[i] === undefined) {
        let t = new MapSum(node.val);
        t.children = node.children;
        node.children = {};
        node.children[k.substring(i)] = t;
        node.val = val
      } else {
        node.insert(k.substring(i), node.val);
        node.insert(key.substring(i), val);
        node.val = 0
      }
      this.children[k.substring(0, i)] = node;
      delete this.children[k];
      return
    }
  }
  this.children[key] = new MapSum(val)
};

let count_ = function (node) {
  if (isEmpty(node.children)) {
    return node.val
  }
  let k, sum = node.val;
  for (k in node.children) {
    sum += count_(node.children[k])
  }
  return sum
};

let find_prefix_ = function (node, prefix) {
  let i, k;
  for (k in node.children) {
    for (i = 0; i < k.length; ++i) {
      if (k[i] !== prefix[i]) {
        break
      }
    }
    if (i === 0) {
    } else if (k[i] === undefined) {
      if (prefix[i] === undefined) {
        return node.children[k]
      } else {
        return arguments.callee(node.children[k], prefix.substring(i))
      }
    } else {
      if (prefix[i] === undefined) {
        return node.children[k]
      } else {
        return null
      }
    }
  }
  return null
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let t = find_prefix_(this, prefix);
  return t === null ? 0 : count_(t)
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

let obj = new MapSum();
obj.insert("apple", 3);
obj.insert("app", 2);
obj.insert("ap", 5);
obj.insert("bb", 10);
//console.log(count_(obj.children["ap"]))
console.log(find_prefix_(obj, "app"));