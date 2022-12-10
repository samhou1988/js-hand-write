if (!Array.prototype.flat) {
  Object.defineProperty(Array.prototype, 'flat', {
    configurable: true,
    value: function flat() {
      var depth = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
      return depth ? Array.prototype.reduce.call(this, function (acc, cur) {
        if (Array.isArray(cur)) {
          acc.push.apply(acc, flat.call(cur, depth - 1));
        } else {
          acc.push(cur);
        }

        return acc;
      }, []) : Array.prototype.slice.call(this, 0);
    },
    writable: true
  });
}
const arr = [1, [2, [3, [4]]]];
const arr0 = arr.flat(-1)
// [1, 2, [3, [4]]]
console.log(arr0)

const arr1 = arr.flat(1)
// [1, 2, 3, [4]]
console.log(arr1);

const arr2 = arr.flat(2);
// [1, 2, 3, 4]
console.log(arr2);

const arr3 = arr.flat(3);
// [1, 2, 3, 4]
console.log(arr3);

const arr4 = arr.flat(4);
// [1, 2, 3, 4]
console.log(arr4);