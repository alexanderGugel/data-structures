var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket) {
    if (Array.isArray(bucket[0])) {
      // Multiple key-val-pairs already inside bucket
      var index = -1;
      for (var i = 0; i < bucket.length; i += 1) {
        if (bucket[i][0] === k) {
          index = i;
          break;
        }
      }
      if (index === -1) {
        // k-v-pair does not exist inside bucket
        bucket.push([k, v]);
      } else {
        bucket[index] = [k, v];
        // this._storage(i, bucket);
        // k-v-pair does exist inside bucket
        // overwrite
      }
    } else {
      // Exactly ONE k-v-pair inside bucket
      if (bucket[0] === k) {
        this._storage.set(i, [k, v]);
      } else {
        // Different key-val-pair
        bucket = [bucket];
        bucket.push([k, v]);
        this._storage.set(i, bucket);
      }
    }

    // if (previous[0] === k) {
    //   this._storage.set(i, [k, v]);
    // } else {
    //   // Collision
    //   // Something already inside the bucket
    // }

  } else {
    // Nothing inside bucket
    this._storage.set(i, [k, v]);
  }
};

HashTable.prototype._double = function() {
  this._limit = this._limit * 2;
  var newStorage = makeLimitedArray(this._limit);

  this._storage.each(function (keyValPair, i) {
    var newIndex = getIndexBelowMaxForKey(keyValPair[0], this._limit);
    newStorage.set(newIndex, keyValPair);
  });
  this._storage = newStorage;

  // i = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(i, [k, v]);

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(i);

  if (bucket) {
    if (Array.isArray(bucket[0])) {
      for (var i = 0; i < bucket.length; i += 1) {
        if (bucket[i][0] === k) {
          return bucket[i][1];
        }
      }
      return null;
    } else {
      return bucket[1];
    }
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
