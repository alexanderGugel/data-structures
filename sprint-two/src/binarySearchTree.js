var makeBinarySearchTree = function(value){
  var bst = Object.create(binarySearchTreeMethods);
  bst.left = null;
  bst.value = value;
  bst.right = null;
  return bst;
};

var delegateInsert = function (next, value) {
  if (this[next] === null) {
    this[next] = makeBinarySearchTree(value);
  } else {
    this[next].insert(value);
  }
};

var delegateContains = function (next, value) {
  if (this[next] === null) {
    return false;
  } else {
    return this[next].contains(value);
  }
};

var binarySearchTreeMethods = {
  insert: function (value) {
    if (value < this.value) {
      delegateInsert.call(this, 'left', value);
    }
    if (value > this.value) {
      delegateInsert.call(this, 'right', value);
    }
  },
  contains: function (value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value) {
      return delegateContains.call(this, 'left', value);
    }
    if (value > this.value) {
      return delegateContains.call(this, 'right', value);
    }
  },
  depthFirstLog: function (cb) {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== null) {
      this.right.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * depthFirstLog: O(n)
 * insert: O(log n)
 * contains: O(log n)
*/
