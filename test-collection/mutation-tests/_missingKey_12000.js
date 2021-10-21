/* eslint-disable */

//const fail_all_tests = true;

tested_missingKey = 0;
failed_missingKey = 0;

_missingKey_12001();

total_fails += failed_missingKey;
total_checks += tested_missingKey;

if (show_random) {
  console.log('_ParametersCheck failed tests 12000', failed_missingKey)
  console.log('_missingKey passed tests 12000', tested_missingKey)
}

function _missingKey_12001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '12001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    extra_keys = [12, 'asd', 'extra-1', 'extra-2'];                    // TEST TEST
  } else {
    extra_keys = {g:"my-extra-key"};         // REAL TEST
  }
  
  before_str = beforeCheck(extra_keys, '');
  actual = type_czech._missingKey(extra_keys);
  afterCheck(extra_keys, '', before_str, error_id);
  expected = `TE@216 -  The key 'g', which has a type of 'my-extra-key', is missing in the checked object`; 


  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_missingKey ++;
                                              }
                                              tested_missingKey ++;
  


}
