var HashTable = function(){
  this._size = 0;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._doubleWhen = 0.75;
  this._halveWhen = 0.25;
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
  } else {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        // Override
        bucket[i][1] = v;
        return;
      }
    }
  }

  this._size++;
  bucket.push([k, v]);

  this._storage.set(index, bucket);
  if (this._size >= (this._limit * this._doubleWhen)) {
    this._resize(2);
  }
};

HashTable.prototype._resize = function(factor) {
  this._limit = this._limit * factor;
  var old = this._storage;
  this._storage = makeLimitedArray(this._limit);
  this._size = 0;

  old.each(function (bucket) {
    if (bucket) {
      for (var i = 0; i < bucket.length; i++) {
        // var newIndex = getIndexBelowMaxForKey(bucket[i][0], this._limit);
        this.insert(bucket[i][0], bucket[i][1]);
      }
    }
  }.bind(this));
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    for (var i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // debugger;

  if (bucket) {
    for (var i = 0; i < bucket.length; i += 1) {
      if (bucket[i][0] === k) {
        this._size--;
        bucket.splice(i, 1);
        if (this._size < (this._limit * this._halveWhen)) {
          this._resize(1/2);
        }
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
