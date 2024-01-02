/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

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



function test_pre_checkParam_empty_single(single_parameter, signature_of_parameter, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  pass_count += 1;

  function PRE_test_3900(a_var) {
    return type_czech.checkParam_empty(a_var, signature_of_parameter);
  }

  function pre_checkParam_empty_3900() {}
  pre_checkParam_empty_3900 = type_czech.linkUp(pre_checkParam_empty_3900, PRE_test_3900);

  const before_var_value = beforeCheck(single_parameter, signature_of_parameter);
  if (expected_error === '') {
    try {
      pre_checkParam_empty_3900(single_parameter);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_checkParam_empty_3900(single_parameter);
      // failing path, should have been an exception
      fail_count += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        fail_count += 1;



        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(single_parameter, signature_of_parameter, before_var_value, error_id);
}


// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { x: 'c' };
single_signature = { x: 'EMPTY-ERROR' };
error_mess = ``;
test_pre_checkParam_empty_single(single_variable, single_signature, 99001, error_mess);
printTestName("checkParam_empty_99001")

single_variable  = { x: '' };
single_signature = { x: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() PRE-FUNC: EE@301 -  key 'x' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {x:""}
EMPTY ASSERTION {"x":"EMPTY-ERROR"}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 99002, error_mess);
printTestName("checkParam_empty_99002")

/////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [''];
single_signature = ['EMPTY-ERROR'];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [""]
EMPTY ASSERTION ["EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 99003, error_mess);
printTestName("checkParam_empty_99003")

single_variable  = ['c'];
single_signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 99004, error_mess);
printTestName("checkParam_empty_99004")

/////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [ ['not-empty']             ];
single_signature = [ ['EMPTY-ERROR'] ];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 99005, error_mess);
printTestName("checkParam_empty_99005")

single_variable  = [ ['']             ];
single_signature = [ ['EMPTY-ERROR'] ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[""]]
EMPTY ASSERTION [["EMPTY-ERROR"]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 99006, error_mess);
printTestName("checkParam_empty_99006")

/////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [ ['a',           'b']           ];
single_signature = [ ['EMPTY-ERROR', 'EMPTY-ERROR'] ];
error_mess = ``;
test_pre_checkParam_empty_single(single_variable, single_signature, 99007, error_mess);
printTestName("checkParam_empty_99007")

single_variable  = [ ['a',           '']            ];
single_signature = [ ['EMPTY-ERROR', 'EMPTY-ERROR'] ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [["a",""]]
EMPTY ASSERTION [["EMPTY-ERROR","EMPTY-ERROR"]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 99008, error_mess);
printTestName("checkParam_empty_99008")

single_variable  = [ ['',            'b']            ];
single_signature = [ ['EMPTY-ERROR', 'EMPTY-ERROR'] ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [["","b"]]
EMPTY ASSERTION [["EMPTY-ERROR","EMPTY-ERROR"]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 99009, error_mess);
printTestName("checkParam_empty_99009")
////////////////////////////////////////////////////////////////////























single_variable  = { x: [{ y: 'z'           }] };
single_signature = { x: [{ y: 'EMPTY-ERROR' }] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3901, error_mess);
printTestName("checkParam_empty_3901")

single_variable  = { x: [{ y: ''            }] };
single_signature = { x: [{ y: 'EMPTY-ERROR' }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@301 -  key 'y' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {x:[{y:""}]}
EMPTY ASSERTION {"x":[{"y":"EMPTY-ERROR"}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3902, error_mess);
printTestName("checkParam_empty_3902")

single_variable  = { a: [1, 2, 3] };
single_signature = { a: ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3903, error_mess);
printTestName("checkParam_empty_3903")

single_variable  = { a: [1, NaN, 3] };
single_signature = { a: ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[1,NaN,3]}
EMPTY ASSERTION {"a":["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3904, error_mess);
printTestName("checkParam_empty_3904")

single_variable  = { r: {} };
single_signature = { r: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() PRE-FUNC: EE@309 - Key 'r' was understood to be 'EMPTY-ERROR' but was rather '{}'
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {r:{}}
EMPTY ASSERTION {"r":"EMPTY-ERROR"}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3905, error_mess);
printTestName("checkParam_empty_3905")

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3906, error_mess);
printTestName("checkParam_empty_3906")

single_variable  = { a: [{ r: [ [],            [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EMPTY ASSERTION {"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3907, error_mess);
printTestName("checkParam_empty_3907")

single_variable  = { a: [{ r: [ [123],         [],              987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@321 - Empty array has no types
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EMPTY ASSERTION {"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3908, error_mess);
printTestName("checkParam_empty_3908")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,           false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-IGNORE', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@322 - Array has more elements than types 3 !== 1
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EMPTY ASSERTION {"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-IGNORE","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3909, error_mess);
printTestName("checkParam_empty_3909")





















single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-IGNORE', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = ``;
test_pre_checkParam_empty_single(single_variable, single_signature, 3910, error_mess);
printTestName("checkParam_empty_3910")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date(''),            (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '4' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,null,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EMPTY ASSERTION {"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3911, error_mess);
printTestName("checkParam_empty_3911")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,       12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-IGNORE', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3912, error_mess);
printTestName("checkParam_empty_3912")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      NaN,           { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '6' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,NaN,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EMPTY ASSERTION {"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3913, error_mess);
printTestName("checkParam_empty_3913")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: '' },     { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3914, error_mess);
printTestName("checkParam_empty_3914")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: '' },            /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@301 -  key 'b' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:""},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EMPTY ASSERTION {"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3915, error_mess);
printTestName("checkParam_empty_3915")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /(?:)/,        'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '9' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/(?:)/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EMPTY ASSERTION {"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3916, error_mess);
printTestName("checkParam_empty_3916")

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-IGNORE' ] }] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3917, error_mess);
printTestName("checkParam_empty_3917")














// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'array' must not be empty for the value []
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES []
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3918, error_mess);
printTestName("checkParam_empty_3918")

single_variable  = [1, 2, 3];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: TE@219 - Comparing [] parameter, with a value of [1,2,3], against expected shape of EMPTY-ERROR.
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [1,2,3]
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3919, error_mess);
printTestName("checkParam_empty_3919")

single_variable  = 0n;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3920, error_mess);
printTestName("checkParam_empty_3920")

single_variable  = false;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3921, error_mess);
printTestName("checkParam_empty_3921")

single_variable  = new Date('');
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'date' must not be empty for the value null
CHECKER checkParam_empty()
ACTUAL TYPE 'date'
 VALUES null
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3922, error_mess);
printTestName("checkParam_empty_3922")

single_variable  = (x) => x;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3923, error_mess);
printTestName("checkParam_empty_3923")

single_variable  = NaN;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'number' must not be empty for the value NaN
CHECKER checkParam_empty()
ACTUAL TYPE 'number'
 VALUES NaN
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3924, error_mess);
printTestName("checkParam_empty_3924")

single_variable  = { a: 3 };
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3925, error_mess);
printTestName("checkParam_empty_3925")

single_variable  = /(?:)/;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'regexp' must not be empty for the value /(?:)/ ~~~regex~~~
CHECKER checkParam_empty()
ACTUAL TYPE 'regexp'
 VALUES /(?:)/ ~~~regex~~~
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3926, error_mess);
printTestName("checkParam_empty_3926")

single_variable  = '';
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'string' must not be empty for the value ''
CHECKER checkParam_empty()
ACTUAL TYPE 'string'
 VALUES ""
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3927, error_mess);
printTestName("checkParam_empty_3927")

single_variable  = Symbol('');
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3928, error_mess);
printTestName("checkParam_empty_3928")













// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[[[[[[ 1             ]]]]]]];
single_signature = [[[[[[[ 'EMPTY-ERROR' ]]]]]]];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3929, error_mess);
printTestName("checkParam_empty_3929")

single_variable  = [[[[[[[ ''            ]]]]]]];
single_signature = [[[[[[[ 'EMPTY-ERROR' ]]]]]]];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[[[[[""]]]]]]]
EMPTY ASSERTION [[[[[[["EMPTY-ERROR"]]]]]]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3930, error_mess);
printTestName("checkParam_empty_3930")

single_variable  =    [[[[[[ ''            ]]]]]];
single_signature = [  [[[[[[ 'EMPTY-ERROR' ]]]]]]  ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@314 - Variable '' must be an array but is instead a 'string', : ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[[[[""]]]]]]
EMPTY ASSERTION [[[[[[["EMPTY-ERROR"]]]]]]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3931, error_mess);
printTestName("checkParam_empty_3931")

single_variable  = [  [[[[[[ ''            ]]]]]]  ];
single_signature =    [[[[[[ 'EMPTY-ERROR' ]]]]]];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3932, error_mess);
printTestName("checkParam_empty_3932")
// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: { c: { d: { e: 12            } } } } };
single_signature = { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3933, error_mess);
printTestName("checkParam_empty_3933")

single_variable  = { a: { b: { c: { d: { e: ''            } } } } };
single_signature = { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } };
error_mess = `PRE_test_3900() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:{b:{c:{d:{e:""}}}}}
EMPTY ASSERTION {"a":{"b":{"c":{"d":{"e":"EMPTY-ERROR"}}}}}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3934, error_mess);
printTestName("checkParam_empty_3934")

single_variable  = { a: { b: { c: { d: 12              } } } };
single_signature = { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } };
error_mess = `PRE_test_3900() PRE-FUNC: EE@303 - Bad empty type key, '{e:"EMPTY-ERROR"}', must be either 'EMPTY-OK','EMPTY-ER','EMPTY-IG','OK','ER','IG'
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:{b:{c:{d:12}}}}
EMPTY ASSERTION {"a":{"b":{"c":{"d":{"e":"EMPTY-ERROR"}}}}}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3935, error_mess);
printTestName("checkParam_empty_3935")

single_variable  = { a: { b: { c: { d: { e: 12 }   } } } };
single_signature = { a: { b: { c: { d: 'EMPTY-ERROR'    } } } };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3936, error_mess);
printTestName("checkParam_empty_3936")
// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3937, error_mess);
printTestName("checkParam_empty_3937")

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] };
error_mess = `PRE_test_3900() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{b:[{c:[{d:[{e:""}]}]}]}]}
EMPTY ASSERTION {"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3938, error_mess);
printTestName("checkParam_empty_3938")

single_variable  = { a: [ { b: [ { c: [ { d: [ ''              ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] };
error_mess = `PRE_test_3900() PRE-FUNC: TE@216 -  Key 'e', which has a type of 'EMPTY-ERROR', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:[{b:[{c:[{d:[""]}]}]}]}
EMPTY ASSERTION {"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3939, error_mess);
printTestName("checkParam_empty_3939")

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ 'EMPTY-ERROR'        ] } ] } ] } ] };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3940, error_mess);
printTestName("checkParam_empty_3940")




















// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3941, error_mess);
printTestName("checkParam_empty_3941")

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[{e:""}]}]}]}]}]
EMPTY ASSERTION [{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3942, error_mess);
printTestName("checkParam_empty_3942")

single_variable  = [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = `PRE_test_3900() PRE-FUNC: TE@216 -  Key 'e', which has a type of 'EMPTY-ERROR', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[12]}]}]}]}]
EMPTY ASSERTION [{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3943, error_mess);
printTestName("checkParam_empty_3943")

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ 'EMPTY-ERROR'        ] } ] } ] } ] } ];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3944, error_mess);
printTestName("checkParam_empty_3944")
// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3945, error_mess);
printTestName("checkParam_empty_3945")

single_variable  = [[ { a: { b: [[ { c: { d: [[ ''        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[{a:{b:[[{c:{d:[[""]]}}]]}}]]
EMPTY ASSERTION [[{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3946, error_mess);
printTestName("checkParam_empty_3946")

single_variable  =  [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]];
error_mess = `PRE_test_3900() PRE-FUNC: EE@314 - Variable {a:{b:[[{c:{d:[[1]]}}]]}} must be an array but is instead a 'object', : {a:{b:[[{c:{d:[[1]]}}]]}}
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:{b:[[{c:{d:[[1]]}}]]}}]
EMPTY ASSERTION [[{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3947, error_mess);
printTestName("checkParam_empty_3947")

single_variable  = [[ { a: { b: [[ { c: { d: [[ ''        ]] } } ]] } } ]];
single_signature =  [ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ];
error_mess = `PRE_test_3900() PRE-FUNC: TE@216 -  Key 'a', which has a type of '{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[{a:{b:[[{c:{d:[[""]]}}]]}}]]
EMPTY ASSERTION [{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3948, error_mess);
printTestName("checkParam_empty_3948")
// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: [[ { c: { d: [[ 1             ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } };
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3949, error_mess);
printTestName("checkParam_empty_3949")

single_variable  = { a: { b: [[ { c: { d: [[ ''            ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } };
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:{b:[[{c:{d:[[""]]}}]]}}
EMPTY ASSERTION {"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3950, error_mess);
printTestName("checkParam_empty_3950")

single_variable  =      { b: [[ { c: { d: [[ ''            ]] } } ]] };
single_signature = { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } };
error_mess = `PRE_test_3900() PRE-FUNC: TE@216 -  Key 'a', which has a type of '{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {b:[[{c:{d:[[""]]}}]]}
EMPTY ASSERTION {"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3951, error_mess);
printTestName("checkParam_empty_3951")

single_variable  = { a: { b: [[ { c: { d: [[ ''            ]] } } ]] } };
single_signature =      { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] };
error_mess = `PRE_test_3900() PRE-FUNC: TE@216 -  Key 'b', which has a type of '[[{c:{d:[["EMPTY-ERROR"]]}}]]', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:{b:[[{c:{d:[[""]]}}]]}}
EMPTY ASSERTION {"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3952, error_mess);
printTestName("checkParam_empty_3952")


















// // // /////////////////////////////////////////////////////////////////////////////////////////////
single_variable  = null;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@308 - A 'null' cannot be empty, so the state of 'EMPTY-ERROR' is illegal for the value 'null'
CHECKER checkParam_empty()
ACTUAL TYPE 'null'
 VALUES null
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3953, error_mess);
printTestName("checkParam_empty_3953")

single_variable  = undefined;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@308 - A 'undefined' cannot be empty, so the state of 'EMPTY-ERROR' is illegal for the value 'undefined'
CHECKER checkParam_empty()
ACTUAL TYPE 'undefined'
 VALUES undefined
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3954, error_mess);
printTestName("checkParam_empty_3954")

single_variable  = [];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'array' must not be empty for the value []
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES []
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3955, error_mess);
printTestName("checkParam_empty_3955")

single_variable  = {};
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'object' must not be empty for the value { }
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {}
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3956, error_mess);
printTestName("checkParam_empty_3956")

single_variable  = [];
single_signature = ['EMPTY-ERROR'];
error_mess = `PRE_test_3900() PRE-FUNC: EE@321 - Empty array has no types
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES []
EMPTY ASSERTION ["EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3957, error_mess);
printTestName("checkParam_empty_3957")

single_variable  = {};
single_signature = { a: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() PRE-FUNC: TE@216 -  Key 'a', which has a type of 'EMPTY-ERROR', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {}
EMPTY ASSERTION {"a":"EMPTY-ERROR"}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3958, error_mess);
printTestName("checkParam_empty_3958")
// // ////////////////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3959, error_mess);
printTestName("checkParam_empty_3959")

single_variable  = 123n;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3960, error_mess);
printTestName("checkParam_empty_3960")

single_variable  = false;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3961, error_mess);
printTestName("checkParam_empty_3961")

single_variable  = new Date('1999-12-12');
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3962, error_mess);
printTestName("checkParam_empty_3962")

single_variable  = (x) => x;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3963, error_mess);
printTestName("checkParam_empty_3963")

single_variable  = 12;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3964, error_mess);
printTestName("checkParam_empty_3964")

single_variable  = { a: 12 };
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3965, error_mess);
printTestName("checkParam_empty_3965")

single_variable  = /d/;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3966, error_mess);
printTestName("checkParam_empty_3966")

single_variable  = 'a-string';
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3967, error_mess);
printTestName("checkParam_empty_3967")

single_variable  = Symbol('sym');
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3968, error_mess);
printTestName("checkParam_empty_3968")






















// // ///////////////////////////////////////////////////////////////

single_variable  = [1];
single_signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3969, error_mess);
printTestName("checkParam_empty_3969")

single_variable  = [1, 2];
single_signature = ['EMPTY-ERROR', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3970, error_mess);
printTestName("checkParam_empty_3970")

single_variable  = [1, 2, 'three'];
single_signature = ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3971, error_mess);
printTestName("checkParam_empty_3971")

single_variable  = [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ];
single_signature = [['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR']];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3972, error_mess);
printTestName("checkParam_empty_3972")
































single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                       [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                       [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ];
single_signature = [   [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']],
                       [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']],
                       [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR']]   ];
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3973, error_mess);
printTestName("checkParam_empty_3973")

single_variable  = [   [ [1, 2, 3],                                     [1, 2, 3],                                     [1,  2,  3]                                   ],
                       [ [1, 2, 3],                                     [1, 2, 3],                                     [1,  2,  3]                                   ],
                       [ [1, 2, 3],                                     [1, 2, 3],                                     [1, '', 3]                                   ]    ];
single_signature = [   [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'] ],
                       [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'] ],
                       [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'] ]    ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"",3]]]
EMPTY ASSERTION [[["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]],[["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]],[["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3974, error_mess);
printTestName("checkParam_empty_3974-1")


single_variable  = [   [ [1, 2, 3],                                     [1, 2, 3],                                     [1, '', 3]                                    ]    ];
single_signature = [   [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'], ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'] ]    ];

error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[1,2,3],[1,2,3],[1,"",3]]]
EMPTY ASSERTION [[["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3974, error_mess);
printTestName("checkParam_empty_3974-2")

single_variable  = [   [ [1, '', 3]                                    ]    ];
single_signature = [   [ ['EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR'] ]    ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[1,"",3]]]
EMPTY ASSERTION [[["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3974, error_mess);
printTestName("checkParam_empty_3974-3")



single_variable  = [   [ [''           ] ]    ];
single_signature = [   [ ['EMPTY-ERROR'] ]    ];
error_mess = `PRE_test_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[""]]]
EMPTY ASSERTION [[["EMPTY-ERROR"]]]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3974, error_mess);
printTestName("checkParam_empty_3974-4")




















// ////////////////////////////////////////

single_variable  = 'not-object';
single_signature = { an_object: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() PRE-FUNC: TE@201 - checkParam_empty() called with '{}' against '!{}'. Contrasting a string type of value not-object, with '{"an_object":"EMPTY-ERROR"}' an object !!! string <> object
CHECKER checkParam_empty()
ACTUAL TYPE 'string'
 VALUES "not-object"
EMPTY ASSERTION {"an_object":"EMPTY-ERROR"}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3975, error_mess);
printTestName("checkParam_empty_3975")

single_variable  = '';
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'string' must not be empty for the value ''
CHECKER checkParam_empty()
ACTUAL TYPE 'string'
 VALUES ""
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3976, error_mess);
printTestName("checkParam_empty_3976")

single_variable  = {};
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'object' must not be empty for the value { }
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {}
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3977, error_mess);
printTestName("checkParam_empty_3977")

single_variable  = [];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'array' must not be empty for the value []
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES []
EMPTY ASSERTION EMPTY-ERROR
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3978, error_mess);
printTestName("checkParam_empty_3978")

single_variable  = { a: 1, b: 2 };
single_signature = { a: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() PRE-FUNC: EE@315 - Extra key in checked object - (b:2)
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:1,b:2}
EMPTY ASSERTION {"a":"EMPTY-ERROR"}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3979, error_mess);
printTestName("checkParam_empty_3979")

single_variable  = { a: undefined };
single_signature = { a: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() PRE-FUNC: EE@302 - Type cannot be empty 'a' EMPTY-ERROR is a undefined :: undefined
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:undefined}
EMPTY ASSERTION {"a":"EMPTY-ERROR"}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3980, error_mess);
printTestName("checkParam_empty_3980")

single_variable  = { a: null };
single_signature = { a: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() PRE-FUNC: EE@302 - Type cannot be empty 'a' EMPTY-ERROR is a null :: null
CHECKER checkParam_empty()
ACTUAL TYPE 'object'
 VALUES {a:null}
EMPTY ASSERTION {"a":"EMPTY-ERROR"}
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3981, error_mess);
printTestName("checkParam_empty_3981")

single_variable  = 'a-string';
single_signature = ['EMPTY-ERROR'];
error_mess = `PRE_test_3900() PRE-FUNC: TE@217 - Comparing 'string' parameter, with a value of a-string, to expected shape of ["EMPTY-ERROR"].
CHECKER checkParam_empty()
ACTUAL TYPE 'string'
 VALUES "a-string"
EMPTY ASSERTION ["EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3982, error_mess);
printTestName("checkParam_empty_3982")

single_variable  = console;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3983, error_mess);
printTestName("checkParam_empty_3983")





















// // ///////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3984, error_mess);
printTestName("checkParam_empty_3984")

single_variable  = 123n;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3985, error_mess);
printTestName("checkParam_empty_3985")

single_variable  = false;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3986, error_mess);
printTestName("checkParam_empty_3986")

single_variable  = new Date('1999-12-12');
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3987, error_mess);
printTestName("checkParam_empty_3987")

single_variable  = (x) => x;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3988, error_mess);
printTestName("checkParam_empty_3988")

single_variable  = 12;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3989, error_mess);
printTestName("checkParam_empty_3989")

single_variable  = { a: 12 };
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3990, error_mess);
printTestName("checkParam_empty_3990")

single_variable  = /d/;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3991, error_mess);
printTestName("checkParam_empty_3991")

single_variable  = 'a-string';
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3992, error_mess);
printTestName("checkParam_empty_3992")

single_variable  = Symbol('sym');
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_checkParam_empty_single(single_variable, single_signature, 3993, error_mess);
printTestName("checkParam_empty_3993")





















// //  ////////////////////////////////////////////////////////////////////////

single_variable  = "a-s";
single_signature =  "invalid-empty";
error_mess = `PRE_test_3900() PRE-FUNC: EE@304 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'invalid-empty'
CHECKER checkParam_empty()
ACTUAL TYPE 'string'
 VALUES "a-s"
EMPTY ASSERTION invalid-empty
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3994, error_mess);
printTestName("checkParam_empty_3994")

single_variable  = [12, false, 'a string'];
single_signature =  ['EMPTY-OK'];
error_mess = `PRE_test_3900() PRE-FUNC: EE@305 - Pointless as ['EMPTY-OK'] matches all
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [12,false,"a string"]
EMPTY ASSERTION ["EMPTY-OK"]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3995, error_mess);
printTestName("checkParam_empty_3995")

single_variable  = ['first', 'middle', 'last'];
single_signature =  ['EMPTY-ERROR', 'INVALID-EMPTY-TYPE', 'EMPTY-OK'];
error_mess = `PRE_test_3900() PRE-FUNC: EE@312 - ELEMENT '1' is incorrect type, 'INVALID-EMPTY-TYPE', only [ER,EMPTY-ERROR,EMPTY-OK,OK,EMPTY-IGNORE,IG] allowed : ["first","middle","last"]
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["first","middle","last"]
EMPTY ASSERTION ["EMPTY-ERROR","INVALID-EMPTY-TYPE","EMPTY-OK"]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3996, error_mess);
printTestName("checkParam_empty_3996")

single_variable  = ['first', 'middle', 'last'];
single_signature =  ['EMPTY-ERROR', [], 'EMPTY-OK'];
error_mess = `PRE_test_3900() PRE-FUNC: EE@314 - Variable middle must be an array but is instead a 'string', : middle
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["first","middle","last"]
EMPTY ASSERTION ["EMPTY-ERROR",[],"EMPTY-OK"]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3997, error_mess);
printTestName("checkParam_empty_3997")


single_variable  = [];
single_signature =  ['EMPTY-ERROR'];
error_mess = `PRE_test_3900() PRE-FUNC: EE@321 - Empty array has no types
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES []
EMPTY ASSERTION ["EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3900(a_var)`;
test_pre_checkParam_empty_single(single_variable, single_signature, 3998, error_mess);
    printTestName("checkParam_empty_3998") 



if (fail_count>0) {
  the_problem = `check-tests/checkParam_empty_03900.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;