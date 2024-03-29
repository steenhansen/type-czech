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



function test_pre_checkParam_empty_multi(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  pass_count += 1;

  function PRE_test_3800(an_array) {
    return type_czech.checkParam_empty(an_array, signature_of_parameters);
  }

  function pre_checkParam_empty_3800() {}
  pre_checkParam_empty_3800 = type_czech.linkUp(pre_checkParam_empty_3800, PRE_test_3800);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_checkParam_empty_3800(parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_checkParam_empty_3800(parameters_array);
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
  afterCheck(parameters_array, signature_of_parameters, before_var_value, error_id);
}



// /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { x: [{ y: 'z'           }] }, { x: [{ y: 'z'           }] } ];
multi_signature = [ { x: [{ y: 'EMPTY-ERROR' }] }, { x: [{ y: 'EMPTY-ERROR' }] }];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3801, error_mess);
printTestName("checkParam_empty_3801")


multi_variable  = [ { x: [{ y: 'full'        }] }, { x: [{ y: ''            }] } ];
multi_signature = [ { x: [{ y: 'EMPTY-ERROR' }] }, { x: [{ y: 'EMPTY-ERROR' }] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@301 -  key 'y' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{x:[{y:"full"}]},{x:[{y:""}]}]
EMPTY ASSERTION [{"x":[{"y":"EMPTY-ERROR"}]},{"x":[{"y":"EMPTY-ERROR"}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3802, error_mess);
printTestName("checkParam_empty_3802")

multi_variable  = [ { a: [1, 2, 3] },                                   { b: [1, 2, 3] } ];
multi_signature = [ { a: ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] }, { b: ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] }];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3803, error_mess);
printTestName("checkParam_empty_3803")

multi_variable  = [ { a: [1, 2, 3] },       { c: [1, NaN, 3] } ];
multi_signature = [ { a: ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] }, { c: ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[1,2,3]},{c:[1,NaN,3]}]
EMPTY ASSERTION [{"a":["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]},{"c":["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3804, error_mess);
printTestName("checkParam_empty_3804")

multi_variable  = [ { r: {} },            { t: {} } ];
multi_signature = [ { r: 'EMPTY-OK' }, { t: 'EMPTY-ERROR' } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@309 - Key 't' was understood to be 'EMPTY-ERROR' but was rather '{}'
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{r:{}},{t:{}}]
EMPTY ASSERTION [{"r":"EMPTY-OK"},{"t":"EMPTY-ERROR"}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3805, error_mess);
printTestName("checkParam_empty_3805")
// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] },
                    { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] },
                    { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3806, error_mess);
printTestName("checkParam_empty_3806")


multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] }, { a: [{ r: [ [],            [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EMPTY ASSERTION [{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]},{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3807, error_mess);
printTestName("checkParam_empty_3807")






multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] }, { a: [{ r: [ [123],         [],              987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@321 - Empty array has no types
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EMPTY ASSERTION [{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]},{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3808, error_mess);
printTestName("checkParam_empty_3808")



multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,           false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,           false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-IGNORE', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = ``;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3809, error_mess);
printTestName("checkParam_empty_3809")


multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-IGNORE', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = ``;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3810, error_mess);
printTestName("checkParam_empty_3810")

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'),  (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date(''),            (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '4' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,null,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EMPTY ASSERTION [{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]},{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3811, error_mess);
printTestName("checkParam_empty_3811")

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,       12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,       12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-IGNORE', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3812, error_mess);
printTestName("checkParam_empty_3812")

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,           { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      NaN,           { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '6' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,NaN,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EMPTY ASSERTION [{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]},{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3813, error_mess);
printTestName("checkParam_empty_3813")

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: '' },     { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: '' },     { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3814, error_mess);
printTestName("checkParam_empty_3814")

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },            /d/,           'abc',         Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: '' },            /d/,           'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@301 -  key 'b' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:""},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EMPTY ASSERTION [{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]},{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3815, error_mess);
printTestName("checkParam_empty_3815")

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /(?:)/,        'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '9' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/(?:)/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EMPTY ASSERTION [{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]},{"a":[{"r":["EMPTY-ERROR",["EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{"b":"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3816, error_mess);
printTestName("checkParam_empty_3816")

multi_variable  = [ { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] }, { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] } ];
multi_signature = [ { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-IGNORE' ] }] }, { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-IGNORE' ] }] } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3817, error_mess);
printTestName("checkParam_empty_3817")
// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ 12, [] ];
multi_signature = [ 'EMPTY-ERROR', 'EMPTY-ERROR' ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [12,[]]
EMPTY ASSERTION ["EMPTY-ERROR","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3818, error_mess);
printTestName("checkParam_empty_3818")

multi_variable  = [ [1, 2, 3],        [1, 2, 3] ];
multi_signature = [ ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'], ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR']];  // Odd one here but correct
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3819, error_mess);
printTestName("checkParam_empty_3819")

multi_variable  = [ 0n, 0n ];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3820, error_mess);
printTestName("checkParam_empty_3820")

multi_variable  = [ false,      false ];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3821, error_mess);
printTestName("checkParam_empty_3821")

multi_variable  = [ new Date(''), new Date('') ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [null,null]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3822, error_mess);
printTestName("checkParam_empty_3822")

multi_variable  = [ (x) => x,    (x) => x ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3823, error_mess);
printTestName("checkParam_empty_3823")

multi_variable  = [ 12,        NaN ];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [12,NaN]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3824, error_mess);
printTestName("checkParam_empty_3824")

multi_variable  = [ { a: '' },    { a: 3 } ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3825, error_mess);
printTestName("checkParam_empty_3825")

multi_variable  = [ /d/,       /(?:)/ ];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [/d/ ~~~regex~~~,/(?:)/ ~~~regex~~~]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3826, error_mess);
printTestName("checkParam_empty_3826")

multi_variable  = [ '',           '' ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["",""]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3827, error_mess);
printTestName("checkParam_empty_3827")

multi_variable  = [ Symbol(''), Symbol('') ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3828, error_mess);
printTestName("checkParam_empty_3828")
// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ [[[[[[[ 1          ]]]]]]], [[[[[[[ 1             ]]]]]]] ];
multi_signature = [ [[[[[[[ 'EMPTY-OK' ]]]]]]], [[[[[[[ 'EMPTY-ERROR' ]]]]]]] ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3829, error_mess);
printTestName("checkParam_empty_3829")

multi_variable  = [ [[[[[[[ ''         ]]]]]]], [[[[[[[ ''            ]]]]]]] ];
multi_signature = [ [[[[[[[ 'EMPTY-OK' ]]]]]]], [[[[[[[ 'EMPTY-ERROR' ]]]]]]] ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[[[[[[""]]]]]]],[[[[[[[""]]]]]]]]
EMPTY ASSERTION [[[[[[[["EMPTY-OK"]]]]]]],[[[[[[["EMPTY-ERROR"]]]]]]]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3830, error_mess);
printTestName("checkParam_empty_3830")

multi_variable  = [  [[[[[[ ''         ]]]]]],    [[[[[[ ''            ]]]]]]    ];
multi_signature = [  [[[[[[ 'EMPTY-OK' ]]]]]], [  [[[[[[ 'EMPTY-ERROR' ]]]]]]  ] ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@314 - Variable '' must be an array but is instead a 'string', : ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[[[[[""]]]]]],[[[[[[""]]]]]]]
EMPTY ASSERTION [[[[[[["EMPTY-OK"]]]]]],[[[[[[["EMPTY-ERROR"]]]]]]]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3831, error_mess);
printTestName("checkParam_empty_3831")

multi_variable  = [ [  [[[[[[ ''      ]]]]]]  ], [  [[[[[[ ''            ]]]]]]  ]      ];
multi_signature = [ [[[[[[ 'EMPTY-OK' ]]]]]],          [[[[[[ 'EMPTY-ERROR' ]]]]]]         ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3832, error_mess);
printTestName("checkParam_empty_3832")
// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: { b: { c: { d: { e: 12         } } } } }, { a: { b: { c: { d: { e: 12            } } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'EMPTY-OK' } } } } }, { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3833, error_mess);
printTestName("checkParam_empty_3833")
multi_variable  = [ { a: { b: { c: { d: { e: ''         } } } } }, { a: { b: { c: { d: { e: ''            } } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'EMPTY-OK' } } } } }, { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:{b:{c:{d:{e:""}}}}},{a:{b:{c:{d:{e:""}}}}}]
EMPTY ASSERTION [{"a":{"b":{"c":{"d":{"e":"EMPTY-OK"}}}}},{"a":{"b":{"c":{"d":{"e":"EMPTY-ERROR"}}}}}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3834, error_mess);
printTestName("checkParam_empty_3834")
/* NOTE - this error message blames the multi_signature, not the values, points in the wrong direction to fix ! */
/* Cannot change as checkParam_emptyExtra() and checkParam_typeExtra() rely on this behavior, Star Fleet can fix it */
multi_variable  = [ { a: { b: { c: { d: 12            } } } }, { a: { b: { c: { d: 12                   } } } } ];
multi_signature = [ { a: { b: { c: { d: 'EMPTY-OK' } } } }, { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@303 - Bad empty type key, '{e:"EMPTY-ERROR"}', must be either 'EMPTY-OK','EMPTY-ER','EMPTY-IG','OK','ER','IG'
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:{b:{c:{d:12}}}},{a:{b:{c:{d:12}}}}]
EMPTY ASSERTION [{"a":{"b":{"c":{"d":"EMPTY-OK"}}}},{"a":{"b":{"c":{"d":{"e":"EMPTY-ERROR"}}}}}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3835, error_mess);
printTestName("checkParam_empty_3835")

multi_variable  = [ { a: { b: { c: { d: { e: 12 }    } } } }, { a: { b: { c: { d: { e: 12 }        } } } } ];
multi_signature = [ { a: { b: { c: { d: 'EMPTY-OK'   } } } }, { a: { b: { c: { d: 'EMPTY-ERROR'    } } } } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3836, error_mess);
printTestName("checkParam_empty_3836")
// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12         } ] } ] } ] } ] },  { a: [ { b: [ { c: [ { d: [ { e: 12            } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-OK' } ] } ] } ] } ] },  { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3837, error_mess);
printTestName("checkParam_empty_3837")

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: ''         } ] } ] } ] } ] },  { a: [ { b: [ { c: [ { d: [ { e: ''            } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-OK' } ] } ] } ] } ] },  { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[{e:""}]}]}]}]},{a:[{b:[{c:[{d:[{e:""}]}]}]}]}]
EMPTY ASSERTION [{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-OK"}]}]}]}]},{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3838, error_mess);
printTestName("checkParam_empty_3838")

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ ''         ] } ] } ] } ] },  { a: [ { b: [ { c: [ { d: [ ''                   ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ 'EMPTY-OK' ] } ] } ] } ] },  { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = `PRE_test_3800() PRE-FUNC: TE@216 -  Key 'e', which has a type of 'EMPTY-ERROR', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[""]}]}]}]},{a:[{b:[{c:[{d:[""]}]}]}]}]
EMPTY ASSERTION [{"a":[{"b":[{"c":[{"d":["EMPTY-OK"]}]}]}]},{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3839, error_mess);
printTestName("checkParam_empty_3839")
multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] },       { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ 'EMPTY-OK'      ] } ] } ] } ] },  { a: [ { b: [ { c: [ { d: [ 'EMPTY-ERROR'        ] } ] } ] } ] } ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3840, error_mess);
printTestName("checkParam_empty_3840")
// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [  [ { a: [ { b: [ { c: [ { d: [ { e: 12            } ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ { e: 12            } ] } ] } ] } ] } ]  ];
multi_signature = [  [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-OK' } ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ] ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3841, error_mess);
printTestName("checkParam_empty_3841")

multi_variable  = [  [ { a: [ { b: [ { c: [ { d: [ { e: ''         } ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ { e: ''            } ] } ] } ] } ] } ]  ];
multi_signature = [  [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-OK' } ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ]  ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[{a:[{b:[{c:[{d:[{e:""}]}]}]}]}],[{a:[{b:[{c:[{d:[{e:""}]}]}]}]}]]
EMPTY ASSERTION [[{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-OK"}]}]}]}]}],[{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3842, error_mess);
printTestName("checkParam_empty_3842")

multi_variable  = [  [ { a: [ { b: [ { c: [ { d: [ 12         ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ]  ];
multi_signature = [  [ { a: [ { b: [ { c: [ { d: [ 'EMPTY-OK' ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ]  ];
error_mess = `PRE_test_3800() PRE-FUNC: TE@216 -  Key 'e', which has a type of 'EMPTY-ERROR', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[{a:[{b:[{c:[{d:[12]}]}]}]}],[{a:[{b:[{c:[{d:[12]}]}]}]}]]
EMPTY ASSERTION [[{"a":[{"b":[{"c":[{"d":["EMPTY-OK"]}]}]}]}],[{"a":[{"b":[{"c":[{"d":[{"e":"EMPTY-ERROR"}]}]}]}]}]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3843, error_mess);
printTestName("checkParam_empty_3843")

multi_variable  = [  [ { a: [ { b: [ { c: [ { d: [ 12         ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ]  ];
multi_signature = [  [ { a: [ { b: [ { c: [ { d: [ 'EMPTY-OK' ] } ] } ] } ] } ],  [ { a: [ { b: [ { c: [ { d: [ 'EMPTY-ERROR'        ] } ] } ] } ] } ]  ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3844, error_mess);
printTestName("checkParam_empty_3844")
// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [  [[ { a: { b: [[ { c: { d: [[ 1          ]] } } ]] } } ]],       [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]]  ];
multi_signature = [  [[ { a: { b: [[ { c: { d: [[ 'EMPTY-OK' ]] } } ]] } } ]],  [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]]  ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3845, error_mess);
printTestName("checkParam_empty_3845")

multi_variable  = [  [[ { a: { b: [[ { c: { d: [[ ''         ]] } } ]] } } ]],  [[ { a: { b: [[ { c: { d: [[ ''        ]] } } ]] } } ]]  ];
multi_signature = [  [[ { a: { b: [[ { c: { d: [[ 'EMPTY-OK' ]] } } ]] } } ]],  [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]]  ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[{a:{b:[[{c:{d:[[""]]}}]]}}]],[[{a:{b:[[{c:{d:[[""]]}}]]}}]]]
EMPTY ASSERTION [[[{"a":{"b":[[{"c":{"d":[["EMPTY-OK"]]}}]]}}]],[[{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3846, error_mess);
printTestName("checkParam_empty_3846")

multi_variable  = [    [ { a: { b: [[ { c: { d: [[ 1          ]] } } ]] } } ],   [ { a: { b: [[ { c: { d: [[ 1             ]] } } ]] } } ]   ];
multi_signature = [  [ [ { a: { b: [[ { c: { d: [[ 'EMPTY-OK' ]] } } ]] } } ] ], [ [ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ] ] ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@314 - Variable {a:{b:[[{c:{d:[[1]]}}]]}} must be an array but is instead a 'object', : {a:{b:[[{c:{d:[[1]]}}]]}}
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[{a:{b:[[{c:{d:[[1]]}}]]}}],[{a:{b:[[{c:{d:[[1]]}}]]}}]]
EMPTY ASSERTION [[[{"a":{"b":[[{"c":{"d":[["EMPTY-OK"]]}}]]}}]],[[{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3847, error_mess);
printTestName("checkParam_empty_3847")

multi_variable  = [  [ [ { a: { b: [[ { c: { d: [[ ''         ]] } } ]] } } ] ], [ [ { a: { b: [[ { c: { d: [[ ''            ]] } } ]] } } ] ]  ];
multi_signature = [    [ { a: { b: [[ { c: { d: [[ 'EMPTY-OK' ]] } } ]] } } ],   [ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]    ];
error_mess = `PRE_test_3800() PRE-FUNC: TE@216 -  Key 'a', which has a type of '{b:[[{c:{d:[["EMPTY-OK"]]}}]]}', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[[{a:{b:[[{c:{d:[[""]]}}]]}}]],[[{a:{b:[[{c:{d:[[""]]}}]]}}]]]
EMPTY ASSERTION [[{"a":{"b":[[{"c":{"d":[["EMPTY-OK"]]}}]]}}],[{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3848, error_mess);
printTestName("checkParam_empty_3848")
// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [  { a: { b: [[ { c: { d: [[ 1          ]] } } ]] } },  { a: { b: [[ { c: { d: [[ 1             ]] } } ]] } }  ];
multi_signature = [  { a: { b: [[ { c: { d: [[ 'EMPTY-OK' ]] } } ]] } },  { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } }  ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3849, error_mess);
printTestName("checkParam_empty_3849")

multi_variable  = [  { a: { b: [[ { c: { d: [[ ''         ]] } } ]] } },  { a: { b: [[ { c: { d: [[ ''            ]] } } ]] } }  ];
multi_signature = [  { a: { b: [[ { c: { d: [[ 'EMPTY-OK' ]] } } ]] } },  { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } }  ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:{b:[[{c:{d:[[""]]}}]]}},{a:{b:[[{c:{d:[[""]]}}]]}}]
EMPTY ASSERTION [{"a":{"b":[[{"c":{"d":[["EMPTY-OK"]]}}]]}},{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3850, error_mess);
printTestName("checkParam_empty_3850")

multi_variable  = [      { b: [[ { c: { d: [[ ''         ]] } } ]] },         { b: [[ { c: { d: [[ ''            ]] } } ]] }      ];
multi_signature = [ { a: { b: [[ { c: { d: [[ 'EMPTY-OK' ]] } } ]] } },  { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] }  }   ];
error_mess = `PRE_test_3800() PRE-FUNC: TE@216 -  Key 'a', which has a type of '{b:[[{c:{d:[["EMPTY-OK"]]}}]]}', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{b:[[{c:{d:[[""]]}}]]},{b:[[{c:{d:[[""]]}}]]}]
EMPTY ASSERTION [{"a":{"b":[[{"c":{"d":[["EMPTY-OK"]]}}]]}},{"a":{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3851, error_mess);
printTestName("checkParam_empty_3851")

multi_variable  = [  { a: { b: [[ { c: { d: [[ ''          ]] } } ]] } },  { a: { b: [[ { c: { d: [[ ''            ]] } } ]] } }  ];
multi_signature = [       { b: [[ { c: { d: [[ 'EMPTY-EOK' ]] } } ]] },         { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] }    ];
error_mess = `PRE_test_3800() PRE-FUNC: TE@216 -  Key 'b', which has a type of '[[{c:{d:[["EMPTY-EOK"]]}}]]', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:{b:[[{c:{d:[[""]]}}]]}},{a:{b:[[{c:{d:[[""]]}}]]}}]
EMPTY ASSERTION [{"b":[[{"c":{"d":[["EMPTY-EOK"]]}}]]},{"b":[[{"c":{"d":[["EMPTY-ERROR"]]}}]]}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3852, error_mess);
printTestName("checkParam_empty_3852")

// // // /////////////////////////////////////////////////////////////////////////////////////////////
multi_variable  = [ 2,              null ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR' ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [2,null]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3853, error_mess);
printTestName("checkParam_empty_3853")

multi_variable  = [ 3,         undefined ];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [3,undefined]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3854, error_mess);
printTestName("checkParam_empty_3854")

multi_variable  = [  [],         []  ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR' ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[],[]]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3855, error_mess);
printTestName("checkParam_empty_3855")

multi_variable  = [  {},         {}  ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{},{}]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3856, error_mess);
printTestName("checkParam_empty_3856")

multi_variable  = [  [], [] ];
multi_signature = [  'EMPTY-OK',  ['EMPTY-OK']  ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@321 - Empty array has no types
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[],[]]
EMPTY ASSERTION ["EMPTY-OK",["EMPTY-OK"]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3857, error_mess);
printTestName("checkParam_empty_3857")

multi_variable  = [  { a: '' },          { b: '' }  ];
multi_signature = [  { a: 'EMPTY-OK' },  { b: 'EMPTY-ERROR' }  ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@301 -  key 'b' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:""},{b:""}]
EMPTY ASSERTION [{"a":"EMPTY-OK"},{"b":"EMPTY-ERROR"}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3858, error_mess);
printTestName("checkParam_empty_3858")
// // // ////////////////////////////////////////////////////////////////

multi_variable  = [ [], []  ];
multi_signature = [ 'EMPTY-IGNORE', 'EMPTY-OK' ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3859, error_mess);
printTestName("checkParam_empty_3859")

multi_variable  = [  123n, 123n, 123n ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3860, error_mess);
printTestName("checkParam_empty_3860")

multi_variable  = [  false, false, false ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3861, error_mess);
printTestName("checkParam_empty_3861")

multi_variable  = [ new Date('1999-12-12'), new Date('1999-12-12'), new Date('1999-12-12') ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3862, error_mess);
printTestName("checkParam_empty_3862")

multi_variable  = [ (x) => x, (x) => x, (x) => x ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3863, error_mess);
printTestName("checkParam_empty_3863")

multi_variable  = [  12, 34, 56 ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3864, error_mess);
printTestName("checkParam_empty_3864")

multi_variable  = [ {},          {},            { a: 12 }    ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3865, error_mess);
printTestName("checkParam_empty_3865")

multi_variable  = [ /(?:)/,      /(?:)/,         /d/        ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3866, error_mess);
printTestName("checkParam_empty_3866")

multi_variable  =  ['',         '',             'a-string' ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3867, error_mess);
printTestName("checkParam_empty_3867")

multi_variable  = [ Symbol('sym'), Symbol('sym'), Symbol('sym') ];
multi_signature =  [ 'EMPTY-OK', 'EMPTY-IGNORE', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3868, error_mess);
printTestName("checkParam_empty_3868")
// // // ///////////////////////////////////////////////////////////////

multi_variable  = [  [1],  [1]  ];
multi_signature = [  ['EMPTY-OK'], ['EMPTY-ERROR'] ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3869, error_mess);
printTestName("checkParam_empty_3869")


multi_variable  = [  [1, 2],  [1, 2]  ];
multi_signature = [  ['EMPTY-OK','EMPTY-OK'], ['EMPTY-ERROR','EMPTY-ERROR'] ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3870, error_mess);
printTestName("checkParam_empty_3870")

multi_variable  = [  [{}, NaN, ''],  [1, 2, 'three']  ];
multi_signature = [ ['EMPTY-IGNORE','EMPTY-IGNORE','EMPTY-IGNORE'],  ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3871, error_mess);
printTestName("checkParam_empty_3871")

multi_variable  = [  [ [{}, [], ''],                       [[]],       [NaN, /(?:)/, new Date('')       ] ],  [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]  ];
multi_signature = [  [ ['EMPTY-OK','EMPTY-OK','EMPTY-OK'], 'EMPTY-OK', ['EMPTY-OK','EMPTY-OK','EMPTY-OK'] ],  [ 'EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'             ]  ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3872, error_mess);
printTestName("checkParam_empty_3872")
// multi_variable  = [   [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ],
//                       [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ]         ];
// multi_signature = [   [[['EMPTY-IGNORE']]],   [[['EMPTY-ERROR']]]   ];
// error_mess = '';
// test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3873, error_mess);

// multi_variable  = [   [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1, '',  3] ]   ],
//                       [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
//                           [ [1, 2, 3], [1, 2, 3], [1, '', 3] ]    ]  ];
// multi_signature = [   [[['EMPTY-OK']]],   [[['EMPTY-ERROR']]]   ];
// error_mess = `PRE_test_3800() PRE-FUNC: EE@306 - ELEMENT '1' is asserted to be a 'EMPTY-ERROR', but is really 'EMPTY' : ''
// CHECKER checkParam_empty()
// ACTUAL TYPE 'array'
//  VALUES [[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"",3]]],[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"",3]]]]
// EMPTY ASSERTION [[[["EMPTY-OK"]]],[[["EMPTY-ERROR"]]]]
//  ORIGIN pre_checkParam_empty_3800(an_array)`;
// test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3874, error_mess);

// // ////////////////////////////////////////

multi_variable  = [ { an_object: 'a-value' }, 'not-object' ];
multi_signature = [{ an_object: 'EMPTY-ERROR' }, { mt_object: 'EMPTY-ERROR' } ];
error_mess = `PRE_test_3800() PRE-FUNC: TE@216 -  Key 'mt_object', which has a type of 'EMPTY-ERROR', is missing in the checked object
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{an_object:"a-value"},"not-object"]
EMPTY ASSERTION [{"an_object":"EMPTY-ERROR"},{"mt_object":"EMPTY-ERROR"}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3875, error_mess);
printTestName("checkParam_empty_3875")

multi_variable  = [ '',         ''            ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR' ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["",""]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3876, error_mess);
printTestName("checkParam_empty_3876")

multi_variable  = [ {},         {}            ];
multi_signature = [ 'EMPTY-IGNORE', 'EMPTY-ERROR' ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{},{}]
EMPTY ASSERTION ["EMPTY-IGNORE","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3877, error_mess);
printTestName("checkParam_empty_3877")

multi_variable  = [ [],         [] ];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR' ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[],[]]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3878, error_mess);
printTestName("checkParam_empty_3878")

multi_variable  = [ { a: 1 },             { a: 1, b: 2 }];
multi_signature = [ { a: 'EMPTY-ERROR' }, { a: 'EMPTY-ERROR' } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@315 - Extra key in checked object - (b:2)
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:1},{a:1,b:2}]
EMPTY ASSERTION [{"a":"EMPTY-ERROR"},{"a":"EMPTY-ERROR"}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3879, error_mess);
printTestName("checkParam_empty_3879")

multi_variable  = [ { v: 33 }, { a: undefined } ];
multi_signature = [ { v: 'EMPTY-OK' }, { a: 'EMPTY-ERROR' } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@302 - Type cannot be empty 'a' EMPTY-ERROR is a undefined :: undefined
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{v:33},{a:undefined}]
EMPTY ASSERTION [{"v":"EMPTY-OK"},{"a":"EMPTY-ERROR"}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3880, error_mess);
printTestName("checkParam_empty_3880")

multi_variable  = [ { j: 34 },           { a: null } ];
multi_signature = [ { j: 'EMPTY-IGNORE' }, { a: 'EMPTY-ERROR' } ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@302 - Type cannot be empty 'a' EMPTY-ERROR is a null :: null
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{j:34},{a:null}]
EMPTY ASSERTION [{"j":"EMPTY-IGNORE"},{"a":"EMPTY-ERROR"}]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3881, error_mess);
printTestName("checkParam_empty_3881")

multi_variable  = [ 'a-string',     'b-string'     ];
multi_signature = [ 'EMPTY-ERROR', ['EMPTY-ERROR'] ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@314 - Variable b-string must be an array but is instead a 'string', : b-string
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["a-string","b-string"]
EMPTY ASSERTION ["EMPTY-ERROR",["EMPTY-ERROR"]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3882, error_mess);
printTestName("checkParam_empty_3882")

multi_variable  = [{}, console];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3883, error_mess);
printTestName("checkParam_empty_3883")
// // ///////////////////////////////////////////////////////

multi_variable  = [[], []];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [[],[]]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3884, error_mess);
printTestName("checkParam_empty_3884")

multi_variable  = [ {},         123n];
multi_signature = [ 'EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3885, error_mess);
printTestName("checkParam_empty_3885")

multi_variable  = [ [],              false];
multi_signature = [ 'EMPTY-IGNORE', 'EMPTY-OK'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3886, error_mess);
printTestName("checkParam_empty_3886")

multi_variable  = [ new Date(''), new Date('')];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR' ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [null,null]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3887, error_mess);
printTestName("checkParam_empty_3887")

multi_variable  = [(x) => x, (x) => x];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3888, error_mess);
printTestName("checkParam_empty_3899")

multi_variable  = [ 12,        NaN ];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [12,NaN]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3889, error_mess);
printTestName("checkParam_empty_3889")

multi_variable  = [ { a: 12 }, {}];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [{a:12},{}]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3890, error_mess);
printTestName("checkParam_empty_3890")

multi_variable  = [ /d/, /(?:)/];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [/d/ ~~~regex~~~,/(?:)/ ~~~regex~~~]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3891, error_mess);
printTestName("checkParam_empty_3891")

multi_variable  = ['a-string', ''];
multi_signature = ['EMPTY-OK', 'EMPTY-ERROR'];
error_mess = `PRE_test_3800() PRE-FUNC: EE@311 - ELEMENT '1' is erroneously empty :
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["a-string",""]
EMPTY ASSERTION ["EMPTY-OK","EMPTY-ERROR"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3892, error_mess);
printTestName("checkParam_empty_3892")

multi_variable  = [Symbol('sym'), Symbol('sym')];
multi_signature = ['EMPTY-IGNORE', 'EMPTY-OK'];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3893, error_mess);
printTestName("checkParam_empty_3893")
// //  ////////////////////////////////////////////////////////////////////////

multi_variable  = ["a-s", "B-T" ];
multi_signature = ["EMPTY-IGNORE", "invalid-empty"];
error_mess = `PRE_test_3800() PRE-FUNC: EE@312 - ELEMENT '1' is incorrect type, 'invalid-empty', only [ER,EMPTY-ERROR,EMPTY-OK,OK,EMPTY-IGNORE,IG] allowed : ["a-s","B-T"]
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["a-s","B-T"]
EMPTY ASSERTION ["EMPTY-IGNORE","invalid-empty"]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3894, error_mess);
printTestName("checkParam_empty_3894")

multi_variable  = [ [12, false, 'a string'], [12, false, 'a string'] ];
multi_signature = [ ['EMPTY-OK','EMPTY-OK','EMPTY-OK'], ['EMPTY-ERROR','EMPTY-ERROR','EMPTY-ERROR'] ];
error_mess = '';
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3895, error_mess);
printTestName("checkParam_empty_3895")

multi_variable  = [  ['first', 'middle', 'last'],                  ['red', 'green', 'blue']                           ];
multi_signature = [  ['EMPTY-ERROR', 'EMPTY-IGNORE', 'EMPTY-OK'],  ['EMPTY-ERROR', 'INVALID-EMPTY-TYPE', 'EMPTY-OK']  ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@312 - ELEMENT '1' is incorrect type, 'INVALID-EMPTY-TYPE', only [ER,EMPTY-ERROR,EMPTY-OK,OK,EMPTY-IGNORE,IG] allowed : ["red","green","blue"]
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [["first","middle","last"],["red","green","blue"]]
EMPTY ASSERTION [["EMPTY-ERROR","EMPTY-IGNORE","EMPTY-OK"],["EMPTY-ERROR","INVALID-EMPTY-TYPE","EMPTY-OK"]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3896, error_mess);
printTestName("checkParam_empty_3896")

multi_variable  = [  ['first', 'middle', 'last'],                    ['red', 'green', 'blue']           ];
multi_signature = [  ['EMPTY-ERROR', 'EMPTY-IGNORE', 'EMPTY-OK'],    ['EMPTY-ERROR', [], 'EMPTY-OK']    ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@314 - Variable green must be an array but is instead a 'string', : green
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES [["first","middle","last"],["red","green","blue"]]
EMPTY ASSERTION [["EMPTY-ERROR","EMPTY-IGNORE","EMPTY-OK"],["EMPTY-ERROR",[],"EMPTY-OK"]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3897, error_mess);
  printTestName("checkParam_empty_3897")   

multi_variable  = [    'a-string'     ];
multi_signature = [  ['EMPTY-ERROR'] ];
error_mess = `PRE_test_3800() PRE-FUNC: EE@314 - Variable a-string must be an array but is instead a 'string', : a-string
CHECKER checkParam_empty()
ACTUAL TYPE 'array'
 VALUES ["a-string"]
EMPTY ASSERTION [["EMPTY-ERROR"]]
 ORIGIN pre_checkParam_empty_3800(an_array)`;
test_pre_checkParam_empty_multi(multi_variable, multi_signature, 3898, error_mess);
  printTestName("checkParam_empty_3898")   



if (fail_count>0) {
  the_problem = `check-tests/checkParam_empty_03800.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;
