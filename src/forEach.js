Array.prototype.forEach = Array.prototype.forEach || function (func, context) {
  console.log(func, context)
  for (let i = 0, len = this.length; i < len; i++) {
    if (typeof func === 'function' && Object.prototype.hasOwnProperty.call(this, i)) {
      func.call(context, this[i], i, this);
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.forEach(function (val) {
  console.log(val)
})