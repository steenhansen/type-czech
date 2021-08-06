/* eslint-disable */

passed_check = 0;

failed_check = 0;

check_1001(1001);
check_1002(1002);
check_1003(1003);
check_1004(1004);

 total_fails += failed_check;
 console.log('check failed tests', failed_check)

total_checks += passed_check;
console.log('check passed tests', passed_check)

function check_1001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  function your_function(){}
  const error_id = errorLabel(error_number);

  const get_out_of_scope_err = _ => {
    function check_function(){}
    let actual_e;
    try{
     var your_function = type_czech.check(your_function, check_function);
    }catch(e){ 
      actual_e = e;
    }
    return actual_e;
  }
  const actual=get_out_of_scope_err();
  expected = 'TC@06 - TypeCzech.check() target_proxy is not a function -un-defined-'
  if (actual!==expected) _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  failed_check +=type_czech.failureTally();
  passed_check ++;
}

function check_1002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
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
  if (actual!==expected) _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  failed_check +=type_czech.failureTally();
  passed_check ++;
}

function check_1003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  function check_function(){}
  const your_function =17;
  try{
    your_function = type_czech.check(your_function, check_function); 
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@06 - TypeCzech.check() target_proxy is not a function 17'
  if (actual!==expected) _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  failed_check +=type_czech.failureTally();
  passed_check ++;
}

function check_1004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const error_id = errorLabel(error_number);
  function check_function(){}
  const your_function ={};
  try{
    your_function = type_czech.check(your_function, check_function); 
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@06 - TypeCzech.check() target_proxy is not a function {}'
  if (actual!==expected) _throw(`${error_id} _missingKey() misfired with : ${actual}`);
  failed_check +=type_czech.failureTally();
  passed_check ++;
}