const _ = require('./type.js')

function getRegExp(reg) {
  let result = '';
  if (reg.ignoreCase) {
    result += 'i';
  }
  if (reg.global) {
    result += 'g';
  }

  if (reg.multiline) {
    result += 'm'
  }

  return result
}

function clone(parent, parents, children) {
  if (parent === null) {
    return null;
  }

  if (typeof parent !== 'object') {
    return parent;
  }

  var child;
  if (_.isArray(parent)) {
    child = []
  } else if (_.isRegExp(parent)) {
    child = new RegExp(parent.source, getRegExp(parent))
    if (parent.lastIndex) {
      child.lastIndex = parent.lastIndex;
    }
  } else if (_.isDate(parent)) {
    child = new Date(parent.getTime());
  } else {
    var proto = Object.getPrototypeOf(parent);
    child = Object.create(proto);
  }

  var index = parents.indexOf(parent)
  if (index > -1) {
    return children[index]
  }
  parents.push(parent);
  children.push(child);

  for (var prop in parent) {
    if (parent.hasOwnProperty(prop)) {
      child[prop] = clone(parent[prop], parents, children)
    }
  }
  return child;
}

function deepClone(source) {
  const parents = []
  const children = []

  return clone(source, parents, children);
}

// // test
// var origin = {
//   a: 1,
//   b: [2, 3, 4],
//   c: {
//     d: 'name'
//   }
// }
// var result = deepClone(origin)
// result.a = 'a'

// // { a: 1, b: [2, 3, 4], c: { d: 'name' } }
// console.log(origin);
// // { a: 'a', b: [2, 3, 4], c: { d: 'name' } }
// console.log(result);

// function Animal(name) {
//   this.name = name;
// }

// var animal = new Animal('tom');
// var origin = {
//   a: function () {
//     return 'a'
//   },
//   b: new RegExp(/\d/g),
//   c: animal
// }
// var result = JSON.parse(JSON.stringify(origin))
// result.c.name = 'sam'
// console.log(origin)
// console.log(result)

var origin = {
  a: 'name'
}

origin.b = origin

const result = deepClone(origin)
console.log(origin)
console.log(result.b.b.b.a)