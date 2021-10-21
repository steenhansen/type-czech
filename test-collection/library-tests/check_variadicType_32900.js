/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_check_variadicType(parameters_array, signature_of_parameters, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS');
  tested_check_variadicType_32900 += 1;

  function PRE_test_32900() {
    return type_czech.check_variadicType(arguments, signature_of_parameters);
  }

  function pre_check_variadicType_32900() {}
  pre_check_variadicType_32900 = type_czech.link(pre_check_variadicType_32900, PRE_test_32900);

  const before_var_value = beforeCheck(parameters_array, signature_of_parameters);
  if (expected_error === '') {
    try {
      pre_check_variadicType_32900(...parameters_array);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_check_variadicType_32900 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_variadicType_32900(...parameters_array);
      // failing path, should have been an exception
      failed_check_variadicType_32900 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_check_variadicType_32900 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(parameters_array, signature_of_parameters, before_var_value, error_id);
}

tested_check_variadicType_32900 = 0;
failed_check_variadicType_32900 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

parameters  = ['a', 'b', 'c'];
signature = ['String'];
error_mess = '';
test_pre_check_variadicType(parameters, signature, 32901, error_mess);

parameters  = ['a', 2, 'c'];
signature = ['String'];
error_mess = `PRE_test_32900() pre_check_variadicType_32900() PRE-FUNC: TE@215 - ELEMENT '1' is asserted to be a 'String', but is fallaciously a 'Number' : 2
check_variadicType(arguments, expected_types)
    ACTUAL TYPES ['String','Number','String']
    ACTUAL VALUE ["a",2,"c"]
   EXPECTED TYPE ["String"]
CALLING FUNCTION PRE_test_32900()`;
test_pre_check_variadicType(parameters, signature, 32902, error_mess);

parameters  = ['a', 'b', 'c'];
signature = 'String';
error_mess = `PRE_test_32900() pre_check_variadicType_32900() PRE-FUNC: VE@601 - Use check_variadicType(["a","b","c"], ['String']') instead of check_variadicType(["a","b","c"], 'String')
check_variadicType(arguments, expected_types)
    ACTUAL TYPES ['String','String','String']
    ACTUAL VALUE ["a","b","c"]
   EXPECTED TYPE String
CALLING FUNCTION PRE_test_32900()`;
test_pre_check_variadicType(parameters, signature, 32903, error_mess);

parameters  = [2];
signature = ['Number'];
error_mess = '';
test_pre_check_variadicType(parameters, signature, 32904, error_mess);

parameters  = [];
signature = ['Number'];
error_mess = `PRE_test_32900() pre_check_variadicType_32900() PRE-FUNC: ME@409 - There are no parameters.
check_variadicType(arguments, expected_types)
    ACTUAL TYPES 
    ACTUAL VALUE 
   EXPECTED TYPE ['Number']
CALLING FUNCTION PRE_test_32900()`;
test_pre_check_variadicType(parameters, signature, 32905, error_mess);

expected_tests = 5;
expected_fails = 0;
if (expected_tests !== tested_check_variadicType_32900) {
  throw new Error(`check_variadicType_32900().md ${expected_tests} expected_tests !== ${tested_check_variadicType_32900} tested_check_variadicType_32900`);
} else if (expected_fails !== failed_check_variadicType_32900) {
  throw new Error(`check_variadicType_32900().md ${expected_fails} expected_fails !== ${failed_check_variadicType_32900} failed_check_variadicType_32900`);
} else if (typeof total_checks === 'undefined') {
  console.log('no-issues: pass', expected_tests - expected_fails, ' fail', expected_fails);
} else {
  total_checks += expected_tests;
}
