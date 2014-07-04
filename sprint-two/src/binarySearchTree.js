var makeBinarySearchTree = function(value){
  var bst = Object.create(binarySearchTreeMethods);
  bst.left = null;
  bst.value = value;
  bst.right = null;
  return bst;
};

var binarySearchTreeMethods = {
  insert: function (value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = makeBinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    }
    if (value > this.value) {
      if (this.right === null) {
        this.right = makeBinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },
  contains: function (value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
    if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  },
  depthFirstLog: function (cb) {
    cb(this.value)
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
 */
