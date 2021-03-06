var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(val){
    var linkedListNode = makeNode(val);

    if (list.head === null) {
      list.head = linkedListNode;
      list.tail = linkedListNode;
    } else {
      list.tail.next = linkedListNode;
      list.tail = linkedListNode;
    }
  };

  list.removeHead = function(){
    if (list.head) {
      // List not empty
      var previousHeadVal = list.head.value;
      if (list.head.next === null) {
        list.tail = null;
      }
      list.head = list.head.next;
      return previousHeadVal;
    }

  };

  list.contains = function(target){
    var currentNode = list.head;

    while (currentNode !== null) {
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};




var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
