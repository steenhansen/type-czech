/* eslint-disable */


pass_count = 0;
fail_count = 0;


_missingKey_12001();


function _missingKey_12001(){
  var TYPE_CZECH_current_test_number = '12001';       
  var extra_keys = {g:"my-extra-key"};           
  var expect_error =`TE@216 -  Key 'g', which has a type of 'my-extra-key', is missing in the checked object`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var actual_error = type_czech_test._missingKey(extra_keys);
        if (Array.isArray(actual_error)) actual_error = actual_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (Array.isArray(expect_error)) expect_error = expect_error.reduce((accum, curr) => `${accum}\n${curr}`);
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof fail_count !=='undefined') fail_count ++;
        }
        if (typeof pass_count !=='undefined') pass_count ++;
}



if (fail_count>0) {
  the_problem = `private-tests/_missingKey_12000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;

