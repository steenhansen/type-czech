

/* eslint-disable */

passed_validUnion = 0;
failed_validUnion = 0;

validUnion_07001();
validUnion_07002();
validUnion_07003();
validUnion_07004();
validUnion_07005();
validUnion_07006();
validUnion_07007();

total_fails += failed_validUnion;
console.log('validUnionExtras failed tests', failed_validUnion)

total_checks += passed_validUnion;
console.log('validUnionExtras passed tests', passed_validUnion)

function validUnion_07001(){
  TYPE_CZECH_current_test_number = '07001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {};
  valid_shape =  {a:1};
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = `TC@15 - TypeCzech.validUnion() called with a second parameter as a non-array shape of {"a":1}`;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnion !== 'undefined') {
    failed_validUnion +=type_czech.failureTally();
    passed_validUnion ++;
  }
}

function validUnion_07002(){
  TYPE_CZECH_current_test_number = '07002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = 177;
  valid_shape =  ["String"];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validUnion(arguments, expected_types)`,
`The variable '177', which is a 'Number', is not a 'String'`,
`['String']`];
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnion !== 'undefined') {
    failed_validUnion +=type_czech.failureTally();
    passed_validUnion ++;
  }
}

function validUnion_07003(){
  TYPE_CZECH_current_test_number = '07003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:1,         b:{c:2} } ;
  type_a       = {a:"Number",  b:{c:"Number"}};
  type_b       = {a:"Number",  b:{c:"String"}};
  valid_shape = [type_a, type_b];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnion !== 'undefined') {
    failed_validUnion +=type_czech.failureTally();
    passed_validUnion ++;
  }
}

function validUnion_07004(){
  TYPE_CZECH_current_test_number = '07004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:1,         b:{c:'d'} } ;
  type_a       = {a:"Number",  b:{c:"Number"}};
  type_b       = {a:"Number",  b:{c:"String"}};
  valid_shape = [type_a, type_b];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnion !== 'undefined') {
    failed_validUnion +=type_czech.failureTally();
    passed_validUnion ++;
  }
}

function validUnion_07005(){
  TYPE_CZECH_current_test_number = '07005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:1,         b:{c:false} } ;
  type_a       = {a:"Number",  b:{c:"Number"}};
  type_b       = {a:"Number",  b:{c:"String"}};
  valid_shape = [type_a, type_b];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validUnion(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Boolean' : false`,
  `[{'a':'Number','b':{'c':'Number'}},{'a':'Number','b':{'c':'String'}}]`];
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnion !== 'undefined') {
    failed_validUnion +=type_czech.failureTally();
    passed_validUnion ++;
  }
}


function validUnion_07006(){
  TYPE_CZECH_current_test_number = '07006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {v_1:"hi",      v_2:false,     v_extra:"more than this"};
  type_a       = {v_1:"String",  v_2:"Boolean"};
  type_b       = {v_1:"String",  v_2:"Number"};
  valid_shape = [type_a, type_b];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validUnion(arguments, expected_types)`,
  `TC@43 - Property 'v_2' is indicated to be a 'Number', but is inaccurately a 'Boolean' : falseTC@39 - Extra key in checked object - (v_extra:'more than this')`,
  `[{'v_1':'String','v_2':'Boolean'},{'v_1':'String','v_2':'Number'}]`];
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnion !== 'undefined') {
    failed_validUnion +=type_czech.failureTally();
    passed_validUnion ++;
  }
}


function validUnion_07007(){
  TYPE_CZECH_current_test_number = '07007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {inner_1:[{g:new Date}]};
  type_a       = {inner_1:[{g:"Number"}]};
  type_b       = {inner_1:[{g:"String"}]};
  type_c       = {inner_1:[{g:"Date"}]}; 
  valid_shape = [type_a, type_b, type_c];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnion !== 'undefined') {
    failed_validUnion +=type_czech.failureTally();
    passed_validUnion ++;
  }
}