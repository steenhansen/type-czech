/* eslint-disable */

passed_ParametersCheck = 0;
failed_ParametersCheck = 0;

_ParametersCheck_13001(13001);

total_fails += failed_ParametersCheck;
console.log('_ParametersCheck failed tests', failed_ParametersCheck)

total_checks += passed_ParametersCheck;
console.log('_ParametersCheck passed tests', passed_ParametersCheck)

function _ParametersCheck_13001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  function your_function(){};
  const get_out_of_scope_err = _ => {
    function type_czech_function(){}
    try{
      var your_function = type_czech.check(your_function, type_czech_function);
    }catch(out_of_scope_exception){ 
      return out_of_scope_exception;
    }
  }
  const actual_exception=get_out_of_scope_err();
  const expected_exception ="TC@06 - TypeCzech.check() target_proxy is not a function -un-defined-";
  const expect_and_actual = actualAndExpected(error_id, actual_exception, expected_exception);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, 'asdflh') );
  failed_ParametersCheck +=type_czech.failureTally();
  passed_ParametersCheck ++;
}

