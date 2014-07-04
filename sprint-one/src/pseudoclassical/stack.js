var Stack = function() {
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
