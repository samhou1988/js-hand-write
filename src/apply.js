Object.defineProperty(Function.prototype, 'apply', {
  configurable: true,
  writable: true,
  value: function apply(context, args) {
    // store this
    context.func = this;
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
bar.apply(foo, ['black', '18']) // black 18 1