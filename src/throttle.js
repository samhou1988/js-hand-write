function throttle(callback, delay = 300) {
  var timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      callback.apply(this, arguments);
    }, delay);
  }
}

