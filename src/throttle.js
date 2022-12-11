function throttle(callback, delay = 300) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback.apply(this, args);
        clearTimeout(timer);
      }, delay);
    }
  }
}

// // delta
// const throttle = function (func, delay) {
//   let startTime = Date.now()

//   return function (...args) {
//     let lastTime = Date.now()

//     if (lastTime - startTime > delay) {
//       func.apply(this, args)
//       startTime = Date.now()
//     }
//   }
// }

