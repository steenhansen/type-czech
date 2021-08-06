/* eslint-disable */



passed_validUnionExtras = 0;
failed_validUnionExtras = 0;




validExtras_6001(6001);
validExtras_6002(6002);
validExtras_6003(6003);
validExtras_6004(6004);
validExtras_6005(6005);
validExtras_6006(6006);
validExtras_6007(6007);
validExtras_6008(6008);
validExtras_6009(6009);

validExtras_6010(6010);
validExtras_6011(6011);
validExtras_6012(6012);
validExtras_6013(6013);
validExtras_6014(6014);
validExtras_6015(6015);
validExtras_6016(6016);
validExtras_6017(6017);
validExtras_6018(6018);
validExtras_6019(6019);

validExtras_6020(6020);
validExtras_6021(6021);
validExtras_6022(6022);
validExtras_6023(6023);
validExtras_6024(6024);
validExtras_6025(6025);
validExtras_6026(6026);
validExtras_6027(6027);
validExtras_6028(6028);
validExtras_6029(6029);

validExtras_6030(6030);
validExtras_6031(6031);
validExtras_6032(6032);
validExtras_6033(6033);
validExtras_6034(6034);
validExtras_6035(6035);
validExtras_6036(6036);
validExtras_6037(6037);
validExtras_6038(6038);
validExtras_6039(6039);

validExtras_6040(6040);
validExtras_6041(6041);
validExtras_6042(6042);
validExtras_6043(6043);
validExtras_6044(6044);
validExtras_6045(6045);
validExtras_6046(6046);
validExtras_6047(6047);
validExtras_6048(6048);
validExtras_6049(6049);

validExtras_6050(6050);
validExtras_6051(6051);
validExtras_6052(6052);
validExtras_6053(6053);
validExtras_6054(6054);
validExtras_6055(6055);
validExtras_6056(6056);
validExtras_6057(6057);
validExtras_6058(6058);
validExtras_6059(6059);

validExtras_6060(6060);
validExtras_6061(6061);
validExtras_6062(6062);
validExtras_6063(6063);
validExtras_6064(6064);
validExtras_6065(6065);




validExtras_6501_undef_ok(6501);
validExtras_6502_undef_ok(6502);
validExtras_6503_undef_ok(6503);
validExtras_6504_undef_ok(6504);
validExtras_6505_undef_ok(6505);
validExtras_6506_undef_ok(6506);




total_fails += failed_validUnionExtras;
console.log('validExtras failed tests', failed_validUnionExtras)

total_checks += passed_validUnionExtras;
console.log('validExtras passed tests', passed_validUnionExtras)




function validExtras_6001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [123, "abc"];
  const valid_shape = ["Number", "String"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = ['abc', 456];
  const valid_shape = ["String", "date"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@44 -  INDEX '1' is assumed to be a 'date', but is mistakenly a 'Number'`,
  `['String','date']`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [456, 789];
  const valid_shape = ["Number"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6004(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [456, 789];
  const valid_shape = [["Number"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':789`,
  `[['Number']]`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}



function validExtras_6005(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = ['abc', [456, 789]];
  const valid_shape = ["String", ["Number"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6006(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [123, 'abc', [456, 789]];
  const valid_shape = ["Number", "String", ["Number"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6007(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [123, 'abc', [456, "def"]];
  const valid_shape = ["Number", "String", ["Number"]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : def`,
  `['Number','String',['Number']]`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6008(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [123, 'abc', {a:456, b:789}];
  const valid_shape = ["Number", "String", {a:"Number", b:"Number"}];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6009(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [123, 'abc', {a:456, b:'def'}];
  const valid_shape = ["Number", "String", {a:"Number", b:"Number"}];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'b' is indicated to be a 'Number', but is inaccurately a 'String' : def`,
  `['Number','String',{'a':'Number','b':'Number'}]`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6010(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [ "super", "man" ];
  const valid_shape = [ "String", "String", "date" ] ;
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@03 - Index '2' is supposed to be a 'date', but is missing : ['super','man']`,
  `['String','String','date']`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6011(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:"abc"};
  const valid_shape = {a:"Number", b:"String"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}


function validExtras_6012(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:456};
  const valid_shape = {a:"Number", b:"String"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'b' is indicated to be a 'String', but is inaccurately a 'Number' : 456`,
  `{'a':'Number','b':'String'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}


function validExtras_6013(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:'abc', c:[456, 789]};
  const valid_shape = {a:"Number", b:"String", c:["Number"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6014(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:'abc', c:[456, "def"]};
  const valid_shape = {a:"Number", b:"String", c:["Number"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : def`,
  `{'a':'Number','b':'String','c':['Number']}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6015(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:'abc', c:{x:456, y:789}};
  const valid_shape = {a:"Number", b:"String", c:{x:"Number", y:"Number"}};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6016(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:'abc', c:{x:456, y:'def'}};
  const valid_shape = {a:"Number", b:"String", c:{x:"Number", y:"Number"}};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'y' is indicated to be a 'Number', but is inaccurately a 'String' : def`,
  `{'a':'Number','b':'String','c':{'x':'Number','y':'Number'}}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6017(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {};
  const valid_shape = {};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6018(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [];
  const valid_shape = {};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `TC@36 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[]`,
  `{}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6019(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:undefined};
  const valid_shape = {a:"Number"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@41 - Key 'a' was given to be a 'Number' but was instead 'undefined'`,
  `{'a':'Number'}`];;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6020(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:null};
  const valid_shape = {a:"Number"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@42 - Key 'a' was determined to be a 'Number' but was instead 'null'`,
  `{'a':'Number'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6021(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a_number: 17,       a_pair:{a:'a',      b:{z:[1, 2, 3]},  c:5}       };
  const valid_shape =  { a_number: 'Number', a_pair:{a:'String', b:{z:['Number']}, c:'Number'}};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = '';
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6022(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a_number: 17,       a_pair:{a:'a',      b:{z:[1, 2, 3]},  c:'so_rong'}       };
  const valid_shape =  { a_number: 'Number', a_pair:{a:'String', b:{z:['Number']}, c:'Number'}};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'Number', but is inaccurately a 'String' : so_rong`,
  `{'a_number':'Number','a_pair':{'a':'String','b':{'z':['Number']},'c':'Number'}}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6023(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ] };
  const valid_shape =   { a: [ { b:[ {c:'String'} ] } ] };
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6024(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:17      } ] } ] };
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ] };
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Number' : 17`,
  `{'a':[{'b':[{'c':'String'}]}]}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6025(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:42      } ] } ] } ;
  const valid_shape = { a: [ { b:[ {c:'Number'} ] } ] } ;
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6026(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:43      } ] } ] } ;
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ] } ;
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Number' : 43`,
  `{'a':[{'b':[{'c':'String'}]}]}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6027(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [{r:11}, {r:22}, {r:33}];
  const valid_shape =  [{r:"Number"}]  ;
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6028(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[11], [13], [17], [19]];
  const valid_shape =   [["Number"]]  ;
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6029(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = new Date;
  const valid_shape =  'Date';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6030(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = 'a-number';
  const valid_shape =  'Number';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `The variable 'a-number', which is a 'String', is not a 'Number'`,
  `'Number'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6031(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[]];
  const valid_shape =  ['array'];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6032(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[2], [3]];
  const valid_shape =  [[]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}


function validExtras_6033(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[2], [3]];
  const valid_shape =  ['Array'];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6034(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[1,2], [3,4]];
  const valid_shape =  ['Array'];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6035(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [[1,2], [3,4]];
  const valid_shape = [[]];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6036(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =  [];
  const valid_shape = 'Object';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =[`validExtras(arguments, expected_types)`,
  `The variable '[]', which is a 'Array', is not a 'Object'`,
  `'Object'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6037(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {};
  const valid_shape = 'Object';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6038(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {};
  const valid_shape =  'Array';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `The variable '{}', which is a 'Object', is not a 'Array'`,
  `'Array'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6039(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:'abc', c:[456, 789]};
  const valid_shape = {a:"Number", b:'String'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6040(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:'abc', c:[456, 789]};
  const valid_shape = {a:"Number"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6041(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = {a:123, b:'abc', c:[456, 789]};
  const valid_shape = {b:"String"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6042(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object ={a:123, b:'abc', c:[456, 789]};
  const valid_shape = {b:"String", c:["Number"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6043(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object ={a:123, b:'abc', c:[456, 789]};
  const valid_shape = {c:["Number"]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6044(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object ={a:123, b:'abc', c:[456, 789]};
  const valid_shape = {c:["Number"], a:"Number"};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}


function validExtras_6045(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =true;
  const valid_shape = 'Boolean';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6046(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =false;
  const valid_shape = 'Boolean';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6047(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object ="my-string";
  const valid_shape = 'Boolean';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = [`validExtras(arguments, expected_types)`,
  `The variable 'my-string', which is a 'String', is not a 'Boolean'`,
  `'Boolean'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6048(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object =new Date;
  const valid_shape =  'Date';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6049(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );  const check_object = 123
  const valid_shape =  'Number';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6050(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = 456
  const valid_shape =  'String';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `The variable '456', which is a 'Number', is not a 'String'`,
  `'String'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}


function validExtras_6051(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = null;
  const valid_shape =  'null';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a valid type`,
  `'null'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6052(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = undefined;
  const valid_shape =  'undefined';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@17 - The type 'undefined' is not a valid type`,
  `'undefined'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6053(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'null'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'null' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'null'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6054(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6055(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6056(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
  const valid_shape =      { a: [ { b:[ {c:'String'      } ] } ]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6057(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [ ["Harley-Davidson", "Electra-Glide"],
                          {"cyl":2,"stroke":4}, 
                           [2000, "red"],
                          {"percent":75,"max":500} ];
 const valid_shape =  [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"} ];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6058(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [ ["Harley-Davidson", "Electra-Glide"],
   {"cyl":2,"stroke":4}, 
     [2000, "red"],
    {"percent":75,"max":500}, 'bike'];
  const valid_shape =  [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"}, "S" ];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6059(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [ {x: 5},  {y: 1} ];
  const valid_shape =  [ {x:"N"}, {y:"N"} ];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6060(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = [{"manu":"Harley-Davidson","model":"Electra-Glide"},{"cyl":2,"stroke":4},{"year":2000,"color":"red"},{"percent":75,"max":500},"bike"];
  const valid_shape =  [  {manu:"S", model:"S"},  {cyl:"N", stroke:"N"},  {year:"N", color:"S"},  {percent:"N", max:"N"}, "S"];
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6061(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ]};
  const valid_shape =  { a: [ { b:[ {c:'S'     } ] } ]}; 
   const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6062(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  const valid_shape =  { a: [ { b:[ {c:'S'} ] } ], z:'N'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@42 - Key 'z' was determined to be a 'Number' but was instead 'null'`,
  `{'a':[{'b':[{'c':'S'}]}],'z':'N'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6063(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
  const valid_shape =  { a: [ { b:[ {c:'S'} ] } ], z:'N'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@41 - Key 'z' was given to be a 'Number' but was instead 'undefined'`,
  `{'a':[{'b':[{'c':'S'}]}],'z':'N'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6064(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  const valid_shape =  { a: [ { b:[ {c:'S'} ] } ], z:'N'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@42 - Key 'z' was determined to be a 'Number' but was instead 'null'`,
  `{'a':[{'b':[{'c':'S'}]}],'z':'N'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6065(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
  const valid_shape =      { a: [ { b:[ {c:'S'      } ] } ]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}






function validExtras_6501_undef_ok(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = null
  const valid_shape =  'String';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `The variable 'null', which is a 'null', is not a 'String'`,
  `'String'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6502_undef_ok(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = undefined
  const valid_shape =  'undefined';
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@17 - The type 'undefined' is not a valid type`,
  `'undefined'`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6503_undef_ok(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'null'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'null' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'null'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6504_undef_ok(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6505_undef_ok(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  const valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};   
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}

function validExtras_6506_undef_ok(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  const check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
	  	const valid_shape =      { a: [ { b:[ {c:'String'      } ] } ]};
  const error_id = errorLabel(error_number);
  const before_str = beforeCheck(check_object, valid_shape);
  const actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  const expected_array = ``;
  const expect_and_actual = actualAndExpected(error_id, actual_array, expected_array);
  if (expect_and_actual) _throw( errorMessage(error_id, expect_and_actual, check_object) );
  failed_validUnionExtras +=type_czech.failureTally();
  passed_validUnionExtras ++;
}
