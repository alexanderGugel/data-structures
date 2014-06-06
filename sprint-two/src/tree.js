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

  var result = false;

  if (this.value === target) {
    result = true;
  } else {
    for (var i = 0; i < this.children.length; i += 1) {
      if (this.children[i].contains(target) === true) {
        result = true;
      }
    }
    // var found= false;
    // _.each(this.children, function (child) {
    //   if (child.contains(target)) {
    //     found = true;
    //   }
    // });
    // return found;
  }

  return result;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
