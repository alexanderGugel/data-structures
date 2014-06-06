var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var previous = this._storage.get(i);

  if (previous) {
    if (previous[0] === k) {
      this._storage.set(i, [k, v]);
    } else {
      this._limit = this._limit * 2;
      var newStorage = makeLimitedArray(this._limit);

      this._storage.each(function (keyValPair, i) {
        var newIndex = getIndexBelowMaxForKey(keyValPair[0], this._limit);
        newStorage.set(newIndex, keyValPair);
      });

      this._storage = newStorage;
      i = getIndexBelowMaxForKey(k, this._limit);
      this._storage.set(i, [k, v]);
    }
  } else {
    this._storage.set(i, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(i)) {
    return this._storage.get(i)[1];
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
