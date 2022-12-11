!(function (_) {
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(type => {
    _[`is${type}`] = (data) => {
      return Object.prototype.toString.call(data) === "[object " + type + "]";
    }
  })
})(_ = {});

// console.log(_.isBoolean(true))
// console.log(_.isNumber(`1`))
// console.log(_.isRegExp(/test/igm))
// console.log(_.isDate(new Date('2022-02-31')))

module.exports = _;