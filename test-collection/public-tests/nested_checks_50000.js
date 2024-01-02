/* eslint-disable */


pass_count = 0;
fail_count = 0;

  nested_checks_50001();   // NO_ERROR         
  nested_checks_50002();   // LEVEL_111_ERROR__123n
  nested_checks_50003();   // LEVEL_222_ERROR__123n
nested_checks_50004();   // LEVEL_333_ERROR__123n

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

////////////////////////////////////////////


function nested_checks_50001(NO_ERROR){
  TYPE_CZECH_current_test_number = 50001;
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
                function level_333(param_c){ }
                function PRE_check_level_333(param_c) {
                  return type_czech.checkParam_type(param_c, 'date')
                }
                level_333 = type_czech.linkUp(level_333, PRE_check_level_333) 
  function level_222(param_b){ }
  function PRE_check_level_222(param_b) {
    level_333(new Date('1999-12-12'))
    return type_czech.checkParam_type(param_b, 'boolean')
  }
  level_222 = type_czech.linkUp(level_222, PRE_check_level_222) 
                function level_111(param_a){ }
                function PRE_check_level_111(param_a) {
                  level_222(true)
                  return type_czech.checkParam_type(111, 'number')
                }
                level_111 = type_czech.linkUp(level_111, PRE_check_level_111)   
  try{
    level_111('no-errors');
    was_exception = false;
  }catch(e){ 
    was_exception = true;
    err=e
  }
  if (was_exception) {
    console.log(TYPE_CZECH_current_test_number, err);
    if (typeof pass_count !== 'undefined') fail_count ++;
  }
  if (typeof pass_count !== 'undefined') pass_count++;
   printTestName("nested_checks_50001")  
}



function nested_checks_50002(LEVEL_111_ERROR__123n){
  TYPE_CZECH_current_test_number = 50002;
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
                    function level_333(param_c){ }
                    function PRE_check_level_333(param_c) {
                      return type_czech.checkParam_typeExtra(param_c, 'date')
                    }
                    level_333 = type_czech.linkUp(level_333, PRE_check_level_333) 
  function level_222(param_b){ }
  function PRE_check_level_222(param_b) {
    level_333(new Date('1991-11-11'))
    return type_czech.checkParam_typeEither(param_b, ['boolean', 'symbol'])  
  }
  level_222 = type_czech.linkUp(level_222, PRE_check_level_222) 
                  function level_111(param_a){ }
                  function PRE_check_level_111(param_a) {
                    level_222(true)
                    return type_czech.checkParam_type(123n, 'number')   // 123n ERROR 
                  }
                  level_111 = type_czech.linkUp(level_111, PRE_check_level_111)    
  try{
    level_111('error-on-111');
    was_exception = false;
  }catch(e){ 
    was_exception = true;
    err=e
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, err);
    if (typeof pass_count !== 'undefined') fail_count ++;
  } else {
    expected_error =`PRE_check_level_111() PRE-FUNC: TE@226 - The value '123n', which is a 'bigint', is not a 'number'
    CHECKER checkParam_type()
ACTUAL TYPE 'string'
     VALUES "error-on-111"
EXPECTED TYPE number
     ORIGIN level_111(param_a)`
    const error_not_match_exception = errorNotMatchException(expected_error, err);
    if (error_not_match_exception) {
      // failing path, the error was wrong
      if (typeof pass_count !== 'undefined') fail_count ++;
      consoleExpectedActual(expected_error, err, TYPE_CZECH_current_test_number);
    } else {
      // expected route with an error message
    }
  }
  if (typeof pass_count !== 'undefined') pass_count++;
     printTestName("nested_checks_50002")  
}


function nested_checks_50003(LEVEL_222_ERROR__123n){
  TYPE_CZECH_current_test_number = 50003;
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE' );
                    function level_333(param_c){ }
                    function PRE_check_level_333(param_c) {
                      return type_czech.checkParam_typeExtra(param_c, 'date')
                    }
                    level_333 = type_czech.linkUp(level_333, PRE_check_level_333) 
  function level_222(param_b){ }
  function PRE_check_level_222(param_b) {
    level_333(new Date('1991-11-11'))
    return type_czech.checkParam_typeEither(param_b, ['boolean', 'symbol'])   // 123n ERROR 
  }
  level_222 = type_czech.linkUp(level_222, PRE_check_level_222) 
                  function level_111(param_a){ }
                  function PRE_check_level_111(param_a) {
                    level_222(123n)
                    return type_czech.checkParam_type(111, 'number')   
                  }
                  level_111 = type_czech.linkUp(level_111, PRE_check_level_111)   
  try{
    level_111('error-on-222');
    was_exception = false;
  }catch(e){ 
    was_exception = true;
    err=e
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, err);
    if (typeof pass_count !== 'undefined') fail_count ++;
  } else {
    expected_error =`PRE_check_level_222() PRE-FUNC: TE@226 - The value '123n', which is a 'bigint', is not a 'boolean', TE@226 - The value '123n', which is a 'bigint', is not a 'symbol'
    CHECKER checkParam_typeEither()
ACTUAL TYPE 'bigint'
     VALUES 123n
EXPECTED TYPE ["boolean","symbol"]
     ORIGIN level_222(param_b)`
    const error_not_match_exception = errorNotMatchException(expected_error, err);
    if (error_not_match_exception) {
      // failing path, the error was wrong
      if (typeof pass_count !== 'undefined') fail_count ++;
      consoleExpectedActual(expected_error, err, TYPE_CZECH_current_test_number);
    } else {
      // expected route with an error message
    }
  }
  if (typeof pass_count !== 'undefined') pass_count ++;
   printTestName("nested_checks_50003")  

}


///////////////////////////////////////////////////////////////////////

function nested_checks_50004(LEVEL_333_ERROR__123n){
  TYPE_CZECH_current_test_number = 50004;
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
                    function level_333(param_c){ }
                    function PRE_check_level_333(param_c) {
                      return type_czech.checkParam_typeExtra(param_c, 'date')    // 123n ERROR 
                    }
                    level_333 = type_czech.linkUp(level_333, PRE_check_level_333) 
  function level_222(param_b){ }
  function PRE_check_level_222(param_b) {
    level_333(123n)
    return type_czech.checkParam_typeEither(param_b, ['boolean', 'symbol'])   
  }
  level_222 = type_czech.linkUp(level_222, PRE_check_level_222) 
                  function level_111(param_a){ }
                  function PRE_check_level_111(param_a) {
                    level_222(true)
                    return type_czech.checkParam_type(111, 'number')   
                  }
                  level_111 = type_czech.linkUp(level_111, PRE_check_level_111)   
  try{
    level_111('error-on-333');
    was_exception = false;
  }catch(e){ 
    was_exception = true;
    err=e
  }
  if (!was_exception) {
    console.log(TYPE_CZECH_current_test_number, err);
    if (typeof pass_count !== 'undefined') fail_count ++;
  } else {
    expected_error =`PRE_check_level_333() PRE-FUNC: EE@320 - checkParam_typeExtra(123n, 'date') has the first param wrong. TE@226 - The value '123n', which is a 'bigint', is not a 'date'
    CHECKER checkParam_typeExtra()
ACTUAL TYPE 'bigint'
     VALUES 123n
EXPECTED TYPE date
     ORIGIN level_333(param_c)`
    const error_not_match_exception = errorNotMatchException(expected_error, err);
    if (error_not_match_exception) {
      // failing path, the error was wrong
      if (typeof pass_count !== 'undefined') fail_count ++;
      consoleExpectedActual(expected_error, err, TYPE_CZECH_current_test_number);
    } else {
      // expected route with an error message
    }
  }
  if (typeof pass_count !== 'undefined') pass_count++;
     printTestName("nested_checks_50004")  
}


if (fail_count>0) {
  the_problem = `public-tests/prototype_check_55000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;



