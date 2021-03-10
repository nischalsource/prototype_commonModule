import myCommonLibrary from './ES6modules/index.jsx';

// 2. anonymousFunctionExport
myCommonLibrary.anonymousFunctionExport('input');

// 2. directObjectExport
console.log(myCommonLibrary.directObjectExport.firstName + ' ' + myCommonLibrary.directObjectExport.lastName);

// 3. class Export
let person = new myCommonLibrary.classExport('3. ES6 Class ', 'Export');
console.log(person.fullName());

// 4. functionExport
myCommonLibrary.myNamedFunction('4. ES6 Function export');

// 5. literalExport
console.log(myCommonLibrary.mystring);
