// function fibonacci(n) {
//   if (n <= 2) return 1;
//   return fibonacci(n - 2) + fibonacci(n - 1);
// }

function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = args.length + args.join('+')
    if (cache.has(key)) {
      return cache.get(key)
    }
    const result = func.apply(null, args);
    cache.set(key, result);
    return result;
  }
}

const fibonacci = memoize(function (n) {
  if (n <= 2) return 1;
  return fibonacci(n - 2) + fibonacci(n - 1);
})
console.log(fibonacci(10))