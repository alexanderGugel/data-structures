var Queue = function() {
  this.length = 0;
  this.storage = {};
};

Queue.prototype.size = function () {
  return this.length;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[0];
  delete this.storage[0];
  for (var i = 0, l = this.length; i < l; i += 1) {
    this.storage[i] = this.storage[i + 1];
  }
  if (this.length > 0) {
    this.length -= 1;
  }

  return result;
};

Queue.prototype.enqueue = function (val) {
  this.storage[this.length] = val;
  this.length += 1;
};
