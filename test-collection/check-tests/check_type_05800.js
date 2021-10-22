/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_type_multi(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech_test = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_check_type_05800 += 1;

  function PRE_test_05800() {
    return type_czech_test.check_type(arguments, signature_of_parameters);
  }

  function pre_check_type_05800() {}
  pre_check_type_05800 = type_czech_test.linkUp(pre_check_type_05800, PRE_test_05800);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_check_type_05800(parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_type_05800 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_type_05800(parameters_array);
      // failing path, should have been an exception
      failed_check_type_05800 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_type_05800 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(parameters_array, signature_of_parameters, before_var_value, error_id);
}

tested_check_type_05800 = 0;
failed_check_type_05800 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [{ x: [{ y: 'z'      }] }, { x: [{ y: 'z'      }] }];
multi_signature = [{ x: [{ y: 'String' }] }, { x: [{ y: 'String' }] }];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5801, error_mess);

multi_variable  = [{ x: [{ y: 123456   }] }, { x: [{ y: 123456   }] }];
multi_signature = [{ x: [{ y: 'String' }] }, { x: [{ y: 'String' }] }];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@213 - Property 'y' is indicated to be a 'String', but is inaccurately a 'Number' : 123456
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{x:[{y:123456}]},{x:[{y:123456}]}]
   EXPECTED TYPE [{x:[{y:"String"}]},{x:[{y:"String"}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5802, error_mess);

multi_variable  = [{ a: [1, 2, 3] }, { a: [1, 2, 3] }];
multi_signature = [{ a: 'Object' }, { a: 'Object' }];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[1,2,3]
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[1,2,3]},{a:[1,2,3]}]
   EXPECTED TYPE [{a:"Object"},{a:"Object"}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5803, error_mess);

multi_variable  = [ [13, 14, 15], [13, 14, 15] ];
multi_signature = [ { r: 'Number' }, { r: 'Number' } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[13,14,15]
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[13,14,15],[13,14,15]]
   EXPECTED TYPE [{r:"Number"},{r:"Number"}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5804, error_mess);

multi_variable  = [ { r: 'a-string' }, { r: 'a-string' } ];
multi_signature = [ ['Number'], ['Number'] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'Object':{"r":"a-string"}
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{r:"a-string"},{r:"a-string"}]
   EXPECTED TYPE [["Number"],["Number"]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5805, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5806, error_mess);

multi_variable  = [ { a: [{ r: [  [123],  [1, 2, 3],  987n,    false,     new Date('1999-12-12'), (x) => x,   12,        { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ 'A-STRING ! ! !', [1, 2, 3],  987n,    false,     new Date('1999-12-12'), (x) => x,   12,        { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'      ] }] }, { a: [{ r: [ 'Array',          ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Array', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:["A-STRING ! ! !",[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5807, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   'A-STRING ! ! !',  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] }, { a: [{ r: [ 'Array', ['Number'],        'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = ` PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'String':A-STRING ! ! !
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],"A-STRING ! ! !",987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5808, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  'A-STRING ! ! !', false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] },  { a: [{ r: [ 'Array', ['Number'], 'BigInt',         'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '2' is assumed to be a 'BigInt', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],"A-STRING ! ! !",false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5809, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     'A-STRING ! ! !', new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean',        'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '3' is assumed to be a 'Boolean', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,"A-STRING ! ! !",1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5810, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     'A-STRING ! ! !', (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',           'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '4' is assumed to be a 'Date', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,"A-STRING ! ! !",(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5811, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), 'A-STRING ! ! !',  12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function',       'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '5' is assumed to be a 'Function', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,"A-STRING ! ! !",12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5812, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   'A-STRING ! ! !', { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number',         'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '6' is assumed to be a 'Number', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,"A-STRING ! ! !",{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5813, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       'A-STRING ! ! !', { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'       ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object',         { b: 'Number' }, 'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '7' is assumed to be a 'Object', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,"A-STRING ! ! !",{b:4},/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5814, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, 'A-STRING ! ! !', /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'      ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' },  'RegExp', 'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'String':A-STRING ! ! !
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},"A-STRING ! ! !",/d/ +++,"abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5815, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        'A-STRING ! ! !', 'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'      ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp',         'String', 'Symbol'        ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '9' is assumed to be a 'RegExp', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},"A-STRING ! ! !","abc",Symbol('sym')]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5816, error_mess);

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,     'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,     'abc',    'A-STRING ! ! !' ] }] } ];
multi_signature = [ { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'      ] }] }, { a: [{ r: [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date',                 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol'         ] }] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '11' is assumed to be a 'Symbol', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ***,12,{a:3},{b:4},/d/ +++,"abc","A-STRING ! ! !"]}]}]
   EXPECTED TYPE [{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]},{a:[{r:["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String","Symbol"]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5817, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ new Date('1999-12-12'), [123] ];
multi_signature = [ 'Date',                 'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,[123]]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5818, error_mess);

multi_variable  = [ new Date('1999-12-12'), [1, 2, 3] ];
multi_signature = [ 'Date',                 'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,[1,2,3]]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5819, error_mess);

multi_variable  = [ new Date('1999-12-12'), 987n ];
multi_signature = [ 'Date',                'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'BigInt'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,987n]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5820, error_mess);

multi_variable  = [ new Date('1999-12-12'), false ];
multi_signature = [ 'Date',                 'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Boolean'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,false]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5821, error_mess);

multi_variable  = [ new Date('1999-12-12'), new Date('1999-12-12') ];
multi_signature = [ 'Date', 'Date' ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5822, error_mess);

multi_variable  = [ new Date('1999-12-12'), (x) => x ];
multi_signature = [ 'Date',                 'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Function'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,(x) => x ***]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5823, error_mess);

multi_variable  = [ new Date('1999-12-12'), 12     ];
multi_signature = [ 'Date',                 'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,12]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5824, error_mess);

multi_variable  = [ new Date('1999-12-12'), { a: 3 } ];
multi_signature = [ 'Date',                 'Date'   ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,{a:3}]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5825, error_mess);

multi_variable  = [ new Date('1999-12-12'), /d/    ];
multi_signature = [ 'Date',                 'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'RegExp'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,/d/ +++]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5826, error_mess);

multi_variable  = [ new Date('1999-12-12'), 'abc'  ];
multi_signature = [ 'Date',                 'Date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,"abc"]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5827, error_mess);

multi_variable  = [ new Date('1999-12-12'), Symbol('sym') ];
multi_signature = [ 'Date',                 'Date'        ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Date', but is mistakenly a 'Symbol'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,Symbol('sym')]
   EXPECTED TYPE ["Date","Date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5828, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ [[[[[[[ 1        ]]]]]]], [[[[[[[ 1        ]]]]]]] ];
multi_signature = [ [[[[[[[ 'Number' ]]]]]]], [[[[[[[ 'Number' ]]]]]]] ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5829, error_mess);

multi_variable  = [ [[[[[[[ 'a'      ]]]]]]], [[[[[[[ 1        ]]]]]]] ];
multi_signature = [ [[[[[[[ 'String' ]]]]]]], [[[[[[[ 'String' ]]]]]]] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[[[[[["a"]]]]]]],[[[[[[[1]]]]]]]]
   EXPECTED TYPE [[[[[[[["String"]]]]]]],[[[[[[["String"]]]]]]]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5830, error_mess);

multi_variable  = [ [  [[[[[[ 1        ]]]]]]  ],    [[[[[[ 1        ]]]]]]    ];
multi_signature = [ [  [[[[[[ 'Number' ]]]]]]  ], [  [[[[[[ 'Number' ]]]]]]  ] ];
error_mess = ` PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':1
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[[[[[[1]]]]]]],[[[[[[1]]]]]]]
   EXPECTED TYPE [[[[[[[["Number"]]]]]]],[[[[[[["Number"]]]]]]]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5831, error_mess);

multi_variable  = [ [[[[[[ 1        ]]]]]], [  [[[[[[ 1        ]]]]]]  ] ];
multi_signature = [ [[[[[[ 'Number' ]]]]]],    [[[[[[ 'Number' ]]]]]]    ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'Array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[[[[[1]]]]]],[[[[[[[1]]]]]]]]
   EXPECTED TYPE [[[[[[["Number"]]]]]],[[[[[["Number"]]]]]]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5832, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: { b: { c: { d: { e: 12       } } } } }, { a: { b: { c: { d: { e: 12       } } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'Number' } } } } }, { a: { b: { c: { d: { e: 'Number' } } } } } ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5833, error_mess);

multi_variable  = [ { a: { b: { c: { d: { e: 's'      } } } } }, { a: { b: { c: { d: { e: 12       } } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'String' } } } } }, { a: { b: { c: { d: { e: 'String' } } } } } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'String', but is inaccurately a 'Number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:{b:{c:{d:{e:"s"}}}}},{a:{b:{c:{d:{e:12}}}}}]
   EXPECTED TYPE [{a:{b:{c:{d:{e:"String"}}}}},{a:{b:{c:{d:{e:"String"}}}}}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5834, error_mess);

multi_variable  = [ { a: { b: { c: { d: { e: 12       } } } } }, { a: { b: { c: { d: 12              } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'Number' } } } } }, { a: { b: { c: { d: { e: 'Number' } } } } } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@210 - The type '{"e":"Number"}' is not a real type
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:{b:{c:{d:{e:12}}}}},{a:{b:{c:{d:12}}}}]
   EXPECTED TYPE [{a:{b:{c:{d:{e:"Number"}}}}},{a:{b:{c:{d:{e:"Number"}}}}}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5835, error_mess);

multi_variable  = [ { a: { b: { c: { d: 12       } } } }, { a: { b: { c: { d: { e: 12 }   } } } } ];
multi_signature = [ { a: { b: { c: { d: 'Number' } } } }, { a: { b: { c: { d: 'Number'    } } } } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Number' but is of the wrong type of 'Object':{"e":12}
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:{b:{c:{d:12}}}},{a:{b:{c:{d:{e:12}}}}}]
   EXPECTED TYPE [{a:{b:{c:{d:"Number"}}}},{a:{b:{c:{d:"Number"}}}}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5836, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5837, error_mess);

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 's'      } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'String' } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 'String' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'String', but is inaccurately a 'Number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[{e:"s"}]}]}]}]},{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:[{e:"String"}]}]}]}]},{a:[{b:[{c:[{d:[{e:"String"}]}]}]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5838, error_mess);

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12 }       ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Number':12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[{e:12}]}]}]}]},{a:[{b:[{c:[{d:[12]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:[{e:"Number"}]}]}]}]},{a:[{b:[{c:[{d:[{e:"Number"}]}]}]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5839, error_mess);

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ 12       ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ 'Number' ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ 'Number'        ] } ] } ] } ] } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'Object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:[{b:[{c:[{d:[12]}]}]}]},{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
   EXPECTED TYPE [{a:[{b:[{c:[{d:["Number"]}]}]}]},{a:[{b:[{c:[{d:["Number"]}]}]}]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5840, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ] ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5841, error_mess);

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ { e: 's'      } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ { e: 'String' } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 'String' } ] } ] } ] } ] } ] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'String', but is inaccurately a 'Number' : 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[{a:[{b:[{c:[{d:[{e:"s"}]}]}]}]}],[{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]]
   EXPECTED TYPE [[{a:[{b:[{c:[{d:[{e:"String"}]}]}]}]}],[{a:[{b:[{c:[{d:[{e:"String"}]}]}]}]}]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5842, error_mess);

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 'Number' } ] } ] } ] } ] } ] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Number':12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[{a:[{b:[{c:[{d:[{e:12}]}]}]}]}],[{a:[{b:[{c:[{d:[12]}]}]}]}]]
   EXPECTED TYPE [[{a:[{b:[{c:[{d:[{e:"Number"}]}]}]}]}],[{a:[{b:[{c:[{d:[{e:"Number"}]}]}]}]}]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5843, error_mess);

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ 12       ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ 'Number' ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ 'Number'        ] } ] } ] } ] } ] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Number', but is mistakenly a 'Object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[{a:[{b:[{c:[{d:[12]}]}]}]}],[{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]]
   EXPECTED TYPE [[{a:[{b:[{c:[{d:["Number"]}]}]}]}],[{a:[{b:[{c:[{d:["Number"]}]}]}]}]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5844, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]] ];
multi_signature = [ [[ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ]] ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5845, error_mess);

multi_variable  = [ [[ { a: { b: [[ { c: { d: [[ 'sst'    ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]] ];
multi_signature = [ [[ { a: { b: [[ { c: { d: [[ 'String' ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 'String' ]] } } ]] } } ]] ];
error_mess = ` PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[{a:{b:[[{c:{d:[["sst"]]}}]]}}]],[[{a:{b:[[{c:{d:[[1]]}}]]}}]]]
   EXPECTED TYPE [[[{a:{b:[[{c:{d:[["String"]]}}]]}}]],[[{a:{b:[[{c:{d:[["String"]]}}]]}}]]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5846, error_mess);

multi_variable  = [ [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ],   [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]   ];
multi_signature = [ [ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ], [ [ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ] ] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'Object':{"a":{"b":[[{"c":{"d":[[1]]}}]]}}
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[1]]}}]]}}],[{a:{b:[[{c:{d:[[1]]}}]]}}]]
   EXPECTED TYPE [[{a:{b:[[{c:{d:[["Number"]]}}]]}}],[[{a:{b:[[{c:{d:[["Number"]]}}]]}}]]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5847, error_mess);

multi_variable  = [ [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ], [ [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ] ] ];
multi_signature = [ [ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ],   [ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ]   ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[{"a":{"b":[[{"c":{"d":[[1]]}}]]}}]
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[{a:{b:[[{c:{d:[[1]]}}]]}}],[[{a:{b:[[{c:{d:[[1]]}}]]}}]]]
   EXPECTED TYPE [[{a:{b:[[{c:{d:[["Number"]]}}]]}}],[{a:{b:[[{c:{d:[["Number"]]}}]]}}]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5848, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
multi_signature = [ { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5849, error_mess);

multi_variable  = [ { a: { b: [[ { c: { d: [[ 'abc'    ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
multi_signature = [ { a: { b: [[ { c: { d: [[ 'String' ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 'String' ]] } } ]] } } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:{b:[[{c:{d:[["abc"]]}}]]}},{a:{b:[[{c:{d:[[1]]}}]]}}]
   EXPECTED TYPE [{a:{b:[[{c:{d:[["String"]]}}]]}},{a:{b:[[{c:{d:[["String"]]}}]]}}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5850, error_mess);

multi_variable  = [ { b: [[ { c: { d: [[ 1        ]] } } ]] },      { b: [[ { c: { d: [[ 1        ]] } } ]] }   ];
multi_signature = [ { b: [[ { c: { d: [[ 'Number' ]] } } ]] }, { a: { b: [[ { c: { d: [[ 'Number' ]] } } ]] } } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@216 -  The key 'a', which has a type of '{b:[[{c:{d:[["Number"]]}}]]}', is missing in the checked object
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{b:[[{c:{d:[[1]]}}]]},{b:[[{c:{d:[[1]]}}]]}]
   EXPECTED TYPE [{b:[[{c:{d:[["Number"]]}}]]},{a:{b:[[{c:{d:[["Number"]]}}]]}}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5851, error_mess);

multi_variable  = [ { b: [[ { c: { d: [[ 1        ]] } } ]] }, { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
multi_signature = [ { b: [[ { c: { d: [[ 'Number' ]] } } ]] },      { b: [[ { c: { d: [[ 'Number' ]] } } ]] }   ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@216 -  The key 'b', which has a type of '[[{c:{d:[["Number"]]}}]]', is missing in the checked object
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{b:[[{c:{d:[[1]]}}]]},{a:{b:[[{c:{d:[[1]]}}]]}}]
   EXPECTED TYPE [{b:[[{c:{d:[["Number"]]}}]]},{b:[[{c:{d:[["Number"]]}}]]}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5852, error_mess);

// // /////////////////////////////////////////////////////////////////////////////////////////////
multi_variable  = [ 1,         null    ];
multi_signature = [ 'Number', 'Number' ];
error_mess = ` PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Number', but is mistakenly a 'null'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1,null]
   EXPECTED TYPE ["Number","Number"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5853, error_mess);

multi_variable  = [ 42,       undefined ];
multi_signature = [ 'Number', 'Number' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Number', but is mistakenly a 'undefined'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [42,undefined]
   EXPECTED TYPE ["Number","Number"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5854, error_mess);

multi_variable  = [ [],      []      ];
multi_signature = [ 'Array', 'Array' ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5855, error_mess);

multi_variable  = [ {},       {}       ];
multi_signature = [ 'Object', 'Object' ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5856, error_mess);

multi_variable  = [ [],       [] ];
multi_signature = [ 'Array', ' [  ] ' ];   // NB the second parameter can be a class name
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a ' [  ] ', but is mistakenly a 'Array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[],[]]
   EXPECTED TYPE ["Array"," [  ] "]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5857, error_mess);

multi_variable  = [ {},         {} ];
multi_signature = [ 'Object', ' { } '];  // NB the second parameter can be a class name
error_mess = ` PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a ' { } ', but is mistakenly a 'Object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{},{}]
   EXPECTED TYPE ["Object"," { } "]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5858, error_mess);

// // ////////////////////////////////////////////////////////////////

multi_variable  = [ [],      [] ];
multi_signature = [ 'Array', 'array' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'array' is not a check_type type, but it looks just like 'Array'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[],[]]
   EXPECTED TYPE ["Array","array"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5859, error_mess);

multi_variable  = [ 123n,      123n ];
multi_signature = [ 'BigInt', 'bigint' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'bigint' is not a check_type type, but it looks just like 'BigInt'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [123n,123n]
   EXPECTED TYPE ["BigInt","bigint"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5860, error_mess);

multi_variable  = [ false,     false ];
multi_signature = [ 'Boolean', 'boolean' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'boolean' is not a check_type type, but it looks just like 'Boolean'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [false,false]
   EXPECTED TYPE ["Boolean","boolean"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5861, error_mess);

multi_variable  = [ new Date('1999-12-12'), new Date('1999-12-12') ];
multi_signature = [ 'Date',                 'date' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'date' is not a check_type type, but it looks just like 'Date'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [1999-12-12T00:00:00.000Z,1999-12-12T00:00:00.000Z]
   EXPECTED TYPE ["Date","date"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5862, error_mess);

multi_variable  = [ (x) => x,   (x) => x ];
multi_signature = [ 'Function', 'function' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'function' is not a check_type type, but it looks just like 'Function'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [(x) => x ***,(x) => x ***]
   EXPECTED TYPE ["Function","function"]
CALLING FUNCTION PRE_test_05800()
`;
test_pre_check_type_multi(multi_variable, multi_signature, 5863, error_mess);

multi_variable  = [ 12,        12      ];
multi_signature = [ 'Number', 'number' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'number' is not a check_type type, but it looks just like 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [12,12]
   EXPECTED TYPE ["Number","number"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5864, error_mess);

multi_variable  = [ { a: 12 }, { a: 12 } ];
multi_signature = [ 'Object',  'object'  ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'object' is not a check_type type, but it looks just like 'Object'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:12},{a:12}]
   EXPECTED TYPE ["Object","object"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5865, error_mess);

multi_variable  = [ /d/,      /d/ ];
multi_signature = [ 'RegExp', 'regexp' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'regexp' is not a check_type type, but it looks just like 'RegExp'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [/d/ +++,/d/ +++]
   EXPECTED TYPE ["RegExp","regexp"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5866, error_mess);

multi_variable  = [ 'a-string', 'a-string' ];
multi_signature = [ 'String',   'string' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'string' is not a check_type type, but it looks just like 'String'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["a-string","a-string"]
   EXPECTED TYPE ["String","string"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5867, error_mess);

multi_variable  = [ Symbol('sym'), Symbol('sym') ];
multi_signature = [ 'Symbol',      'symbol' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@205 - The type 'symbol' is not a check_type type, but it looks just like 'Symbol'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [Symbol('sym'),Symbol('sym')]
   EXPECTED TYPE ["Symbol","symbol"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5868, error_mess);

// // ///////////////////////////////////////////////////////////////

multi_variable  = [ [1],        [1]        ];
multi_signature = [ ['Number'], ['Number'] ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5869, error_mess);

multi_variable  = [ [1, 2], [1, 2] ];
multi_signature = [ ['Number'], ['Number'] ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5870, error_mess);

multi_variable  = [ [1, 2, 3],  [1, 2, 'three'] ];
multi_signature = [ ['Number'], ['Number'] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@215 - ELEMENT '2' is asserted to be a 'Number', but is fallaciously a 'String' : three
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[1,2,3],[1,2,"three"]]
   EXPECTED TYPE [["Number"],["Number"]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5871, error_mess);

multi_variable  = [ [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ], [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ] ];
multi_signature = [ [['Number']],                        [['Number']]                        ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5872, error_mess);

multi_variable  = [ [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ],
                    [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ]    ];
multi_signature = [ [   [ ['Number'                     ] ]    ],
                    [   [ ['Number'                     ] ]    ]    ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5873, error_mess);

multi_variable  = [ [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                        [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                        [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ]    ],
                    [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                        [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 'X', 3] ]    ]    ];
multi_signature = [ [   [ ['Number'                       ] ]    ],
                    [   [ ['Number'                       ] ]    ]    ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@215 - ELEMENT '1' is asserted to be a 'Number', but is fallaciously a 'String' : X
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]],[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"X",3]]]]
   EXPECTED TYPE [[[["Number"]]],[[["Number"]]]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5874, error_mess);

// // ////////////////////////////////////////

multi_variable  = [ { an_object: 'robot-sub' }, 'not-object' ];
multi_signature = [ { an_object: 'String'    }, { an_object: 'Boaty-McBoatFace' } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'String':not-object
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{an_object:"robot-sub"},"not-object"]
   EXPECTED TYPE [{an_object:"String"},{an_object:"Boaty-McBoatFace"}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5875, error_mess);

multi_variable  = [ 'a-string', 'a-string' ];
multi_signature = [ 'String',   'null' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@204 -  ELEMENT '1' type is invalid 'null'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["a-string","a-string"]
   EXPECTED TYPE ["String","null"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5876, error_mess);

multi_variable  = [ 91,       92 ];
multi_signature = [ 'Number', 'undefined' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@229 -  ELEMENT '1' type is invalid 'undefined'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [91,92]
   EXPECTED TYPE ["Number","undefined"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5877, error_mess);

multi_variable  = [ 91, 93];
multi_signature = [ 'Number', 'Ford Torino' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Ford Torino', but is mistakenly a 'Number'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [91,93]
   EXPECTED TYPE ["Number","Ford Torino"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5878, error_mess);

multi_variable  = [ { a: 1,        b: 2 },        { a: 3, b: 4 } ];
multi_signature = [ { a: 'Number', b: 'Number' }, { a: 'Number' } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@209 - Extra key in checked object - (b:'4')
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:1,b:2},{a:3,b:4}]
   EXPECTED TYPE [{a:"Number",b:"Number"},{a:"Number"}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5879, error_mess);

multi_variable  = [ { a: 1011 },     { a: undefined } ];
multi_signature = [ { a: 'Number' }, { a: 'Number' } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@211 - Key 'a' was given to be a 'Number' but was instead 'undefined'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:1011},{a:undefined}]
   EXPECTED TYPE [{a:"Number"},{a:"Number"}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5880, error_mess);

multi_variable  = [ { a: 1213 },     { a: null } ];
multi_signature = [ { a: 'Number' }, { a: 'Number' } ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@212 - Key 'a' was determined to be a 'Number' but was instead 'null'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [{a:1213},{a:null}]
   EXPECTED TYPE [{a:"Number"},{a:"Number"}]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5881, error_mess);

multi_variable  = [ 14,        'a-string' ];
multi_signature = [ 'Number', ['Number'] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'String':a-string
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [14,"a-string"]
   EXPECTED TYPE ["Number",["Number"]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5882, error_mess);

multi_variable  = [ console,   console ];
multi_signature = [ 'Object', 'Object' ];
error_mess = '';
test_pre_check_type_multi(multi_variable, multi_signature, 5883, error_mess);

multi_variable  = [ 'bob',    Date ];
multi_signature = [ 'String', 'bad-classname' ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'bad-classname', but is mistakenly a 'Function'
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["bob",function Date() { [native code ***]
   EXPECTED TYPE ["String","bad-classname"]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5884, error_mess);

multi_variable  = [ 'multi_signature-not-string', 'multi_signature-not-string' ];
multi_signature = [ 'String',                     12 ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@230 -  ELEMENT '1' type is invalid as it is not a string but instead 12
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["multi_signature-not-string","multi_signature-not-string"]
   EXPECTED TYPE ["String",12]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5885, error_mess);

multi_variable  = [ 'multi_signature-null', 'multi_signature-null' ];
multi_signature = [ 'String', null ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@230 -  ELEMENT '1' type is invalid as it is not a string but instead null
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["multi_signature-null","multi_signature-null"]
   EXPECTED TYPE ["String",null]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5886, error_mess);

multi_variable  = [ 'multi_signature-undefined', 'multi_signature-undefined' ];
multi_signature = [ 'String', undefined ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@230 -  ELEMENT '1' type is invalid as it is not a string but instead undefined
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["multi_signature-undefined","multi_signature-undefined"]
   EXPECTED TYPE ["String",undefined]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5887, error_mess);

multi_variable  = [ ["Vinnie", "Barbarino"], ["Vinnie", "Barbarino"] ];
multi_signature = [ ["String", "String"   ], ["String", "String", "boolean"] ];
error_mess = `PRE_test_05800() pre_check_type_05800() PRE-FUNC: TE@221 - Element '2' is supposed to be a 'boolean', but is missing : ["Vinnie","Barbarino"]
check_type(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [["Vinnie","Barbarino"],["Vinnie","Barbarino"]]
   EXPECTED TYPE [["String","String"],["String","String","boolean"]]
CALLING FUNCTION PRE_test_05800()`;
test_pre_check_type_multi(multi_variable, multi_signature, 5888, error_mess);

expected_tests = 88;
expected_fails = 0;
if (expected_tests !== tested_check_type_05800) {
  throw new Error(`check_type_05800().md ${expected_tests} expected_tests !== ${tested_check_type_05800} tested_check_type_05800`);
} else if (expected_fails !== failed_check_type_05800) {
  throw new Error(`check_type_05800().md ${expected_fails} expected_fails !== ${failed_check_type_05800} failed_check_type_05800`);
} else if (typeof TEST_total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  TEST_total_checks += expected_tests;
}
