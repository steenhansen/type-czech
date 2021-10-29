/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_empty_single(single_parameter, signature_of_parameter, error_id, expected_error) {
  const type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_check_empty_03900 += 1;

  function PRE_test_3900() {
    return type_czech_test.check_empty(arguments, signature_of_parameter);
  }

  function pre_check_empty_3900() {}
  pre_check_empty_3900 = type_czech_test.linkUp(pre_check_empty_3900, PRE_test_3900);

  const before_var_value = beforeCheck(single_parameter, signature_of_parameter);
  if (expected_error === '') {
    try {
      pre_check_empty_3900(single_parameter);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_empty_03900 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_empty_3900(single_parameter);
      // failing path, should have been an exception
      failed_check_empty_03900 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_empty_03900 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(single_parameter, signature_of_parameter, before_var_value, error_id);
}

tested_check_empty_03900 = 0;
failed_check_empty_03900 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { x: [{ y: 'z'           }] };
single_signature = { x: [{ y: 'EMPTY-ERROR' }] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3901, error_mess);

single_variable  = { x: [{ y: ''            }] };
single_signature = { x: [{ y: 'EMPTY-ERROR' }] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@301 -  key 'y' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {x:[{y:""}]}
 EMPTY ASSERTION {x:[{y:"EMPTY-ERROR"}]}
CALLING FUNCTION PRE_test_3900()
`;
test_pre_check_empty_single(single_variable, single_signature, 3902, error_mess);

single_variable  = { a: [1, 2, 3] };
single_signature = { a: ['EMPTY-ERROR'] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3903, error_mess);

single_variable  = { a: [1, NaN, 3] };
single_signature = { a: ['EMPTY-ERROR'] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@306 - ELEMENT '1' is asserted to be a 'EMPTY-ERROR', but is really 'EMPTY' : NaN
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[1,NaN,3]}
 EMPTY ASSERTION {a:["EMPTY-ERROR"]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3904, error_mess);

single_variable  = { r: {} };
single_signature = { r: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@309 - Key 'r' was understood to be 'EMPTY-ERROR' but was rather '{}'
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {r:{}}
 EMPTY ASSERTION {r:"EMPTY-ERROR"}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3905, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3906, error_mess);

single_variable  = { a: [{ r: [ [],            [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
 EMPTY ASSERTION {a:[{r:["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{b:"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3907, error_mess);

single_variable  = { a: [{ r: [ [123],         [],              987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: ME@403 - The parameter array [] is empty
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
 EMPTY ASSERTION {a:[{r:["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{b:"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3908, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,           false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-IGNORE', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = ``;
test_pre_check_empty_single(single_variable, single_signature, 3909, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,          new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-IGNORE', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = ``;
test_pre_check_empty_single(single_variable, single_signature, 3910, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date(''),            (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',           'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@311 - ELEMENT '4' is erroneously empty :
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,null,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
 EMPTY ASSERTION {a:[{r:["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{b:"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3911, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,       12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-IGNORE', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3912, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      NaN,           { a: 3 },      { b: 4 },             /d/,          'abc',          Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@311 - ELEMENT '6' is erroneously empty :
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,NaN,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
 EMPTY ASSERTION {a:[{r:["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{b:"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3913, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: '' },     { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3914, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: '' },            /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@301 -  key 'b' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:""},/d/ +++,"abc",Symbol('sym')]}]}
 EMPTY ASSERTION {a:[{r:["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{b:"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3915, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /(?:)/,        'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR' ] }] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@311 - ELEMENT '9' is erroneously empty :
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/(?:)/ +++,"abc",Symbol('sym')]}]}
 EMPTY ASSERTION {a:[{r:["EMPTY-ERROR",["EMPTY-ERROR"],"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR",{b:"EMPTY-ERROR"},"EMPTY-ERROR","EMPTY-ERROR","EMPTY-ERROR"]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3916, error_mess);

single_variable  = { a: [{ r: [ [123],         [1, 2, 3],       987n,          false,         new Date('1999-12-12'), (x) => x,      12,            { a: 3 },      { b: 4 },             /d/,           'abc',         Symbol('sym') ] }] };
single_signature = { a: [{ r: [ 'EMPTY-ERROR', ['EMPTY-ERROR'], 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR',          'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-ERROR', { b: 'EMPTY-ERROR' }, 'EMPTY-ERROR', 'EMPTY-ERROR', 'EMPTY-IGNORE' ] }] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3917, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'array' must not be empty for the value []
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE []
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3918, error_mess);

single_variable  = [1, 2, 3];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@219 - Comparing actual [] parameter, with a value of [1,2,3], against the expected shape of EMPTY-ERROR. They should be the same type. You cannot compare an array with a non-array; both []s, or both EMPTY-ERRORs
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [1,2,3]
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3919, error_mess);

single_variable  = 0n;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3920, error_mess);

single_variable  = false;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3921, error_mess);

single_variable  = new Date('');
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'date' must not be empty for the value null
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'date'
    ACTUAL VALUE null
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3922, error_mess);

single_variable  = (x) => x;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3923, error_mess);

single_variable  = NaN;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'number' must not be empty for the value NaN
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'number'
    ACTUAL VALUE NaN
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3924, error_mess);

single_variable  = { a: 3 };
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3925, error_mess);

single_variable  = /(?:)/;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'regexp' must not be empty for the value /(?:)/ +++
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'regexp'
    ACTUAL VALUE /(?:)/ +++
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3926, error_mess);

single_variable  = '';
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'string' must not be empty for the value ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'string'
    ACTUAL VALUE ""
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3927, error_mess);

single_variable  = Symbol('');
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3928, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[[[[[[ 1             ]]]]]]];
single_signature = [[[[[[[ 'EMPTY-ERROR' ]]]]]]];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3929, error_mess);

single_variable  = [[[[[[[ ''            ]]]]]]];
single_signature = [[[[[[[ 'EMPTY-ERROR' ]]]]]]];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[[[[[[""]]]]]]]
 EMPTY ASSERTION [[[[[[["EMPTY-ERROR"]]]]]]]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3930, error_mess);

single_variable  =    [[[[[[ ''            ]]]]]];
single_signature = [  [[[[[[ 'EMPTY-ERROR' ]]]]]]  ];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@314 - Variable '' must be an array but is instead a 'string', : ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[[[[[""]]]]]]
 EMPTY ASSERTION [[[[[[["EMPTY-ERROR"]]]]]]]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3931, error_mess);

single_variable  = [  [[[[[[ ''            ]]]]]]  ];
single_signature =    [[[[[[ 'EMPTY-ERROR' ]]]]]];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3932, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: { c: { d: { e: 12            } } } } };
single_signature = { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3933, error_mess);

single_variable  = { a: { b: { c: { d: { e: ''            } } } } };
single_signature = { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:{c:{d:{e:""}}}}}
 EMPTY ASSERTION {a:{b:{c:{d:{e:"EMPTY-ERROR"}}}}}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3934, error_mess);

/* NOTE - this error message blames the single_signature, not the values, points in the wrong direction to fix ! */
/* Cannot change as check_emptyExtra() and check_typeExtra() rely on this behavior, Star Fleet can fix it */
single_variable  = { a: { b: { c: { d: 12              } } } };
single_signature = { a: { b: { c: { d: { e: 'EMPTY-ERROR' } } } } };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@303 - Bad empty type key, '{e:"EMPTY-ERROR"}', must be either 'EMPTY-OK', 'EMPTY-ER', 'EMPTY-IG', 'OK', 'ER', or 'IG'
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:{c:{d:12}}}}
 EMPTY ASSERTION {a:{b:{c:{d:{e:"EMPTY-ERROR"}}}}}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3935, error_mess);

single_variable  = { a: { b: { c: { d: { e: 12 }   } } } };
single_signature = { a: { b: { c: { d: 'EMPTY-ERROR'    } } } };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3936, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3937, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[{e:""}]}]}]}]}
 EMPTY ASSERTION {a:[{b:[{c:[{d:[{e:"EMPTY-ERROR"}]}]}]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3938, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ ''              ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@216 -  The key 'e', which has a type of 'EMPTY-ERROR', is missing in the checked object
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[""]}]}]}]}
 EMPTY ASSERTION {a:[{b:[{c:[{d:[{e:"EMPTY-ERROR"}]}]}]}]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3939, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ 'EMPTY-ERROR'        ] } ] } ] } ] };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3940, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3941, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: ''       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@301 -  key 'e' is a 'string' which is reputed to be 'EMPTY-ERROR' but has a value of ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[{e:""}]}]}]}]}]
 EMPTY ASSERTION [{a:[{b:[{c:[{d:[{e:"EMPTY-ERROR"}]}]}]}]}]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3942, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'EMPTY-ERROR' } ] } ] } ] } ] } ];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@216 -  The key 'e', which has a type of 'EMPTY-ERROR', is missing in the checked object
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[12]}]}]}]}]
 EMPTY ASSERTION [{a:[{b:[{c:[{d:[{e:"EMPTY-ERROR"}]}]}]}]}]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3943, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ 'EMPTY-ERROR'        ] } ] } ] } ] } ];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3944, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3945, error_mess);

single_variable  = [[ { a: { b: [[ { c: { d: [[ ''        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[""]]}}]]}}]]
 EMPTY ASSERTION [[{a:{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}}]]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3946, error_mess);

single_variable  =  [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ]];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@314 - Variable {a:{b:[[{c:{d:[[1]]}}]]}} must be an array but is instead a 'object', : {a:{b:[[{c:{d:[[1]]}}]]}}
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [{a:{b:[[{c:{d:[[1]]}}]]}}]
 EMPTY ASSERTION [[{a:{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}}]]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3947, error_mess);

single_variable  = [[ { a: { b: [[ { c: { d: [[ ''        ]] } } ]] } } ]];
single_signature =  [ { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } } ];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@216 -  The key 'a', which has a type of '{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}', is missing in the checked object
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[""]]}}]]}}]]
 EMPTY ASSERTION [{a:{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}}]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3948, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: [[ { c: { d: [[ 1             ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } };
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3949, error_mess);

single_variable  = { a: { b: [[ { c: { d: [[ ''            ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:[[{c:{d:[[""]]}}]]}}
 EMPTY ASSERTION {a:{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3950, error_mess);

single_variable  =      { b: [[ { c: { d: [[ ''            ]] } } ]] };
single_signature = { a: { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] } };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@216 -  The key 'a', which has a type of '{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}', is missing in the checked object
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {b:[[{c:{d:[[""]]}}]]}
 EMPTY ASSERTION {a:{b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3951, error_mess);

single_variable  = { a: { b: [[ { c: { d: [[ ''            ]] } } ]] } };
single_signature =      { b: [[ { c: { d: [[ 'EMPTY-ERROR' ]] } } ]] };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@216 -  The key 'b', which has a type of '[[{c:{d:[["EMPTY-ERROR"]]}}]]', is missing in the checked object
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:[[{c:{d:[[""]]}}]]}}
 EMPTY ASSERTION {b:[[{c:{d:[["EMPTY-ERROR"]]}}]]}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3952, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////
single_variable  = null;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@308 - A 'null' cannot be empty, so the state of 'EMPTY-ERROR' is illegal for the value 'null'
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'null'
    ACTUAL VALUE null
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3953, error_mess);

single_variable  = undefined;
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@308 - A 'undefined' cannot be empty, so the state of 'EMPTY-ERROR' is illegal for the value 'undefined'
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'undefined'
    ACTUAL VALUE undefined
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3954, error_mess);

single_variable  = [];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'array' must not be empty for the value []
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE []
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3955, error_mess);

single_variable  = {};
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'object' must not be empty for the value { }
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {}
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3956, error_mess);

single_variable  = [];
single_signature = ['EMPTY-ERROR'];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: ME@403 - The parameter array [] is empty
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE []
 EMPTY ASSERTION ["EMPTY-ERROR"]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3957, error_mess);

single_variable  = {};
single_signature = { a: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@216 -  The key 'a', which has a type of 'EMPTY-ERROR', is missing in the checked object
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {}
 EMPTY ASSERTION {a:"EMPTY-ERROR"}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3958, error_mess);

// // ////////////////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3959, error_mess);

single_variable  = 123n;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3960, error_mess);

single_variable  = false;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3961, error_mess);

single_variable  = new Date('1999-12-12');
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3962, error_mess);

single_variable  = (x) => x;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3963, error_mess);

single_variable  = 12;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3964, error_mess);

single_variable  = { a: 12 };
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3965, error_mess);

single_variable  = /d/;
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3966, error_mess);

single_variable  = 'a-string';
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3967, error_mess);

single_variable  = Symbol('sym');
single_signature = 'EMPTY-IGNORE';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3968, error_mess);

// // ///////////////////////////////////////////////////////////////

single_variable  = [1];
single_signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3969, error_mess);

single_variable  = [1, 2];
single_signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3970, error_mess);

single_variable  = [1, 2, 'three'];
single_signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3971, error_mess);

single_variable  = [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ];
single_signature = [['EMPTY-ERROR']];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3972, error_mess);

single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ];
single_signature = [[['EMPTY-ERROR']]];
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3973, error_mess);

single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                [ [1, 2, 3], [1, 2, 3], [1, '', 3] ]    ];
single_signature = [[['EMPTY-ERROR']]];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@306 - ELEMENT '1' is asserted to be a 'EMPTY-ERROR', but is really 'EMPTY' : ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"",3]]]
 EMPTY ASSERTION [[["EMPTY-ERROR"]]]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3974, error_mess);

// // ////////////////////////////////////////

single_variable  = 'not-object';
single_signature = { an_object: 'EMPTY-ERROR' };
error_mess = `TE@201 - TypeCzech.check_empty() called with '{}' against '!{}'. Contrasting a string type of value not-object, with '{"an_object":"EMPTY-ERROR"}' an object !!! string <> object`;
test_pre_check_empty_single(single_variable, single_signature, 3975, error_mess);

single_variable  = '';
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'string' must not be empty for the value ''
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'string'
    ACTUAL VALUE ""
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3976, error_mess);

single_variable  = {};
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'object' must not be empty for the value { }
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {}
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3977, error_mess);

single_variable  = [];
single_signature = 'EMPTY-ERROR';
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@307 - EMPTY-ERROR states 'array' must not be empty for the value []
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE []
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3978, error_mess);

single_variable  = { a: 1, b: 2 };
single_signature = { a: 'EMPTY-ERROR' };
error_mess = ` PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@315 - Extra key in checked object - (b:'2')
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:1,b:2}
 EMPTY ASSERTION {a:"EMPTY-ERROR"}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3979, error_mess);

single_variable  = { a: undefined };
single_signature = { a: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@302 - Type cannot be empty 'a' EMPTY-ERROR' is a undefined :: undefined
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:undefined}
 EMPTY ASSERTION {a:"EMPTY-ERROR"}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3980, error_mess);

single_variable  = { a: null };
single_signature = { a: 'EMPTY-ERROR' };
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@302 - Type cannot be empty 'a' EMPTY-ERROR' is a null :: null
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:null}
 EMPTY ASSERTION {a:"EMPTY-ERROR"}
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3981, error_mess);

single_variable  = 'a-string';
single_signature = ['EMPTY-ERROR'];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: TE@217 - Comparing actual 'string' parameter, with a value of a-string, in relation to the expected shape of ["EMPTY-ERROR"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'string's. Or same object keys
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "a-string"
 EMPTY ASSERTION ['EMPTY-ERROR']
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3982, error_mess);

single_variable  = console;
single_signature = 'EMPTY-ERROR';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3983, error_mess);

// ///////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3984, error_mess);

single_variable  = 123n;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3985, error_mess);

single_variable  = false;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3986, error_mess);

single_variable  = new Date('1999-12-12');
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3987, error_mess);

single_variable  = (x) => x;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3988, error_mess);

single_variable  = 12;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3989, error_mess);

single_variable  = { a: 12 };
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3990, error_mess);

single_variable  = /d/;
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3991, error_mess);

single_variable  = 'a-string';
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3992, error_mess);

single_variable  = Symbol('sym');
single_signature = 'EMPTY-OK';
error_mess = '';
test_pre_check_empty_single(single_variable, single_signature, 3993, error_mess);

//  ////////////////////////////////////////////////////////////////////////

single_variable  = "a-s";
single_signature =  "invalid-empty";
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@304 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'invalid-empty'
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "a-s"
 EMPTY ASSERTION invalid-empty
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3994, error_mess);

single_variable  = [12, false, 'a string'];
single_signature =  ['EMPTY-OK'];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@305 - Completely pointless as checking with ['OK'] or ['EMPTY-OK'] matches everything
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [12,false,"a string"]
 EMPTY ASSERTION ["EMPTY-OK"]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3995, error_mess);

single_variable  = ['first', 'middle', 'last'];
single_signature =  ['EMPTY-ERROR', 'INVALID-EMPTY-TYPE', 'EMPTY-OK'];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@312 - ELEMENT '1' is incorrect  type, 'INVALID-EMPTY-TYPE', only [ER, EMPTY-ERROR, EMPTY-OK, OK, EMPTY-IGNORE, IG] allowed  : ["first","middle","last"]
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE ["first","middle","last"]
 EMPTY ASSERTION ["EMPTY-ERROR","INVALID-EMPTY-TYPE","EMPTY-OK"]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3996, error_mess);

single_variable  = ['first', 'middle', 'last'];
single_signature =  ['EMPTY-ERROR', [], 'EMPTY-OK'];
error_mess = `PRE_test_3900() pre_check_empty_3900() PRE-FUNC: EE@314 - Variable middle must be an array but is instead a 'string', : middle
check_empty(arguments, expected_emptys)
    ACTUAL TYPES 'array'
    ACTUAL VALUE ["first","middle","last"]
 EMPTY ASSERTION ["EMPTY-ERROR",[],"EMPTY-OK"]
CALLING FUNCTION PRE_test_3900()`;
test_pre_check_empty_single(single_variable, single_signature, 3997, error_mess);

expected_tests = 97;
expected_fails = 0;
if (expected_tests !== tested_check_empty_03900) {
  throw new Error(`check_empty_3900().md ${expected_tests} expected_tests !== ${tested_check_empty_03900} tested_check_empty_03900`);
} else if (expected_fails !== failed_check_empty_03900) {
  throw new Error(`check_empty_3900().md ${expected_fails} expected_fails !== ${failed_check_empty_03900} failed_check_empty_03900`);
} else if (typeof TEST_total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  TEST_total_checks += expected_tests;
}
