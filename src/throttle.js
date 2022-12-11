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

