// es5
function EventEmitter() {
  this.events = {}
}

EventEmitter.prototype.on = function (event, callback) {
  if (this.events[event]) {
    this.events[event].push(callback);
  } else {
    this.events[event] = [callback];
  }
}

EventEmitter.prototype.off = function (event) {
  if (this.events[event]) {
    this.events[event] = [];
  }
}

EventEmitter.prototype.emit = function () {
  var args = Array.prototype.slice.call(arguments)
  var event = args.shift();
  if (this.events[event]) {
    this.events[event].forEach(function (callback) {
      callback.apply(null, args)
    })
  }
}

EventEmitter.prototype.once = function (event, callback) {
  const self = this
  this.on(event, function () {
    var args = Array.prototype.slice.call(arguments)
    callback.apply(null, args);
    self.off(event);
  })
}

// es6
// class EventEmitter {
//   constructor() {
//     this.events = {}
//   }

//   on(event, callback) {
//     if (this.events[event]) {
//       this.events[event].push(callback);
//     } else {
//       this.events[event] = [callback];
//     }
//   }

//   off(event) {
//     if (this.events[event]) {
//       this.events[event] = [];
//     }
//   }

//   emit(event, ...args) {
//     if (this.events[event]) {
//       this.events[event].forEach(function (callback) {
//         callback.apply(event, args)
//       })
//     }
//   }

//   once(event, callback) {
//     this.on(event, (...args) => {
//       callback.apply(null, args);
//       this.off(event);
//     })
//   }
// }

const emitter = new EventEmitter();

emitter.once('data', function (data1, data2) {
  console.log(data1, data2);
})
emitter.emit('data', 'data111', 'data222')