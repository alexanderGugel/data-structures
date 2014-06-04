var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);

  newQueue._size = 0;
  newQueue._storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function () {
  return this._size;
};

queueMethods.enqueue = function (val) {
  this._storage[this._size] = val;
  this._size += 1;
};

queueMethods.dequeue = function () {
  var result = this._storage[0];

  for (var i = 0, l = this._size; i < l; i += 1) {
    this._storage[i] = this._storage[i + 1];
  }

  if (this._size > 0) {
    this._size -= 1;
  }

  return result;
};

