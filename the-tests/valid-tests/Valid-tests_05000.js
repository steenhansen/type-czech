/* eslint-disable */

passed_valid = 0;

failed_valid = 0;

valid_05001();
valid_05002();
valid_05003();
valid_05004();
valid_05005();
valid_05006();
valid_05007();
valid_05008();
valid_05009();

valid_05010();
valid_05011();
valid_05012();
valid_05013();
valid_05014();
valid_05015();
valid_05016();
valid_05017();
valid_05018();

total_fails += failed_valid;
console.log('valid failed tests', failed_valid);

total_checks += passed_valid;
console.log('valid passed tests', passed_valid);

function valid_05001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {cylinders:4, fuel:"gasoline", sneak:"extra"} ;
  valid_shape =  {cylinders:"Number", fuel:"String"};
  TYPE_CZECH_current_test_number = '05001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `TC@39 - Extra key in checked object - (sneak:'extra')`,
  `{'cylinders':'Number','fuel':'String'}`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {};
  valid_shape =  'Object';
  TYPE_CZECH_current_test_number = '05002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = []; 
  valid_shape =  'Array';
  TYPE_CZECH_current_test_number = '05003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [{}];
  valid_shape =  'Array';
  TYPE_CZECH_current_test_number = '05004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `The variable '{}', which is a 'Object', is not a 'Array'`,
  `Array`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [];
  valid_shape =  'Object';
  TYPE_CZECH_current_test_number = '05005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `The variable '[]', which is a 'Array', is not a 'Object'`,
  `Object`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {x:[{y:'z'}]};
  valid_shape = {x:[{y:'String'}]};
  TYPE_CZECH_current_test_number = '05006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {x:[{y:'z'}]};
  valid_shape = {x:[{y:'String'}]};
  TYPE_CZECH_current_test_number = '05007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {cylinders:4, fuel:"gasoline", sneak:"extra"};
  valid_shape = {cylinders:"Number", fuel:"String"};
  TYPE_CZECH_current_test_number = '05008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `TC@39 - Extra key in checked object - (sneak:'extra')`,
  `{'cylinders':'Number','fuel':'String'}`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = null;
  valid_shape =  'null';
  TYPE_CZECH_current_test_number = '05009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a valid type`,
  `null`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = null;
  valid_shape =  'null';
  TYPE_CZECH_current_test_number = '05010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a valid type`,
  `null`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05011(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z: 'null'};
  TYPE_CZECH_current_test_number = '05011';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `TC@40 - The type 'null' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'null'}`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_object) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05012(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = ['a-string'];  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  valid_type =  'String';
  TYPE_CZECH_current_test_number = '05012';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, valid_type);
  actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05013(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = [['a-string']];   // this is the arguments[0]==['a-string'], thus we check ['a-string'] not [[a-string]]
  valid_type =  'String';
  TYPE_CZECH_current_test_number = '05013';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, valid_type);
  actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `The variable '[]', which is a 'Array', is not a 'String'`,
  `String`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05014(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  valid_type =  ['String'];
  TYPE_CZECH_current_test_number = '05014';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, valid_type);
  actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected_array =[`valid(arguments, expected_types)`,
  `TC@49 - Comparing actual 'String' parameter, with a value of "a-string", in relation to the expected shape of ["String"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's. Or same object keys.`,
  `['String']`];
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05015(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  valid_type =  'String';
  TYPE_CZECH_current_test_number = '05015';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, valid_type);
  actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05016(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = [1,2,3]; 
const valid_type =  ['Number'];
TYPE_CZECH_current_test_number = '05016';
error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, valid_type);
  actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05017(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = ['a', 1]; 
  valid_type =  ['String', 'Number'];
  TYPE_CZECH_current_test_number = '05017';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, valid_type);
  actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
    _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

function valid_05018(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_variable = [[1,2,3,4], ['a', 'b', 'c', 'd']]; 
  valid_type =  [ ['Number'], ['String'] ];
  TYPE_CZECH_current_test_number = '05018';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_variable, valid_type);
  actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  expected_array =``;
  expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) {
    console.log("*EXPECTED*", expected_array);
    console.log("**ACTUAL**", actual_array);
   _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  }
  if (typeof failed_valid !== 'undefined') {
    failed_valid +=type_czech.failureTally();
    passed_valid ++;
  }
}

