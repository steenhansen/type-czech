/* eslint-disable */

passed_is_collection = 0;
failed_is_collection = 0;

_isCollection_10001(10001);
_isCollection_10002(10002);
_isCollection_10003(10003);

total_fails += failed_is_collection;
console.log('_isCollection failed tests', failed_is_collection)

total_checks += passed_is_collection;
console.log('_isCollection passed tests', passed_is_collection)

function _isCollection_10001(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '10001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = 1;          
  actual = type_czech._isCollection(a_variable);
  expected = false;
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isCollection(null) <> false but instead ${actual}`);
  }
  if (typeof failed_is_collection !== 'undefined') {
    failed_is_collection +=type_czech.failureTally();
    passed_is_collection ++;
  }
}

function _isCollection_10002(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '10002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = {};          
  actual = type_czech._isCollection(a_variable);
  expected = true;
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isCollection(null) <> true but instead ${actual}`);
  }
  if (typeof failed_is_collection !== 'undefined') {
    failed_is_collection +=type_czech.failureTally();
    passed_is_collection ++;
  }
}

function _isCollection_10003(error_number){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '10003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  a_variable = [];          
  actual = type_czech._isCollection(a_variable);
  expected = true;
  if (actual!==expected) {           
    console.log("*EXPECTED*", expected);
    console.log("**ACTUAL**", actual);
    _throw(`${error_id} _isCollection(null) <> true but instead ${actual}`);
  }
  if (typeof failed_is_collection !== 'undefined') {
    failed_is_collection +=type_czech.failureTally();
    passed_is_collection ++;
  }
}