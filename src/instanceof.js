// 遍历左边变量的原型链，直到找到右边变量的 prototype，如果没有找到，返回 false
function instanceOf(L, R) {
  let proto = L.__proto__;

  while (true) {
    if (proto === null) {
      return false;
    }

    if (proto === R.prototype) {
      return true;
    }

    proto = proto.__proto__;
  }
}

// test
const arr = [1, 2]
// false
console.log(instanceOf(arr, Function))
// true
console.log(instanceOf(arr, Array))