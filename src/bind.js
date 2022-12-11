if (!Function.prototype.bind) {
  Object.defineProperty(Function.prototype, 'bind', {
    configurable: true,
    value: function bind() {
      var restArgs = Array.prototype.slice.call(arguments)
      var context = restArgs.shift();
      context.func = this;
      return function bound() {
        var result = context.func.apply(context, restArgs.concat(Array.prototype.slice.call(arguments)));
        delete context.func;
        return result;
      };
    },
    writable: true
  });
}

var me = {
  'name': 'sam',
  'age': 34
};

function callMe(city) {
  console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
}
var callBinded = callMe.bind(me, 'Beijing');
// Hi! my name is sam and my age is 34 and my city is Beijing and state is haidian
callBinded('haidian')