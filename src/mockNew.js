function mockNew(Constructor, ...args) {
  var obj = {};
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, args);

  // ret || obj 这里这么写考虑了构造函数显示返回 null 的情况
  return typeof ret === 'object' ? ret || obj : obj;
}

function Person(name, age) {
  this.name = name
  this.age = age
}
let p = mockNew(Person, '布兰', 12)
console.log(p)  // { name: '布兰', age: 12 }

let p1 = new Person('布兰', 12)
console.log(p1)  // { name: '布兰', age: 12 }
