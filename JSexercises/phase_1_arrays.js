Array.prototype.uniq = function() {
  let result_arr = [];

  this.forEach((el) => {
    if (!result_arr.includes(el)) {
      result_arr.push(el);
    }
  });
  return result_arr;
};

Array.prototype.two_sum = function() {
  let result_arr = [];

  for(let i = 0; i < this.length - 1; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result_arr.push([i, j]);
      }
    }
  }

  return result_arr;
};

Array.prototype.transpose = function() {
  let transposed = new Array(this.length);
  for (let len = 0; len < this.length; len++) {
    transposed[len] = new Array(this[len].length);
  }

  for(let i = 0; i < this.length; i++) {
    for(let j = 0; j < this[i].length; j++) {
      transposed[j].push(this[i][j]);
    }
  }
  return transposed;
};
