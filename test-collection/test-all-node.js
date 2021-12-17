//  node --trace-uncaught test-all-node.js

require('./node_includes.js');

const { TypeCzech } = require('../TypeCzech.js');




global.TEST_total_checks = 0;
global.TEST_total_fails = 0;
global.TEST_show_random = false;
global.TEST_number_generatives = 120;
global.generative_pass_count = 0;





               require('./public-tests/linkUp_01000.js');
       require('./check-tests/check_interface_02000.js');
       require('./check-tests/check_interface_02900.js');
      require('./check-tests/checkParam_empty_03000.js');
      require('./check-tests/checkParam_empty_03800.js');
      require('./check-tests/checkParam_empty_03900.js');
require('./check-tests/checkParam_emptyEither_04000.js');
       require('./check-tests/checkParam_type_05000.js');
       require('./check-tests/checkParam_type_05800.js');
       require('./check-tests/checkParam_type_05900.js');
  require('./check-tests/checkParam_typeExtra_06000.js');
 require('./check-tests/checkParam_typeEither_07000.js');
 require('./check-tests/checkParam_typeEither_07800.js');
 require('./check-tests/checkParam_typeEither_07900.js');
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
require('./public-tests/typeFinal_25000.js');
require('./private-tests/_fast_json_stable_stringify_26000.js');
require('./private-tests/_jsonStr_27000.js');
require('./private-tests/_shrinkDiffs_28000.js');
require('./private-tests/_toStr_29000.js');

require('./check-tests/checkParam_emptyExtra_30000.js');
      require('./private-tests/_eitherChecks_31000.js');
      require('./check-tests/variadic_checks_32000.js');
  require('./check-tests/checkArgs_emptyEach_32800.js');
   require('./check-tests/checkArgs_typeEach_32900.js');

          require('./check-tests/check_buildSnapshot_40000.js');
         require('./check-tests/check_mutateSnapshot_41000.js');
                 require('./public-tests/enableTests_42000.js');
                require('./public-tests/disableTests_43000.js');
                  require('./public-tests/countFails_44000.js');
                  require('./public-tests/countTally_45000.js');
    require('./check-tests/signature_checkParam_type_46000.js');
 require('./check-tests/signature_checkArgs_typeEach_47000.js');
require('./check-tests/signature_checkArgs_emptyEach_48000.js');
                 require('./check-tests/check_assert_49000.js');

  require('./public-tests/nested_checks_50000.js');
    require('./public-tests/class_check_51000.js');
  require('./public-tests/closure_check_52000.js');
     require('./public-tests/iife_check_53000.js');
require('./public-tests/classfree_check_54000.js');
require('./public-tests/prototype_check_55000.js');
     require('./public-tests/oloo_check_56000.js');
   require('./check-tests/scalar_arrays_57000.js');
 require('./check-tests/arr_arr_complex_58100.js');

                 require('./read-me-tests/type-signatures_61000.js');
                require('./read-me-tests/empty-signatures_62000.js');
       require('./read-me-tests/signature-checkParam_type_63000.js');
 require('./read-me-tests/signature-checkParam_typeEither_64000.js');
  require('./read-me-tests/signature-checkParam_typeExtra_65000.js');
    require('./read-me-tests/signature-checkAgs_emptyEach_66000.js');
     require('./read-me-tests/signature-checkAgs_typeEach_67000.js');
      require('./read-me-tests/signature-checkParam_empty_68000.js');
require('./read-me-tests/signature-checkParam_emptyEither_69000.js');

require('./read-me-tests/signature-checkParam_emptyExtra_70000.js');
                       require('./public-tests/typeCzech_71000.js');


                       require('./dynamic-generative/random-signatures.js');
                       
TEST_total_checks += generative_pass_count;

console.log('total fails = ', global.TEST_total_fails);
console.log('total checks = ', global.TEST_total_checks);

if (global.TEST_total_checks !== 2444 || global.TEST_total_fails !== 0) {
  console.log("Houston we have an error problem!")
} 