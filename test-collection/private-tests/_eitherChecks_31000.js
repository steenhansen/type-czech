/* eslint-disable */

tested_eitherChecks = 0;

failed_eitherChecks = 0;

_eitherChecks_31001();

TEST_total_fails += failed_eitherChecks;
TEST_total_checks += tested_eitherChecks;

if (TEST_show_random) {
  console.log('checkParam_type failed tests 05000', failed_eitherChecks);
  console.log('checkParam_type passed tests 05000', tested_eitherChecks);
}

function _eitherChecks_31001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  [1, [2]];  
  TYPE_CZECH_current_test_number = '31001';
  actual_array = type_czech._eitherChecks(check_object, 'fail-97');
  expected_array ='UE@701 - fail-97()  needs at least 2 choices for an Either, not 1 of [2]';
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        failed_eitherChecks ++;
                      }
                      tested_eitherChecks ++;
}
