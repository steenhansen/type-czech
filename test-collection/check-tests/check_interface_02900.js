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





function test_pre_check_interface(actual_variable, variable_signature, error_id, expected_error) {
  const type_czech = TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  pass_count += 1;

  function PRE_test_02900(a_var) {
    return type_czech.check_interface(a_var, variable_signature);
  }

  function pre_check_interface_02900() {}
  pre_check_interface_02900 = type_czech.linkUp(pre_check_interface_02900, PRE_test_02900);

  const before_var_value = beforeCheck(actual_variable, variable_signature);
  if (expected_error === '') {
    try {
      pre_check_interface_02900(actual_variable);
      // expected route with no error message
    } catch (e) {
      // failing path
      fail_count += 1;
      console.log('FAIL, should be no error but got ', e, error_id);
    }
  } else {
    try {
      pre_check_interface_02900(actual_variable);
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
  afterCheck(actual_variable, variable_signature, before_var_value, error_id);
}


// /////////////////////////////////////////////////////////////////////////////////////////////

variable  = { show: (x) => x };
signature = { show: 'function' };
error_mess = '';
test_pre_check_interface(variable, signature, 2901, error_mess);

variable  = { show: (x) => x };
signature = { no_match: 'function' };
error_mess = `PRE_test_02900() PRE-FUNC: IE@501 - Interface, {no_match:"function"}, has extra key 'no_match' that is in not in checked object of {show:(x) => x ~~~function~~~}
CHECKER check_interface()
ACTUAL TYPE 'object'
 VALUES {show:(x) => x ~~~function~~~}
 EXPECTED TYPE {"no_match":"function"}
 ORIGIN pre_check_interface_02900(a_var)`;
test_pre_check_interface(variable, signature, 2902, error_mess);

variable  = { show: (x) => x };
signature = { show: 'number' };
error_mess = `PRE_test_02900() PRE-FUNC: IE@502 - Actual type of 'show' is 'function', with a value of '(x) => x ~~~function~~~', not the expected 'number' type
CHECKER check_interface()
ACTUAL TYPE 'object'
 VALUES {show:(x) => x ~~~function~~~}
 EXPECTED TYPE {"show":"number"}
 ORIGIN pre_check_interface_02900(a_var)`;
test_pre_check_interface(variable, signature, 2903, error_mess);

variable  = { show: 12 };
signature = { show: 'function' };
error_mess = `PRE_test_02900() PRE-FUNC: IE@502 - Actual type of 'show' is 'number', with a value of '12', not the expected 'function' type
CHECKER check_interface()
ACTUAL TYPE 'object'
 VALUES {show:12}
 EXPECTED TYPE {"show":"function"}
 ORIGIN pre_check_interface_02900(a_var)`;
test_pre_check_interface(variable, signature, 2904, error_mess);

variable  = { show: (x) => x, extra: 57 };
signature = { show: 'function' };
error_mess = '';
test_pre_check_interface(variable, signature, 2905, error_mess);

variable  = { show: 95 };
signature = { show: 'number' };
error_mess = '';
test_pre_check_interface(variable, signature, 2906, error_mess);

variable  = [98];
signature = { show: 'number' };
error_mess = `PRE_test_02900() PRE-FUNC: IE@505 - Function argument is not an object.
CHECKER check_interface()
ACTUAL TYPE 'array'
 VALUES [98]
 EXPECTED TYPE {"show":"number"}
 ORIGIN pre_check_interface_02900(a_var)`;
test_pre_check_interface(variable, signature, 2907, error_mess);

variable  =  { show: 95 };
signature = [45];
error_mess = `PRE_test_02900() PRE-FUNC: IE@504 - Signature is not an object.
CHECKER check_interface()
ACTUAL TYPE 'object'
 VALUES {show:95}
 EXPECTED TYPE [45]
 ORIGIN pre_check_interface_02900(a_var)`;
test_pre_check_interface(variable, signature, 2908, error_mess);

variable  = { show: (x) => x };
signature = { };
error_mess = `PRE_test_02900() PRE-FUNC: IE@503 - Signature is empty object.
CHECKER check_interface()
ACTUAL TYPE 'object'
 VALUES {show:(x) => x ~~~function~~~}
 EXPECTED TYPE {}
 ORIGIN pre_check_interface_02900(a_var)`;
test_pre_check_interface(variable, signature, 2909, error_mess);






variable  = { Matryoshka: 'doll'} ;
signature = { Matryoshka: 'string' };
error_mess = '';
test_pre_check_interface(variable, signature, 2910, error_mess);

variable  = { Matryoshka: {Russia:  'doll'} };
signature = { Matryoshka: {Russia:'string'} };
error_mess = `PRE_test_02900() PRE-FUNC: IE@506 - Try checkParam_type('{Matryoshka:{Russia:"doll"}}', '{Matryoshka:{Russia:"string"}}') for nested objects
CHECKER check_interface()
ACTUAL TYPE 'object'
 VALUES {Matryoshka:{Russia:"doll"}}
EXPECTED TYPE {"Matryoshka":{"Russia":"string"}}
 ORIGIN pre_check_interface_02900(a_var)`;
test_pre_check_interface(variable, signature, 2911, error_mess);







if (fail_count>0) {
  the_problem = `check-tests/check_interface_02900.js - fails = ${fail_count}`;  
  console.log(the_problem)
  throw the_problem
}
TEST_total_checks += pass_count;