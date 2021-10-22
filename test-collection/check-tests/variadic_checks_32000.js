/* eslint-disable */


///           empty????

tested_variadic_types = 0;
failed_variadic_types = 0;

variadic_32001();
variadic_32002();
variadic_32003();

variadic_32101();
variadic_32102();

variadic_32201();

TEST_total_fails += failed_variadic_types;
TEST_total_checks += tested_variadic_types;
if (TEST_show_random) {
  console.log('variadic failed tests 32000', failed_variadic_types)
  console.log('variadic passed tests 32000', tested_variadic_types)
}

function variadic_32001(){
  TYPE_CZECH_current_test_number = '32001';

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  function PRE_yourFunc() { return type_czech.check_variadicType(arguments, ['Number']) }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  } catch (e) {
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}





function variadic_32002(){

  TYPE_CZECH_current_test_number = '32002';

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  function PRE_yourFunc() { return type_czech.check_variadicType(arguments, ['Number']) }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
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
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}

function variadic_32003(){

  TYPE_CZECH_current_test_number = '32003';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  function PRE_yourFunc() { return type_czech.check_type(arguments, 'Array') }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
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
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}



function variadic_32101(){
  TYPE_CZECH_current_test_number = '32101';

 // type_czech=TypeCzech('LOG-ERRORS')           /// works correctly
  type_czech=TypeCzech('THROW-EXCEPTIONS');

  function PRE_yourFunc() { return type_czech.check_type(arguments, ['Number']) }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
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
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (!was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}

function variadic_32102(){
  TYPE_CZECH_current_test_number = '32102';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  function PRE_yourFunc() { return type_czech.check_variadicType(arguments, ['Number']) }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
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
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}

function variadic_32201(){
  TYPE_CZECH_current_test_number = '32201';

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  function PRE_yourFunc() { return type_czech.check_type(arguments, ['Number']) }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
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
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', 'No Exception');
    console.log('expected=', 'Exception');
    }
    no_console_mess = '';
  
                                              if (was_exception) {
                                                failed_variadic_types ++;
                                              }
                                              tested_variadic_types ++;
}





function variadic_32201(){
  var TYPE_CZECH_current_test_number = '32201';       
  var mutate_14001 = [1,2,3];    
  var expect_error = `check_mutated(arguments, expected_types),ME@405 - The reference variable 'mutate_14001' in ` + 
                     `function '_mutatedVariables_14001()' changed values from [1,2,3] to [1,2,3,4] ` + 
                     `START-SAME ~ [1,2,3 PRE-DIFF ~ ] POST-DIFF ~ ,4],''`;
        var type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
        var actual_error;
        try {
          type_czech_test.mutateSnapshot('_mutatedVariables_14001', 'mutate_14001', mutate_14001);
          mutate_14001.push(4);
          actual_error = type_czech_test.check_mutated('_mutatedVariables_14001', 'mutate_14001');
        } catch (e) { }
        actual_error = ((actual_error.join()).replace(/\s+/g, ' ')).trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_mutatedVariables !=='undefined') failed_mutatedVariables ++;
        }
        if (typeof tested_mutatedVariables !=='undefined') tested_mutatedVariables ++;
}