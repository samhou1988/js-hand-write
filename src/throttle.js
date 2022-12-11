function throttle(callback, delay = 300) {
  var timer = null;
  return function () {
    var self = this;
    if (!timer) {
      timer = setTimeout(function () {
        callback.apply(self, arguments);
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

