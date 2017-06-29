function range(start, end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1, arr.length + 1));
}

function exp(b, n) {
  if (n === 0) {
    return 1;
  }
  b * exp(b, n-1);
}

function exp2(b, n) {
  if (n === 0) { return 1; }
  if (n === 1) { return b; }

  if (n % 2 === 0) {
    return exp2(b, n / 2) ** 2;
  } else {
    return b * (exp2(b, (n - 1) / 2) ** 2 )
  }
}

function fibonacci(n) {
  if (n <= 2) { return [1, 1].slice(0, n) }
  let prev = fibonacci(n - 1);
  return prev.concat(fibonacci(n - 1)[prev.length - 1] + fibonacci(n - 1)[prev.length - 2]);
}

function bsearch(arr, target) {
  let mid = arr.length/2;
  let left = arr.slice(0, mid+1);
  let right = arr.slice(mid+2, arr.length + 1);

  if (arr.length < 2) {
    if (arr[mid] === target) {
      return mid;
    } else {
      return -1;
    }
  }
  if (arr[mid] === target) { return mid };
  if (arr[mid] > target) { return bsearch(left) };
  if (arr[mid] < target) { return mid + 1 + bsearch(right) };
}

function mergesort(arr) {
  if (arr.length < 2) { return arr; }
  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergesort(left), mergesort(right));
}

// function merg

function merge(left, right) {
  let merged = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  //concat does not modify array
  return merged.concat(left, right);
}

function subsets(arr) {
  if (arr.length < 1) { return [arr]; }
  let prev = subsets(arr.slice(1));
  let subs = prev.map((subarr) => {
    return subarr.concat(arr[0]);
  })
  return prev.concat(subs);
}
