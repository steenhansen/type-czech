/* eslint-disable */

tested_a_type_of = 0;
failed_a_type_of = 0;

_aTypeOf_09001();
_aTypeOf_09002();
_aTypeOf_09003();
_aTypeOf_09004();

_aTypeOf_09005();

_aTypeOf_09006();
_aTypeOf_09007();

_aTypeOf_09008();
_aTypeOf_09009();
_aTypeOf_09010();


total_fails += failed_a_type_of;
console.log('_aTypeOf failed tests', failed_a_type_of)

total_checks += tested_a_type_of;
console.log('_aTypeOf passed tests', tested_a_type_of)


function _aTypeOf_09001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = null;          
  actual = type_czech._aTypeOf(a_variable);
  expected = 'null';
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf(null) <> 'null' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = undefined;          
  actual = type_czech._aTypeOf(a_variable);
  expected = 'undefined';
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf(undefined) <> 'undefined' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = new Date;       
  actual = type_czech._aTypeOf(a_variable);
  expected = 'Date';
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf(new Date) <> 'Date' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09004(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09004';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = []; 
  actual = type_czech._aTypeOf(a_variable);
  expected = 'Array';
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf([]) <> 'Array' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09005(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09005';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = {}; 
  actual = type_czech._aTypeOf(a_variable);
  expected ="Object";
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf({}) <> 'Object' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09006(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09006';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = 'a_string'; 
  actual = type_czech._aTypeOf(a_variable);
  expected ="String";
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf('a_string') <> 'String' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09007(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09007';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = 567; 
  actual = type_czech._aTypeOf(a_variable);
  expected ="Number";
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf(567) <> 'Number' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09008(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09008';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = false; 
  actual = type_czech._aTypeOf(a_variable);
  expected ="Boolean";
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf(false) <> 'Boolean' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09009(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09009';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable =  Symbol('a_symbol'); 
  actual = type_czech._aTypeOf(a_variable);
  expected ="Symbol";
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf(Symbol('a_symbol')) <> 'Symbol' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}

function _aTypeOf_09010(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '09010';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable =  function(){}; 
  actual = type_czech._aTypeOf(a_variable);
  expected ="Function";
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _aTypeOf(a_variable) <> 'Function' but instead ${actual}`);
  }
  if (typeof failed_a_type_of !== 'undefined') {
    failed_a_type_of +=type_czech.failureTally();
    tested_a_type_of ++;
  }
}


