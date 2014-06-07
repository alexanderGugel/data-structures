var makeBinarySearchTree = function(value){
  var bst = Object.create(bstMethods);

  bst.left = null;
  bst.right = null;
  bst.value = value;

  return bst;
};

var bstMethods = {};

bstMethods.insert = function (value) {
  if (value > this.value) {
    if (this.right === null) {
      this.right = makeBinarySearchTree(value);
    } else {
      this.right = this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left = this.left.insert(value);
    }
  }
  return this;
};

bstMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      this.left = this.left.contains(value);
    }
  }
};

bstMethods.depthFirstLog = function (fn) {
  fn(this.value);
  if (this.right) {
    this.right.depthFirstLog(fn);
  }
  if (this.left) {
    this.left.depthFirstLog(fn);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
