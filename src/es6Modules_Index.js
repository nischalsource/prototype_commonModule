import {anonymousFunctionExport} from './ES6modules/index.js';
import {directObjectExport} from './ES6modules/index.js';
import {classExport} from './ES6modules/index.js';
// Import {myNamedFunction} from './ES6modules/index.js';
// import {mystring} from './ES6modules/index.js';

import * as myCommonLibrary from './ES6modules/index.js';

// 1. anonymousFunctionExport
anonymousFunctionExport('Export');

// 2. directObjectExport
console.log(directObjectExport.firstName + ' ' + directObjectExport.lastName);

// 3. classExport
let person = new classExport('3. ES6 Class ', 'Export');
console.log(person.fullName());

// 4. functionExport
myCommonLibrary.myNamedFunction('4. Function export');

// 5. literalExport
console.log(myCommonLibrary.mystring);
