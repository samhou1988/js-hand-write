Array.prototype.reduce = Array.prototype.reduce || function (func, initialValue) {
  let previousValue = initialValue;
  let i = 0;
  let len = this.length;
  if (initialValue === undefined) {
    previousValue = this[0]
    i = 1;
  }

  if (typeof func === 'function') {
    for (i; i < len; i++) {
      if (this.hasOwnProperty(i)) {
        previousValue = func(previousValue, this[i], i, this);
      }
    }
  }

  return previousValue;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr.reduce((prev, current) => prev + current);
console.log(sum);