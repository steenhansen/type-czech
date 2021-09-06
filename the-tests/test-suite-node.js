/* eslint-disable no-console */

//  node --trace-uncaught test-suite-node.js

const {
  errorLabel, beforeCheck, afterCheck, actualAndExpected, _throw, oneLineString,
} = require('./string-funcs.js');

const { TypeCzech } = require('../TypeCzech.js');

global.TypeCzech = TypeCzech;
global.errorLabel = errorLabel;
global.beforeCheck = beforeCheck;
global.afterCheck = afterCheck;
global.actualAndExpected = actualAndExpected;
global._throw = _throw;
global.oneLineString = oneLineString;

global.total_checks = 0;
global.total_fails = 0;

require('./misc-tests/Check-tests_01000.js');
require('./object-tests/objectInterface-tests_02000.js');
require('./valueless-tests/Valueless-tests_03000.js');
require('./valueless-tests/ValuelessUnion-tests_04000.js');
require('./valid-tests/Valid-tests_05000.js');
require('./valid-tests/ValidExtras-tests_06000.js');
require('./valid-tests/ValidUnion-tests_07000.js');
require('./valid-tests/ValidUnionExtras-tests_08000.js');
require('./misc-tests/_aTypeOf-tests_09000.js');

require('./misc-tests/_isCollection-tests_10000.js');
require('./misc-tests/_isEmpty-tests_11000.js');
require('./misc-tests/_missingKey-tests_12000.js');
require('./misc-tests/_ParametersCheck-tests_13000.js');
require('./mutative-refs/_mutatedVariables-tests_14000.js');
require('./shape-tests/_shapeArrayTypes-tests_15000.js');
require('./shape-tests/_shapeCollectionTypes-tests_16000.js');
require('./shape-tests/_shapeContainer-tests_17000.js');
require('./shape-tests/_shapeErrorMess-tests_18000.js');
require('./mutative-refs/_refDiff-tests_19000.js');

require('./shape-tests/_shapePropertyType-tests_20000.js');
require('./shape-tests/_shapeScalar-tests_21000.js');
require('./shape-tests/_shapeVariable-tests_22000.js');
require('./object-tests/objectIsA-tests_23000.js');
require('./object-tests/objectPrototypes-tests_24000.js');

require('./object-tests/objectType-tests_25000.js');
require('./type-czech-tests/TypeCzech-tests_26000.js');
require('./type-tests/variadic-tests_27000.js');
require('./mutative-refs/_shrinkDiffs-tests_28000.js');

console.log('*************************************');

console.log('total fails = ', global.total_fails);
console.log('total checks = ', global.total_checks);
