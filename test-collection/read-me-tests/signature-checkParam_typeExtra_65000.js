
/* eslint-disable */

pass_count = 0;
fail_count = 0;

function showFail(which_type, e='') {
  console.log('Failed test in signature-checkParam_typeExtra_65000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkParam_typeExtra(test_value, the_signature){
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

  function PRE_check_checkParam_typeExtra(a_value){
    return type_czech.checkParam_typeExtra(a_value, the_signature);
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkParam_typeExtra);
  pass_count ++;
  signatureTest(test_value);
}








try { test_checkParam_typeExtra(['a-string', 92], 'string'); // pass
} catch (e) { showFail('A1', e); }
      try {  test_checkParam_typeExtra(['a-string', 92], 'number') // fail
      showFail('A2'); } catch (e) {}
      



try { test_checkParam_typeExtra([ ['a','b','c'], 'RMS'],  [['strings']]); // pass
} catch (e) { showFail('B1', e); }
      try {  test_checkParam_typeExtra([ ['a','b','c'], 'extra-str'],  ['strings']) // fail
      showFail('B2'); } catch (e) {}
          

try { test_checkParam_typeExtra({c:92}, {c:'number'}); // pass
} catch (e) { showFail('C1', e); }
try { test_checkParam_typeExtra({a:1, c:92}, {c:'number'}); // pass
} catch (e) { showFail('C2', e); }
          try {  test_checkParam_typeExtra({a:1, c:92}, {d:'boolean'}) // fail
          showFail('C3'); } catch (e) {}
          
    
    
          try { test_checkParam_typeExtra([ ['a','b','c'], 'extra-str'],  'array'); // pass
        } catch (e) { showFail('D1', e); }
              try {  test_checkParam_typeExtra([ 1942, 'extra-str'],  'array') // fail
              showFail('D2'); } catch (e) {}
                  
        


if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkParam_typeExtra_65000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

