Array.prototype.filter = Array.prototype.filter || function (func, context) {
  var arr = []
  if (typeof func === 'function') {
    for (var i = 0, len = this.length; i < len; i++) {
      if (Object.prototype.hasOwnProperty.call(this, i)) {
        if (func.call(context, this[i], i, this)) {
          arr.push(this[i])
        };
      }
    }
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr1 = arr.filter(val => val > 5);
// [6, 7, 8, 9]
console.log(arr1)