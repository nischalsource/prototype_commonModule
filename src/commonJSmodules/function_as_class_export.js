module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  }
}

/*

Var person = require('./Person.js');
var person1 = new person('James', 'Bond');
console.log(person1.fullName());

 */
