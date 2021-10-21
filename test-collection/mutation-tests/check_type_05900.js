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
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  tested_check_type_05900 += 1;

  function PRE_test_05900() {
    return type_czech.check_type(arguments, signature_of_parameter);
  }

  function pre_check_type_05900() {}
  pre_check_type_05900 = type_czech.link(pre_check_type_05900, PRE_test_05900);

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
single_signature = { x: [{ y: 'String' }] };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5901, error_mess);

single_variable  = { x: [{ y: 123456   }] };
single_signature = { x: [{ y: 'String' }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'y' is indicated to be a 'String', but is inaccurately a 'Number' : 123456
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {x:[{y:123456}]}
   EXPECTED TYPE {x:[{y:"String"}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5902, error_mess);

single_variable  = { a: [1, 2, 3] };
single_signature = { a: 'Object' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[1,2,3]
                                  check_type(arguments, expected_types)
                                      ACTUAL TYPES 'Object'
                                      ACTUAL VALUE {a:[1,2,3]}
                                    EXPECTED TYPE {a:"Object"}
                                  CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5903, error_mess);

single_variable  = [13, 14, 15];
single_signature = { r: 'Number' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@219 - Comparing actual [] parameter, with a value of [13,14,15],
                         against the expected shape of {"r":"Number"}. They should be the same type.
                         You cannot compare an array with a non-array; both []s, or both {"r":"Number"}s
                                      check_type(arguments, expected_types)
                                          ACTUAL TYPES 'Array'
                                          ACTUAL VALUE [13,14,15]
                                        EXPECTED TYPE {'r':'Number'}
                                      CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5904, error_mess);

single_variable  = { r: 'a-string' };
single_signature = ['Number'];
error_mess = ` PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@217 - Comparing actual 'Object' parameter, with a value of {r:"a-string"}, 
                          in relation to the expected shape of ["Number"]. They should be the same type.
                          You cannot compare an array with a non-array; both []s, or both 'Object's. Or same object keys
                                      check_type(arguments, expected_types)
                                          ACTUAL TYPES 'Object'
                                          ACTUAL VALUE {r:"a-string"}
                                        EXPECTED TYPE ['Number']
                                      CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5905, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5906, error_mess);

single_variable  = { a: [{ r: [ 'A-STRING ! ! !', [1, 2, 3],  987n,    false,     new Date('1999-12-12'), (x) => x,   12,        { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array',          ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Array', but is mistakenly a 'String'
                              check_type(arguments, expected_types)
                                  ACTUAL TYPES 'Object'
                                  ACTUAL VALUE {a:[{r:["A-STRING ! ! !",[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                                 EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
                              CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5907, error_mess);

single_variable  = { a: [{ r: [ [123],   'A-STRING ! ! !',  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'],        'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'String':A-STRING ! ! !
                          check_type(arguments, expected_types)
                              ACTUAL TYPES 'Object'
                              ACTUAL VALUE {a:[{r:[[123],"A-STRING ! ! !",987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                             EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
                          CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5908, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  'A-STRING ! ! !', false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt',         'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '2' is assumed to be a 'BigInt', but is mistakenly a 'String'
                      check_type(arguments, expected_types)
                          ACTUAL TYPES 'Object'
                          ACTUAL VALUE {a:[{r:[[123],[1,2,3],"A-STRING ! ! !",false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                        EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
                      CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5909, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     'A-STRING ! ! !', new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean',        'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '3' is assumed to be a 'Boolean', but is mistakenly a 'String'
                    check_type(arguments, expected_types)
                        ACTUAL TYPES 'Object'
                        ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,"A-STRING ! ! !",1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                      EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
                    CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5910, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     'A-STRING ! ! !', (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',           'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '4' is assumed to be a 'Date', but is mistakenly a 'String'
                        check_type(arguments, expected_types)
                            ACTUAL TYPES 'Object'
                            ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,"A-STRING ! ! !",(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
                          EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
                        CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5911, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), 'A-STRING ! ! !',  12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function',       'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '5' is assumed to be a 'Function', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,"A-STRING ! ! !",12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5912, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   'A-STRING ! ! !', { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number',         'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = ` PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '6' is assumed to be a 'Number', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,"A-STRING ! ! !",{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5913, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       'A-STRING ! ! !', { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object',         { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '7' is assumed to be a 'Object', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,"A-STRING ! ! !",{b:4},/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5914, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, 'A-STRING ! ! !', /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' },  'RegExp', 'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'String':A-STRING ! ! !
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},"A-STRING ! ! !",/d/ +++,"abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5915, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        'A-STRING ! ! !', 'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp',         'String', 'Symbol'        ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '9' is assumed to be a 'RegExp', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},"A-STRING ! ! !","abc",Symbol('sym')]}]}
   EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5916, error_mess);

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,     'abc',    'A-STRING ! ! !' ] }] };
single_signature = { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'         ] }] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '11' is assumed to be a 'Symbol', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc","A-STRING ! ! !"]}]}
   EXPECTED TYPE {a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5917, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [123];
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@225 - The value '[]', which is a 'Array', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [123]
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5918, error_mess);

single_variable  = [1, 2, 3];
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@219 - Comparing actual [] parameter, with a value of [1,2,3], against the expected shape of Date. They should be the same type. You cannot compare an array with a non-array; both []s, or both Dates
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1,2,3]
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5919, error_mess);

single_variable  = 987n;
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '987n', which is a 'BigInt', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'BigInt'
    ACTUAL VALUE 987n
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5920, error_mess);

single_variable  = false;
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'false', which is a 'Boolean', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Boolean'
    ACTUAL VALUE false
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5921, error_mess);

single_variable  = new Date('1999-12-12');
single_signature = 'Date';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5922, error_mess);

single_variable  = (x) => x;
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '(x) => x ***', which is a 'Function', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Function'
    ACTUAL VALUE (x) => x ***
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5923, error_mess);

single_variable  = 12;
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '12', which is a 'Number', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Number'
    ACTUAL VALUE 12
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5924, error_mess);

single_variable  = { a: 3 };
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@208 - The value '{}', which is a 'Object', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:3}
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5925, error_mess);

single_variable  = /d/;
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value '/d/ +++', which is a 'RegExp', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'RegExp'
    ACTUAL VALUE /d/ +++
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5926, error_mess);

single_variable  = 'abc';
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'abc', which is a 'String', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'String'
    ACTUAL VALUE "abc"
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5927, error_mess);

single_variable  = Symbol('sym');
single_signature = 'Date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Symbol'
    ACTUAL VALUE Symbol('sym')
   EXPECTED TYPE Date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5928, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[[[[[[ 1        ]]]]]]];
single_signature = [[[[[[[ 'Number' ]]]]]]];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5929, error_mess);

single_variable  = [[[[[[[ 1        ]]]]]]];
single_signature = [[[[[[[ 'String' ]]]]]]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[[[[[1]]]]]]]
   EXPECTED TYPE [[[[[[["String"]]]]]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5930, error_mess);

single_variable  =    [[[[[[ 1        ]]]]]];
single_signature = [  [[[[[[ 'Number' ]]]]]]  ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':1
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[[[[1]]]]]]
   EXPECTED TYPE [[[[[[["Number"]]]]]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5931, error_mess);

single_variable  = [  [[[[[[ 1        ]]]]]]  ];
single_signature =    [[[[[[ 'Number' ]]]]]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'Array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[[[[[1]]]]]]]
   EXPECTED TYPE [[[[[["Number"]]]]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5932, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: { c: { d: { e: 12       } } } } };
single_signature = { a: { b: { c: { d: { e: 'Number' } } } } };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5933, error_mess);

single_variable  = { a: { b: { c: { d: { e: 12       } } } } };
single_signature = { a: { b: { c: { d: { e: 'String' } } } } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'String', but is inaccurately a 'Number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:{b:{c:{d:{e:12}}}}}
   EXPECTED TYPE {a:{b:{c:{d:{e:"String"}}}}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5934, error_mess);

single_variable  = { a: { b: { c: { d: 12              } } } };
single_signature = { a: { b: { c: { d: { e: 'Number' } } } } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@210 - The type '{"e":"Number"}' is not a real type
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:{b:{c:{d:12}}}}
   EXPECTED TYPE {a:{b:{c:{d:{e:"Number"}}}}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5935, error_mess);

single_variable  = { a: { b: { c: { d: { e: 12 }   } } } };
single_signature = { a: { b: { c: { d: 'Number'    } } } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Number' but is of the wrong type of 'Object':{"e":12}
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:{b:{c:{d:{e:12}}}}}
   EXPECTED TYPE {a:{b:{c:{d:"Number"}}}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5936, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5937, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'String' } ] } ] } ] } ] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'String', but is inaccurately a 'Number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[{e:12}]}]}]}]}
   EXPECTED TYPE {a:[{b:[{c:[{d:[{e:"String"}]}]}]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5938, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Number':12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[12]}]}]}]}
   EXPECTED TYPE {a:[{b:[{c:[{d:[{e:"Number"}]}]}]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5939, error_mess);

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ 'Number'        ] } ] } ] } ] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'Object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:[{b:[{c:[{d:[{e:12}]}]}]}]}
   EXPECTED TYPE {a:[{b:[{c:[{d:["Number"]}]}]}]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5940, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5941, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'String' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'String', but is inaccurately a 'Number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:[{e:"String"}]}]}]}]}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5942, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Number':12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[12]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:[{e:"Number"}]}]}]}]}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5943, error_mess);

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ 'Number'        ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'Object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:["Number"]}]}]}]}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5944, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ]];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5945, error_mess);

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'String' ]] } } ]] } } ]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[1]]}}]]}}]]
   EXPECTED TYPE [[{a:{b:[[{c:{d:[["String"]]}}]]}}]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5946, error_mess);

single_variable  =  [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'Object':{"a":{"b":[[{"c":{"d":[[1]]}}]]}}
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:{b:[[{c:{d:[[1]]}}]]}}]
   EXPECTED TYPE [[{a:{b:[[{c:{d:[["Number"]]}}]]}}]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5947, error_mess);

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature =  [ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[{"a":{"b":[[{"c":{"d":[[1]]}}]]}}]
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[1]]}}]]}}]]
   EXPECTED TYPE [{a:{b:[[{c:{d:[["Number"]]}}]]}}]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5948, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } };
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5949, error_mess);

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'String' ]] } } ]] } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:{b:[[{c:{d:[[1]]}}]]}}
   EXPECTED TYPE {a:{b:[[{c:{d:[["String"]]}}]]}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5950, error_mess);

single_variable  =      { b: [[ { c: { d: [[ 1        ]] } } ]] };
single_signature = { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@216 -  The key 'a', which has a type of '{b:[[{c:{d:[["Number"]]}}]]}', is missing in the checked object
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {b:[[{c:{d:[[1]]}}]]}
   EXPECTED TYPE {a:{b:[[{c:{d:[["Number"]]}}]]}}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5951, error_mess);

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature =      { b: [[ { c: { d: [[ 'Number' ]] } } ]] };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@216 -  The key 'b', which has a type of '[[{c:{d:[["Number"]]}}]]', is missing in the checked object
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:{b:[[{c:{d:[[1]]}}]]}}
   EXPECTED TYPE {b:[[{c:{d:[["Number"]]}}]]}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5952, error_mess);

// /////////////////////////////////////////////////////////////////////////////////////////////
single_variable  = null;
single_signature = 'Number';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@226 - The value 'null', which is a 'null', is not a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'null'
    ACTUAL VALUE null
   EXPECTED TYPE Number
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5953, error_mess);

single_variable  = undefined;
single_signature = 'Number';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@206 - The value 'undefined', is not a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'undefined'
    ACTUAL VALUE undefined
   EXPECTED TYPE Number
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5954, error_mess);

single_variable  = [];
single_signature = 'Array';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5955, error_mess);

single_variable  = {};
single_signature = 'Object';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5956, error_mess);

single_variable  = [];
single_signature = ' [  ] ';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type ' [  ] ' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE []
   EXPECTED TYPE  [  ] 
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5957, error_mess);

single_variable  = {};
single_signature = ' { } ';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type ' { } ' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {}
   EXPECTED TYPE  { } 
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5958, error_mess);

// ////////////////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'array';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'array' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE []
   EXPECTED TYPE array
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5959, error_mess);

single_variable  = 123n;
single_signature = 'bigint';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'bigint' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'BigInt'
    ACTUAL VALUE 123n
   EXPECTED TYPE bigint
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5960, error_mess);

single_variable  = false;
single_signature = 'boolean';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'boolean' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Boolean'
    ACTUAL VALUE false
   EXPECTED TYPE boolean
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5961, error_mess);

single_variable  = new Date('1999-12-12');
single_signature = 'date';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'date' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Date'
    ACTUAL VALUE 1999-12-12T00:00:00.000Z
   EXPECTED TYPE date
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5962, error_mess);

single_variable  = (x) => x;
single_signature = 'function';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'function' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Function'
    ACTUAL VALUE (x) => x ***
   EXPECTED TYPE function
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5963, error_mess);

single_variable  = 12;
single_signature = 'number';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'number' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Number'
    ACTUAL VALUE 12
   EXPECTED TYPE number
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5964, error_mess);

single_variable  = { a: 12 };
single_signature = 'object';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'object' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:12}
   EXPECTED TYPE object
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5965, error_mess);

single_variable  = /d/;
single_signature = 'regexp';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'regexp' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'RegExp'
    ACTUAL VALUE /d/ +++
   EXPECTED TYPE regexp
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5966, error_mess);

single_variable  = 'a-string';
single_signature = 'string';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'string' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'String'
    ACTUAL VALUE "a-string"
   EXPECTED TYPE string
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5967, error_mess);

single_variable  = Symbol('sym');
single_signature = 'symbol';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'symbol' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Symbol'
    ACTUAL VALUE Symbol('sym')
   EXPECTED TYPE symbol
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5968, error_mess);

// ///////////////////////////////////////////////////////////////

single_variable  = [1];
single_signature = ['Number'];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5969, error_mess);

single_variable  = [1, 2];
single_signature = ['Number'];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5970, error_mess);

single_variable  = [1, 2, 'three'];
single_signature = ['Number'];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@215 - ELEMENT '2' is asserted to be a 'Number', but is fallaciously a 'String' : three
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1,2,"three"]
   EXPECTED TYPE ["Number"]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5971, error_mess);

single_variable  = [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ];
single_signature = [['Number']];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5972, error_mess);

single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ];
single_signature = [[['Number']]];
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5973, error_mess);

single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                [ [1, 2, 3], [1, 2, 3], [1, '2', 3] ]    ];
single_signature = [[['Number']]];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@215 - ELEMENT '1' is asserted to be a 'Number', but is fallaciously a 'String' : 2
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"2",3]]]
   EXPECTED TYPE [[["Number"]]]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5974, error_mess);

// ////////////////////////////////////////

single_variable  = 'not-object';
single_signature = { an_object: 'Boaty-McBoatFace' };
error_mess = `TE@201 - TypeCzech.check_type() called with '{}' against '!{}'. Contrasting String, a`
             + ` 'String' type, with '{"an_object":"Boaty-McBoatFace"}' an Object`;
test_pre_check_type_single(single_variable, single_signature, 5975, error_mess);

single_variable  = 'a-string';
single_signature = 'null';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@203 - The type 'null' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type
check_type(arguments, expected_types)
    ACTUAL TYPES 'String'
    ACTUAL VALUE "a-string"
   EXPECTED TYPE null
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5976, error_mess);

single_variable  = 91;
single_signature = 'undefined';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@203 - The type 'undefined' is not a valid check_type(), check_typeEither(), or check_typeExtra() second parameter type
check_type(arguments, expected_types)
    ACTUAL TYPES 'Number'
    ACTUAL VALUE 91
   EXPECTED TYPE undefined
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5977, error_mess);

single_variable  = 91;
single_signature = 'Ford Torino';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'Ford Torino' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Number'
    ACTUAL VALUE 91
   EXPECTED TYPE Ford Torino
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5978, error_mess);

single_variable  = { a: 1, b: 2 };
single_signature = { a: 'Number' };
error_mess = ` PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@209 - Extra key in checked object - (b:'2')
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:1,b:2}
   EXPECTED TYPE {a:"Number"}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5979, error_mess);

single_variable  = { a: undefined };
single_signature = { a: 'Number' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@211 - Key 'a' was given to be a 'Number' but was instead 'undefined'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:undefined}
   EXPECTED TYPE {a:"Number"}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5980, error_mess);

single_variable  = { a: null };
single_signature = { a: 'Number' };
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@212 - Key 'a' was determined to be a 'Number' but was instead 'null'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {a:null}
   EXPECTED TYPE {a:"Number"}
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5981, error_mess);

// TE@217
single_variable  = 'a-string';
single_signature = ['Number'];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@217 - Comparing actual 'String' parameter, with a value of a-string, in relation to the expected shape of ["Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's. Or same object keys
check_type(arguments, expected_types)
    ACTUAL TYPES 'String'
    ACTUAL VALUE "a-string"
   EXPECTED TYPE ['Number']
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5982, error_mess);

single_variable  = console;
single_signature = 'Object';
error_mess = '';
test_pre_check_type_single(single_variable, single_signature, 5983, error_mess);

single_variable  = Date;
single_signature = 'bad-classname';
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@230 - The type 'bad-classname' is invalid
check_type(arguments, expected_types)
    ACTUAL TYPES 'Function'
    ACTUAL VALUE function Date() { [native code ***
   EXPECTED TYPE bad-classname
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5984, error_mess);

single_variable  = 'single_signature-not-string';
single_signature = 12;
error_mess = `TE@224 - TypeCzech.check_type() called with second parameter not a string such as 'Number'. Matching 'String' with '12'. Preferably try TypeCzech.check_type(12, 'Number')`;
test_pre_check_type_single(single_variable, single_signature, 5985, error_mess);

single_variable  = 'single_signature-null';
single_signature = null;
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@220 - TypeCzech.check_type() called with a first parameter of String and a second shape parameter of null
check_type(arguments, expected_types)
    ACTUAL TYPES 'String'
    ACTUAL VALUE "single_signature-null"
   EXPECTED TYPE null
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5986, error_mess);

single_variable  = 'single_signature-undefined';
single_signature = undefined;
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@218 - TypeCzech.check_type() called with a first parameter of String and a second shape parameter of undefined
check_type(arguments, expected_types)
    ACTUAL TYPES 'String'
    ACTUAL VALUE "single_signature-undefined"
   EXPECTED TYPE undefined
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5987, error_mess);

single_variable  = ["Vinnie", "Barbarino"];
single_signature = ["String", "String", "boolean"];
error_mess = `PRE_test_05900() pre_check_type_05900() PRE-FUNC: TE@221 - Element '2' is supposed to be a 'boolean', but is missing : ["Vinnie","Barbarino"]
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["Vinnie","Barbarino"]
   EXPECTED TYPE ["String","String","boolean"]
CALLING FUNCTION PRE_test_05900()`;
test_pre_check_type_single(single_variable, single_signature, 5988, error_mess);

expected_tests = 88;
expected_fails = 0;
if (expected_tests !== tested_check_type_05900) {
  throw new Error(`check_type_05900().md ${expected_tests} expected_tests !== ${tested_check_type_05900} tested_check_type_05900`);
} else if (expected_fails !== failed_check_type_05900) {
  throw new Error(`check_type_05900().md ${expected_fails} expected_fails !== ${failed_check_type_05900} failed_check_type_05900`);
} else if (typeof total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  total_checks += expected_tests;
}
