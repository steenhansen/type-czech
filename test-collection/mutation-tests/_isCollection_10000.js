/* eslint-disable */

//const fail_all_tests = true;

tested_is_collection = 0;
failed_is_collection = 0;

_isCollection_10001();
_isCollection_10002();
_isCollection_10003();

total_fails += failed_is_collection;
total_checks += tested_is_collection;

if (show_random) {
  console.log('_isCollection failed tests 10000', failed_is_collection)
  console.log('_isCollection passed tests 10000', tested_is_collection)
}

function _isCollection_10001(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '10001';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = [1]                   // TEST TEST
  } else {
    a_variable = 1;              // REAL TEST
  }
      
  actual = type_czech._isCollection(a_variable);
  expected = false;
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_is_collection ++;
                                              }
                                              tested_is_collection ++;

}

function _isCollection_10002(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '10002';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                  // TEST TEST
  } else {
    a_variable = {};              // REAL TEST
  }

  actual = type_czech._isCollection(a_variable);
  expected = true;
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_is_collection ++;
                                              }
                                              tested_is_collection ++;

}

function _isCollection_10003(){
  type_czech=TypeCzech('THROW-EXCEPTIONS', 'DEBUG-ERROR-TAGS'
  //, 'DEBUG-CONSOLE-TRACE'
  );
  TYPE_CZECH_current_test_number = '10003';
  error_id = errorLabel(TYPE_CZECH_current_test_number);
  if (typeof fail_all_tests!== 'undefined' && fail_all_tests) {
    a_variable = 1;                  // TEST TEST
  } else {
    a_variable = [];              // REAL TEST
  }
  actual = type_czech._isCollection(a_variable);
  expected = true;
  if (actual !== expected) {
    console.log(error_id);
    console.log('  actual=', actual);
    console.log('expected=', expected);
    }
    no_console_mess = '';
  
                                              if (actual !== expected) {
                                                failed_is_collection ++;
                                              }
                                              tested_is_collection ++;
}