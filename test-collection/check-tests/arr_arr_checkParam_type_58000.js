/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_array_arrays_58000(single_parameter, signature_of_parameter, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  tested_array_arrays_58000 += 1;

  function PRE_test_58000(a_var) {
    return type_czech.checkParam_type(a_var, signature_of_parameter);
  }

  function pre_array_arrays_58000() {}

  pre_array_arrays_58000 = type_czech.linkUp(pre_array_arrays_58000, PRE_test_58000);

  const before_var_value = beforeCheck(single_parameter, signature_of_parameter);
  if (expected_error === '') {
    try {
      pre_array_arrays_58000(single_parameter);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_array_arrays_58000 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_array_arrays_58000(single_parameter);
      // failing path, should have been an exception
      failed_array_arrays_58000 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_array_arrays_58000 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(single_parameter, signature_of_parameter, before_var_value, error_id);
}

tested_array_arrays_58000 = 0;
failed_array_arrays_58000 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

arr_variable  = [ [1], [2], [3] ];
arr_signature = ['array-array'];
error_mess = '';
test_pre_array_arrays_58000(arr_variable, arr_signature, 58001, error_mess);

arr_variable  = [ [1], ['c'], [false] ];
arr_signature = ['array-array'];
error_mess = '';
test_pre_array_arrays_58000(arr_variable, arr_signature, 58002, error_mess);

arr_variable  = [ [1, 2], ['a', 'b', 'c'], [false, Symbol('symb'), 123n, (a) => a + 8] ];
arr_signature = ['array-array'];
error_mess = '';
test_pre_array_arrays_58000(arr_variable, arr_signature, 58003, error_mess);

arr_variable  = [ [1], 'a-string', [3] ];
arr_signature = ['array-array'];
error_mess = `PRE_test_58000() PRE-FUNC: TE@214 -  ELEMENT '1' is assumed to be a 'array', but is mistakenly a 'string' with a value of a-string
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [[1],"a-string",[3]]
EXPECTED TYPE ["array-array"]
 ORIGIN pre_array_arrays_58000(a_var)`;
test_pre_array_arrays_58000(arr_variable, arr_signature, 58004, error_mess);


console.log('tested_array_arrays_58000', tested_array_arrays_58000)
console.log('failed_array_arrays_58000', failed_array_arrays_58000)
TEST_total_checks += tested_array_arrays_58000;











//  need to look at checkParam_type(), checkParam_typeEither(), checkParam_typeExtra
//                  checkArgs_typeVariadic