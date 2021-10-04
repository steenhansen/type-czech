/* eslint-disable no-console */

//  node --trace-uncaught suite-node.js

// global.fail_all_tests = true;

const { TypeCzech } = require('../TypeCzech.js');

const {
  errorLabel, beforeCheck, afterCheck, testError,
  oneLineString, errorMessage, arrayErrorToString,
} = require('./mutation-tests/string-funcs.js');

const { getRandomInt } = require('./dynamic-generative/getRandomInt.js');

const { makeTree } = require('./dynamic-generative/make-tree.js');

const { changeTree } = require('./dynamic-generative/change-tree.js');

global.getRandomInt = getRandomInt;
global.makeTree = makeTree;
global.changeTree = changeTree;

global.TypeCzech = TypeCzech;
global.errorLabel = errorLabel;
global.beforeCheck = beforeCheck;
global.afterCheck = afterCheck;
global.testError = testError;
global.oneLineString = oneLineString;
global.errorMessage = errorMessage;
global.arrayErrorToString = arrayErrorToString;

global.total_checks = 0;
global.total_fails = 0;
global.show_random = false;

require('./mutation-tests/link_01000.js');
require('./mutation-tests/check_interface_02000.js');
require('./mutation-tests/check_empty_03000.js');
require('./mutation-tests/check_emptyEither_04000.js');
require('./mutation-tests/check_type_05000.js');
require('./mutation-tests/check_typeExtra_06000.js');
require('./mutation-tests/check_typeEither_07000.js');
require('./mutation-tests/_cycle_08000.js');
require('./mutation-tests/_aTypeOf_09000.js');

require('./mutation-tests/_isCollection_10000.js');
require('./mutation-tests/_isEmpty_11000.js');
require('./mutation-tests/_missingKey_12000.js');
require('./mutation-tests/_parametersCheck_13000.js');
require('./mutation-tests/_mutatedVariables_14000.js');
require('./mutation-tests/_shapeArrayTypes_15000.js');
require('./mutation-tests/_shapeCollectionTypes_16000.js');
require('./mutation-tests/_shapeContainer_17000.js');
require('./mutation-tests/_shapeErrorMess_18000.js');
require('./mutation-tests/_refDiff_19000.js');

require('./mutation-tests/_shapePropertyType_20000.js');
require('./mutation-tests/_shapeScalar_21000.js');
require('./mutation-tests/_shapeVariable_22000.js');
require('./mutation-tests/typeIsA_23000.js');
require('./mutation-tests/typeProtos_24000.js');
require('./mutation-tests/typeIs_25000.js');

require('./mutation-tests/_fast_json_stable_stringify_26000.js');
require('./mutation-tests/_jsonStr_27000.js');

require('./mutation-tests/_shrinkDiffs_28000.js');
require('./mutation-tests/_toStr_29000.js');

require('./mutation-tests/check_emptyExtra_30000.js');
require('./mutation-tests/_eitherChecks_31000.js');

require('./library-tests/typeCzech_90000.js');
require('./library-tests/variadic_91000.js');

require('../read-mes/_check_empty().md');
require('../read-mes/_check_emptyEither().md');
require('../read-mes/_check_emptyExtra().md');

require('../read-mes/_check_interface().md');

require('../read-mes/_check_mutated().md');

require('../read-mes/_check_type().md');
require('../read-mes/_check_typeEither().md');
require('../read-mes/_check_typeExtra().md');

require('../read-mes/_check_variadicType().md');
require('../read-mes/_check_variadicEmpty().md');

require('../read-mes/_countBegin().md');
require('../read-mes/_countEnd().md');
require('../read-mes/_countFails().md');
require('../read-mes/_countTally().md');

require('../read-mes/_link().md');
require('../read-mes/_mutateSnapshot().md');

require('../read-mes/_typeIsA().md');
require('../read-mes/_typeIs().md');
require('../read-mes/_typeProtos().md');

require('./dynamic-generative/random-signatures.js');

console.log('total fails = ', global.total_fails);
console.log('total checks = ', global.total_checks);
