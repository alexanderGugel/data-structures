var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length += 1;
  };

  someInstance.dequeue = function(){
    var result = storage[0];

    for (var i = 0, l = length; i < l; i += 1) {
      storage[i] = storage[i+1];
    }

    length > 0 && length--;

    return result;
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
