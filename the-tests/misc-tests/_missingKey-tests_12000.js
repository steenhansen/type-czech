/* eslint-disable */

tested_missingKey = 0;

failed_missingKey = 0;

_missingKey_12001(12001);

total_fails += failed_missingKey;
console.log('_missingKey failed tests', failed_missingKey)

total_checks += tested_missingKey;
console.log('_missingKey passed tests', tested_missingKey)

function _missingKey_12001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '12001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  extra_keys = {g:"my-extra-key"};   
  before_str = beforeCheck(extra_keys, '');
  actual = type_czech._missingKey(extra_keys);
  afterCheck(extra_keys, '', before_str, error_id);
  expected = `TC@46 -  The key 'g', which has a type of 'my-extra-key', is missing in the checked object`; 
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  }
  if (typeof failed_missingKey !== 'undefined') {
    failed_missingKey +=type_czech.failureTally();
    tested_missingKey ++;
  }
}
