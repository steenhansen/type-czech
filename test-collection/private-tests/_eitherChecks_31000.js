/* eslint-disable */



pass_count = 0;
fail_count = 0;


_eitherChecks_31001();

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

function _eitherChecks_31001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  [1, [2]];  
  TYPE_CZECH_current_test_number = '31001';
  actual_array = type_czech._eitherChecks(check_object, 'fail-97');
  expected_array ='UE@701 - fail-97()  needs at least 2 choices for an Either, not 1 of [2]';
  actual_str = arrayErrorToString(actual_array);
  expected_str = arrayErrorToString(expected_array);
  if (actual_str !== expected_str) {
    console.log(TYPE_CZECH_current_test_number);
    console.log('  actual=', actual_str);
    console.log('expected=', expected_str);
  }
  no_console_mess = '';

                      if (actual_str !== expected_str) {
                        fail_count ++;
                      }
  pass_count++;
    printTestName("_eitherChecks_31001") 
}


if (fail_count>0) {
  the_problem = `private-tests/_eitherChecks_31000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;
