/* eslint-disable */

passed_valid = 0;

failed_valid = 0;

valid_5001(5001);
valid_5002(5002);
valid_5003(5003);
valid_5004(5004);
valid_5005(5005);
valid_5006(5006);
valid_5007(5007);
valid_5008(5008);
valid_5009(5009);

valid_5010(5010);
valid_5011(5011);
valid_5012(5012);
valid_5013(5013);
valid_5014(5014);
valid_5015(5015);
valid_5016(5016);
valid_5017(5017);
valid_5018(5018);

total_fails += failed_valid;
console.log('valid failed tests', failed_valid);

total_checks += passed_valid;
console.log('valid passed tests', passed_valid);

function valid_5001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {cylinders:4, fuel:"gasoline", sneak:"extra"} ;
  const valid_shape =  {cylinders:"Number", fuel:"String"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `TC@39 - Extra key in checked object - (sneak:'extra')`,
  `{'cylinders':'Number','fuel':'String'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {};
  const valid_shape =  'Object';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = []; 
  const valid_shape =  'Array';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [{}];
  const valid_shape =  'Array';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `The variable '{}', which is a 'Object', is not a 'Array'`,
  `'Array'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally(); 
  passed_valid ++;
}

function valid_5005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [];
  const valid_shape =  'Object';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `The variable '[]', which is a 'Array', is not a 'Object'`,
  `'Object'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {x:[{y:'z'}]};
  const valid_shape = {x:[{y:'String'}]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {x:[{y:'z'}]};
  const valid_shape = {x:[{y:'String'}]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {cylinders:4, fuel:"gasoline", sneak:"extra"};
  const valid_shape = {cylinders:"Number", fuel:"String"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `TC@39 - Extra key in checked object - (sneak:'extra')`,
  `{'cylinders':'Number','fuel':'String'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5009(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = null;
  const valid_shape =  'null';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a valid type`,
  `'null'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5010(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = null;
  const valid_shape =  'null';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a valid type`,
  `'null'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5011(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z: 'null'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valid(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `TC@40 - The type 'null' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'null'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5012(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_variable = ['a-string'];  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  const valid_type =  'String';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_variable, valid_type);
  const actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5013(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_variable = [['a-string']];   // this is the arguments[0]==['a-string'], thus we check ['a-string'] not [[a-string]]
  const valid_type =  'String';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_variable, valid_type);
  const actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `The variable '[]', which is a 'Array', is not a 'String'`,
  `'String'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5014(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  const valid_type =  ['String'];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_variable, valid_type);
  const actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected_array =[`valid(arguments, expected_types)`,
  `TC@49 - Comparing actual 'String' parameter, with a value of 'a-string', in relation to the expected shape of ["String"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's.`,
  `'['String']'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5015(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_variable = 'a-string';  // this is the arg[0]=='a-string' and it modifies it to the correct thing
  const valid_type =  'String';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_variable, valid_type);
  const actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5016(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_variable = [1,2,3]; 
const valid_type =  ['Number'];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_variable, valid_type);
  const actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5017(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_variable = ['a', 1]; 
  const valid_type =  ['String', 'Number'];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_variable, valid_type);
  const actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

function valid_5018(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_variable = [[1,2,3,4], ['a', 'b', 'c', 'd']]; 
  const valid_type =  [ ['Number'], ['String'] ];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_variable, valid_type);
  const actual_array = type_czech.valid(check_variable, valid_type);
  afterCheck(check_variable, valid_type, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_variable) );
  failed_valid +=type_czech.failureTally();
  passed_valid ++;
}

