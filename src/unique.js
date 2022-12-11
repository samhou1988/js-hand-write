// es5
function unique(arr) {
  var uniqueArr = [];
  arr.forEach(function (value) {
    if (uniqueArr.indexOf(value) === -1) {
      uniqueArr.push(value);
    }
  });
  return uniqueArr;
}

// es6
// function unique(arr) {
//   return [...new Set(arr)];
// }

const arr = [1, 2, 3, '1', 2, '3', 3]
// [1, 2, 3, '1', '3']
console.log(unique(arr))