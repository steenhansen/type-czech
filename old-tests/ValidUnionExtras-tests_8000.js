/* eslint-disable */

passed_validUnionExtras = 0;

failed_validUnionExtras = 0;

validUnionExtras_8001(8001);
validUnionExtras_8002(8002);
validUnionExtras_8003(8003);
validUnionExtras_8004(8004);
validUnionExtras_8005(8005);
validUnionExtras_8006(8006);


validUnionExtras_8007(8007);
validUnionExtras_8008(8008);
validUnionExtras_8009(8009);
validUnionExtras_8010(8010);



total_fails += failed_validUnionExtras;
console.log('validUnionExtras failed tests', failed_validUnionExtras)

total_checks += passed_validUnionExtras;
console.log('validUnionExtras passed tests', passed_validUnionExtras)

function validUnionExtras_8001(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {v_1:"hi", v_2:false, v_3:1776};
  const type_a       = {v_1:"String",  v_2:"Boolean"};
  const type_b       = {v_1:"String",  v_2:"Boolean",  v_3:"Number"};
  const valid_shape =  [type_a, type_b];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}


function validUnionExtras_8002(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {v_1:"hi", v_2:false};
  const type_a       = {v_1:"String",  v_2:"Boolean"};
  const type_b       = {v_1:"String",  v_2:"Boolean",  v_3:"Number"};
  const valid_shape =  [type_a, type_b];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validUnionExtras_8003(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = "hello";
  const valid_shape =  ["String", "Number"];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validUnionExtras_8004(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = "hello";
  const valid_shape =  ["String", "Number"]; 
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validUnionExtras_8005(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {v_1:"hi",       v_2:false, v_extra:"more than this"};
  const type_a       = {v_1:"String",  v_2:"Boolean"};
  const type_b       = {v_1:"String",  v_2:"Number"};
  const valid_shape =  [type_a, type_b];  
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validUnionExtras_8006(error_number){
  const error_id = errorLabel(error_number);
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [["hello"]];
  const valid_shape =  [ ["String"], ["Number"] ];
  const before_str = beforeCheck(check_object, valid_shape);
  const actual = type_czech.validUnionExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

/////////////////////////////




function validUnionExtras_8007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = 17;
  const valid_shape =  ["String", "Number"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'Number' parameter, with a value of '17', in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Number's.`,
  `'['String','Number']'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validUnionExtras_8008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = 'aardvark';
  const valid_shape =  ["String", "Number"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'String' parameter, with a value of 'aardvark', in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'String's.`,
  `'['String','Number']'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validUnionExtras_8009(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = false;
  const valid_shape =  ["String", "Number"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'Boolean' parameter, with a value of 'false', in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Boolean's.`,
  `'['String','Number']'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validUnionExtras_8010(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = false;
  const valid_shape =  ["String", "Number"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@49 - Comparing actual 'Boolean' parameter, with a value of 'false', in relation to the expected shape of ["String","Number"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Boolean's.`,
  `'['String','Number']'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}