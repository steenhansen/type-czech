
/* eslint-disable */

pass_count = 0;
fail_count = 0;

function showFail(which_type, e='') {
  console.log('Failed test in signature-checkParam_type_63000.js : ', which_type, e);
  fail_count +=1;
}

function test_checkParam_type(test_value, the_signature){
  type_czech = TypeCzech('THROW-EXCEPTIONS', 'HIDE-INIT-MESSAGE');

  function PRE_check_checkParam_type(a_value){
    return type_czech.checkParam_type(a_value, the_signature);
  }

  function signatureTest(a_value){ }

  signatureTest = type_czech.linkUp(signatureTest, PRE_check_checkParam_type);
  pass_count ++;
  signatureTest(test_value);
}


try { test_checkParam_type('a-string', 'string'); // pass
} catch (e) { showFail('A1', e); }
try { test_checkParam_type('', 'string'); // pass
} catch (e) { showFail('A2', e); }
try { test_checkParam_type(12, 'number'); // pass
} catch (e) { showFail('A3', e); }
try { test_checkParam_type(Infinity, 'number'); // pass
} catch (e) { showFail('A4', e); }
try { test_checkParam_type(NaN, 'number'); // pass
} catch (e) { showFail('A5', e); }


      try {  test_checkParam_type(123, 'string') // fail
      showFail('A6'); } catch (e) {}
      try {  test_checkParam_type('123', 'number') // fail
      showFail('A7'); } catch (e) {}
      try {  test_checkParam_type(null, 'date') // fail
      showFail('A8'); } catch (e) {}
      try {  test_checkParam_type(undefined, 'date') // fail
      showFail('A9'); } catch (e) {}




try { test_checkParam_type([1],     ['number']); // pass
} catch (e) { showFail('B1', e); }
try { test_checkParam_type([1,2],   ['number','number']); // pass
} catch (e) { showFail('B2', e); }
try { test_checkParam_type([1,2,3], ['number','number','number']); // pass
} catch (e) { showFail('B3', e); }

try { test_checkParam_type([1],     ['numbers']); // pass
} catch (e) { showFail('B4', e); }
try { test_checkParam_type([1,2],   ['numbers']); // pass
} catch (e) { showFail('B5', e); }
try { test_checkParam_type([1,2,3], ['numbers']); // pass
} catch (e) { showFail('B6', e); }

try { test_checkParam_type([ [1]     ], [['numbers']]); // pass
} catch (e) { showFail('B7', e); }
try { test_checkParam_type([ [1,2]   ], [['numbers']]); // pass
} catch (e) { showFail('B8', e); }
try { test_checkParam_type([ [1,2,3] ], [['numbers']]); // pass
} catch (e) { showFail('B9', e); }

try { test_checkParam_type([ [1]                 ], [['numbers']]); // pass
} catch (e) { showFail('B10', e); }
try { test_checkParam_type([ [1], [2,2]          ], [['numbers'], ['numbers']]); // pass
} catch (e) { showFail('B11', e); }
try { test_checkParam_type([ [1], [2,2], [3,3,3] ], [['numbers'], ['numbers'], ['numbers']]); // pass
} catch (e) { showFail('B12', e); }

          try {  test_checkParam_type([1,'b',3], ['number','number','number']) // fail
          showFail('B13'); } catch (e) {}
          try {  test_checkParam_type([1,'a',3], ['numbers']) // fail
          showFail('B14'); } catch (e) {}
          try {  test_checkParam_type([ [1], [1,2,3], ['c'] ], [['numbers']]) // fail
          showFail('B15'); } catch (e) {}



try { test_checkParam_type({a:1}, {a:'number'}); // pass
} catch (e) { showFail('C1', e); }
try { test_checkParam_type({a:{b:{c:{d:2}}}}, {a:{b:{c:{d:'number'}}}}); // pass
} catch (e) { showFail('C2', e); }

        try {  test_checkParam_type({a:1}, {a:'string'}) // fail
        showFail('C3'); } catch (e) {}
        try {  test_checkParam_type({a:'1'}, {a:'number'}) // fail
        showFail('C4'); } catch (e) {}



try { test_checkParam_type([1,2,3], 'array'); // pass
} catch (e) { showFail('D1', e); }
try { test_checkParam_type(['a','b','c'], 'array'); // pass
} catch (e) { showFail('D2', e); }
try { test_checkParam_type([[14]], 'array'); // pass
} catch (e) { showFail('D3', e); }

        try {  test_checkParam_type(13, 'array') // fail
        showFail('D4'); } catch (e) {}
        try {  test_checkParam_type({}, 'array') // fail
        showFail('D5'); } catch (e) {}
      

try { test_checkParam_type([ [1],      ['a'],         [false]          ], ['arrays']); // pass
} catch (e) { showFail('E1', e); }
try { test_checkParam_type([ [1,2,3,], ['a','b','c'], [true,true,true] ], ['arrays']); // pass
} catch (e) { showFail('E2', e); }

        try {  test_checkParam_type([ 1, ['a'], [false] ], ['arrays']) // fail
        showFail('E3'); } catch (e) {}
        try {  test_checkParam_type([ [1], ['a'] ], ['arrays', 'arrays']) // fail
        showFail('E4'); } catch (e) {}
      

              
try { test_checkParam_type([1], ['numbers']); // pass
} catch (e) { showFail('F1', e); }

        try {  test_checkParam_type([1],  'numbers') // fail
        showFail('F2'); } catch (e) {}







if (fail_count>0) {
  the_problem = `read-me-tests/signature-checkParam_type_63000.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}

TEST_total_checks += pass_count;

