/* eslint-disable */


///           empty????

tested_variadic_types = 0;
failed_variadic_types = 0;

variadic_91001();
variadic_91002();
variadic_91003();

variadic_91101();
variadic_91102();

variadic_91201();
//variadic_91202();

total_fails += failed_variadic_types;
total_checks += tested_variadic_types;
if (show_random) {
  console.log('variadic failed tests 91000', failed_variadic_types)
  console.log('variadic passed tests 91000', tested_variadic_types)
}

function variadic_91001(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_variadic_types ++;
  }
  TYPE_CZECH_current_test_number = '91001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.check_variadicType(arguments, ['Number']) }
  yourFunc = type_czech.link(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  } catch (e) {
    was_exception = true;
  }
  if (was_exception) {
    console.log(error_id);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}





function variadic_91002(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_variadic_types ++;
  }
  TYPE_CZECH_current_test_number = '91002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.check_variadicType(arguments, ['Number']) }
  yourFunc = type_czech.link(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }
  if (was_exception) {
    console.log(error_id);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}

function variadic_91003(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_variadic_types ++;
  }
  TYPE_CZECH_current_test_number = '91003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.check_type(arguments, 'Array') }
  yourFunc = type_czech.link(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }
  if (was_exception) {
    console.log(error_id);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}



function variadic_91101(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_variadic_types ++;
  }
  TYPE_CZECH_current_test_number = '91101';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

 // type_czech=TypeCzech('LOG-ERRORS')           /// works correctly


  type_czech=TypeCzech('THROW-EXCEPTIONS' ///, 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.check_type(arguments, ['Number']) }
  yourFunc = type_czech.link(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc(1)
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }
  if (!was_exception) {
    console.log(error_id);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (!was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}

function variadic_91102(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_variadic_types ++;
  }
  TYPE_CZECH_current_test_number = '91102';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
 // , 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.check_variadicType(arguments, ['Number']) }
  yourFunc = type_czech.link(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc(1,2,3)
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }
  if (was_exception) {
    console.log(error_id);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}

function variadic_91201(){
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    failed_variadic_types ++;
  }
  TYPE_CZECH_current_test_number = '91201';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//  , 'DEBUG-CONSOLE-TRACE'
  );

  function PRE_yourFunc() { return type_czech.check_type(arguments, ['Number']) }
  yourFunc = type_czech.link(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc([1])
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }
  if (was_exception) {
    console.log(error_id);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}


// function variadic_91202(){
//   if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
//     failed_variadic_types ++;
//   }
//   TYPE_CZECH_current_test_number = '91202';
//   error_id = errorLabel(TYPE_CZECH_current_test_number);

//   type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
//  // , 'DEBUG-CONSOLE-TRACE'
//   );

//   function PRE_yourFunc() { return type_czech.check_variadicType(arguments, {an_array:['Number']}) }
//   yourFunc = type_czech.link(yourFunc, PRE_yourFunc) 
//   function yourFunc(){}

//   actual_error = '';
//   try {  
//     yourFunc({an_array:[1,2]})
//     was_exception = false;                              makes no sense
//   }catch(actual_e){ 
//     actual_error = actual_e
//     was_exception = true;
//   }
//   if (was_exception) {
//     console.log(error_id);
//     console.log('  actual=', 'No Exception');
//     console.log('expected=', 'Exception');
//     }
//     no_console_mess = '';
  
//                                               if (was_exception) {
//                                                 failed_variadic_types ++;
//                                               }
//                                               tested_variadic_types ++;
 
// }