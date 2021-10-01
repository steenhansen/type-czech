/* eslint-disable */

tested_ParametersCheck = 0;
failed_ParametersCheck = 0;

_ParametersCheck_13001();

total_fails += failed_ParametersCheck;
total_checks += tested_ParametersCheck;

if (show_random) {
  console.log('_ParametersCheck failed tests 13000', failed_ParametersCheck)
  console.log('_ParametersCheck passed tests 13000', tested_ParametersCheck)
}

function _ParametersCheck_13001(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_ParametersCheck ++;
  }
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '13001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function your_function(){};
  get_out_of_scope_err = _ => {
    function type_czech_function(){}
    try{
      var your_function = type_czech.link(your_function, type_czech_function);
    }catch(out_of_scope_exception){ 
      return out_of_scope_exception;
    }
  }
  actual_exception=get_out_of_scope_err();
  expected_exception ="TC@06 - The first parameter to TypeCzech.link(), target_proxy is not a function, but is instead undefined";
  
  
  if (actual_exception !== expected_exception) {
    console.log(error_id);
    console.log('  actual=', actual_exception);
    console.log('expected=', expected_exception);
    }
    no_console_mess = '';
  
                                              if (actual_exception !== expected_exception) {
                                                failed_ParametersCheck ++;
                                              }
                                              tested_ParametersCheck ++;
  
 
 
}

