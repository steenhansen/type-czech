

/* eslint-disable */

passed_valuelessUnion = 0;

failed_valuelessUnion = 0;

valuelessUnion_04001();


total_fails += failed_valuelessUnion;
console.log('validUnionExtras failed tests', failed_valuelessUnion)


total_checks += passed_valuelessUnion;
console.log('validUnionExtras passed tests', passed_valuelessUnion)

function valuelessUnion_04001(){
  TYPE_CZECH_current_test_number = '04001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {x:12,       y:{z:"str2"} } ;
  type_a       = {a:"EMPTY-ERROR",  b:{c:"EMPTY-OK"}};
  type_b       = {x:"EMPTY-OK", y:{z:"EMPTY-ERROR"}};
  valid_shape = [type_a, type_b];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.valuelessUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valuelessUnion !== 'undefined') {
    failed_valuelessUnion +=type_czech.failureTally();
    passed_valuelessUnion ++;
  }
}






