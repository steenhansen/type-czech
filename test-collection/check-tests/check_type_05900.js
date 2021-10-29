/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_type_single(single_parameter, signature_of_parameter, error_id, expected_error) {
  const type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  tested_check_type_05900 += 1;

  function PRE_test_05900() {
    return type_czech_test.check_type(arguments, signature_of_parameter);
  }

  function pre_check_type_05900() {}
  pre_check_type_05900 = type_czech_test.linkUp(pre_check_type_05900, PRE_test_05900);

  const before_var_value = beforeCheck(single_parameter, signature_of_parameter);
  if (expected_error === '') {
    try {
      pre_check_type_05900(single_parameter);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_type_05900 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_type_05900(single_parameter);
      // failing path, should have been an exception
      failed_check_type_05900 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_type_05900 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(single_parameter, signature_of_parameter, before_var_value, error_id);
}

tested_check_type_05900 = 0;
failed_check_type_05900 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { x: [{ y: 'z'      }] };
single_signature = { x: [{ y: 'string' }] };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5901, error_mess);

single_variable  = { x: [{ y: 123456   }] };
single_signature = { x: [{ y: 'string' }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'y' is indicated to be a 'string', but is inaccurately a 'number' : 123456
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {x:[{y:123456}]}
   EXPECTED TYPE {x:[{y:"string"}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5902, error_mess);

single_variable  = { a: [1, 2, 3] };
single_signature = { a: 'object' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'object' but is of the wrong type of 'array':[1,2,3]
                                  check_type(arguments, expected_types)
                                      ACTUAL TYPES 'object'
                                      ACTUAL VALUE {a:[1,2,3]}
                                    EXPECTED TYPE {a:"object"}
                                  CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5903, error_mess);

single_variable  = [13, 14, 15];
single_signature = { r: 'number' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@219 - Comparing actual [] parameter, with a value of [13,14,15],
                         against the expected shape of {"r":"number"}. They should be the same type.
                         You cannot compare an array with a non-array; both []s, or both {"r":"number"}s
                                      check_type(arguments, expected_types)
                                          ACTUAL TYPES 'array'
                                          ACTUAL VALUE [13,14,15]
                                        EXPECTED TYPE {'r':'number'}
                                      CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5904, error_mess);

single_variable  = { r: 'a-string' };
single_signature = ['number'];
error_mess = ` PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@217 - Comparing actual 'object' parameter, with a value of {r:"a-string"}, 
                          in relation to the expected shape of ["number"]. They should be the same type.
                          You cannot compare an array with a non-array; both []s, or both 'object's. Or same object keys
                                      check_type(arguments, expected_types)
                                          ACTUAL TYPES 'object'
                                          ACTUAL VALUE {r:"a-string"}
                                        EXPECTED TYPE ['number']
                                      CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5905, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5906, error_mess);

single_variable  = { a: [{ r: [ 'A-STRING ! ! !', [1, 2, 3],  987n,    false,     new Date('1999-12-12'), (x) => x,   12,        { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array',          ['number'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'array', but is mistakenly a 'string'
                              check_type(arguments, expected_types)
                                  ACTUAL TYPES 'object'
                                  ACTUAL VALUE {a:[{r:["A-STRING ! ! !",[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                                 EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
                              CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5907, error_mess);

single_variable  = { a: [{ r: [ [123],   'A-STRING ! ! !',  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'],        'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'array' but is of the wrong type of 'string':A-STRING ! ! !
                          check_type(arguments, expected_types)
                              ACTUAL TYPES 'object'
                              ACTUAL VALUE {a:[{r:[[123],"A-STRING ! ! !",987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                             EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
                          CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5908, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  'A-STRING ! ! !', false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint',         'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '2' is assumed to be a 'bigint', but is mistakenly a 'string'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],"A-STRING ! ! !",false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5909, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     'A-STRING ! ! !', new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean',        'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '3' is assumed to be a 'boolean', but is mistakenly a 'string'
                    check_type(arguments, expected_types)
                        ACTUAL TYPES 'object'
                        ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,"A-STRING ! ! !",1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                      EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
                    CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5910, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     'A-STRING ! ! !', (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',           'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '4' is assumed to be a 'date', but is mistakenly a 'string'
                        check_type(arguments, expected_types)
                            ACTUAL TYPES 'object'
                            ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,"A-STRING ! ! !",(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                          EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
                        CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5911, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), 'A-STRING ! ! !',  12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',                 'function',       'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '5' is assumed to be a 'function', but is mistakenly a 'string'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,"A-STRING ! ! !",12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5912, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   'A-STRING ! ! !', { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',                 'function', 'number',         'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = ` PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '6' is assumed to be a 'number', but is mistakenly a 'string'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,"A-STRING ! ! !",{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5913, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       'A-STRING ! ! !', { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object',         { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '7' is assumed to be a 'object', but is mistakenly a 'string'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,"A-STRING ! ! !",{b:4},/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5914, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, 'A-STRING ! ! !', /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' },  'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'object' but is of the wrong type of 'string':A-STRING ! ! !
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},"A-STRING ! ! !",/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5915, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        'A-STRING ! ! !', 'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp',         'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '9' is assumed to be a 'regexp', but is mistakenly a 'string'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},"A-STRING ! ! !","abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5916, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,     'abc',    'A-STRING ! ! !' ] }] };
single_signature = { a: [{ r: [ 'array', ['number'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'         ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '11' is assumed to be a 'symbol', but is mistakenly a 'string'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc","A-STRING ! ! !"]}]}
   EXPECTED TYPE {a:[{r:["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string","symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5917, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [123];
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@225 - The value '[]', which is a 'array', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [123]
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5918, error_mess);

single_variable  = [1, 2, 3];
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@219 - Comparing actual [] parameter, with a value of [1,2,3], against the expected shape of date. They should be the same type. You cannot compare an array with a non-array; both []s, or both dates
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [1,2,3]
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5919, error_mess);

single_variable  = 987n;
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '987n', which is a 'bigint', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'bigint'
    ACTUAL VALUE 987n
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5920, error_mess);

single_variable  = false;
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'false', which is a 'boolean', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'boolean'
    ACTUAL VALUE false
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5921, error_mess);

single_variable  = new Date('1999-12-12');
single_signature = 'date';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5922, error_mess);

single_variable  = (x) => x;
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '(x) => x ***', which is a 'function', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'function'
    ACTUAL VALUE (x) => x ***
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5923, error_mess);

single_variable  = 12;
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '12', which is a 'number', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'number'
    ACTUAL VALUE 12
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5924, error_mess);

single_variable  = { a: 3 };
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@208 - The value '{}', which is a 'object', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:3}
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5925, error_mess);

single_variable  = /d/;
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '/d/ +++', which is a 'regexp', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'regexp'
    ACTUAL VALUE /d/ +++
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5926, error_mess);

single_variable  = 'abc';
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'abc', which is a 'string', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "abc"
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5927, error_mess);

single_variable  = Symbol('sym');
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'Symbol('sym')', which is a 'symbol', is not a 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'symbol'
    ACTUAL VALUE Symbol('sym')
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5928, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[[[[[[ 1        ]]]]]]];
single_signature = [[[[[[[ 'number' ]]]]]]];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5929, error_mess);

single_variable  = [[[[[[[ 1        ]]]]]]];
single_signature = [[[[[[[ 'string' ]]]]]]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[[[[[[1]]]]]]]
   EXPECTED TYPE [[[[[[["string"]]]]]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5930, error_mess);

single_variable  =    [[[[[[ 1        ]]]]]];
single_signature = [  [[[[[[ 'number' ]]]]]]  ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'array' but is of the wrong type of 'number':1
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[[[[[1]]]]]]
   EXPECTED TYPE [[[[[[["number"]]]]]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5931, error_mess);

single_variable  = [  [[[[[[ 1        ]]]]]]  ];
single_signature =    [[[[[[ 'number' ]]]]]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[[[[[[1]]]]]]]
   EXPECTED TYPE [[[[[["number"]]]]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5932, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: { c: { d: { e: 12       } } } } };
single_signature = { a: { b: { c: { d: { e: 'number' } } } } };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5933, error_mess);

single_variable  = { a: { b: { c: { d: { e: 12       } } } } };
single_signature = { a: { b: { c: { d: { e: 'string' } } } } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:{c:{d:{e:12}}}}}
   EXPECTED TYPE {a:{b:{c:{d:{e:"string"}}}}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5934, error_mess);

single_variable  = { a: { b: { c: { d: 12              } } } };
single_signature = { a: { b: { c: { d: { e: 'number' } } } } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@210 - The type '{"e":"number"}' is not a real type
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:{c:{d:12}}}}
   EXPECTED TYPE {a:{b:{c:{d:{e:"number"}}}}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5935, error_mess);

single_variable  = { a: { b: { c: { d: { e: 12 }   } } } };
single_signature = { a: { b: { c: { d: 'number'    } } } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'number' but is of the wrong type of 'object':{"e":12}
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:{c:{d:{e:12}}}}}
   EXPECTED TYPE {a:{b:{c:{d:"number"}}}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5936, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5937, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[{e:12}]}]}]}]}
   EXPECTED TYPE {a:[{b:[{c:[{d:[{e:"string"}]}]}]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5938, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'object' but is of the wrong type of 'number':12
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[12]}]}]}]}
   EXPECTED TYPE {a:[{b:[{c:[{d:[{e:"number"}]}]}]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5939, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ 'number'        ] } ] } ] } ] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[{e:12}]}]}]}]}
   EXPECTED TYPE {a:[{b:[{c:[{d:["number"]}]}]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5940, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5941, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:[{e:"string"}]}]}]}]}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5942, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'object' but is of the wrong type of 'number':12
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[12]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:[{e:"number"}]}]}]}]}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5943, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ 'number'        ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:["number"]}]}]}]}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5944, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ]];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5945, error_mess);

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } } ]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[1]]}}]]}}]]
   EXPECTED TYPE [[{a:{b:[[{c:{d:[["string"]]}}]]}}]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5946, error_mess);

single_variable  =  [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'array' but is of the wrong type of 'object':{"a":{"b":[[{"c":{"d":[[1]]}}]]}}
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [{a:{b:[[{c:{d:[[1]]}}]]}}]
   EXPECTED TYPE [[{a:{b:[[{c:{d:[["number"]]}}]]}}]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5947, error_mess);

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature =  [ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'object' but is of the wrong type of 'array':[{"a":{"b":[[{"c":{"d":[[1]]}}]]}}]
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[1]]}}]]}}]]
   EXPECTED TYPE [{a:{b:[[{c:{d:[["number"]]}}]]}}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5948, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5949, error_mess);

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:[[{c:{d:[[1]]}}]]}}
   EXPECTED TYPE {a:{b:[[{c:{d:[["string"]]}}]]}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5950, error_mess);

single_variable  =      { b: [[ { c: { d: [[ 1        ]] } } ]] };
single_signature = { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@216 -  The key 'a', which has a type of '{b:[[{c:{d:[["number"]]}}]]}', is missing in the checked object
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {b:[[{c:{d:[[1]]}}]]}
   EXPECTED TYPE {a:{b:[[{c:{d:[["number"]]}}]]}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5951, error_mess);

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature =      { b: [[ { c: { d: [[ 'number' ]] } } ]] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@216 -  The key 'b', which has a type of '[[{c:{d:[["number"]]}}]]', is missing in the checked object
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:{b:[[{c:{d:[[1]]}}]]}}
   EXPECTED TYPE {b:[[{c:{d:[["number"]]}}]]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5952, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////
single_variable  = null;
single_signature = 'number';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'null', which is a 'null', is not a 'number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'null'
    ACTUAL VALUE null
   EXPECTED TYPE number
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5953, error_mess);

single_variable  = undefined;
single_signature = 'number';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@206 - The value 'undefined', is not a 'number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'undefined'
    ACTUAL VALUE undefined
   EXPECTED TYPE number
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5954, error_mess);

single_variable  = [];
single_signature = 'array';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5955, error_mess);

single_variable  = {};
single_signature = 'object';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5956, error_mess);

single_variable  = [];
single_signature = ' [  ] ';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@222 - The construct '[]' is not a real type, only a container, thus it cannot serve as a signature for EXPECTED TYPE. Try 'array' or ['string'].
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE []
   EXPECTED TYPE  [  ] 
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5957, error_mess);

single_variable  = {};
single_signature = ' { } ';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@223 - The construct '{}' is not a real type, only a container, thus it cannot serve as a signature for EXPECTED TYPE. Try 'object' or {a:'string'}.
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {}
   EXPECTED TYPE  { } 
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5958, error_mess);

// ////////////////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'Array';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Array' is not a typeof() type, but it looks just like 'array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE []
   EXPECTED TYPE Array
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5959, error_mess);

single_variable  = 123n;
single_signature = 'Bigint';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Bigint' is not a typeof() type, but it looks just like 'bigint'
check_type(arguments, expected_types)
    ACTUAL TYPES 'bigint'
    ACTUAL VALUE 123n
   EXPECTED TYPE Bigint
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5960, error_mess);

single_variable  = false;
single_signature = 'Boolean';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Boolean' is not a typeof() type, but it looks just like 'boolean'
check_type(arguments, expected_types)
    ACTUAL TYPES 'boolean'
    ACTUAL VALUE false
   EXPECTED TYPE Boolean
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5961, error_mess);

single_variable  = new Date('1999-12-12');
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Date' is not a typeof() type, but it looks just like 'date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'date'
    ACTUAL VALUE 1999-12-12T00:00:00.000Z
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5962, error_mess);

single_variable  = (x) => x;
single_signature = 'Function';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Function' is not a typeof() type, but it looks just like 'function'
check_type(arguments, expected_types)
    ACTUAL TYPES 'function'
    ACTUAL VALUE (x) => x ***
   EXPECTED TYPE Function
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5963, error_mess);

single_variable  = 12;
single_signature = 'Number';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Number' is not a typeof() type, but it looks just like 'number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'number'
    ACTUAL VALUE 12
   EXPECTED TYPE Number
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5964, error_mess);

single_variable  = { a: 12 };
single_signature = 'Object';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Object' is not a typeof() type, but it looks just like 'object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:12}
   EXPECTED TYPE Object
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5965, error_mess);

single_variable  = /d/;
single_signature = 'Regexp';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Regexp' is not a typeof() type, but it looks just like 'regexp'
check_type(arguments, expected_types)
    ACTUAL TYPES 'regexp'
    ACTUAL VALUE /d/ +++
   EXPECTED TYPE Regexp
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5966, error_mess);

single_variable  = 'a-string';
single_signature = 'String';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'String' is not a typeof() type, but it looks just like 'string'
check_type(arguments, expected_types)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "a-string"
   EXPECTED TYPE String
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5967, error_mess);

single_variable  = Symbol('sym');
single_signature = 'Symbol';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@205 - The type 'Symbol' is not a typeof() type, but it looks just like 'symbol'
check_type(arguments, expected_types)
    ACTUAL TYPES 'symbol'
    ACTUAL VALUE Symbol('sym')
   EXPECTED TYPE Symbol
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5968, error_mess);

// // ///////////////////////////////////////////////////////////////

single_variable  = [1];
single_signature = ['number'];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5969, error_mess);

single_variable  = [1, 2];
single_signature = ['number'];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5970, error_mess);

single_variable  = [1, 2, 'three'];
single_signature = ['number'];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@215 - ELEMENT '2' is asserted to be a 'number', but is fallaciously a 'string' : three
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [1,2,"three"]
   EXPECTED TYPE ["number"]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5971, error_mess);

single_variable  = [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ];
single_signature = [['number']];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5972, error_mess);

single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ];
single_signature = [[['number']]];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5973, error_mess);

single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                [ [1, 2, 3], [1, 2, 3], [1, '2', 3] ]    ];
single_signature = [[['number']]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@215 - ELEMENT '1' is asserted to be a 'number', but is fallaciously a 'string' : 2
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"2",3]]]
   EXPECTED TYPE [[["number"]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5974, error_mess);

// // ////////////////////////////////////////

single_variable  = 'not-object';
single_signature = { an_object: 'Boaty-McBoatFace' };
error_mess = `TE@201 - TypeCzech.check_type() called with '{}' against '!{}'. Contrasting a string type of value not-object, with '{"an_object":"Boaty-McBoatFace"}' an object !!! string <> object`;
test_pre_check_type_single(single_variable, single_signature, 5975, error_mess);

single_variable  = 'a-string';
single_signature = 'null';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@203 - The type 'null' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type
check_type(arguments, expected_types)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "a-string"
   EXPECTED TYPE null
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5976, error_mess);

single_variable  = 91;
single_signature = 'undefined';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@203 - The type 'undefined' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type
check_type(arguments, expected_types)
    ACTUAL TYPES 'number'
    ACTUAL VALUE 91
   EXPECTED TYPE undefined
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5977, error_mess);

single_variable  = 91;
single_signature = 'Ford Torino';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@202 - The type 'Ford Torino' is not the correct classname or not a scalar type
check_type(arguments, expected_types)
    ACTUAL TYPES 'number'
    ACTUAL VALUE 91
   EXPECTED TYPE Ford Torino
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5978, error_mess);

single_variable  = { a: 1, b: 2 };
single_signature = { a: 'number' };
error_mess = ` PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@209 - Extra key in checked object - (b:'2')
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:1,b:2}
   EXPECTED TYPE {a:"number"}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5979, error_mess);

single_variable  = { a: undefined };
single_signature = { a: 'number' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@211 - Key 'a' was given to be a 'number' but was instead 'undefined'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:undefined}
   EXPECTED TYPE {a:"number"}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5980, error_mess);

single_variable  = { a: null };
single_signature = { a: 'number' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@212 - Key 'a' was determined to be a 'number' but was instead 'null'
check_type(arguments, expected_types)
    ACTUAL TYPES 'object'
    ACTUAL VALUE {a:null}
   EXPECTED TYPE {a:"number"}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5981, error_mess);

// TE@217
single_variable  = 'a-string';
single_signature = ['number'];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@217 - Comparing actual 'string' parameter, with a value of a-string, in relation to the expected shape of ["number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'string's. Or same object keys
check_type(arguments, expected_types)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "a-string"
   EXPECTED TYPE ['number']
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5982, error_mess);

single_variable  = console;
single_signature = 'object';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5983, error_mess);

single_variable  = Date;
single_signature = 'bad-classname';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@202 - The type 'bad-classname' is not the correct classname or not a scalar type
check_type(arguments, expected_types)
    ACTUAL TYPES 'function'
    ACTUAL VALUE function Date() { [native code ***
   EXPECTED TYPE bad-classname
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5984, error_mess);

single_variable  = 'single_signature-not-string';
single_signature = 12;
error_mess = `TE@224 - TypeCzech.check_type() called with second parameter not a string such as 'number'. Matching 'single_signature-not-string' with '12'. Preferably try TypeCzech.check_type(12, 'number')`;
test_pre_check_type_single(single_variable, single_signature, 5985, error_mess);

single_variable  = 'single_signature-null';
single_signature = null;
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@220 - TypeCzech.check_type() called with a first parameter of string and a second shape parameter of null
check_type(arguments, expected_types)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "single_signature-null"
   EXPECTED TYPE null
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5986, error_mess);

single_variable  = 'single_signature-undefined';
single_signature = undefined;
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@218 - TypeCzech.check_type() called with a first parameter of string and a second shape parameter of undefined
check_type(arguments, expected_types)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "single_signature-undefined"
   EXPECTED TYPE undefined
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5987, error_mess);

single_variable  = ["Vinnie", "Barbarino"];
single_signature = ["string", "string", "boolean"];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@221 - Element '2' is supposed to be a 'boolean', but is missing : ["Vinnie","Barbarino"]
check_type(arguments, expected_types)
    ACTUAL TYPES 'array'
    ACTUAL VALUE ["Vinnie","Barbarino"]
   EXPECTED TYPE ["string","string","boolean"]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5988, error_mess);

expected_tests = 88;
expected_fails = 0;
if (expected_tests !== tested_check_type_05900) {
  throw new Error(`check_type_05900().md ${expected_tests} expected_tests !== ${tested_check_type_05900} tested_check_type_05900`);
} else if (expected_fails !== failed_check_type_05900) {
  throw new Error(`check_type_05900().md ${expected_fails} expected_fails !== ${failed_check_type_05900} failed_check_type_05900`);
} else if (typeof TEST_total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  TEST_total_checks += expected_tests;
}
