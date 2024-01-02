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

function test_pre_checkParam_typeEither_multi(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  pass_count += 1;

  function PRE_test_07800(a_var) {
    return type_czech.checkParam_typeEither(a_var, signature_of_parameters);
  }

  function pre_checkParam_typeEither_07800() {}
  pre_checkParam_typeEither_07800 = type_czech.linkUp(pre_checkParam_typeEither_07800, PRE_test_07800);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_checkParam_typeEither_07800(parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_checkParam_typeEither_07800(parameters_array);
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

multi_variable  = [ 12, 'zxc'];
multi_signature = [ [ 'number', 'boolean'], [ 'number', 'string'] ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7801, error_mess);
printTestName("checkParam_typeEither_07801") 

multi_variable  = [ 12, [] ];
multi_signature = [ [ 'number', 'boolean'], [ 'symbol', 'string'] ];
error_mess = `PRE_test_07800() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'boolean', but is mistakenly a 'array' with a value of [], 
                                         TE@214 -  ELEMENT '0' is assumed to be a 'symbol', but is mistakenly a 'number' with a value of 12
CHECKER checkParam_typeEither()
ACTUAL TYPE 'array'
 VALUES [12,[]]
EXPECTED TYPE [["number","boolean"],["symbol","string"]]
 ORIGIN pre_checkParam_typeEither_07800(a_var)`;
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7802, error_mess);
printTestName("checkParam_typeEither_07802") 

multi_variable  = { n: 12, b: false };
multi_signature = [ { n: 'number', b: 'boolean' }, { r: 'regexp', s: 'string' } ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7803, error_mess);
printTestName("checkParam_typeEither_07803") 

multi_variable  = { r: /d/, s: 'Holiday Road' };
multi_signature = [ { n: 'number', b: 'boolean' }, { r: 'regexp', s: 'string' } ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7804, error_mess);
printTestName("checkParam_typeEither_07804") 

multi_variable  = { n: 12, s: 'Holiday Road' };
multi_signature = [ { n: 'number', b: 'boolean' }, { r: 'regexp', s: 'string' } ];
error_mess = `PRE_test_07800() PRE-FUNC: TE@209 - Extra key in checked object - (s:'Holiday Road'), TE@209 - Extra key in checked object - (n:12)
CHECKER checkParam_typeEither()
ACTUAL TYPE 'object'
 VALUES {n:12,s:"Holiday Road"}
EXPECTED TYPE [{"n":"number","b":"boolean"},{"r":"regexp","s":"string"}]
 ORIGIN pre_checkParam_typeEither_07800(a_var)`;
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7805, error_mess);
printTestName("checkParam_typeEither_07805") 

multi_variable  = ['a-string', 123];
multi_signature = [ [ 'number', 'string'], [ 'string', 'number'] ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7806, error_mess);
printTestName("checkParam_typeEither_07806") 

multi_variable  = ['a-string', 123];
multi_signature = ['string'];
error_mess = `PRE_test_07800() PRE-FUNC: UE@701 - checkParam_typeEither()  needs at least 2 choices for an Either, not 1 of ["string"]
CHECKER checkParam_typeEither()
ACTUAL TYPE 'array'
 VALUES ["a-string",123]
EXPECTED TYPE ["string"]
 ORIGIN pre_checkParam_typeEither_07800(a_var)`;
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7807, error_mess);
printTestName("checkParam_typeEither_07807") 

multi_variable  = [false, false];
multi_signature = [ [ 'number', 'string'], [ 'string', 'number'] ];

error_mess = `PRE_test_07800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'boolean' with a value of false, 
                                         TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'boolean' with a value of false
CHECKER checkParam_typeEither()
ACTUAL TYPE 'array'
 VALUES [false,false]
EXPECTED TYPE [["number","string"],["string","number"]]
 ORIGIN pre_checkParam_typeEither_07800(a_var)`;
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7808, error_mess);
printTestName("checkParam_typeEither_07808") 

multi_variable  = ['a-string', null];
multi_signature = [ ['string', 'string'], ['number', 'number'] ];
error_mess = `PRE_test_07800() PRE-FUNC: TE@237 -  ELEMENT '1' is assumed to be a 'string', but is mistakenly a 'null', 
                                         TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'string' with a value of a-string
CHECKER checkParam_typeEither()
ACTUAL TYPE 'array'
 VALUES ["a-string",null]
EXPECTED TYPE [["string","string"],["number","number"]]
 ORIGIN pre_checkParam_typeEither_07800(a_var)`;
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7809, error_mess);
printTestName("checkParam_typeEither_07809") 


























multi_variable  = 'asd';
multi_signature = [ 'HTMLDivElement', 'string'];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7810, error_mess);
printTestName("checkParam_typeEither_07810")    

multi_variable  = Symbol('sym');
multi_signature = [ 'array', ['number'], 'bigint', 'boolean', 'date', 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol' ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7811, error_mess);
printTestName("checkParam_typeEither_07811")    

multi_variable  = Symbol('sym');
multi_signature = [ 'array', ['number'], 'bigint', 'boolean', 'date', 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string'];
error_mess = `PRE_test_07800() PRE-FUNC: TE@226 - The value 'Symbol('sym')', which is a 'symbol', is not a 'array', TE@226 - The value 'Symbol('sym')', which is a 'symbol', is not a 'string', plus 9 more Either errors
CHECKER checkParam_typeEither()
ACTUAL TYPE 'symbol'
 VALUES Symbol('sym')
EXPECTED TYPE ["array",["number"],"bigint","boolean","date","function","number","object",{"b":"number"},"regexp","string"]
 ORIGIN pre_checkParam_typeEither_07800(a_var)`;
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7812, error_mess);
printTestName("checkParam_typeEither_07812")    

multi_variable  = { a: 3 };
multi_signature = [ { a: 'number' }, { b: 'string' } ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7813, error_mess);
printTestName("checkParam_typeEither_07813")    

multi_variable  = { b: 'Cheap Trick' };
multi_signature = [ { a: 'number' }, { b: 'string' } ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7814, error_mess);
printTestName("checkParam_typeEither_07814")    

multi_variable  = [1, 2, 3, 4];
multi_signature = [ ['numbers'], ['string'] ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7815, error_mess);
printTestName("checkParam_typeEither_07815")    

multi_variable  = ['a', 'b', 'c'];
multi_signature = [ ['number'], ['strings'] ];
error_mess = '';
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7816, error_mess);
printTestName("checkParam_typeEither_07816")    

multi_variable  = 'asd';
multi_signature = [ 12, false];
error_mess = `PRE_test_07800() PRE-FUNC: TE@230 - The type '12' is invalid, TE@230 - The type 'false' is invalid
CHECKER checkParam_typeEither()
ACTUAL TYPE 'string'
 VALUES "asd"
EXPECTED TYPE [12,false]
 ORIGIN pre_checkParam_typeEither_07800(a_var)`;
test_pre_checkParam_typeEither_multi(multi_variable, multi_signature, 7817, error_mess);

printTestName("checkParam_typeEither_07817")    




if (fail_count>0) {
  the_problem = `check-tests/checkParam_typeEither_07800.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;