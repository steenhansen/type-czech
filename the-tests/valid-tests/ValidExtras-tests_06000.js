/* eslint-disable */



tested_validUnionExtras = 0;
failed_validUnionExtras = 0;




validExtras_06001();
validExtras_06002();
validExtras_06003();
validExtras_06004();
validExtras_06005();
validExtras_06006();
validExtras_06007();
validExtras_06008();
validExtras_06009();

validExtras_06010();
validExtras_06011();
validExtras_06012();
validExtras_06013();
validExtras_06014();
validExtras_06015();
validExtras_06016();
validExtras_06017();
validExtras_06018();
validExtras_06019();

validExtras_06020();
validExtras_06021();
validExtras_06022();
validExtras_06023();
validExtras_06024();
validExtras_06025();
validExtras_06026();
validExtras_06027();
validExtras_06028();
validExtras_06029();

validExtras_06030();
validExtras_06031();
validExtras_06032();
validExtras_06033();
validExtras_06034();
validExtras_06035();
validExtras_06036();
validExtras_06037();
validExtras_06038();
validExtras_06039();

validExtras_06040();
validExtras_06041();
validExtras_06042();
validExtras_06043();
validExtras_06044();
validExtras_06045();
validExtras_06046();
validExtras_06047();
validExtras_06048();
validExtras_06049();

validExtras_06050();
validExtras_06051();
validExtras_06052();
validExtras_06053();
validExtras_06054();
validExtras_06055();
validExtras_06056();
validExtras_06057();
validExtras_06058();
validExtras_06059();

validExtras_06060();
validExtras_06061();
validExtras_06062();
validExtras_06063();
validExtras_06064();
validExtras_06065();




validExtras_06501_undef_ok();
validExtras_06502_undef_ok();
validExtras_06503_undef_ok();
validExtras_06504_undef_ok();
validExtras_06505_undef_ok();
validExtras_06506_undef_ok();




total_fails += failed_validUnionExtras;
console.log('validExtras failed tests', failed_validUnionExtras)

total_checks += tested_validUnionExtras;
console.log('validExtras passed tests', tested_validUnionExtras)




function validExtras_06001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, "abc"];
  valid_shape = ["Number", "String"];
  TYPE_CZECH_current_test_number = '06001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = ['abc', 456];
  valid_shape = ["String", "date"];
  TYPE_CZECH_current_test_number = '06002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@33 - The type 'date' is not a valid type, but it looks just like 'Date'`,
  `['String','date']`];
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

function validExtras_06003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [456, 789];
  valid_shape = ["Number"];
  TYPE_CZECH_current_test_number = '06003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06004(){

  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [456, 789];
  valid_shape = [["Number"]];
  TYPE_CZECH_current_test_number = '06004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@36 - Parameter is meant to be 'Array' but is of the wrong type of 'Number':456`,
  `[['Number']]`];
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



function validExtras_06005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = ['abc', [456, 789]];
  valid_shape = ["String", ["Number"]];
  TYPE_CZECH_current_test_number = '06005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', [456, 789]];
  valid_shape = ["Number", "String", ["Number"]];
  TYPE_CZECH_current_test_number = '06006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', [456, "def"]];
  valid_shape = ["Number", "String", ["Number"]];
  TYPE_CZECH_current_test_number = '06007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : def`,
  `['Number','String',['Number']]`];
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

function validExtras_06008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', {a:456, b:789}];
  valid_shape = ["Number", "String", {a:"Number", b:"Number"}];
  TYPE_CZECH_current_test_number = '06008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  ``;
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

function validExtras_06009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [123, 'abc', {a:456, b:'def'}];
  valid_shape = ["Number", "String", {a:"Number", b:"Number"}];
  TYPE_CZECH_current_test_number = '06009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'b' is indicated to be a 'Number', but is inaccurately a 'String' : def`,
  `['Number','String',{'a':'Number','b':'Number'}]`];
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

function validExtras_06010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ "super", "man" ];
  valid_shape = [ "String", "String", "date" ] ;
  TYPE_CZECH_current_test_number = '06010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@03 - Index '2' is supposed to be a 'date', but is missing : ['super','man']`,
  `['String','String','date']`];
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

function validExtras_06011(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:"abc"};
  valid_shape = {a:"Number", b:"String"};
  TYPE_CZECH_current_test_number = '06011';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
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


function validExtras_06012(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:456};
  valid_shape = {a:"Number", b:"String"};
  TYPE_CZECH_current_test_number = '06012';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'b' is indicated to be a 'String', but is inaccurately a 'Number' : 456`,
  `{'a':'Number','b':'String'}`];
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


function validExtras_06013(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:'abc', c:[456, 789]};
  valid_shape = {a:"Number", b:"String", c:["Number"]};
  TYPE_CZECH_current_test_number = '06013';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =``;
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

function validExtras_06014(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:'abc', c:[456, "def"]};
  valid_shape = {a:"Number", b:"String", c:["Number"]};
  TYPE_CZECH_current_test_number = '06014';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@45 - INDEX '1' is asserted to be a 'Number', but is fallaciously a 'String' : def`,
  `{'a':'Number','b':'String','c':['Number']}`];
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

function validExtras_06015(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:'abc', c:{x:456, y:789}};
  valid_shape = {a:"Number", b:"String", c:{x:"Number", y:"Number"}};
  TYPE_CZECH_current_test_number = '06015';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06016(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:'abc', c:{x:456, y:'def'}};
  valid_shape = {a:"Number", b:"String", c:{x:"Number", y:"Number"}};
  TYPE_CZECH_current_test_number = '06016';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'y' is indicated to be a 'Number', but is inaccurately a 'String' : def`,
  `{'a':'Number','b':'String','c':{'x':'Number','y':'Number'}}`];
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

function validExtras_06017(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {};
  valid_shape = {};
  TYPE_CZECH_current_test_number = '06017';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06018(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [];
  valid_shape = {};
  TYPE_CZECH_current_test_number = '06018';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `TC@36 - Parameter is meant to be 'Object' but is of the wrong type of 'Array':[]`,
  `{}`];
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

function validExtras_06019(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:undefined};
  valid_shape = {a:"Number"};
  TYPE_CZECH_current_test_number = '06019';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@41 - Key 'a' was given to be a 'Number' but was instead 'undefined'`,
  `{'a':'Number'}`];;
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

function validExtras_06020(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:null};
  valid_shape = {a:"Number"};
  TYPE_CZECH_current_test_number = '06020';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@42 - Key 'a' was determined to be a 'Number' but was instead 'null'`,
  `{'a':'Number'}`];
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

function validExtras_06021(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a_number: 17,       a_pair:{a:'a',      b:{z:[1, 2, 3]},  c:5}       };
  valid_shape =  { a_number: 'Number', a_pair:{a:'String', b:{z:['Number']}, c:'Number'}};
  TYPE_CZECH_current_test_number = '06021';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = '';
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

function validExtras_06022(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a_number: 17,       a_pair:{a:'a',      b:{z:[1, 2, 3]},  c:'so_rong'}       };
  valid_shape =  { a_number: 'Number', a_pair:{a:'String', b:{z:['Number']}, c:'Number'}};
  TYPE_CZECH_current_test_number = '06022';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'Number', but is inaccurately a 'String' : so_rong`,
  `{'a_number':'Number','a_pair':{'a':'String','b':{'z':['Number']},'c':'Number'}}`];
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

function validExtras_06023(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ] };
  valid_shape =   { a: [ { b:[ {c:'String'} ] } ] };
  TYPE_CZECH_current_test_number = '06023';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06024(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:17      } ] } ] };
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ] };
  TYPE_CZECH_current_test_number = '06024';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Number' : 17`,
  `{'a':[{'b':[{'c':'String'}]}]}`];
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

function validExtras_06025(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:42      } ] } ] } ;
  valid_shape = { a: [ { b:[ {c:'Number'} ] } ] } ;
  TYPE_CZECH_current_test_number = '06025';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06026(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:43      } ] } ] } ;
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ] } ;
  TYPE_CZECH_current_test_number = '06026';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@43 - Property 'c' is indicated to be a 'String', but is inaccurately a 'Number' : 43`,
  `{'a':[{'b':[{'c':'String'}]}]}`];
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

function validExtras_06027(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [{r:11}, {r:22}, {r:33}];
  valid_shape =  [{r:"Number"}]  ;
  TYPE_CZECH_current_test_number = '06027';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06028(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[11], [13], [17], [19]];
  valid_shape =   [["Number"]]  ;
  TYPE_CZECH_current_test_number = '06028';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06029(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = new Date;
  valid_shape =  'Date';
  TYPE_CZECH_current_test_number = '06029';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06030(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = 'a-number';
  valid_shape =  'Number';
  TYPE_CZECH_current_test_number = '06030';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `The variable 'a-number', which is a 'String', is not a 'Number'`,
  `Number`];
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

function validExtras_06031(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[]];
  valid_shape =  ['array'];
  TYPE_CZECH_current_test_number = '06031';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06032(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[2], [3]];
  valid_shape =  [[]];
  TYPE_CZECH_current_test_number = '06032';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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


function validExtras_06033(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[2], [3]];
  valid_shape =  ['Array'];
  TYPE_CZECH_current_test_number = '06033';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06034(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[1,2], [3,4]];
  valid_shape =  ['Array'];
  TYPE_CZECH_current_test_number = '06034';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06035(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [[1,2], [3,4]];
  valid_shape = [[]];
  TYPE_CZECH_current_test_number = '06035';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06036(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =  [];
  valid_shape = 'Object';
  TYPE_CZECH_current_test_number = '06036';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =[`validExtras(arguments, expected_types)`,
  `The variable '[]', which is a 'Array', is not a 'Object'`,
  `Object`];
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

function validExtras_06037(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {};
  valid_shape = 'Object';
  TYPE_CZECH_current_test_number = '06037';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06038(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {};
  valid_shape =  'Array';
  TYPE_CZECH_current_test_number = '06038';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `The variable '{}', which is a 'Object', is not a 'Array'`,
  `Array`];
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

function validExtras_06039(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:'abc', c:[456, 789]};
  valid_shape = {a:"Number", b:'String'};
  TYPE_CZECH_current_test_number = '06039';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06040(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:'abc', c:[456, 789]};
  valid_shape = {a:"Number"};
  TYPE_CZECH_current_test_number = '06040';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06041(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = {a:123, b:'abc', c:[456, 789]};
  valid_shape = {b:"String"};
  TYPE_CZECH_current_test_number = '06041';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06042(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object ={a:123, b:'abc', c:[456, 789]};
  valid_shape = {b:"String", c:["Number"]};
  TYPE_CZECH_current_test_number = '06042';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06043(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object ={a:123, b:'abc', c:[456, 789]};
  valid_shape = {c:["Number"]};
  TYPE_CZECH_current_test_number = '06043';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06044(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object ={a:123, b:'abc', c:[456, 789]};
  valid_shape = {c:["Number"], a:"Number"};
  TYPE_CZECH_current_test_number = '06044';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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


function validExtras_06045(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =true;
  valid_shape = 'Boolean';
  TYPE_CZECH_current_test_number = '06045';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06046(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =false;
  valid_shape = 'Boolean';
  TYPE_CZECH_current_test_number = '06046';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06047(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object ="my-string";
  valid_shape = 'Boolean';
  TYPE_CZECH_current_test_number = '06047';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `The variable 'my-string', which is a 'String', is not a 'Boolean'`,
  `Boolean`];
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

function validExtras_06048(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object =new Date;
  valid_shape =  'Date';
  TYPE_CZECH_current_test_number = '06048';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06049(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );  check_object = 123
  valid_shape =  'Number';
  TYPE_CZECH_current_test_number = '06049';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06050(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = 456
  valid_shape =  'String';
  TYPE_CZECH_current_test_number = '06050';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `The variable '456', which is a 'Number', is not a 'String'`,
  `String`];
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


function validExtras_06051(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = null;
  valid_shape =  'null';
  TYPE_CZECH_current_test_number = '06051';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@17 - The type 'null' is not a valid type`,
  `null`];
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

function validExtras_06052(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = undefined;
  valid_shape =  'undefined';
  TYPE_CZECH_current_test_number = '06052';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@17 - The type 'undefined' is not a valid type`,
  `undefined`];
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

function validExtras_06053(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'null'};
  TYPE_CZECH_current_test_number = '06053';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'null' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'null'}`];
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

function validExtras_06054(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};
  TYPE_CZECH_current_test_number = '06054';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
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

function validExtras_06055(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};
  TYPE_CZECH_current_test_number = '06055';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
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

function validExtras_06056(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
  valid_shape =      { a: [ { b:[ {c:'String'      } ] } ]};
  TYPE_CZECH_current_test_number = '06056';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06057(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ ["Harley-Davidson", "Electra-Glide"],
                          {"cyl":2,"stroke":4}, 
                           [2000, "red"],
                          {"percent":75,"max":500} ];
 const valid_shape =  [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"} ];
 TYPE_CZECH_current_test_number = '06057';
 error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06058(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ ["Harley-Davidson", "Electra-Glide"],
   {"cyl":2,"stroke":4}, 
     [2000, "red"],
    {"percent":75,"max":500}, 'bike'];
  valid_shape =  [  ["S"],  {cyl:"N", stroke:"N"},  ["N", "S"],  {percent:"N", max:"N"}, "S" ];
  TYPE_CZECH_current_test_number = '06058';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06059(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [ {x: 5},  {y: 1} ];
  valid_shape =  [ {x:"N"}, {y:"N"} ];
  TYPE_CZECH_current_test_number = '06059';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06060(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = [{"manu":"Harley-Davidson","model":"Electra-Glide"},{"cyl":2,"stroke":4},{"year":2000,"color":"red"},{"percent":75,"max":500},"bike"];
  valid_shape =  [  {manu:"S", model:"S"},  {cyl:"N", stroke:"N"},  {year:"N", color:"S"},  {percent:"N", max:"N"}, "S"];
  TYPE_CZECH_current_test_number = '06060';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06061(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ]};
  valid_shape =  { a: [ { b:[ {c:'S'     } ] } ]}; 
  TYPE_CZECH_current_test_number = '06061';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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

function validExtras_06062(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  valid_shape =  { a: [ { b:[ {c:'S'} ] } ], z:'N'};
  TYPE_CZECH_current_test_number = '06062';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@42 - Key 'z' was determined to be a 'Number' but was instead 'null'`,
  `{'a':[{'b':[{'c':'S'}]}],'z':'N'}`];
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

function validExtras_06063(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
  valid_shape =  { a: [ { b:[ {c:'S'} ] } ], z:'N'};
  TYPE_CZECH_current_test_number = '06063';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@41 - Key 'z' was given to be a 'Number' but was instead 'undefined'`,
  `{'a':[{'b':[{'c':'S'}]}],'z':'N'}`];
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

function validExtras_06064(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  valid_shape =  { a: [ { b:[ {c:'S'} ] } ], z:'N'};
  TYPE_CZECH_current_test_number = '06064';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@42 - Key 'z' was determined to be a 'Number' but was instead 'null'`,
  `{'a':[{'b':[{'c':'S'}]}],'z':'N'}`];
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

function validExtras_06065(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
  valid_shape =      { a: [ { b:[ {c:'S'      } ] } ]};
  TYPE_CZECH_current_test_number = '06065';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  ``;
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







function validExtras_06066(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = ['abc', 456];
  valid_shape = ["String", "Date"];
  TYPE_CZECH_current_test_number = '06066';
  error_id = errorLabel(TYPE_CZECH_current_test_number);

  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = [`validExtras(arguments, expected_types)`,
  `TC@44 -  INDEX '1' is assumed to be a 'Date', but is mistakenly a 'Number'.`,
  `['String','Date']`];
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












////////////////////////////////////////////////////////////////////////////////////////








function validExtras_06501_undef_ok(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = null
  valid_shape =  'String';
  TYPE_CZECH_current_test_number = '06501';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `The variable 'null', which is a 'null', is not a 'String'`,
  `String`];
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

function validExtras_06502_undef_ok(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = undefined
  valid_shape =  'undefined';
  TYPE_CZECH_current_test_number = '06502';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@17 - The type 'undefined' is not a valid type`,
  `undefined`];
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

function validExtras_06503_undef_ok(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'null'};
  TYPE_CZECH_current_test_number = '06503';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'null' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'null'}`];
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

function validExtras_06504_undef_ok(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:undefined};
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};
  TYPE_CZECH_current_test_number = '06504';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
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

function validExtras_06505_undef_ok(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef'} ] } ],  z:null};
  valid_shape =  { a: [ { b:[ {c:'String'} ] } ], z:'undefined'};   
  TYPE_CZECH_current_test_number = '06505';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array =  [`validExtras(arguments, expected_types)`,
  `TC@40 - The type 'undefined' is not valid`,
  `{'a':[{'b':[{'c':'String'}]}],'z':'undefined'}`];
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

function validExtras_06506_undef_ok(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS',                  'UNDEF-OK'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  check_object = { a: [ { b:[ {c:'abcdef', t:12} ] } ],  z:undefined};
	  	const valid_shape =      { a: [ { b:[ {c:'String'      } ] } ]};
      TYPE_CZECH_current_test_number = '06506';
      error_id = errorLabel(TYPE_CZECH_current_test_number);
  before_str = beforeCheck(check_object, valid_shape);
  actual_array = type_czech.validExtras(check_object, valid_shape);
  afterCheck(check_object, valid_shape, before_str, error_id);
  expected_array = ``;
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


