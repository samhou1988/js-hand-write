Array.prototype.map = function (func, context) {
  const arr = []
  if (typeof func === 'function') {
    for (let i = 0, len = this.length; i < len; i++) {
      if (Object.prototype.hasOwnProperty.call(this, i)) {
        arr.push(func.call(context, this[i], i, this));
      }
    }
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arr1 = arr.map(function (val) {
  return val * 2
})
console.log(arr1)