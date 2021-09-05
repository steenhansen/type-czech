/* eslint-disable */

passed_check = 0;

failed_check = 0;

check_01001();
check_01002();
check_01003();
check_01004();

 total_fails += failed_check;
 console.log('check failed tests', failed_check)

total_checks += passed_check;
console.log('check passed tests', passed_check)

function check_01001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  function your_function(){}
  TYPE_CZECH_current_test_number = '01001';
    
  error_id = errorLabel(TYPE_CZECH_current_test_number);
    
  get_out_of_scope_err = _ => {
    function check_function(){}
    let actual_e;
    try{
     var your_function = type_czech.check(your_function, check_function);
    }catch(e){ 
      actual_e = e;
    }
    return actual_e;
  }
  actual=get_out_of_scope_err();
  expected = 'TC@06 - The first parameter to TypeCzech.check(), target_proxy is not a function, but is instead -un-defined-'
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  }
  if (typeof failed_check !== 'undefined') {
    failed_check +=type_czech.failureTally();
    passed_check ++;
  }
}

function check_01002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '01002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function check_function(){}
  function your_function(){}
  let actual;
  try{
    your_function = type_czech.check(your_function, check_function);    // NB set up error  
    your_function = type_czech.check(your_function, check_function); // NB this causes the error
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@04 - your_function() is already proxied with your_function'
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  }
  if (typeof failed_check !== 'undefined') {
    failed_check +=type_czech.failureTally();
    passed_check ++;
  }
}

function check_01003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '01003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function check_function(){}
  your_function =17;
  try{
    your_function = type_czech.check(your_function, check_function); 
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@06 - The first parameter to TypeCzech.check(), target_proxy is not a function, but is instead 17'
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  }
  if (typeof failed_check !== 'undefined') {
    failed_check +=type_czech.failureTally();
    passed_check ++;
  }
}

function check_01004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '01004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function check_function(){}
  your_function ={};
  try{
    your_function = type_czech.check(your_function, check_function); 
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@06 - The first parameter to TypeCzech.check(), target_proxy is not a function, but is instead {}'
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  }
  if (typeof failed_check !== 'undefined') {
    failed_check +=type_czech.failureTally();
    passed_check ++;
  }
}