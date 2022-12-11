const curry = (func, ...args) => {

  return function (...innerArgs) {
    innerArgs = args.concat(innerArgs)
    // 参数未搜集足的话，继续递归搜集
    if (innerArgs.length < func.length) {
      return curry.call(this, func, ...innerArgs)
    } else {
      // 否则拿着搜集的参数调用func
      func.apply(this, innerArgs)
    }
  }
}
// 测试
const add = curry((num1, num2, num3) => {
  console.log(num1, num2, num3, num1 + num2 + num3)
})

add(1)(2)(3) // 1 2 3 6
add(1, 2)(3) // 1 2 3 6
add(1, 2, 3) // 1 2 3 6
add(1)(2, 3) // 1 2 3 6