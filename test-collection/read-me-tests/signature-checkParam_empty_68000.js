
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
  console.log('Failed test in signature-checkParam_empty_68000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkParam_empty(test_value, the_signature){
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

  function PRE_check_checkParam_empty(a_value) {
    printTestName("signature-checkParam_empty_68000_"+a_value)  
    return type_czech.checkParam_empty(a_value, the_signature);
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkParam_empty);
  pass_count ++;
  signatureTest(test_value);
}


try { test_checkParam_empty('a-string', 'EMPTY-ERROR'); // pass
} catch (e) { showFail('A1', e); }
      try {  test_checkParam_empty('', 'EMPTY-ERROR') // fail
      showFail('A2'); } catch (e) {}
      try {  test_checkParam_empty(Infinity, 'EMPTY-ERROR') // fail
      showFail('A3'); } catch (e) {}
      try {  test_checkParam_empty(NaN, 'EMPTY-ERROR') // fail
      showFail('A4'); } catch (e) {}


try { test_checkParam_empty([1],   'EMPTY-ERROR'); // pass
} catch (e) { showFail('B1', e); }
try { test_checkParam_empty([ [] ], 'EMPTY-ERROR'); // pass
} catch (e) { showFail('B2', e); }
try { test_checkParam_empty(['a', '', 'b'],   ['EMPTY-ERROR', 'EMPTY-OK', 'EMPTY-ERROR']); // pass
} catch (e) { showFail('B3', e); }
      try {  test_checkParam_empty([], 'EMPTY-ERROR') // fail
      showFail('B4'); } catch (e) {}
      try {  test_checkParam_empty([ [] ], ['EMPTY-ERROR']) // fail
      showFail('B5'); } catch (e) {}
      try {  test_checkParam_empty(['a', '', 'b'],   ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']) // fail
      showFail('B6'); } catch (e) {}



try { test_checkParam_empty({a:1}, 'EMPTY-ERROR'); // pass
} catch (e) { showFail('C1', e); }
try { test_checkParam_empty({a:'abc'}, {a:'EMPTY-ERROR'}); // pass
} catch (e) { showFail('C2', e); }
          try {  test_checkParam_empty({}, 'EMPTY-ERROR') // fail
          showFail('C3'); } catch (e) {}
          try {  test_checkParam_empty({a:''}, {a:'EMPTY-ERROR'}) // fail
          showFail('C4'); } catch (e) {}




if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkParam_empty_68000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

