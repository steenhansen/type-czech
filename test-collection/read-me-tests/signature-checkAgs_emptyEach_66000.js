
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
  console.log('Failed test in signature-checkAgs_emptyEach_66000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkArgs_emptyEach(...the_args){

  the_signature = the_args.pop()

  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

  function PRE_check_checkArgs_emptyEach() {
      printTestName("signature-checkAgs_emptyEach_66000_"+ arguments)  
    return type_czech.checkArgs_emptyEach(arguments, the_signature)
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkArgs_emptyEach)
  pass_count ++;
  signatureTest(...the_args)
}








try { test_checkArgs_emptyEach('a','b','c','d','e',    "EMPTY-ERROR") // pass
} catch (e) { showFail('A1', e); }
      try {  test_checkArgs_emptyEach('a','b','','d','e',    "EMPTY-ERROR") // fail
      showFail('A2'); } catch (e) {}
      




if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkAgs_emptyEach_66000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

