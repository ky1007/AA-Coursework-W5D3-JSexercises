Array.prototype.myEach = function(another_function) {
  for(let i = 0; i < this.length; i++) {
    another_function(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let new_arr = [];
  this.myEach((el) => {
    new_arr.push(callback(el));
  });
  return new_arr;
};

Array.prototype.myReduce = function(callback, initial_value) {
  let result = initial_value || this.shift;
  this.myEach(function(el) {
    result = callback(result, el);
  });

  return result;
};
