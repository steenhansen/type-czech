
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
  console.log('Failed test in signature-checkParam_emptyEither_69000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkParam_emptyEither(test_value, the_signature){
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

  function PRE_check_checkParam_emptyEither(a_value) {
    printTestName("signature-checkParam_emptyEither_69000_" + a_value)  
    return type_czech.checkParam_emptyEither(a_value, the_signature);
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkParam_emptyEither);
  pass_count ++;
  signatureTest(test_value);
}


try { test_checkParam_emptyEither(['a', 'b'], [ ['ER','ER'], ['ER', 'OK'] ]); // pass
} catch (e) { showFail('A1', e); }
try { test_checkParam_emptyEither(['a', ''],  [ ['ER','ER'], ['ER', 'OK'] ]); // pass
} catch (e) { showFail('A2', e); }
      try {  test_checkParam_emptyEither(['', 'b'], [ ['ER','ER'], ['ER', 'OK'] ]) // fail
      showFail('A3'); } catch (e) {}
 



if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkParam_emptyEither_69000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

