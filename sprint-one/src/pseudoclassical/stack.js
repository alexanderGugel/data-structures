var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Stack.prototype.size = function () {
  return this.length;
};

Stack.prototype.push = function (val) {
  this.storage[this.length] = val;
  this.length += 1;
};

Stack.prototype.pop = function () {
  if (this.length > 0) {
    var result = this.storage[this.length - 1];
    delete this.storage[this.length];
    this.length -= 1;
    return result;
  }
};
