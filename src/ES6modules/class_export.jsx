'use strict';

export default class classExport {
	constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

// Console.log(functionAsClassExport('3. Function as a Class ', 'Export'));
