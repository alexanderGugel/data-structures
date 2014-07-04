var makeStack = function() {
  var newStack = {};

  newStack.storage = {};
  newStack.length = 0;

  extend(newStack, stackMethods);

  return newStack;

};

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to;
};

var stackMethods = {};

stackMethods.pop = function () {
  if (this.length > 0) {
    var result = this.storage[this.length - 1];
    this.length -= 1;
    return result;
  }
};

stackMethods.size = function () {
  return this.length;
};

stackMethods.push = function (val) {
  this.storage[this.length] = val;
  this.length += 1;
};
