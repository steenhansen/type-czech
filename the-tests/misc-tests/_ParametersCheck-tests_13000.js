/* eslint-disable */

tested_ParametersCheck = 0;
failed_ParametersCheck = 0;

_ParametersCheck_13001(13001);

total_fails += failed_ParametersCheck;
console.log('_ParametersCheck failed tests', failed_ParametersCheck)

total_checks += tested_ParametersCheck;
console.log('_ParametersCheck passed tests', tested_ParametersCheck)

function _ParametersCheck_13001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '13001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function your_function(){};
  get_out_of_scope_err = _ => {
    function type_czech_function(){}
    try{
      var your_function = type_czech.check(your_function, type_czech_function);
    }catch(out_of_scope_exception){ 
      return out_of_scope_exception;
    }
  }
  actual_exception=get_out_of_scope_err();
  expected_exception ="TC@06 - The first parameter to TypeCzech.check(), target_proxy is not a function, but is instead -un-defined-";
  expect_and_actual = actualAndExpected(error_id, actual_exception, expected_exception);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_exception);
    console.log("**ACTUAL**", actual_exception);
    _throw( errorMessage(error_id, expect_and_actual, '3108734708932432') );
  }
  if (typeof failed_ParametersCheck !== 'undefined') {
    failed_ParametersCheck +=type_czech.failureTally();
    tested_ParametersCheck ++;
  }
}

