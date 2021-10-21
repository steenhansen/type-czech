/* eslint-disable */

tested_eitherChecks = 0;

failed_eitherChecks = 0;

_eitherChecks_31001();

total_fails += failed_eitherChecks;
total_checks += tested_eitherChecks;

if (show_random) {
  console.log('check_type failed tests 05000', failed_eitherChecks);
  console.log('check_type passed tests 05000', tested_eitherChecks);
}

function _eitherChecks_31001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    check_object =  [1, [2, 3]];                   // TEST TEST
  } else {
    check_object =  [1, [2]];          // REAL TEST
  }
  TYPE_CZECH_current_test_number = '31001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  actual_array = type_czech._eitherChecks(check_object, 'fail-97');
  expected_array ='UE@701 - TypeCzech.fail-97()  needs at least 2 choices for a union, not 1 of [2]';
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(error_id);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_eitherChecks ++;
                      }
                      tested_eitherChecks ++;
}
