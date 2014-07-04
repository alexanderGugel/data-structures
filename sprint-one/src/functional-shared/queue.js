var makeQueue = function(){
  var newQueue = {};

  newQueue._storage = {};
  newQueue._size = 0;

  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {
  size: function () {
    return this._size;
  },

  enqueue: function (val) {
    this._storage[this._size] = val;
    this._size += 1;
  },

  dequeue: function () {
    var result = this._storage['0'];

    for (var i = 0, l = this._size; i < l; i += 1) {
      this._storage[i] = this._storage[i + 1];
    }

    if (this._size > 0) {
      this._size -= 1;
    }

    return result;
  }
};
