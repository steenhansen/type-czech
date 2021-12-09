/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable  no-func-assign */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-multi-spaces */
/* eslint-disable array-bracket-spacing */
/* eslint-disable max-len */

function test_pre_scalar_arrays_57000(single_parameter, signature_of_parameter, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');

  tested_scalar_arrays_57000 += 1;

  function PRE_test_57000(a_var) {
    return type_czech.checkParam_type(a_var, signature_of_parameter);
  }

  function pre_scalar_arrays_57000() {}

  pre_scalar_arrays_57000 = type_czech.linkUp(pre_scalar_arrays_57000, PRE_test_57000);

  const before_var_value = beforeCheck(single_parameter, signature_of_parameter);
  if (expected_error === '') {
    try {
      pre_scalar_arrays_57000(single_parameter);
      // expected route with no error message
    } catch (e) {
      // failing path
      failed_scalar_arrays_57000 += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_scalar_arrays_57000(single_parameter);
      // failing path, should have been an exception
      failed_scalar_arrays_57000 += 1;
      consoleExpectedActual(expected_error, 'MISSING-EXCEPTION', error_id);
    } catch (e) {
      const error_not_match_exception = errorNotMatchException(expected_error, e);
      if (error_not_match_exception) {
        // failing path, the error was wrong
        failed_scalar_arrays_57000 += 1;
        consoleExpectedActual(expected_error, e, error_id);
      } else {
        // expected route with an error message
      }
    }
  }
  afterCheck(single_parameter, signature_of_parameter, before_var_value, error_id);
}

tested_scalar_arrays_57000 = 0;
failed_scalar_arrays_57000 = 0;

// /////////////////////////////////////////////////////////////////////////////////////////////

arr_variable  = [1];
arr_signature = ['number-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57001, error_mess);

arr_variable  = [1, 2];
arr_signature = ['number-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57002, error_mess);

arr_variable  = [1, 2, 3];
arr_signature = ['number-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57003, error_mess);

arr_variable  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
arr_signature = ['number-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57004, error_mess);

arr_variable  = [false];
arr_signature = ['number-array'];
error_mess = `PRE_test_57000() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'number', but is mistakenly a 'boolean' with a value of false
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [false]
EXPECTED TYPE ["number-array"]
 ORIGIN pre_scalar_arrays_57000(a_var)`;
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57005, error_mess);

arr_variable  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 'a-string', 13];
arr_signature = ['number-array'];
error_mess = `PRE_test_57000() PRE-FUNC: TE@214 -  ELEMENT '11' is assumed to be a 'number', but is mistakenly a 'string' with a value of a-string
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [1,2,3,4,5,6,7,8,9,10,11,"a-string",13]
EXPECTED TYPE ["number-array"]
 ORIGIN pre_scalar_arrays_57000(a_var)`;
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57006, error_mess);


arr_variable  = ['a', 'b', 'c'];
arr_signature = ['string-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57007, error_mess);

arr_variable  = [Symbol('sym-a'), Symbol('sym-b'), Symbol('sym-c')];
arr_signature = ['symbol-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57008, error_mess);

arr_variable  = [/(?:)/, /(?:)/, /(?:)/];
arr_signature = ['regexp-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57009, error_mess);

arr_variable  = [{a:'a'}, {b:52}, {c:'crater'},];
arr_signature = ['object-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57010, error_mess);

arr_variable  = [a=>a+8, b=>b+7, c=>c+6];
arr_signature = ['function-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57011, error_mess);

arr_variable  = [new Date('2021-12-05'), new Date('2021-12-05'), new Date('2021-12-05')];
arr_signature = ['date-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57012, error_mess);

arr_variable  = [true, false, true];
arr_signature = ['boolean-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57013, error_mess);

arr_variable  = [123n, 456n, 789n];
arr_signature = ['bigint-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57014, error_mess);

arr_variable  = [ [123n], ['Arcola', 42] ];
arr_signature = ['array-array'];
error_mess = '';
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57015, error_mess);

arr_variable  = [  ['a', 1],  ['b', 2] ];
arr_signature = ['string', 'number'];
error_mess = `PRE_test_57000() PRE-FUNC: TE@214 -  ELEMENT '0' is assumed to be a 'string', but is mistakenly a 'array' with a value of ["a",1]
CHECKER checkParam_type()
ACTUAL TYPE 'array'
 VALUES [["a",1],["b",2]]
EXPECTED TYPE ["string","number"]
 ORIGIN pre_scalar_arrays_57000(a_var)`;
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57016, error_mess);

arr_variable  = [  ['a', 1],  ['b', 2] ];
arr_signature = [ ['string', 'number'], ['string', 'number'] ];
error_mess = ``;
test_pre_scalar_arrays_57000(arr_variable, arr_signature, 57017, error_mess);

console.log('tested_scalar_arrays_57000', tested_scalar_arrays_57000)
console.log('failed_scalar_arrays_57000', failed_scalar_arrays_57000)
TEST_total_checks += tested_scalar_arrays_57000;



//  need to look at checkParam_type(), checkParam_typeEither(), checkParam_typeExtra
//                  checkArgs_typeVariadic