function debounce(callback, delay = 300) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        callback.apply(this, arguments);
        clearTimeout(timer);
      }, delay);
    }
  }
}

