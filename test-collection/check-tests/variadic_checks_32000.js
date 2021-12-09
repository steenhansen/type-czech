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

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc() { return type_czech.checkArgs_typeVariadic(arguments, ['number-array']) }
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
    if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}





function variadic_32002(){

  TYPE_CZECH_current_test_number = '32002';

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc() { return type_czech.checkArgs_typeVariadic(arguments, ['number-array']) }
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
    console.log(TYPE_CZECH_current_test_number, 'test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    }
    if (typeof tested_signatures !== 'undefined') tested_signatures ++;
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
    if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}



function variadic_32101(){
  TYPE_CZECH_current_test_number = '32101';

 // type_czech=TypeCzech('LOG-ERRORS')           /// works correctly
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc(a_var) { return type_czech.checkParam_type(a_var, ['number-array']) }
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
    if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

function variadic_32102(){
  TYPE_CZECH_current_test_number = '32102';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  function PRE_yourFunc() { return type_czech.checkArgs_typeVariadic(arguments, ['number-array']) }
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
    console.log(TYPE_CZECH_current_test_number, 'test failed');
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    }
    if (typeof tested_signatures !== 'undefined') tested_signatures ++;
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
        if (typeof tested_mutatedVariables !=='undefined') tested_mutatedVariables ++;
}