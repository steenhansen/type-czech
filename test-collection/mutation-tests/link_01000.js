/* eslint-disable */


tested_check = 0;
failed_check = 0;

link_01001();
link_01002();
link_01003();
link_01004();

total_fails += failed_check;
total_checks += tested_check;

if (show_random) {
  console.log('check failed tests 01000', failed_check)
  console.log('check passed tests 01000', tested_check)
}

function link_01001(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_check ++;
  }
  
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
     var your_function = type_czech.link(your_function, check_function);
    }catch(e){ 
      actual_e = e;
    }
    return actual_e;
  }
  actual=get_out_of_scope_err();
  expected = 'TC@06 - The first parameter to TypeCzech.link(), target_proxy is not a function, but is instead undefined'
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_check ++;
                                              }
                                              tested_check ++;
}

function link_01002(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_check ++;
  }

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '01002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function check_function(){}
  function your_function(){}
  let actual;
  try{
    your_function = type_czech.link(your_function, check_function);    // NB set up error  
    your_function = type_czech.link(your_function, check_function); // NB this causes the error
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@04 - your_function() is already proxied with your_function'
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_check ++;
                                              }
                                              tested_check ++;
}

function link_01003(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_check ++;
  }

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '01003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function check_function(){}
  your_function =17;
  try{
    your_function = type_czech.link(your_function, check_function); 
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@06 - The first parameter to TypeCzech.link(), target_proxy is not a function, but is instead 17'
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_check ++;
                                              }
                                              tested_check ++;
}

function link_01004(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_check ++;
  }

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '01004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  function check_function(){}
  your_function ={};
  try{
    your_function = type_czech.link(your_function, check_function); 
  }catch(actual_e){ 
    actual = actual_e
  }
  expected = 'TC@06 - The first parameter to TypeCzech.link(), target_proxy is not a function, but is instead {}'
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';

                                              if (actual !== expected) {
                                                failed_check ++;
                                              }
                                              tested_check ++;
                                              
}