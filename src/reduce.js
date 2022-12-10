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
      if (Object.prototype.hasOwnProperty.call(this, i)) {
        previousValue = func(previousValue, this[i], i, this);
      }
    }
  }

  return previousValue;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr.reduce((prev, current) => prev + current);
// 55
console.log(sum);
const sum2 = arr.reduce((prev, current) => prev + current, 100);
// 155
console.log(sum2);
