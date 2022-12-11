const { create } = require('./create.js')
// // 组合继承
// // 组合继承结合了原型链和盗用构造函数，将两者的优点集中了起来。
// // 基本的思路是使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
// // 这样既可以把方法定义在原型上以实现重用，又可以让每个实例都有自己的属性。
// function Person(firstName, lastName) {
//   this.FirstName = firstName
//   this.LastName = lastName
// }

// Person.prototype.getFullName = function () {
//   return this.FirstName + " " + this.LastName;
// }

// function Student(firstName, lastName, schoolName, grade) {
//   Person.call(this, firstName, lastName);

//   this.SchoolName = schoolName
//   this.Grade = grade || 0;
// }
// Student.prototype = new Person();
// Student.prototype.constructor = Student;

// 寄生式组合继承
function inherit(child, parent) {
  child.prototype = create(parent.prototype)
  child.prototype.constructor = child;
}


// demo
function Person(firstName, lastName) {
  this.FirstName = firstName
  this.LastName = lastName
}

Person.prototype.getFullName = function () {
  return this.FirstName + " " + this.LastName;
}

function Student(firstName, lastName, schoolName, grade) {
  Person.call(this, firstName, lastName);

  this.SchoolName = schoolName
  this.Grade = grade || 0;
}

inherit(Student, Person);

var std = new Student("James", "Bond", "XYZ", 10);
console.log(std.getFullName()); // James Bond
console.log(std instanceof Student); // true
console.log(std instanceof Person); // true

module.exports.inherit = inherit;