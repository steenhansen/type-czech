//  node --trace-uncaught suite-node.js

require('./node_includes.js');

global.TEST_total_checks = 0;
global.TEST_total_fails = 0;
global.TEST_show_random = false;
global.TEST_number_generatives = 20;

require('./public-tests/linkUp_01000.js');
              require('./check-tests/check_interface_02000.js');
              require('./check-tests/check_interface_02900.js');
              require('./check-tests/check_empty_03000.js');
              require('./check-tests/check_empty_03800.js');
              require('./check-tests/check_empty_03900.js');


require('./check-tests/check_emptyEither_04000.js');
              require('./check-tests/check_type_05000.js');
              require('./check-tests/check_type_05800.js');
              require('./check-tests/check_type_05900.js');

require('./check-tests/check_typeExtra_06000.js');

        require('./check-tests/check_typeEither_07000.js');
        require('./check-tests/check_typeEither_07800.js');
        require('./check-tests/check_typeEither_07900.js');

require('./private-tests/_cycle_loops_08000.js');
require('./private-tests/_aTypeOf_09000.js');

require('./private-tests/_isCollection_10000.js');
require('./private-tests/_isEmpty_11000.js');
require('./private-tests/_missingKey_12000.js');
require('./private-tests/_parametersCheck_13000.js');
require('./private-tests/_mutatedVariables_14000.js');
require('./private-tests/_shapeArrayTypes_15000.js');
require('./private-tests/_shapeCollectionTypes_16000.js');
require('./private-tests/_shapeContainer_17000.js');
require('./private-tests/_shapeErrorMess_18000.js');
require('./private-tests/_refDiff_19000.js');

require('./private-tests/_shapePropertyType_20000.js');
require('./private-tests/_shapeScalar_21000.js');
require('./private-tests/_shapeVariable_22000.js');
require('./public-tests/typeIsA_23000.js');
require('./public-tests/typeProtos_24000.js');
require('./public-tests/typeIs_25000.js');
require('./private-tests/_fast_json_stable_stringify_26000.js');
require('./private-tests/_jsonStr_27000.js');
require('./private-tests/_shrinkDiffs_28000.js');
require('./private-tests/_toStr_29000.js');

require('./check-tests/check_emptyExtra_30000.js');
require('./private-tests/_eitherChecks_31000.js');

          require('./check-tests/variadic_checks_32000.js');
          require('./check-tests/check_variadicEmpty_32800.js');
          require('./check-tests/check_variadicType_32900.js');

require('./public-tests/typeCzech_90000.js');


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
require('../read-mes/_linkUp().md');
require('../read-mes/_mutateSnapshot().md');
require('../read-mes/_typeIsA().md');
require('../read-mes/_typeFinal().md');
require('../read-mes/_typeProtos().md');

require('./dynamic-generative/random-signatures.js');

console.log('total fails = ', global.TEST_total_fails);
console.log('total checks = ', global.TEST_total_checks);
