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


function test_pre_checkParam_type_single(single_parameter, signature_of_parameter, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  pass_count += 1;

  function PRE_test_05900(a_var) {
    return type_czech.checkParam_type(a_var, signature_of_parameter);
  }

  function pre_checkParam_type_05900() {}
  pre_checkParam_type_05900 = type_czech.linkUp(pre_checkParam_type_05900, PRE_test_05900);

  const before_var_value = beforeCheck(single_parameter, signature_of_parameter);
  if (expected_error === '') {
    try {
      pre_checkParam_type_05900(single_parameter);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_checkParam_type_05900(single_parameter);
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

single_variable  = { x: [{ y: 'z'      }] };
single_signature = { x: [{ y: 'string' }] };
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5901, error_mess);
printTestName("checkParam_type_5901") 

single_variable  = { x: [{ y: 123456   }] };
single_signature = { x: [{ y: 'string' }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@213 - Property 'y' is indicated to be a 'string', but is inaccurately a 'number' : 123456
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {x:[{y:123456}]}
EXPECTED TYPE {"x":[{"y":"string"}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5902, error_mess);
printTestName("checkParam_type_5902") 

single_variable  = { a: [1, 2, 3] };
single_signature = { a: 'object' };
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[1,2,3]
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[1,2,3]}
EXPECTED TYPE {"a":"object"}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5903, error_mess);
printTestName("checkParam_type_5903") 

single_variable  = [13, 14, 15];
single_signature = { r: 'number' };
error_mess = `PRE_test_05900() PRE-FUNC: TE@219 - Comparing [] parameter, with a value of [13,14,15], against expected shape of {"r":"number"}.
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [13,14,15]
EXPECTED TYPE {"r":"number"}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5904, error_mess);
printTestName("checkParam_type_5904") 

single_variable  = { r: 'a-string' };
single_signature = ['number'];
error_mess = `PRE_test_05900() PRE-FUNC: TE@217 - Comparing 'object' parameter, with a value of {r:"a-string"}, to expected shape of ["number"].
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {r:"a-string"}
EXPECTED TYPE ["number"]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5905, error_mess);
printTestName("checkParam_type_5905") 

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],         987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5906, error_mess);
printTestName("checkParam_type_5906") 

single_variable  = { a: [{ r: [ 'A-STRING ! ! !', [1, 2, 3],  987n,    false,     new Date('1999-12-12'), (x) => x,   12,        { a: 3 }, { b: 4 },        /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array',          ['number'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'array', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:["A-STRING ! ! !",[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["number"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5907, error_mess);
printTestName("checkParam_type_5907") 

single_variable  = { a: [{ r: [ [123],   'A-STRING ! ! !',  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['number'],        'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'string':A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],"A-STRING ! ! !",987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["number"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5908, error_mess);
printTestName("checkParam_type_5908") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  'A-STRING ! ! !', false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint',         'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '2' is assumed to be a 'bigint', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],"A-STRING ! ! !",false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5909, error_mess);
printTestName("checkParam_type_5909") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     'A-STRING ! ! !', new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean',        'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '3' is assumed to be a 'boolean', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,"A-STRING ! ! !",1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5910, error_mess);
printTestName("checkParam_type_5910") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     'A-STRING ! ! !', (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',           'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '4' is assumed to be a 'date', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,"A-STRING ! ! !",(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5911, error_mess);
printTestName("checkParam_type_5911") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), 'A-STRING ! ! !',  12,       { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function',       'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '5' is assumed to be a 'function', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,"A-STRING ! ! !",12,{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5912, error_mess);
printTestName("checkParam_type_5912") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   'A-STRING ! ! !', { a: 3 }, { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number',         'object', { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '6' is assumed to be a 'number', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,"A-STRING ! ! !",{a:3},{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5913, error_mess);
printTestName("checkParam_type_5913") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       'A-STRING ! ! !', { b: 4 },         /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object',         { b: 'number' }, 'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '7' is assumed to be a 'object', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,"A-STRING ! ! !",{b:4},/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5914, error_mess);
printTestName("checkParam_type_5914") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, 'A-STRING ! ! !', /d/,      'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' },  'regexp', 'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'string':A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},"A-STRING ! ! !",/d/ ~~~regex~~~,"abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5915, error_mess);
printTestName("checkParam_type_5915") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },        'A-STRING ! ! !', 'abc',    Symbol('sym')   ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp',         'string', 'symbol'        ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '9' is assumed to be a 'regexp', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},"A-STRING ! ! !","abc",Symbol('sym')]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5916, error_mess);
printTestName("checkParam_type_5916") 

single_variable  = { a: [{ r: [ [123],   [1, 2, 3],  987n,     false,     new Date('1999-12-12'), (x) => x,   12,       { a: 3 }, { b: 4 },         /d/,     'abc',    'A-STRING ! ! !' ] }] };
single_signature = { a: [{ r: [ 'array', ['numbers'], 'bigint', 'boolean', 'date',                 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol'         ] }] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '11' is assumed to be a 'symbol', but is mistakenly a 'string' with a value of A-STRING ! ! !
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{r:[[123],[1,2,3],987n,false,1999-12-12T00:00:00.000Z,(x) => x ~~~function~~~,12,{a:3},{b:4},/d/ ~~~regex~~~,"abc","A-STRING ! ! !"]}]}
EXPECTED TYPE {"a":[{"r":["array",["numbers"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string","symbol"]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5917, error_mess);
printTestName("checkParam_type_5917") 

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [123];
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@225 - The value [], an 'array', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [123]
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5918, error_mess);
printTestName("checkParam_type_5918") 

single_variable  = [1, 2, 3];
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@219 - Comparing [] parameter, with a value of [1,2,3], against expected shape of date.
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1,2,3]
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5919, error_mess);
printTestName("checkParam_type_5919") 

single_variable  = 987n;
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value '987n', which is a 'bigint', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'bigint'
 VALUES 987n
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5920, error_mess);
printTestName("checkParam_type_5920") 

single_variable  = false;
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value 'false', which is a 'boolean', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'boolean'
 VALUES false
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5921, error_mess);
printTestName("checkParam_type_5921") 

single_variable  = new Date('1999-12-12');
single_signature = 'date';
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5922, error_mess);
printTestName("checkParam_type_5922") 

single_variable  = (x) => x;
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value '(x) => x ~~~function~~~', which is a 'function', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'function'
 VALUES (x) => x ~~~function~~~
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5923, error_mess);
printTestName("checkParam_type_5923") 

single_variable  = 12;
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value '12', which is a 'number', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'number'
 VALUES 12
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5924, error_mess);
printTestName("checkParam_type_5924")

single_variable  = { a: 3 };
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@208 - The value {}, an 'object', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:3}
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5925, error_mess);
printTestName("checkParam_type_5925")

single_variable  = /d/;
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value '/d/ ~~~regex~~~', which is a 'regexp', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'regexp'
 VALUES /d/ ~~~regex~~~
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5926, error_mess);
printTestName("checkParam_type_5926") 

single_variable  = 'abc';
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value 'abc', which is a 'string', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "abc"
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5927, error_mess);
printTestName("checkParam_type_5927") 

single_variable  = Symbol('sym');
single_signature = 'date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value 'Symbol('sym')', which is a 'symbol', is not a 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'symbol'
 VALUES Symbol('sym')
EXPECTED TYPE date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5928, error_mess);
printTestName("checkParam_type_5928") 
// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[[[[[[ 1        ]]]]]]];
single_signature = [[[[[[[ 'number' ]]]]]]];
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5929, error_mess);
printTestName("checkParam_type_5929") 

single_variable  = [[[[[[[ 1        ]]]]]]];
single_signature = [[[[[[[ 'string' ]]]]]]];
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number' with a value of 1
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[[[[[1]]]]]]]
EXPECTED TYPE [[[[[[["string"]]]]]]]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5930, error_mess);
printTestName("checkParam_type_5930") 

single_variable  =    [[[[[[ 1        ]]]]]];
single_signature = [  [[[[[[ 'number' ]]]]]]  ];
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'number':1
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[[[[1]]]]]]
EXPECTED TYPE [[[[[[["number"]]]]]]]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5931, error_mess);
printTestName("checkParam_type_5931") 

single_variable  = [  [[[[[[ 1        ]]]]]]  ];
single_signature =    [[[[[[ 'number' ]]]]]];
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'array' with a value of [1]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[[[[[1]]]]]]]
EXPECTED TYPE [[[[[["number"]]]]]]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5932, error_mess);
printTestName("checkParam_type_5932") 

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: { c: { d: { e: 12       } } } } };
single_signature = { a: { b: { c: { d: { e: 'number' } } } } };
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5933, error_mess);
printTestName("checkParam_type_5933") 

single_variable  = { a: { b: { c: { d: { e: 12       } } } } };
single_signature = { a: { b: { c: { d: { e: 'string' } } } } };
error_mess = `PRE_test_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:{b:{c:{d:{e:12}}}}}
EXPECTED TYPE {"a":{"b":{"c":{"d":{"e":"string"}}}}}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5934, error_mess);
printTestName("checkParam_type_5934") 

single_variable  = { a: { b: { c: { d: 12              } } } };
single_signature = { a: { b: { c: { d: { e: 'number' } } } } };
error_mess = `PRE_test_05900() PRE-FUNC: TE@210 - Type '{"e":"number"}' is not a real type
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:{b:{c:{d:12}}}}
EXPECTED TYPE {"a":{"b":{"c":{"d":{"e":"number"}}}}}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5935, error_mess);
printTestName("checkParam_type_5935") 

single_variable  = { a: { b: { c: { d: { e: 12 }   } } } };
single_signature = { a: { b: { c: { d: 'number'    } } } };
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'number' but is of the wrong type of 'object':{"e":12}
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:{b:{c:{d:{e:12}}}}}
EXPECTED TYPE {"a":{"b":{"c":{"d":"number"}}}}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5936, error_mess);
printTestName("checkParam_type_5936") 

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] };
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5937, error_mess);
printTestName("checkParam_type_5937") 

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{b:[{c:[{d:[{e:12}]}]}]}]}
EXPECTED TYPE {"a":[{"b":[{"c":[{"d":[{"e":"string"}]}]}]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5938, error_mess);
printTestName("checkParam_type_5938") 

single_variable  = { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'number':12
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{b:[{c:[{d:[12]}]}]}]}
EXPECTED TYPE {"a":[{"b":[{"c":[{"d":[{"e":"number"}]}]}]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5939, error_mess);
printTestName("checkParam_type_5939") 

single_variable  = { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] };
single_signature = { a: [ { b: [ { c: [ { d: [ 'number'        ] } ] } ] } ] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'object' with a value of {e:12}
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:[{b:[{c:[{d:[{e:12}]}]}]}]}
EXPECTED TYPE {"a":[{"b":[{"c":[{"d":["number"]}]}]}]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5940, error_mess);
printTestName("checkParam_type_5940") 

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ];
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5941, error_mess);
printTestName("checkParam_type_5941") 

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'string' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() PRE-FUNC: TE@213 - Property 'e' is indicated to be a 'string', but is inaccurately a 'number' : 12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
EXPECTED TYPE [{"a":[{"b":[{"c":[{"d":[{"e":"string"}]}]}]}]}]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5942, error_mess);
printTestName("checkParam_type_5942") 

single_variable  = [ { a: [ { b: [ { c: [ { d: [ 12              ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ { e: 'number' } ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'number':12
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[12]}]}]}]}]
EXPECTED TYPE [{"a":[{"b":[{"c":[{"d":[{"e":"number"}]}]}]}]}]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5943, error_mess);
printTestName("checkParam_type_5943") 

single_variable  = [ { a: [ { b: [ { c: [ { d: [ { e: 12       } ] } ] } ] } ] } ];
single_signature = [ { a: [ { b: [ { c: [ { d: [ 'number'        ] } ] } ] } ] } ];
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'object' with a value of {e:12}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:[{b:[{c:[{d:[{e:12}]}]}]}]}]
EXPECTED TYPE [{"a":[{"b":[{"c":[{"d":["number"]}]}]}]}]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5944, error_mess);
printTestName("checkParam_type_5944") 

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ]];
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5945, error_mess);
printTestName("checkParam_type_5945") 

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } } ]];
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number' with a value of 1
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[{a:{b:[[{c:{d:[[1]]}}]]}}]]
EXPECTED TYPE [[{"a":{"b":[[{"c":{"d":[["string"]]}}]]}}]]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5946, error_mess);
printTestName("checkParam_type_5946") 

single_variable  =  [ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ];
single_signature = [[ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ]];
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'array' but is of the wrong type of 'object':{"a":{"b":[[{"c":{"d":[[1]]}}]]}}
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [{a:{b:[[{c:{d:[[1]]}}]]}}]
EXPECTED TYPE [[{"a":{"b":[[{"c":{"d":[["number"]]}}]]}}]]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5947, error_mess);
printTestName("checkParam_type_5947") 

single_variable  = [[ { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } } ]];
single_signature =  [ { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } } ];
error_mess = `PRE_test_05900() PRE-FUNC: TE@207 - Param is meant to be 'object' but is of the wrong type of 'array':[{"a":{"b":[[{"c":{"d":[[1]]}}]]}}]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[{a:{b:[[{c:{d:[[1]]}}]]}}]]
EXPECTED TYPE [{"a":{"b":[[{"c":{"d":[["number"]]}}]]}}]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5948, error_mess);
printTestName("checkParam_type_5948") 

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } };
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5949, error_mess);
printTestName("checkParam_type_5949") 

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature = { a: { b: [[ { c: { d: [[ 'string' ]] } } ]] } };
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'number' with a value of 1
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:{b:[[{c:{d:[[1]]}}]]}}
EXPECTED TYPE {"a":{"b":[[{"c":{"d":[["string"]]}}]]}}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5950, error_mess);
printTestName("checkParam_type_5950") 

single_variable  =      { b: [[ { c: { d: [[ 1        ]] } } ]] };
single_signature = { a: { b: [[ { c: { d: [[ 'number' ]] } } ]] } };
error_mess = `PRE_test_05900() PRE-FUNC: TE@216 -  Key 'a', which has a type of '{b:[[{c:{d:[["number"]]}}]]}', is missing in the checked object
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {b:[[{c:{d:[[1]]}}]]}
EXPECTED TYPE {"a":{"b":[[{"c":{"d":[["number"]]}}]]}}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5951, error_mess);
printTestName("checkParam_type_5951") 

single_variable  = { a: { b: [[ { c: { d: [[ 1        ]] } } ]] } };
single_signature =      { b: [[ { c: { d: [[ 'number' ]] } } ]] };
error_mess = `PRE_test_05900() PRE-FUNC: TE@216 -  Key 'b', which has a type of '[[{c:{d:[["number"]]}}]]', is missing in the checked object
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:{b:[[{c:{d:[[1]]}}]]}}
EXPECTED TYPE {"b":[[{"c":{"d":[["number"]]}}]]}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5952, error_mess);
printTestName("checkParam_type_5952") 

// /////////////////////////////////////////////////////////////////////////////////////////////
single_variable  = null;
single_signature = 'number';
error_mess = `PRE_test_05900() PRE-FUNC: TE@226 - The value 'null', which is a 'null', is not a 'number'
CHECKER checkParam_type()
ACTUAL TYPE 'null'
 VALUES null
EXPECTED TYPE number
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5953, error_mess);
printTestName("checkParam_type_5953") 

single_variable  = undefined;
single_signature = 'number';
error_mess = `PRE_test_05900() PRE-FUNC: TE@206 - The value 'undefined', is not a 'number'
CHECKER checkParam_type()
ACTUAL TYPE 'undefined'
 VALUES undefined
EXPECTED TYPE number
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5954, error_mess);
printTestName("checkParam_type_5954") 

single_variable  = [];
single_signature = 'array';
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5955, error_mess);
printTestName("checkParam_type_5955") 

single_variable  = {};
single_signature = 'object';
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5956, error_mess);
printTestName("checkParam_type_5956") 

single_variable  = [];
single_signature = ' [  ] ';
error_mess = `PRE_test_05900() PRE-FUNC: TE@222 - [] is a container, not a type/signature, try 'array' or ['string']
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES []
EXPECTED TYPE  [  ] 
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5957, error_mess);
printTestName("checkParam_type_5957") 

single_variable  = {};
single_signature = ' { } ';
error_mess = `PRE_test_05900() PRE-FUNC: TE@223 - {} is a container, not a type/signature. Try 'object' or {a:'string'}
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {}
EXPECTED TYPE  { } 
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5958, error_mess);
printTestName("checkParam_type_5958") 

// ////////////////////////////////////////////////////////////////

single_variable  = [];
single_signature = 'Array';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Array' is not a typeof(), but looks like 'array'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES []
EXPECTED TYPE Array
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5959, error_mess);
printTestName("checkParam_type_5959") 

single_variable  = 123n;
single_signature = 'Bigint';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Bigint' is not a typeof(), but looks like 'bigint'
CHECKER checkParam_type()
ACTUAL TYPE 'bigint'
 VALUES 123n
EXPECTED TYPE Bigint
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5960, error_mess);
printTestName("checkParam_type_5960") 

single_variable  = false;
single_signature = 'Boolean';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Boolean' is not a typeof(), but looks like 'boolean'
CHECKER checkParam_type()
ACTUAL TYPE 'boolean'
 VALUES false
EXPECTED TYPE Boolean
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5961, error_mess);
printTestName("checkParam_type_5961") 

single_variable  = new Date('1999-12-12');
single_signature = 'Date';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Date' is not a typeof(), but looks like 'date'
CHECKER checkParam_type()
ACTUAL TYPE 'date'
 VALUES 1999-12-12T00:00:00.000Z
EXPECTED TYPE Date
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5962, error_mess);
printTestName("checkParam_type_5962") 

single_variable  = (x) => x;
single_signature = 'Function';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Function' is not a typeof(), but looks like 'function'
CHECKER checkParam_type()
ACTUAL TYPE 'function'
 VALUES (x) => x ~~~function~~~
EXPECTED TYPE Function
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5963, error_mess);
printTestName("checkParam_type_5963") 

single_variable  = 12;
single_signature = 'Number';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Number' is not a typeof(), but looks like 'number'
CHECKER checkParam_type()
ACTUAL TYPE 'number'
 VALUES 12
EXPECTED TYPE Number
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5964, error_mess);
printTestName("checkParam_type_5964") 

single_variable  = { a: 12 };
single_signature = 'Object';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Object' is not a typeof(), but looks like 'object'
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:12}
EXPECTED TYPE Object
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5965, error_mess);
printTestName("checkParam_type_5965") 

single_variable  = /d/;
single_signature = 'Regexp';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Regexp' is not a typeof(), but looks like 'regexp'
CHECKER checkParam_type()
ACTUAL TYPE 'regexp'
 VALUES /d/ ~~~regex~~~
EXPECTED TYPE Regexp
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5966, error_mess);
printTestName("checkParam_type_5966") 

single_variable  = 'a-string';
single_signature = 'String';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'String' is not a typeof(), but looks like 'string'
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "a-string"
EXPECTED TYPE String
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5967, error_mess);
printTestName("checkParam_type_5967") 

single_variable  = Symbol('sym');
single_signature = 'Symbol';
error_mess = `PRE_test_05900() PRE-FUNC: TE@205 - Type 'Symbol' is not a typeof(), but looks like 'symbol'
CHECKER checkParam_type()
ACTUAL TYPE 'symbol'
 VALUES Symbol('sym')
EXPECTED TYPE Symbol
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5968, error_mess);
printTestName("checkParam_type_5968") 
// // ///////////////////////////////////////////////////////////////

single_variable  = [1];
single_signature = ['number'];
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5969, error_mess);
printTestName("checkParam_type_5969") 


single_variable  = [1, 2];
single_signature = ['numbers'];
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5970, error_mess);
printTestName("checkParam_type_5970") 


single_variable  = [1, 2, 'three'];
single_signature = ['numbers'];
error_mess = `PRE_test_05900() PRE-FUNC: TE@214 -  ELEMENT '2' is assumed to be a 'number', but is mistakenly a 'string' with a value of three
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1,2,"three"]
EXPECTED TYPE ["numbers"]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5971, error_mess);
printTestName("checkParam_type_5971") 


single_variable  = [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ];
single_signature = [['numbers']];
error_mess = `PRE_test_05900() PRE-FUNC: TE@296 - Collection sizes do not match 3 !== 1 with [[1,2,3],[1,2,3],[1,2,3]] and [["numbers"]]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[1,2,3],[1,2,3],[1,2,3]]
EXPECTED TYPE [["numbers"]]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5972, error_mess);
printTestName("checkParam_type_5972") 


single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ],
                [ [1, 2, 3], [1, 2, 3], [1, 2, 3] ]    ];
single_signature = [[['numbers']]];
error_mess = ` PRE_test_05900() PRE-FUNC: TE@296 - Collection sizes do not match 3 !== 1 with [[1,2,3],[1,2,3],[1,2,3]] and [["numbers"]]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]]]
EXPECTED TYPE [[["numbers"]]]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5973, error_mess);
printTestName("checkParam_type_5973") 


// single_variable  = [   [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],
//                 [ [1, 2, 3], [1, 2, 3], [1,  2,  3] ],                                      /// does not work???
//                 [ [1, 2, 3], [1, 2, 3], [1, '2', 3] ]    ];
// single_signature = [[['numbers']]];  
// error_mess = `PRE_test_05900() PRE-FUNC: TE@221 - Supposed to have 1 element(s), but has '3' elements. An extra element of : 1,2,3
// CHECKER checkParam_type()
// ACTUAL TYPE 'array'
//  VALUES [[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,2,3]],[[1,2,3],[1,2,3],[1,"2",3]]]
// EXPECTED TYPE [[["numbers"]]]
//  ORIGIN pre_checkParam_type_05900(a_var)`;
// test_pre_checkParam_type_single(single_variable, single_signature, 5974, error_mess);

// // ////////////////////////////////////////

single_variable  = 'not-object';
single_signature = { an_object: 'Boaty-McBoatFace' };
error_mess = `PRE_test_05900() PRE-FUNC: TE@201 - checkParam_type() called with '{}' against '!{}'. Contrasting a string type of value not-object, with '{"an_object":"Boaty-McBoatFace"}' an object !!! string <> object
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "not-object"
EXPECTED TYPE {"an_object":"Boaty-McBoatFace"}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5975, error_mess);
printTestName("checkParam_type_5975") 


single_variable  = 'a-string';
single_signature = 'null';
error_mess = `PRE_test_05900() PRE-FUNC: TE@203 - The type 'null' is not a valid checkParam_type(), checkParam_typeEither(), or checkParam_typeExtra() 2nd parameter type
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "a-string"
EXPECTED TYPE null
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5976, error_mess);
printTestName("checkParam_type_5976") 


single_variable  = 91;
single_signature = 'undefined';
error_mess = `PRE_test_05900() PRE-FUNC: TE@203 - The type 'undefined' is not a valid checkParam_type(), checkParam_typeEither(), or checkParam_typeExtra() 2nd parameter type
CHECKER checkParam_type()
ACTUAL TYPE 'number'
 VALUES 91
EXPECTED TYPE undefined
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5977, error_mess);
printTestName("checkParam_type_5977") 


single_variable  = 91;
single_signature = 'Ford Torino';
error_mess = `PRE_test_05900() PRE-FUNC: TE@202 - Type 'Ford Torino' is unknown classname and not a scalar
CHECKER checkParam_type()
ACTUAL TYPE 'number'
 VALUES 91
EXPECTED TYPE Ford Torino
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5978, error_mess);
printTestName("checkParam_type_5978") 

single_variable  = { a: 1, b: 2 };
single_signature = { a: 'number' };
error_mess = `PRE_test_05900() PRE-FUNC: TE@209 - Extra key in checked object - (b:2)
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:1,b:2}
EXPECTED TYPE {"a":"number"}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5979, error_mess);
printTestName("checkParam_type_5979") 

single_variable  = { a: undefined };
single_signature = { a: 'number' };
error_mess = `PRE_test_05900() PRE-FUNC: TE@211 - Key 'a' was given to be a 'number' but is 'undefined'
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:undefined}
EXPECTED TYPE {"a":"number"}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5980, error_mess);
printTestName("checkParam_type_5980") 

single_variable  = { a: null };
single_signature = { a: 'number' };
error_mess = `PRE_test_05900() PRE-FUNC: TE@212 - Key 'a' was determined to be a 'number' but is 'null'
CHECKER checkParam_type()
ACTUAL TYPE 'object'
 VALUES {a:null}
EXPECTED TYPE {"a":"number"}
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5981, error_mess);
printTestName("checkParam_type_5981") 

// TE@217
single_variable  = 'a-string';
single_signature = ['number'];
error_mess = `PRE_test_05900() PRE-FUNC: TE@217 - Comparing 'string' parameter, with a value of a-string, to expected shape of ["number"].
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "a-string"
EXPECTED TYPE ["number"]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5982, error_mess);
printTestName("checkParam_type_5982") 

single_variable  = console;
single_signature = 'object';
error_mess = '';
test_pre_checkParam_type_single(single_variable, single_signature, 5983, error_mess);
printTestName("checkParam_type_5983") 

single_variable  = Date;
single_signature = 'bad-classname';
error_mess = `PRE_test_05900() PRE-FUNC: TE@202 - Type 'bad-classname' is unknown classname and not a scalar
CHECKER checkParam_type()
ACTUAL TYPE 'function'
 VALUES function Date() { [native code ~~~function~~~
EXPECTED TYPE bad-classname
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5984, error_mess);
printTestName("checkParam_type_5984") 

single_variable  = 'single_signature-not-string';
single_signature = 12;
error_mess = `PRE_test_05900() PRE-FUNC: TE@224 - checkParam_type() called with 2nd param not a string such as 'number'. Matching 'single_signature-not-string' with '12'. Preferably try checkParam_type(12, 'number')
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "single_signature-not-string"
EXPECTED TYPE 12
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5985, error_mess);
printTestName("checkParam_type_5985") 

single_variable  = 'single_signature-null';
single_signature = null;
error_mess = `PRE_test_05900() PRE-FUNC: TE@220 - checkParam_type() called with 1st param of string and 2nd shape param of null
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "single_signature-null"
EXPECTED TYPE null
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5986, error_mess);
printTestName("checkParam_type_5986") 

single_variable  = 'single_signature-undefined';
single_signature = undefined;
error_mess = `PRE_test_05900() PRE-FUNC: TE@218 - checkParam_type() called with 1st param of string and 2nd shape param of undefined
CHECKER checkParam_type()
ACTUAL TYPE 'string'
 VALUES "single_signature-undefined"
EXPECTED TYPE undefined
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5987, error_mess);
printTestName("checkParam_type_5987") 

single_variable  = ["Vinnie", "Barbarino"];
single_signature = ["string", "string", "boolean"];
error_mess = `PRE_test_05900() PRE-FUNC: TE@237 -  ELEMENT '2' is assumed to be a 'boolean', but is mistakenly a 'undefined'
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES ["Vinnie","Barbarino"]
EXPECTED TYPE ["string","string","boolean"]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5988, error_mess);
printTestName("checkParam_type_5988") 




single_variable  = [];
single_signature = ['number'];
error_mess = `PRE_test_05900() PRE-FUNC: TE@238 - Empty array has no types
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES []
EXPECTED TYPE ["number"]
 ORIGIN pre_checkParam_type_05900(a_var)`;
test_pre_checkParam_type_single(single_variable, single_signature, 5989, error_mess);

printTestName("checkParam_type_5989") 




if (fail_count>0) {
  the_problem = `check-tests/checkParam_type_05900.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;