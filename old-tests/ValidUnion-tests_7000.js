

/* eslint-disable */

passed_validUnion = 0;
failed_validUnion = 0;

validUnion_7001(7001);
validUnion_7002(7002);
validUnion_7003(7003);
validUnion_7004(7004);
validUnion_7005(7005);
validUnion_7006(7006);
validUnion_7007(7007);

total_fails += failed_validUnion;
console.log('validUnionExtras failed tests', failed_validUnion)

total_checks += passed_validUnion;
console.log('validUnionExtras passed tests', passed_validUnion)

function validUnion_7001(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {};
  const valid_shape =  {a:1};
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = `TC@15 - TypeCzech.validUnion() called with a second parameter as a non-array shape of {"a":1}`;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnion +=type_czech.failureTally();
  passed_validUnion ++;
}

function validUnion_7002(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = 177;
  const valid_shape =  ["String"];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validUnion(arguments, expected_types)`,
`The variable '177', which is a 'Number', is not a 'String'`,
`['String']`];
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnion +=type_czech.failureTally();
  passed_validUnion ++;
}

function validUnion_7003(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:1,         b:{c:2} } ;
  const type_a       = {a:"Number",  b:{c:"Number"}};
  const type_b       = {a:"Number",  b:{c:"String"}};
  const valid_shape = [type_a, type_b];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnion +=type_czech.failureTally();
  passed_validUnion ++;
}

function validUnion_7004(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:1,         b:{c:'d'} } ;
  const type_a       = {a:"Number",  b:{c:"Number"}};
  const type_b       = {a:"Number",  b:{c:"String"}};
  const valid_shape = [type_a, type_b];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnion +=type_czech.failureTally();
  passed_validUnion ++;
}

function validUnion_7005(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:1,         b:{c:false} } ;
  const type_a       = {a:"Number",  b:{c:"Number"}};
  const type_b       = {a:"Number",  b:{c:"String"}};
  const valid_shape = [type_a, type_b];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validUnion(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Boolean' : false`,
  `[{'a':'Number','b':{'c':'Number'}},{'a':'Number','b':{'c':'String'}}]`];
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnion +=type_czech.failureTally();
  passed_validUnion ++;
}


function validUnion_7006(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {v_1:"hi",      v_2:false,     v_extra:"more than this"};
  const type_a       = {v_1:"String",  v_2:"Boolean"};
  const type_b       = {v_1:"String",  v_2:"Number"};
  const valid_shape = [type_a, type_b];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validUnion(arguments, expected_types)`,
  `TC@43 - Property 'v_2' is indicated to be a 'Number', but is inaccurately a 'Boolean' : falseTC@39 - Extra key in checked object - (v_extra:'more than this')`,
  `[{'v_1':'String','v_2':'Boolean'},{'v_1':'String','v_2':'Number'}]`];
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnion +=type_czech.failureTally();
  passed_validUnion ++;
}


function validUnion_7007(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {inner_1:[{g:new Date}]};
  const type_a       = {inner_1:[{g:"Number"}]};
  const type_b       = {inner_1:[{g:"String"}]};
  const type_c       = {inner_1:[{g:"Date"}]}; 
  const valid_shape = [type_a, type_b, type_c];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnion(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnion +=type_czech.failureTally();
  passed_validUnion ++;
}