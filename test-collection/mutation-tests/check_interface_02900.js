/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_interface(actual_variable, variable_signature, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_check_interface_02900 += 1;

  function PRE_test_02900() {
    return type_czech.check_interface(arguments, variable_signature);
  }

  function pre_check_interface_02900() {}
  pre_check_interface_02900 = type_czech.link(pre_check_interface_02900, PRE_test_02900);

  const before_var_value = beforeCheck(actual_variable, variable_signature);
  if (expected_error === '') {
    try {
      pre_check_interface_02900(actual_variable);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_interface_02900 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_interface_02900(actual_variable);
      // failing path, should have been an exception
      failed_check_interface_02900 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_interface_02900 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(actual_variable, variable_signature, before_var_value, error_id);
}

tested_check_interface_02900 = 0;
failed_check_interface_02900 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

variable  = { show: (x) => x };
signature = { show: 'Function' };
error_mess = '';
test_pre_check_interface(variable, signature, 2901, error_mess);

variable  = { show: (x) => x };
signature = { no_match: 'Function' };
error_mess = `PRE_test_02900() pre_check_interface_02900() PRE-FUNC: IE@501 - Interface missing key 'no_match' in checked object
check_interface(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {show:(x) => x ***}
 EMPTY ASSERTION {no_match:"Function"}
CALLING FUNCTION PRE_test_02900()`;
test_pre_check_interface(variable, signature, 2902, error_mess);

variable  = { show: (x) => x };
signature = { show: 'Number' };
error_mess = `PRE_test_02900() pre_check_interface_02900() PRE-FUNC: IE@502 - actual type of 'show' is 'Function', with a value of '(x) => x ***', not the expected 'Number' type
check_interface(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {show:(x) => x ***}
 EMPTY ASSERTION {show:"Number"}
CALLING FUNCTION PRE_test_02900()`;
test_pre_check_interface(variable, signature, 2903, error_mess);

variable  = { show: 12 };
signature = { show: 'Function' };
error_mess = `PRE_test_02900() pre_check_interface_02900() PRE-FUNC: IE@502 - actual type of 'show' is 'Number', with a value of '12', not the expected 'Function' type
check_interface(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {show:12}
 EMPTY ASSERTION {show:"Function"}
CALLING FUNCTION PRE_test_02900()`;
test_pre_check_interface(variable, signature, 2904, error_mess);

variable  = { show: (x) => x, extra: 57 };
signature = { show: 'Function' };
error_mess = '';
test_pre_check_interface(variable, signature, 2905, error_mess);

variable  = { show: 95 };
signature = { show: 'Number' };
error_mess = '';
test_pre_check_interface(variable, signature, 2906, error_mess);

variable  = [98];
signature = { show: 'Number' };
error_mess = `PRE_test_02900() pre_check_interface_02900() PRE-FUNC: IE@505 - Function argument is not an object.
check_interface(arguments, expected_types)
    ACTUAL TYPES 'Array'
    ACTUAL VALUE [98]
 EMPTY ASSERTION {show:"Number"}
CALLING FUNCTION PRE_test_02900()`;
test_pre_check_interface(variable, signature, 2907, error_mess);

variable  =  { show: 95 };
signature = [45];
error_mess = `PRE_test_02900() pre_check_interface_02900() PRE-FUNC: IE@504 - Signature is not an object.
check_interface(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {show:95}
 EMPTY ASSERTION [45]
CALLING FUNCTION PRE_test_02900()`;
test_pre_check_interface(variable, signature, 2908, error_mess);

variable  = { show: (x) => x };
signature = { };
error_mess = `PRE_test_02900() pre_check_interface_02900() PRE-FUNC: IE@503 - Signature is empty object.
check_interface(arguments, expected_types)
    ACTUAL TYPES 'Object'
    ACTUAL VALUE {show:(x) => x ***}
 EMPTY ASSERTION {}
CALLING FUNCTION PRE_test_02900()`;
test_pre_check_interface(variable, signature, 2909, error_mess);

expected_tests = 9;
expected_fails = 0;
if (expected_tests !== tested_check_interface_02900) {
  throw new Error(`check_interface_02900().md ${expected_tests} expected_tests !== ${tested_check_interface_02900} tested_check_interface_02900`);
} else if (expected_fails !== failed_check_interface_02900) {
  throw new Error(`check_interface_02900().md ${expected_fails} expected_fails !== ${failed_check_interface_02900} failed_check_interface_02900`);
} else if (typeof total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  total_checks += expected_tests;
}
