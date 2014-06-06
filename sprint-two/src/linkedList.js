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
      var previousTail = list.tail;
      list.tail = linkedListNode;
      previousTail.next = linkedListNode;
    }
  };

  list.removeHead = function(){
    if (list.head !== null) {
      // List not empty
      var previousHeadVal = list.head.value;
      if (list.head.next === null) {
        // Only one element inside the list
        list.head = null;
      } else {
        list.head = list.head.next;
      }
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
