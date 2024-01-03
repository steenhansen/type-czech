
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
  console.log('Failed test in signature-checkParam_typeEither_64000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkParam_typeEither(test_value, the_signature){
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

      function PRE_check_checkParam_typeEither(a_value) {
         printTestName("signature-checkParam_typeEither_64000_"+a_value)  
    return type_czech.checkParam_typeEither(a_value, the_signature);
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkParam_typeEither);
  pass_count ++;
  signatureTest(test_value);
}








try { test_checkParam_typeEither('a-string', ['string','number']); // pass
} catch (e) { showFail('A1', e); }
try { test_checkParam_typeEither(12,         ['string','number']); // pass
} catch (e) { showFail('A2', e); }
try { test_checkParam_typeEither(true,  [ 'string', 'number', 'boolean', 'date']); // pass
} catch (e) { showFail('A3', e); }

      try {  test_checkParam_typeEither(false, ['string','number']) // fail
      showFail('A4'); } catch (e) {}
      try {  test_checkParam_typeEither(Symbol('y'),  [ 'string', 'number', 'boolean', 'date']) // fail
      showFail('A5'); } catch (e) {}


try { test_checkParam_typeEither(['a','b','c'], [ ['strings'],['numbers'] ]); // pass
} catch (e) { showFail('B1', e); }
try { test_checkParam_typeEither([1,2,3],       [ ['strings'],['numbers'] ]); // pass
} catch (e) { showFail('B2', e); }
try { test_checkParam_typeEither('an-str', [ 'string',['numbers'] ]); // pass
} catch (e) { showFail('B3', e); }
try { test_checkParam_typeEither([1,2,3],    [ 'string',['numbers'] ]); // pass
} catch (e) { showFail('B4', e); }

      try {  test_checkParam_typeEither([true, false], [ ['strings'],['numbers'] ]) // fail
      showFail('B5'); } catch (e) {}
      try {  test_checkParam_typeEither(['a','b','c'], [ 'string',['numbers'] ]) // fail
      showFail('B6'); } catch (e) {}
    
    


try { test_checkParam_typeEither({a:1}, [{a:'number'}, {b:'string'}]); // pass
} catch (e) { showFail('C1', e); }
try { test_checkParam_typeEither({b:'one'}, [{a:'number'}, {b:'string'}]); // pass
} catch (e) { showFail('C2', e); }

      try {  test_checkParam_typeEither({c:false}, [{a:'number'}, {b:'string'}]) // fail
      showFail('C3'); } catch (e) {}
      try {  test_checkParam_typeEither({b:false}, [{a:'number'}, {b:'string'}]) // fail
      showFail('C4'); } catch (e) {}
    



try { test_checkParam_typeEither(77,            ['number', 'array']); // pass
} catch (e) { showFail('D1', e); }
try { test_checkParam_typeEither([1,2,3],       ['number', 'array']); // pass
} catch (e) { showFail('D2', e); }
try { test_checkParam_typeEither(['a','b','c'], ['number', 'array']); // pass
} catch (e) { showFail('D3', e); }
      try {  test_checkParam_typeEither(false, ['number', 'array']) // fail
      showFail('D4'); } catch (e) {}
        
    
    
try { test_checkParam_typeEither(1,         ['number', ['arrays']]); // pass
} catch (e) { showFail('E1', e); }
try { test_checkParam_typeEither([[1,2,3]], ['number', ['arrays']]); // pass
} catch (e) { showFail('E2', e); }

      try {  test_checkParam_typeEither([ 1, ['a'], [false] ], ['arrays']) // fail
      showFail('E3'); } catch (e) {}
      try {  test_checkParam_typeEither([ [1], ['a'] ], ['arrays', 'arrays']) // fail
      showFail('E4'); } catch (e) {}
    

        








if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkParam_typeEither_64000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

