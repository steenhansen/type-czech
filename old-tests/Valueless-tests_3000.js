/* eslint-disable */

passed_empty = 0;
failed_empty = 0;

EmptyCheck_3001(3001);
EmptyCheck_3002(3002);
EmptyCheck_3003(3003);
EmptyCheck_3004(3004);
EmptyCheck_3005(3005);
EmptyCheck_3006(3006);
EmptyCheck_3007(3007);
EmptyCheck_3008(3008);
EmptyCheck_3009(3009);

EmptyCheck_3010(3010);
EmptyCheck_3011(3011);
EmptyCheck_3012(3012);
EmptyCheck_3013(3013);
EmptyCheck_3014(3014);
EmptyCheck_3015(3015);
EmptyCheck_3016(3016);
EmptyCheck_3017(3017);
EmptyCheck_3018(3018);
EmptyCheck_3019(3019);

EmptyCheck_3020(3020);
EmptyCheck_3021(3021);
EmptyCheck_3022(3022);
EmptyCheck_3023(3023);
EmptyCheck_3024(3024);
EmptyCheck_3025(3025);
EmptyCheck_3026(3026);
EmptyCheck_3027(3027);
EmptyCheck_3028(3028);
EmptyCheck_3029(3029);

EmptyCheck_3030(3030);
EmptyCheck_3031(3031);
EmptyCheck_3032(3032);
EmptyCheck_3033(3033);
EmptyCheck_3034(3034);
EmptyCheck_3035(3035);
EmptyCheck_3036(3036);
EmptyCheck_3037(3037);
EmptyCheck_3038(3038);
EmptyCheck_3039(3039);

EmptyCheck_3040(3040);
EmptyCheck_3041(3041);
EmptyCheck_3042(3042);
EmptyCheck_3043(3043);
EmptyCheck_3044(3044);
EmptyCheck_3045(3045);
EmptyCheck_3046(3046);
EmptyCheck_3047(3047);
EmptyCheck_3048(3048);
EmptyCheck_3049(3049);

EmptyCheck_3050(3050);
EmptyCheck_3051(3051);

total_fails += failed_empty;
console.log('empty failed tests', failed_empty)

total_checks += passed_empty;
console.log('empty passed tests', passed_empty)

function EmptyCheck_3001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  "gasoline";
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = "";
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valueless(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'String' must not be empty for the value ''`,
  `'EMPTY-ERROR'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  17;
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  NaN;
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'Number' must not be empty for the value 'NaN'`,
  `'EMPTY-ERROR'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  18;
  const valid_shape =  "EMPTY-OK";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  18;
  const valid_shape =  "MT-WRONG-b";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@11 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'MT-WRONG-b'`,
  `'MT-WRONG-b'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  10;
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  "gasoline";
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3009(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  "";
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'String' must not be empty for the value ''`,
  `'EMPTY-ERROR'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3010(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  17;
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3011(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  0;
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3012(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  18;
  const valid_shape = ["EMPTY-OK"];            // mirrors real world calling
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valueless(arguments, expected_emptys)`,
  `TC@49 - Comparing actual 'Number' parameter, with a value of '18', in relation to the expected shape of ["EMPTY-OK"]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Number's.`,
  `'['EMPTY-OK']'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3013(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  18;
  const valid_shape = "MT-WRONG-c";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@11 - Must 'EMPTY-OK' or 'EMPTY-ERROR' not 'MT-WRONG-c'`,
  `'MT-WRONG-c'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3014(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:"a-string"};
  const valid_shape =  {str:"EMPTY-ERROR"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3015(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =   {str:""};
  const valid_shape =   {str:"EMPTY-ERROR"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@08 - 'str' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.`,
  `{'str':'EMPTY-ERROR'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3016(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {numx:17};
  const valid_shape =  {numx:"EMPTY-ERROR"}; 
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = '';
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}


function EmptyCheck_3017(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {numx:0};
  const valid_shape =  {numx:"EMPTY-ERROR"}; 
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = '';
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3018(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {numx:NaN};
  const valid_shape =  {numx:"EMPTY-ERROR"}; 
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@08 - 'numx' is a 'Number' which is reputed to be 'EMPTY-ERROR' but has a value of '-NaN-'.`,
  `{'numx':'EMPTY-ERROR'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3019(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {num_y:18};
  const valid_shape =  {num_y:"EMPTY-OK"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = '';
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3020(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {num_q: 18};
  const valid_shape =  {num_q:"MT-WRONG-d"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@10 - bad invalid key 'MT-WRONG-d', must be either EMPTY-OK -ER -IG`,
  `{'num_q':'MT-WRONG-d'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3021(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {num_JJ:18};
  const valid_shape =  {num_y:"EMPTY-OK"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@27 - Extra key in checked object - (num_JJ:'18')TC@46 -  The key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object`,
  `{'num_y':'EMPTY-OK'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3022(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:["gasoline"]};
  const valid_shape =  {str:["EMPTY-ERROR"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3023(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:[""]};
  const valid_shape =  {str:["EMPTY-ERROR"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@30 - INDEX '0' is erroneously empty :`,
  `{'str':['EMPTY-ERROR']}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3024(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:[17]};
  const valid_shape =  {str:["EMPTY-ERROR"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3025(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:[0]};
  const valid_shape =  {str:["EMPTY-ERROR"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3026(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:[NaN]};
  const valid_shape =  {str:["EMPTY-ERROR"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@30 - INDEX '0' is erroneously empty :`,
  `{'str':['EMPTY-ERROR']}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3027(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =   {str:[18]};
  const valid_shape =  {str:["EMPTY-OK"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3028(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =   {str:[18]};
  const valid_shape =  {str:["MT-WRONG-e"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@32 - INDEX '0' is incorrect  type, 'MT-WRONG-e', only [EM-ER, EMPTY-ERROR, EMPTY-OK, EM-OK, EMPTY-IGNORE, EM-IG] allowed  : [18]`,
  `{'str':['MT-WRONG-e']}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3029(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:"a-string"};
  const valid_shape =  {str:"EMPTY-ERROR"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3030(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {str:""};
  const valid_shape =   {str:"EMPTY-ERROR"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@08 - 'str' is a 'String' which is reputed to be 'EMPTY-ERROR' but has a value of ''.`,
  `{'str':'EMPTY-ERROR'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3031(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {numx:17};
  const valid_shape =  {numx:"EMPTY-ERROR"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3032(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {numx:0};
  const valid_shape =  {numx:"EMPTY-ERROR"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3033(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {num_y:18};
  const valid_shape =  {num_y:"EMPTY-OK"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3034(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {num_q: 18};
  const valid_shape =  {num_q:"MT-WRONG-a"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@10 - bad invalid key 'MT-WRONG-a', must be either EMPTY-OK -ER -IG`,
  `{'num_q':'MT-WRONG-a'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3035(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  {num_JJ:18};
  const valid_shape =  {num_y:"EMPTY-OK"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@27 - Extra key in checked object - (num_JJ:'18')TC@46 -  The key 'num_y', which has a type of 'EMPTY-OK', is missing in the checked object`,
  `{'num_y':'EMPTY-OK'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3036(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  [{num_JJ:18}];
  const valid_shape =  [{num_y:"EMPTY-OK"}];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valueless(arguments, expected_emptys)`,
  `TC@49 - Comparing actual 'Object' parameter, with a value of '[object Object]', in relation to the expected shape of [{"num_y":"EMPTY-OK"}]. They should be the same type. You cannot compare an array with a non-array; both []s, or both 'Object's.`,
  `'[{'num_y':'EMPTY-OK'}]'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3037(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  [{str:"a-string", num:17}, {str:"a-string", num:17}];
  const valid_shape =  [{str:"EMPTY-ERROR", num:"EMPTY-OK"}, {str:"EMPTY-ERROR", num:"EMPTY-OK"}];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3038(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [["a-string", 17],          ["a-string", 17]];
  const valid_shape =  [["EMPTY-ERROR", "EMPTY-OK"], ["EMPTY-ERROR", "EMPTY-OK"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3039(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {one:{str:"a-string", num:17}, two:{str:"a-string", num:17}};
  const valid_shape =  {one:{str:"EMPTY-ERROR", num:"EMPTY-OK"}, two:{str:"EMPTY-ERROR", num:"EMPTY-OK"}};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3040(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {three:["a-string", 17],          four:["a-string", 17]};
  const valid_shape =  {three:["EMPTY-ERROR", "EMPTY-OK"], four:["EMPTY-ERROR", "EMPTY-OK"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3041(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [["a-string", "b-string", "c-string"], ["a-string", "b-string", "c-string"]];
  const valid_shape =  [["EMPTY-ERROR"], ["EMPTY-OK"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3042(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [["a-string", "b-string", "c-string"], ["x-string",  "y-string", "z-string"]];
  const valid_shape =  [["EMPTY-ERROR"],                         ["EMPTY-OK", "EMPTY-ERROR", "EMPTY-ERROR"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3043(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[1,2,3,4], ['a', 'b', 'c', 'd']]; 
  const valid_shape =  [ ["EMPTY-ERROR"], ["EMPTY-ERROR"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3044(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = ['a', 1]; 
  const valid_shape =  [ "EMPTY-ERROR", "EMPTY-ERROR"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3045(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [1,2,3]; 
  const valid_shape =  [ "EMPTY-ERROR"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3046(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = 'a-string'; 
	const valid_shape =   "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3047(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [];
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valueless(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'Array' must not be empty for the value ''`,
  `'EMPTY-ERROR'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3048(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[]];
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`valueless(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'Array' must not be empty for the value ''`,
  `'EMPTY-ERROR'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3049(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [{}];
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`valueless(arguments, expected_emptys)`,
  `TC@24 - EMPTY-ERROR states 'Object' must not be empty for the value ' { } '`,
  `'EMPTY-ERROR'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3050(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  [['a', 'b', 'c']];
  const valid_shape =  ["EMPTY-ERROR"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}

function EmptyCheck_3051(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  [{a:99}];
  const valid_shape =  "EMPTY-ERROR";
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.valueless(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_empty +=type_czech.failureTally();
  passed_empty ++;
}


