Object.defineProperty(Function.prototype, 'call', {
  configurable: true,
  writable: true,
  value: function call(context) {
    context.func = this;
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var result = context.func(...args);
    delete context.func;
    return result;
  }
});

var foo = {
  value: 1
}
function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value);
}
bar.call(foo, 'black', '18') // black 18 1