/* eslint-disable */

tested_check_emptyEither = 0;

failed_check_emptyEither = 0;

check_emptyEither_04001();


total_fails += failed_check_emptyEither;
total_checks += tested_check_emptyEither;
if (show_random) {
  console.log('check_emptyEither failed tests 04000', failed_check_emptyEither)
  console.log('check_emptyEither passed tests 04000', tested_check_emptyEither)
}

function check_emptyEither_04001(){
  TYPE_CZECH_current_test_number = '04001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {x:12,       y:{z:"str2"} } ;
  type_a       = {a:"EMPTY-ERROR",  b:{c:"EMPTY-OK"}};
  type_b       = {x:"EMPTY-OK", y:{z:"EMPTY-ERROR"}};
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_type_shape = [];                   // TEST TEST
  } else {
    check_type_shape = [type_a, type_b];           // REAL TEST
  }
  
  before_str = beforeCheck(check_object, check_type_shape);
  actual_array = type_czech.check_emptyEither(check_object, check_type_shape);
  afterCheck(check_object, check_type_shape, before_str, error_id);
  expected_array = ``;
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_check_emptyEither ++;
                      }
                      tested_check_emptyEither ++;



}






