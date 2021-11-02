/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_typeEither_single(single_parameter, signature_of_parameter, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');

  tested_check_typeEither_07900 += 1;

  function PRE_test_07900() {
    return type_czech.check_typeEither(arguments, signature_of_parameter);
  }

  function pre_check_typeEither_07900() {}
  pre_check_typeEither_07900 = type_czech.linkUp(pre_check_typeEither_07900, PRE_test_07900);

  const before_var_value = beforeCheck(single_parameter, signature_of_parameter);
  if (expected_error === '') {
    try {
      pre_check_typeEither_07900(single_parameter);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_typeEither_07900 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_typeEither_07900(single_parameter);
      // failing path, should have been an exception
      failed_check_typeEither_07900 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_typeEither_07900 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(single_parameter, signature_of_parameter, before_var_value, error_id);
}

tested_check_typeEither_07900 = 0;
failed_check_typeEither_07900 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

single_variable  = 12;
single_signature = [ 'number', 'string'];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7901, error_mess);

single_variable  = 'a-string';
single_signature = [ 'number', 'string'];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7902, error_mess);

single_variable  = 'a-string';
single_signature = [ 'string'];
error_mess = 'UE@701 - TypeCzech.check_typeEither()  needs at least 2 choices for an Either, not 1 of ["string"]';
test_pre_check_typeEither_single(single_variable, single_signature, 7903, error_mess);

single_variable  = false;
single_signature = [ 'number', 'string'];
error_mess = `PRE_test_07900() pre_check_typeEither_07900() PRE-FUNC: TE@226 - The value 'false', which is a 'boolean', is not a 'number', TE@226 - The value 'false', which is a 'boolean', is not a 'string'
check_typeEither(arguments, expected_types)
    ACTUAL TYPES 'boolean'
    ACTUAL VALUE false
   EXPECTED TYPE ["number","string"]
CALLING FUNCTION PRE_test_07900()`;
test_pre_check_typeEither_single(single_variable, single_signature, 7904, error_mess);

single_variable  = 'a-string';
single_signature = 'string';
error_mess = 'ME@402 - TypeCzech.check_typeEither() called with a second parameter as a non-array shape of string';
test_pre_check_typeEither_single(single_variable, single_signature, 7905, error_mess);

single_variable  = 'asd';
single_signature = [ 'HTMLDivElement', 'string'];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7906, error_mess);

single_variable  = Symbol('sym');
single_signature = [ 'array', ['number'], 'bigint', 'boolean', 'date', 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string', 'symbol' ];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7907, error_mess);

single_variable  = Symbol('sym');
single_signature = [ 'array', ['number'], 'bigint', 'boolean', 'date', 'function', 'number', 'object', { b: 'number' }, 'regexp', 'string'];
error_mess = `PRE_test_07900() pre_check_typeEither_07900() PRE-FUNC: TE@226 - The value 'Symbol('sym')', which is a 'symbol', is not a 'array', TE@226 - The value 'Symbol('sym')', which is a 'symbol', is not a 'string', plus  9 more Either errors
check_typeEither(arguments, expected_types)
    ACTUAL TYPES 'symbol'
    ACTUAL VALUE Symbol('sym')
   EXPECTED TYPE ["array",["number"],"bigint","boolean","date","function","number","object",{b:"number"},"regexp","string"]
CALLING FUNCTION PRE_test_07900()`;
test_pre_check_typeEither_single(single_variable, single_signature, 7908, error_mess);

single_variable  = { a: 3 };
single_signature = [ { a: 'number' }, { b: 'string' } ];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7909, error_mess);

single_variable  = { b: 'Cheap Trick' };
single_signature = [ { a: 'number' }, { b: 'string' } ];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7910, error_mess);

single_variable  = [1, 2, 3, 4];
single_signature = [ ['number'], ['string'] ];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7911, error_mess);

single_variable  = ['a', 'b', 'c'];
single_signature = [ ['number'], ['string'] ];
error_mess = '';
test_pre_check_typeEither_single(single_variable, single_signature, 7912, error_mess);

single_variable  = 'asd';
single_signature = [ 12, false];
error_mess = `PRE_test_07900() pre_check_typeEither_07900() PRE-FUNC: TE@230 - The type '12' is invalid, TE@230 - The type 'false' is invalid
check_typeEither(arguments, expected_types)
    ACTUAL TYPES 'string'
    ACTUAL VALUE "asd"
   EXPECTED TYPE [12,false]
CALLING FUNCTION PRE_test_07900()`;
test_pre_check_typeEither_single(single_variable, single_signature, 7913, error_mess);

expected_tests = 13;
expected_fails = 0;
if (expected_tests !== tested_check_typeEither_07900) {
  throw new Error(`check_typeEither_07900().md ${expected_tests} expected_tests !== ${tested_check_typeEither_07900} tested_check_typeEither_07900`);
} else if (expected_fails !== failed_check_typeEither_07900) {
  throw new Error(`check_typeEither_07900().md ${expected_fails} expected_fails !== ${failed_check_typeEither_07900} failed_check_typeEither_07900`);
} else if (typeof TEST_total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  TEST_total_checks += expected_tests;
}
