var myFunctions = require('./commonJSmodules/index.js');

// 1. anonymousFunctionExport
myFunctions.anonymousFunctionExport('Export');

// 2. directObjectExport
console.log(myFunctions.directObjectExport.firstName + ' ' + myFunctions.directObjectExport.lastName);

// 3. functionAsClassExport
var person = new myFunctions.functionAsClassExport('3. CJS Function as a Class ', 'Export');
console.log(person.fullName());

// 4. functionExport
myFunctions.functionExport.log('4. CJS Function export');

// 5. literalExport
console.log(myFunctions.literalExport);

// 6. objectExport
console.log(myFunctions.objectExport.SimpleMessage);
