/* eslint-disable */

//const fail_all_tests = true;

tested_shrinkDiffs = 0;
failed_shrinkDiffs = 0;

_shrinkDiffs_28001();

total_fails += failed_shrinkDiffs;
total_checks += tested_shrinkDiffs;

if (show_random) {
  console.log('_shrinkDiffs failed tests 28000', failed_shrinkDiffs)
  console.log('_shrinkDiffs passed tests 28000', tested_shrinkDiffs)
}

function _shrinkDiffs_28001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '28001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    long_str = '1234345678901234567890';    // TEST TEST
  } else {
    long_str = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'  // REAL TEST
    + '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';
  }
  actual = type_czech._shrinkDiffs(long_str);
  expected = `1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890 <<<<<<...>>>>>> 12345678901234567890123456789012345678901234567890`; 


  if (actual !== expected) {
  console.log(error_id);
  console.log('  actual=', actual);
  console.log('expected=', expected);
  }
  no_console_mess = '';

                                            if (actual !== expected) {
                                              failed_shrinkDiffs ++;
                                            }
                                            tested_shrinkDiffs ++;




}


