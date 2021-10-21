/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_variadicEmpty(actual_variable, variable_signature, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_check_variadicEmpty_32800 += 1;

  function PRE_test_32800() {
    return type_czech.check_variadicEmpty(arguments, variable_signature);
  }

  function pre_check_variadicEmpty_32800() {}
  pre_check_variadicEmpty_32800 = type_czech.link(pre_check_variadicEmpty_32800, PRE_test_32800);

  const before_var_value = beforeCheck(actual_variable, variable_signature);
  if (expected_error === '') {
    try {
      pre_check_variadicEmpty_32800(actual_variable);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_variadicEmpty_32800 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_variadicEmpty_32800(actual_variable);
      // failing path, should have been an exception
      failed_check_variadicEmpty_32800 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_variadicEmpty_32800 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(actual_variable, variable_signature, before_var_value, error_id);
}

tested_check_variadicEmpty_32800 = 0;
failed_check_variadicEmpty_32800 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

parameters  = ['a', 'b', 'c'];
signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_check_variadicEmpty(parameters, signature, 32801, error_mess);

parameters  = ['a', 2, 'c'];
signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_check_variadicEmpty(parameters, signature, 32802, error_mess);

parameters  = ['a', 'b', 'c'];
signature = 'EMPTY-ERROR';
error_mess = `PRE_test_32800() pre_check_variadicEmpty_32800() PRE-FUNC: VE@605 - Use check_variadicEmpty(["a","b","c"], ['EMPTY-ERROR']') instead of check_variadicEmpty(["a","b","c"], 'EMPTY-ERROR')
check_variadicEmpty(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE ["a","b","c"]
 EMPTY ASSERTION EMPTY-ERROR
CALLING FUNCTION PRE_test_32800()`;
test_pre_check_variadicEmpty(parameters, signature, 32803, error_mess);

parameters  = [2];
signature = ['EMPTY-ERROR'];
error_mess = '';
test_pre_check_variadicEmpty(parameters, signature, 32804, error_mess);

parameters  = [];
signature = ['EMPTY-ERROR'];
error_mess = `PRE_test_32800() pre_check_variadicEmpty_32800() PRE-FUNC: EE@311 - ELEMENT '0' is erroneously empty :
check_variadicEmpty(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE []
 EMPTY ASSERTION ["EMPTY-ERROR"]
CALLING FUNCTION PRE_test_32800()`;
test_pre_check_variadicEmpty(parameters, signature, 32805, error_mess);

expected_tests = 5;
expected_fails = 0;
if (expected_tests !== tested_check_variadicEmpty_32800) {
  throw new Error(`check_variadicEmpty_32800().md ${expected_tests} expected_tests !== ${tested_check_variadicEmpty_32800} tested_check_variadicEmpty_32800`);
} else if (expected_fails !== failed_check_variadicEmpty_32800) {
  throw new Error(`check_variadicEmpty_32800().md ${expected_fails} expected_fails !== ${failed_check_variadicEmpty_32800} failed_check_variadicEmpty_32800`);
} else if (typeof total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  total_checks += expected_tests;
}
