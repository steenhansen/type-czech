/* eslint-disable */



tested_missingKey = 0;
failed_missingKey = 0;

_missingKey_12001();

TEST_total_fails += failed_missingKey;
TEST_total_checks += tested_missingKey;

if (TEST_show_random) {
  console.log('_ParametersCheck failed tests 12000', failed_missingKey)
  console.log('_missingKey passed tests 12000', tested_missingKey)
}

function _missingKey_12001(){
  var TYPE_CZECH_current_test_number = '12001';       
  var extra_keys = {g:"my-extra-key"};           
  var expect_error =`TE@216 -  The key 'g', which has a type of 'my-extra-key', is missing in the checked object`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        var actual_error = type_czech_test._missingKey(extra_keys);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_missingKey !=='undefined') failed_missingKey ++;
        }
        if (typeof tested_missingKey !=='undefined') tested_missingKey ++;
}