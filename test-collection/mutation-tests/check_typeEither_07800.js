/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_typeEither_multi(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_check_typeEither_07800 += 1;

  function PRE_test_07800() {
    return type_czech.check_typeEither(arguments, signature_of_parameters);
  }

  function pre_check_typeEither_07800() {}
  pre_check_typeEither_07800 = type_czech.link(pre_check_typeEither_07800, PRE_test_07800);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_check_typeEither_07800(parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_typeEither_07800 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_typeEither_07800(parameters_array);
      // failing path, should have been an exception
      failed_check_typeEither_07800 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_typeEither_07800 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(parameters_array, signature_of_parameters, before_var_value, error_id);
}

tested_check_typeEither_07800 = 0;
failed_check_typeEither_07800 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

multi_variable  = [ 12, 'zxc'];
multi_signature = [ [ 'Number', 'Boolean'], [ 'Number', 'String'] ];
error_mess = '';
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7801, error_mess);

multi_variable  = [ 12, [] ];
multi_signature = [ [ 'Number', 'Boolean'], [ 'Symbol', 'String'] ];
error_mess = `PRE_test_07800() pre_check_typeEither_07800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'Symbol', but is mistakenly a 'Number', plus 1 more Either error
check_typeEither(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [12,[]]
   EXPECTED TYPE [["Number","Boolean"],["Symbol","String"]]
CALLING FUNCTION PRE_test_07800()`;
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7802, error_mess);

multi_variable  = { n: 12, b: false };
multi_signature = [ { n: 'Number', b: 'Boolean' }, { r: 'RegExp', s: 'String' } ];
error_mess = '';
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7803, error_mess);

multi_variable  = { r: /d/, s: 'Holiday Road' };
multi_signature = [ { n: 'Number', b: 'Boolean' }, { r: 'RegExp', s: 'String' } ];
error_mess = '';
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7804, error_mess);

multi_variable  = { n: 12, s: 'Holiday Road' };
multi_signature = [ { n: 'Number', b: 'Boolean' }, { r: 'RegExp', s: 'String' } ];
error_mess = `PRE_test_07800() pre_check_typeEither_07800() PRE-FUNC: TE@209 - Extra key in checked object - (n:'12')TE@216 -  The key 'r', which has a type of 'RegExp', is missing in the checked object, plus 1 more Either error
check_typeEither(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {n:12,s:"Holiday Road"}
   EXPECTED TYPE [{n:"Number",b:"Boolean"},{r:"RegExp",s:"String"}]
CALLING FUNCTION PRE_test_07800()`;
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7805, error_mess);

multi_variable  = ['a-string', 123];
multi_signature = [ [ 'Number', 'String'], [ 'String', 'Number'] ];
error_mess = '';
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7802, error_mess);

multi_variable  = ['a-string', 123];
multi_signature = ['String'];
error_mess = 'UE@701 - TypeCzech.check_typeEither()  needs at least 2 choices for a union, not 1 of ["String"]';
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7803, error_mess);

multi_variable  = [false, false];
multi_signature = [ [ 'Number', 'String'], [ 'String', 'Number'] ];
error_mess = `PRE_test_07800() pre_check_typeEither_07800() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'String', but is mistakenly a 'Boolean', plus 1 more Either error
check_typeEither(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [false,false]
   EXPECTED TYPE [["Number","String"],["String","Number"]]
CALLING FUNCTION PRE_test_07800()`;
test_pre_check_typeEither_multi(multi_variable, multi_signature, 7804, error_mess);

// multi_variable  = 'a-string';
// multi_signature = 'String';
// error_mess = 'ME@402 - TypeCzech.check_typeEither() called with a second parameter as a non-array shape of String';
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7805, error_mess);

// multi_variable  = 'asd';
// multi_signature = [ 'HTMLDivElement', 'String'];
// error_mess = '';
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7806, error_mess);

// multi_variable  = Symbol('sym');
// multi_signature = [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date', 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String', 'Symbol' ];
// error_mess = '';
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7807, error_mess);

// multi_variable  = Symbol('sym');
// multi_signature = [ 'Array', ['Number'], 'BigInt', 'Boolean', 'Date', 'Function', 'Number', 'Object', { b: 'Number' }, 'RegExp', 'String'];
// error_mess = `PRE_test_07800() pre_check_typeEither_07800() PRE-FUNC: TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'Array' AND TE@207 - Parameter is meant to be 'Array' but is of the wrong type of 'Symbol':Symbol('sym') AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'BigInt' AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'Boolean' AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'Date' AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'Function' AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'Number' AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'Object' AND TE@207 - Parameter is meant to be 'Object' but is of the wrong type of 'Symbol':Symbol('sym') AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'RegExp' AND TE@226 - The value 'Symbol('sym')', which is a 'Symbol', is not a 'String'
// check_typeEither(arguments, expected_types)
//     ACTUAL TYPES 'Symbol'
//     ACTUAL VALUE Symbol('sym')
//    EXPECTED TYPE ["Array",["Number"],"BigInt","Boolean","Date","Function","Number","Object",{b:"Number"},"RegExp","String"]
// CALLING FUNCTION PRE_test_07800()`;
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7808, error_mess);

// multi_variable  = { a: 3 };
// multi_signature = [ { a: 'Number' }, { b: 'String' } ];
// error_mess = '';
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7809, error_mess);

// multi_variable  = { b: 'Cheap Trick' };
// multi_signature = [ { a: 'Number' }, { b: 'String' } ];
// error_mess = '';
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7810, error_mess);

// multi_variable  = [1, 2, 3, 4];
// multi_signature = [ ['Number'], ['String'] ];
// error_mess = '';
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7811, error_mess);

// multi_variable  = ['a', 'b', 'c'];
// multi_signature = [ ['Number'], ['String'] ];
// error_mess = '';
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7812, error_mess);

// multi_variable  = 'asd';
// multi_signature = [ 12, false];
// error_mess = `PRE_test_07800() pre_check_typeEither_07800() PRE-FUNC: TE@230 - The type '12' is invalid AND TE@230 - The type 'false' is invalid
// check_typeEither(arguments, expected_types)
//     ACTUAL TYPES 'String'
//     ACTUAL VALUE "asd"
//    EXPECTED TYPE [12,false]
// CALLING FUNCTION PRE_test_07800()`;
// test_pre_check_typeEither_multi(multi_variable, multi_signature, 7813, error_mess);



// expected_tests = 88;
// expected_fails = 0;
// if (expected_tests !== tested_check_typeEither_07800) {
//   throw new Error(`check_typeEither_07800().md ${expected_tests} expected_tests !== ${tested_check_typeEither_07800} tested_check_typeEither_07800`);
// } else if (expected_fails !== failed_check_typeEither_07800) {
//   throw new Error(`check_typeEither_07800().md ${expected_fails} expected_fails !== ${failed_check_typeEither_07800} failed_check_typeEither_07800`);
// } else if (typeof total_checks === 'undefined') {
//   console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
// } else {
//   total_checks += expected_tests;
// }
