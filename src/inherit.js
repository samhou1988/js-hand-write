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

function inherit(Parent, Child) {
  let prototype = Object.create(Parent.prototype);
  Child.prototype = prototype
  Child.prototype.constructor = Child;
}

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

inherit(Person, Student);

var std = new Student("James", "Bond", "XYZ", 10);
console.log(std.getFullName()); // James Bond
console.log(std instanceof Student); // true
console.log(std instanceof Person); // true