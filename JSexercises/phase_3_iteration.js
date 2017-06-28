Array.prototype.bubblesort = function() {
  let sorted = false;
  while(sorted === false) {
    sorted = true;
    for(let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        let el1 = this[i];
        let el2 = this[i+1];
        this[i] = el2;
        this[i+1] = el1;
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let subs = [];

  for(let size = 1; size <= this.length; size++) {
    for(let i = 0; i <= this.length - size; i++) {
      subs.push(this.slice(i, i + size));
    }
  }

  return subs;
};
