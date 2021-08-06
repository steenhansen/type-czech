

/* eslint-disable */

passed_valuelessUnion = 0;

failed_valuelessUnion = 0;

valuelessUnion_4001(4001);


total_fails += failed_valuelessUnion;
console.log('validUnionExtras failed tests', failed_valuelessUnion)


total_checks += passed_valuelessUnion;
console.log('validUnionExtras passed tests', passed_valuelessUnion)

function valuelessUnion_4001(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {x:12,       y:{z:"str2"} } ;
  const type_a       = {a:"EMPTY-ERROR",  b:{c:"EMPTY-OK"}};
  const type_b       = {x:"EMPTY-OK", y:{z:"EMPTY-ERROR"}};
  const valid_shape = [type_a, type_b];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.valuelessUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valuelessUnion +=type_czech.failureTally();
  passed_valuelessUnion ++;
}






