var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newStack = Object.create(stackMethods);

  newStack._size = 0;
  newStack._storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.size = function () {
  return this._size;
};

stackMethods.push = function (val) {
  this._storage[this._size] = val;
  this._size += 1;
};

stackMethods.pop = function () {
  var result = this._storage[this._size - 1];

  delete this._storage[this._size -1];

  if (this._size > 0) {
    this._size -= 1;
  }

  return result;
};
