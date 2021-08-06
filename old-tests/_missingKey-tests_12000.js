/* eslint-disable */

passed_missingKey = 0;

failed_missingKey = 0;

_missingKey_12001(12001);

total_checks += failed_missingKey;
console.log('_missingKey failed tests', failed_missingKey)

total_checks += passed_missingKey;
console.log('_missingKey passed tests', passed_missingKey)

function _missingKey_12001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  const extra_keys = {g:"my-extra-key"};   
  const before_str = beforeCheck(extra_keys, '');
  const actual = type_czech._missingKey(extra_keys);
  afterCheck(extra_keys, '', before_str, error_id);
  const expected = `TC@46 -  The key 'g', which has a type of 'my-extra-key', is missing in the checked object`; 
  if (actual!==expected) _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  failed_missingKey +=type_czech.failureTally();
  passed_missingKey ++;
}
