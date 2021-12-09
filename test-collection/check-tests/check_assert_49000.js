/* eslint-disable */

tested_signatures = 0;
failed_signatures = 0;


signature_check_assert_49001()
signature_check_assert_49002()

TEST_total_fails += failed_signatures;
TEST_total_checks += tested_signatures;
if (TEST_show_random) {
  console.log('variadic failed tests 49000', failed_signatures)
  console.log('variadic passed tests 49000', tested_signatures)
}



function signature_check_assert_49001(){
  TYPE_CZECH_current_test_number = '49001';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  error_mess= "a-clarifying-error-message"
  err_call =  "myBadFunction()"
  actual_value = {"the-causal":"error-value"}
  expected_outcome = "expected-world-peace"
  expected_error = `MESSAGE a-clarifying-error-message 
  CHECKER check_assert()
ACTUAL TYPE 'object'
   VALUES {"the-causal":"error-value"}
 EXPECTED expected-world-peace
   ORIGIN myBadFunction()`;
  try {
    type_czech.check_assert(error_mess, err_call, actual_value, expected_outcome);
    was_exception = false;
  } catch (e) {
    the_exception = e
    was_exception = true;
  }
  if (was_exception) {
    const error_not_match_exception = errorNotMatchException(expected_error, the_exception);
    if (error_not_match_exception) {
      console.log(TYPE_CZECH_current_test_number, 'FAIL EXPECTED', expected_error, ' BUT GOT', the_exception);
      if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    } else {
        // expected route
    }
  } else {
    console.log(TYPE_CZECH_current_test_number, 'FAIL EXPECTED', expected_error);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}





function signature_check_assert_49002(){
  TYPE_CZECH_current_test_number = '49002';
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS', 'HIDE-INIT-MESSAGE');
  error_mess=type_czech.checkParam_typeEither(false,['number','string'])
  err_call = 'thirdParty call'
  actual_value = false
  expected_outcome = "blank string as no error"
expected_error = `
MESSAGE TE@226 - The value 'false', which is a 'boolean', is not a 'number', TE@226 - The value 'false', which is a 'boolean', is not a 'string' 
		         CHECKER check_assert()
		     ACTUAL TYPE 'boolean'
		          VALUES false
		        EXPECTED blank string as no error
		          ORIGIN thirdParty call
`


try {
    type_czech.check_assert(error_mess, err_call, actual_value, expected_outcome);
    was_exception = false;
  } catch (e) {
    the_exception = e
    was_exception = true;
  }
  if (was_exception) {
    const error_not_match_exception = errorNotMatchException(expected_error, the_exception);
    if (error_not_match_exception) {
      console.log(TYPE_CZECH_current_test_number, 'FAIL EXPECTED', expected_error, ' BUT GOT', the_exception);
      if (typeof tested_signatures !== 'undefined') failed_signatures ++;
    } else {
        // expected route
    }
  } else {
    console.log(TYPE_CZECH_current_test_number, 'FAIL EXPECTED', expected_error);
    if (typeof tested_signatures !== 'undefined') failed_signatures ++;
  }
  if (typeof tested_signatures !== 'undefined') tested_signatures ++;
}

