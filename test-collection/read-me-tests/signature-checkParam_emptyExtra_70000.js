
/* eslint-disable */

pass_count = 0;
fail_count = 0;

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

function showFail(which_type, e='') {
  console.log('Failed test in signature-checkParam_emptyExtra_70000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkParam_emptyExtra(test_value, the_signature){
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

  function PRE_check_checkParam_emptyExtra(a_value) {
    printTestName("signature-checkParam_emptyExtra_70000_"+a_value) 
    return type_czech.checkParam_emptyExtra(a_value, the_signature);
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkParam_emptyExtra);
  pass_count ++;
  signatureTest(test_value);
}


try { test_checkParam_emptyExtra(['not-empty', 'extra'], 'ER'); // pass
} catch (e) { showFail('A1', e); }
try { test_checkParam_emptyExtra(['not-empty', ''], 'ER'); // pass
} catch (e) { showFail('A2', e); }
      try {  test_checkParam_emptyExtra(['', 'extra'], 'ER') // fail
      showFail('A3'); } catch (e) {}
 



if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkParam_emptyExtra_70000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

