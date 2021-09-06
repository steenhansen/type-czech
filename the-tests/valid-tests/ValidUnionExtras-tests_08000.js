/* eslint-disable */

tested_validUnionExtras = 0;

failed_validUnionExtras = 0;

validUnionExtras_08001();
validUnionExtras_08002();
validUnionExtras_08003();
validUnionExtras_08004();
validUnionExtras_08005();
validUnionExtras_08006();


validUnionExtras_08007();
validUnionExtras_08008();
validUnionExtras_08009();
validUnionExtras_08010();



total_fails += failed_validUnionExtras;
console.log('validUnionExtras failed tests', failed_validUnionExtras)

total_checks += tested_validUnionExtras;
console.log('validUnionExtras passed tests', tested_validUnionExtras)

function validUnionExtras_08001(){
  TYPE_CZECH_current_test_number = '08001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {v_1:"hi", v_2:false, v_3:1776};
  type_a       = {v_1:"String",  v_2:"Boolean"};
  type_b       = {v_1:"String",  v_2:"Boolean",  v_3:"Number"};
  valid_shape =  [type_a, type_b];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}


function validUnionExtras_08002(){
  TYPE_CZECH_current_test_number = '08002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {v_1:"hi", v_2:false};
  type_a       = {v_1:"String",  v_2:"Boolean"};
  type_b       = {v_1:"String",  v_2:"Boolean",  v_3:"Number"};
  valid_shape =  [type_a, type_b];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

function validUnionExtras_08003(){
  TYPE_CZECH_current_test_number = '08003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = "hello";
  valid_shape =  ["String", "Number"];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

function validUnionExtras_08004(){
  TYPE_CZECH_current_test_number = '08004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = "hello";
  valid_shape =  ["String", "Number"]; 
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

function validUnionExtras_08005(){
  TYPE_CZECH_current_test_number = '08005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {v_1:"hi",       v_2:false, v_extra:"more than this"};
  type_a       = {v_1:"String",  v_2:"Boolean"};
  type_b       = {v_1:"String",  v_2:"Number"};
  valid_shape =  [type_a, type_b];  
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

function validUnionExtras_08006(){
  TYPE_CZECH_current_test_number = '08006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [["hello"]];
  valid_shape =  [ ["String"], ["Number"] ];
  before_str = beforeCheck(check_object, valid_shape);
  actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
  expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

/////////////////////////////




function validUnionExtras_08007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = 17;
  valid_shape =  ["String", "Number"];
  TYPE_CZECH_current_test_number = '08007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'Number' parameter, with a value of "17", in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Number's. Or same object keys.`,
  `['String','Number']`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

function validUnionExtras_08008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = 'aardvark';
  valid_shape =  ["String", "Number"];
  TYPE_CZECH_current_test_number = '08008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'String' parameter, with a value of "aardvark", in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's. Or same object keys.`,
  `['String','Number']`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

function validUnionExtras_08009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = false;
  valid_shape =  ["String", "Number"];
  TYPE_CZECH_current_test_number = '08009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'Boolean' parameter, with a value of "false", in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Boolean's. Or same object keys.`,
  `['String','Number']`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}

function validUnionExtras_08010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = false;
  valid_shape =  ["String", "Number"];
  TYPE_CZECH_current_test_number = '08010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'Boolean' parameter, with a value of "false", in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Boolean's. Or same object keys.`,
  `['String','Number']`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
 
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_validUnionExtras !== 'undefined') {
    failed_validUnionExtras +=type_czech.failureTally();
    tested_validUnionExtras ++;
  }
}