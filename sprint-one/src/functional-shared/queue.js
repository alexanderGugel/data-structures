var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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

