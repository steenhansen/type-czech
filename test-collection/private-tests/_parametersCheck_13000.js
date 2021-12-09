/* eslint-disable */

tested_ParametersCheck = 0;
failed_ParametersCheck = 0;

_ParametersCheck_13001();

TEST_total_fails += failed_ParametersCheck;
TEST_total_checks += tested_ParametersCheck;

if (TEST_show_random) {
  console.log('_ParametersCheck failed tests 13000', failed_ParametersCheck)
  console.log('_ParametersCheck passed tests 13000', tested_ParametersCheck)
}

///////////////////////////////////////////////////////////////////////

function _ParametersCheck_13001(){
  var TYPE_CZECH_current_test_number = '13001';    
  
  function your_function(){};
  get_out_of_scope_err = _ => {
    function type_czech_function(){}
    try{
      var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
      var your_function = type_czech_test.linkUp(your_function, type_czech_function);
    }catch(out_of_scope_exception){ 
      return out_of_scope_exception;
    }
  }
  expect_error ="EX@105 - 1st param to linkUp(), target_proxy is not a function, but is instead undefined";
        var actual_error;
        try {
          actual_error=get_out_of_scope_err();
        } catch (e) { }
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number);
          console.log('actual =', actual_error);
          console.log('expect =', expect_error);
          if (typeof failed_ParametersCheck !=='undefined') failed_ParametersCheck ++;
        }
        if (typeof tested_ParametersCheck !=='undefined') tested_ParametersCheck ++;
}