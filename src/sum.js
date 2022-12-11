function sum(...args) {
  const add = (...innerArgs) => {
    args = args.concat(innerArgs);

    return add;
  }

  add.valueOf = () => args.reduce((acc, curr) => acc + curr)
  return add;
}

console.log(sum(1, 2, 3).valueOf()) // 6
console.log(sum(2, 3)(2).valueOf()) // 7
console.log(sum(1)(2)(3)(4)(5)(6).valueOf()) // 10
console.log(sum(2)(4, 1)(2).valueOf()) // 9
