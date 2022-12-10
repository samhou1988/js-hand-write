if (!Array.prototype.flatMap) {
  Object.defineProperty(Array.prototype, 'flatMap', {
    configurable: true,
    value: function flatMap(callback) {
      return Array.prototype.map.call(this, callback).flat();
    },
    writable: true
  });
}

const res = [-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x))
console.log(res)