/* eslint-disable */


///           empty????

pass_count = 0;
fail_count = 0;


variadic_32001();
variadic_32002();
variadic_32003();             // 3744

variadic_32101();
variadic_32102();

variadic_32201();

function printTestName(an_str) {
  if (typeof window !== "undefined") {
    if (typeof window.browserList === 'function') {
      if (window.browserList()) {
        console.log(pass_count, an_str);
      }
    }
  } else {
    if (typeof global.nodejsList === 'function') {
      if (global.nodejsList()) {
        console.log(pass_count, an_str);
      }
    }
   } 
}

function variadic_32001(){
  TYPE_CZECH_current_test_number = '32001';

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc() { return type_czech.checkArgs_typeEach(arguments, 'number') }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)
    was_exception = false;
  } catch (e) {
    was_exception = true;
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number, 'test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    }
  if (typeof tested_signatures !== 'undefined') tested_signatures++;
    printTestName("variadic_32001") 
}





function variadic_32002(){

  TYPE_CZECH_current_test_number = '32002';

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc() { return type_czech.checkArgs_typeEach(arguments, ['numbers']) }
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
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, 'test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    }
  if (typeof tested_signatures !== 'undefined') tested_signatures++;
    printTestName("variadic_32002") 
}

function variadic_32003(){

  TYPE_CZECH_current_test_number = '32003';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc() { return type_czech.checkParam_type(arguments, 'array') }
  yourFunc = type_czech.linkUp(yourFunc, PRE_yourFunc) 
  function yourFunc(){}

  actual_error = '';
  try {  
    yourFunc(1,2,3,4,5,6,7,8,9)          // is this valid????
    was_exception = false;
  }catch(actual_e){ 
    actual_error = actual_e
    was_exception = true;
  }
  if (was_exception) {
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    }
  if (typeof tested_signatures !== 'undefined') tested_signatures++;
  printTestName("variadic_32003") 
}



function variadic_32101(){
  TYPE_CZECH_current_test_number = '32101';

 // type_czech=TypeCzech('LOG-ERRORS')           /// works correctly
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc(a_var) { return type_czech.checkParam_type(a_var, ['numbers']) }
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
    console.log(TYPE_CZECH_current_test_number, 'test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    }
  if (typeof tested_signatures !== 'undefined') tested_signatures++;
    printTestName("variadic_32101") 
}

function variadic_32102(){
  TYPE_CZECH_current_test_number = '32102';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc() { return type_czech.checkArgs_typeEach(arguments, ['numbers']) }
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
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, 'test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    }
  if (typeof tested_signatures !== 'undefined') tested_signatures++;
    printTestName("variadic_32102") 
}






function variadic_32201(){
  var TYPE_CZECH_current_test_number = '32201';       
  var mutate_14001 = [1,2,3];    
  var expect_error = `ME@405 - Variable 'mutate_14001' changed from [1,2,3] to [1,2,3,4] START-SAME ~ [1,2,3 PRE-DIFF ~ ] POST-DIFF ~ ,4]`;
        var type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
        var actual_error;
        try {
          type_czech.check_buildSnapshot('_mutatedVariables_14001', 'mutate_14001', mutate_14001);
          mutate_14001.push(4);
          var actual_error = type_czech.check_mutatedSnapshot('_mutatedVariables_14001', 'mutate_14001');
        } catch (e) { }
        actual_error = actual_error.replace(/\s+/g, ' ').trim(); 
        if (actual_error !== expect_error) {
          console.log(TYPE_CZECH_current_test_number, 'actual=', actual_error);
          console.log(                          '    expected=', expect_error);
          if (typeof failed_mutatedVariables !=='undefined') failed_mutatedVariables ++;
        }
  if (typeof tested_mutatedVariables !== 'undefined') tested_mutatedVariables++;
      printTestName("variadic_32201")  
}



if (fail_count>0) {
  the_problem = `check-tests/variadic_checks_32000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;