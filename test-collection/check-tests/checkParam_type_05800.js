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

function test_pre_checkParam_type_multi(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  pass_count += 1;

  function PRE_test_05800(a_var) {
    return type_czech.checkParam_type(a_var, signature_of_parameters);
  }

  function pre_checkParam_type_05800() {}
  pre_checkParam_type_05800 = type_czech.linkUp(pre_checkParam_type_05800, PRE_test_05800);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_checkParam_type_05800(parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_checkParam_type_05800(parameters_array);
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

multi_variable  = [{ x: [{ y: 'z'      }] }, { x: [{ y: 'z'      }] }];
multi_signature = [{ x: [{ y: 'string' }] }, { x: [{ y: 'string' }] }];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5801, error_mess);
printTestName("checkParam_type_5801")

multi_variable  = [{ x: [{ y: 123456   }] }, { x: [{ y: 123456   }] }];
multi_signature = [{ x: [{ y: 'string' }] }, { x: [{ y: 'string' }] }];
error_mess = `PRE_test_05800() PRE-FUNC: TE@213 - Property 'y' is indicated to be a 'string', but is inaccurately a 'number' : 123456
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{x:[{y:123456}]},{x:[{y:123456}]}]
EXPECTED TYPE [{"x":[{"y":"string"}]},{"x":[{"y":"string"}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5802, error_mess);
printTestName("checkParam_type_5802")

multi_variable  = [{ a: [1, 2, 3] }, { a: [1, 2, 3] }];
multi_signature = [{ a: 'object' }, { a: 'object' }];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[1,2,3]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[1,2,3]},{a:[1,2,3]}]
EXPECTED TYPE [{"a":"object"},{"a":"object"}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5803, error_mess);
printTestName("checkParam_type_5803")

multi_variable  = [ [13, 14, 15], [13, 14, 15] ];
multi_signature = [ { r: 'number' }, { r: 'number' } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[13,14,15]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[13,14,15],[13,14,15]]
EXPECTED TYPE [{"r":"number"},{"r":"number"}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5804, error_mess);
printTestName("checkParam_type_5804")

multi_variable  = [ { r: 'a-string' }, { r: 'a-string' } ];
multi_signature = [ ['number'], ['number'] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'object':{"r":"a-string"}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{r:"a-string"},{r:"a-string"}]
EXPECTED TYPE [["number"],["number"]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5805, error_mess);
printTestName("checkParam_type_5805")

// /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],         987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],  [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];

// multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3]         ]}]}];
// multi_signature = [ { a: [{ r: [ 'array', ['numbers']  ]}]}];

// multi_variable  = [ { a: [{ r: [ [123]      ]}]}];
// multi_signature = [ { a: [{ r: [ 'array'    ]}]}];

error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5806, error_mess);
printTestName("checkParam_type_5806")

multi_variable  = [ { a: [{ r: [  [123],  [1, 2, 3],        987n,    false,     new Date('1999-12-12'), (x) => x,   12,        { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ 'A-STRING ! ! !', [1, 2, 3],  987n,    false,     new Date('1999-12-12'), (x) => x,   12,        { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'      ] }] }, { a: [{ r: [ 'array',          ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'array', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:["A-STRING ! ! !",[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5807, error_mess);
printTestName("checkParam_type_5807")

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   'A-STRING ! ! !',  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] }, { a: [{ r: [ 'array', ['numbers'],        'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'string':A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],"A-STRING ! ! !",987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5808, error_mess);
printTestName("checkParam_type_5808")

multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  'A-STRING ! ! !', false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] },  { a: [{ r: [ 'array', ['numbers'], 'bigint',         'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '2' is assumed to be a 'bigint', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],"A-STRING ! ! !",false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5809, error_mess);
printTestName("checkParam_type_5809")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],        987n,     'A-STRING ! ! !', new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean',        'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '3' is assumed to be a 'boolean', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,"A-STRING ! ! !",1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5810, error_mess);
printTestName("checkParam_type_5810")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     'A-STRING ! ! !', (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',           'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '4' is assumed to be a 'date', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,"A-STRING ! ! !",(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5811, error_mess);
printTestName("checkParam_type_5811")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],         987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],  [1, 2, 3],  987n,     false,     new Date('1999-12-12'), 'A-STRING ! ! !',  12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function',       'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '5' is assumed to be a 'function', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,"A-STRING ! ! !",12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5812, error_mess);
printTestName("checkParam_type_5812")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   'A-STRING ! ! !', { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number',         'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '6' is assumed to be a 'number', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,"A-STRING ! ! !",{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5813, error_mess);
printTestName("checkParam_type_5813")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       'A-STRING ! ! !', { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'       ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object',         { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '7' is assumed to be a 'object', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,"A-STRING ! ! !",{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5814, error_mess);
printTestName("checkParam_type_5814")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, 'A-STRING ! ! !', /d/,      'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'      ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' },  'regexp', 'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'string':A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},"A-STRING ! ! !",/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5815, error_mess);
printTestName("checkParam_type_5815")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        'A-STRING ! ! !', 'abc',    Symbol('sym')   ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'      ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp',         'string', 'symbol'        ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '9' is assumed to be a 'regexp', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},"A-STRING ! ! !","abc",Symbol('sym')]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5816, error_mess);
printTestName("checkParam_type_5816")


multi_variable  = [ { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,     'abc',    Symbol('sym') ] }] }, { a: [{ r: [ [123],   [1, 2, 3],        987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,     'abc',    'A-STRING ! ! !' ] }] } ];
multi_signature = [ { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'      ] }] }, { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'         ] }] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '11' is assumed to be a 'symbol', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]},{a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc","A-STRING ! ! !"]}]}]
EXPECTED TYPE [{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]},{"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5817, error_mess);
printTestName("checkParam_type_5817")


// // // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ new Date('1999-12-12'), [123] ];
multi_signature = [ 'date',                 'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'array' with a value of [123]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,[123]]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5818, error_mess);
printTestName("checkParam_type_5818")


multi_variable  = [ new Date('1999-12-12'), [1, 2, 3] ];
multi_signature = [ 'date',                 'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'array' with a value of [1,2,3]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,[1,2,3]]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5819, error_mess);
printTestName("checkParam_type_581")

multi_variable  = [ new Date('1999-12-12'), 987n ];
multi_signature = [ 'date',                'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'bigint' with a value of 987n
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,987n]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5820, error_mess);
printTestName("checkParam_type_5820")

multi_variable  = [ new Date('1999-12-12'), false ];
multi_signature = [ 'date',                 'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'boolean' with a value of false
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,false]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5821, error_mess);
printTestName("checkParam_type_5821")

multi_variable  = [ new Date('1999-12-12'), new Date('1999-12-12') ];
multi_signature = [ 'date', 'date' ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5822, error_mess);
printTestName("checkParam_type_5822")

multi_variable  = [ new Date('1999-12-12'), (x) => x ];
multi_signature = [ 'date',                 'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'function' with a value of (x) => x ~~~function~~~
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5823, error_mess);
printTestName("checkParam_type_5823")

multi_variable  = [ new Date('1999-12-12'), 12     ];
multi_signature = [ 'date',                 'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'number' with a value of 12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,12]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5824, error_mess);
printTestName("checkParam_type_5824")

multi_variable  = [ new Date('1999-12-12'), { a: 3 } ];
multi_signature = [ 'date',                 'date'   ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'object' with a value of {a:3}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,{a:3}]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5825, error_mess);
printTestName("checkParam_type_5825")

multi_variable  = [ new Date('1999-12-12'), /d/    ];
multi_signature = [ 'date',                 'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'regexp' with a value of /d/ ~~~regex~~~
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,/d/ ~~~regex~~~]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5826, error_mess);
printTestName("checkParam_type_5826")

multi_variable  = [ new Date('1999-12-12'), 'abc'  ];
multi_signature = [ 'date',                 'date' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'string' with a value of abc
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,"abc"]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5827, error_mess);
printTestName("checkParam_type_5827")


multi_variable  = [ new Date('1999-12-12'), Symbol('sym') ];
multi_signature = [ 'date',                 'date'        ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'date', but is mistakenly a 'symbol' with a value of Symbol('sym')
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1999-12-12T00:00:00.000Z,Symbol('sym')]
EXPECTED TYPE ["date","date"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5828, error_mess);
printTestName("checkParam_type_5828")

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ [[[[[[[ 1        ]]]]]]], [[[[[[[ 1        ]]]]]]] ];
multi_signature = [ [[[[[[[ 'number' ]]]]]]], [[[[[[[ 'number' ]]]]]]] ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5829, error_mess);
printTestName("checkParam_type_5829")

multi_variable  = [ [[[[[[[ 'a'      ]]]]]]], [[[[[[[ 1        ]]]]]]] ];
multi_signature = [ [[[[[[[ 'string' ]]]]]]], [[[[[[[ 'string' ]]]]]]] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number' with a value of 1
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[[[[[["a"]]]]]]],[[[[[[[1]]]]]]]]
EXPECTED TYPE [[[[[[[["string"]]]]]]],[[[[[[["string"]]]]]]]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5830, error_mess);
printTestName("checkParam_type_5830")

multi_variable  = [ [  [[[[[[ 1        ]]]]]]  ],    [[[[[[ 1        ]]]]]]    ];
multi_signature = [ [  [[[[[[ 'number' ]]]]]]  ], [  [[[[[[ 'number' ]]]]]]  ] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'number':1
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[[[[[[1]]]]]]],[[[[[[1]]]]]]]
EXPECTED TYPE [[[[[[[["number"]]]]]]],[[[[[[["number"]]]]]]]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5831, error_mess);
printTestName("checkParam_type_5831")

multi_variable  = [ [[[[[[ 1        ]]]]]], [  [[[[[[ 1        ]]]]]]  ] ];
multi_signature = [ [[[[[[ 'number' ]]]]]],    [[[[[[ 'number' ]]]]]]    ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'array' with a value of [1]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[[[[[1]]]]]],[[[[[[[1]]]]]]]]
EXPECTED TYPE [[[[[[["number"]]]]]],[[[[[["number"]]]]]]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5832, error_mess);
printTestName("checkParam_type_5832")

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: { b: { c: { d: { e: 12       } } } } }, { a: { b: { c: { d: { e: 12       } } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'number' } } } } }, { a: { b: { c: { d: { e: 'number' } } } } } ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5833, error_mess);
printTestName("checkParam_type_5833")

multi_variable  = [ { a: { b: { c: { d: { e: 's'      } } } } }, { a: { b: { c: { d: { e: 12       } } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'string' } } } } }, { a: { b: { c: { d: { e: 'string' } } } } } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:{b:{c:{d:{e:"s"}}}}},{a:{b:{c:{d:{e:12}}}}}]
EXPECTED TYPE [{"a":{"b":{"c":{"d":{"e":"string"}}}}},{"a":{"b":{"c":{"d":{"e":"string"}}}}}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5834, error_mess);
printTestName("checkParam_type_5834")

multi_variable  = [ { a: { b: { c: { d: { e: 12       } } } } }, { a: { b: { c: { d: 12              } } } } ];
multi_signature = [ { a: { b: { c: { d: { e: 'number' } } } } }, { a: { b: { c: { d: { e: 'number' } } } } } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@210 - Type '{"e":"number"}' is not a real type
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:{b:{c:{d:{e:12}}}}},{a:{b:{c:{d:12}}}}]
EXPECTED TYPE [{"a":{"b":{"c":{"d":{"e":"number"}}}}},{"a":{"b":{"c":{"d":{"e":"number"}}}}}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5835, error_mess);
printTestName("checkParam_type_5835")

multi_variable  = [ { a: { b: { c: { d: 12       } } } }, { a: { b: { c: { d: { e: 12 }   } } } } ];
multi_signature = [ { a: { b: { c: { d: 'number' } } } }, { a: { b: { c: { d: 'number'    } } } } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'number' but is of the wrong type of 'object':{"e":12}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:{b:{c:{d:12}}}},{a:{b:{c:{d:{e:12}}}}}]
EXPECTED TYPE [{"a":{"b":{"c":{"d":"number"}}}},{"a":{"b":{"c":{"d":"number"}}}}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5836, error_mess);
printTestName("checkParam_type_5836")

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5837, error_mess);
printTestName("checkParam_type_5837")

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 's'      } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[{e:"s"}]}]}]}]},{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
EXPECTED TYPE [{"a":[{"b":[{"c":[{"d":[{"e":"string"}]}]}]}]},{"a":[{"b":[{"c":[{"d":[{"e":"string"}]}]}]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5838, error_mess);
printTestName("checkParam_type_5838")

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12 }       ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'number':12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[{e:12}]}]}]}]},{a:[{b:[{c:[{d:[12]}]}]}]}]
EXPECTED TYPE [{"a":[{"b":[{"c":[{"d":[{"e":"number"}]}]}]}]},{"a":[{"b":[{"c":[{"d":[{"e":"number"}]}]}]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5839, error_mess);
printTestName("checkParam_type_5839")

multi_variable  = [ { a: [ { b: [ { c: [ { d: [ 12       ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
multi_signature = [ { a: [ { b: [ { c: [ { d: [ 'number' ] } ] } ] } ] }, { a: [ { b: [ { c: [ { d: [ 'number'        ] } ] } ] } ] } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'object' with a value of {e:12}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[12]}]}]}]},{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
EXPECTED TYPE [{"a":[{"b":[{"c":[{"d":["number"]}]}]}]},{"a":[{"b":[{"c":[{"d":["number"]}]}]}]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5840, error_mess);
printTestName("checkParam_type_5840")

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ] ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5841, error_mess);
printTestName("checkParam_type_5841")

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ { e: 's'      } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] } ] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[{a:[{b:[{c:[{d:[{e:"s"}]}]}]}]}],[{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]]
EXPECTED TYPE [[{"a":[{"b":[{"c":[{"d":[{"e":"string"}]}]}]}]}],[{"a":[{"b":[{"c":[{"d":[{"e":"string"}]}]}]}]}]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5842, error_mess);
printTestName("checkParam_type_5842")

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'number':12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[{a:[{b:[{c:[{d:[{e:12}]}]}]}]}],[{a:[{b:[{c:[{d:[12]}]}]}]}]]
EXPECTED TYPE [[{"a":[{"b":[{"c":[{"d":[{"e":"number"}]}]}]}]}],[{"a":[{"b":[{"c":[{"d":[{"e":"number"}]}]}]}]}]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5843, error_mess);
printTestName("checkParam_type_5843")

multi_variable  = [ [ { a: [ { b: [ { c: [ { d: [ 12       ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ] ];
multi_signature = [ [ { a: [ { b: [ { c: [ { d: [ 'number' ] } ] } ] } ] } ], [ { a: [ { b: [ { c: [ { d: [ 'number'        ] } ] } ] } ] } ] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'object' with a value of {e:12}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[{a:[{b:[{c:[{d:[12]}]}]}]}],[{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]]
EXPECTED TYPE [[{"a":[{"b":[{"c":[{"d":["number"]}]}]}]}],[{"a":[{"b":[{"c":[{"d":["number"]}]}]}]}]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5844, error_mess);
printTestName("checkParam_type_5844")

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]] ];
multi_signature = [ [[ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ]] ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5845, error_mess);
printTestName("checkParam_type_5845")

multi_variable  = [ [[ { a: { b: [[ { c: { d: [[ 'sst'    ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]] ];
multi_signature = [ [[ { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } } ]], [[ { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } } ]] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number' with a value of 1
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[{a:{b:[[{c:{d:[["sst"]]}}]]}}]],[[{a:{b:[[{c:{d:[[1]]}}]]}}]]]
EXPECTED TYPE [[[{"a":{"b":[[{"c":{"d":[["string"]]}}]]}}]],[[{"a":{"b":[[{"c":{"d":[["string"]]}}]]}}]]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5846, error_mess);
printTestName("checkParam_type_5846")

multi_variable  = [ [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ],   [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]   ];
multi_signature = [ [ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ], [ [ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ] ] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'object':{"a":{"b":[[{"c":{"d":[[1]]}}]]}}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[{a:{b:[[{c:{d:[[1]]}}]]}}],[{a:{b:[[{c:{d:[[1]]}}]]}}]]
EXPECTED TYPE [[{"a":{"b":[[{"c":{"d":[["number"]]}}]]}}],[[{"a":{"b":[[{"c":{"d":[["number"]]}}]]}}]]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5847, error_mess);
printTestName("checkParam_type_5847")

multi_variable  = [ [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ], [ [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ] ] ];
multi_signature = [ [ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ],   [ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ]   ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[{"a":{"b":[[{"c":{"d":[[1]]}}]]}}]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[{a:{b:[[{c:{d:[[1]]}}]]}}],[[{a:{b:[[{c:{d:[[1]]}}]]}}]]]
EXPECTED TYPE [[{"a":{"b":[[{"c":{"d":[["number"]]}}]]}}],[{"a":{"b":[[{"c":{"d":[["number"]]}}]]}}]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5848, error_mess);
printTestName("checkParam_type_5848")

// // /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
multi_signature = [ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5849, error_mess);
printTestName("checkParam_type_5849")

multi_variable  = [ { a: { b: [[ { c: { d: [[ 'abc'    ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
multi_signature = [ { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } }, { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number' with a value of 1
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:{b:[[{c:{d:[["abc"]]}}]]}},{a:{b:[[{c:{d:[[1]]}}]]}}]
EXPECTED TYPE [{"a":{"b":[[{"c":{"d":[["string"]]}}]]}},{"a":{"b":[[{"c":{"d":[["string"]]}}]]}}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5850, error_mess);
printTestName("checkParam_type_5850")

multi_variable  = [ { b: [[ { c: { d: [[ 1        ]] } } ]] },      { b: [[ { c: { d: [[ 1        ]] } } ]] }   ];
multi_signature = [ { b: [[ { c: { d: [[ 'number' ]] } } ]] }, { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@216 -  Key 'a', which has a type of '{b:[[{c:{d:[["number"]]}}]]}', is missing in the checked object
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{b:[[{c:{d:[[1]]}}]]},{b:[[{c:{d:[[1]]}}]]}]
EXPECTED TYPE [{"b":[[{"c":{"d":[["number"]]}}]]},{"a":{"b":[[{"c":{"d":[["number"]]}}]]}}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5851, error_mess);
printTestName("checkParam_type_5851")

multi_variable  = [ { b: [[ { c: { d: [[ 1        ]] } } ]] }, { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
multi_signature = [ { b: [[ { c: { d: [[ 'number' ]] } } ]] },      { b: [[ { c: { d: [[ 'number' ]] } } ]] }   ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@216 -  Key 'b', which has a type of '[[{c:{d:[["number"]]}}]]', is missing in the checked object
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{b:[[{c:{d:[[1]]}}]]},{a:{b:[[{c:{d:[[1]]}}]]}}]
EXPECTED TYPE [{"b":[[{"c":{"d":[["number"]]}}]]},{"b":[[{"c":{"d":[["number"]]}}]]}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5852, error_mess);
printTestName("checkParam_type_5852")
// // /////////////////////////////////////////////////////////////////////////////////////////////
multi_variable  = [ 1,         null    ];
multi_signature = [ 'number', 'number' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@237 -  ELEMENT '1' is assumed to be a 'number', but is mistakenly a 'null'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1,null]
EXPECTED TYPE ["number","number"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5853, error_mess);
printTestName("checkParam_type_5853")

multi_variable  = [ 42,       undefined ];
multi_signature = [ 'number', 'number' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@237 -  ELEMENT '1' is assumed to be a 'number', but is mistakenly a 'undefined'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [42,undefined]
EXPECTED TYPE ["number","number"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5854, error_mess);
printTestName("checkParam_type_5854")

multi_variable = [[], []];
multi_signature = [ 'array', 'array' ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5855, error_mess);
printTestName("checkParam_type_5855")

multi_variable  = [ {},       {}       ];
multi_signature = [ 'object', 'object' ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5856, error_mess);
printTestName("checkParam_type_5856")

multi_variable  = [ [],       [] ];
multi_signature = [ 'array', ' [  ] ' ];   // NB the second parameter can be a class name
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a ' [  ] ', but is mistakenly a 'array' with a value of []
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[],[]]
EXPECTED TYPE ["array"," [  ] "]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5857, error_mess);
printTestName("checkParam_type_5857")

multi_variable  = [ {},         {} ];
multi_signature = [ 'object', ' { } '];  // NB the second parameter can be a class name
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a ' { } ', but is mistakenly a 'object' with a value of {}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{},{}]
EXPECTED TYPE ["object"," { } "]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5858, error_mess);
printTestName("checkParam_type_5858")
// // ////////////////////////////////////////////////////////////////

multi_variable  = [ [],      [] ];
multi_signature = [ 'array', 'array' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5859, error_mess);
printTestName("checkParam_type_5859")

multi_variable  = [ 123n,      123n ];
multi_signature = [ 'bigint', 'bigint' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5860, error_mess);
printTestName("checkParam_type_5860")

multi_variable  = [ false,     false ];
multi_signature = [ 'boolean', 'boolean' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5861, error_mess);
printTestName("checkParam_type_5861")

multi_variable  = [ new Date('1999-12-12'), new Date('1999-12-12') ];
multi_signature = [ 'date',                 'date' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5862, error_mess);
printTestName("checkParam_type_5862")

multi_variable  = [ (x) => x,   (x) => x ];
multi_signature = [ 'function', 'function' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5863, error_mess);
printTestName("checkParam_type_5863")

multi_variable  = [ 12,        12      ];
multi_signature = [ 'number', 'number' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5864, error_mess);
printTestName("checkParam_type_5864")

multi_variable  = [ { a: 12 }, { a: 12 } ];
multi_signature = [ 'object',  'object'  ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5865, error_mess);
printTestName("checkParam_type_5865")

multi_variable  = [ /d/,      /d/ ];
multi_signature = [ 'regexp', 'regexp' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5866, error_mess);
printTestName("checkParam_type_5866")

multi_variable  = [ 'a-string', 'a-string' ];
multi_signature = [ 'string',   'string' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5867, error_mess);
printTestName("checkParam_type_5867")

multi_variable  = [ Symbol('sym'), Symbol('sym') ];
multi_signature = [ 'symbol',      'symbol' ];
error_mess = ``;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5868, error_mess);
printTestName("checkParam_type_5868")

// // ///////////////////////////////////////////////////////////////

multi_variable  = [ [1],        [1]        ];
multi_signature = [ ['number'], ['number'] ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5869, error_mess);
printTestName("checkParam_type_5869")

multi_variable  = [ [1, 2], [1, 2] ];
multi_signature = [ ['numbers'], ['numbers'] ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5870, error_mess);
printTestName("checkParam_type_5870")

multi_variable  = [ [1, 2, 3],  [1, 2, 'three'] ];
multi_signature = [ ['numbers'], ['numbers'] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '2' is assumed to be a 'number', but is mistakenly a 'string' with a value of three
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[1,2,3],[1,2,"three"]]
EXPECTED TYPE [["numbers"],["numbers"]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5871, error_mess);
printTestName("checkParam_type_5871")


                                          //////////////////////////////////////////////////////////////////////////////////////////////////
                                          
                                          // multi_variable  =  [1];
                                          // multi_signature =  ['numbers'] ;
                                          // error_mess = '';
                                          // test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);   //  OK
                                          
                                          // multi_variable  =  [[1]]
                                          // multi_signature =  [['numbers']] ;
                                          // error_mess = '';
                                          // test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);   //  OK
                                          
                                          // multi_variable  =  [[1],[2]];
                                          // multi_signature =  [['numbers'], ['numbers']] ;
                                          // error_mess = '';
                                          // test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);   //  OK
                                          
                                          ///////////////
                                          
                                          // multi_variable  =  [[5], [7]];
                                          // multi_signature =  [['numbers']];
                                          // error_mess = '';
                                          // test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);   //  ERROR
                                          
                                          ////////////////
                                          
                                          // multi_variable  =  [[[1]]];
                                          // multi_signature =  [[['numbers']]];
                                          // error_mess = '';
                                          // test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);   //  OK
                                          
                                          /////////////////////////////////////////////////////////////////////////////////////////////
                                          
                                          // multi_variable  = [  [1, 2, 3], [1, 2, 3], [1, 'X', 3] ]; /// still error
                                          // multi_signature = [ ['numbers'],['numbers'],['numbers'] ];
                                          // error_mess = '';
                                          // test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);
                                          
                                          // multi_variable  = [ [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]]; /// still error
                                          // multi_signature = [ [['numbers']] ];
                                          // error_mess = '';
                                          // test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);
                                          
                                          ////////////////////////////////////////////////////////////////////////////////////////////////





























multi_variable  = [ [ [1, 2, 3],        [1, 2, 3],       [1, 2, 3]        ], [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ] ];
multi_signature = [ [ ['numbers'], ['numbers'], ['numbers'] ], [['numbers'], ['numbers'], ['numbers']]                        ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5872, error_mess);
printTestName("checkParam_type_5872")


/////////////////////////////////////////////////////////////////////////////////////////////



multi_variable  = [ [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ],
                    [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                        [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ]    ];
multi_signature = [ [   [ ['numbers'                     ] ]    ],
                    [   [ ['numbers'                     ] ]    ]    ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@296 - Collection sizes do not match 3 !== 1 with [[1,2,3],[1,2,3],[1,2,3]] and [["numbers"]]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]],[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]]]
EXPECTED TYPE [[[["numbers"]]],[[["numbers"]]]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5873, error_mess);
printTestName("checkParam_type_5873")


multi_variable  = [  [1, 2, 3], [1, 2, 3], [1, 'X', 3] ]; /// still error
multi_signature = [ ['numbers'],['numbers'],['numbers'] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'number', but is mistakenly a 'string' with a value of X
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[1,2,3],[1,2,3],[1,"X",3]]
EXPECTED TYPE [["numbers"],["numbers"],["numbers"]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5874, error_mess);
printTestName("checkParam_type_5874")



// multi_variable  = [ [   [ [1, 2, 3],       [1, 2, 3],       [1,  2,  3] ],
//                         [ [1, 2, 3],       [1, 2, 3],       [1,  2,  3] ],
//                         [ [1, 2, 3],       [1, 2, 3],       [1,  2,  3] ]    ],
//                     [   [ [1, 2, 3],       [1, 2, 3],       [1,  2,  3] ],
//                         [ [1, 2, 3],       [1, 2, 3],       [1,  2,  3] ],
//                         [ [1, 2, 3],       [1, 2, 3],       [1, 'X', 3] ]    ]    ];                       // DOES NOT WORK?
// multi_signature = [ [   [ ['numbers'],['numbers'],['numbers'] ]    ],
//                     [   [ ['numbers'],['numbers'],['numbers'] ]    ]    ];
// error_mess = `PRE_test_05800() PRE-FUNC: TE@215 - ELEMENT '1' is asserted to be a 'number', but is fallaciously a 'string' : X
// CHECKER checkParam_type()
// ACTUAL TYPE 'array'
//  VALUES [[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]],[[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"X",3]]]]
// EXPECTED TYPE [[[["numbers"]]],[[["numbers"]]]]
//  ORIGIN pre_checkParam_type_05800(a_var)`;
// test_pre_checkParam_type_multi(multi_variable, multi_signature, 5874, error_mess);





// // ////////////////////////////////////////

multi_variable  = [ { an_object: 'robot-sub' }, 'not-object' ];
multi_signature = [ { an_object: 'string'    }, { an_object: 'Boaty-McBoatFace' } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'string':not-object
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{an_object:"robot-sub"},"not-object"]
EXPECTED TYPE [{"an_object":"string"},{"an_object":"Boaty-McBoatFace"}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5875, error_mess);
printTestName("checkParam_type_5875")

multi_variable  = [ 'a-string', 'a-string' ];
multi_signature = [ 'string',   'null' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@204 -  ELEMENT '1' type is 'null'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES ["a-string","a-string"]
EXPECTED TYPE ["string","null"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5876, error_mess);
printTestName("checkParam_type_5876")

multi_variable  = [ 91,       92 ];
multi_signature = [ 'number', 'undefined' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@229 -  ELEMENT '1' type is 'undefined'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [91,92]
EXPECTED TYPE ["number","undefined"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5877, error_mess);
printTestName("checkParam_type_5877")

multi_variable  = [ 91, 93];
multi_signature = [ 'number', 'Ford Torino' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'Ford Torino', but is mistakenly a 'number' with a value of 93
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [91,93]
EXPECTED TYPE ["number","Ford Torino"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5878, error_mess);
printTestName("checkParam_type_5878")

multi_variable  = [ { a: 1,        b: 2 },        { a: 3, b: 4 } ];
multi_signature = [ { a: 'number', b: 'number' }, { a: 'number' } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@209 - Extra key in checked object - (b:4)
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:1,b:2},{a:3,b:4}]
EXPECTED TYPE [{"a":"number","b":"number"},{"a":"number"}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5879, error_mess);
printTestName("checkParam_type_5879")

multi_variable  = [ { a: 1011 },     { a: undefined } ];
multi_signature = [ { a: 'number' }, { a: 'number' } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@211 - Key 'a' was given to be a 'number' but is 'undefined'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:1011},{a:undefined}]
EXPECTED TYPE [{"a":"number"},{"a":"number"}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5880, error_mess);
 printTestName("checkParam_type_5880")      

multi_variable  = [ { a: 1213 },     { a: null } ];
multi_signature = [ { a: 'number' }, { a: 'number' } ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@212 - Key 'a' was determined to be a 'number' but is 'null'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:1213},{a:null}]
EXPECTED TYPE [{"a":"number"},{"a":"number"}]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5881, error_mess);
 printTestName("checkParam_type_5881")      

multi_variable  = [ 14,        'a-string' ];
multi_signature = [ 'number', ['number'] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'string':a-string
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [14,"a-string"]
EXPECTED TYPE ["number",["number"]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5882, error_mess);
 printTestName("checkParam_type_5882")      

multi_variable  = [ console,   console ];
multi_signature = [ 'object', 'object' ];
error_mess = '';
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5883, error_mess);
 printTestName("checkParam_type_5883")      

multi_variable  = [ 'bob',    Date ];
multi_signature = [ 'string', 'bad-classname' ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'bad-classname', but is mistakenly a 'function' with a value of function Date() { [native code ~~~function~~~
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES ["bob",function Date() { [native code ~~~function~~~]
EXPECTED TYPE ["string","bad-classname"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5884, error_mess);
 printTestName("checkParam_type_5884")      

multi_variable  = [ 'multi_signature-not-string', 'multi_signature-not-string' ];
multi_signature = [ 'string',                     12 ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@232 -  ELEMENT '1' type is not a valid string, like 'number', but instead 12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES ["multi_signature-not-string","multi_signature-not-string"]
EXPECTED TYPE ["string",12]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5885, error_mess);
 printTestName("checkParam_type_5885")      

multi_variable  = [ 'multi_signature-null', 'multi_signature-null' ];
multi_signature = [ 'string', null ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@232 -  ELEMENT '1' type is not a valid string, like 'number', but instead null
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES ["multi_signature-null","multi_signature-null"]
EXPECTED TYPE ["string","null"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5886, error_mess);
 printTestName("checkParam_type_5886")      

multi_variable  = [ 'multi_signature-undefined', 'multi_signature-undefined' ];
multi_signature = [ 'string', undefined ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@232 -  ELEMENT '1' type is not a valid string, like 'number', but instead undefined
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES ["multi_signature-undefined","multi_signature-undefined"]
EXPECTED TYPE ["string","undefined"]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5887, error_mess);
 printTestName("checkParam_type_5887")      

multi_variable  = [ ["Vinnie", "Barbarino"], ["Vinnie", "Barbarino"] ];
multi_signature = [ ["string", "string"   ], ["string", "string", "boolean"] ];
error_mess = `PRE_test_05800() PRE-FUNC: TE@237 -  ELEMENT '2' is assumed to be a 'boolean', but is mistakenly a 'undefined'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [["Vinnie","Barbarino"],["Vinnie","Barbarino"]]
EXPECTED TYPE [["string","string"],["string","string","boolean"]]
 ORIGIN pre_checkParam_type_05800(a_var)`;
test_pre_checkParam_type_multi(multi_variable, multi_signature, 5888, error_mess);

 printTestName("checkParam_type_5888")      











// multi_variable  = [ ["VinnieX" ] ];
// multi_signature = [ ["string", "boolean"   ] ];
// error_mess = `NO error YET`;
// test_pre_checkParam_type_multi(multi_variable, multi_signature, 5888, error_mess);


// multi_variable  = ["VinnieX" ] ;
// multi_signature = ["string", "boolean"   ] ;
// error_mess = `NO error YET`;
// test_pre_checkParam_type_multi(multi_variable, multi_signature, 5888, error_mess);



if (fail_count>0) {
  the_problem = `check-tests/checkParam_type_05800.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;