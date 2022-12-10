function memoize(func) {
  const cache = new Map();

  return function (...args) {
    const key = args.length + args.join('+')
    if (cache.has(key)) {
      return cache.get(key)
    }
    const res = func.apply(this, args)
    cache.set(key, res)
    return res;
  }
};


function factorial(n) {
  return (n <= 1) ? 1 : n * factorial(n - 1);
}

const memoizeFactorial = memoize(factorial);

function fibonacci1(n) {
  return (n <= 2) ? 1 : fibonacci1(n - 2) + fibonacci1(n - 1)
}

const fibonacci = memoize(function (n) {
  return (n <= 2) ? 1 : fibonacci(n - 2) + fibonacci(n - 1)
});

console.time('fibonacci')
console.log(fibonacci1(40))
console.timeEnd('fibonacci')
console.time('memoizeFibonacci')
console.log(fibonacci(40))
console.timeEnd('memoizeFibonacci')