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

// Function.prototype.bind2 = function (context, ...args) {
//   if (typeof this !== 'function') {
//     throw new TypeError('Bind must be called on a function')
//   }

//   const executeBound = function (sourceFunc, boundFunc, context, callingContext, args) {
//     if (!(callingContext instanceof boundFunc)) {
//       // 如果调用方式不是new func的形式就直接调用sourceFunc，并且给到对应的参数即可
//       return sourceFunc.apply(context, args)
//     } else {
//       // 类似于执行new的几个过程
//       const self = Object.create(sourceFunc.prototype) // 处理new调用的形式
//       const result = sourceFunc.apply(self, args)
//       // 判断函数执行后的返回结果 非对象函数，则返回self
//       if (result && typeof result === 'object' || typeof result === 'function') {
//         return result
//       } else {
//         return self
//       }
//     }
//   }
//   const func = this

//   const bound = function (...innerArgs) {
//     return executeBound(func, bound, context, this, args.concat(innerArgs))
//   }

//   return bound
// }

// // 测试
// // 1. 普通调用
// const showName = function (sex, age) {
//   console.log(this, sex, age)
// }

// Function.prototype.bind2 = function (context) {
//   var self = this;
//   var args = Array.prototype.slice.call(arguments, 1);

//   var fNOP = function () { };

//   var fBound = function () {
//     var bindArgs = Array.prototype.slice.call(arguments);
//     return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
//   }

//   fNOP.prototype = this.prototype;
//   fBound.prototype = new fNOP();
//   return fBound;
// }