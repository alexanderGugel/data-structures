var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var subTree = makeTree(value);
  this.children.push(subTree);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else {
    return _.some(this.children, function(child) {
      return child.contains(target);
    });
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
